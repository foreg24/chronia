// api/index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Groq = require('groq-sdk');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (solo en localhost)
if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) return;
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
}

// Inicializar Groq
let groq;
try {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('✅ Cliente Groq inicializado');
} catch (err) {
  console.error('❌ Error Groq:', err.message);
}

// Base de datos
const isVercel = process.env.VERCEL === '1';
const DB_PATH = isVercel 
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
// RUTAS API
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
    return res.status(500).json({ 
      error: 'Cliente Groq no inicializado correctamente' 
    });
  }

  try {
    // Convertir mensajes al formato OpenAI/Groq
    const groqMessages = [];
    
    // System prompt como primer mensaje
    if (system) {
      groqMessages.push({ role: 'system', content: system });
    }
    
    // Mapear historial: 'assistant' → 'assistant', 'user' → 'user'
    messages.forEach(m => {
      groqMessages.push({
        role: m.role === 'assistant' ? 'assistant' : m.role,
        content: m.content
      });
    });

    const modelName = 'llama-3.3-70b-versatile';
    // Alternativas disponibles en Groq:
    // 'llama-3.1-8b-instant'      (más rápido, más barato)
    // 'llama-3.3-70b-versatile'   (recomendado, buen balance)
    // 'meta-llama/llama-4-scout-17b-16e-instruct' (más reciente)

    console.log(`[Groq] Enviando ${groqMessages.length} mensajes al modelo ${modelName}`);

    const completion = await groq.chat.completions.create({
      messages: groqMessages,
      model: modelName,
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
    
    if (err.status === 401 || err.message?.includes('auth')) {
      return res.status(401).json({ 
        error: 'API key inválida. Verifica tu GROQ_API_KEY en .env',
        details: err.message 
      });
    }
    
    if (err.status === 429 || err.message?.includes('rate limit')) {
      return res.status(429).json({ 
        error: 'Límite de uso alcanzado. Intenta más tarde.',
        details: err.message 
      });
    }

    if (err.status === 404 || err.message?.includes('model')) {
      return res.status(400).json({ 
        error: 'Modelo no encontrado o no disponible.',
        details: err.message 
      });
    }
    
    res.status(500).json({ 
      error: 'Error conectando con Groq',
      details: err.message
    });
  }
});

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
    return res.status(400).json({ 
      error: 'Faltan campos: user, text, epoch' 
    });
  }
  
  const db = readDB();
  const comment = {
    id:    Date.now().toString(),
    user:  user.substring(0, 40),
    text:  text.substring(0, 800),
    epoch,
    date:  new Date().toLocaleString('es-CO', { 
      dateStyle: 'short', 
      timeStyle: 'short' 
    }),
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
  res.json({
    status: 'OK',
    groqConfigured: !!process.env.GROQ_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// ============================================================
// MODO LOCAL
// ============================================================

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
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