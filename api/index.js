// api/index.js — Servidor unificado para Railway
// Sirve: Frontend estático + REST (Groq + Foro) + WebSocket Multijugador
const express   = require('express');
const cors      = require('cors');
const fs        = require('fs');
const path      = require('path');
const http      = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const Groq = require('groq-sdk');

const app    = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Servir frontend estático desde /public
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR));

// ============================================================
// GROQ
// ============================================================
let groq;
try {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('✅ Groq inicializado');
} catch (err) {
  console.error('❌ Error Groq:', err.message);
}

// ============================================================
// BASE DE DATOS FORO
// ============================================================
const DB_PATH = path.join('/tmp', 'foro-db.json');

function readDB() {
  if (!fs.existsSync(DB_PATH))
    fs.writeFileSync(DB_PATH, JSON.stringify({ comments: [] }, null, 2));
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}
function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ============================================================
// API — CHAT IA
// ============================================================
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;
  if (!process.env.GROQ_API_KEY)
    return res.status(500).json({ error: 'Falta GROQ_API_KEY en variables de entorno de Railway' });
  if (!groq)
    return res.status(500).json({ error: 'Cliente Groq no inicializado' });
  try {
    const groqMessages = [];
    if (system) groqMessages.push({ role: 'system', content: system });
    messages.forEach(m => groqMessages.push({
      role: m.role === 'assistant' ? 'assistant' : m.role,
      content: m.content
    }));
    const completion = await groq.chat.completions.create({
      messages: groqMessages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
    });
    const reply = completion.choices[0]?.message?.content || '';
    if (!reply) return res.status(500).json({ error: 'Respuesta vacía de Groq' });
    res.json({ reply });
  } catch (err) {
    console.error('[/api/chat]', err);
    if (err.status === 401) return res.status(401).json({ error: 'API key inválida', details: err.message });
    if (err.status === 429) return res.status(429).json({ error: 'Límite alcanzado', details: err.message });
    res.status(500).json({ error: 'Error Groq', details: err.message });
  }
});

// ============================================================
// API — FORO
// ============================================================
app.get('/api/foro', (req, res) => {
  const db = readDB();
  const { epoch } = req.query;
  res.json(epoch && epoch !== 'general' ? db.comments.filter(c => c.epoch === epoch) : db.comments);
});

app.post('/api/foro', (req, res) => {
  const { user, text, epoch } = req.body;
  if (!user || !text || !epoch)
    return res.status(400).json({ error: 'Faltan campos: user, text, epoch' });
  const db = readDB();
  const comment = {
    id:   Date.now().toString(),
    user: user.substring(0, 40),
    text: text.substring(0, 800),
    epoch,
    date: new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' }),
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
  res.json({ status: 'OK', groqConfigured: !!process.env.GROQ_API_KEY, players: totalPlayers, ts: new Date().toISOString() });
});

// SPA fallback
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'No encontrado' });
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// ============================================================
// WEBSOCKET MULTIJUGADOR — v2.1
// ============================================================
// FIXES:
// - Guardar y enviar 'gender' en todos los mensajes de jugador
// - Enviar gender en init, playerJoined, playerSceneChange
// ============================================================

const wss = new WebSocket.Server({ server });
const rooms = new Map();

function getRoom(roomId) {
  if (!rooms.has(roomId))
    rooms.set(roomId, { players: new Map(), messages: [], lastActivity: Date.now() });
  return rooms.get(roomId);
}

function broadcast(roomId, message, excludeId = null) {
  getRoom(roomId).players.forEach((player, socketId) => {
    if (socketId !== excludeId && player.ws?.readyState === WebSocket.OPEN) {
      try { player.ws.send(JSON.stringify(message)); } catch(e) {}
    }
  });
}

function genId() {
  return Math.random().toString(36).substring(2,10) + Date.now().toString(36).substring(2,6);
}

// ============================================================
// HEARTBEAT Y LIMPIEZA
// ============================================================
const HEARTBEAT_INTERVAL = 10000;
const CLEANUP_INTERVAL = 15000;
const HEARTBEAT_TIMEOUT = 20000;

setInterval(() => {
  wss.clients.forEach(ws => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping(() => {});
  });
}, HEARTBEAT_INTERVAL);

setInterval(() => {
  const now = Date.now();
  rooms.forEach((room, roomId) => {
    const toRemove = [];
    room.players.forEach((p, id) => {
      if (now - p.timestamp > HEARTBEAT_TIMEOUT) toRemove.push(id);
    });
    toRemove.forEach(id => {
      const p = room.players.get(id);
      room.players.delete(id);
      if (p) {
        broadcast(roomId, { type: 'playerLeft', id, name: p.name || 'Anónimo' });
        console.log(`👻 Eliminado fantasma: ${p.name} de ${roomId}`);
      }
    });
  });
}, CLEANUP_INTERVAL);

