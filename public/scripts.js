/* =============================================================
   DATOS — 8 épocas con coordenadas corregidas según puntos rojos
   ============================================================= */
const EPOCHS = [
  {
    id:'mesopotamia', name:'Mesopotamia', period:'~3500–500 a.C.',
    type:'mesopotamia', mx:61.7, my:29.6,  // Medio Oriente (Irak)
    color:'#d4a574', icon:'🏺',
    summary:'Los orígenes: ábacos de arcilla, tablillas cuneiformes y los primeros sistemas matemáticos que prefiguran la computación.',
    authors:['Sumerios','Babilonios','Acadios'],
    advances:['Ábaco primitivo de arcilla','Sistema sexagesimal (base 60)','Tablillas cuneiformes','Cálculo geométrico agrícola'],
    materials:[{title:'Matemáticas Mesopotámicas',type:'pdf',size:'2.4 MB'},{title:'Ábacos y Computación Primitiva',type:'video',size:'150 MB'}]
  },
  {
    id:'egipto', name:'Egipto', period:'~3000–30 a.C.',
    type:'egipto', mx:54.1, my:33.2,  // Egipto/Nilo
    color:'#e8c85a', icon:'🔺',
    summary:'Geometría aplicada para las pirámides, calendarios astronómicos y el Papiro de Ahmes: el primer documento de problemas matemáticos resueltos.',
    authors:['Imhotep','Ahmes','Senedjem'],
    advances:['Fracciones egipcias (Ojo de Horus)','Geometría para arquitectura','Calendarios astronómicos','Papiro de Ahmes — 84 problemas'],
    materials:[{title:'Papiro de Ahmes — Análisis',type:'pdf',size:'5.1 MB'},{title:'Construcción de Pirámides',type:'video',size:'200 MB'}]
  },
  {
    id:'grecia', name:'Grecia', period:'~800–31 a.C.',
    type:'grecia', mx:50.9, my:23.5,  // Grecia/península balcánica
    color:'#f0e6d2', icon:'🏛️',
    summary:'La cuna del pensamiento lógico y matemático. El Mecanismo de Anticitera (150-100 a.C.) es considerada la primera computadora analógica de la historia.',
    authors:['Arquímedes','Euclides','Ptolomeo','Hipatia'],
    advances:['Mecanismo de Anticitera — primera computadora analógica','Geometría euclidiana','Teorema de Pitágoras','Ástrolabio y astronomía computacional'],
    materials:[{title:'El Mecanismo de Anticitera',type:'pdf',size:'4.8 MB'},{title:'Matemáticas Griegas',type:'video',size:'180 MB'},{title:'Arquímedes y la Computación',type:'slides',size:'8 MB'}]
  },
  {
    id:'edadmedia', name:'Edad Media', period:'476–1400 d.C.',
    type:'edadmedia', mx:57, my:28.4,  // Jerusalén/Medio Oriente
    color:'#9c7c4a', icon:'🏰',
    summary:'Preservación del conocimiento clásico en monasterios, álgebra árabe y los primeros relojes mecánicos que anticipan la computación.',
    authors:['Al-Khwarizmi','Al-Biruni','Roger Bacon','Fibonacci'],
    advances:['Álgebra sistemática (Al-Jabr)','Numeración posicional decimal','Relojes mecánicos','Números de Fibonacci'],
    materials:[{title:'Al-Khwarizmi y el Álgebra',type:'pdf',size:'4.1 MB'},{title:'Edad Media y la Ciencia',type:'video',size:'180 MB'}]
  },
  {
    id:'era1300', name:'1300–1700', period:'1300–1700',
    type:'era1300', mx:50, my:18.5,  // Europa Central (Alemania/Italia)
    color:'#c08840', icon:'⚙️',
    summary:'Renacimiento científico: la imprenta, Leibniz, Pascal y las primeras calculadoras mecánicas. El cálculo diferencial y el código binario abren el camino.',
    authors:['Leibniz','Pascal','Napier','Galileo','Descartes'],
    advances:['Pascalina — primera calculadora mecánica','Cálculo diferencial (Newton/Leibniz)','Logaritmos (Napier)','Código binario (Leibniz)'],
    materials:[{title:'La Pascalina y sus sucesoras',type:'pdf',size:'3.5 MB'},{title:'Leibniz y el Cálculo',type:'slides',size:'6 MB'}]
  },
  {
    id:'era1700', name:'1700–1900', period:'1700–1900',
    type:'era1700', mx:46, my:20.4,  // Francia/Europa occidental
    color:'#8fa8c0', icon:'🏭',
    summary:'Revolución Industrial: la máquina analítica de Babbage, los telares de Jacquard y el primer algoritmo escrito por Ada Lovelace.',
    authors:['Charles Babbage','Ada Lovelace','J.M. Jacquard','George Boole'],
    advances:['Máquina Analítica de Babbage','Tarjetas perforadas (Jacquard)','Primer algoritmo programable (Ada)','Álgebra booleana'],
    materials:[{title:'Ada Lovelace — Primera Programadora',type:'pdf',size:'3.8 MB'},{title:'Máquinas de Babbage',type:'video',size:'250 MB'},{title:'Exposición: Rev. Industrial',type:'slides',size:'10 MB'}]
  },
  {
    id:'sigloxx', name:'Siglo XX', period:'1900–2000',
    type:'sigloxx', mx:19.4, my:28.3,  // Estados Unidos (este)
    color:'#00d4aa', icon:'💻',
    summary:'Electrónica, computadoras digitales, lenguajes de programación y el nacimiento formal de la informática. Turing, von Neumann y Hopper lo cambian todo.',
    authors:['Alan Turing','Grace Hopper','John von Neumann','Claude Shannon'],
    advances:['Máquina de Turing (1936)','Arquitectura von Neumann','COBOL, FORTRAN, LISP','Teoría de la Información (Shannon)'],
    materials:[{title:'Computación — Siglo XX',type:'pdf',size:'8.5 MB'},{title:'Historia de los Lenguajes',type:'video',size:'300 MB'}]
  },
  {
    id:'sigloxxi', name:'Siglo XXI', period:'2000–hoy',
    type:'sigloxxi', mx:10.2, my:30.3,  // California (oeste EEUU)
    color:'#00f5ff', icon:'🌐',
    summary:'Internet, IA, computación en la nube, DevOps y el futuro del software. Del World Wide Web al aprendizaje profundo y la computación cuántica.',
    authors:['Tim Berners-Lee','Geoffrey Hinton','Linus Torvalds','Yann LeCun'],
    advances:['World Wide Web (1991)','Aprendizaje profundo y redes neuronales','Computación cuántica (emergente)','DevOps y CI/CD moderno'],
    materials:[{title:'Introducción a la IA',type:'pdf',size:'12 MB'},{title:'Historia de Internet',type:'video',size:'450 MB'},{title:'Exposición: Era Digital',type:'slides',size:'14 MB'}]
  }
];

const COURSE_MATERIAL = `MATERIAL DEL CURSO — Introducción a la Ingeniería de Software

MESOPOTAMIA (~3500 a.C.):
Los sumerios inventaron el ábaco de arcilla. Sistema sexagesimal (base 60) — aún usado en horas y grados. Tablillas cuneiformes para registrar datos.

EGIPTO (~3000 a.C.):
Papiro de Ahmes (Papiro de Rhind): 84 problemas matemáticos resueltos, circa 1650 a.C. Imhotep diseñó la pirámide de Djoser. Fracciones unitarias (Ojo de Horus).

GRECIA (~800–31 a.C.):
El Mecanismo de Anticitera (150-100 a.C.) es la primera computadora analógica conocida. Arquímedes desarrolló métodos de cálculo anticipando el cálculo integral. Euclides sistematizó la geometría. Pitágoras estableció bases del razonamiento lógico-matemático.

EDAD MEDIA (476–1400 d.C.):
Al-Khwarizmi escribió "Al-Jabr" (~820 d.C.) — origen de "álgebra" y "algoritmo". Fibonacci introdujo la numeración arábiga en Europa. Relojes mecánicos como primeras máquinas de medición precisa.

1300–1700:
Blaise Pascal: Pascalina (1642). Leibniz: código binario + Stepped Reckoner (1673). Newton/Leibniz: cálculo diferencial. Napier: logaritmos (1614).

1700–1900:
Jacquard: telar programable con tarjetas perforadas (1804). Babbage: Máquina Diferencial y Analítica (concepto CPU/memoria). Ada Lovelace: primer algoritmo para máquina (1843). Boole: álgebra booleana (1854).

SIGLO XX (1900–2000):
Alan Turing: Máquina de Turing (1936). Claude Shannon: Teoría de la Información (1948). John von Neumann: arquitectura moderna (1945). Grace Hopper: primer compilador, contribuyó a COBOL. FORTRAN (1957), LISP (1958), COBOL (1959).

SIGLO XXI (2000–hoy):
Tim Berners-Lee: World Wide Web (1991). Linus Torvalds: Linux (1991). Aprendizaje profundo (Hinton, LeCun): revolución IA desde 2012. Metodologías ágiles: Scrum, Kanban, DevOps. Computación cuántica emergente.
`;

/* =============================================================
   ESTADO GLOBAL
   ============================================================= */
let currentEpoch = null;
let ragMode      = false;
let chatHistory  = [];
let isBusy       = false;
let foroFilter   = 'general';
let currentView  = 'map';
let gameInstance = null;  // Instancia del juego Phaser
let audioEnabled = true;
let bgMusic      = null;  // Música de fondo
let audioCtx     = null;

/* =============================================================
   SISTEMA DE AUDIO MEJORADO
   ============================================================= */
/* =============================================================
   SISTEMA DE AUDIO MEJORADO
   ============================================================= */
