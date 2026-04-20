// api/index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { GoogleGenAI } = require('@google/genai');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Inicializar Gemini
let genAI;
try {
  genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  console.log('✅ Cliente Gemini inicializado');
} catch (err) {
  console.error('❌ Error Gemini:', err.message);
}

// Base de datos (en /tmp para Vercel, local para desarrollo)
const isVercel = process.env.VERCEL === '1';
const DB_PATH = isVercel 
  ? path.join('/tmp', 'foro-db.json')
  : path.join(__dirname, '..', 'backend', 'database', 'foro-db.json');

// Asegurar que existe el directorio local
if (!isVercel) {
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
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
// RUTAS API COMPLETAS (copia tu lógica de server.js original)
// ============================================================

app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ 
      error: 'Falta GEMINI_API_KEY en .env',
      hint: 'Crea un archivo .env con: GEMINI_API_KEY=tu_clave'
    });
  }

  if (!genAI) {
    return res.status(500).json({ 
      error: 'Cliente Gemini no inicializado correctamente' 
    });
  }

  try {
    const geminiContents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : m.role,
      parts: [{ text: m.content }]
    }));

    const modelName = 'gemini-2.5-flash';

    console.log(`[Gemini] Enviando ${geminiContents.length} mensajes al modelo ${modelName}`);

    const result = await genAI.models.generateContent({
      model: modelName,
      contents: geminiContents,
      config: {
        systemInstruction: system || '',
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    const reply = result.text || '';

    if (!reply) {
      console.error('[Gemini] Respuesta vacía:', result);
      return res.status(500).json({ error: 'Respuesta vacía de Gemini' });
    }

    console.log(`[Gemini] Respuesta recibida (${reply.length} chars)`);
    res.json({ reply });

  } catch (err) {
    console.error('[/api/chat] Error:', err);
    
    if (err.message?.includes('API key not valid')) {
      return res.status(401).json({ 
        error: 'API key inválida. Verifica tu GEMINI_API_KEY en .env',
        details: err.message 
      });
    }
    
    if (err.message?.includes('quota') || err.status === 429) {
      return res.status(429).json({ 
        error: 'Límite de uso gratuito alcanzado. Intenta más tarde.',
        details: err.message 
      });
    }

    if (err.message?.includes('model')) {
      return res.status(400).json({ 
        error: 'Modelo no encontrado o no disponible.',
        details: err.message 
      });
    }
    
    res.status(500).json({ 
      error: 'Error conectando con Gemini',
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
  
  if (db.comments.length > 500) {
    db.comments = db.comments.slice(0, 500);
  }
  
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
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// ============================================================
// MODO LOCAL: app.listen() | MODO VERCEL: module.exports
// ============================================================

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  // Modo desarrollo local - servidor tradicional
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📁 Base de datos: ${DB_PATH}`);
    console.log(`🤖 Gemini API:    http://localhost:${PORT}/api/chat`);
    console.log(`💬 Foro:          http://localhost:${PORT}/api/foro`);
    console.log(`🔍 Health check:  http://localhost:${PORT}/api/health\n`);
    
    if (!process.env.GEMINI_API_KEY) {
      console.warn('⚠️  ADVERTENCIA: No se encontró GEMINI_API_KEY');
      console.warn('   Crea un archivo .env con: GEMINI_API_KEY=tu_clave_aqui\n');
    } else {
      console.log('✅ GEMINI_API_KEY configurada');
    }
  });
}

// Exportar para Vercel (siempre debe estar al final)
module.exports = app;