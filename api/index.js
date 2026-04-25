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
// BASE DE DATOS FORO (usa /tmp — funciona en Railway y Vercel)
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
// WEBSOCKET MULTIJUGADOR
// ============================================================
const wss = new WebSocket.Server({ server });
const rooms = new Map();

['exterior','casa','futuristic','selector','epoch'].forEach(id => {
  rooms.set(id, { players: new Map(), messages: [], lastActivity: Date.now() });
});

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

setInterval(() => {
  const now = Date.now();
  rooms.forEach((room, roomId) => {
    const toRemove = [];
    room.players.forEach((p, id) => { if (now - p.timestamp > 60000) toRemove.push(id); });
    toRemove.forEach(id => {
      const p = room.players.get(id);
      room.players.delete(id);
      broadcast(roomId, { type: 'playerLeft', id, name: p?.name || 'Anónimo' });
    });
  });
}, 30000);

wss.on('connection', (ws) => {
  const clientId = genId();
  let currentRoom = null, playerName = 'Viajero', currentScene = 'ExteriorScene';
  console.log(`🔌 ${clientId}`);

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      switch (msg.type) {

        case 'join': {
          playerName = msg.name || 'Viajero';
          currentRoom = msg.room || 'exterior';
          currentScene = msg.scene || 'ExteriorScene';
          const room = getRoom(currentRoom);
          room.players.set(clientId, { id: clientId, name: playerName, x: msg.x||400, y: msg.y||400, room: currentRoom, scene: currentScene, ws, timestamp: Date.now() });
          const existing = [];
          room.players.forEach((p,id) => { if(id!==clientId) existing.push({id:p.id,name:p.name,x:p.x,y:p.y,scene:p.scene}); });
          ws.send(JSON.stringify({ type:'init', id:clientId, players:existing, messages:room.messages.slice(-20) }));
          broadcast(currentRoom, { type:'playerJoined', id:clientId, name:playerName, x:msg.x||400, y:msg.y||400, scene:currentScene }, clientId);
          console.log(`👤 ${playerName} → ${currentRoom}`);
          break;
        }

        case 'move': {
          if (!currentRoom) return;
          const p = getRoom(currentRoom).players.get(clientId);
          if (p) { p.x=msg.x; p.y=msg.y; p.timestamp=Date.now(); broadcast(currentRoom,{type:'playerMoved',id:clientId,x:msg.x,y:msg.y},clientId); }
          break;
        }

        case 'sceneChange': {
          if (!currentRoom) return;
          const old = getRoom(currentRoom);
          old.players.delete(clientId);
          broadcast(currentRoom, { type:'playerLeft', id:clientId, name:playerName }, clientId);
          currentRoom = msg.room||'exterior'; currentScene = msg.scene||'ExteriorScene';
          const nr = getRoom(currentRoom);
          nr.players.set(clientId, { id:clientId,name:playerName,x:msg.x||400,y:msg.y||400,room:currentRoom,scene:currentScene,ws,timestamp:Date.now() });
          const np = [];
          nr.players.forEach((p,id)=>{ if(id!==clientId) np.push({id:p.id,name:p.name,x:p.x,y:p.y,scene:p.scene}); });
          ws.send(JSON.stringify({ type:'init',id:clientId,players:np,messages:nr.messages.slice(-20) }));
          broadcast(currentRoom, { type:'playerJoined',id:clientId,name:playerName,x:msg.x||400,y:msg.y||400,scene:currentScene }, clientId);
          console.log(`🔄 ${playerName} → ${currentRoom}`);
          break;
        }

        case 'chat': {
          if (!currentRoom) return;
          const room = getRoom(currentRoom);
          const chatMsg = { id:genId(),senderId:clientId,name:playerName,text:msg.text,timestamp:Date.now() };
          room.messages.push(chatMsg);
          if (room.messages.length > 50) room.messages.shift();
          broadcast(currentRoom, { type:'chatMessage', ...chatMsg });
          break;
        }

        case 'ping':
          ws.send(JSON.stringify({ type:'pong', timestamp:Date.now() }));
          break;
      }
    } catch(e) { console.error('WS msg error:', e.message); }
  });

  ws.on('close', () => {
    if (currentRoom) {
      getRoom(currentRoom).players.delete(clientId);
      broadcast(currentRoom, { type:'playerLeft', id:clientId, name:playerName });
      console.log(`👋 ${playerName} desconectado`);
    }
  });

  ws.on('error', err => console.error('WS error:', err.message));
});

console.log('🟢 WebSocket listo');

// ============================================================
// ARRANQUE — Railway usa process.env.PORT automáticamente
// ============================================================
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Puerto ${PORT}`);
  console.log(`🤖 Groq: ${process.env.GROQ_API_KEY ? '✅' : '❌ falta GROQ_API_KEY'}\n`);
});

module.exports = app;