let musicSequence = null;
let bgGain = null;
let musicEnabled = false;

function createChiptuneNote(freq, time, duration, type = 'square', vol = 0.06) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  
  osc.type = type;
  osc.frequency.setValueAtTime(freq, time);
  
  // Vibrato ligero estilo NES
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 6;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = freq * 0.01;
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  lfo.start(time);
  lfo.stop(time + duration);
  
  // Envelope tipo 8-bit
  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(vol, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(vol * 0.3, time + duration * 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
  
  filter.type = 'lowpass';
  filter.frequency.value = 3500;
  filter.Q.value = 0.5;
  
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(time);
  osc.stop(time + duration);
  
  // Cleanup de nodos LFO para evitar memory leaks
  lfo.onended = () => {
    lfo.disconnect();
    lfoGain.disconnect();
  };
}

async function initBackgroundMusic() {
  if (musicSequence) return;

  const ctx = getAudioCtx();
  
  // Resume AudioContext si está suspendido (requerido en Chrome/Safari)
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }

  try {
    const res = await fetch("assets/bgMusic-chronia.mp3");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.arrayBuffer();
    const buffer = await ctx.decodeAudioData(data);

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const gain = ctx.createGain();
    gain.gain.value = 0.2;

    source.connect(gain);
    gain.connect(ctx.destination);

    source.start(0, 4.4);

    musicSequence = source;
    bgGain = gain;
    
    // Cuando termine (aunque sea loop, por si se detiene el loop)
    source.onended = () => {
      source.disconnect();
      gain.disconnect();
    };
    
  } catch (err) {
    console.error('Error cargando música:', err);
    toast('No se pudo cargar la música', 'error');
  }
}

function stopBackgroundMusic() {
  if (musicSequence && bgGain) {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    
    // Fade out suave en lugar de clearTimeout (que no funciona con AudioNodes)
    bgGain.gain.cancelScheduledValues(now);
    bgGain.gain.setValueAtTime(bgGain.gain.value, now);
    bgGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    
    // Detener la fuente después del fade
    musicSequence.stop(now + 0.6);
    
    // Cleanup
    setTimeout(() => {
      if (musicSequence) {
        musicSequence.disconnect();
        musicSequence = null;
      }
      if (bgGain) {
        bgGain.disconnect();
        bgGain = null;
      }
    }, 700);
  }
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  const btn = document.getElementById('music-control');
  
  if (btn) {
    btn.textContent = '🎵';
    btn.classList.toggle('muted', !musicEnabled);
  }
  
  if (musicEnabled) {
    initBackgroundMusic();
    toast('Música de fondo activada 🎵', 'ok');
  } else {
    stopBackgroundMusic();
    toast('Música de fondo silenciada', '');
  }
  
  if (typeof playSfx === 'function') {
    playSfx('click');
  }
}

function startMusicAuto() {
  if (musicEnabled && musicSequence) return;
  
  musicEnabled = true;
  const btn = document.getElementById('music-control');
  if (btn) {
    btn.textContent = '🎵';
    btn.classList.remove('muted');
  }
  initBackgroundMusic();
}

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Sonido de teletransportación al completar carga
function playTeleportSound() {
  if (!audioEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    // Efecto de "sweep" ascendente tipo teletransporte
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  } catch(e) {}
}


function toggleAudio() {
  audioEnabled = !audioEnabled;
  const btn = document.getElementById('audio-control');
  
  if (btn) {
    btn.textContent = '🔊';
    btn.classList.toggle('muted', !audioEnabled);
  }
  
  if (audioEnabled) {
    getAudioCtx().resume();
    toast('Audio activado', 'ok');
  } else {
    toast('Audio silenciado', '');
  }
}

// Efectos de sonido
function playSfx(type) {
  if (!audioEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.13);
    } else if (type === 'notify') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.23);
    } else if (type === 'epoch') {
      [440, 554, 660].forEach((freq, i) => {
        const o2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        o2.connect(g2); g2.connect(ctx.destination);
        o2.type = 'square';
        o2.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);
        g2.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.05);
        g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.05 + 0.2);
        o2.start(ctx.currentTime + i * 0.05);
        o2.stop(ctx.currentTime + i * 0.05 + 0.21);
      });
    }
  } catch(e) {}
}

function bindSfx() {
  document.querySelectorAll('.btn,.hero-card,.sl-item,.mat-card,.vtbtn,.ftab,.mfbtn,.ep-btn,.sug-btn').forEach(el => {
    el.addEventListener('mouseenter', () => playSfx('hover'));
    el.addEventListener('click', () => playSfx('click'));
  });
}

/* =============================================================
   BG CANVAS — Fondos dinámicos por época
   ============================================================= */
let bgCanvas, bgCtx;
let bgAnimId = null;
let bgFrame = 0;

