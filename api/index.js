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

// ============================================
// ARCHIVOS ESTÁTICOS — SIEMPRE (tanto local como Vercel)
// ============================================
app.use(express.static(path.join(__dirname, '..', 'public')));

// SPA fallback para rutas no-API
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Inicializar Groq
let groq;
try {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('✅ Cliente Groq inicializado');
} catch (err) {
  console.error('❌ Error Groq:', err.message);
}

// ... resto de tu código (rutas /api/chat, /api/foro, etc.) ...

// ============================================
// MODO LOCAL (solo cuando no está en Vercel)
// ============================================
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;