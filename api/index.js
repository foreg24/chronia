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

// IMPORTANTE: Servir estáticos desde /public en producción
// En Vercel, los archivos en /public se sirven automáticamente,
// pero para localhost necesitas esto:
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '..', 'public')));
}

// ... resto de tu código de rutas API ...

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// Para Vercel: exportar app
module.exports = app;

// Para localhost: iniciar servidor
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Local: http://localhost:${PORT}`);
  });
}