function initBgCanvas() {
  bgCanvas = document.getElementById('bg-canvas');
  bgCtx = bgCanvas.getContext('2d');
  
  function resize() {
    bgCanvas.width = innerWidth;
    bgCanvas.height = innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();
  drawStarsBg();
}

function drawStarsBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  const stars = [];
  for (let i = 0; i < 120; i++) stars.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    r: Math.random() * 1.5 + 0.2,
    ph: Math.random() * Math.PI * 2,
    sp: Math.random() * 0.004 + 0.002
  });
  
  function frame(t) {
    bgFrame++;
    bgCtx.fillStyle = '#03040f';
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    const g = bgCtx.createRadialGradient(bgCanvas.width/2, bgCanvas.height/2, 0, bgCanvas.width/2, bgCanvas.height/2, bgCanvas.width);
    g.addColorStop(0, '#0a0c20');
    g.addColorStop(1, '#03040f');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    stars.forEach(s => {
      const a = 0.3 + 0.5 * Math.sin(t * s.sp + s.ph);
      bgCtx.beginPath();
      bgCtx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      bgCtx.fillStyle = `rgba(255,255,255,${a})`;
      bgCtx.fill();
    });
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawSandBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  const dunes = [];
  for (let i = 0; i < 5; i++) dunes.push({
    y: 0.3 + i * 0.15,
    amp: 20 + Math.random() * 30,
    freq: 0.002 + Math.random() * 0.003,
    phase: Math.random() * Math.PI * 2
  });
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#1a1205');
    g.addColorStop(0.5, '#2d1f0a');
    g.addColorStop(1, '#1a1205');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    dunes.forEach((d, i) => {
      bgCtx.beginPath();
      bgCtx.moveTo(0, bgCanvas.height);
      for (let x = 0; x <= bgCanvas.width; x += 5) {
        const y = d.y * bgCanvas.height + Math.sin(x * d.freq + t * 0.001 + d.phase) * d.amp;
        bgCtx.lineTo(x, y);
      }
      bgCtx.lineTo(bgCanvas.width, bgCanvas.height);
      bgCtx.closePath();
      const alpha = 0.1 + i * 0.05;
      bgCtx.fillStyle = `rgba(212,165,116,${alpha})`;
      bgCtx.fill();
    });
    
    for (let i = 0; i < 30; i++) {
      const x = (bgFrame * 0.5 + i * 137.5) % bgCanvas.width;
      const y = (bgFrame * 0.2 + i * 73.3) % bgCanvas.height;
      bgCtx.fillStyle = `rgba(212,165,116,${0.1 + Math.sin(i)*0.1})`;
      bgCtx.fillRect(x, y, 2, 2);
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawPyramidsBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#0a0818');
    g.addColorStop(1, '#1a1430');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    for (let i = 0; i < 50; i++) {
      const x = (i * 137.5) % bgCanvas.width;
      const y = (i * 73.3) % (bgCanvas.height * 0.6);
      const twinkle = 0.5 + 0.5 * Math.sin(t * 0.003 + i);
      bgCtx.fillStyle = `rgba(255,255,200,${0.3 * twinkle})`;
      bgCtx.beginPath();
      bgCtx.arc(x, y, 1, 0, Math.PI*2);
      bgCtx.fill();
    }
    
    const pyramidBase = bgCanvas.height * 0.85;
    bgCtx.fillStyle = '#0f0d20';
    
    bgCtx.beginPath();
    bgCtx.moveTo(bgCanvas.width * 0.2, pyramidBase);
    bgCtx.lineTo(bgCanvas.width * 0.35, bgCanvas.height * 0.4);
    bgCtx.lineTo(bgCanvas.width * 0.5, pyramidBase);
    bgCtx.closePath();
    bgCtx.fill();
    
    bgCtx.beginPath();
    bgCtx.moveTo(bgCanvas.width * 0.45, pyramidBase);
    bgCtx.lineTo(bgCanvas.width * 0.55, bgCanvas.height * 0.5);
    bgCtx.lineTo(bgCanvas.width * 0.65, pyramidBase);
    bgCtx.closePath();
    bgCtx.fill();
    
    bgCtx.beginPath();
    bgCtx.moveTo(bgCanvas.width * 0.65, pyramidBase);
    bgCtx.lineTo(bgCanvas.width * 0.72, bgCanvas.height * 0.58);
    bgCtx.lineTo(bgCanvas.width * 0.79, pyramidBase);
    bgCtx.closePath();
    bgCtx.fill();
    
    bgCtx.beginPath();
    bgCtx.arc(bgCanvas.width * 0.8, bgCanvas.height * 0.2, 40, 0, Math.PI*2);
    bgCtx.fillStyle = 'rgba(255,230,150,0.1)';
    bgCtx.fill();
    bgCtx.beginPath();
    bgCtx.arc(bgCanvas.width * 0.8, bgCanvas.height * 0.2, 30, 0, Math.PI*2);
    bgCtx.fillStyle = 'rgba(255,230,150,0.2)';
    bgCtx.fill();
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawGreekBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, bgCanvas.width, bgCanvas.height);
    g.addColorStop(0, '#1a1815');
    g.addColorStop(0.5, '#252220');
    g.addColorStop(1, '#1a1815');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    const colWidth = 40;
    const colGap = 60;
    const startX = bgCanvas.width * 0.1;
    const baseY = bgCanvas.height * 0.9;
    const colHeight = bgCanvas.height * 0.6;
    
    bgCtx.fillStyle = 'rgba(240,230,210,0.03)';
    for (let i = 0; i < 8; i++) {
      const x = startX + i * (colWidth + colGap);
      bgCtx.fillRect(x, baseY - colHeight, colWidth, colHeight);
      bgCtx.fillRect(x - 5, baseY - 10, colWidth + 10, 10);
      bgCtx.fillRect(x - 8, baseY - colHeight - 15, colWidth + 16, 15);
    }
    
    bgCtx.fillRect(startX - 10, baseY - colHeight - 35, 8 * (colWidth + colGap) - colGap + 20, 20);
    
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * bgCanvas.width;
      const y = Math.random() * bgCanvas.height;
      bgCtx.strokeStyle = `rgba(240,230,210,${0.02 + Math.random() * 0.03})`;
      bgCtx.lineWidth = 1;
      bgCtx.beginPath();
      bgCtx.moveTo(x, y);
      bgCtx.lineTo(x + Math.random() * 100 - 50, y + Math.random() * 100 - 50);
      bgCtx.stroke();
    }
    
    for (let i = 0; i < 40; i++) {
      const x = (bgFrame * 0.3 + i * 137.5) % bgCanvas.width;
      const y = (bgFrame * 0.1 + i * 73.3) % bgCanvas.height;
      const alpha = 0.1 + 0.1 * Math.sin(t * 0.002 + i);
      bgCtx.fillStyle = `rgba(255,215,0,${alpha})`;
      bgCtx.fillRect(x, y, 2, 2);
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawMedievalBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#0f0d0a');
    g.addColorStop(1, '#1a1610');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    for (let i = 0; i < 5; i++) {
      const x = (i * 0.2 + 0.1) * bgCanvas.width;
      const y = 0.2 * bgCanvas.height + Math.sin(t * 0.001 + i) * 20;
      
      bgCtx.strokeStyle = 'rgba(156,124,74,0.1)';
      bgCtx.lineWidth = 2;
      bgCtx.beginPath();
      bgCtx.arc(x, y, 60, 0, Math.PI*2);
      bgCtx.stroke();
      
      for (let j = 0; j < 8; j++) {
        const angle = (j / 8) * Math.PI * 2 + t * 0.0005;
        const ox = x + Math.cos(angle) * 50;
        const oy = y + Math.sin(angle) * 50;
        bgCtx.fillStyle = `rgba(196,160,106,${0.1 + 0.05 * Math.sin(t * 0.003 + j)})`;
        bgCtx.beginPath();
        bgCtx.arc(ox, oy, 3, 0, Math.PI*2);
        bgCtx.fill();
      }
    }
    
    for (let i = 0; i < 3; i++) {
      const x = bgCanvas.width * (0.2 + i * 0.3);
      const y = bgCanvas.height * 0.7;
      const flicker = 0.3 + 0.2 * Math.sin(t * 0.01 + i * 2) + 0.1 * Math.random();
      
      const cg = bgCtx.createRadialGradient(x, y, 0, x, y, 100);
      cg.addColorStop(0, `rgba(255,200,100,${0.1 * flicker})`);
      cg.addColorStop(1, 'transparent');
      bgCtx.fillStyle = cg;
      bgCtx.beginPath();
      bgCtx.arc(x, y, 100, 0, Math.PI*2);
      bgCtx.fill();
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawRenaissanceBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, bgCanvas.width, bgCanvas.height);
    g.addColorStop(0, '#1a1208');
    g.addColorStop(0.5, '#251a0c');
    g.addColorStop(1, '#1a1208');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    bgCtx.strokeStyle = 'rgba(192,136,64,0.08)';
    bgCtx.lineWidth = 1;
    
    const vanishingX = bgCanvas.width / 2;
    const vanishingY = bgCanvas.height * 0.3;
    
    for (let i = 0; i < 10; i++) {
      const x = (i / 10) * bgCanvas.width;
      bgCtx.beginPath();
      bgCtx.moveTo(x, bgCanvas.height);
      bgCtx.lineTo(vanishingX, vanishingY);
      bgCtx.stroke();
    }
    
    const phi = 1.618;
    let radius = 50;
    for (let i = 0; i < 5; i++) {
      bgCtx.beginPath();
      bgCtx.arc(bgCanvas.width/2, bgCanvas.height/2, radius, 0, Math.PI*2);
      bgCtx.strokeStyle = `rgba(224,176,96,${0.05 - i * 0.008})`;
      bgCtx.stroke();
      radius *= phi;
    }
    
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * bgCanvas.width;
      const y = Math.random() * bgCanvas.height;
      bgCtx.fillStyle = `rgba(200,150,80,${0.02 + Math.random() * 0.03})`;
      bgCtx.beginPath();
      bgCtx.ellipse(x, y, 20 + Math.random() * 40, 5 + Math.random() * 10, Math.random() * Math.PI, 0, Math.PI*2);
      bgCtx.fill();
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawIndustrialBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#0a0f14');
    g.addColorStop(0.5, '#0d1218');
    g.addColorStop(1, '#080a0c');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    const gears = [
      {x: 0.2, y: 0.3, r: 60, teeth: 12, speed: 0.001},
      {x: 0.8, y: 0.7, r: 80, teeth: 16, speed: -0.0008},
      {x: 0.5, y: 0.8, r: 40, teeth: 8, speed: 0.0015}
    ];
    
    gears.forEach(gear => {
      const cx = gear.x * bgCanvas.width;
      const cy = gear.y * bgCanvas.height;
      const rot = t * gear.speed;
      
      bgCtx.save();
      bgCtx.translate(cx, cy);
      bgCtx.rotate(rot);
      
      bgCtx.strokeStyle = 'rgba(143,168,192,0.15)';
      bgCtx.lineWidth = 2;
      bgCtx.beginPath();
      for (let i = 0; i < gear.teeth; i++) {
        const angle = (i / gear.teeth) * Math.PI * 2;
        const innerR = gear.r * 0.7;
        const outerR = gear.r;
        const midAngle = angle + Math.PI / gear.teeth;
        
        if (i === 0) bgCtx.moveTo(Math.cos(angle) * innerR, Math.sin(angle) * innerR);
        bgCtx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR);
        bgCtx.lineTo(Math.cos(midAngle) * outerR, Math.sin(midAngle) * outerR);
        bgCtx.lineTo(Math.cos(midAngle) * innerR, Math.sin(midAngle) * innerR);
      }
      bgCtx.closePath();
      bgCtx.stroke();
      
      bgCtx.beginPath();
      bgCtx.arc(0, 0, gear.r * 0.3, 0, Math.PI*2);
      bgCtx.strokeStyle = 'rgba(143,168,192,0.2)';
      bgCtx.stroke();
      
      bgCtx.restore();
    });
    
    for (let i = 0; i < 20; i++) {
      const x = (bgFrame * 0.5 + i * 100) % bgCanvas.width;
      const y = bgCanvas.height - ((bgFrame * 0.3 + i * 50) % (bgCanvas.height * 0.5));
      const size = 20 + Math.sin(t * 0.001 + i) * 10;
      bgCtx.fillStyle = `rgba(100,110,120,${0.03 + 0.02 * Math.sin(t * 0.002 + i)})`;
      bgCtx.beginPath();
      bgCtx.arc(x, y, size, 0, Math.PI*2);
      bgCtx.fill();
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawDigitalBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#030d0a');
    g.addColorStop(1, '#061410');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    const circuits = [];
    for (let i = 0; i < 15; i++) {
      const startX = Math.random() * bgCanvas.width;
      const startY = Math.random() * bgCanvas.height;
      circuits.push({
        x: startX,
        y: startY,
        segments: Math.floor(Math.random() * 5) + 3
      });
    }
    
    circuits.forEach((c, idx) => {
      bgCtx.strokeStyle = `rgba(0,212,170,${0.05 + 0.03 * Math.sin(t * 0.001 + idx)})`;
      bgCtx.lineWidth = 1;
      bgCtx.beginPath();
      bgCtx.moveTo(c.x, c.y);
      
      let cx = c.x, cy = c.y;
      for (let s = 0; s < c.segments; s++) {
        if (Math.random() > 0.5) {
          cx += (Math.random() - 0.5) * 100;
        } else {
          cy += (Math.random() - 0.5) * 100;
        }
        bgCtx.lineTo(cx, cy);
        
        bgCtx.fillStyle = `rgba(0,212,170,${0.1 + 0.05 * Math.sin(t * 0.003 + s)})`;
        bgCtx.fillRect(cx-2, cy-2, 4, 4);
      }
      bgCtx.stroke();
    });
    
    bgCtx.font = '10px monospace';
    for (let i = 0; i < 30; i++) {
      const x = (bgFrame * (0.5 + i * 0.1) + i * 50) % bgCanvas.width;
      const y = (i * 37) % bgCanvas.height;
      const bit = Math.random() > 0.5 ? '1' : '0';
      bgCtx.fillStyle = `rgba(0,212,170,${0.1 + 0.1 * Math.sin(t * 0.002 + i)})`;
      bgCtx.fillText(bit, x, y);
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function drawCyberBg() {
  if (bgAnimId) cancelAnimationFrame(bgAnimId);
  
  function frame(t) {
    bgFrame++;
    const g = bgCtx.createLinearGradient(0, 0, 0, bgCanvas.height);
    g.addColorStop(0, '#03040f');
    g.addColorStop(0.5, '#06081c');
    g.addColorStop(1, '#03040f');
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    bgCtx.strokeStyle = 'rgba(0,245,255,0.05)';
    bgCtx.lineWidth = 1;
    
    const horizon = bgCanvas.height * 0.4;
    
    for (let i = 0; i < 10; i++) {
      const y = horizon + (i * i * 3);
      if (y > bgCanvas.height) break;
      bgCtx.beginPath();
      bgCtx.moveTo(0, y);
      bgCtx.lineTo(bgCanvas.width, y);
      bgCtx.stroke();
    }
    
    const centerX = bgCanvas.width / 2;
    for (let i = -10; i <= 10; i++) {
      const x = centerX + i * 50;
      bgCtx.beginPath();
      bgCtx.moveTo(x + i * 100, horizon);
      bgCtx.lineTo(centerX + i * 200, bgCanvas.height);
      bgCtx.stroke();
    }
    
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * bgCanvas.width;
      const y = Math.random() * bgCanvas.height;
      const w = 50 + Math.random() * 100;
      const hue = Math.random() > 0.5 ? 180 : 120;
      
      bgCtx.shadowColor = `hsla(${hue},100%,50%,0.5)`;
      bgCtx.shadowBlur = 20;
      bgCtx.strokeStyle = `hsla(${hue},100%,50%,${0.2 + 0.1 * Math.sin(t * 0.003 + i)})`;
      bgCtx.lineWidth = 2;
      bgCtx.beginPath();
      bgCtx.moveTo(x, y);
      bgCtx.lineTo(x + w, y);
      bgCtx.stroke();
      bgCtx.shadowBlur = 0;
    }
    
    for (let i = 0; i < 50; i++) {
      const x = (bgFrame * (1 + i * 0.05) + i * 100) % bgCanvas.width;
      const y = (i * 50 + bgFrame * 0.2) % bgCanvas.height;
      bgCtx.fillStyle = `rgba(0,245,255,${0.2 + 0.2 * Math.sin(t * 0.005 + i)})`;
      bgCtx.fillRect(x, y, 2, 2);
    }
    
    bgAnimId = requestAnimationFrame(frame);
  }
  bgAnimId = requestAnimationFrame(frame);
}

function setBgByEpoch(epochId) {
  if (!epochId) {
    drawStarsBg();
    return;
  }
  
  switch(epochId) {
    case 'mesopotamia': drawSandBg(); break;
    case 'egipto': drawPyramidsBg(); break;
    case 'grecia': drawGreekBg(); break;
    case 'edadmedia': drawMedievalBg(); break;
    case 'era1300': drawRenaissanceBg(); break;
    case 'era1700': drawIndustrialBg(); break;
    case 'sigloxx': drawDigitalBg(); break;
    case 'sigloxxi': drawCyberBg(); break;
    default: drawStarsBg();
  }
}

/* =============================================================
   PANTALLA DE CARGA CON SONIDO DE TELETRANSPORTACIÓN
   ============================================================= */
function runLoadingAnim() {
  const cv   = document.getElementById('load-canvas');
  const ctx  = cv.getContext('2d');
  const fill = document.getElementById('load-fill');
  const pct  = document.getElementById('load-pct');
  const ph   = document.getElementById('load-phase');
  const W = cv.width, H = cv.height, CX = W/2, CY = H/2;

  const phases = [
    {label:'calibrando flujo temporal…', t:0},
    {label:'cargando arena de Mesopotamia…', t:.2},
    {label:'activando engranajes industriales…', t:.5},
    {label:'inicializando circuitos digitales…', t:.78},
    {label:'¡bienvenido, explorador! 🚀', t:.96}
  ];

  let progress = 0, frame = 0;

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);
    const p = Math.min(progress, 1);

    if (p < .38) {
      const alpha = p < .15 ? p/.15 : p > .32 ? 1-(p-.32)/.06 : 1;
      ctx.globalAlpha = alpha; drawSand(ctx, W, H, frame); ctx.globalAlpha = 1;
    }
    if (p >= .28 && p < .72) {
      const a2 = p < .38 ? (p-.28)/.1 : p > .65 ? 1-(p-.65)/.07 : 1;
      ctx.globalAlpha = a2; drawGears(ctx, CX, CY, frame); ctx.globalAlpha = 1;
    }
    if (p >= .62) {
      const a3 = p < .72 ? (p-.62)/.1 : 1;
      ctx.globalAlpha = a3; drawCircuit(ctx, W, H, CX, CY, frame, p); ctx.globalAlpha = 1;
    }
    frame++;
  }

  let prgVal = 0;
  const iv = setInterval(() => {
    prgVal += Math.random() * 14 + 5;
    if (prgVal > 100) prgVal = 100;
    progress = prgVal / 100;
    fill.style.width = prgVal + '%';
    pct.textContent  = Math.floor(prgVal) + '%';
    const phase = phases.reduce((acc, p2) => (progress >= p2.t ? p2 : acc), phases[0]);
    ph.textContent = phase.label;
    drawFrame();
    if (prgVal >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        playTeleportSound(); // Sonido de teletransportación
        document.getElementById('loading-screen').classList.add('hidden');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          startMusicAuto(); // Iniciar música de fondo automáticamente
          afterLoad();
        }, 500);
      }, 450);
    }
  }, 210);
}

