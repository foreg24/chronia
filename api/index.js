// api/index.js — Servidor unificado: REST (Groq + Foro) + WebSocket Multijugador
const express  = require('express');
const cors     = require('cors');
const fs       = require('fs');
const path     = require('path');
const http     = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const Groq = require('groq-sdk');

const app = express();

// ============================================================
// MIDDLEWARE
// ============================================================
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend (solo en local)
if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) return;
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
}

// ============================================================
// GROQ
// ============================================================
let groq;
try {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('✅ Cliente Groq inicializado');
} catch (err) {
  console.error('❌ Error Groq:', err.message);
}

// ============================================================
// BASE DE DATOS FORO
// ============================================================
const isVercel = process.env.VERCEL === '1';
const DB_PATH  = isVercel
  ? path.join('/tmp', 'foro-db.json')
  : path.join(__dirname, '..', 'backend', 'database', 'foro-db.json');

if (!isVercel) {
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
}

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ comments: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ============================================================
// RUTAS API — CHAT IA
// ============================================================
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({
      error: 'Falta GROQ_API_KEY en .env',
      hint: 'Crea un archivo .env con: GROQ_API_KEY=tu_clave'
    });
  }
  if (!groq) {
    return res.status(500).json({ error: 'Cliente Groq no inicializado correctamente' });
  }

  try {
    const groqMessages = [];
    if (system) groqMessages.push({ role: 'system', content: system });
    messages.forEach(m => {
      groqMessages.push({ role: m.role === 'assistant' ? 'assistant' : m.role, content: m.content });
    });

    const modelName = 'llama-3.3-70b-versatile';
    console.log(`[Groq] Enviando ${groqMessages.length} mensajes al modelo ${modelName}`);

    const completion = await groq.chat.completions.create({
      messages: groqMessages,
      model:    modelName,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
    });

    const reply = completion.choices[0]?.message?.content || '';
    if (!reply) {
      console.error('[Groq] Respuesta vacía:', completion);
      return res.status(500).json({ error: 'Respuesta vacía de Groq' });
    }

    console.log(`[Groq] Respuesta recibida (${reply.length} chars)`);
    res.json({ reply });

  } catch (err) {
    console.error('[/api/chat] Error:', err);
    if (err.status === 401 || err.message?.includes('auth'))
      return res.status(401).json({ error: 'API key inválida.', details: err.message });
    if (err.status === 429 || err.message?.includes('rate limit'))
      return res.status(429).json({ error: 'Límite de uso alcanzado.', details: err.message });
    if (err.status === 404 || err.message?.includes('model'))
      return res.status(400).json({ error: 'Modelo no encontrado.', details: err.message });
    res.status(500).json({ error: 'Error conectando con Groq', details: err.message });
  }
});

// ============================================================
// RUTAS API — FORO
// ============================================================
app.get('/api/foro', (req, res) => {
  const db = readDB();
  const { epoch } = req.query;
  const filtered = epoch && epoch !== 'general'
    ? db.comments.filter(c => c.epoch === epoch)
    : db.comments;
  res.json(filtered);
});

app.post('/api/foro', (req, res) => {
  const { user, text, epoch } = req.body;
  if (!user || !text || !epoch) {
    return res.status(400).json({ error: 'Faltan campos: user, text, epoch' });
  }
  const db      = readDB();
  const comment = {
    id:    Date.now().toString(),
    user:  user.substring(0, 40),
    text:  text.substring(0, 800),
    epoch,
    date:  new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' }),
  };
  db.comments.unshift(comment);
  if (db.comments.length > 500) db.comments = db.comments.slice(0, 500);
  writeDB(db);
  res.json(comment);
});