wss.on('connection', (ws) => {
  const clientId = genId();
  let currentRoom = null;
  let playerName = 'Viajero';
  let playerGender = 'm';  // ← FIX: guardar género localmente
  let currentScene = 'ExteriorScene';

  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  console.log(`🔌 Conectado: ${clientId}`);

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);

      if (currentRoom) {
        const p = getRoom(currentRoom).players.get(clientId);
        if (p) p.timestamp = Date.now();
      }

      switch (msg.type) {

        case 'join': {
          playerName = msg.name || 'Viajero';
          playerGender = msg.gender || 'm';  // ← FIX: leer género del mensaje
          currentRoom = msg.room || 'exterior';
          currentScene = msg.scene || 'ExteriorScene';
          const room = getRoom(currentRoom);

          // Eliminar duplicados del mismo ID
          if (room.players.has(clientId)) {
            room.players.delete(clientId);
          }

          // ← FIX: Guardar gender en el objeto del jugador
          room.players.set(clientId, {
            id: clientId,
            name: playerName,
            gender: playerGender,  // ← FIX
            x: msg.x || 400,
            y: msg.y || 400,
            room: currentRoom,
            scene: currentScene,
            ws: ws,
            timestamp: Date.now()
          });

          // Enviar TODOS los jugadores de la sala (incluye gender)
          const allPlayers = [];
          room.players.forEach((p, id) => {
            if (id !== clientId) {
              // ← FIX: incluir gender en la lista de jugadores
              allPlayers.push({ 
                id: p.id, 
                name: p.name, 
                gender: p.gender || 'm',  // ← FIX
                x: p.x, 
                y: p.y, 
                scene: p.scene 
              });
            }
          });

          ws.send(JSON.stringify({
            type: 'init',
            id: clientId,
            players: allPlayers,
            messages: room.messages.slice(-20)
          }));

          // Notificar a TODOS en la sala que llegó un nuevo jugador (con gender)
          broadcast(currentRoom, {
            type: 'playerJoined',
            id: clientId,
            name: playerName,
            gender: playerGender,  // ← FIX
            x: msg.x || 400,
            y: msg.y || 400,
            scene: currentScene
          }, clientId);

          console.log(`👤 ${playerName} (${playerGender === 'f' ? '♀' : '♂'}) → ${currentRoom} / ${currentScene}`);
          break;
        }

        case 'move': {
          if (!currentRoom) return;
          const p = getRoom(currentRoom).players.get(clientId);
          if (p) {
            p.x = msg.x;
            p.y = msg.y;
            p.timestamp = Date.now();
            // Broadcast a TODOS en la sala (el cliente filtrará por escena)
            broadcast(currentRoom, {
              type: 'playerMoved',
              id: clientId,
              x: msg.x,
              y: msg.y,
              scene: p.scene
            }, clientId);
          }
          break;
        }

        case 'sceneChange': {
          if (!currentRoom) return;
          const room = getRoom(currentRoom);
          const player = room.players.get(clientId);
          if (!player) return;

          const oldScene = player.scene;
          player.scene = msg.scene || 'ExteriorScene';
          player.x = msg.x || 400;
          player.y = msg.y || 400;
          player.timestamp = Date.now();
          currentScene = msg.scene || 'ExteriorScene';

          // Notificar a TODOS en la sala del cambio de escena (con gender)
          broadcast(currentRoom, {
            type: 'playerSceneChange',
            id: clientId,
            name: playerName,
            gender: playerGender,  // ← FIX
            scene: currentScene,
            x: msg.x || 400,
            y: msg.y || 400
          }, clientId);

          // Responder al propio cliente con los jugadores ya presentes en la nueva escena
          const playersInNewScene = [];
          room.players.forEach((p, id) => {
            if (id !== clientId && p.scene === currentScene) {
              // ← FIX: incluir gender
              playersInNewScene.push({ 
                id: p.id, 
                name: p.name, 
                gender: p.gender || 'm',  // ← FIX
                x: p.x, 
                y: p.y, 
                scene: p.scene 
              });
            }
          });
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({
              type: 'sceneInit',
              players: playersInNewScene
            }));
          }

          console.log(`🔄 ${playerName} cambió escena: ${oldScene} → ${currentScene} (${playersInNewScene.length} jugadores presentes)`);
          break;
        }

        case 'chat': {
          if (!currentRoom) return;
          const room = getRoom(currentRoom);
          const p = room.players.get(clientId);
          const chatMsg = {
            id: genId(),
            senderId: clientId,
            name: playerName,
            text: msg.text,
            scene: p ? p.scene : currentScene,
            timestamp: Date.now()
          };
          room.messages.push(chatMsg);
          if (room.messages.length > 50) room.messages.shift();

          // Broadcast a TODOS en la sala (cliente filtra por escena)
          broadcast(currentRoom, {
            type: 'chatMessage',
            ...chatMsg
          });
          break;
        }

        case 'ping':
          ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
          break;
      }
    } catch(e) { console.error('WS msg error:', e.message); }
  });

  ws.on('close', () => {
    if (currentRoom) {
      const room = getRoom(currentRoom);
      const p = room.players.get(clientId);
      if (p) {
        room.players.delete(clientId);
        broadcast(currentRoom, {
          type: 'playerLeft',
          id: clientId,
          name: playerName
        });
        console.log(`👋 ${playerName} desconectado de ${currentRoom}`);
      }
    }
  });

  ws.on('error', err => console.error('WS error:', err.message));
});

console.log('🟢 WebSocket listo');

// ============================================================
// ARRANQUE
// ============================================================
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Puerto ${PORT}`);
  console.log(`🤖 Groq: ${process.env.GROQ_API_KEY ? '✅' : '❌ falta GROQ_API_KEY'}\n`);
});

module.exports = app;