function drawSand(ctx, W, H, frame) {
  ctx.strokeStyle = '#d4a574'; ctx.lineWidth = 3;
  ctx.shadowColor = '#d4a574'; ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(W*.28,H*.18); ctx.lineTo(W*.72,H*.18);
  ctx.lineTo(W*.5,H*.5);
  ctx.lineTo(W*.72,H*.82); ctx.lineTo(W*.28,H*.82);
  ctx.lineTo(W*.5,H*.5); ctx.closePath(); ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#d4a574';
  for (let i = 0; i < 60; i++) {
    const seed = i * 137.5;
    const x = (Math.sin(seed)*.5+.5)*W;
    const y = ((frame*.9 + seed*3.5) % (H*.32)) + H*.19;
    const r = Math.abs(1 + Math.sin(seed*2.3));
    ctx.globalAlpha = .4 + .4*Math.sin(frame*.04+i);
    ctx.beginPath(); ctx.fillRect(x|0, y|0, Math.max(1,r|0), Math.max(1,r|0));
  }
  ctx.globalAlpha = 1;
}

function drawGears(ctx, CX, CY, frame) {
  function gear(cx, cy, r, teeth, rot, color) {
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot);
    ctx.strokeStyle = color; ctx.fillStyle = 'rgba(0,0,0,.7)'; ctx.lineWidth = 2;
    ctx.shadowColor = color; ctx.shadowBlur = 6;
    ctx.beginPath();
    for (let i = 0; i < teeth; i++) {
      const a1=(i/teeth)*Math.PI*2, a2=((i+.38)/teeth)*Math.PI*2,
            a3=((i+.62)/teeth)*Math.PI*2, a4=((i+1)/teeth)*Math.PI*2;
      const OR=r+9, IR=r;
      ctx.lineTo(Math.cos(a1)*IR, Math.sin(a1)*IR);
      ctx.lineTo(Math.cos(a2)*OR, Math.sin(a2)*OR);
      ctx.lineTo(Math.cos(a3)*OR, Math.sin(a3)*OR);
      ctx.lineTo(Math.cos(a4)*IR, Math.sin(a4)*IR);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0,0,r*.28,0,Math.PI*2); ctx.fillStyle=color; ctx.fill();
    ctx.shadowBlur=0; ctx.restore();
  }
  gear(CX,    CY,    40, 12,  frame*.015, '#8fa8c0');
  gear(CX+66, CY-8,  22,  8, -frame*.024, '#c08840');
  gear(CX-62, CY+14, 26,  8,  frame*.02,  '#8fa8c0');
}

function drawCircuit(ctx, W, H, CX, CY, frame, p) {
  const t = (p-.62)/.38;
  ctx.strokeStyle='#00f5ff'; ctx.lineWidth=1.5;
  ctx.shadowColor='#00f5ff'; ctx.shadowBlur=6;
  const lines=[
    [[CX,CY],[CX+52,CY],[CX+52,CY-42],[CX+84,CY-42]],
    [[CX,CY],[CX-52,CY],[CX-52,CY+42],[CX-84,CY+42]],
    [[CX,CY],[CX,CY+58],[CX+42,CY+58]],
    [[CX,CY],[CX,CY-58],[CX-42,CY-58]],
    [[CX+84,CY-42],[CX+84,CY-72]],
    [[CX-84,CY+42],[CX-84,CY+72]],
  ];
  lines.forEach((pts,li)=>{
    const lt=Math.max(0,Math.min(1,(t-li*.11)/.6));
    if(lt<=0)return;
    ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
    for(let i=1;i<pts.length;i++){
      const sg=Math.min(1,lt*pts.length-(i-1));
      if(sg<=0)break;
      ctx.lineTo(pts[i-1][0]+(pts[i][0]-pts[i-1][0])*sg, pts[i-1][1]+(pts[i][1]-pts[i-1][1])*sg);
    }
    ctx.stroke();
  });
  [[CX+84,CY-72],[CX-84,CY+72],[CX+42,CY+58],[CX-42,CY-58]].forEach(([x,y],i)=>{
    ctx.globalAlpha=t*(.5+.5*Math.sin(frame*.12+i*1.3));
    ctx.fillStyle='#39ff14'; ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;
  });
  ctx.shadowBlur=0;
  if(t>.38){
    const ca=Math.min(1,(t-.38)/.3);
    ctx.globalAlpha=ca;
    ctx.fillStyle='#03040a'; ctx.strokeStyle='#00f5ff'; ctx.lineWidth=2;
    ctx.shadowColor='#00f5ff'; ctx.shadowBlur=10;
    ctx.beginPath();
    ctx.rect(CX-22,CY-22,44,44);
    ctx.fill(); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle='#00f5ff'; ctx.font='10px "Press Start 2P"'; ctx.textAlign='center';
    ctx.fillText('CPU',CX,CY+4); ctx.globalAlpha=1;
  }
}