app.delete('/api/foro/:id', (req, res) => {
  const db = readDB();
  db.comments = db.comments.filter(c => c.id !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

app.get('/api/health', (req, res) => {
  const totalPlayers = [...rooms.values()].reduce((sum, r) => sum + r.players.size, 0);
  res.json({
    status: 'OK',
    groqConfigured: !!process.env.GROQ_API_KEY,
    multiplayerPlayers: totalPlayers,
    timestamp: new Date().toISOString()
  });
});

// ============================================================
// SERVIDOR HTTP + WEBSOCKET MULTIJUGADOR
// ============================================================
const server = http.createServer(app);

// En Vercel el WebSocket no está disponible, solo levantar localmente
let wss = null;

if (!isVercel) {

  wss = new WebSocket.Server({ server });

  // --- Estado del mundo multijugador ---
  const rooms = new Map();
  const ROOM_NAMES = {
    exterior:   'Casa de Campo',
    casa:       'Casa Rústica',
    futuristic: 'Habitación Futurista',
    selector:   'Selector de Épocas',
    epoch:      'Época Histórica'
  };

  Object.keys(ROOM_NAMES).forEach(roomId => {
    rooms.set(roomId, { players: new Map(), messages: [], lastActivity: Date.now() });
  });

  function getRoom(roomId) {
    if (!rooms.has(roomId)) {
      rooms.set(roomId, { players: new Map(), messages: [], lastActivity: Date.now() });
    }
    return rooms.get(roomId);
  }

  function broadcast(roomId, message, excludeId = null) {
    const room = getRoom(roomId);
    room.players.forEach((player, socketId) => {
      if (socketId !== excludeId && player.ws && player.ws.readyState === WebSocket.OPEN) {
        try { player.ws.send(JSON.stringify(message)); }
        catch (e) { console.error('Error enviando a', socketId, e.message); }
      }
    });
  }

  function genId() {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36).substring(2, 6);
  }

  // Limpiar jugadores inactivos cada 30 s
  setInterval(() => {
    const now = Date.now();
    rooms.forEach((room, roomId) => {
      const toRemove = [];
      room.players.forEach((player, socketId) => {
        if (now - player.timestamp > 60000) toRemove.push(socketId);
      });
      toRemove.forEach(socketId => {
        const player = room.players.get(socketId);
        room.players.delete(socketId);
        broadcast(roomId, { type: 'playerLeft', id: socketId, name: player?.name || 'Anónimo' });
        console.log(`🚪 Jugador expirado: ${player?.name || 'Anónimo'} de ${roomId}`);
      });
    });
  }, 30000);

  wss.on('connection', (ws) => {
    const clientId    = genId();
    let currentRoom   = null;
    let playerName    = 'Viajero';
    let currentScene  = 'ExteriorScene';

    console.log(`🔌 Nueva conexión: ${clientId}`);

    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data);

        switch (msg.type) {

          case 'join': {
            playerName   = msg.name  || 'Viajero';
            currentRoom  = msg.room  || 'exterior';
            currentScene = msg.scene || 'ExteriorScene';

            const room = getRoom(currentRoom);
            room.players.set(clientId, {
              id: clientId, name: playerName,
              x: msg.x || 400, y: msg.y || 400,
              room: currentRoom, scene: currentScene,
              ws, timestamp: Date.now()
            });

            const existingPlayers = [];
            room.players.forEach((p, id) => {
              if (id !== clientId) {
                existingPlayers.push({ id: p.id, name: p.name, x: p.x, y: p.y, scene: p.scene });
              }
            });

            ws.send(JSON.stringify({
              type: 'init', id: clientId,
              players: existingPlayers,
              messages: room.messages.slice(-20)
            }));

            broadcast(currentRoom, {
              type: 'playerJoined', id: clientId, name: playerName,
              x: msg.x || 400, y: msg.y || 400, scene: currentScene
            }, clientId);

            console.log(`👤 ${playerName} entró a ${currentRoom}`);
            break;
          }

          case 'move': {
            if (!currentRoom) return;
            const room   = getRoom(currentRoom);
            const player = room.players.get(clientId);
            if (player) {
              player.x = msg.x; player.y = msg.y;
              player.timestamp = Date.now();
              broadcast(currentRoom, { type: 'playerMoved', id: clientId, x: msg.x, y: msg.y }, clientId);
            }
            break;
          }

          case 'sceneChange': {
            if (!currentRoom) return;

            const oldRoom = getRoom(currentRoom);
            oldRoom.players.delete(clientId);
            broadcast(currentRoom, { type: 'playerLeft', id: clientId, name: playerName }, clientId);

            currentRoom  = msg.room  || 'exterior';
            currentScene = msg.scene || 'ExteriorScene';
            const newRoom = getRoom(currentRoom);

            newRoom.players.set(clientId, {
              id: clientId, name: playerName,
              x: msg.x || 400, y: msg.y || 400,
              room: currentRoom, scene: currentScene,
              ws, timestamp: Date.now()
            });

            const newPlayers = [];
            newRoom.players.forEach((p, id) => {
              if (id !== clientId) {
                newPlayers.push({ id: p.id, name: p.name, x: p.x, y: p.y, scene: p.scene });
              }
            });

            ws.send(JSON.stringify({
              type: 'init', id: clientId,
              players: newPlayers,
              messages: newRoom.messages.slice(-20)
            }));

            broadcast(currentRoom, {
              type: 'playerJoined', id: clientId, name: playerName,
              x: msg.x || 400, y: msg.y || 400, scene: currentScene
            }, clientId);

            console.log(`🔄 ${playerName} cambió a ${currentRoom}`);
            break;
          }

          case 'chat': {
            if (!currentRoom) return;
            const room    = getRoom(currentRoom);
            const chatMsg = {
              id: genId(), senderId: clientId, name: playerName,
              text: msg.text, timestamp: Date.now()
            };
            room.messages.push(chatMsg);
            if (room.messages.length > 50) room.messages.shift();
            broadcast(currentRoom, { type: 'chatMessage', ...chatMsg });
            break;
          }

          case 'ping': {
            ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
            break;
          }
        }
      } catch (e) {
        console.error('Error procesando mensaje WS:', e.message);
      }
    });

    ws.on('close', () => {
      if (currentRoom) {
        const room = getRoom(currentRoom);
        room.players.delete(clientId);
        broadcast(currentRoom, { type: 'playerLeft', id: clientId, name: playerName });
        console.log(`👋 ${playerName} desconectado de ${currentRoom}`);
      }
    });

    ws.on('error', (err) => console.error('WebSocket error:', err.message));
  });

  console.log('🟢 Servidor WebSocket multijugador integrado');
} else {
  console.log('☁️  Vercel detectado — WebSocket deshabilitado (usa servidor separado)');
}

// ============================================================
// ARRANQUE LOCAL
// ============================================================
if (!isVercel) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`\n🚀 Servidor unificado corriendo en http://localhost:${PORT}`);
    console.log(`🎮 WebSocket multijugador: ws://localhost:${PORT}`);
    console.log(`📁 Base de datos: ${DB_PATH}`);
    console.log(`🤖 Groq API:      http://localhost:${PORT}/api/chat`);
    console.log(`💬 Foro:          http://localhost:${PORT}/api/foro`);
    console.log(`🔍 Health check:  http://localhost:${PORT}/api/health\n`);

    if (!process.env.GROQ_API_KEY) {
      console.warn('⚠️  ADVERTENCIA: No se encontró GROQ_API_KEY');
      console.warn('   Crea un archivo .env con: GROQ_API_KEY=gsk_...\n');
    } else {
      console.log('✅ GROQ_API_KEY configurada');
    }
  });
}

module.exports = app;