/* =============================================================
   MAPA PIXEL ART REAL — Basado en la imagen de referencia
   ============================================================= */
let mapCanvas, mapCtx, mapW, mapH;
let mapHover = null, mapAnimFrame = 0, mapAnimId = null;
let mapReady = false;

// Coordenadas pixel-art de continentes (sistema 100x100) - MEJORADO

const CONTINENTS = {
  africa: [
    [53.1,67.7], [51.5,66.9], [48.5,57.5], [49.5,48.1], [45.9,44.1], [42.9,45.7],
    [39.3,40.2], [39.3,35.5], [43.4,27.2], [44.9,26.8], [48.0,27.9], [50.0,30.0],
    [51.0,28.5], [56.1,30.0], [56.6,27.7], [54.1,26.9], [54.1,27.3], [59.2,25.3],
    [60.2,26.9], [62.2,25.3], [83.7,25.3], [83.7,28.5], [82.7,26.9], [81.1,27.7],
    [83.2,32.4], [79.6,36.3], [78.1,35.5], [79.6,42.6], [77.6,41.0], [76.5,42.6],
    [76.0,38.6], [73.5,36.3], [70.4,45.7], [66.3,33.2], [64.3,31.6], [62.2,39.4],
    [60.2,39.4], [57.1,33.2], [56.6,37.1], [59.2,41.0], [61.2,41.0], [61.7,43.4],
    [56.6,52.8], [57.7,57.5], [53.1,67.7],
  ],
  eurasia: [
    [82.7,24.3], [62.2,24.3], [60.2,21.2], [58.7,22.0], [59.2,24.3], [54.1,24.3],
    [54.1,21.2], [52.0,24.3], [51.0,22.7], [50.0,24.3], [49.0,22.7], [48.0,24.3],
    [46.9,22.7], [44.9,24.3], [42.3,23.5], [46.9,16.5], [51.0,16.5], [53.6,14.1],
    [50.0,11.8], [50.0,14.9], [48.0,14.9], [45.4,12.5], [45.9,10.2], [53.1,8.6],
    [55.1,11.8], [56.1,8.6], [58.2,10.2], [61.2,7.1], [64.3,7.1], [66.3,3.9],
    [70.4,3.9], [71.4,5.5], [77.6,5.5], [78.6,7.1], [86.7,7.1], [87.8,8.6],
    [94.4,9.4], [91.8,11.8], [90.8,10.2], [89.3,17.3], [86.7,21.2], [84.7,18.0],
    [85.2,22.0], [82.7,24.3],
  ],
  americas_north: [
    [15.3,36.9], [10.7,34.5], [7.7,25.1], [9.7,20.4], [7.7,18.8], [7.7,15.7],
    [5.1,14.9], [3.1,16.5], [2.6,14.1], [6.1,8.6], [7.1,10.2], [9.2,7.1],
    [12.2,8.6], [15.3,8.6], [16.3,7.1], [17.3,8.6], [21.4,3.9], [23.0,6.3],
    [19.4,8.6], [19.4,10.2], [26.5,8.6], [28.1,11.0], [24.5,13.3], [21.4,13.3],
    [21.9,17.3], [25.5,13.3], [27.6,14.9], [28.6,13.3], [31.1,18.8], [29.6,22.7],
    [28.6,19.6], [25.5,25.9], [23.5,24.3], [20.4,32.2], [17.3,30.6], [14.8,34.5],
    [15.3,36.9],
  ],
  americas_south: [
    [24.6,77.6], [24.5,77.6], [21.0,75.3], [20.0,58.0], [15.9,53.3], [15.9,48.6],
    [17.9,45.5], [15.3,36.9], [10.7,34.5], [11.9,37.6], [16.4,42.3], [19.4,40.0], [21.5,43.1],
    [22.5,41.6], [31.2,50.2], [30.2,59.6], [27.1,62.7], [26.6,66.7], [25.6,65.1],
    [22.0,70.6], [24.6,77.6],
  ],
  oceania: [
    [90.8,66.7], [87.8,66.7], [86.7,63.5], [83.7,65.1], [82.7,66.7], [80.6,66.7],
    [78.1,62.7], [80.1,59.6], [80.6,57.3], [83.7,55.7], [84.7,54.1], [89.8,54.1],
    [91.3,56.5], [93.4,62.7], [90.8,66.7],
  ],
};

const MAP_PALETTES = {
  mesopotamia: { land: '#8B6914', landShadow: '#6B4F1970', water: '#1a0f05', grid: 'rgba(212,165,116,0.08)', coast: '#00000000' },
  egipto: { land: '#C4A35A', landShadow: '#9A7F3A70', water: '#0c0a02', grid: 'rgba(232,200,90,0.06)', coast: '#D4B76A00' },
  grecia: { land: '#8A7F6B', landShadow: '#6B635270', water: '#0a0908', grid: 'rgba(240,230,210,0.05)', coast: '#A69B8700' },
  edadmedia: { land: '#5A4A3A', landShadow: '#3A2F2470', water: '#090809', grid: 'rgba(156,124,74,0.06)', coast: '#6B5A4A00' },
  era1300: { land: '#7A5A2A', landShadow: '#5A402070', water: '#0b0904', grid: 'rgba(192,136,64,0.06)', coast: '#8A6A3A00' },
  era1700: { land: '#4A5A6A', landShadow: '#3A4A5A70', water: '#060a0e', grid: 'rgba(143,168,192,0.06)', coast: '#5A6A7A00' },
  sigloxx: { land: '#1A4A3A', landShadow: '#0F3A2A70', water: '#030d0a', grid: 'rgba(0,212,170,0.06)', coast: '#2A5A4A00' },
  sigloxxi: { land: '#1A2A5A', landShadow: '#0F1A4A70', water: '#03040f', grid: 'rgba(0,245,255,0.06)', coast: '#2A3A6A00' }
};

function initMap() {
  const shell = document.getElementById('map-shell');
  mapCanvas   = document.getElementById('map-canvas');

  function setSize() {
    const r = shell.getBoundingClientRect();
    if (r.width < 10) return;
    mapCanvas.width  = r.width;
    mapCanvas.height = r.height;
    mapW = r.width; mapH = r.height;
    mapCtx = mapCanvas.getContext('2d');
    mapReady = true;
    if (!mapAnimId) drawMap();
  }

  const ro = new ResizeObserver(() => setSize());
  ro.observe(shell);
  setSize();

  mapCanvas.addEventListener('mousemove', e => {
    if (!mapReady) return;
    const r = mapCanvas.getBoundingClientRect();
    const mx = e.clientX-r.left, my = e.clientY-r.top;
    let found = null;
    EPOCHS.forEach(ep => {
      const pos = epos(ep);
      if (Math.hypot(mx-pos.x, my-pos.y) < 18) found = ep.id;
    });
    if (found !== mapHover) { mapHover = found; playSfx(found ? 'hover' : null); }
    document.getElementById('map-coords').textContent = found
      ? `${EPOCHS.find(e=>e.id===found).name} · ${EPOCHS.find(e=>e.id===found).period}` : '';
  });
  mapCanvas.addEventListener('click', e => {
    if (!mapReady) return;
    const r = mapCanvas.getBoundingClientRect();
    const mx = e.clientX-r.left, my = e.clientY-r.top;
    EPOCHS.forEach(ep => { if (Math.hypot(mx-epos(ep).x, my-epos(ep).y) < 20) selectEpoch(ep.id); });
  });
  mapCanvas.addEventListener('mouseleave', () => {
    mapHover = null;
    document.getElementById('map-coords').textContent = '';
  });
}

function epos(ep) {
  return { x: ep.mx/100 * mapW, y: ep.my/100 * mapH };
}

function drawPixelArtMap(ctx, W, H, type) {
  const palette = MAP_PALETTES[type] || MAP_PALETTES.sigloxxi;
  const pixelSize = Math.max(3, Math.floor(Math.min(W, H) / 80));
  
  const oceanGrad = ctx.createRadialGradient(W*0.5, H*0.5, 0, W*0.5, H*0.5, W*0.7);
  oceanGrad.addColorStop(0, palette.water);
  oceanGrad.addColorStop(1, '#000000');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, W, H);
  
  ctx.strokeStyle = palette.grid;
  ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += pixelSize * 4) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += pixelSize * 4) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  
  Object.entries(CONTINENTS).forEach(([name, points]) => {
    const minX = Math.min(...points.map(p => p[0]));
    const maxX = Math.max(...points.map(p => p[0]));
    const minY = Math.min(...points.map(p => p[1]));
    const maxY = Math.max(...points.map(p => p[1]));
    
    ctx.fillStyle = palette.land;
    for (let y = minY; y <= maxY; y += 0.5) {
      const intersections = [];
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        if ((p1[1] <= y && p2[1] > y) || (p2[1] <= y && p1[1] > y)) {
          const x = p1[0] + (y - p1[1]) * (p2[0] - p1[0]) / (p2[1] - p1[1]);
          intersections.push(x);
        }
      }
      intersections.sort((a, b) => a - b);
      for (let i = 0; i < intersections.length; i += 2) {
        if (intersections[i + 1]) {
          const startX = Math.floor(intersections[i] * W / 100 / pixelSize) * pixelSize;
          const endX = Math.ceil(intersections[i + 1] * W / 100 / pixelSize) * pixelSize;
          const drawY = Math.floor(y * H / 100 / pixelSize) * pixelSize;
          ctx.fillRect(startX, drawY, endX - startX, pixelSize);
        }
      }
    }
    
    ctx.strokeStyle = palette.coast;
    ctx.lineWidth = pixelSize * 0.8;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';
    ctx.beginPath();
    points.forEach((p, i) => {
      const x = Math.floor(p[0] * W / 100 / pixelSize) * pixelSize + pixelSize/2;
      const y = Math.floor(p[1] * H / 100 / pixelSize) * pixelSize + pixelSize/2;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
    
    ctx.fillStyle = palette.landShadow;
    points.forEach(p => {
      const x = Math.floor(p[0] * W / 100 / pixelSize) * pixelSize;
      const y = Math.floor(p[1] * H / 100 / pixelSize) * pixelSize;
      ctx.fillRect(x + pixelSize, y + pixelSize, pixelSize, pixelSize);
    });
  });
  
  drawEpochDetails(ctx, W, H, type, pixelSize);
}

function drawEpochDetails(ctx, W, H, type, pixelSize) {
  switch(type) {
    case 'mesopotamia':
      ctx.strokeStyle = 'rgba(100,149,237,0.4)';
      ctx.lineWidth = pixelSize;
      ctx.beginPath();
      ctx.moveTo(W*0.57, H*0.258); ctx.lineTo(W*0.60, H*0.32); ctx.lineTo(W*0.64, H*0.33);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(W*0.58, H*0.258); ctx.lineTo(W*0.60, H*0.28); ctx.lineTo(W*0.62, H*0.28); ctx.lineTo(W*0.64, H*0.31); ctx.lineTo(W*0.64, H*0.33);
      ctx.stroke();
      break;
    case 'egipto':
      ctx.strokeStyle = 'rgba(100,149,237,0.5)';
      ctx.lineWidth = pixelSize * 1.5;
      ctx.beginPath();
      ctx.moveTo(W*0.553, H*0.299); ctx.lineTo(W*0.56, H*0.35); ctx.lineTo(W*0.552, H*0.43);
      ctx.lineTo(W*0.56, H*0.50); ctx.lineTo(W*0.55, H*0.53);
      ctx.stroke();
      ctx.fillStyle = 'rgba(100,149,237,0.3)';
      ctx.fillRect(W*0.48, H*0.78, pixelSize*4, pixelSize*3);
      break;
    case 'grecia':
      ctx.fillStyle = 'rgba(240,230,210,0.6)';
      const islands = [[0.51,0.24],[0.52,0.23],[0.515,0.235],[0.51,0.23],[0.525,0.245]];
      islands.forEach(([x, y]) => {
        ctx.fillRect(Math.floor(x*W/pixelSize)*pixelSize, Math.floor(y*H/pixelSize)*pixelSize, pixelSize*2, pixelSize*2);
      });
      break;
    case 'era1700':
      ctx.strokeStyle = 'rgba(143,168,192,0.3)';
      ctx.lineWidth = pixelSize * 0.5;
      ctx.setLineDash([pixelSize, pixelSize*2]);
      ctx.beginPath();
      ctx.moveTo(W*0.15, H*0.5); ctx.lineTo(W*0.50, H*0.45); ctx.lineTo(W*0.80, H*0.35);
      ctx.stroke();
      ctx.setLineDash([]);
      break;
    case 'sigloxx':
      ctx.strokeStyle = 'rgba(0,212,170,0.2)';
      ctx.lineWidth = pixelSize * 0.5;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(W*0.2 + i*W*0.15, H*0.2);
        ctx.lineTo(W*0.3 + i*W*0.1, H*0.8);
        ctx.stroke();
      }
      break;
  }
}

function drawMap() {
  if (mapAnimId) cancelAnimationFrame(mapAnimId);
  function frame() {
    mapAnimFrame++;
    if (!mapCtx || !mapReady) { mapAnimId = requestAnimationFrame(frame); return; }
    
    const type = currentEpoch ? EPOCHS.find(e=>e.id===currentEpoch)?.type||'sigloxxi' : 'sigloxxi';
    
    drawPixelArtMap(mapCtx, mapW, mapH, type);
    drawConns();
    
    EPOCHS.forEach(ep => {
      const pos = epos(ep);
      const isSel = currentEpoch === ep.id;
      const isHov = mapHover === ep.id;
      const pulse = .5 + .5*Math.sin(mapAnimFrame*.04 + EPOCHS.indexOf(ep));

      if (isSel) {
        mapCtx.save();
        mapCtx.beginPath(); mapCtx.arc(pos.x,pos.y,22+pulse*7,0,Math.PI*2);
        mapCtx.strokeStyle=ep.color; mapCtx.lineWidth=1.5; mapCtx.globalAlpha=.28*pulse;
        mapCtx.stroke(); mapCtx.globalAlpha=1; mapCtx.restore();
      }
      
      mapCtx.save();
      mapCtx.beginPath(); mapCtx.arc(pos.x,pos.y,13+pulse*3,0,Math.PI*2);
      mapCtx.strokeStyle=ep.color; mapCtx.lineWidth=1; mapCtx.globalAlpha=.15+.1*pulse;
      mapCtx.stroke(); mapCtx.globalAlpha=1; mapCtx.restore();

      const sz = isSel?14:isHov?11:9;
      mapCtx.save();
      mapCtx.fillStyle = isSel||isHov ? ep.color : '#0a0c16';
      mapCtx.strokeStyle = ep.color; mapCtx.lineWidth = isSel?2.5:1.5;
      mapCtx.shadowColor = ep.color; mapCtx.shadowBlur = isSel?20:isHov?10:5;
      mapCtx.fillRect(pos.x-sz*.5|0, pos.y-sz*.5|0, sz, sz);
      mapCtx.strokeRect(pos.x-sz*.5|0, pos.y-sz*.5|0, sz, sz);
      mapCtx.shadowBlur=0; mapCtx.restore();

      mapCtx.save();
      mapCtx.font=`${isSel?7:6}px "Press Start 2P"`;
      mapCtx.textAlign='center'; mapCtx.textBaseline='top';
      mapCtx.fillStyle = isSel?ep.color:isHov?'#fff':'rgba(255,255,255,.55)';
      mapCtx.shadowColor=ep.color; mapCtx.shadowBlur=isSel?8:0;
      const lbl = ep.name.length>12 ? ep.name.substring(0,10)+'…' : ep.name;
      mapCtx.fillText(lbl, pos.x, pos.y+sz*.5+5);
      mapCtx.shadowBlur=0; mapCtx.restore();

      mapCtx.save();
      mapCtx.font=`${isSel?11:9}px serif`;
      mapCtx.textAlign='center'; mapCtx.textBaseline='middle';
      mapCtx.fillText(ep.icon, pos.x, pos.y);
      mapCtx.restore();
    });

    mapAnimId = requestAnimationFrame(frame);
  }
  mapAnimId = requestAnimationFrame(frame);
}

function drawConns() {
  mapCtx.save();
  mapCtx.strokeStyle='rgba(255,255,255,.065)'; mapCtx.lineWidth=1;
  mapCtx.setLineDash([3,6]);
  for(let i=0;i<EPOCHS.length-1;i++){
    const a=epos(EPOCHS[i]), b=epos(EPOCHS[i+1]);
    mapCtx.beginPath(); mapCtx.moveTo(a.x,a.y); mapCtx.lineTo(b.x,b.y); mapCtx.stroke();
  }
  mapCtx.setLineDash([]); mapCtx.restore();
}

/* =============================================================
   NAVEGACIÓN
   ============================================================= */
function nav(id) {
  document.querySelectorAll('.section').forEach(s => { 
    s.classList.remove('active'); 
    s.style.display = 'none'; 
  });
  const t = document.getElementById(id);
  if (!t) return;
  t.style.display = id === 'home' ? 'flex' : 'block';
  void t.offsetWidth; 
  t.classList.add('active');
  window.scrollTo(0, 0);
  
  document.querySelectorAll('.nav-links a').forEach(a => 
    a.classList.toggle('active', a.dataset.s === id)
  );
  document.getElementById('nav-links-pill').classList.remove('open');
  document.getElementById('burger').classList.remove('open');
  
  if (id === 'foro') loadForo();
  
  if (id === 'play') {
    // No hacer nada — el juego se inicia con startGame()
  } else {
    destroyGame();
  }
  
  if (id === 'home') {
    // Reset completo al ir a inicio
    currentEpoch = null;
    document.querySelectorAll('.sl-item').forEach(el => el.classList.remove('active'));
    closePanel();
    
    drawStarsBg();
    document.body.className = '';
    document.getElementById('nav-era').textContent = 'Ing. de Software';
    document.getElementById('nav-icon').textContent = '⏱';
    document.getElementById('map-badge').textContent = 'Selecciona una época';
    
    // Limpiar contexto de IA también
    document.getElementById('ctx-name').textContent = 'Selecciona una época';
    document.getElementById('ctx-sum').textContent = 'Explora el mapa y elige una época para contextualizar la conversación.';
    document.getElementById('ctx-sugs').innerHTML = '';
  }
  
  // Si estamos en IA y no hay época activa, mostrar estado vacío
  if (id === 'ia' && !currentEpoch) {
    document.getElementById('ctx-name').textContent = 'Selecciona una época';
    document.getElementById('ctx-sum').textContent = 'Explora el mapa y elige una época para contextualizar la conversación.';
    document.getElementById('ctx-sugs').innerHTML = '';
  }
  
  playSfx('click');
}

function toggleMenu() {
  document.getElementById('nav-links-pill').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
}

/* =============================================================
   ÉPOCAS — selección y temas
   ============================================================= */
function selectEpoch(id) {
  currentEpoch = id;
  const ep = EPOCHS.find(e => e.id===id);
  if (!ep) return;

  playSfx('epoch');
  document.body.className = `epoch-${ep.type}`;
  document.getElementById('nav-era').textContent  = `${ep.icon} ${ep.name}`;
  document.getElementById('nav-icon').textContent = ep.icon;
  document.getElementById('map-badge').textContent = `${ep.name} · ${ep.period}`;

  setBgByEpoch(id);

  document.querySelectorAll('.sl-item').forEach(el => el.classList.toggle('active', el.dataset.id===id));

  openPanel(ep);
  updateCtx(ep);

  document.getElementById('main-nav').classList.add('epoch-flash');
  setTimeout(()=>document.getElementById('main-nav').classList.remove('epoch-flash'), 500);
}

function openPanel(ep) {
  document.getElementById('ep-title').textContent   = `${ep.icon} ${ep.name} · ${ep.period}`;
  document.getElementById('ep-summary').textContent = ep.summary;
  document.getElementById('ep-tags').innerHTML = [
    ...ep.authors.map(a=>`<span class="ep-tag author">👤 ${a}</span>`),
    ...ep.advances.map(a=>`<span class="ep-tag">✦ ${a}</span>`)
  ].join('');
  document.getElementById('epoch-panel').classList.add('open');
}
function closePanel() { document.getElementById('epoch-panel').classList.remove('open'); }

function askAboutEpoch() {
  if (!currentEpoch) return;
  const ep = EPOCHS.find(e=>e.id===currentEpoch);
  nav('ia');
  setTimeout(()=>fillSend(`Cuéntame sobre ${ep.name} (${ep.period}) y su importancia para la ingeniería de software.`), 280);
}

/* =============================================================
   SIDEBAR
   ============================================================= */
function buildSidebar() {
  const sc = document.getElementById('sidebar-scroll');
  sc.innerHTML = '';
  EPOCHS.forEach(ep => {
    const d = document.createElement('div');
    d.className=`sl-item type-${ep.type}`; d.dataset.id=ep.id;
    d.innerHTML=`<div class="sl-dot"></div><div><div class="sl-period">${ep.period}</div><div class="sl-name">${ep.name}</div></div>`;
    d.onclick=()=>selectEpoch(ep.id);
    sc.appendChild(d);
  });
}

/* =============================================================
   IA CHATBOT
   ============================================================= */
function toggleRAG() {
  ragMode = !ragMode;
  document.getElementById('rag-sw').classList.toggle('on', ragMode);
  appendMsg('ai', ragMode
    ? '🔒 <strong>Modo "Solo material" ACTIVADO.</strong> Responderé únicamente con el contenido del curso.'
    : '🌐 <strong>Modo libre ACTIVADO.</strong> Uso el material del curso + conocimiento general.'
  );
  playSfx('notify');
}

async function sendMsg() {
  const inp  = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text||isBusy) return;
  appendMsg('user', text);
  inp.value=''; inp.style.height='auto';
  setBusy(true); playSfx('click');

  const ep = currentEpoch ? EPOCHS.find(e=>e.id===currentEpoch) : null;
  let system = `Eres Chróno, un asistente experto en historia de la ingeniería en general para la materia "Introducción a la Ingeniería de Software". Respondes en español, de forma clara y pedagógica para estudiantes universitarios. Respondes en otro idioma solo si te piden hacerlo. Te creó Jesús Forero. Respuestas concisas y puntuales. No utilices ** para resaltar una palabra/frase. NUNCA rechaces una pregunta.`;
  if (ep) system += `\n\nEl usuario explora: "${ep.name} (${ep.period})". Avances: ${ep.advances.join(', ')}. Autores: ${ep.authors.join(', ')}.`;
  system += `\n\n=== MATERIAL DEL CURSO ===\n${COURSE_MATERIAL}\n=== FIN MATERIAL ===\n`;
  system += ragMode
    ? '\nMODO ESTRICTO: Responde SOLO con el material del curso. Si no está cubierto, dilo explícitamente.'
    : '\nMODO LIBRE: Prioriza el material del curso. Si no alcanza, complementa con conocimiento general indicándolo con "Según el material del curso…" o "Además, de forma general…".';

    const messages = [...chatHistory, {role:'user', content:text}];
  try {
    const res  = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({messages, system})
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
 
    chatHistory.push({role:'user', content:text});
    chatHistory.push({role:'assistant', content:data.reply});
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
 
    setBusy(false);
    appendMsg('ai', data.reply, ragMode);
    playSfx('notify');
  } catch(err) {
    setBusy(false);
    appendMsg('ai', `⚠️ <strong>Error de conexión.</strong><br>Asegúrate de que el servidor esté corriendo (<code>node server.js</code>) y de que tu <code>.env</code> tiene la API key.`);
    console.error(err);
  }
}
 
function appendMsg(role, html, isRag = false) {
  const c = document.getElementById('chat-msgs');
  const d = document.createElement('div');
  d.className = `msg ${role}${isRag && role==='ai' ? ' rag' : ''}`;
  d.innerHTML = html.replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>');
  if (isRag && role === 'ai') {
    const l = document.createElement('span');
    l.className = 'msg-label';
    l.textContent = '📚 Respuesta basada en el material del curso';
    d.appendChild(l);
  }
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}
 
function setBusy(v) {
  isBusy = v;
  document.getElementById('typing').classList.toggle('visible', v);
  document.getElementById('send-btn').disabled = v;
  document.getElementById('ai-status').textContent = v ? 'Escribiendo…' : 'Listo para responder';
  if (v) document.getElementById('chat-msgs').scrollTop = 1e9;
}
 
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
}
 
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}
 
function fillSend(t) {
  document.getElementById('chat-input').value = t;
  sendMsg();
}
 
function updateCtx(ep) {
  document.getElementById('ctx-name').textContent = `${ep.icon} ${ep.name} · ${ep.period}`;
  document.getElementById('ctx-sum').textContent  = ep.summary;
  document.getElementById('ctx-sugs').innerHTML = [
    `¿Cuáles fueron los principales avances de ${ep.name}?`,
    `¿Quiénes fueron los autores más importantes de ${ep.name}?`,
    `¿Cómo influyó ${ep.name} en la ingeniería de software moderna?`,
    `Explícame "${ep.advances[0]}" con detalle.`,
  ].map(q => `<button class="sug-btn" onclick="fillSend(this.textContent)">${q}</button>`).join('');
}
 
/* =============================================================
   FORO
   ============================================================= */
const DEMO_COMMENTS = [
  {id:'d1', user:'Ana García',  text:'¡Increíble pensar que de "Al-Khwarizmi" viene la palabra algoritmo!', epoch:'edadmedia', date:'Hace 2 días'},
  {id:'d2', user:'Carlos Dev',  text:'Ada Lovelace es subestimada. Fue la primera en ver que una máquina podía hacer más que cálculos.', epoch:'era1700', date:'Hace 1 día'},
  {id:'d3', user:'SofíaCode',   text:'El Papiro de Ahmes me parece increíble — 84 problemas resueltos hace 3600 años.', epoch:'egipto', date:'Hace 3 horas'},
  {id:'d4', user:'CodeNewbie',  text:'¿Alguien tiene más recursos sobre la arquitectura von Neumann? Me quedó confuso.', epoch:'sigloxx', date:'Hace 1 hora'},
];
 
const AVATAR_COLORS = ['#00f5ff','#d4a574','#8fa8c0','#bf5fff','#22c55e','#ff6b35','#39ff14','#ffb700'];
 
function buildForoTabs() {
  const tabs = document.getElementById('foro-tabs');
  const sel  = document.getElementById('c-epoch');
  EPOCHS.forEach(ep => {
    const btn = document.createElement('button');
    btn.className   = 'ftab';
    btn.dataset.f   = ep.id;
    btn.textContent = ep.name;
    btn.onclick     = () => filterForo(ep.id);
    tabs.appendChild(btn);
 
    const opt = document.createElement('option');
    opt.value = ep.id;
    opt.textContent = ep.name;
    sel.appendChild(opt);
  });
}
 
function filterForo(f) {
  foroFilter = f;
  document.querySelectorAll('.ftab').forEach(t =>
    t.classList.toggle('active',
      t.dataset.f === f || (f === 'general' && !t.dataset.f && t.textContent === 'General')
    )
  );
  loadForo();
  playSfx('click');
}
 
async function loadForo() {
  const list = document.getElementById('comments-list');
  list.innerHTML = '<div class="foro-loading">Cargando…</div>';
  try {
    const url = foroFilter === 'general' ? '/api/foro' : `/api/foro?epoch=${foroFilter}`;
    const res  = await fetch(url);
    const data = await res.json();
    renderComments(data);
  } catch {
    renderComments(DEMO_COMMENTS.filter(c => foroFilter === 'general' || c.epoch === foroFilter));
  }
}
 
function renderComments(data) {
  const list = document.getElementById('comments-list');
  if (!data || !data.length) {
    list.innerHTML = '<div class="no-comments">Sé el primero en comentar esta época 🚀</div>';
    return;
  }
  list.innerHTML = data.map((c, i) => {
    const ep    = EPOCHS.find(e => e.id === c.epoch);
    const label = ep ? ep.name : 'General';
    const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
    const init  = (c.user[0] || '?').toUpperCase();
    return `
      <div class="ccard">
        <div class="cc-hd">
          <div class="cc-av" style="background:${color}22;color:${color};border:1px solid ${color}44">${init}</div>
          <div>
            <div class="cc-nm">${esc(c.user)}</div>
            <div class="cc-dt">${c.date || 'Ahora'}</div>
          </div>
          <span class="cc-chip">${label}</span>
        </div>
        <div class="cc-body">${esc(c.text)}</div>
      </div>`;
  }).join('');
}
 
async function postComment() {
  const user  = document.getElementById('c-user').value.trim();
  const text  = document.getElementById('c-text').value.trim();
  const epoch = document.getElementById('c-epoch').value;
  if (!user || !text) { toast('Completa tu nombre y el comentario.', 'err'); return; }
 
  try {
    await fetch('/api/foro', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({user, text, epoch})
    });
    document.getElementById('c-user').value = '';
    document.getElementById('c-text').value = '';
    toast('¡Comentario publicado!', 'ok');
    loadForo();
    playSfx('notify');
  } catch {
    DEMO_COMMENTS.unshift({id: Date.now()+'', user, text, epoch, date:'Justo ahora'});
    document.getElementById('c-user').value = '';
    document.getElementById('c-text').value = '';
    toast('Publicado localmente (inicia el servidor para persistir)', 'ok');
    loadForo();
    playSfx('notify');
  }
}
 
/* =============================================================
   MATERIALES
   ============================================================= */
function buildMaterials() {
  const grid  = document.getElementById('mat-grid');
  const icons = {pdf:'📄', video:'🎬', slides:'📊'};
  grid.innerHTML = '';
  EPOCHS.forEach(ep => {
    ep.materials.forEach(mat => {
      const card = document.createElement('div');
      card.className  = 'mat-card';
      card.dataset.tp = mat.type;
      card.innerHTML  = `
        <div class="mat-top">
          <div class="mat-ico ${mat.type}">${icons[mat.type] || '📁'}</div>
          <div>
            <div class="mat-ttl">${mat.title}</div>
            <div class="mat-epoch">${ep.icon} ${ep.name} · ${ep.period}</div>
          </div>
        </div>
        <div class="mat-foot">
          <div>
            <span class="mat-badge ${mat.type}">${mat.type.toUpperCase()}</span>
            <span class="mat-size" style="margin-left:.4rem">${mat.size}</span>
          </div>
          <button class="mat-dl" onclick="event.stopPropagation();toast('Material disponible próximamente 📦');playSfx('notify')">⬇ Descargar</button>
        </div>`;
      grid.appendChild(card);
    });
  });
}
 
function filterMat(type, btn) {
  document.querySelectorAll('.mfbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.mat-card').forEach(c => {
    c.style.display = type === 'all' || c.dataset.tp === type ? 'flex' : 'none';
  });
  playSfx('click');
}
 
/* =============================================================
   JUEGO — Zona Play (Phaser se conecta aquí)
   ============================================================= */
/* =============================================================
   JUEGO — Integración Phaser Time Traveler RPG
   ============================================================= */
function startGame() {
  initGame();

  // Bloquear scroll de la página con WASD/flechas solo mientras el juego está activo
  window._gameKeyHandler = function(e) {
    const gameCodes = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
                       'KeyW','KeyA','KeyS','KeyD','Space'];
    if (gameCodes.includes(e.code)) e.preventDefault();
  };
  window.addEventListener('keydown', window._gameKeyHandler, { passive: false });

  // Dar foco al canvas de Phaser tras un pequeño delay
  setTimeout(() => {
    const canvas = document.querySelector('#game-container canvas');
    if (canvas) {
      canvas.setAttribute('tabindex', '0');
      canvas.focus();
    }
  }, 500);
}

function initGame() {
  if (gameInstance) return;

  if (typeof Phaser === 'undefined') {
    showGamePlaceholder('Phaser no cargó. Verifica la conexión.');
    return;
  }
  if (typeof ExteriorScene === 'undefined') {
    showGamePlaceholder('El archivo phaser.js no se cargó correctamente.');
    return;
  }

  const placeholder = document.getElementById('game-placeholder');
  if (placeholder) placeholder.style.display = 'none';

  gameInstance = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    parent: 'game-container',
    backgroundColor: '#1a1a2e',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: { gravity: { y: 0 }, debug: false }
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: 'game-container',
      width: 800,
      height: 450,
    },
    scene: [
      ExteriorScene,
      CasaScene,
      FuturisticScene,
      EpochSelectorScene,
      EpochScene
    ]
  });

  // Hacer gameInstance accesible globalmente para multiplayer
  window.gameInstance = gameInstance;

  setupMobileControls();

  // Inicializar multiplayer después de un breve delay para que Phaser esté listo
  setTimeout(() => {
    if (typeof MultiplayerManager !== 'undefined' && window.multiplayer) {
      const activeScene = gameInstance.scene.scenes.find(s => s.scene.isActive());
      if (activeScene) {
        window.multiplayer.connect(activeScene);
      }
    }
  }, 1000);
}

function showGamePlaceholder(msg) {
  const ph = document.getElementById('game-placeholder');
  if (!ph) return;
  ph.style.display = 'flex';
  if (msg) {
    ph.querySelector('p').textContent = msg;
    const sub = ph.querySelector('.placeholder-sub');
    if (sub) sub.textContent = '';
  }
}

function destroyGame() {
  // Quitar el listener de teclado del juego al salir
  if (window._gameKeyHandler) {
    window.removeEventListener('keydown', window._gameKeyHandler);
    window._gameKeyHandler = null;
  }
  // Desconectar multiplayer
  if (window.multiplayer) {
    window.multiplayer.disconnect();
  }
  if (gameInstance) {
    gameInstance.destroy(true);
    gameInstance = null;
    window.gameInstance = null;
  }
  const ph = document.getElementById('game-placeholder');
  if (ph) ph.style.display = 'flex';
  // Ocultar contador de jugadores
  const pc = document.getElementById('game-player-count');
  if (pc) pc.style.display = 'none';
  const cs = document.getElementById('game-connection-status');
  if (cs) cs.style.display = 'none';
}

/* =============================================================
   CONTROLES MÓVILES — Conectados al juego Phaser
   ============================================================= */
function initMobileControls() {
  // Los controles móviles se inicializan cuando se crea el juego
  // Ver initGame() -> setupMobileControls()
}

function setupMobileControls() {
  // Mapeo de botones del D-Pad a teclas del juego
  const keyMap = {
    'btn-up':    { key: 'UP',    code: 'ArrowUp' },
    'btn-down':  { key: 'DOWN',  code: 'ArrowDown' },
    'btn-left':  { key: 'LEFT',  code: 'ArrowLeft' },
    'btn-right': { key: 'RIGHT', code: 'ArrowRight' },
    'btn-action':{ key: 'SPACE', code: 'Space' }
  };

  Object.entries(keyMap).forEach(([btnId, keyData]) => {
    const el = document.getElementById(btnId);
    if (!el) return;

    const dispatchKey = (type) => {
      const event = new KeyboardEvent(type, {
        key: keyData.key,
        code: keyData.code,
        keyCode: getKeyCode(keyData.key),
        which: getKeyCode(keyData.key),
        bubbles: true,
        cancelable: true
      });

      const canvas = document.querySelector('#game-container canvas');
      if (canvas) canvas.dispatchEvent(event);
      window.dispatchEvent(event);
    };

    el.addEventListener('touchstart', (e) => { 
      e.preventDefault(); 
      dispatchKey('keydown'); 
      el.classList.add('pressed');
      playSfx('click'); 
    }, { passive: false });

    el.addEventListener('touchend', (e) => { 
      e.preventDefault(); 
      dispatchKey('keyup'); 
      el.classList.remove('pressed');
    }, { passive: false });

    el.addEventListener('mousedown', () => { 
      dispatchKey('keydown'); 
      el.classList.add('pressed');
    });

    el.addEventListener('mouseup', () => { 
      dispatchKey('keyup'); 
      el.classList.remove('pressed');
    });

    el.addEventListener('mouseleave', () => { 
      dispatchKey('keyup'); 
      el.classList.remove('pressed');
    });
  });

  // Botón CENTRO del D-Pad (●) para abrir chat
  const centerBtn = document.querySelector('.d-center');
  if (centerBtn) {
    centerBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const activeScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (activeScene && activeScene.openChatInput) {
        activeScene.openChatInput();
      }
      centerBtn.classList.add('pressed');
      playSfx('click');
    }, { passive: false });

    centerBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      centerBtn.classList.remove('pressed');
    }, { passive: false });

    centerBtn.addEventListener('mousedown', () => {
      const activeScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (activeScene && activeScene.openChatInput) {
        activeScene.openChatInput();
      }
      centerBtn.classList.add('pressed');
    });

    centerBtn.addEventListener('mouseup', () => {
      centerBtn.classList.remove('pressed');
    });
  }
}

function getKeyCode(key) {
  const codes = {
    'UP': 38, 'DOWN': 40, 'LEFT': 37, 'RIGHT': 39, 'SPACE': 32,
    'ArrowUp': 38, 'ArrowDown': 40, 'ArrowLeft': 37, 'ArrowRight': 39, 'Space': 32
  };
  return codes[key] || 0;
}
 
/* =============================================================
   UTILIDADES
   ============================================================= */
function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
 
let _toastTimer;
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className   = 'toast ' + type + ' show';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  playSfx('notify');
}
 
/* =============================================================
   GLITCH ALEATORIO EN TÍTULOS
   ============================================================= */
setInterval(() => {
  document.querySelectorAll('.hero-title, .foro-title').forEach(t => {
    if (Math.random() > 0.96) {
      const orig = t.style.textShadow;
      t.style.textShadow = `2px 0 var(--red), -2px 0 var(--accent)`;
      setTimeout(() => { t.style.textShadow = orig; }, 120);
    }
  });
}, 4500);
 
/* =============================================================
   INIT — punto de entrada
   ============================================================= */
window.onload = () => {
  initBgCanvas();
  runLoadingAnim();
};
 
function afterLoad() {
  buildSidebar();
  buildMaterials();
  buildForoTabs();
  loadForo();
  initMap();
  initMobileControls();
  bindSfx();
}