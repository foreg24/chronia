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
    type:'sigloxxi', mx:60, my:30.3,  // California (oeste EEUU)
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
   MAPA PIXEL ART — SVG real de amcharts (worldUltra-pixels)
   Canvas overlay solo para marcadores y animaciones
   ============================================================= */

// Paletas de color por época (para teñir el SVG)
const MAP_EPOCH_PALETTES = {
  mesopotamia: { land: '#8B6914', water: '#1a0f05', glow: '#d4a574' },
  egipto:      { land: '#C4A35A', water: '#0c0a02', glow: '#e8c85a' },
  grecia:      { land: '#8A7F6B', water: '#0a0908', glow: '#f0e6d2' },
  edadmedia:   { land: '#5A4A3A', water: '#090809', glow: '#9c7c4a' },
  era1300:     { land: '#7A5A2A', water: '#0b0904', glow: '#c08840' },
  era1700:     { land: '#4A5A6A', water: '#060a0e', glow: '#8fa8c0' },
  sigloxx:     { land: '#1A4A3A', water: '#030d0a', glow: '#00d4aa' },
  sigloxxi:    { land: '#1A2A5A', water: '#03040f', glow: '#00f5ff' },
  default:     { land: '#b19469', water: '#000000', glow: '#d4a574' }
};

const SVG_MAP_SRC = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="58.91 6.7 901.93 501.69" style="background-color:transparent">
  <!-- Created using Pixel Map Generator: pixelmap.amcharts.com -->
  <style>
    .land { fill: #b19469; }
  </style>
  <g id="pixels">
    <g id="GL" title="Greenland" class="land">
      <rect x="412.42" y="8.7" width="3.48" height="3.48"/>
      <rect x="415.9" y="8.7" width="3.48" height="3.48"/>
      <rect x="419.38" y="8.7" width="3.48" height="3.48"/>
      <rect x="422.86" y="8.7" width="3.48" height="3.48"/>
      <rect x="426.34" y="8.7" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="12.18" width="3.48" height="3.48"/>
      <rect x="374.14" y="12.18" width="3.48" height="3.48"/>
      <rect x="377.62" y="12.18" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="12.18" width="3.48" height="3.48"/>
      <rect x="384.58" y="12.18" width="3.48" height="3.48"/>
      <rect x="388.06" y="12.18" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="12.18" width="3.48" height="3.48"/>
      <rect x="395.02" y="12.18" width="3.48" height="3.48"/>
      <rect x="398.5" y="12.18" width="3.48" height="3.48"/>
      <rect x="401.98" y="12.18" width="3.48" height="3.48"/>
      <rect x="405.46" y="12.18" width="3.48" height="3.48"/>
      <rect x="408.94" y="12.18" width="3.48" height="3.48"/>
      <rect x="412.42" y="12.18" width="3.48" height="3.48"/>
      <rect x="415.9" y="12.18" width="3.48" height="3.48"/>
      <rect x="419.38" y="12.18" width="3.48" height="3.48"/>
      <rect x="422.86" y="12.18" width="3.48" height="3.48"/>
      <rect x="426.34" y="12.18" width="3.48" height="3.48"/>
      <rect x="429.82" y="12.18" width="3.48" height="3.48"/>
      <rect x="433.31" y="12.18" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="12.18" width="3.48" height="3.48"/>
      <rect x="450.71" y="12.18" width="3.48" height="3.48"/>
      <rect x="454.19" y="12.18" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="363.7" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="367.18" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="374.14" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="377.62" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="384.58" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="388.06" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="395.02" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="398.5" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="401.98" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="405.46" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="408.94" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="412.42" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="415.9" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="419.38" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="422.86" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="426.34" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="429.82" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="433.31" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="342.82" y="19.14" width="3.48" height="3.48"/>
      <rect x="346.3" y="19.14" width="3.48" height="3.48"/>
      <rect x="349.78" y="19.14" width="3.48" height="3.48"/>
      <rect x="353.26" y="19.14" width="3.48" height="3.48"/>
      <rect x="356.74" y="19.14" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="363.7" y="19.14" width="3.48" height="3.48"/>
      <rect x="367.18" y="19.14" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="374.14" y="19.14" width="3.48" height="3.48"/>
      <rect x="377.62" y="19.14" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="384.58" y="19.14" width="3.48" height="3.48"/>
      <rect x="388.06" y="19.14" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="19.14" width="3.48" height="3.48"/>
      <rect x="395.02" y="19.14" width="3.48" height="3.48"/>
      <rect x="398.5" y="19.14" width="3.48" height="3.48"/>
      <rect x="401.98" y="19.14" width="3.48" height="3.48"/>
      <rect x="405.46" y="19.14" width="3.48" height="3.48"/>
      <rect x="408.94" y="19.14" width="3.48" height="3.48"/>
      <rect x="412.42" y="19.14" width="3.48" height="3.48"/>
      <rect x="415.9" y="19.14" width="3.48" height="3.48"/>
      <rect x="419.38" y="19.14" width="3.48" height="3.48"/>
      <rect x="422.86" y="19.14" width="3.48" height="3.48"/>
      <rect x="426.34" y="19.14" width="3.48" height="3.48"/>
      <rect x="429.82" y="19.14" width="3.48" height="3.48"/>
      <rect x="433.31" y="19.14" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="19.14" width="3.48" height="3.48"/>
      <rect x="342.82" y="22.62" width="3.48" height="3.48"/>
      <rect x="346.3" y="22.62" width="3.48" height="3.48"/>
      <rect x="349.78" y="22.62" width="3.48" height="3.48"/>
      <rect x="353.26" y="22.62" width="3.48" height="3.48"/>
      <rect x="356.74" y="22.62" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="22.62" width="3.48" height="3.48"/>
      <rect x="363.7" y="22.62" width="3.48" height="3.48"/>
      <rect x="367.18" y="22.62" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="22.62" width="3.48" height="3.48"/>
      <rect x="374.14" y="22.62" width="3.48" height="3.48"/>
      <rect x="377.62" y="22.62" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="22.62" width="3.48" height="3.48"/>
      <rect x="384.58" y="22.62" width="3.48" height="3.48"/>
      <rect x="388.06" y="22.62" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="22.62" width="3.48" height="3.48"/>
      <rect x="395.02" y="22.62" width="3.48" height="3.48"/>
      <rect x="398.5" y="22.62" width="3.48" height="3.48"/>
      <rect x="401.98" y="22.62" width="3.48" height="3.48"/>
      <rect x="405.46" y="22.62" width="3.48" height="3.48"/>
      <rect x="408.94" y="22.62" width="3.48" height="3.48"/>
      <rect x="412.42" y="22.62" width="3.48" height="3.48"/>
      <rect x="415.9" y="22.62" width="3.48" height="3.48"/>
      <rect x="419.38" y="22.62" width="3.48" height="3.48"/>
      <rect x="422.86" y="22.62" width="3.48" height="3.48"/>
      <rect x="426.34" y="22.62" width="3.48" height="3.48"/>
      <rect x="429.82" y="22.62" width="3.48" height="3.48"/>
      <rect x="433.31" y="22.62" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="22.62" width="3.48" height="3.48"/>
      <rect x="440.27" y="22.62" width="3.48" height="3.48"/>
      <rect x="367.18" y="26.1" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="26.1" width="3.48" height="3.48"/>
      <rect x="374.14" y="26.1" width="3.48" height="3.48"/>
      <rect x="377.62" y="26.1" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="26.1" width="3.48" height="3.48"/>
      <rect x="384.58" y="26.1" width="3.48" height="3.48"/>
      <rect x="388.06" y="26.1" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="26.1" width="3.48" height="3.48"/>
      <rect x="395.02" y="26.1" width="3.48" height="3.48"/>
      <rect x="398.5" y="26.1" width="3.48" height="3.48"/>
      <rect x="401.98" y="26.1" width="3.48" height="3.48"/>
      <rect x="405.46" y="26.1" width="3.48" height="3.48"/>
      <rect x="408.94" y="26.1" width="3.48" height="3.48"/>
      <rect x="412.42" y="26.1" width="3.48" height="3.48"/>
      <rect x="415.9" y="26.1" width="3.48" height="3.48"/>
      <rect x="419.38" y="26.1" width="3.48" height="3.48"/>
      <rect x="422.86" y="26.1" width="3.48" height="3.48"/>
      <rect x="426.34" y="26.1" width="3.48" height="3.48"/>
      <rect x="429.82" y="26.1" width="3.48" height="3.48"/>
      <rect x="433.31" y="26.1" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="26.1" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="374.14" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="377.62" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="384.58" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="388.06" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="395.02" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="398.5" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="401.98" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="405.46" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="408.94" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="412.42" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="415.9" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="419.38" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="422.86" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="426.34" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="429.82" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="433.31" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="367.18" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="374.14" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="377.62" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="384.58" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="388.06" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="395.02" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="398.5" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="401.98" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="405.46" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="408.94" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="412.42" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="415.9" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="419.38" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="422.86" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="426.34" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="429.82" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="433.31" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="367.18" y="36.54" width="3.48" height="3.48"/>
      <rect x="374.14" y="36.54" width="3.48" height="3.48"/>
      <rect x="377.62" y="36.54" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="36.54" width="3.48" height="3.48"/>
      <rect x="384.58" y="36.54" width="3.48" height="3.48"/>
      <rect x="388.06" y="36.54" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="36.54" width="3.48" height="3.48"/>
      <rect x="395.02" y="36.54" width="3.48" height="3.48"/>
      <rect x="398.5" y="36.54" width="3.48" height="3.48"/>
      <rect x="401.98" y="36.54" width="3.48" height="3.48"/>
      <rect x="405.46" y="36.54" width="3.48" height="3.48"/>
      <rect x="408.94" y="36.54" width="3.48" height="3.48"/>
      <rect x="412.42" y="36.54" width="3.48" height="3.48"/>
      <rect x="415.9" y="36.54" width="3.48" height="3.48"/>
      <rect x="419.38" y="36.54" width="3.48" height="3.48"/>
      <rect x="422.86" y="36.54" width="3.48" height="3.48"/>
      <rect x="429.82" y="36.54" width="3.48" height="3.48"/>
      <rect x="433.31" y="36.54" width="3.48" height="3.48"/>
      <rect x="367.18" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="374.14" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="377.62" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="384.58" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="388.06" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="395.02" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="398.5" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="401.98" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="405.46" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="408.94" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="412.42" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="415.9" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="419.38" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="422.86" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="426.34" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="429.82" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="374.14" y="43.5" width="3.48" height="3.48"/>
      <rect x="377.62" y="43.5" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="43.5" width="3.48" height="3.48"/>
      <rect x="384.58" y="43.5" width="3.48" height="3.48"/>
      <rect x="388.06" y="43.5" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="43.5" width="3.48" height="3.48"/>
      <rect x="395.02" y="43.5" width="3.48" height="3.48"/>
      <rect x="398.5" y="43.5" width="3.48" height="3.48"/>
      <rect x="401.98" y="43.5" width="3.48" height="3.48"/>
      <rect x="405.46" y="43.5" width="3.48" height="3.48"/>
      <rect x="408.94" y="43.5" width="3.48" height="3.48"/>
      <rect x="412.42" y="43.5" width="3.48" height="3.48"/>
      <rect x="415.9" y="43.5" width="3.48" height="3.48"/>
      <rect x="419.38" y="43.5" width="3.48" height="3.48"/>
      <rect x="422.86" y="43.5" width="3.48" height="3.48"/>
      <rect x="367.18" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="374.14" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="377.62" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="384.58" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="388.06" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="395.02" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="398.5" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="401.98" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="405.46" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="367.18" y="50.47" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="50.47" width="3.48" height="3.48"/>
      <rect x="374.14" y="50.47" width="3.48" height="3.48"/>
      <rect x="377.62" y="50.47" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="50.47" width="3.48" height="3.48"/>
      <rect x="384.58" y="50.47" width="3.48" height="3.48"/>
      <rect x="388.06" y="50.47" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="50.47" width="3.48" height="3.48"/>
      <rect x="395.02" y="50.47" width="3.48" height="3.48"/>
      <rect x="398.5" y="50.47" width="3.48" height="3.48"/>
      <rect x="401.98" y="50.47" width="3.48" height="3.48"/>
      <rect x="367.18" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="374.14" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="377.62" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="384.58" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="388.06" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="367.18" y="57.43" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="57.43" width="3.48" height="3.48"/>
      <rect x="374.14" y="57.43" width="3.48" height="3.48"/>
      <rect x="377.62" y="57.43" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="57.43" width="3.48" height="3.48"/>
      <rect x="384.58" y="57.43" width="3.48" height="3.48"/>
      <rect x="388.06" y="57.43" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="60.91" width="3.48" height="3.48"/>
      <rect x="374.14" y="60.91" width="3.48" height="3.48"/>
      <rect x="377.62" y="60.91" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="60.91" width="3.48" height="3.48"/>
      <rect x="384.58" y="60.91" width="3.48" height="3.48"/>
      <rect x="374.14" y="64.39" width="3.48" height="3.48"/>
      <rect x="377.62" y="64.39" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="64.39" width="3.48" height="3.48"/>
    </g>
    <g id="CA" title="Canada" class="land">
      <rect x="314.96999999999997" y="12.18" width="3.48" height="3.48"/>
      <rect x="318.45" y="12.18" width="3.48" height="3.48"/>
      <rect x="321.93" y="12.18" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="12.18" width="3.48" height="3.48"/>
      <rect x="328.89" y="12.18" width="3.48" height="3.48"/>
      <rect x="332.37" y="12.18" width="3.48" height="3.48"/>
      <rect x="335.86" y="12.18" width="3.48" height="3.48"/>
      <rect x="339.34" y="12.18" width="3.48" height="3.48"/>
      <rect x="342.82" y="12.18" width="3.48" height="3.48"/>
      <rect x="346.3" y="12.18" width="3.48" height="3.48"/>
      <rect x="349.78" y="12.18" width="3.48" height="3.48"/>
      <rect x="353.26" y="12.18" width="3.48" height="3.48"/>
      <rect x="356.74" y="12.18" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="12.18" width="3.48" height="3.48"/>
      <rect x="301.05" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="304.53" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="308.01" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="311.49" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="321.93" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="328.89" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="332.37" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="335.86" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="339.34" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="342.82" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="346.3" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="269.73" y="19.14" width="3.48" height="3.48"/>
      <rect x="273.21" y="19.14" width="3.48" height="3.48"/>
      <rect x="283.65" y="19.14" width="3.48" height="3.48"/>
      <rect x="287.13" y="19.14" width="3.48" height="3.48"/>
      <rect x="290.61" y="19.14" width="3.48" height="3.48"/>
      <rect x="297.57" y="19.14" width="3.48" height="3.48"/>
      <rect x="308.01" y="19.14" width="3.48" height="3.48"/>
      <rect x="311.49" y="19.14" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="318.45" y="19.14" width="3.48" height="3.48"/>
      <rect x="321.93" y="19.14" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="328.89" y="19.14" width="3.48" height="3.48"/>
      <rect x="332.37" y="19.14" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="22.62" width="3.48" height="3.48"/>
      <rect x="255.81" y="22.62" width="3.48" height="3.48"/>
      <rect x="297.57" y="22.62" width="3.48" height="3.48"/>
      <rect x="311.49" y="22.62" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="22.62" width="3.48" height="3.48"/>
      <rect x="318.45" y="22.62" width="3.48" height="3.48"/>
      <rect x="321.93" y="22.62" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="22.62" width="3.48" height="3.48"/>
      <rect x="248.85" y="26.1" width="3.48" height="3.48"/>
      <rect x="255.81" y="26.1" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="26.1" width="3.48" height="3.48"/>
      <rect x="262.77" y="26.1" width="3.48" height="3.48"/>
      <rect x="269.73" y="26.1" width="3.48" height="3.48"/>
      <rect x="273.21" y="26.1" width="3.48" height="3.48"/>
      <rect x="280.17" y="26.1" width="3.48" height="3.48"/>
      <rect x="287.13" y="26.1" width="3.48" height="3.48"/>
      <rect x="294.09" y="26.1" width="3.48" height="3.48"/>
      <rect x="301.05" y="26.1" width="3.48" height="3.48"/>
      <rect x="304.53" y="26.1" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="26.1" width="3.48" height="3.48"/>
      <rect x="318.45" y="26.1" width="3.48" height="3.48"/>
      <rect x="321.93" y="26.1" width="3.48" height="3.48"/>
      <rect x="234.92" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="238.41" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="241.89" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="248.85" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="231.44" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="234.92" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="238.41" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="241.89" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="245.37" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="248.85" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="255.81" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="266.25" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="276.69" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="280.17" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="283.65" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="290.61" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="294.09" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="301.05" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="304.53" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="308.01" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="311.49" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="318.45" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="231.44" y="36.54" width="3.48" height="3.48"/>
      <rect x="245.37" y="36.54" width="3.48" height="3.48"/>
      <rect x="248.85" y="36.54" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="36.54" width="3.48" height="3.48"/>
      <rect x="255.81" y="36.54" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="36.54" width="3.48" height="3.48"/>
      <rect x="262.77" y="36.54" width="3.48" height="3.48"/>
      <rect x="266.25" y="36.54" width="3.48" height="3.48"/>
      <rect x="280.17" y="36.54" width="3.48" height="3.48"/>
      <rect x="287.13" y="36.54" width="3.48" height="3.48"/>
      <rect x="301.05" y="36.54" width="3.48" height="3.48"/>
      <rect x="304.53" y="36.54" width="3.48" height="3.48"/>
      <rect x="308.01" y="36.54" width="3.48" height="3.48"/>
      <rect x="311.49" y="36.54" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="36.54" width="3.48" height="3.48"/>
      <rect x="318.45" y="36.54" width="3.48" height="3.48"/>
      <rect x="321.93" y="36.54" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="36.54" width="3.48" height="3.48"/>
      <rect x="328.89" y="36.54" width="3.48" height="3.48"/>
      <rect x="332.37" y="36.54" width="3.48" height="3.48"/>
      <rect x="214.04" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="224.48" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="241.89" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="245.37" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="248.85" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="255.81" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="262.77" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="266.25" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="269.73" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="283.65" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="287.13" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="301.05" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="308.01" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="311.49" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="321.93" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="328.89" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="332.37" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="335.86" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="339.34" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="193.16" y="43.5" width="3.48" height="3.48"/>
      <rect x="196.64" y="43.5" width="3.48" height="3.48"/>
      <rect x="200.12" y="43.5" width="3.48" height="3.48"/>
      <rect x="203.6" y="43.5" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="210.56" y="43.5" width="3.48" height="3.48"/>
      <rect x="214.04" y="43.5" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="221" y="43.5" width="3.48" height="3.48"/>
      <rect x="224.48" y="43.5" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="231.44" y="43.5" width="3.48" height="3.48"/>
      <rect x="234.92" y="43.5" width="3.48" height="3.48"/>
      <rect x="238.41" y="43.5" width="3.48" height="3.48"/>
      <rect x="245.37" y="43.5" width="3.48" height="3.48"/>
      <rect x="248.85" y="43.5" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="43.5" width="3.48" height="3.48"/>
      <rect x="276.69" y="43.5" width="3.48" height="3.48"/>
      <rect x="280.17" y="43.5" width="3.48" height="3.48"/>
      <rect x="283.65" y="43.5" width="3.48" height="3.48"/>
      <rect x="287.13" y="43.5" width="3.48" height="3.48"/>
      <rect x="290.61" y="43.5" width="3.48" height="3.48"/>
      <rect x="294.09" y="43.5" width="3.48" height="3.48"/>
      <rect x="304.53" y="43.5" width="3.48" height="3.48"/>
      <rect x="308.01" y="43.5" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="43.5" width="3.48" height="3.48"/>
      <rect x="328.89" y="43.5" width="3.48" height="3.48"/>
      <rect x="332.37" y="43.5" width="3.48" height="3.48"/>
      <rect x="335.86" y="43.5" width="3.48" height="3.48"/>
      <rect x="186.2" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="193.16" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="196.64" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="200.12" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="203.6" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="210.56" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="214.04" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="221" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="224.48" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="231.44" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="234.92" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="238.41" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="241.89" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="245.37" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="248.85" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="255.81" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="262.77" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="266.25" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="269.73" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="273.21" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="276.69" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="280.17" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="283.65" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="287.13" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="290.61" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="294.09" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="297.57" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="301.05" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="304.53" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="308.01" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="318.45" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="328.89" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="332.37" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="335.86" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="339.34" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="342.82" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="182.72" y="50.47" width="3.48" height="3.48"/>
      <rect x="186.2" y="50.47" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="193.16" y="50.47" width="3.48" height="3.48"/>
      <rect x="196.64" y="50.47" width="3.48" height="3.48"/>
      <rect x="200.12" y="50.47" width="3.48" height="3.48"/>
      <rect x="203.6" y="50.47" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="210.56" y="50.47" width="3.48" height="3.48"/>
      <rect x="214.04" y="50.47" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="221" y="50.47" width="3.48" height="3.48"/>
      <rect x="224.48" y="50.47" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="231.44" y="50.47" width="3.48" height="3.48"/>
      <rect x="234.92" y="50.47" width="3.48" height="3.48"/>
      <rect x="238.41" y="50.47" width="3.48" height="3.48"/>
      <rect x="241.89" y="50.47" width="3.48" height="3.48"/>
      <rect x="245.37" y="50.47" width="3.48" height="3.48"/>
      <rect x="248.85" y="50.47" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="255.81" y="50.47" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="50.47" width="3.48" height="3.48"/>
      <rect x="262.77" y="50.47" width="3.48" height="3.48"/>
      <rect x="266.25" y="50.47" width="3.48" height="3.48"/>
      <rect x="269.73" y="50.47" width="3.48" height="3.48"/>
      <rect x="273.21" y="50.47" width="3.48" height="3.48"/>
      <rect x="276.69" y="50.47" width="3.48" height="3.48"/>
      <rect x="280.17" y="50.47" width="3.48" height="3.48"/>
      <rect x="283.65" y="50.47" width="3.48" height="3.48"/>
      <rect x="287.13" y="50.47" width="3.48" height="3.48"/>
      <rect x="290.61" y="50.47" width="3.48" height="3.48"/>
      <rect x="294.09" y="50.47" width="3.48" height="3.48"/>
      <rect x="321.93" y="50.47" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="50.47" width="3.48" height="3.48"/>
      <rect x="328.89" y="50.47" width="3.48" height="3.48"/>
      <rect x="332.37" y="50.47" width="3.48" height="3.48"/>
      <rect x="339.34" y="50.47" width="3.48" height="3.48"/>
      <rect x="342.82" y="50.47" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="182.72" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="186.2" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="193.16" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="196.64" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="200.12" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="203.6" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="210.56" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="214.04" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="221" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="224.48" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="231.44" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="234.92" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="238.41" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="241.89" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="245.37" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="248.85" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="255.81" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="262.77" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="266.25" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="269.73" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="273.21" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="276.69" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="280.17" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="283.65" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="287.13" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="290.61" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="294.09" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="297.57" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="301.05" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="311.49" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="318.45" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="321.93" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="328.89" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="332.37" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="335.86" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="175.76" y="57.43" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="182.72" y="57.43" width="3.48" height="3.48"/>
      <rect x="186.2" y="57.43" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="193.16" y="57.43" width="3.48" height="3.48"/>
      <rect x="196.64" y="57.43" width="3.48" height="3.48"/>
      <rect x="200.12" y="57.43" width="3.48" height="3.48"/>
      <rect x="203.6" y="57.43" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="210.56" y="57.43" width="3.48" height="3.48"/>
      <rect x="214.04" y="57.43" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="221" y="57.43" width="3.48" height="3.48"/>
      <rect x="224.48" y="57.43" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="231.44" y="57.43" width="3.48" height="3.48"/>
      <rect x="234.92" y="57.43" width="3.48" height="3.48"/>
      <rect x="238.41" y="57.43" width="3.48" height="3.48"/>
      <rect x="241.89" y="57.43" width="3.48" height="3.48"/>
      <rect x="245.37" y="57.43" width="3.48" height="3.48"/>
      <rect x="248.85" y="57.43" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="255.81" y="57.43" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="57.43" width="3.48" height="3.48"/>
      <rect x="262.77" y="57.43" width="3.48" height="3.48"/>
      <rect x="266.25" y="57.43" width="3.48" height="3.48"/>
      <rect x="269.73" y="57.43" width="3.48" height="3.48"/>
      <rect x="273.21" y="57.43" width="3.48" height="3.48"/>
      <rect x="276.69" y="57.43" width="3.48" height="3.48"/>
      <rect x="280.17" y="57.43" width="3.48" height="3.48"/>
      <rect x="290.61" y="57.43" width="3.48" height="3.48"/>
      <rect x="294.09" y="57.43" width="3.48" height="3.48"/>
      <rect x="311.49" y="57.43" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="57.43" width="3.48" height="3.48"/>
      <rect x="328.89" y="57.43" width="3.48" height="3.48"/>
      <rect x="332.37" y="57.43" width="3.48" height="3.48"/>
      <rect x="335.86" y="57.43" width="3.48" height="3.48"/>
      <rect x="172.28" y="60.91" width="3.48" height="3.48"/>
      <rect x="175.76" y="60.91" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="182.72" y="60.91" width="3.48" height="3.48"/>
      <rect x="186.2" y="60.91" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="193.16" y="60.91" width="3.48" height="3.48"/>
      <rect x="196.64" y="60.91" width="3.48" height="3.48"/>
      <rect x="200.12" y="60.91" width="3.48" height="3.48"/>
      <rect x="203.6" y="60.91" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="210.56" y="60.91" width="3.48" height="3.48"/>
      <rect x="214.04" y="60.91" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="221" y="60.91" width="3.48" height="3.48"/>
      <rect x="224.48" y="60.91" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="231.44" y="60.91" width="3.48" height="3.48"/>
      <rect x="234.92" y="60.91" width="3.48" height="3.48"/>
      <rect x="238.41" y="60.91" width="3.48" height="3.48"/>
      <rect x="241.89" y="60.91" width="3.48" height="3.48"/>
      <rect x="245.37" y="60.91" width="3.48" height="3.48"/>
      <rect x="248.85" y="60.91" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="255.81" y="60.91" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="60.91" width="3.48" height="3.48"/>
      <rect x="262.77" y="60.91" width="3.48" height="3.48"/>
      <rect x="266.25" y="60.91" width="3.48" height="3.48"/>
      <rect x="269.73" y="60.91" width="3.48" height="3.48"/>
      <rect x="273.21" y="60.91" width="3.48" height="3.48"/>
      <rect x="297.57" y="60.91" width="3.48" height="3.48"/>
      <rect x="304.53" y="60.91" width="3.48" height="3.48"/>
      <rect x="311.49" y="60.91" width="3.48" height="3.48"/>
      <rect x="328.89" y="60.91" width="3.48" height="3.48"/>
      <rect x="332.37" y="60.91" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="172.28" y="64.39" width="3.48" height="3.48"/>
      <rect x="175.76" y="64.39" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="182.72" y="64.39" width="3.48" height="3.48"/>
      <rect x="186.2" y="64.39" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="193.16" y="64.39" width="3.48" height="3.48"/>
      <rect x="196.64" y="64.39" width="3.48" height="3.48"/>
      <rect x="200.12" y="64.39" width="3.48" height="3.48"/>
      <rect x="203.6" y="64.39" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="210.56" y="64.39" width="3.48" height="3.48"/>
      <rect x="214.04" y="64.39" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="221" y="64.39" width="3.48" height="3.48"/>
      <rect x="224.48" y="64.39" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="231.44" y="64.39" width="3.48" height="3.48"/>
      <rect x="234.92" y="64.39" width="3.48" height="3.48"/>
      <rect x="238.41" y="64.39" width="3.48" height="3.48"/>
      <rect x="241.89" y="64.39" width="3.48" height="3.48"/>
      <rect x="245.37" y="64.39" width="3.48" height="3.48"/>
      <rect x="248.85" y="64.39" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="255.81" y="64.39" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="64.39" width="3.48" height="3.48"/>
      <rect x="262.77" y="64.39" width="3.48" height="3.48"/>
      <rect x="266.25" y="64.39" width="3.48" height="3.48"/>
      <rect x="269.73" y="64.39" width="3.48" height="3.48"/>
      <rect x="308.01" y="64.39" width="3.48" height="3.48"/>
      <rect x="311.49" y="64.39" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="64.39" width="3.48" height="3.48"/>
      <rect x="318.45" y="64.39" width="3.48" height="3.48"/>
      <rect x="172.28" y="67.87" width="3.48" height="3.48"/>
      <rect x="175.76" y="67.87" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="182.72" y="67.87" width="3.48" height="3.48"/>
      <rect x="186.2" y="67.87" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="193.16" y="67.87" width="3.48" height="3.48"/>
      <rect x="196.64" y="67.87" width="3.48" height="3.48"/>
      <rect x="200.12" y="67.87" width="3.48" height="3.48"/>
      <rect x="203.6" y="67.87" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="210.56" y="67.87" width="3.48" height="3.48"/>
      <rect x="214.04" y="67.87" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="221" y="67.87" width="3.48" height="3.48"/>
      <rect x="224.48" y="67.87" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="231.44" y="67.87" width="3.48" height="3.48"/>
      <rect x="234.92" y="67.87" width="3.48" height="3.48"/>
      <rect x="238.41" y="67.87" width="3.48" height="3.48"/>
      <rect x="241.89" y="67.87" width="3.48" height="3.48"/>
      <rect x="245.37" y="67.87" width="3.48" height="3.48"/>
      <rect x="248.85" y="67.87" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="255.81" y="67.87" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="67.87" width="3.48" height="3.48"/>
      <rect x="262.77" y="67.87" width="3.48" height="3.48"/>
      <rect x="266.25" y="67.87" width="3.48" height="3.48"/>
      <rect x="308.01" y="67.87" width="3.48" height="3.48"/>
      <rect x="311.49" y="67.87" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="67.87" width="3.48" height="3.48"/>
      <rect x="318.45" y="67.87" width="3.48" height="3.48"/>
      <rect x="321.93" y="67.87" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="304.53" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="308.01" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="311.49" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="318.45" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="321.93" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="328.89" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="332.37" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="335.86" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="182.72" y="74.83" width="3.48" height="3.48"/>
      <rect x="186.2" y="74.83" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="193.16" y="74.83" width="3.48" height="3.48"/>
      <rect x="196.64" y="74.83" width="3.48" height="3.48"/>
      <rect x="200.12" y="74.83" width="3.48" height="3.48"/>
      <rect x="203.6" y="74.83" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="210.56" y="74.83" width="3.48" height="3.48"/>
      <rect x="214.04" y="74.83" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="221" y="74.83" width="3.48" height="3.48"/>
      <rect x="224.48" y="74.83" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="231.44" y="74.83" width="3.48" height="3.48"/>
      <rect x="234.92" y="74.83" width="3.48" height="3.48"/>
      <rect x="238.41" y="74.83" width="3.48" height="3.48"/>
      <rect x="241.89" y="74.83" width="3.48" height="3.48"/>
      <rect x="245.37" y="74.83" width="3.48" height="3.48"/>
      <rect x="248.85" y="74.83" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="255.81" y="74.83" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="74.83" width="3.48" height="3.48"/>
      <rect x="262.77" y="74.83" width="3.48" height="3.48"/>
      <rect x="266.25" y="74.83" width="3.48" height="3.48"/>
      <rect x="308.01" y="74.83" width="3.48" height="3.48"/>
      <rect x="311.49" y="74.83" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="74.83" width="3.48" height="3.48"/>
      <rect x="318.45" y="74.83" width="3.48" height="3.48"/>
      <rect x="321.93" y="74.83" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="74.83" width="3.48" height="3.48"/>
      <rect x="328.89" y="74.83" width="3.48" height="3.48"/>
      <rect x="332.37" y="74.83" width="3.48" height="3.48"/>
      <rect x="335.86" y="74.83" width="3.48" height="3.48"/>
      <rect x="182.72" y="78.31" width="3.48" height="3.48"/>
      <rect x="186.2" y="78.31" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="193.16" y="78.31" width="3.48" height="3.48"/>
      <rect x="196.64" y="78.31" width="3.48" height="3.48"/>
      <rect x="200.12" y="78.31" width="3.48" height="3.48"/>
      <rect x="203.6" y="78.31" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="210.56" y="78.31" width="3.48" height="3.48"/>
      <rect x="214.04" y="78.31" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="221" y="78.31" width="3.48" height="3.48"/>
      <rect x="224.48" y="78.31" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="231.44" y="78.31" width="3.48" height="3.48"/>
      <rect x="234.92" y="78.31" width="3.48" height="3.48"/>
      <rect x="238.41" y="78.31" width="3.48" height="3.48"/>
      <rect x="241.89" y="78.31" width="3.48" height="3.48"/>
      <rect x="245.37" y="78.31" width="3.48" height="3.48"/>
      <rect x="248.85" y="78.31" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="255.81" y="78.31" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="78.31" width="3.48" height="3.48"/>
      <rect x="262.77" y="78.31" width="3.48" height="3.48"/>
      <rect x="266.25" y="78.31" width="3.48" height="3.48"/>
      <rect x="269.73" y="78.31" width="3.48" height="3.48"/>
      <rect x="273.21" y="78.31" width="3.48" height="3.48"/>
      <rect x="276.69" y="78.31" width="3.48" height="3.48"/>
      <rect x="297.57" y="78.31" width="3.48" height="3.48"/>
      <rect x="304.53" y="78.31" width="3.48" height="3.48"/>
      <rect x="308.01" y="78.31" width="3.48" height="3.48"/>
      <rect x="311.49" y="78.31" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="78.31" width="3.48" height="3.48"/>
      <rect x="318.45" y="78.31" width="3.48" height="3.48"/>
      <rect x="321.93" y="78.31" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="78.31" width="3.48" height="3.48"/>
      <rect x="328.89" y="78.31" width="3.48" height="3.48"/>
      <rect x="332.37" y="78.31" width="3.48" height="3.48"/>
      <rect x="335.86" y="78.31" width="3.48" height="3.48"/>
      <rect x="182.72" y="81.79" width="3.48" height="3.48"/>
      <rect x="186.2" y="81.79" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="193.16" y="81.79" width="3.48" height="3.48"/>
      <rect x="196.64" y="81.79" width="3.48" height="3.48"/>
      <rect x="200.12" y="81.79" width="3.48" height="3.48"/>
      <rect x="203.6" y="81.79" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="210.56" y="81.79" width="3.48" height="3.48"/>
      <rect x="214.04" y="81.79" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="221" y="81.79" width="3.48" height="3.48"/>
      <rect x="224.48" y="81.79" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="231.44" y="81.79" width="3.48" height="3.48"/>
      <rect x="234.92" y="81.79" width="3.48" height="3.48"/>
      <rect x="238.41" y="81.79" width="3.48" height="3.48"/>
      <rect x="241.89" y="81.79" width="3.48" height="3.48"/>
      <rect x="245.37" y="81.79" width="3.48" height="3.48"/>
      <rect x="248.85" y="81.79" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="255.81" y="81.79" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="81.79" width="3.48" height="3.48"/>
      <rect x="262.77" y="81.79" width="3.48" height="3.48"/>
      <rect x="266.25" y="81.79" width="3.48" height="3.48"/>
      <rect x="269.73" y="81.79" width="3.48" height="3.48"/>
      <rect x="273.21" y="81.79" width="3.48" height="3.48"/>
      <rect x="276.69" y="81.79" width="3.48" height="3.48"/>
      <rect x="280.17" y="81.79" width="3.48" height="3.48"/>
      <rect x="283.65" y="81.79" width="3.48" height="3.48"/>
      <rect x="287.13" y="81.79" width="3.48" height="3.48"/>
      <rect x="301.05" y="81.79" width="3.48" height="3.48"/>
      <rect x="304.53" y="81.79" width="3.48" height="3.48"/>
      <rect x="308.01" y="81.79" width="3.48" height="3.48"/>
      <rect x="311.49" y="81.79" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="81.79" width="3.48" height="3.48"/>
      <rect x="318.45" y="81.79" width="3.48" height="3.48"/>
      <rect x="321.93" y="81.79" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="81.79" width="3.48" height="3.48"/>
      <rect x="328.89" y="81.79" width="3.48" height="3.48"/>
      <rect x="332.37" y="81.79" width="3.48" height="3.48"/>
      <rect x="335.86" y="81.79" width="3.48" height="3.48"/>
      <rect x="339.34" y="81.79" width="3.48" height="3.48"/>
      <rect x="172.28" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="276.69" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="301.05" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="304.53" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="308.01" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="311.49" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="318.45" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="321.93" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="328.89" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="332.37" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="335.86" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="339.34" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="342.82" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="182.72" y="88.75" width="3.48" height="3.48"/>
      <rect x="186.2" y="88.75" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="193.16" y="88.75" width="3.48" height="3.48"/>
      <rect x="196.64" y="88.75" width="3.48" height="3.48"/>
      <rect x="200.12" y="88.75" width="3.48" height="3.48"/>
      <rect x="203.6" y="88.75" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="210.56" y="88.75" width="3.48" height="3.48"/>
      <rect x="214.04" y="88.75" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="221" y="88.75" width="3.48" height="3.48"/>
      <rect x="224.48" y="88.75" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="231.44" y="88.75" width="3.48" height="3.48"/>
      <rect x="234.92" y="88.75" width="3.48" height="3.48"/>
      <rect x="238.41" y="88.75" width="3.48" height="3.48"/>
      <rect x="241.89" y="88.75" width="3.48" height="3.48"/>
      <rect x="245.37" y="88.75" width="3.48" height="3.48"/>
      <rect x="248.85" y="88.75" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="88.75" width="3.48" height="3.48"/>
      <rect x="255.81" y="88.75" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="88.75" width="3.48" height="3.48"/>
      <rect x="262.77" y="88.75" width="3.48" height="3.48"/>
      <rect x="266.25" y="88.75" width="3.48" height="3.48"/>
      <rect x="269.73" y="88.75" width="3.48" height="3.48"/>
      <rect x="273.21" y="88.75" width="3.48" height="3.48"/>
      <rect x="276.69" y="88.75" width="3.48" height="3.48"/>
      <rect x="280.17" y="88.75" width="3.48" height="3.48"/>
      <rect x="283.65" y="88.75" width="3.48" height="3.48"/>
      <rect x="297.57" y="88.75" width="3.48" height="3.48"/>
      <rect x="301.05" y="88.75" width="3.48" height="3.48"/>
      <rect x="304.53" y="88.75" width="3.48" height="3.48"/>
      <rect x="308.01" y="88.75" width="3.48" height="3.48"/>
      <rect x="311.49" y="88.75" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="88.75" width="3.48" height="3.48"/>
      <rect x="318.45" y="88.75" width="3.48" height="3.48"/>
      <rect x="321.93" y="88.75" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="88.75" width="3.48" height="3.48"/>
      <rect x="328.89" y="88.75" width="3.48" height="3.48"/>
      <rect x="332.37" y="88.75" width="3.48" height="3.48"/>
      <rect x="335.86" y="88.75" width="3.48" height="3.48"/>
      <rect x="339.34" y="88.75" width="3.48" height="3.48"/>
      <rect x="342.82" y="88.75" width="3.48" height="3.48"/>
      <rect x="346.3" y="88.75" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="182.72" y="92.23" width="3.48" height="3.48"/>
      <rect x="186.2" y="92.23" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="193.16" y="92.23" width="3.48" height="3.48"/>
      <rect x="196.64" y="92.23" width="3.48" height="3.48"/>
      <rect x="200.12" y="92.23" width="3.48" height="3.48"/>
      <rect x="203.6" y="92.23" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="210.56" y="92.23" width="3.48" height="3.48"/>
      <rect x="214.04" y="92.23" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="221" y="92.23" width="3.48" height="3.48"/>
      <rect x="224.48" y="92.23" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="231.44" y="92.23" width="3.48" height="3.48"/>
      <rect x="234.92" y="92.23" width="3.48" height="3.48"/>
      <rect x="238.41" y="92.23" width="3.48" height="3.48"/>
      <rect x="241.89" y="92.23" width="3.48" height="3.48"/>
      <rect x="245.37" y="92.23" width="3.48" height="3.48"/>
      <rect x="248.85" y="92.23" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="92.23" width="3.48" height="3.48"/>
      <rect x="255.81" y="92.23" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="92.23" width="3.48" height="3.48"/>
      <rect x="262.77" y="92.23" width="3.48" height="3.48"/>
      <rect x="266.25" y="92.23" width="3.48" height="3.48"/>
      <rect x="269.73" y="92.23" width="3.48" height="3.48"/>
      <rect x="273.21" y="92.23" width="3.48" height="3.48"/>
      <rect x="276.69" y="92.23" width="3.48" height="3.48"/>
      <rect x="280.17" y="92.23" width="3.48" height="3.48"/>
      <rect x="283.65" y="92.23" width="3.48" height="3.48"/>
      <rect x="287.13" y="92.23" width="3.48" height="3.48"/>
      <rect x="294.09" y="92.23" width="3.48" height="3.48"/>
      <rect x="297.57" y="92.23" width="3.48" height="3.48"/>
      <rect x="301.05" y="92.23" width="3.48" height="3.48"/>
      <rect x="304.53" y="92.23" width="3.48" height="3.48"/>
      <rect x="308.01" y="92.23" width="3.48" height="3.48"/>
      <rect x="311.49" y="92.23" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="92.23" width="3.48" height="3.48"/>
      <rect x="318.45" y="92.23" width="3.48" height="3.48"/>
      <rect x="321.93" y="92.23" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="92.23" width="3.48" height="3.48"/>
      <rect x="328.89" y="92.23" width="3.48" height="3.48"/>
      <rect x="332.37" y="92.23" width="3.48" height="3.48"/>
      <rect x="335.86" y="92.23" width="3.48" height="3.48"/>
      <rect x="339.34" y="92.23" width="3.48" height="3.48"/>
      <rect x="342.82" y="92.23" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="276.69" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="290.61" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="294.09" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="301.05" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="304.53" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="308.01" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="311.49" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="318.45" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="321.93" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="328.89" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="332.37" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="335.86" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="342.82" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="276.69" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="290.61" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="294.09" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="301.05" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="304.53" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="308.01" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="311.49" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="321.93" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="328.89" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="339.34" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="342.82" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="346.3" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="349.78" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="102.67" width="3.48" height="3.48"/>
      <rect x="262.77" y="102.67" width="3.48" height="3.48"/>
      <rect x="269.73" y="102.67" width="3.48" height="3.48"/>
      <rect x="273.21" y="102.67" width="3.48" height="3.48"/>
      <rect x="276.69" y="102.67" width="3.48" height="3.48"/>
      <rect x="280.17" y="102.67" width="3.48" height="3.48"/>
      <rect x="283.65" y="102.67" width="3.48" height="3.48"/>
      <rect x="287.13" y="102.67" width="3.48" height="3.48"/>
      <rect x="290.61" y="102.67" width="3.48" height="3.48"/>
      <rect x="294.09" y="102.67" width="3.48" height="3.48"/>
      <rect x="297.57" y="102.67" width="3.48" height="3.48"/>
      <rect x="301.05" y="102.67" width="3.48" height="3.48"/>
      <rect x="304.53" y="102.67" width="3.48" height="3.48"/>
      <rect x="308.01" y="102.67" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="102.67" width="3.48" height="3.48"/>
      <rect x="339.34" y="102.67" width="3.48" height="3.48"/>
      <rect x="342.82" y="102.67" width="3.48" height="3.48"/>
      <rect x="346.3" y="102.67" width="3.48" height="3.48"/>
      <rect x="273.21" y="106.15" width="3.48" height="3.48"/>
      <rect x="276.69" y="106.15" width="3.48" height="3.48"/>
      <rect x="280.17" y="106.15" width="3.48" height="3.48"/>
      <rect x="283.65" y="106.15" width="3.48" height="3.48"/>
      <rect x="287.13" y="106.15" width="3.48" height="3.48"/>
      <rect x="290.61" y="106.15" width="3.48" height="3.48"/>
      <rect x="294.09" y="106.15" width="3.48" height="3.48"/>
      <rect x="297.57" y="106.15" width="3.48" height="3.48"/>
      <rect x="301.05" y="106.15" width="3.48" height="3.48"/>
      <rect x="304.53" y="106.15" width="3.48" height="3.48"/>
      <rect x="308.01" y="106.15" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="106.15" width="3.48" height="3.48"/>
      <rect x="318.45" y="106.15" width="3.48" height="3.48"/>
      <rect x="342.82" y="106.15" width="3.48" height="3.48"/>
      <rect x="349.78" y="106.15" width="3.48" height="3.48"/>
      <rect x="276.69" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="290.61" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="294.09" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="301.05" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="304.53" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="318.45" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="321.93" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="328.89" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="113.11" width="3.48" height="3.48"/>
      <rect x="283.65" y="113.11" width="3.48" height="3.48"/>
      <rect x="287.13" y="113.11" width="3.48" height="3.48"/>
      <rect x="290.61" y="113.11" width="3.48" height="3.48"/>
      <rect x="318.45" y="113.11" width="3.48" height="3.48"/>
      <rect x="321.93" y="113.11" width="3.48" height="3.48"/>
      <rect x="276.69" y="116.59" width="3.48" height="3.48"/>
      <rect x="280.17" y="116.59" width="3.48" height="3.48"/>
      <rect x="283.65" y="116.59" width="3.48" height="3.48"/>
      <rect x="276.69" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="RU" title="Russia" class="land">
      <rect x="589.92" y="12.18" width="3.48" height="3.48"/>
      <rect x="569.04" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="19.14" width="3.48" height="3.48"/>
      <rect x="666.49" y="19.14" width="3.48" height="3.48"/>
      <rect x="669.97" y="19.14" width="3.48" height="3.48"/>
      <rect x="669.97" y="22.62" width="3.48" height="3.48"/>
      <rect x="673.45" y="22.62" width="3.48" height="3.48"/>
      <rect x="589.92" y="26.1" width="3.48" height="3.48"/>
      <rect x="593.4" y="26.1" width="3.48" height="3.48"/>
      <rect x="596.88" y="26.1" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="26.1" width="3.48" height="3.48"/>
      <rect x="656.05" y="26.1" width="3.48" height="3.48"/>
      <rect x="659.53" y="26.1" width="3.48" height="3.48"/>
      <rect x="663.01" y="26.1" width="3.48" height="3.48"/>
      <rect x="666.49" y="26.1" width="3.48" height="3.48"/>
      <rect x="669.97" y="26.1" width="3.48" height="3.48"/>
      <rect x="673.45" y="26.1" width="3.48" height="3.48"/>
      <rect x="676.93" y="26.1" width="3.48" height="3.48"/>
      <rect x="680.41" y="26.1" width="3.48" height="3.48"/>
      <rect x="683.89" y="26.1" width="3.48" height="3.48"/>
      <rect x="687.37" y="26.1" width="3.48" height="3.48"/>
      <rect x="690.85" y="26.1" width="3.48" height="3.48"/>
      <rect x="694.33" y="26.1" width="3.48" height="3.48"/>
      <rect x="743.06" y="26.1" width="3.48" height="3.48"/>
      <rect x="746.54" y="26.1" width="3.48" height="3.48"/>
      <rect x="753.5" y="26.1" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="589.92" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="649.09" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="656.05" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="659.53" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="663.01" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="666.49" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="669.97" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="673.45" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="676.93" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="680.41" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="683.89" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="687.37" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="750.02" y="29.580000000000002" width="3.48" height="3.48"/>
      <rect x="582.96" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="614.28" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="617.76" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="638.65" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="642.13" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="645.61" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="649.09" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="656.05" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="659.53" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="663.01" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="666.49" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="669.97" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="673.45" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="676.93" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="680.41" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="683.89" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="687.37" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="690.85" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="694.33" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="697.81" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="701.29" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="704.77" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="708.25" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="711.73" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="715.21" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="718.7" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="722.18" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="725.66" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="729.14" y="33.059999999999995" width="3.48" height="3.48"/>
      <rect x="120.07000000000001" y="36.54" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="36.54" width="3.48" height="3.48"/>
      <rect x="614.28" y="36.54" width="3.48" height="3.48"/>
      <rect x="617.76" y="36.54" width="3.48" height="3.48"/>
      <rect x="624.73" y="36.54" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="36.54" width="3.48" height="3.48"/>
      <rect x="635.17" y="36.54" width="3.48" height="3.48"/>
      <rect x="638.65" y="36.54" width="3.48" height="3.48"/>
      <rect x="642.13" y="36.54" width="3.48" height="3.48"/>
      <rect x="645.61" y="36.54" width="3.48" height="3.48"/>
      <rect x="649.09" y="36.54" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="36.54" width="3.48" height="3.48"/>
      <rect x="656.05" y="36.54" width="3.48" height="3.48"/>
      <rect x="659.53" y="36.54" width="3.48" height="3.48"/>
      <rect x="663.01" y="36.54" width="3.48" height="3.48"/>
      <rect x="666.49" y="36.54" width="3.48" height="3.48"/>
      <rect x="669.97" y="36.54" width="3.48" height="3.48"/>
      <rect x="673.45" y="36.54" width="3.48" height="3.48"/>
      <rect x="676.93" y="36.54" width="3.48" height="3.48"/>
      <rect x="680.41" y="36.54" width="3.48" height="3.48"/>
      <rect x="683.89" y="36.54" width="3.48" height="3.48"/>
      <rect x="687.37" y="36.54" width="3.48" height="3.48"/>
      <rect x="690.85" y="36.54" width="3.48" height="3.48"/>
      <rect x="694.33" y="36.54" width="3.48" height="3.48"/>
      <rect x="697.81" y="36.54" width="3.48" height="3.48"/>
      <rect x="701.29" y="36.54" width="3.48" height="3.48"/>
      <rect x="704.77" y="36.54" width="3.48" height="3.48"/>
      <rect x="708.25" y="36.54" width="3.48" height="3.48"/>
      <rect x="711.73" y="36.54" width="3.48" height="3.48"/>
      <rect x="715.21" y="36.54" width="3.48" height="3.48"/>
      <rect x="718.7" y="36.54" width="3.48" height="3.48"/>
      <rect x="722.18" y="36.54" width="3.48" height="3.48"/>
      <rect x="725.66" y="36.54" width="3.48" height="3.48"/>
      <rect x="729.14" y="36.54" width="3.48" height="3.48"/>
      <rect x="732.62" y="36.54" width="3.48" height="3.48"/>
      <rect x="743.06" y="36.54" width="3.48" height="3.48"/>
      <rect x="750.02" y="36.54" width="3.48" height="3.48"/>
      <rect x="753.5" y="36.54" width="3.48" height="3.48"/>
      <rect x="756.98" y="36.54" width="3.48" height="3.48"/>
      <rect x="760.46" y="36.54" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="36.54" width="3.48" height="3.48"/>
      <rect x="767.42" y="36.54" width="3.48" height="3.48"/>
      <rect x="770.9" y="36.54" width="3.48" height="3.48"/>
      <rect x="774.38" y="36.54" width="3.48" height="3.48"/>
      <rect x="777.86" y="36.54" width="3.48" height="3.48"/>
      <rect x="837.03" y="36.54" width="3.48" height="3.48"/>
      <rect x="596.88" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="614.28" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="617.76" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="621.24" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="628.21" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="635.17" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="638.65" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="642.13" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="645.61" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="649.09" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="656.05" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="659.53" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="663.01" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="666.49" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="669.97" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="673.45" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="676.93" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="680.41" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="683.89" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="687.37" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="690.85" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="694.33" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="697.81" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="701.29" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="704.77" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="708.25" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="711.73" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="715.21" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="718.7" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="722.18" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="725.66" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="729.14" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="732.62" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="736.1" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="739.58" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="743.06" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="746.54" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="750.02" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="753.5" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="756.98" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="760.46" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="767.42" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="770.9" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="774.38" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="777.86" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="781.34" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="788.3" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="791.78" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="795.26" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="798.74" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="823.11" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="109.63000000000001" y="43.5" width="3.48" height="3.48"/>
      <rect x="537.72" y="43.5" width="3.48" height="3.48"/>
      <rect x="541.2" y="43.5" width="3.48" height="3.48"/>
      <rect x="544.68" y="43.5" width="3.48" height="3.48"/>
      <rect x="548.16" y="43.5" width="3.48" height="3.48"/>
      <rect x="551.64" y="43.5" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="596.88" y="43.5" width="3.48" height="3.48"/>
      <rect x="603.84" y="43.5" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="610.8" y="43.5" width="3.48" height="3.48"/>
      <rect x="614.28" y="43.5" width="3.48" height="3.48"/>
      <rect x="621.24" y="43.5" width="3.48" height="3.48"/>
      <rect x="624.73" y="43.5" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="638.65" y="43.5" width="3.48" height="3.48"/>
      <rect x="642.13" y="43.5" width="3.48" height="3.48"/>
      <rect x="645.61" y="43.5" width="3.48" height="3.48"/>
      <rect x="649.09" y="43.5" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="656.05" y="43.5" width="3.48" height="3.48"/>
      <rect x="659.53" y="43.5" width="3.48" height="3.48"/>
      <rect x="663.01" y="43.5" width="3.48" height="3.48"/>
      <rect x="666.49" y="43.5" width="3.48" height="3.48"/>
      <rect x="669.97" y="43.5" width="3.48" height="3.48"/>
      <rect x="673.45" y="43.5" width="3.48" height="3.48"/>
      <rect x="676.93" y="43.5" width="3.48" height="3.48"/>
      <rect x="680.41" y="43.5" width="3.48" height="3.48"/>
      <rect x="683.89" y="43.5" width="3.48" height="3.48"/>
      <rect x="687.37" y="43.5" width="3.48" height="3.48"/>
      <rect x="690.85" y="43.5" width="3.48" height="3.48"/>
      <rect x="694.33" y="43.5" width="3.48" height="3.48"/>
      <rect x="697.81" y="43.5" width="3.48" height="3.48"/>
      <rect x="701.29" y="43.5" width="3.48" height="3.48"/>
      <rect x="704.77" y="43.5" width="3.48" height="3.48"/>
      <rect x="708.25" y="43.5" width="3.48" height="3.48"/>
      <rect x="711.73" y="43.5" width="3.48" height="3.48"/>
      <rect x="715.21" y="43.5" width="3.48" height="3.48"/>
      <rect x="718.7" y="43.5" width="3.48" height="3.48"/>
      <rect x="722.18" y="43.5" width="3.48" height="3.48"/>
      <rect x="725.66" y="43.5" width="3.48" height="3.48"/>
      <rect x="729.14" y="43.5" width="3.48" height="3.48"/>
      <rect x="732.62" y="43.5" width="3.48" height="3.48"/>
      <rect x="736.1" y="43.5" width="3.48" height="3.48"/>
      <rect x="739.58" y="43.5" width="3.48" height="3.48"/>
      <rect x="743.06" y="43.5" width="3.48" height="3.48"/>
      <rect x="746.54" y="43.5" width="3.48" height="3.48"/>
      <rect x="750.02" y="43.5" width="3.48" height="3.48"/>
      <rect x="753.5" y="43.5" width="3.48" height="3.48"/>
      <rect x="756.98" y="43.5" width="3.48" height="3.48"/>
      <rect x="760.46" y="43.5" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="767.42" y="43.5" width="3.48" height="3.48"/>
      <rect x="770.9" y="43.5" width="3.48" height="3.48"/>
      <rect x="774.38" y="43.5" width="3.48" height="3.48"/>
      <rect x="777.86" y="43.5" width="3.48" height="3.48"/>
      <rect x="781.34" y="43.5" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="788.3" y="43.5" width="3.48" height="3.48"/>
      <rect x="791.78" y="43.5" width="3.48" height="3.48"/>
      <rect x="795.26" y="43.5" width="3.48" height="3.48"/>
      <rect x="798.74" y="43.5" width="3.48" height="3.48"/>
      <rect x="802.22" y="43.5" width="3.48" height="3.48"/>
      <rect x="805.7" y="43.5" width="3.48" height="3.48"/>
      <rect x="809.18" y="43.5" width="3.48" height="3.48"/>
      <rect x="812.66" y="43.5" width="3.48" height="3.48"/>
      <rect x="816.15" y="43.5" width="3.48" height="3.48"/>
      <rect x="819.63" y="43.5" width="3.48" height="3.48"/>
      <rect x="823.11" y="43.5" width="3.48" height="3.48"/>
      <rect x="826.59" y="43.5" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="833.55" y="43.5" width="3.48" height="3.48"/>
      <rect x="837.03" y="43.5" width="3.48" height="3.48"/>
      <rect x="840.51" y="43.5" width="3.48" height="3.48"/>
      <rect x="843.99" y="43.5" width="3.48" height="3.48"/>
      <rect x="106.15" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="109.63000000000001" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="113.11" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="541.2" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="544.68" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="548.16" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="551.64" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="555.12" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="558.6" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="562.08" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="569.04" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="579.48" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="582.96" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="589.92" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="593.4" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="596.88" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="600.36" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="603.84" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="610.8" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="614.28" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="617.76" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="621.24" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="624.73" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="635.17" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="638.65" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="642.13" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="645.61" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="649.09" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="656.05" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="659.53" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="663.01" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="666.49" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="669.97" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="673.45" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="676.93" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="680.41" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="683.89" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="687.37" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="690.85" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="694.33" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="697.81" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="701.29" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="704.77" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="708.25" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="711.73" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="715.21" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="718.7" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="722.18" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="725.66" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="729.14" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="732.62" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="736.1" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="739.58" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="743.06" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="746.54" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="750.02" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="753.5" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="756.98" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="760.46" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="767.42" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="770.9" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="774.38" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="777.86" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="781.34" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="788.3" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="791.78" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="795.26" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="798.74" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="802.22" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="805.7" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="809.18" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="812.66" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="816.15" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="819.63" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="823.11" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="826.59" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="833.55" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="837.03" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="840.51" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="843.99" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="847.47" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="102.67" y="50.47" width="3.48" height="3.48"/>
      <rect x="106.15" y="50.47" width="3.48" height="3.48"/>
      <rect x="109.63000000000001" y="50.47" width="3.48" height="3.48"/>
      <rect x="113.11" y="50.47" width="3.48" height="3.48"/>
      <rect x="116.59" y="50.47" width="3.48" height="3.48"/>
      <rect x="120.07000000000001" y="50.47" width="3.48" height="3.48"/>
      <rect x="541.2" y="50.47" width="3.48" height="3.48"/>
      <rect x="544.68" y="50.47" width="3.48" height="3.48"/>
      <rect x="548.16" y="50.47" width="3.48" height="3.48"/>
      <rect x="558.6" y="50.47" width="3.48" height="3.48"/>
      <rect x="565.56" y="50.47" width="3.48" height="3.48"/>
      <rect x="572.52" y="50.47" width="3.48" height="3.48"/>
      <rect x="576" y="50.47" width="3.48" height="3.48"/>
      <rect x="579.48" y="50.47" width="3.48" height="3.48"/>
      <rect x="582.96" y="50.47" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="589.92" y="50.47" width="3.48" height="3.48"/>
      <rect x="593.4" y="50.47" width="3.48" height="3.48"/>
      <rect x="596.88" y="50.47" width="3.48" height="3.48"/>
      <rect x="600.36" y="50.47" width="3.48" height="3.48"/>
      <rect x="603.84" y="50.47" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="610.8" y="50.47" width="3.48" height="3.48"/>
      <rect x="614.28" y="50.47" width="3.48" height="3.48"/>
      <rect x="617.76" y="50.47" width="3.48" height="3.48"/>
      <rect x="621.24" y="50.47" width="3.48" height="3.48"/>
      <rect x="624.73" y="50.47" width="3.48" height="3.48"/>
      <rect x="628.21" y="50.47" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="635.17" y="50.47" width="3.48" height="3.48"/>
      <rect x="638.65" y="50.47" width="3.48" height="3.48"/>
      <rect x="642.13" y="50.47" width="3.48" height="3.48"/>
      <rect x="645.61" y="50.47" width="3.48" height="3.48"/>
      <rect x="649.09" y="50.47" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="656.05" y="50.47" width="3.48" height="3.48"/>
      <rect x="659.53" y="50.47" width="3.48" height="3.48"/>
      <rect x="663.01" y="50.47" width="3.48" height="3.48"/>
      <rect x="666.49" y="50.47" width="3.48" height="3.48"/>
      <rect x="669.97" y="50.47" width="3.48" height="3.48"/>
      <rect x="673.45" y="50.47" width="3.48" height="3.48"/>
      <rect x="676.93" y="50.47" width="3.48" height="3.48"/>
      <rect x="680.41" y="50.47" width="3.48" height="3.48"/>
      <rect x="683.89" y="50.47" width="3.48" height="3.48"/>
      <rect x="687.37" y="50.47" width="3.48" height="3.48"/>
      <rect x="690.85" y="50.47" width="3.48" height="3.48"/>
      <rect x="694.33" y="50.47" width="3.48" height="3.48"/>
      <rect x="697.81" y="50.47" width="3.48" height="3.48"/>
      <rect x="701.29" y="50.47" width="3.48" height="3.48"/>
      <rect x="704.77" y="50.47" width="3.48" height="3.48"/>
      <rect x="708.25" y="50.47" width="3.48" height="3.48"/>
      <rect x="711.73" y="50.47" width="3.48" height="3.48"/>
      <rect x="715.21" y="50.47" width="3.48" height="3.48"/>
      <rect x="718.7" y="50.47" width="3.48" height="3.48"/>
      <rect x="722.18" y="50.47" width="3.48" height="3.48"/>
      <rect x="725.66" y="50.47" width="3.48" height="3.48"/>
      <rect x="729.14" y="50.47" width="3.48" height="3.48"/>
      <rect x="732.62" y="50.47" width="3.48" height="3.48"/>
      <rect x="736.1" y="50.47" width="3.48" height="3.48"/>
      <rect x="739.58" y="50.47" width="3.48" height="3.48"/>
      <rect x="743.06" y="50.47" width="3.48" height="3.48"/>
      <rect x="746.54" y="50.47" width="3.48" height="3.48"/>
      <rect x="750.02" y="50.47" width="3.48" height="3.48"/>
      <rect x="753.5" y="50.47" width="3.48" height="3.48"/>
      <rect x="756.98" y="50.47" width="3.48" height="3.48"/>
      <rect x="760.46" y="50.47" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="767.42" y="50.47" width="3.48" height="3.48"/>
      <rect x="770.9" y="50.47" width="3.48" height="3.48"/>
      <rect x="774.38" y="50.47" width="3.48" height="3.48"/>
      <rect x="777.86" y="50.47" width="3.48" height="3.48"/>
      <rect x="781.34" y="50.47" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="788.3" y="50.47" width="3.48" height="3.48"/>
      <rect x="791.78" y="50.47" width="3.48" height="3.48"/>
      <rect x="795.26" y="50.47" width="3.48" height="3.48"/>
      <rect x="798.74" y="50.47" width="3.48" height="3.48"/>
      <rect x="802.22" y="50.47" width="3.48" height="3.48"/>
      <rect x="805.7" y="50.47" width="3.48" height="3.48"/>
      <rect x="809.18" y="50.47" width="3.48" height="3.48"/>
      <rect x="812.66" y="50.47" width="3.48" height="3.48"/>
      <rect x="816.15" y="50.47" width="3.48" height="3.48"/>
      <rect x="819.63" y="50.47" width="3.48" height="3.48"/>
      <rect x="823.11" y="50.47" width="3.48" height="3.48"/>
      <rect x="826.59" y="50.47" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="833.55" y="50.47" width="3.48" height="3.48"/>
      <rect x="837.03" y="50.47" width="3.48" height="3.48"/>
      <rect x="840.51" y="50.47" width="3.48" height="3.48"/>
      <rect x="843.99" y="50.47" width="3.48" height="3.48"/>
      <rect x="847.47" y="50.47" width="3.48" height="3.48"/>
      <rect x="850.95" y="50.47" width="3.48" height="3.48"/>
      <rect x="854.43" y="50.47" width="3.48" height="3.48"/>
      <rect x="106.15" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="109.63000000000001" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="541.2" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="544.68" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="548.16" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="555.12" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="565.56" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="569.04" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="572.52" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="576" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="579.48" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="582.96" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="589.92" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="593.4" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="596.88" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="600.36" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="603.84" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="610.8" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="614.28" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="617.76" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="621.24" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="624.73" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="628.21" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="635.17" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="638.65" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="642.13" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="645.61" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="649.09" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="656.05" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="659.53" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="663.01" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="666.49" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="669.97" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="673.45" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="676.93" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="680.41" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="683.89" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="687.37" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="690.85" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="694.33" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="697.81" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="701.29" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="704.77" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="708.25" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="711.73" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="715.21" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="718.7" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="722.18" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="725.66" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="729.14" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="732.62" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="736.1" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="739.58" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="743.06" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="746.54" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="750.02" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="753.5" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="756.98" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="760.46" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="767.42" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="770.9" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="774.38" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="777.86" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="781.34" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="788.3" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="791.78" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="795.26" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="798.74" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="802.22" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="805.7" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="809.18" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="812.66" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="816.15" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="819.63" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="823.11" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="826.59" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="833.55" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="837.03" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="840.51" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="843.99" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="847.47" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="854.43" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="857.91" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="544.68" y="57.43" width="3.48" height="3.48"/>
      <rect x="548.16" y="57.43" width="3.48" height="3.48"/>
      <rect x="551.64" y="57.43" width="3.48" height="3.48"/>
      <rect x="555.12" y="57.43" width="3.48" height="3.48"/>
      <rect x="558.6" y="57.43" width="3.48" height="3.48"/>
      <rect x="562.08" y="57.43" width="3.48" height="3.48"/>
      <rect x="565.56" y="57.43" width="3.48" height="3.48"/>
      <rect x="569.04" y="57.43" width="3.48" height="3.48"/>
      <rect x="572.52" y="57.43" width="3.48" height="3.48"/>
      <rect x="576" y="57.43" width="3.48" height="3.48"/>
      <rect x="579.48" y="57.43" width="3.48" height="3.48"/>
      <rect x="582.96" y="57.43" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="589.92" y="57.43" width="3.48" height="3.48"/>
      <rect x="593.4" y="57.43" width="3.48" height="3.48"/>
      <rect x="596.88" y="57.43" width="3.48" height="3.48"/>
      <rect x="600.36" y="57.43" width="3.48" height="3.48"/>
      <rect x="603.84" y="57.43" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="610.8" y="57.43" width="3.48" height="3.48"/>
      <rect x="614.28" y="57.43" width="3.48" height="3.48"/>
      <rect x="617.76" y="57.43" width="3.48" height="3.48"/>
      <rect x="621.24" y="57.43" width="3.48" height="3.48"/>
      <rect x="624.73" y="57.43" width="3.48" height="3.48"/>
      <rect x="628.21" y="57.43" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="635.17" y="57.43" width="3.48" height="3.48"/>
      <rect x="638.65" y="57.43" width="3.48" height="3.48"/>
      <rect x="642.13" y="57.43" width="3.48" height="3.48"/>
      <rect x="645.61" y="57.43" width="3.48" height="3.48"/>
      <rect x="649.09" y="57.43" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="656.05" y="57.43" width="3.48" height="3.48"/>
      <rect x="659.53" y="57.43" width="3.48" height="3.48"/>
      <rect x="663.01" y="57.43" width="3.48" height="3.48"/>
      <rect x="666.49" y="57.43" width="3.48" height="3.48"/>
      <rect x="669.97" y="57.43" width="3.48" height="3.48"/>
      <rect x="673.45" y="57.43" width="3.48" height="3.48"/>
      <rect x="676.93" y="57.43" width="3.48" height="3.48"/>
      <rect x="680.41" y="57.43" width="3.48" height="3.48"/>
      <rect x="683.89" y="57.43" width="3.48" height="3.48"/>
      <rect x="687.37" y="57.43" width="3.48" height="3.48"/>
      <rect x="690.85" y="57.43" width="3.48" height="3.48"/>
      <rect x="694.33" y="57.43" width="3.48" height="3.48"/>
      <rect x="697.81" y="57.43" width="3.48" height="3.48"/>
      <rect x="701.29" y="57.43" width="3.48" height="3.48"/>
      <rect x="704.77" y="57.43" width="3.48" height="3.48"/>
      <rect x="708.25" y="57.43" width="3.48" height="3.48"/>
      <rect x="711.73" y="57.43" width="3.48" height="3.48"/>
      <rect x="715.21" y="57.43" width="3.48" height="3.48"/>
      <rect x="718.7" y="57.43" width="3.48" height="3.48"/>
      <rect x="722.18" y="57.43" width="3.48" height="3.48"/>
      <rect x="725.66" y="57.43" width="3.48" height="3.48"/>
      <rect x="729.14" y="57.43" width="3.48" height="3.48"/>
      <rect x="732.62" y="57.43" width="3.48" height="3.48"/>
      <rect x="736.1" y="57.43" width="3.48" height="3.48"/>
      <rect x="739.58" y="57.43" width="3.48" height="3.48"/>
      <rect x="743.06" y="57.43" width="3.48" height="3.48"/>
      <rect x="746.54" y="57.43" width="3.48" height="3.48"/>
      <rect x="750.02" y="57.43" width="3.48" height="3.48"/>
      <rect x="753.5" y="57.43" width="3.48" height="3.48"/>
      <rect x="756.98" y="57.43" width="3.48" height="3.48"/>
      <rect x="760.46" y="57.43" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="767.42" y="57.43" width="3.48" height="3.48"/>
      <rect x="770.9" y="57.43" width="3.48" height="3.48"/>
      <rect x="774.38" y="57.43" width="3.48" height="3.48"/>
      <rect x="777.86" y="57.43" width="3.48" height="3.48"/>
      <rect x="781.34" y="57.43" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="788.3" y="57.43" width="3.48" height="3.48"/>
      <rect x="791.78" y="57.43" width="3.48" height="3.48"/>
      <rect x="795.26" y="57.43" width="3.48" height="3.48"/>
      <rect x="798.74" y="57.43" width="3.48" height="3.48"/>
      <rect x="802.22" y="57.43" width="3.48" height="3.48"/>
      <rect x="805.7" y="57.43" width="3.48" height="3.48"/>
      <rect x="809.18" y="57.43" width="3.48" height="3.48"/>
      <rect x="812.66" y="57.43" width="3.48" height="3.48"/>
      <rect x="816.15" y="57.43" width="3.48" height="3.48"/>
      <rect x="819.63" y="57.43" width="3.48" height="3.48"/>
      <rect x="823.11" y="57.43" width="3.48" height="3.48"/>
      <rect x="826.59" y="57.43" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="833.55" y="57.43" width="3.48" height="3.48"/>
      <rect x="837.03" y="57.43" width="3.48" height="3.48"/>
      <rect x="840.51" y="57.43" width="3.48" height="3.48"/>
      <rect x="843.99" y="57.43" width="3.48" height="3.48"/>
      <rect x="847.47" y="57.43" width="3.48" height="3.48"/>
      <rect x="850.95" y="57.43" width="3.48" height="3.48"/>
      <rect x="854.43" y="57.43" width="3.48" height="3.48"/>
      <rect x="857.91" y="57.43" width="3.48" height="3.48"/>
      <rect x="544.68" y="60.91" width="3.48" height="3.48"/>
      <rect x="548.16" y="60.91" width="3.48" height="3.48"/>
      <rect x="551.64" y="60.91" width="3.48" height="3.48"/>
      <rect x="555.12" y="60.91" width="3.48" height="3.48"/>
      <rect x="558.6" y="60.91" width="3.48" height="3.48"/>
      <rect x="562.08" y="60.91" width="3.48" height="3.48"/>
      <rect x="565.56" y="60.91" width="3.48" height="3.48"/>
      <rect x="569.04" y="60.91" width="3.48" height="3.48"/>
      <rect x="572.52" y="60.91" width="3.48" height="3.48"/>
      <rect x="576" y="60.91" width="3.48" height="3.48"/>
      <rect x="579.48" y="60.91" width="3.48" height="3.48"/>
      <rect x="582.96" y="60.91" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="589.92" y="60.91" width="3.48" height="3.48"/>
      <rect x="593.4" y="60.91" width="3.48" height="3.48"/>
      <rect x="596.88" y="60.91" width="3.48" height="3.48"/>
      <rect x="600.36" y="60.91" width="3.48" height="3.48"/>
      <rect x="603.84" y="60.91" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="610.8" y="60.91" width="3.48" height="3.48"/>
      <rect x="614.28" y="60.91" width="3.48" height="3.48"/>
      <rect x="617.76" y="60.91" width="3.48" height="3.48"/>
      <rect x="621.24" y="60.91" width="3.48" height="3.48"/>
      <rect x="624.73" y="60.91" width="3.48" height="3.48"/>
      <rect x="628.21" y="60.91" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="635.17" y="60.91" width="3.48" height="3.48"/>
      <rect x="638.65" y="60.91" width="3.48" height="3.48"/>
      <rect x="642.13" y="60.91" width="3.48" height="3.48"/>
      <rect x="645.61" y="60.91" width="3.48" height="3.48"/>
      <rect x="649.09" y="60.91" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="656.05" y="60.91" width="3.48" height="3.48"/>
      <rect x="659.53" y="60.91" width="3.48" height="3.48"/>
      <rect x="663.01" y="60.91" width="3.48" height="3.48"/>
      <rect x="666.49" y="60.91" width="3.48" height="3.48"/>
      <rect x="669.97" y="60.91" width="3.48" height="3.48"/>
      <rect x="673.45" y="60.91" width="3.48" height="3.48"/>
      <rect x="676.93" y="60.91" width="3.48" height="3.48"/>
      <rect x="680.41" y="60.91" width="3.48" height="3.48"/>
      <rect x="683.89" y="60.91" width="3.48" height="3.48"/>
      <rect x="687.37" y="60.91" width="3.48" height="3.48"/>
      <rect x="690.85" y="60.91" width="3.48" height="3.48"/>
      <rect x="694.33" y="60.91" width="3.48" height="3.48"/>
      <rect x="697.81" y="60.91" width="3.48" height="3.48"/>
      <rect x="701.29" y="60.91" width="3.48" height="3.48"/>
      <rect x="704.77" y="60.91" width="3.48" height="3.48"/>
      <rect x="708.25" y="60.91" width="3.48" height="3.48"/>
      <rect x="711.73" y="60.91" width="3.48" height="3.48"/>
      <rect x="715.21" y="60.91" width="3.48" height="3.48"/>
      <rect x="718.7" y="60.91" width="3.48" height="3.48"/>
      <rect x="722.18" y="60.91" width="3.48" height="3.48"/>
      <rect x="725.66" y="60.91" width="3.48" height="3.48"/>
      <rect x="729.14" y="60.91" width="3.48" height="3.48"/>
      <rect x="732.62" y="60.91" width="3.48" height="3.48"/>
      <rect x="736.1" y="60.91" width="3.48" height="3.48"/>
      <rect x="739.58" y="60.91" width="3.48" height="3.48"/>
      <rect x="743.06" y="60.91" width="3.48" height="3.48"/>
      <rect x="746.54" y="60.91" width="3.48" height="3.48"/>
      <rect x="750.02" y="60.91" width="3.48" height="3.48"/>
      <rect x="753.5" y="60.91" width="3.48" height="3.48"/>
      <rect x="756.98" y="60.91" width="3.48" height="3.48"/>
      <rect x="760.46" y="60.91" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="767.42" y="60.91" width="3.48" height="3.48"/>
      <rect x="770.9" y="60.91" width="3.48" height="3.48"/>
      <rect x="774.38" y="60.91" width="3.48" height="3.48"/>
      <rect x="777.86" y="60.91" width="3.48" height="3.48"/>
      <rect x="781.34" y="60.91" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="788.3" y="60.91" width="3.48" height="3.48"/>
      <rect x="791.78" y="60.91" width="3.48" height="3.48"/>
      <rect x="795.26" y="60.91" width="3.48" height="3.48"/>
      <rect x="798.74" y="60.91" width="3.48" height="3.48"/>
      <rect x="802.22" y="60.91" width="3.48" height="3.48"/>
      <rect x="805.7" y="60.91" width="3.48" height="3.48"/>
      <rect x="809.18" y="60.91" width="3.48" height="3.48"/>
      <rect x="812.66" y="60.91" width="3.48" height="3.48"/>
      <rect x="816.15" y="60.91" width="3.48" height="3.48"/>
      <rect x="819.63" y="60.91" width="3.48" height="3.48"/>
      <rect x="823.11" y="60.91" width="3.48" height="3.48"/>
      <rect x="826.59" y="60.91" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="833.55" y="60.91" width="3.48" height="3.48"/>
      <rect x="837.03" y="60.91" width="3.48" height="3.48"/>
      <rect x="840.51" y="60.91" width="3.48" height="3.48"/>
      <rect x="843.99" y="60.91" width="3.48" height="3.48"/>
      <rect x="847.47" y="60.91" width="3.48" height="3.48"/>
      <rect x="850.95" y="60.91" width="3.48" height="3.48"/>
      <rect x="854.43" y="60.91" width="3.48" height="3.48"/>
      <rect x="857.91" y="60.91" width="3.48" height="3.48"/>
      <rect x="864.87" y="60.91" width="3.48" height="3.48"/>
      <rect x="541.2" y="64.39" width="3.48" height="3.48"/>
      <rect x="544.68" y="64.39" width="3.48" height="3.48"/>
      <rect x="548.16" y="64.39" width="3.48" height="3.48"/>
      <rect x="551.64" y="64.39" width="3.48" height="3.48"/>
      <rect x="555.12" y="64.39" width="3.48" height="3.48"/>
      <rect x="558.6" y="64.39" width="3.48" height="3.48"/>
      <rect x="562.08" y="64.39" width="3.48" height="3.48"/>
      <rect x="565.56" y="64.39" width="3.48" height="3.48"/>
      <rect x="569.04" y="64.39" width="3.48" height="3.48"/>
      <rect x="572.52" y="64.39" width="3.48" height="3.48"/>
      <rect x="576" y="64.39" width="3.48" height="3.48"/>
      <rect x="579.48" y="64.39" width="3.48" height="3.48"/>
      <rect x="582.96" y="64.39" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="589.92" y="64.39" width="3.48" height="3.48"/>
      <rect x="593.4" y="64.39" width="3.48" height="3.48"/>
      <rect x="596.88" y="64.39" width="3.48" height="3.48"/>
      <rect x="600.36" y="64.39" width="3.48" height="3.48"/>
      <rect x="603.84" y="64.39" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="610.8" y="64.39" width="3.48" height="3.48"/>
      <rect x="614.28" y="64.39" width="3.48" height="3.48"/>
      <rect x="617.76" y="64.39" width="3.48" height="3.48"/>
      <rect x="621.24" y="64.39" width="3.48" height="3.48"/>
      <rect x="624.73" y="64.39" width="3.48" height="3.48"/>
      <rect x="628.21" y="64.39" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="635.17" y="64.39" width="3.48" height="3.48"/>
      <rect x="638.65" y="64.39" width="3.48" height="3.48"/>
      <rect x="642.13" y="64.39" width="3.48" height="3.48"/>
      <rect x="645.61" y="64.39" width="3.48" height="3.48"/>
      <rect x="649.09" y="64.39" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="656.05" y="64.39" width="3.48" height="3.48"/>
      <rect x="659.53" y="64.39" width="3.48" height="3.48"/>
      <rect x="663.01" y="64.39" width="3.48" height="3.48"/>
      <rect x="666.49" y="64.39" width="3.48" height="3.48"/>
      <rect x="669.97" y="64.39" width="3.48" height="3.48"/>
      <rect x="673.45" y="64.39" width="3.48" height="3.48"/>
      <rect x="676.93" y="64.39" width="3.48" height="3.48"/>
      <rect x="680.41" y="64.39" width="3.48" height="3.48"/>
      <rect x="683.89" y="64.39" width="3.48" height="3.48"/>
      <rect x="687.37" y="64.39" width="3.48" height="3.48"/>
      <rect x="690.85" y="64.39" width="3.48" height="3.48"/>
      <rect x="694.33" y="64.39" width="3.48" height="3.48"/>
      <rect x="697.81" y="64.39" width="3.48" height="3.48"/>
      <rect x="701.29" y="64.39" width="3.48" height="3.48"/>
      <rect x="704.77" y="64.39" width="3.48" height="3.48"/>
      <rect x="708.25" y="64.39" width="3.48" height="3.48"/>
      <rect x="711.73" y="64.39" width="3.48" height="3.48"/>
      <rect x="715.21" y="64.39" width="3.48" height="3.48"/>
      <rect x="718.7" y="64.39" width="3.48" height="3.48"/>
      <rect x="722.18" y="64.39" width="3.48" height="3.48"/>
      <rect x="725.66" y="64.39" width="3.48" height="3.48"/>
      <rect x="729.14" y="64.39" width="3.48" height="3.48"/>
      <rect x="732.62" y="64.39" width="3.48" height="3.48"/>
      <rect x="736.1" y="64.39" width="3.48" height="3.48"/>
      <rect x="739.58" y="64.39" width="3.48" height="3.48"/>
      <rect x="743.06" y="64.39" width="3.48" height="3.48"/>
      <rect x="746.54" y="64.39" width="3.48" height="3.48"/>
      <rect x="750.02" y="64.39" width="3.48" height="3.48"/>
      <rect x="753.5" y="64.39" width="3.48" height="3.48"/>
      <rect x="756.98" y="64.39" width="3.48" height="3.48"/>
      <rect x="760.46" y="64.39" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="767.42" y="64.39" width="3.48" height="3.48"/>
      <rect x="770.9" y="64.39" width="3.48" height="3.48"/>
      <rect x="774.38" y="64.39" width="3.48" height="3.48"/>
      <rect x="777.86" y="64.39" width="3.48" height="3.48"/>
      <rect x="781.34" y="64.39" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="788.3" y="64.39" width="3.48" height="3.48"/>
      <rect x="791.78" y="64.39" width="3.48" height="3.48"/>
      <rect x="795.26" y="64.39" width="3.48" height="3.48"/>
      <rect x="798.74" y="64.39" width="3.48" height="3.48"/>
      <rect x="802.22" y="64.39" width="3.48" height="3.48"/>
      <rect x="805.7" y="64.39" width="3.48" height="3.48"/>
      <rect x="809.18" y="64.39" width="3.48" height="3.48"/>
      <rect x="812.66" y="64.39" width="3.48" height="3.48"/>
      <rect x="816.15" y="64.39" width="3.48" height="3.48"/>
      <rect x="837.03" y="64.39" width="3.48" height="3.48"/>
      <rect x="840.51" y="64.39" width="3.48" height="3.48"/>
      <rect x="843.99" y="64.39" width="3.48" height="3.48"/>
      <rect x="847.47" y="64.39" width="3.48" height="3.48"/>
      <rect x="850.95" y="64.39" width="3.48" height="3.48"/>
      <rect x="541.2" y="67.87" width="3.48" height="3.48"/>
      <rect x="544.68" y="67.87" width="3.48" height="3.48"/>
      <rect x="548.16" y="67.87" width="3.48" height="3.48"/>
      <rect x="551.64" y="67.87" width="3.48" height="3.48"/>
      <rect x="555.12" y="67.87" width="3.48" height="3.48"/>
      <rect x="558.6" y="67.87" width="3.48" height="3.48"/>
      <rect x="562.08" y="67.87" width="3.48" height="3.48"/>
      <rect x="565.56" y="67.87" width="3.48" height="3.48"/>
      <rect x="569.04" y="67.87" width="3.48" height="3.48"/>
      <rect x="572.52" y="67.87" width="3.48" height="3.48"/>
      <rect x="576" y="67.87" width="3.48" height="3.48"/>
      <rect x="579.48" y="67.87" width="3.48" height="3.48"/>
      <rect x="582.96" y="67.87" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="589.92" y="67.87" width="3.48" height="3.48"/>
      <rect x="593.4" y="67.87" width="3.48" height="3.48"/>
      <rect x="596.88" y="67.87" width="3.48" height="3.48"/>
      <rect x="600.36" y="67.87" width="3.48" height="3.48"/>
      <rect x="603.84" y="67.87" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="610.8" y="67.87" width="3.48" height="3.48"/>
      <rect x="614.28" y="67.87" width="3.48" height="3.48"/>
      <rect x="617.76" y="67.87" width="3.48" height="3.48"/>
      <rect x="621.24" y="67.87" width="3.48" height="3.48"/>
      <rect x="624.73" y="67.87" width="3.48" height="3.48"/>
      <rect x="628.21" y="67.87" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="635.17" y="67.87" width="3.48" height="3.48"/>
      <rect x="638.65" y="67.87" width="3.48" height="3.48"/>
      <rect x="642.13" y="67.87" width="3.48" height="3.48"/>
      <rect x="645.61" y="67.87" width="3.48" height="3.48"/>
      <rect x="649.09" y="67.87" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="656.05" y="67.87" width="3.48" height="3.48"/>
      <rect x="659.53" y="67.87" width="3.48" height="3.48"/>
      <rect x="663.01" y="67.87" width="3.48" height="3.48"/>
      <rect x="666.49" y="67.87" width="3.48" height="3.48"/>
      <rect x="669.97" y="67.87" width="3.48" height="3.48"/>
      <rect x="673.45" y="67.87" width="3.48" height="3.48"/>
      <rect x="676.93" y="67.87" width="3.48" height="3.48"/>
      <rect x="680.41" y="67.87" width="3.48" height="3.48"/>
      <rect x="683.89" y="67.87" width="3.48" height="3.48"/>
      <rect x="687.37" y="67.87" width="3.48" height="3.48"/>
      <rect x="690.85" y="67.87" width="3.48" height="3.48"/>
      <rect x="694.33" y="67.87" width="3.48" height="3.48"/>
      <rect x="697.81" y="67.87" width="3.48" height="3.48"/>
      <rect x="701.29" y="67.87" width="3.48" height="3.48"/>
      <rect x="704.77" y="67.87" width="3.48" height="3.48"/>
      <rect x="708.25" y="67.87" width="3.48" height="3.48"/>
      <rect x="711.73" y="67.87" width="3.48" height="3.48"/>
      <rect x="715.21" y="67.87" width="3.48" height="3.48"/>
      <rect x="718.7" y="67.87" width="3.48" height="3.48"/>
      <rect x="722.18" y="67.87" width="3.48" height="3.48"/>
      <rect x="725.66" y="67.87" width="3.48" height="3.48"/>
      <rect x="729.14" y="67.87" width="3.48" height="3.48"/>
      <rect x="732.62" y="67.87" width="3.48" height="3.48"/>
      <rect x="736.1" y="67.87" width="3.48" height="3.48"/>
      <rect x="739.58" y="67.87" width="3.48" height="3.48"/>
      <rect x="743.06" y="67.87" width="3.48" height="3.48"/>
      <rect x="746.54" y="67.87" width="3.48" height="3.48"/>
      <rect x="750.02" y="67.87" width="3.48" height="3.48"/>
      <rect x="753.5" y="67.87" width="3.48" height="3.48"/>
      <rect x="756.98" y="67.87" width="3.48" height="3.48"/>
      <rect x="760.46" y="67.87" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="767.42" y="67.87" width="3.48" height="3.48"/>
      <rect x="770.9" y="67.87" width="3.48" height="3.48"/>
      <rect x="774.38" y="67.87" width="3.48" height="3.48"/>
      <rect x="777.86" y="67.87" width="3.48" height="3.48"/>
      <rect x="781.34" y="67.87" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="67.87" width="3.48" height="3.48"/>
      <rect x="788.3" y="67.87" width="3.48" height="3.48"/>
      <rect x="791.78" y="67.87" width="3.48" height="3.48"/>
      <rect x="795.26" y="67.87" width="3.48" height="3.48"/>
      <rect x="798.74" y="67.87" width="3.48" height="3.48"/>
      <rect x="802.22" y="67.87" width="3.48" height="3.48"/>
      <rect x="805.7" y="67.87" width="3.48" height="3.48"/>
      <rect x="809.18" y="67.87" width="3.48" height="3.48"/>
      <rect x="812.66" y="67.87" width="3.48" height="3.48"/>
      <rect x="816.15" y="67.87" width="3.48" height="3.48"/>
      <rect x="833.55" y="67.87" width="3.48" height="3.48"/>
      <rect x="837.03" y="67.87" width="3.48" height="3.48"/>
      <rect x="843.99" y="67.87" width="3.48" height="3.48"/>
      <rect x="541.2" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="548.16" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="551.64" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="555.12" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="562.08" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="565.56" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="569.04" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="576" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="596.88" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="600.36" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="603.84" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="676.93" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="833.55" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="837.03" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="74.83" width="3.48" height="3.48"/>
      <rect x="544.68" y="74.83" width="3.48" height="3.48"/>
      <rect x="548.16" y="74.83" width="3.48" height="3.48"/>
      <rect x="551.64" y="74.83" width="3.48" height="3.48"/>
      <rect x="555.12" y="74.83" width="3.48" height="3.48"/>
      <rect x="558.6" y="74.83" width="3.48" height="3.48"/>
      <rect x="562.08" y="74.83" width="3.48" height="3.48"/>
      <rect x="565.56" y="74.83" width="3.48" height="3.48"/>
      <rect x="569.04" y="74.83" width="3.48" height="3.48"/>
      <rect x="572.52" y="74.83" width="3.48" height="3.48"/>
      <rect x="576" y="74.83" width="3.48" height="3.48"/>
      <rect x="579.48" y="74.83" width="3.48" height="3.48"/>
      <rect x="582.96" y="74.83" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="589.92" y="74.83" width="3.48" height="3.48"/>
      <rect x="593.4" y="74.83" width="3.48" height="3.48"/>
      <rect x="596.88" y="74.83" width="3.48" height="3.48"/>
      <rect x="600.36" y="74.83" width="3.48" height="3.48"/>
      <rect x="603.84" y="74.83" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="610.8" y="74.83" width="3.48" height="3.48"/>
      <rect x="614.28" y="74.83" width="3.48" height="3.48"/>
      <rect x="617.76" y="74.83" width="3.48" height="3.48"/>
      <rect x="621.24" y="74.83" width="3.48" height="3.48"/>
      <rect x="624.73" y="74.83" width="3.48" height="3.48"/>
      <rect x="628.21" y="74.83" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="635.17" y="74.83" width="3.48" height="3.48"/>
      <rect x="638.65" y="74.83" width="3.48" height="3.48"/>
      <rect x="642.13" y="74.83" width="3.48" height="3.48"/>
      <rect x="645.61" y="74.83" width="3.48" height="3.48"/>
      <rect x="649.09" y="74.83" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="656.05" y="74.83" width="3.48" height="3.48"/>
      <rect x="659.53" y="74.83" width="3.48" height="3.48"/>
      <rect x="663.01" y="74.83" width="3.48" height="3.48"/>
      <rect x="666.49" y="74.83" width="3.48" height="3.48"/>
      <rect x="669.97" y="74.83" width="3.48" height="3.48"/>
      <rect x="673.45" y="74.83" width="3.48" height="3.48"/>
      <rect x="676.93" y="74.83" width="3.48" height="3.48"/>
      <rect x="680.41" y="74.83" width="3.48" height="3.48"/>
      <rect x="683.89" y="74.83" width="3.48" height="3.48"/>
      <rect x="687.37" y="74.83" width="3.48" height="3.48"/>
      <rect x="690.85" y="74.83" width="3.48" height="3.48"/>
      <rect x="694.33" y="74.83" width="3.48" height="3.48"/>
      <rect x="697.81" y="74.83" width="3.48" height="3.48"/>
      <rect x="701.29" y="74.83" width="3.48" height="3.48"/>
      <rect x="704.77" y="74.83" width="3.48" height="3.48"/>
      <rect x="708.25" y="74.83" width="3.48" height="3.48"/>
      <rect x="711.73" y="74.83" width="3.48" height="3.48"/>
      <rect x="715.21" y="74.83" width="3.48" height="3.48"/>
      <rect x="718.7" y="74.83" width="3.48" height="3.48"/>
      <rect x="722.18" y="74.83" width="3.48" height="3.48"/>
      <rect x="725.66" y="74.83" width="3.48" height="3.48"/>
      <rect x="729.14" y="74.83" width="3.48" height="3.48"/>
      <rect x="732.62" y="74.83" width="3.48" height="3.48"/>
      <rect x="736.1" y="74.83" width="3.48" height="3.48"/>
      <rect x="739.58" y="74.83" width="3.48" height="3.48"/>
      <rect x="743.06" y="74.83" width="3.48" height="3.48"/>
      <rect x="746.54" y="74.83" width="3.48" height="3.48"/>
      <rect x="750.02" y="74.83" width="3.48" height="3.48"/>
      <rect x="753.5" y="74.83" width="3.48" height="3.48"/>
      <rect x="756.98" y="74.83" width="3.48" height="3.48"/>
      <rect x="760.46" y="74.83" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="767.42" y="74.83" width="3.48" height="3.48"/>
      <rect x="770.9" y="74.83" width="3.48" height="3.48"/>
      <rect x="774.38" y="74.83" width="3.48" height="3.48"/>
      <rect x="777.86" y="74.83" width="3.48" height="3.48"/>
      <rect x="781.34" y="74.83" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="788.3" y="74.83" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="74.83" width="3.48" height="3.48"/>
      <rect x="833.55" y="74.83" width="3.48" height="3.48"/>
      <rect x="837.03" y="74.83" width="3.48" height="3.48"/>
      <rect x="840.51" y="74.83" width="3.48" height="3.48"/>
      <rect x="541.2" y="78.31" width="3.48" height="3.48"/>
      <rect x="544.68" y="78.31" width="3.48" height="3.48"/>
      <rect x="548.16" y="78.31" width="3.48" height="3.48"/>
      <rect x="551.64" y="78.31" width="3.48" height="3.48"/>
      <rect x="555.12" y="78.31" width="3.48" height="3.48"/>
      <rect x="558.6" y="78.31" width="3.48" height="3.48"/>
      <rect x="562.08" y="78.31" width="3.48" height="3.48"/>
      <rect x="565.56" y="78.31" width="3.48" height="3.48"/>
      <rect x="569.04" y="78.31" width="3.48" height="3.48"/>
      <rect x="572.52" y="78.31" width="3.48" height="3.48"/>
      <rect x="576" y="78.31" width="3.48" height="3.48"/>
      <rect x="579.48" y="78.31" width="3.48" height="3.48"/>
      <rect x="582.96" y="78.31" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="589.92" y="78.31" width="3.48" height="3.48"/>
      <rect x="593.4" y="78.31" width="3.48" height="3.48"/>
      <rect x="596.88" y="78.31" width="3.48" height="3.48"/>
      <rect x="600.36" y="78.31" width="3.48" height="3.48"/>
      <rect x="603.84" y="78.31" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="610.8" y="78.31" width="3.48" height="3.48"/>
      <rect x="614.28" y="78.31" width="3.48" height="3.48"/>
      <rect x="617.76" y="78.31" width="3.48" height="3.48"/>
      <rect x="621.24" y="78.31" width="3.48" height="3.48"/>
      <rect x="624.73" y="78.31" width="3.48" height="3.48"/>
      <rect x="628.21" y="78.31" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="635.17" y="78.31" width="3.48" height="3.48"/>
      <rect x="638.65" y="78.31" width="3.48" height="3.48"/>
      <rect x="642.13" y="78.31" width="3.48" height="3.48"/>
      <rect x="645.61" y="78.31" width="3.48" height="3.48"/>
      <rect x="649.09" y="78.31" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="656.05" y="78.31" width="3.48" height="3.48"/>
      <rect x="659.53" y="78.31" width="3.48" height="3.48"/>
      <rect x="663.01" y="78.31" width="3.48" height="3.48"/>
      <rect x="666.49" y="78.31" width="3.48" height="3.48"/>
      <rect x="669.97" y="78.31" width="3.48" height="3.48"/>
      <rect x="673.45" y="78.31" width="3.48" height="3.48"/>
      <rect x="676.93" y="78.31" width="3.48" height="3.48"/>
      <rect x="680.41" y="78.31" width="3.48" height="3.48"/>
      <rect x="683.89" y="78.31" width="3.48" height="3.48"/>
      <rect x="687.37" y="78.31" width="3.48" height="3.48"/>
      <rect x="690.85" y="78.31" width="3.48" height="3.48"/>
      <rect x="694.33" y="78.31" width="3.48" height="3.48"/>
      <rect x="697.81" y="78.31" width="3.48" height="3.48"/>
      <rect x="701.29" y="78.31" width="3.48" height="3.48"/>
      <rect x="704.77" y="78.31" width="3.48" height="3.48"/>
      <rect x="708.25" y="78.31" width="3.48" height="3.48"/>
      <rect x="711.73" y="78.31" width="3.48" height="3.48"/>
      <rect x="715.21" y="78.31" width="3.48" height="3.48"/>
      <rect x="718.7" y="78.31" width="3.48" height="3.48"/>
      <rect x="722.18" y="78.31" width="3.48" height="3.48"/>
      <rect x="725.66" y="78.31" width="3.48" height="3.48"/>
      <rect x="729.14" y="78.31" width="3.48" height="3.48"/>
      <rect x="732.62" y="78.31" width="3.48" height="3.48"/>
      <rect x="736.1" y="78.31" width="3.48" height="3.48"/>
      <rect x="739.58" y="78.31" width="3.48" height="3.48"/>
      <rect x="743.06" y="78.31" width="3.48" height="3.48"/>
      <rect x="746.54" y="78.31" width="3.48" height="3.48"/>
      <rect x="750.02" y="78.31" width="3.48" height="3.48"/>
      <rect x="753.5" y="78.31" width="3.48" height="3.48"/>
      <rect x="756.98" y="78.31" width="3.48" height="3.48"/>
      <rect x="760.46" y="78.31" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="767.42" y="78.31" width="3.48" height="3.48"/>
      <rect x="770.9" y="78.31" width="3.48" height="3.48"/>
      <rect x="774.38" y="78.31" width="3.48" height="3.48"/>
      <rect x="777.86" y="78.31" width="3.48" height="3.48"/>
      <rect x="781.34" y="78.31" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="78.31" width="3.48" height="3.48"/>
      <rect x="788.3" y="78.31" width="3.48" height="3.48"/>
      <rect x="833.55" y="78.31" width="3.48" height="3.48"/>
      <rect x="837.03" y="78.31" width="3.48" height="3.48"/>
      <rect x="840.51" y="78.31" width="3.48" height="3.48"/>
      <rect x="843.99" y="78.31" width="3.48" height="3.48"/>
      <rect x="548.16" y="81.79" width="3.48" height="3.48"/>
      <rect x="551.64" y="81.79" width="3.48" height="3.48"/>
      <rect x="555.12" y="81.79" width="3.48" height="3.48"/>
      <rect x="558.6" y="81.79" width="3.48" height="3.48"/>
      <rect x="562.08" y="81.79" width="3.48" height="3.48"/>
      <rect x="565.56" y="81.79" width="3.48" height="3.48"/>
      <rect x="569.04" y="81.79" width="3.48" height="3.48"/>
      <rect x="572.52" y="81.79" width="3.48" height="3.48"/>
      <rect x="576" y="81.79" width="3.48" height="3.48"/>
      <rect x="579.48" y="81.79" width="3.48" height="3.48"/>
      <rect x="582.96" y="81.79" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="589.92" y="81.79" width="3.48" height="3.48"/>
      <rect x="593.4" y="81.79" width="3.48" height="3.48"/>
      <rect x="596.88" y="81.79" width="3.48" height="3.48"/>
      <rect x="600.36" y="81.79" width="3.48" height="3.48"/>
      <rect x="603.84" y="81.79" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="610.8" y="81.79" width="3.48" height="3.48"/>
      <rect x="614.28" y="81.79" width="3.48" height="3.48"/>
      <rect x="617.76" y="81.79" width="3.48" height="3.48"/>
      <rect x="621.24" y="81.79" width="3.48" height="3.48"/>
      <rect x="624.73" y="81.79" width="3.48" height="3.48"/>
      <rect x="628.21" y="81.79" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="642.13" y="81.79" width="3.48" height="3.48"/>
      <rect x="645.61" y="81.79" width="3.48" height="3.48"/>
      <rect x="649.09" y="81.79" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="656.05" y="81.79" width="3.48" height="3.48"/>
      <rect x="659.53" y="81.79" width="3.48" height="3.48"/>
      <rect x="663.01" y="81.79" width="3.48" height="3.48"/>
      <rect x="666.49" y="81.79" width="3.48" height="3.48"/>
      <rect x="669.97" y="81.79" width="3.48" height="3.48"/>
      <rect x="673.45" y="81.79" width="3.48" height="3.48"/>
      <rect x="676.93" y="81.79" width="3.48" height="3.48"/>
      <rect x="680.41" y="81.79" width="3.48" height="3.48"/>
      <rect x="683.89" y="81.79" width="3.48" height="3.48"/>
      <rect x="687.37" y="81.79" width="3.48" height="3.48"/>
      <rect x="690.85" y="81.79" width="3.48" height="3.48"/>
      <rect x="694.33" y="81.79" width="3.48" height="3.48"/>
      <rect x="697.81" y="81.79" width="3.48" height="3.48"/>
      <rect x="701.29" y="81.79" width="3.48" height="3.48"/>
      <rect x="704.77" y="81.79" width="3.48" height="3.48"/>
      <rect x="708.25" y="81.79" width="3.48" height="3.48"/>
      <rect x="711.73" y="81.79" width="3.48" height="3.48"/>
      <rect x="715.21" y="81.79" width="3.48" height="3.48"/>
      <rect x="718.7" y="81.79" width="3.48" height="3.48"/>
      <rect x="722.18" y="81.79" width="3.48" height="3.48"/>
      <rect x="725.66" y="81.79" width="3.48" height="3.48"/>
      <rect x="729.14" y="81.79" width="3.48" height="3.48"/>
      <rect x="732.62" y="81.79" width="3.48" height="3.48"/>
      <rect x="736.1" y="81.79" width="3.48" height="3.48"/>
      <rect x="739.58" y="81.79" width="3.48" height="3.48"/>
      <rect x="743.06" y="81.79" width="3.48" height="3.48"/>
      <rect x="746.54" y="81.79" width="3.48" height="3.48"/>
      <rect x="750.02" y="81.79" width="3.48" height="3.48"/>
      <rect x="753.5" y="81.79" width="3.48" height="3.48"/>
      <rect x="756.98" y="81.79" width="3.48" height="3.48"/>
      <rect x="760.46" y="81.79" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="767.42" y="81.79" width="3.48" height="3.48"/>
      <rect x="770.9" y="81.79" width="3.48" height="3.48"/>
      <rect x="774.38" y="81.79" width="3.48" height="3.48"/>
      <rect x="777.86" y="81.79" width="3.48" height="3.48"/>
      <rect x="781.34" y="81.79" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="81.79" width="3.48" height="3.48"/>
      <rect x="791.78" y="81.79" width="3.48" height="3.48"/>
      <rect x="833.55" y="81.79" width="3.48" height="3.48"/>
      <rect x="837.03" y="81.79" width="3.48" height="3.48"/>
      <rect x="840.51" y="81.79" width="3.48" height="3.48"/>
      <rect x="843.99" y="81.79" width="3.48" height="3.48"/>
      <rect x="551.64" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="555.12" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="562.08" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="565.56" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="569.04" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="576" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="596.88" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="600.36" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="603.84" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="676.93" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="798.74" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="837.03" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="840.51" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="843.99" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="551.64" y="88.75" width="3.48" height="3.48"/>
      <rect x="555.12" y="88.75" width="3.48" height="3.48"/>
      <rect x="558.6" y="88.75" width="3.48" height="3.48"/>
      <rect x="562.08" y="88.75" width="3.48" height="3.48"/>
      <rect x="565.56" y="88.75" width="3.48" height="3.48"/>
      <rect x="569.04" y="88.75" width="3.48" height="3.48"/>
      <rect x="572.52" y="88.75" width="3.48" height="3.48"/>
      <rect x="576" y="88.75" width="3.48" height="3.48"/>
      <rect x="579.48" y="88.75" width="3.48" height="3.48"/>
      <rect x="582.96" y="88.75" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="589.92" y="88.75" width="3.48" height="3.48"/>
      <rect x="593.4" y="88.75" width="3.48" height="3.48"/>
      <rect x="596.88" y="88.75" width="3.48" height="3.48"/>
      <rect x="600.36" y="88.75" width="3.48" height="3.48"/>
      <rect x="603.84" y="88.75" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="610.8" y="88.75" width="3.48" height="3.48"/>
      <rect x="614.28" y="88.75" width="3.48" height="3.48"/>
      <rect x="617.76" y="88.75" width="3.48" height="3.48"/>
      <rect x="659.53" y="88.75" width="3.48" height="3.48"/>
      <rect x="663.01" y="88.75" width="3.48" height="3.48"/>
      <rect x="666.49" y="88.75" width="3.48" height="3.48"/>
      <rect x="669.97" y="88.75" width="3.48" height="3.48"/>
      <rect x="673.45" y="88.75" width="3.48" height="3.48"/>
      <rect x="676.93" y="88.75" width="3.48" height="3.48"/>
      <rect x="680.41" y="88.75" width="3.48" height="3.48"/>
      <rect x="683.89" y="88.75" width="3.48" height="3.48"/>
      <rect x="687.37" y="88.75" width="3.48" height="3.48"/>
      <rect x="690.85" y="88.75" width="3.48" height="3.48"/>
      <rect x="694.33" y="88.75" width="3.48" height="3.48"/>
      <rect x="697.81" y="88.75" width="3.48" height="3.48"/>
      <rect x="701.29" y="88.75" width="3.48" height="3.48"/>
      <rect x="704.77" y="88.75" width="3.48" height="3.48"/>
      <rect x="708.25" y="88.75" width="3.48" height="3.48"/>
      <rect x="711.73" y="88.75" width="3.48" height="3.48"/>
      <rect x="715.21" y="88.75" width="3.48" height="3.48"/>
      <rect x="718.7" y="88.75" width="3.48" height="3.48"/>
      <rect x="722.18" y="88.75" width="3.48" height="3.48"/>
      <rect x="725.66" y="88.75" width="3.48" height="3.48"/>
      <rect x="729.14" y="88.75" width="3.48" height="3.48"/>
      <rect x="732.62" y="88.75" width="3.48" height="3.48"/>
      <rect x="736.1" y="88.75" width="3.48" height="3.48"/>
      <rect x="739.58" y="88.75" width="3.48" height="3.48"/>
      <rect x="743.06" y="88.75" width="3.48" height="3.48"/>
      <rect x="746.54" y="88.75" width="3.48" height="3.48"/>
      <rect x="750.02" y="88.75" width="3.48" height="3.48"/>
      <rect x="753.5" y="88.75" width="3.48" height="3.48"/>
      <rect x="770.9" y="88.75" width="3.48" height="3.48"/>
      <rect x="774.38" y="88.75" width="3.48" height="3.48"/>
      <rect x="777.86" y="88.75" width="3.48" height="3.48"/>
      <rect x="781.34" y="88.75" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="788.3" y="88.75" width="3.48" height="3.48"/>
      <rect x="791.78" y="88.75" width="3.48" height="3.48"/>
      <rect x="795.26" y="88.75" width="3.48" height="3.48"/>
      <rect x="798.74" y="88.75" width="3.48" height="3.48"/>
      <rect x="802.22" y="88.75" width="3.48" height="3.48"/>
      <rect x="809.18" y="88.75" width="3.48" height="3.48"/>
      <rect x="840.51" y="88.75" width="3.48" height="3.48"/>
      <rect x="843.99" y="88.75" width="3.48" height="3.48"/>
      <rect x="558.6" y="92.23" width="3.48" height="3.48"/>
      <rect x="562.08" y="92.23" width="3.48" height="3.48"/>
      <rect x="565.56" y="92.23" width="3.48" height="3.48"/>
      <rect x="569.04" y="92.23" width="3.48" height="3.48"/>
      <rect x="572.52" y="92.23" width="3.48" height="3.48"/>
      <rect x="576" y="92.23" width="3.48" height="3.48"/>
      <rect x="579.48" y="92.23" width="3.48" height="3.48"/>
      <rect x="582.96" y="92.23" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="589.92" y="92.23" width="3.48" height="3.48"/>
      <rect x="593.4" y="92.23" width="3.48" height="3.48"/>
      <rect x="600.36" y="92.23" width="3.48" height="3.48"/>
      <rect x="603.84" y="92.23" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="610.8" y="92.23" width="3.48" height="3.48"/>
      <rect x="614.28" y="92.23" width="3.48" height="3.48"/>
      <rect x="617.76" y="92.23" width="3.48" height="3.48"/>
      <rect x="663.01" y="92.23" width="3.48" height="3.48"/>
      <rect x="666.49" y="92.23" width="3.48" height="3.48"/>
      <rect x="669.97" y="92.23" width="3.48" height="3.48"/>
      <rect x="673.45" y="92.23" width="3.48" height="3.48"/>
      <rect x="676.93" y="92.23" width="3.48" height="3.48"/>
      <rect x="680.41" y="92.23" width="3.48" height="3.48"/>
      <rect x="683.89" y="92.23" width="3.48" height="3.48"/>
      <rect x="687.37" y="92.23" width="3.48" height="3.48"/>
      <rect x="690.85" y="92.23" width="3.48" height="3.48"/>
      <rect x="694.33" y="92.23" width="3.48" height="3.48"/>
      <rect x="697.81" y="92.23" width="3.48" height="3.48"/>
      <rect x="701.29" y="92.23" width="3.48" height="3.48"/>
      <rect x="704.77" y="92.23" width="3.48" height="3.48"/>
      <rect x="715.21" y="92.23" width="3.48" height="3.48"/>
      <rect x="718.7" y="92.23" width="3.48" height="3.48"/>
      <rect x="722.18" y="92.23" width="3.48" height="3.48"/>
      <rect x="725.66" y="92.23" width="3.48" height="3.48"/>
      <rect x="729.14" y="92.23" width="3.48" height="3.48"/>
      <rect x="732.62" y="92.23" width="3.48" height="3.48"/>
      <rect x="736.1" y="92.23" width="3.48" height="3.48"/>
      <rect x="739.58" y="92.23" width="3.48" height="3.48"/>
      <rect x="743.06" y="92.23" width="3.48" height="3.48"/>
      <rect x="746.54" y="92.23" width="3.48" height="3.48"/>
      <rect x="750.02" y="92.23" width="3.48" height="3.48"/>
      <rect x="753.5" y="92.23" width="3.48" height="3.48"/>
      <rect x="756.98" y="92.23" width="3.48" height="3.48"/>
      <rect x="774.38" y="92.23" width="3.48" height="3.48"/>
      <rect x="777.86" y="92.23" width="3.48" height="3.48"/>
      <rect x="781.34" y="92.23" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="788.3" y="92.23" width="3.48" height="3.48"/>
      <rect x="791.78" y="92.23" width="3.48" height="3.48"/>
      <rect x="795.26" y="92.23" width="3.48" height="3.48"/>
      <rect x="798.74" y="92.23" width="3.48" height="3.48"/>
      <rect x="802.22" y="92.23" width="3.48" height="3.48"/>
      <rect x="805.7" y="92.23" width="3.48" height="3.48"/>
      <rect x="809.18" y="92.23" width="3.48" height="3.48"/>
      <rect x="843.99" y="92.23" width="3.48" height="3.48"/>
      <rect x="565.56" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="569.04" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="576" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="676.93" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="795.26" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="798.74" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="802.22" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="805.7" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="812.66" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="843.99" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="576" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="795.26" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="798.74" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="802.22" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="805.7" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="809.18" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="816.15" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="102.67" width="3.48" height="3.48"/>
      <rect x="576" y="102.67" width="3.48" height="3.48"/>
      <rect x="579.48" y="102.67" width="3.48" height="3.48"/>
      <rect x="582.96" y="102.67" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="791.78" y="102.67" width="3.48" height="3.48"/>
      <rect x="795.26" y="102.67" width="3.48" height="3.48"/>
      <rect x="798.74" y="102.67" width="3.48" height="3.48"/>
      <rect x="802.22" y="102.67" width="3.48" height="3.48"/>
      <rect x="805.7" y="102.67" width="3.48" height="3.48"/>
      <rect x="809.18" y="102.67" width="3.48" height="3.48"/>
      <rect x="572.52" y="106.15" width="3.48" height="3.48"/>
      <rect x="576" y="106.15" width="3.48" height="3.48"/>
      <rect x="579.48" y="106.15" width="3.48" height="3.48"/>
      <rect x="582.96" y="106.15" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="589.92" y="106.15" width="3.48" height="3.48"/>
      <rect x="593.4" y="106.15" width="3.48" height="3.48"/>
      <rect x="802.22" y="106.15" width="3.48" height="3.48"/>
      <rect x="805.7" y="106.15" width="3.48" height="3.48"/>
      <rect x="809.18" y="106.15" width="3.48" height="3.48"/>
      <rect x="819.63" y="106.15" width="3.48" height="3.48"/>
      <rect x="569.04" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="572.52" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="576" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="802.22" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="805.7" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="809.18" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="569.04" y="113.11" width="3.48" height="3.48"/>
      <rect x="572.52" y="113.11" width="3.48" height="3.48"/>
      <rect x="576" y="113.11" width="3.48" height="3.48"/>
      <rect x="579.48" y="113.11" width="3.48" height="3.48"/>
      <rect x="582.96" y="113.11" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="589.92" y="113.11" width="3.48" height="3.48"/>
      <rect x="798.74" y="113.11" width="3.48" height="3.48"/>
      <rect x="802.22" y="113.11" width="3.48" height="3.48"/>
      <rect x="805.7" y="113.11" width="3.48" height="3.48"/>
      <rect x="576" y="116.59" width="3.48" height="3.48"/>
      <rect x="579.48" y="116.59" width="3.48" height="3.48"/>
      <rect x="582.96" y="116.59" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="589.92" y="116.59" width="3.48" height="3.48"/>
      <rect x="798.74" y="116.59" width="3.48" height="3.48"/>
      <rect x="802.22" y="116.59" width="3.48" height="3.48"/>
      <rect x="805.7" y="116.59" width="3.48" height="3.48"/>
      <rect x="589.92" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="SJ" title="Svalbard and Jan Mayen" class="land">
      <rect x="513.35" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="15.659999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="19.14" width="3.48" height="3.48"/>
      <rect x="506.39" y="19.14" width="3.48" height="3.48"/>
      <rect x="509.87" y="19.14" width="3.48" height="3.48"/>
      <rect x="516.83" y="19.14" width="3.48" height="3.48"/>
      <rect x="506.39" y="22.62" width="3.48" height="3.48"/>
    </g>
    <g id="US" title="United States" class="land">
      <rect x="151.39999999999998" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="154.88" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="161.84" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="165.32" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="172.28" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="175.76" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="186.2" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="137.47" y="43.5" width="3.48" height="3.48"/>
      <rect x="140.95" y="43.5" width="3.48" height="3.48"/>
      <rect x="144.44" y="43.5" width="3.48" height="3.48"/>
      <rect x="147.92" y="43.5" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="154.88" y="43.5" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="43.5" width="3.48" height="3.48"/>
      <rect x="161.84" y="43.5" width="3.48" height="3.48"/>
      <rect x="165.32" y="43.5" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="172.28" y="43.5" width="3.48" height="3.48"/>
      <rect x="175.76" y="43.5" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="43.5" width="3.48" height="3.48"/>
      <rect x="182.72" y="43.5" width="3.48" height="3.48"/>
      <rect x="186.2" y="43.5" width="3.48" height="3.48"/>
      <rect x="137.47" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="140.95" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="144.44" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="147.92" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="154.88" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="161.84" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="165.32" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="172.28" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="175.76" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="182.72" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="130.51" y="50.47" width="3.48" height="3.48"/>
      <rect x="140.95" y="50.47" width="3.48" height="3.48"/>
      <rect x="144.44" y="50.47" width="3.48" height="3.48"/>
      <rect x="147.92" y="50.47" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="154.88" y="50.47" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="50.47" width="3.48" height="3.48"/>
      <rect x="161.84" y="50.47" width="3.48" height="3.48"/>
      <rect x="165.32" y="50.47" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="172.28" y="50.47" width="3.48" height="3.48"/>
      <rect x="175.76" y="50.47" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="50.47" width="3.48" height="3.48"/>
      <rect x="127.03000000000002" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="130.51" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="137.47" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="140.95" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="144.44" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="147.92" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="154.88" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="161.84" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="165.32" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="172.28" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="175.76" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="137.47" y="57.43" width="3.48" height="3.48"/>
      <rect x="140.95" y="57.43" width="3.48" height="3.48"/>
      <rect x="144.44" y="57.43" width="3.48" height="3.48"/>
      <rect x="147.92" y="57.43" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="154.88" y="57.43" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="57.43" width="3.48" height="3.48"/>
      <rect x="161.84" y="57.43" width="3.48" height="3.48"/>
      <rect x="165.32" y="57.43" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="57.43" width="3.48" height="3.48"/>
      <rect x="172.28" y="57.43" width="3.48" height="3.48"/>
      <rect x="120.07000000000001" y="60.91" width="3.48" height="3.48"/>
      <rect x="123.55000000000001" y="60.91" width="3.48" height="3.48"/>
      <rect x="127.03000000000002" y="60.91" width="3.48" height="3.48"/>
      <rect x="130.51" y="60.91" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="137.47" y="60.91" width="3.48" height="3.48"/>
      <rect x="140.95" y="60.91" width="3.48" height="3.48"/>
      <rect x="144.44" y="60.91" width="3.48" height="3.48"/>
      <rect x="147.92" y="60.91" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="154.88" y="60.91" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="60.91" width="3.48" height="3.48"/>
      <rect x="161.84" y="60.91" width="3.48" height="3.48"/>
      <rect x="165.32" y="60.91" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="60.91" width="3.48" height="3.48"/>
      <rect x="116.59" y="64.39" width="3.48" height="3.48"/>
      <rect x="120.07000000000001" y="64.39" width="3.48" height="3.48"/>
      <rect x="123.55000000000001" y="64.39" width="3.48" height="3.48"/>
      <rect x="127.03000000000002" y="64.39" width="3.48" height="3.48"/>
      <rect x="130.51" y="64.39" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="137.47" y="64.39" width="3.48" height="3.48"/>
      <rect x="140.95" y="64.39" width="3.48" height="3.48"/>
      <rect x="144.44" y="64.39" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="64.39" width="3.48" height="3.48"/>
      <rect x="154.88" y="64.39" width="3.48" height="3.48"/>
      <rect x="158.35999999999999" y="64.39" width="3.48" height="3.48"/>
      <rect x="161.84" y="64.39" width="3.48" height="3.48"/>
      <rect x="165.32" y="64.39" width="3.48" height="3.48"/>
      <rect x="109.63000000000001" y="67.87" width="3.48" height="3.48"/>
      <rect x="116.59" y="67.87" width="3.48" height="3.48"/>
      <rect x="120.07000000000001" y="67.87" width="3.48" height="3.48"/>
      <rect x="123.55000000000001" y="67.87" width="3.48" height="3.48"/>
      <rect x="127.03000000000002" y="67.87" width="3.48" height="3.48"/>
      <rect x="130.51" y="67.87" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="137.47" y="67.87" width="3.48" height="3.48"/>
      <rect x="144.44" y="67.87" width="3.48" height="3.48"/>
      <rect x="151.39999999999998" y="67.87" width="3.48" height="3.48"/>
      <rect x="165.32" y="67.87" width="3.48" height="3.48"/>
      <rect x="116.59" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="127.03000000000002" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="130.51" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="172.28" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="175.76" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="123.55000000000001" y="74.83" width="3.48" height="3.48"/>
      <rect x="130.51" y="74.83" width="3.48" height="3.48"/>
      <rect x="133.98999999999998" y="74.83" width="3.48" height="3.48"/>
      <rect x="175.76" y="74.83" width="3.48" height="3.48"/>
      <rect x="116.59" y="78.31" width="3.48" height="3.48"/>
      <rect x="175.76" y="78.31" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="78.31" width="3.48" height="3.48"/>
      <rect x="106.15" y="81.79" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="81.79" width="3.48" height="3.48"/>
      <rect x="92.23" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="102.67" width="3.48" height="3.48"/>
      <rect x="186.2" y="102.67" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="102.67" width="3.48" height="3.48"/>
      <rect x="193.16" y="102.67" width="3.48" height="3.48"/>
      <rect x="196.64" y="102.67" width="3.48" height="3.48"/>
      <rect x="200.12" y="102.67" width="3.48" height="3.48"/>
      <rect x="203.6" y="102.67" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="102.67" width="3.48" height="3.48"/>
      <rect x="210.56" y="102.67" width="3.48" height="3.48"/>
      <rect x="214.04" y="102.67" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="102.67" width="3.48" height="3.48"/>
      <rect x="221" y="102.67" width="3.48" height="3.48"/>
      <rect x="224.48" y="102.67" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="102.67" width="3.48" height="3.48"/>
      <rect x="231.44" y="102.67" width="3.48" height="3.48"/>
      <rect x="234.92" y="102.67" width="3.48" height="3.48"/>
      <rect x="238.41" y="102.67" width="3.48" height="3.48"/>
      <rect x="241.89" y="102.67" width="3.48" height="3.48"/>
      <rect x="245.37" y="102.67" width="3.48" height="3.48"/>
      <rect x="248.85" y="102.67" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="102.67" width="3.48" height="3.48"/>
      <rect x="255.81" y="102.67" width="3.48" height="3.48"/>
      <rect x="266.25" y="102.67" width="3.48" height="3.48"/>
      <rect x="182.72" y="106.15" width="3.48" height="3.48"/>
      <rect x="186.2" y="106.15" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="106.15" width="3.48" height="3.48"/>
      <rect x="193.16" y="106.15" width="3.48" height="3.48"/>
      <rect x="196.64" y="106.15" width="3.48" height="3.48"/>
      <rect x="200.12" y="106.15" width="3.48" height="3.48"/>
      <rect x="203.6" y="106.15" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="106.15" width="3.48" height="3.48"/>
      <rect x="210.56" y="106.15" width="3.48" height="3.48"/>
      <rect x="214.04" y="106.15" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="106.15" width="3.48" height="3.48"/>
      <rect x="221" y="106.15" width="3.48" height="3.48"/>
      <rect x="224.48" y="106.15" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="106.15" width="3.48" height="3.48"/>
      <rect x="231.44" y="106.15" width="3.48" height="3.48"/>
      <rect x="234.92" y="106.15" width="3.48" height="3.48"/>
      <rect x="238.41" y="106.15" width="3.48" height="3.48"/>
      <rect x="241.89" y="106.15" width="3.48" height="3.48"/>
      <rect x="245.37" y="106.15" width="3.48" height="3.48"/>
      <rect x="248.85" y="106.15" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="106.15" width="3.48" height="3.48"/>
      <rect x="255.81" y="106.15" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="106.15" width="3.48" height="3.48"/>
      <rect x="262.77" y="106.15" width="3.48" height="3.48"/>
      <rect x="266.25" y="106.15" width="3.48" height="3.48"/>
      <rect x="269.73" y="106.15" width="3.48" height="3.48"/>
      <rect x="311.49" y="106.15" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="308.01" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="311.49" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="175.76" y="113.11" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="182.72" y="113.11" width="3.48" height="3.48"/>
      <rect x="186.2" y="113.11" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="193.16" y="113.11" width="3.48" height="3.48"/>
      <rect x="196.64" y="113.11" width="3.48" height="3.48"/>
      <rect x="200.12" y="113.11" width="3.48" height="3.48"/>
      <rect x="203.6" y="113.11" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="210.56" y="113.11" width="3.48" height="3.48"/>
      <rect x="214.04" y="113.11" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="221" y="113.11" width="3.48" height="3.48"/>
      <rect x="224.48" y="113.11" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="231.44" y="113.11" width="3.48" height="3.48"/>
      <rect x="234.92" y="113.11" width="3.48" height="3.48"/>
      <rect x="238.41" y="113.11" width="3.48" height="3.48"/>
      <rect x="241.89" y="113.11" width="3.48" height="3.48"/>
      <rect x="245.37" y="113.11" width="3.48" height="3.48"/>
      <rect x="248.85" y="113.11" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="113.11" width="3.48" height="3.48"/>
      <rect x="255.81" y="113.11" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="113.11" width="3.48" height="3.48"/>
      <rect x="262.77" y="113.11" width="3.48" height="3.48"/>
      <rect x="266.25" y="113.11" width="3.48" height="3.48"/>
      <rect x="269.73" y="113.11" width="3.48" height="3.48"/>
      <rect x="273.21" y="113.11" width="3.48" height="3.48"/>
      <rect x="276.69" y="113.11" width="3.48" height="3.48"/>
      <rect x="294.09" y="113.11" width="3.48" height="3.48"/>
      <rect x="297.57" y="113.11" width="3.48" height="3.48"/>
      <rect x="301.05" y="113.11" width="3.48" height="3.48"/>
      <rect x="304.53" y="113.11" width="3.48" height="3.48"/>
      <rect x="308.01" y="113.11" width="3.48" height="3.48"/>
      <rect x="311.49" y="113.11" width="3.48" height="3.48"/>
      <rect x="175.76" y="116.59" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="182.72" y="116.59" width="3.48" height="3.48"/>
      <rect x="186.2" y="116.59" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="193.16" y="116.59" width="3.48" height="3.48"/>
      <rect x="196.64" y="116.59" width="3.48" height="3.48"/>
      <rect x="200.12" y="116.59" width="3.48" height="3.48"/>
      <rect x="203.6" y="116.59" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="210.56" y="116.59" width="3.48" height="3.48"/>
      <rect x="214.04" y="116.59" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="221" y="116.59" width="3.48" height="3.48"/>
      <rect x="224.48" y="116.59" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="231.44" y="116.59" width="3.48" height="3.48"/>
      <rect x="234.92" y="116.59" width="3.48" height="3.48"/>
      <rect x="238.41" y="116.59" width="3.48" height="3.48"/>
      <rect x="241.89" y="116.59" width="3.48" height="3.48"/>
      <rect x="245.37" y="116.59" width="3.48" height="3.48"/>
      <rect x="248.85" y="116.59" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="116.59" width="3.48" height="3.48"/>
      <rect x="255.81" y="116.59" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="116.59" width="3.48" height="3.48"/>
      <rect x="262.77" y="116.59" width="3.48" height="3.48"/>
      <rect x="266.25" y="116.59" width="3.48" height="3.48"/>
      <rect x="269.73" y="116.59" width="3.48" height="3.48"/>
      <rect x="273.21" y="116.59" width="3.48" height="3.48"/>
      <rect x="287.13" y="116.59" width="3.48" height="3.48"/>
      <rect x="290.61" y="116.59" width="3.48" height="3.48"/>
      <rect x="294.09" y="116.59" width="3.48" height="3.48"/>
      <rect x="297.57" y="116.59" width="3.48" height="3.48"/>
      <rect x="301.05" y="116.59" width="3.48" height="3.48"/>
      <rect x="304.53" y="116.59" width="3.48" height="3.48"/>
      <rect x="172.28" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="175.76" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="290.61" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="294.09" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="301.05" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="172.28" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="175.76" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="182.72" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="186.2" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="193.16" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="196.64" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="200.12" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="203.6" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="210.56" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="214.04" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="221" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="224.48" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="231.44" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="234.92" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="238.41" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="241.89" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="245.37" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="248.85" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="255.81" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="262.77" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="266.25" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="269.73" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="273.21" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="276.69" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="280.17" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="283.65" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="287.13" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="290.61" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="294.09" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="297.57" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="172.28" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="175.76" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="182.72" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="186.2" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="193.16" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="196.64" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="200.12" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="203.6" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="210.56" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="214.04" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="221" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="224.48" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="231.44" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="234.92" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="238.41" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="241.89" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="245.37" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="248.85" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="255.81" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="262.77" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="266.25" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="269.73" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="273.21" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="276.69" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="280.17" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="283.65" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="287.13" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="290.61" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="168.79999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="172.28" y="130.51" width="3.48" height="3.48"/>
      <rect x="175.76" y="130.51" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="182.72" y="130.51" width="3.48" height="3.48"/>
      <rect x="186.2" y="130.51" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="193.16" y="130.51" width="3.48" height="3.48"/>
      <rect x="196.64" y="130.51" width="3.48" height="3.48"/>
      <rect x="200.12" y="130.51" width="3.48" height="3.48"/>
      <rect x="203.6" y="130.51" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="210.56" y="130.51" width="3.48" height="3.48"/>
      <rect x="214.04" y="130.51" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="221" y="130.51" width="3.48" height="3.48"/>
      <rect x="224.48" y="130.51" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="231.44" y="130.51" width="3.48" height="3.48"/>
      <rect x="234.92" y="130.51" width="3.48" height="3.48"/>
      <rect x="238.41" y="130.51" width="3.48" height="3.48"/>
      <rect x="241.89" y="130.51" width="3.48" height="3.48"/>
      <rect x="245.37" y="130.51" width="3.48" height="3.48"/>
      <rect x="248.85" y="130.51" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="130.51" width="3.48" height="3.48"/>
      <rect x="255.81" y="130.51" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="130.51" width="3.48" height="3.48"/>
      <rect x="262.77" y="130.51" width="3.48" height="3.48"/>
      <rect x="266.25" y="130.51" width="3.48" height="3.48"/>
      <rect x="269.73" y="130.51" width="3.48" height="3.48"/>
      <rect x="273.21" y="130.51" width="3.48" height="3.48"/>
      <rect x="276.69" y="130.51" width="3.48" height="3.48"/>
      <rect x="280.17" y="130.51" width="3.48" height="3.48"/>
      <rect x="283.65" y="130.51" width="3.48" height="3.48"/>
      <rect x="287.13" y="130.51" width="3.48" height="3.48"/>
      <rect x="172.28" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="175.76" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="182.72" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="186.2" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="193.16" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="196.64" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="200.12" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="210.56" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="214.04" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="221" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="224.48" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="231.44" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="234.92" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="238.41" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="241.89" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="245.37" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="248.85" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="255.81" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="262.77" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="266.25" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="269.73" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="273.21" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="276.69" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="280.17" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="283.65" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="172.28" y="137.47" width="3.48" height="3.48"/>
      <rect x="175.76" y="137.47" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="182.72" y="137.47" width="3.48" height="3.48"/>
      <rect x="186.2" y="137.47" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="193.16" y="137.47" width="3.48" height="3.48"/>
      <rect x="196.64" y="137.47" width="3.48" height="3.48"/>
      <rect x="200.12" y="137.47" width="3.48" height="3.48"/>
      <rect x="203.6" y="137.47" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="210.56" y="137.47" width="3.48" height="3.48"/>
      <rect x="214.04" y="137.47" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="221" y="137.47" width="3.48" height="3.48"/>
      <rect x="224.48" y="137.47" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="231.44" y="137.47" width="3.48" height="3.48"/>
      <rect x="234.92" y="137.47" width="3.48" height="3.48"/>
      <rect x="238.41" y="137.47" width="3.48" height="3.48"/>
      <rect x="241.89" y="137.47" width="3.48" height="3.48"/>
      <rect x="245.37" y="137.47" width="3.48" height="3.48"/>
      <rect x="248.85" y="137.47" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="137.47" width="3.48" height="3.48"/>
      <rect x="255.81" y="137.47" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="137.47" width="3.48" height="3.48"/>
      <rect x="262.77" y="137.47" width="3.48" height="3.48"/>
      <rect x="266.25" y="137.47" width="3.48" height="3.48"/>
      <rect x="269.73" y="137.47" width="3.48" height="3.48"/>
      <rect x="273.21" y="137.47" width="3.48" height="3.48"/>
      <rect x="276.69" y="137.47" width="3.48" height="3.48"/>
      <rect x="280.17" y="137.47" width="3.48" height="3.48"/>
      <rect x="283.65" y="137.47" width="3.48" height="3.48"/>
      <rect x="172.28" y="140.95" width="3.48" height="3.48"/>
      <rect x="175.76" y="140.95" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="182.72" y="140.95" width="3.48" height="3.48"/>
      <rect x="186.2" y="140.95" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="193.16" y="140.95" width="3.48" height="3.48"/>
      <rect x="196.64" y="140.95" width="3.48" height="3.48"/>
      <rect x="200.12" y="140.95" width="3.48" height="3.48"/>
      <rect x="203.6" y="140.95" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="210.56" y="140.95" width="3.48" height="3.48"/>
      <rect x="214.04" y="140.95" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="221" y="140.95" width="3.48" height="3.48"/>
      <rect x="224.48" y="140.95" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="231.44" y="140.95" width="3.48" height="3.48"/>
      <rect x="234.92" y="140.95" width="3.48" height="3.48"/>
      <rect x="238.41" y="140.95" width="3.48" height="3.48"/>
      <rect x="241.89" y="140.95" width="3.48" height="3.48"/>
      <rect x="245.37" y="140.95" width="3.48" height="3.48"/>
      <rect x="248.85" y="140.95" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="140.95" width="3.48" height="3.48"/>
      <rect x="255.81" y="140.95" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="140.95" width="3.48" height="3.48"/>
      <rect x="262.77" y="140.95" width="3.48" height="3.48"/>
      <rect x="266.25" y="140.95" width="3.48" height="3.48"/>
      <rect x="269.73" y="140.95" width="3.48" height="3.48"/>
      <rect x="273.21" y="140.95" width="3.48" height="3.48"/>
      <rect x="276.69" y="140.95" width="3.48" height="3.48"/>
      <rect x="280.17" y="140.95" width="3.48" height="3.48"/>
      <rect x="283.65" y="140.95" width="3.48" height="3.48"/>
      <rect x="172.28" y="144.44" width="3.48" height="3.48"/>
      <rect x="175.76" y="144.44" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="182.72" y="144.44" width="3.48" height="3.48"/>
      <rect x="186.2" y="144.44" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="193.16" y="144.44" width="3.48" height="3.48"/>
      <rect x="196.64" y="144.44" width="3.48" height="3.48"/>
      <rect x="200.12" y="144.44" width="3.48" height="3.48"/>
      <rect x="203.6" y="144.44" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="210.56" y="144.44" width="3.48" height="3.48"/>
      <rect x="214.04" y="144.44" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="221" y="144.44" width="3.48" height="3.48"/>
      <rect x="224.48" y="144.44" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="231.44" y="144.44" width="3.48" height="3.48"/>
      <rect x="234.92" y="144.44" width="3.48" height="3.48"/>
      <rect x="238.41" y="144.44" width="3.48" height="3.48"/>
      <rect x="241.89" y="144.44" width="3.48" height="3.48"/>
      <rect x="245.37" y="144.44" width="3.48" height="3.48"/>
      <rect x="248.85" y="144.44" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="144.44" width="3.48" height="3.48"/>
      <rect x="255.81" y="144.44" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="144.44" width="3.48" height="3.48"/>
      <rect x="262.77" y="144.44" width="3.48" height="3.48"/>
      <rect x="266.25" y="144.44" width="3.48" height="3.48"/>
      <rect x="269.73" y="144.44" width="3.48" height="3.48"/>
      <rect x="273.21" y="144.44" width="3.48" height="3.48"/>
      <rect x="276.69" y="144.44" width="3.48" height="3.48"/>
      <rect x="280.17" y="144.44" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="182.72" y="147.92" width="3.48" height="3.48"/>
      <rect x="186.2" y="147.92" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="193.16" y="147.92" width="3.48" height="3.48"/>
      <rect x="196.64" y="147.92" width="3.48" height="3.48"/>
      <rect x="200.12" y="147.92" width="3.48" height="3.48"/>
      <rect x="203.6" y="147.92" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="210.56" y="147.92" width="3.48" height="3.48"/>
      <rect x="214.04" y="147.92" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="221" y="147.92" width="3.48" height="3.48"/>
      <rect x="224.48" y="147.92" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="231.44" y="147.92" width="3.48" height="3.48"/>
      <rect x="234.92" y="147.92" width="3.48" height="3.48"/>
      <rect x="238.41" y="147.92" width="3.48" height="3.48"/>
      <rect x="241.89" y="147.92" width="3.48" height="3.48"/>
      <rect x="245.37" y="147.92" width="3.48" height="3.48"/>
      <rect x="248.85" y="147.92" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="147.92" width="3.48" height="3.48"/>
      <rect x="255.81" y="147.92" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="147.92" width="3.48" height="3.48"/>
      <rect x="262.77" y="147.92" width="3.48" height="3.48"/>
      <rect x="266.25" y="147.92" width="3.48" height="3.48"/>
      <rect x="269.73" y="147.92" width="3.48" height="3.48"/>
      <rect x="273.21" y="147.92" width="3.48" height="3.48"/>
      <rect x="186.2" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="193.16" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="196.64" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="200.12" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="210.56" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="214.04" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="221" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="224.48" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="231.44" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="234.92" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="238.41" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="241.89" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="245.37" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="248.85" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="255.81" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="262.77" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="266.25" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="269.73" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="210.56" y="154.88" width="3.48" height="3.48"/>
      <rect x="214.04" y="154.88" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="221" y="154.88" width="3.48" height="3.48"/>
      <rect x="224.48" y="154.88" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="231.44" y="154.88" width="3.48" height="3.48"/>
      <rect x="234.92" y="154.88" width="3.48" height="3.48"/>
      <rect x="238.41" y="154.88" width="3.48" height="3.48"/>
      <rect x="241.89" y="154.88" width="3.48" height="3.48"/>
      <rect x="245.37" y="154.88" width="3.48" height="3.48"/>
      <rect x="248.85" y="154.88" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="255.81" y="154.88" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="154.88" width="3.48" height="3.48"/>
      <rect x="262.77" y="154.88" width="3.48" height="3.48"/>
      <rect x="266.25" y="154.88" width="3.48" height="3.48"/>
      <rect x="210.56" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="214.04" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="221" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="224.48" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="231.44" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="234.92" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="238.41" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="241.89" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="262.77" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="266.25" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="161.84" width="3.48" height="3.48"/>
      <rect x="221" y="161.84" width="3.48" height="3.48"/>
      <rect x="224.48" y="161.84" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="161.84" width="3.48" height="3.48"/>
      <rect x="266.25" y="161.84" width="3.48" height="3.48"/>
      <rect x="221" y="165.32" width="3.48" height="3.48"/>
      <rect x="224.48" y="165.32" width="3.48" height="3.48"/>
      <rect x="262.77" y="165.32" width="3.48" height="3.48"/>
      <rect x="266.25" y="165.32" width="3.48" height="3.48"/>
      <rect x="221" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="266.25" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="266.25" y="172.28" width="3.48" height="3.48"/>
      <rect x="60.91" y="186.2" width="3.48" height="3.48"/>
      <rect x="64.39" y="193.16" width="3.48" height="3.48"/>
    </g>
    <g id="NO" title="Norway" class="land">
      <rect x="523.79" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="527.28" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="530.76" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="534.24" y="40.019999999999996" width="3.48" height="3.48"/>
      <rect x="513.35" y="43.5" width="3.48" height="3.48"/>
      <rect x="516.83" y="43.5" width="3.48" height="3.48"/>
      <rect x="523.79" y="43.5" width="3.48" height="3.48"/>
      <rect x="527.28" y="43.5" width="3.48" height="3.48"/>
      <rect x="509.87" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="506.39" y="50.47" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="506.39" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="495.95" y="57.43" width="3.48" height="3.48"/>
      <rect x="499.43" y="57.43" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="57.43" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="60.91" width="3.48" height="3.48"/>
      <rect x="495.95" y="60.91" width="3.48" height="3.48"/>
      <rect x="499.43" y="60.91" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="60.91" width="3.48" height="3.48"/>
      <rect x="488.99" y="64.39" width="3.48" height="3.48"/>
      <rect x="495.95" y="64.39" width="3.48" height="3.48"/>
      <rect x="499.43" y="64.39" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="64.39" width="3.48" height="3.48"/>
      <rect x="488.99" y="67.87" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="67.87" width="3.48" height="3.48"/>
      <rect x="495.95" y="67.87" width="3.48" height="3.48"/>
      <rect x="499.43" y="67.87" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="67.87" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="71.35000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="SE" title="Sweden" class="land">
      <rect x="520.31" y="43.5" width="3.48" height="3.48"/>
      <rect x="513.35" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="516.83" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="520.31" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="523.79" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="509.87" y="50.47" width="3.48" height="3.48"/>
      <rect x="513.35" y="50.47" width="3.48" height="3.48"/>
      <rect x="516.83" y="50.47" width="3.48" height="3.48"/>
      <rect x="520.31" y="50.47" width="3.48" height="3.48"/>
      <rect x="523.79" y="50.47" width="3.48" height="3.48"/>
      <rect x="509.87" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="513.35" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="516.83" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="520.31" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="506.39" y="57.43" width="3.48" height="3.48"/>
      <rect x="509.87" y="57.43" width="3.48" height="3.48"/>
      <rect x="513.35" y="57.43" width="3.48" height="3.48"/>
      <rect x="516.83" y="57.43" width="3.48" height="3.48"/>
      <rect x="506.39" y="60.91" width="3.48" height="3.48"/>
      <rect x="509.87" y="60.91" width="3.48" height="3.48"/>
      <rect x="513.35" y="60.91" width="3.48" height="3.48"/>
      <rect x="506.39" y="64.39" width="3.48" height="3.48"/>
      <rect x="509.87" y="64.39" width="3.48" height="3.48"/>
      <rect x="513.35" y="64.39" width="3.48" height="3.48"/>
      <rect x="506.39" y="67.87" width="3.48" height="3.48"/>
      <rect x="509.87" y="67.87" width="3.48" height="3.48"/>
      <rect x="513.35" y="67.87" width="3.48" height="3.48"/>
      <rect x="516.83" y="67.87" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="509.87" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="74.83" width="3.48" height="3.48"/>
      <rect x="509.87" y="74.83" width="3.48" height="3.48"/>
      <rect x="513.35" y="74.83" width="3.48" height="3.48"/>
      <rect x="506.39" y="78.31" width="3.48" height="3.48"/>
      <rect x="509.87" y="78.31" width="3.48" height="3.48"/>
      <rect x="513.35" y="78.31" width="3.48" height="3.48"/>
    </g>
    <g id="FI" title="Finland" class="land">
      <rect x="530.76" y="43.5" width="3.48" height="3.48"/>
      <rect x="534.24" y="43.5" width="3.48" height="3.48"/>
      <rect x="527.28" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="530.76" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="534.24" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="537.72" y="46.989999999999995" width="3.48" height="3.48"/>
      <rect x="527.28" y="50.47" width="3.48" height="3.48"/>
      <rect x="530.76" y="50.47" width="3.48" height="3.48"/>
      <rect x="534.24" y="50.47" width="3.48" height="3.48"/>
      <rect x="537.72" y="50.47" width="3.48" height="3.48"/>
      <rect x="530.76" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="534.24" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="537.72" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="527.28" y="57.43" width="3.48" height="3.48"/>
      <rect x="530.76" y="57.43" width="3.48" height="3.48"/>
      <rect x="534.24" y="57.43" width="3.48" height="3.48"/>
      <rect x="537.72" y="57.43" width="3.48" height="3.48"/>
      <rect x="541.2" y="57.43" width="3.48" height="3.48"/>
      <rect x="523.79" y="60.91" width="3.48" height="3.48"/>
      <rect x="527.28" y="60.91" width="3.48" height="3.48"/>
      <rect x="530.76" y="60.91" width="3.48" height="3.48"/>
      <rect x="534.24" y="60.91" width="3.48" height="3.48"/>
      <rect x="537.72" y="60.91" width="3.48" height="3.48"/>
      <rect x="541.2" y="60.91" width="3.48" height="3.48"/>
      <rect x="527.28" y="64.39" width="3.48" height="3.48"/>
      <rect x="530.76" y="64.39" width="3.48" height="3.48"/>
      <rect x="534.24" y="64.39" width="3.48" height="3.48"/>
      <rect x="537.72" y="64.39" width="3.48" height="3.48"/>
    </g>
    <g id="IS" title="Iceland" class="land">
      <rect x="429.82" y="50.47" width="3.48" height="3.48"/>
      <rect x="443.75" y="50.47" width="3.48" height="3.48"/>
      <rect x="426.34" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="429.82" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="433.31" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="440.27" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="443.75" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="447.23" y="53.949999999999996" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="57.43" width="3.48" height="3.48"/>
    </g>
    <g id="EE" title="Estonia" class="land">
      <rect x="530.76" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="534.24" y="71.35000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="71.35000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="GB" title="United Kingdom" class="land">
      <rect x="464.63" y="74.83" width="3.48" height="3.48"/>
      <rect x="468.11" y="74.83" width="3.48" height="3.48"/>
      <rect x="471.59" y="74.83" width="3.48" height="3.48"/>
      <rect x="464.63" y="78.31" width="3.48" height="3.48"/>
      <rect x="468.11" y="78.31" width="3.48" height="3.48"/>
      <rect x="461.15" y="81.79" width="3.48" height="3.48"/>
      <rect x="468.11" y="81.79" width="3.48" height="3.48"/>
      <rect x="471.59" y="81.79" width="3.48" height="3.48"/>
      <rect x="471.59" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="475.07" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="468.11" y="88.75" width="3.48" height="3.48"/>
      <rect x="471.59" y="88.75" width="3.48" height="3.48"/>
      <rect x="475.07" y="88.75" width="3.48" height="3.48"/>
      <rect x="478.55" y="88.75" width="3.48" height="3.48"/>
      <rect x="468.11" y="92.23" width="3.48" height="3.48"/>
      <rect x="471.59" y="92.23" width="3.48" height="3.48"/>
      <rect x="475.07" y="92.23" width="3.48" height="3.48"/>
      <rect x="478.55" y="92.23" width="3.48" height="3.48"/>
      <rect x="468.11" y="95.71000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="DK" title="Denmark" class="land">
      <rect x="499.43" y="74.83" width="3.48" height="3.48"/>
      <rect x="495.95" y="78.31" width="3.48" height="3.48"/>
      <rect x="499.43" y="78.31" width="3.48" height="3.48"/>
    </g>
    <g id="LV" title="Latvia" class="land">
      <rect x="527.28" y="74.83" width="3.48" height="3.48"/>
      <rect x="534.24" y="74.83" width="3.48" height="3.48"/>
      <rect x="537.72" y="74.83" width="3.48" height="3.48"/>
      <rect x="534.24" y="78.31" width="3.48" height="3.48"/>
      <rect x="537.72" y="78.31" width="3.48" height="3.48"/>
    </g>
    <g id="LT" title="Lithuania" class="land">
      <rect x="527.28" y="78.31" width="3.48" height="3.48"/>
      <rect x="530.76" y="78.31" width="3.48" height="3.48"/>
      <rect x="527.28" y="81.79" width="3.48" height="3.48"/>
      <rect x="530.76" y="81.79" width="3.48" height="3.48"/>
      <rect x="534.24" y="81.79" width="3.48" height="3.48"/>
    </g>
    <g id="BY" title="Belarus" class="land">
      <rect x="537.72" y="81.79" width="3.48" height="3.48"/>
      <rect x="541.2" y="81.79" width="3.48" height="3.48"/>
      <rect x="544.68" y="81.79" width="3.48" height="3.48"/>
      <rect x="534.24" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="548.16" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="534.24" y="88.75" width="3.48" height="3.48"/>
      <rect x="537.72" y="88.75" width="3.48" height="3.48"/>
      <rect x="541.2" y="88.75" width="3.48" height="3.48"/>
      <rect x="544.68" y="88.75" width="3.48" height="3.48"/>
      <rect x="548.16" y="88.75" width="3.48" height="3.48"/>
      <rect x="544.68" y="92.23" width="3.48" height="3.48"/>
      <rect x="548.16" y="92.23" width="3.48" height="3.48"/>
    </g>
    <g id="KZ" title="Kazakhstan" class="land">
      <rect x="635.17" y="81.79" width="3.48" height="3.48"/>
      <rect x="638.65" y="81.79" width="3.48" height="3.48"/>
      <rect x="621.24" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="88.75" width="3.48" height="3.48"/>
      <rect x="624.73" y="88.75" width="3.48" height="3.48"/>
      <rect x="628.21" y="88.75" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="635.17" y="88.75" width="3.48" height="3.48"/>
      <rect x="638.65" y="88.75" width="3.48" height="3.48"/>
      <rect x="642.13" y="88.75" width="3.48" height="3.48"/>
      <rect x="645.61" y="88.75" width="3.48" height="3.48"/>
      <rect x="649.09" y="88.75" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="656.05" y="88.75" width="3.48" height="3.48"/>
      <rect x="596.88" y="92.23" width="3.48" height="3.48"/>
      <rect x="621.24" y="92.23" width="3.48" height="3.48"/>
      <rect x="624.73" y="92.23" width="3.48" height="3.48"/>
      <rect x="628.21" y="92.23" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="635.17" y="92.23" width="3.48" height="3.48"/>
      <rect x="638.65" y="92.23" width="3.48" height="3.48"/>
      <rect x="642.13" y="92.23" width="3.48" height="3.48"/>
      <rect x="645.61" y="92.23" width="3.48" height="3.48"/>
      <rect x="649.09" y="92.23" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="656.05" y="92.23" width="3.48" height="3.48"/>
      <rect x="659.53" y="92.23" width="3.48" height="3.48"/>
      <rect x="593.4" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="596.88" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="600.36" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="603.84" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="596.88" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="600.36" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="603.84" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="676.93" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="589.92" y="102.67" width="3.48" height="3.48"/>
      <rect x="593.4" y="102.67" width="3.48" height="3.48"/>
      <rect x="596.88" y="102.67" width="3.48" height="3.48"/>
      <rect x="600.36" y="102.67" width="3.48" height="3.48"/>
      <rect x="603.84" y="102.67" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="610.8" y="102.67" width="3.48" height="3.48"/>
      <rect x="614.28" y="102.67" width="3.48" height="3.48"/>
      <rect x="617.76" y="102.67" width="3.48" height="3.48"/>
      <rect x="621.24" y="102.67" width="3.48" height="3.48"/>
      <rect x="624.73" y="102.67" width="3.48" height="3.48"/>
      <rect x="628.21" y="102.67" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="635.17" y="102.67" width="3.48" height="3.48"/>
      <rect x="638.65" y="102.67" width="3.48" height="3.48"/>
      <rect x="642.13" y="102.67" width="3.48" height="3.48"/>
      <rect x="645.61" y="102.67" width="3.48" height="3.48"/>
      <rect x="649.09" y="102.67" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="656.05" y="102.67" width="3.48" height="3.48"/>
      <rect x="659.53" y="102.67" width="3.48" height="3.48"/>
      <rect x="663.01" y="102.67" width="3.48" height="3.48"/>
      <rect x="666.49" y="102.67" width="3.48" height="3.48"/>
      <rect x="669.97" y="102.67" width="3.48" height="3.48"/>
      <rect x="673.45" y="102.67" width="3.48" height="3.48"/>
      <rect x="676.93" y="102.67" width="3.48" height="3.48"/>
      <rect x="680.41" y="102.67" width="3.48" height="3.48"/>
      <rect x="596.88" y="106.15" width="3.48" height="3.48"/>
      <rect x="603.84" y="106.15" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="610.8" y="106.15" width="3.48" height="3.48"/>
      <rect x="614.28" y="106.15" width="3.48" height="3.48"/>
      <rect x="617.76" y="106.15" width="3.48" height="3.48"/>
      <rect x="621.24" y="106.15" width="3.48" height="3.48"/>
      <rect x="624.73" y="106.15" width="3.48" height="3.48"/>
      <rect x="628.21" y="106.15" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="635.17" y="106.15" width="3.48" height="3.48"/>
      <rect x="638.65" y="106.15" width="3.48" height="3.48"/>
      <rect x="642.13" y="106.15" width="3.48" height="3.48"/>
      <rect x="645.61" y="106.15" width="3.48" height="3.48"/>
      <rect x="649.09" y="106.15" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="656.05" y="106.15" width="3.48" height="3.48"/>
      <rect x="659.53" y="106.15" width="3.48" height="3.48"/>
      <rect x="663.01" y="106.15" width="3.48" height="3.48"/>
      <rect x="666.49" y="106.15" width="3.48" height="3.48"/>
      <rect x="669.97" y="106.15" width="3.48" height="3.48"/>
      <rect x="673.45" y="106.15" width="3.48" height="3.48"/>
      <rect x="680.41" y="106.15" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="603.84" y="113.11" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="610.8" y="113.11" width="3.48" height="3.48"/>
      <rect x="624.73" y="113.11" width="3.48" height="3.48"/>
      <rect x="628.21" y="113.11" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="635.17" y="113.11" width="3.48" height="3.48"/>
      <rect x="638.65" y="113.11" width="3.48" height="3.48"/>
      <rect x="642.13" y="113.11" width="3.48" height="3.48"/>
      <rect x="645.61" y="113.11" width="3.48" height="3.48"/>
      <rect x="649.09" y="113.11" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="656.05" y="113.11" width="3.48" height="3.48"/>
      <rect x="659.53" y="113.11" width="3.48" height="3.48"/>
      <rect x="663.01" y="113.11" width="3.48" height="3.48"/>
      <rect x="666.49" y="113.11" width="3.48" height="3.48"/>
      <rect x="669.97" y="113.11" width="3.48" height="3.48"/>
      <rect x="603.84" y="116.59" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="610.8" y="116.59" width="3.48" height="3.48"/>
      <rect x="638.65" y="116.59" width="3.48" height="3.48"/>
      <rect x="642.13" y="116.59" width="3.48" height="3.48"/>
      <rect x="645.61" y="116.59" width="3.48" height="3.48"/>
      <rect x="649.09" y="116.59" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="656.05" y="116.59" width="3.48" height="3.48"/>
      <rect x="659.53" y="116.59" width="3.48" height="3.48"/>
      <rect x="663.01" y="116.59" width="3.48" height="3.48"/>
      <rect x="666.49" y="116.59" width="3.48" height="3.48"/>
      <rect x="669.97" y="116.59" width="3.48" height="3.48"/>
      <rect x="673.45" y="116.59" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="614.28" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="642.13" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="645.61" y="123.55000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="IE" title="Ireland" class="land">
      <rect x="457.67" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="461.15" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="457.67" y="88.75" width="3.48" height="3.48"/>
      <rect x="461.15" y="88.75" width="3.48" height="3.48"/>
    </g>
    <g id="DE" title="Germany" class="land">
      <rect x="499.43" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="88.75" width="3.48" height="3.48"/>
      <rect x="499.43" y="88.75" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="88.75" width="3.48" height="3.48"/>
      <rect x="506.39" y="88.75" width="3.48" height="3.48"/>
      <rect x="509.87" y="88.75" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="92.23" width="3.48" height="3.48"/>
      <rect x="495.95" y="92.23" width="3.48" height="3.48"/>
      <rect x="499.43" y="92.23" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="92.23" width="3.48" height="3.48"/>
      <rect x="506.39" y="92.23" width="3.48" height="3.48"/>
      <rect x="509.87" y="92.23" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="499.43" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="499.43" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="102.67" width="3.48" height="3.48"/>
      <rect x="499.43" y="102.67" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="102.67" width="3.48" height="3.48"/>
      <rect x="506.39" y="102.67" width="3.48" height="3.48"/>
    </g>
    <g id="PL" title="Poland" class="land">
      <rect x="509.87" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="516.83" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="520.31" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="523.79" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="527.28" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="85.27000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="88.75" width="3.48" height="3.48"/>
      <rect x="516.83" y="88.75" width="3.48" height="3.48"/>
      <rect x="520.31" y="88.75" width="3.48" height="3.48"/>
      <rect x="523.79" y="88.75" width="3.48" height="3.48"/>
      <rect x="527.28" y="88.75" width="3.48" height="3.48"/>
      <rect x="530.76" y="88.75" width="3.48" height="3.48"/>
      <rect x="513.35" y="92.23" width="3.48" height="3.48"/>
      <rect x="516.83" y="92.23" width="3.48" height="3.48"/>
      <rect x="520.31" y="92.23" width="3.48" height="3.48"/>
      <rect x="523.79" y="92.23" width="3.48" height="3.48"/>
      <rect x="527.28" y="92.23" width="3.48" height="3.48"/>
      <rect x="530.76" y="92.23" width="3.48" height="3.48"/>
      <rect x="520.31" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="523.79" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="527.28" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="99.19000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="NL" title="Netherlands" class="land">
      <rect x="488.99" y="88.75" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="88.75" width="3.48" height="3.48"/>
      <rect x="485.51" y="92.23" width="3.48" height="3.48"/>
      <rect x="488.99" y="92.23" width="3.48" height="3.48"/>
    </g>
    <g id="CN" title="China" class="land">
      <rect x="756.98" y="88.75" width="3.48" height="3.48"/>
      <rect x="760.46" y="88.75" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="88.75" width="3.48" height="3.48"/>
      <rect x="767.42" y="88.75" width="3.48" height="3.48"/>
      <rect x="760.46" y="92.23" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="92.23" width="3.48" height="3.48"/>
      <rect x="767.42" y="92.23" width="3.48" height="3.48"/>
      <rect x="770.9" y="92.23" width="3.48" height="3.48"/>
      <rect x="760.46" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="102.67" width="3.48" height="3.48"/>
      <rect x="687.37" y="102.67" width="3.48" height="3.48"/>
      <rect x="753.5" y="102.67" width="3.48" height="3.48"/>
      <rect x="756.98" y="102.67" width="3.48" height="3.48"/>
      <rect x="760.46" y="102.67" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="767.42" y="102.67" width="3.48" height="3.48"/>
      <rect x="770.9" y="102.67" width="3.48" height="3.48"/>
      <rect x="774.38" y="102.67" width="3.48" height="3.48"/>
      <rect x="777.86" y="102.67" width="3.48" height="3.48"/>
      <rect x="781.34" y="102.67" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="102.67" width="3.48" height="3.48"/>
      <rect x="788.3" y="102.67" width="3.48" height="3.48"/>
      <rect x="676.93" y="106.15" width="3.48" height="3.48"/>
      <rect x="683.89" y="106.15" width="3.48" height="3.48"/>
      <rect x="687.37" y="106.15" width="3.48" height="3.48"/>
      <rect x="690.85" y="106.15" width="3.48" height="3.48"/>
      <rect x="694.33" y="106.15" width="3.48" height="3.48"/>
      <rect x="767.42" y="106.15" width="3.48" height="3.48"/>
      <rect x="770.9" y="106.15" width="3.48" height="3.48"/>
      <rect x="774.38" y="106.15" width="3.48" height="3.48"/>
      <rect x="777.86" y="106.15" width="3.48" height="3.48"/>
      <rect x="781.34" y="106.15" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="788.3" y="106.15" width="3.48" height="3.48"/>
      <rect x="791.78" y="106.15" width="3.48" height="3.48"/>
      <rect x="795.26" y="106.15" width="3.48" height="3.48"/>
      <rect x="798.74" y="106.15" width="3.48" height="3.48"/>
      <rect x="676.93" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="795.26" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="798.74" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="113.11" width="3.48" height="3.48"/>
      <rect x="676.93" y="113.11" width="3.48" height="3.48"/>
      <rect x="680.41" y="113.11" width="3.48" height="3.48"/>
      <rect x="683.89" y="113.11" width="3.48" height="3.48"/>
      <rect x="687.37" y="113.11" width="3.48" height="3.48"/>
      <rect x="690.85" y="113.11" width="3.48" height="3.48"/>
      <rect x="694.33" y="113.11" width="3.48" height="3.48"/>
      <rect x="697.81" y="113.11" width="3.48" height="3.48"/>
      <rect x="701.29" y="113.11" width="3.48" height="3.48"/>
      <rect x="704.77" y="113.11" width="3.48" height="3.48"/>
      <rect x="750.02" y="113.11" width="3.48" height="3.48"/>
      <rect x="753.5" y="113.11" width="3.48" height="3.48"/>
      <rect x="756.98" y="113.11" width="3.48" height="3.48"/>
      <rect x="760.46" y="113.11" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="767.42" y="113.11" width="3.48" height="3.48"/>
      <rect x="770.9" y="113.11" width="3.48" height="3.48"/>
      <rect x="774.38" y="113.11" width="3.48" height="3.48"/>
      <rect x="777.86" y="113.11" width="3.48" height="3.48"/>
      <rect x="781.34" y="113.11" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="113.11" width="3.48" height="3.48"/>
      <rect x="788.3" y="113.11" width="3.48" height="3.48"/>
      <rect x="791.78" y="113.11" width="3.48" height="3.48"/>
      <rect x="795.26" y="113.11" width="3.48" height="3.48"/>
      <rect x="676.93" y="116.59" width="3.48" height="3.48"/>
      <rect x="680.41" y="116.59" width="3.48" height="3.48"/>
      <rect x="683.89" y="116.59" width="3.48" height="3.48"/>
      <rect x="687.37" y="116.59" width="3.48" height="3.48"/>
      <rect x="690.85" y="116.59" width="3.48" height="3.48"/>
      <rect x="694.33" y="116.59" width="3.48" height="3.48"/>
      <rect x="697.81" y="116.59" width="3.48" height="3.48"/>
      <rect x="701.29" y="116.59" width="3.48" height="3.48"/>
      <rect x="704.77" y="116.59" width="3.48" height="3.48"/>
      <rect x="708.25" y="116.59" width="3.48" height="3.48"/>
      <rect x="750.02" y="116.59" width="3.48" height="3.48"/>
      <rect x="753.5" y="116.59" width="3.48" height="3.48"/>
      <rect x="756.98" y="116.59" width="3.48" height="3.48"/>
      <rect x="760.46" y="116.59" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="767.42" y="116.59" width="3.48" height="3.48"/>
      <rect x="770.9" y="116.59" width="3.48" height="3.48"/>
      <rect x="774.38" y="116.59" width="3.48" height="3.48"/>
      <rect x="777.86" y="116.59" width="3.48" height="3.48"/>
      <rect x="781.34" y="116.59" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="788.3" y="116.59" width="3.48" height="3.48"/>
      <rect x="791.78" y="116.59" width="3.48" height="3.48"/>
      <rect x="795.26" y="116.59" width="3.48" height="3.48"/>
      <rect x="676.93" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="791.78" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="795.26" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="673.45" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="676.93" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="680.41" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="683.89" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="760.46" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="767.42" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="770.9" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="774.38" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="777.86" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="781.34" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="666.49" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="669.97" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="673.45" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="676.93" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="680.41" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="683.89" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="687.37" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="690.85" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="694.33" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="697.81" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="701.29" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="704.77" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="708.25" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="711.73" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="715.21" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="718.7" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="722.18" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="725.66" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="729.14" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="732.62" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="736.1" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="739.58" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="743.06" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="746.54" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="750.02" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="753.5" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="756.98" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="760.46" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="767.42" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="770.9" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="774.38" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="781.34" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="663.01" y="130.51" width="3.48" height="3.48"/>
      <rect x="666.49" y="130.51" width="3.48" height="3.48"/>
      <rect x="669.97" y="130.51" width="3.48" height="3.48"/>
      <rect x="673.45" y="130.51" width="3.48" height="3.48"/>
      <rect x="676.93" y="130.51" width="3.48" height="3.48"/>
      <rect x="680.41" y="130.51" width="3.48" height="3.48"/>
      <rect x="683.89" y="130.51" width="3.48" height="3.48"/>
      <rect x="687.37" y="130.51" width="3.48" height="3.48"/>
      <rect x="690.85" y="130.51" width="3.48" height="3.48"/>
      <rect x="694.33" y="130.51" width="3.48" height="3.48"/>
      <rect x="697.81" y="130.51" width="3.48" height="3.48"/>
      <rect x="701.29" y="130.51" width="3.48" height="3.48"/>
      <rect x="704.77" y="130.51" width="3.48" height="3.48"/>
      <rect x="708.25" y="130.51" width="3.48" height="3.48"/>
      <rect x="711.73" y="130.51" width="3.48" height="3.48"/>
      <rect x="715.21" y="130.51" width="3.48" height="3.48"/>
      <rect x="718.7" y="130.51" width="3.48" height="3.48"/>
      <rect x="722.18" y="130.51" width="3.48" height="3.48"/>
      <rect x="725.66" y="130.51" width="3.48" height="3.48"/>
      <rect x="729.14" y="130.51" width="3.48" height="3.48"/>
      <rect x="732.62" y="130.51" width="3.48" height="3.48"/>
      <rect x="736.1" y="130.51" width="3.48" height="3.48"/>
      <rect x="739.58" y="130.51" width="3.48" height="3.48"/>
      <rect x="743.06" y="130.51" width="3.48" height="3.48"/>
      <rect x="746.54" y="130.51" width="3.48" height="3.48"/>
      <rect x="750.02" y="130.51" width="3.48" height="3.48"/>
      <rect x="753.5" y="130.51" width="3.48" height="3.48"/>
      <rect x="756.98" y="130.51" width="3.48" height="3.48"/>
      <rect x="760.46" y="130.51" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="130.51" width="3.48" height="3.48"/>
      <rect x="767.42" y="130.51" width="3.48" height="3.48"/>
      <rect x="781.34" y="130.51" width="3.48" height="3.48"/>
      <rect x="666.49" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="673.45" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="690.85" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="697.81" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="701.29" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="704.77" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="708.25" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="711.73" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="715.21" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="718.7" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="722.18" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="729.14" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="732.62" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="736.1" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="739.58" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="770.9" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="774.38" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="137.47" width="3.48" height="3.48"/>
      <rect x="673.45" y="137.47" width="3.48" height="3.48"/>
      <rect x="676.93" y="137.47" width="3.48" height="3.48"/>
      <rect x="680.41" y="137.47" width="3.48" height="3.48"/>
      <rect x="683.89" y="137.47" width="3.48" height="3.48"/>
      <rect x="687.37" y="137.47" width="3.48" height="3.48"/>
      <rect x="690.85" y="137.47" width="3.48" height="3.48"/>
      <rect x="694.33" y="137.47" width="3.48" height="3.48"/>
      <rect x="697.81" y="137.47" width="3.48" height="3.48"/>
      <rect x="701.29" y="137.47" width="3.48" height="3.48"/>
      <rect x="704.77" y="137.47" width="3.48" height="3.48"/>
      <rect x="708.25" y="137.47" width="3.48" height="3.48"/>
      <rect x="711.73" y="137.47" width="3.48" height="3.48"/>
      <rect x="715.21" y="137.47" width="3.48" height="3.48"/>
      <rect x="718.7" y="137.47" width="3.48" height="3.48"/>
      <rect x="722.18" y="137.47" width="3.48" height="3.48"/>
      <rect x="725.66" y="137.47" width="3.48" height="3.48"/>
      <rect x="729.14" y="137.47" width="3.48" height="3.48"/>
      <rect x="732.62" y="137.47" width="3.48" height="3.48"/>
      <rect x="736.1" y="137.47" width="3.48" height="3.48"/>
      <rect x="739.58" y="137.47" width="3.48" height="3.48"/>
      <rect x="743.06" y="137.47" width="3.48" height="3.48"/>
      <rect x="746.54" y="137.47" width="3.48" height="3.48"/>
      <rect x="750.02" y="137.47" width="3.48" height="3.48"/>
      <rect x="753.5" y="137.47" width="3.48" height="3.48"/>
      <rect x="756.98" y="137.47" width="3.48" height="3.48"/>
      <rect x="760.46" y="137.47" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="767.42" y="137.47" width="3.48" height="3.48"/>
      <rect x="770.9" y="137.47" width="3.48" height="3.48"/>
      <rect x="774.38" y="137.47" width="3.48" height="3.48"/>
      <rect x="777.86" y="137.47" width="3.48" height="3.48"/>
      <rect x="781.34" y="137.47" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="673.45" y="140.95" width="3.48" height="3.48"/>
      <rect x="676.93" y="140.95" width="3.48" height="3.48"/>
      <rect x="680.41" y="140.95" width="3.48" height="3.48"/>
      <rect x="683.89" y="140.95" width="3.48" height="3.48"/>
      <rect x="687.37" y="140.95" width="3.48" height="3.48"/>
      <rect x="690.85" y="140.95" width="3.48" height="3.48"/>
      <rect x="694.33" y="140.95" width="3.48" height="3.48"/>
      <rect x="697.81" y="140.95" width="3.48" height="3.48"/>
      <rect x="701.29" y="140.95" width="3.48" height="3.48"/>
      <rect x="704.77" y="140.95" width="3.48" height="3.48"/>
      <rect x="708.25" y="140.95" width="3.48" height="3.48"/>
      <rect x="711.73" y="140.95" width="3.48" height="3.48"/>
      <rect x="715.21" y="140.95" width="3.48" height="3.48"/>
      <rect x="718.7" y="140.95" width="3.48" height="3.48"/>
      <rect x="722.18" y="140.95" width="3.48" height="3.48"/>
      <rect x="725.66" y="140.95" width="3.48" height="3.48"/>
      <rect x="729.14" y="140.95" width="3.48" height="3.48"/>
      <rect x="732.62" y="140.95" width="3.48" height="3.48"/>
      <rect x="736.1" y="140.95" width="3.48" height="3.48"/>
      <rect x="739.58" y="140.95" width="3.48" height="3.48"/>
      <rect x="743.06" y="140.95" width="3.48" height="3.48"/>
      <rect x="746.54" y="140.95" width="3.48" height="3.48"/>
      <rect x="750.02" y="140.95" width="3.48" height="3.48"/>
      <rect x="753.5" y="140.95" width="3.48" height="3.48"/>
      <rect x="756.98" y="140.95" width="3.48" height="3.48"/>
      <rect x="760.46" y="140.95" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="767.42" y="140.95" width="3.48" height="3.48"/>
      <rect x="770.9" y="140.95" width="3.48" height="3.48"/>
      <rect x="774.38" y="140.95" width="3.48" height="3.48"/>
      <rect x="777.86" y="140.95" width="3.48" height="3.48"/>
      <rect x="676.93" y="144.44" width="3.48" height="3.48"/>
      <rect x="680.41" y="144.44" width="3.48" height="3.48"/>
      <rect x="683.89" y="144.44" width="3.48" height="3.48"/>
      <rect x="687.37" y="144.44" width="3.48" height="3.48"/>
      <rect x="690.85" y="144.44" width="3.48" height="3.48"/>
      <rect x="694.33" y="144.44" width="3.48" height="3.48"/>
      <rect x="697.81" y="144.44" width="3.48" height="3.48"/>
      <rect x="701.29" y="144.44" width="3.48" height="3.48"/>
      <rect x="704.77" y="144.44" width="3.48" height="3.48"/>
      <rect x="708.25" y="144.44" width="3.48" height="3.48"/>
      <rect x="711.73" y="144.44" width="3.48" height="3.48"/>
      <rect x="715.21" y="144.44" width="3.48" height="3.48"/>
      <rect x="718.7" y="144.44" width="3.48" height="3.48"/>
      <rect x="722.18" y="144.44" width="3.48" height="3.48"/>
      <rect x="725.66" y="144.44" width="3.48" height="3.48"/>
      <rect x="729.14" y="144.44" width="3.48" height="3.48"/>
      <rect x="732.62" y="144.44" width="3.48" height="3.48"/>
      <rect x="736.1" y="144.44" width="3.48" height="3.48"/>
      <rect x="739.58" y="144.44" width="3.48" height="3.48"/>
      <rect x="743.06" y="144.44" width="3.48" height="3.48"/>
      <rect x="746.54" y="144.44" width="3.48" height="3.48"/>
      <rect x="750.02" y="144.44" width="3.48" height="3.48"/>
      <rect x="753.5" y="144.44" width="3.48" height="3.48"/>
      <rect x="756.98" y="144.44" width="3.48" height="3.48"/>
      <rect x="760.46" y="144.44" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="144.44" width="3.48" height="3.48"/>
      <rect x="767.42" y="144.44" width="3.48" height="3.48"/>
      <rect x="770.9" y="144.44" width="3.48" height="3.48"/>
      <rect x="774.38" y="144.44" width="3.48" height="3.48"/>
      <rect x="777.86" y="144.44" width="3.48" height="3.48"/>
      <rect x="680.41" y="147.92" width="3.48" height="3.48"/>
      <rect x="683.89" y="147.92" width="3.48" height="3.48"/>
      <rect x="687.37" y="147.92" width="3.48" height="3.48"/>
      <rect x="690.85" y="147.92" width="3.48" height="3.48"/>
      <rect x="694.33" y="147.92" width="3.48" height="3.48"/>
      <rect x="697.81" y="147.92" width="3.48" height="3.48"/>
      <rect x="701.29" y="147.92" width="3.48" height="3.48"/>
      <rect x="704.77" y="147.92" width="3.48" height="3.48"/>
      <rect x="708.25" y="147.92" width="3.48" height="3.48"/>
      <rect x="711.73" y="147.92" width="3.48" height="3.48"/>
      <rect x="715.21" y="147.92" width="3.48" height="3.48"/>
      <rect x="718.7" y="147.92" width="3.48" height="3.48"/>
      <rect x="722.18" y="147.92" width="3.48" height="3.48"/>
      <rect x="725.66" y="147.92" width="3.48" height="3.48"/>
      <rect x="729.14" y="147.92" width="3.48" height="3.48"/>
      <rect x="732.62" y="147.92" width="3.48" height="3.48"/>
      <rect x="736.1" y="147.92" width="3.48" height="3.48"/>
      <rect x="739.58" y="147.92" width="3.48" height="3.48"/>
      <rect x="743.06" y="147.92" width="3.48" height="3.48"/>
      <rect x="746.54" y="147.92" width="3.48" height="3.48"/>
      <rect x="750.02" y="147.92" width="3.48" height="3.48"/>
      <rect x="753.5" y="147.92" width="3.48" height="3.48"/>
      <rect x="756.98" y="147.92" width="3.48" height="3.48"/>
      <rect x="760.46" y="147.92" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="147.92" width="3.48" height="3.48"/>
      <rect x="767.42" y="147.92" width="3.48" height="3.48"/>
      <rect x="770.9" y="147.92" width="3.48" height="3.48"/>
      <rect x="774.38" y="147.92" width="3.48" height="3.48"/>
      <rect x="777.86" y="147.92" width="3.48" height="3.48"/>
      <rect x="781.34" y="147.92" width="3.48" height="3.48"/>
      <rect x="680.41" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="690.85" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="697.81" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="701.29" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="704.77" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="708.25" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="711.73" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="715.21" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="718.7" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="722.18" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="729.14" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="732.62" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="736.1" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="739.58" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="770.9" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="774.38" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="777.86" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="781.34" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="154.88" width="3.48" height="3.48"/>
      <rect x="683.89" y="154.88" width="3.48" height="3.48"/>
      <rect x="687.37" y="154.88" width="3.48" height="3.48"/>
      <rect x="690.85" y="154.88" width="3.48" height="3.48"/>
      <rect x="694.33" y="154.88" width="3.48" height="3.48"/>
      <rect x="697.81" y="154.88" width="3.48" height="3.48"/>
      <rect x="701.29" y="154.88" width="3.48" height="3.48"/>
      <rect x="704.77" y="154.88" width="3.48" height="3.48"/>
      <rect x="708.25" y="154.88" width="3.48" height="3.48"/>
      <rect x="711.73" y="154.88" width="3.48" height="3.48"/>
      <rect x="715.21" y="154.88" width="3.48" height="3.48"/>
      <rect x="718.7" y="154.88" width="3.48" height="3.48"/>
      <rect x="722.18" y="154.88" width="3.48" height="3.48"/>
      <rect x="725.66" y="154.88" width="3.48" height="3.48"/>
      <rect x="729.14" y="154.88" width="3.48" height="3.48"/>
      <rect x="732.62" y="154.88" width="3.48" height="3.48"/>
      <rect x="736.1" y="154.88" width="3.48" height="3.48"/>
      <rect x="739.58" y="154.88" width="3.48" height="3.48"/>
      <rect x="743.06" y="154.88" width="3.48" height="3.48"/>
      <rect x="746.54" y="154.88" width="3.48" height="3.48"/>
      <rect x="750.02" y="154.88" width="3.48" height="3.48"/>
      <rect x="753.5" y="154.88" width="3.48" height="3.48"/>
      <rect x="756.98" y="154.88" width="3.48" height="3.48"/>
      <rect x="760.46" y="154.88" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="767.42" y="154.88" width="3.48" height="3.48"/>
      <rect x="770.9" y="154.88" width="3.48" height="3.48"/>
      <rect x="774.38" y="154.88" width="3.48" height="3.48"/>
      <rect x="777.86" y="154.88" width="3.48" height="3.48"/>
      <rect x="781.34" y="154.88" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="788.3" y="154.88" width="3.48" height="3.48"/>
      <rect x="690.85" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="694.33" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="697.81" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="701.29" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="704.77" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="708.25" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="711.73" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="715.21" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="718.7" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="722.18" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="725.66" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="729.14" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="732.62" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="736.1" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="739.58" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="743.06" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="746.54" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="750.02" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="753.5" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="756.98" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="760.46" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="767.42" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="770.9" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="774.38" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="777.86" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="781.34" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="697.81" y="161.84" width="3.48" height="3.48"/>
      <rect x="701.29" y="161.84" width="3.48" height="3.48"/>
      <rect x="704.77" y="161.84" width="3.48" height="3.48"/>
      <rect x="708.25" y="161.84" width="3.48" height="3.48"/>
      <rect x="711.73" y="161.84" width="3.48" height="3.48"/>
      <rect x="715.21" y="161.84" width="3.48" height="3.48"/>
      <rect x="718.7" y="161.84" width="3.48" height="3.48"/>
      <rect x="725.66" y="161.84" width="3.48" height="3.48"/>
      <rect x="729.14" y="161.84" width="3.48" height="3.48"/>
      <rect x="732.62" y="161.84" width="3.48" height="3.48"/>
      <rect x="736.1" y="161.84" width="3.48" height="3.48"/>
      <rect x="739.58" y="161.84" width="3.48" height="3.48"/>
      <rect x="743.06" y="161.84" width="3.48" height="3.48"/>
      <rect x="746.54" y="161.84" width="3.48" height="3.48"/>
      <rect x="750.02" y="161.84" width="3.48" height="3.48"/>
      <rect x="753.5" y="161.84" width="3.48" height="3.48"/>
      <rect x="756.98" y="161.84" width="3.48" height="3.48"/>
      <rect x="760.46" y="161.84" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="161.84" width="3.48" height="3.48"/>
      <rect x="767.42" y="161.84" width="3.48" height="3.48"/>
      <rect x="770.9" y="161.84" width="3.48" height="3.48"/>
      <rect x="774.38" y="161.84" width="3.48" height="3.48"/>
      <rect x="777.86" y="161.84" width="3.48" height="3.48"/>
      <rect x="781.34" y="161.84" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="161.84" width="3.48" height="3.48"/>
      <rect x="788.3" y="161.84" width="3.48" height="3.48"/>
      <rect x="701.29" y="165.32" width="3.48" height="3.48"/>
      <rect x="704.77" y="165.32" width="3.48" height="3.48"/>
      <rect x="708.25" y="165.32" width="3.48" height="3.48"/>
      <rect x="715.21" y="165.32" width="3.48" height="3.48"/>
      <rect x="732.62" y="165.32" width="3.48" height="3.48"/>
      <rect x="736.1" y="165.32" width="3.48" height="3.48"/>
      <rect x="739.58" y="165.32" width="3.48" height="3.48"/>
      <rect x="743.06" y="165.32" width="3.48" height="3.48"/>
      <rect x="746.54" y="165.32" width="3.48" height="3.48"/>
      <rect x="750.02" y="165.32" width="3.48" height="3.48"/>
      <rect x="753.5" y="165.32" width="3.48" height="3.48"/>
      <rect x="756.98" y="165.32" width="3.48" height="3.48"/>
      <rect x="760.46" y="165.32" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="165.32" width="3.48" height="3.48"/>
      <rect x="767.42" y="165.32" width="3.48" height="3.48"/>
      <rect x="770.9" y="165.32" width="3.48" height="3.48"/>
      <rect x="774.38" y="165.32" width="3.48" height="3.48"/>
      <rect x="777.86" y="165.32" width="3.48" height="3.48"/>
      <rect x="781.34" y="165.32" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="165.32" width="3.48" height="3.48"/>
      <rect x="788.3" y="165.32" width="3.48" height="3.48"/>
      <rect x="736.1" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="739.58" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="770.9" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="774.38" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="777.86" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="781.34" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="788.3" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="736.1" y="172.28" width="3.48" height="3.48"/>
      <rect x="739.58" y="172.28" width="3.48" height="3.48"/>
      <rect x="743.06" y="172.28" width="3.48" height="3.48"/>
      <rect x="746.54" y="172.28" width="3.48" height="3.48"/>
      <rect x="750.02" y="172.28" width="3.48" height="3.48"/>
      <rect x="753.5" y="172.28" width="3.48" height="3.48"/>
      <rect x="756.98" y="172.28" width="3.48" height="3.48"/>
      <rect x="760.46" y="172.28" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="767.42" y="172.28" width="3.48" height="3.48"/>
      <rect x="770.9" y="172.28" width="3.48" height="3.48"/>
      <rect x="774.38" y="172.28" width="3.48" height="3.48"/>
      <rect x="777.86" y="172.28" width="3.48" height="3.48"/>
      <rect x="781.34" y="172.28" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="788.3" y="172.28" width="3.48" height="3.48"/>
      <rect x="732.62" y="175.76" width="3.48" height="3.48"/>
      <rect x="736.1" y="175.76" width="3.48" height="3.48"/>
      <rect x="739.58" y="175.76" width="3.48" height="3.48"/>
      <rect x="743.06" y="175.76" width="3.48" height="3.48"/>
      <rect x="746.54" y="175.76" width="3.48" height="3.48"/>
      <rect x="750.02" y="175.76" width="3.48" height="3.48"/>
      <rect x="753.5" y="175.76" width="3.48" height="3.48"/>
      <rect x="756.98" y="175.76" width="3.48" height="3.48"/>
      <rect x="760.46" y="175.76" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="175.76" width="3.48" height="3.48"/>
      <rect x="767.42" y="175.76" width="3.48" height="3.48"/>
      <rect x="770.9" y="175.76" width="3.48" height="3.48"/>
      <rect x="774.38" y="175.76" width="3.48" height="3.48"/>
      <rect x="777.86" y="175.76" width="3.48" height="3.48"/>
      <rect x="781.34" y="175.76" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="175.76" width="3.48" height="3.48"/>
      <rect x="739.58" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="770.9" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="774.38" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="777.86" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="781.34" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="739.58" y="182.72" width="3.48" height="3.48"/>
      <rect x="743.06" y="182.72" width="3.48" height="3.48"/>
      <rect x="760.46" y="182.72" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="182.72" width="3.48" height="3.48"/>
      <rect x="767.42" y="182.72" width="3.48" height="3.48"/>
      <rect x="770.9" y="182.72" width="3.48" height="3.48"/>
      <rect x="774.38" y="182.72" width="3.48" height="3.48"/>
      <rect x="767.42" y="186.2" width="3.48" height="3.48"/>
      <rect x="767.42" y="193.16" width="3.48" height="3.48"/>
    </g>
    <g id="UA" title="Ukraine" class="land">
      <rect x="534.24" y="92.23" width="3.48" height="3.48"/>
      <rect x="537.72" y="92.23" width="3.48" height="3.48"/>
      <rect x="541.2" y="92.23" width="3.48" height="3.48"/>
      <rect x="551.64" y="92.23" width="3.48" height="3.48"/>
      <rect x="555.12" y="92.23" width="3.48" height="3.48"/>
      <rect x="534.24" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="548.16" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="551.64" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="555.12" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="562.08" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="534.24" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="548.16" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="551.64" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="555.12" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="562.08" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="565.56" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="569.04" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="534.24" y="102.67" width="3.48" height="3.48"/>
      <rect x="537.72" y="102.67" width="3.48" height="3.48"/>
      <rect x="548.16" y="102.67" width="3.48" height="3.48"/>
      <rect x="551.64" y="102.67" width="3.48" height="3.48"/>
      <rect x="555.12" y="102.67" width="3.48" height="3.48"/>
      <rect x="558.6" y="102.67" width="3.48" height="3.48"/>
      <rect x="562.08" y="102.67" width="3.48" height="3.48"/>
      <rect x="565.56" y="102.67" width="3.48" height="3.48"/>
      <rect x="569.04" y="102.67" width="3.48" height="3.48"/>
      <rect x="548.16" y="106.15" width="3.48" height="3.48"/>
      <rect x="551.64" y="106.15" width="3.48" height="3.48"/>
      <rect x="555.12" y="106.15" width="3.48" height="3.48"/>
      <rect x="558.6" y="106.15" width="3.48" height="3.48"/>
      <rect x="562.08" y="106.15" width="3.48" height="3.48"/>
      <rect x="565.56" y="106.15" width="3.48" height="3.48"/>
      <rect x="548.16" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="113.11" width="3.48" height="3.48"/>
    </g>
    <g id="MN" title="Mongolia" class="land">
      <rect x="708.25" y="92.23" width="3.48" height="3.48"/>
      <rect x="711.73" y="92.23" width="3.48" height="3.48"/>
      <rect x="694.33" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="687.37" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="694.33" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="697.81" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="690.85" y="102.67" width="3.48" height="3.48"/>
      <rect x="694.33" y="102.67" width="3.48" height="3.48"/>
      <rect x="697.81" y="102.67" width="3.48" height="3.48"/>
      <rect x="701.29" y="102.67" width="3.48" height="3.48"/>
      <rect x="704.77" y="102.67" width="3.48" height="3.48"/>
      <rect x="708.25" y="102.67" width="3.48" height="3.48"/>
      <rect x="711.73" y="102.67" width="3.48" height="3.48"/>
      <rect x="715.21" y="102.67" width="3.48" height="3.48"/>
      <rect x="718.7" y="102.67" width="3.48" height="3.48"/>
      <rect x="722.18" y="102.67" width="3.48" height="3.48"/>
      <rect x="725.66" y="102.67" width="3.48" height="3.48"/>
      <rect x="729.14" y="102.67" width="3.48" height="3.48"/>
      <rect x="732.62" y="102.67" width="3.48" height="3.48"/>
      <rect x="736.1" y="102.67" width="3.48" height="3.48"/>
      <rect x="739.58" y="102.67" width="3.48" height="3.48"/>
      <rect x="743.06" y="102.67" width="3.48" height="3.48"/>
      <rect x="746.54" y="102.67" width="3.48" height="3.48"/>
      <rect x="750.02" y="102.67" width="3.48" height="3.48"/>
      <rect x="697.81" y="106.15" width="3.48" height="3.48"/>
      <rect x="701.29" y="106.15" width="3.48" height="3.48"/>
      <rect x="704.77" y="106.15" width="3.48" height="3.48"/>
      <rect x="708.25" y="106.15" width="3.48" height="3.48"/>
      <rect x="711.73" y="106.15" width="3.48" height="3.48"/>
      <rect x="715.21" y="106.15" width="3.48" height="3.48"/>
      <rect x="718.7" y="106.15" width="3.48" height="3.48"/>
      <rect x="722.18" y="106.15" width="3.48" height="3.48"/>
      <rect x="725.66" y="106.15" width="3.48" height="3.48"/>
      <rect x="729.14" y="106.15" width="3.48" height="3.48"/>
      <rect x="732.62" y="106.15" width="3.48" height="3.48"/>
      <rect x="736.1" y="106.15" width="3.48" height="3.48"/>
      <rect x="739.58" y="106.15" width="3.48" height="3.48"/>
      <rect x="743.06" y="106.15" width="3.48" height="3.48"/>
      <rect x="746.54" y="106.15" width="3.48" height="3.48"/>
      <rect x="750.02" y="106.15" width="3.48" height="3.48"/>
      <rect x="753.5" y="106.15" width="3.48" height="3.48"/>
      <rect x="756.98" y="106.15" width="3.48" height="3.48"/>
      <rect x="760.46" y="106.15" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="106.15" width="3.48" height="3.48"/>
      <rect x="697.81" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="701.29" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="704.77" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="711.73" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="715.21" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="718.7" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="722.18" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="725.66" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="729.14" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="743.06" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="746.54" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="750.02" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="753.5" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="756.98" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="708.25" y="113.11" width="3.48" height="3.48"/>
      <rect x="711.73" y="113.11" width="3.48" height="3.48"/>
      <rect x="715.21" y="113.11" width="3.48" height="3.48"/>
      <rect x="718.7" y="113.11" width="3.48" height="3.48"/>
      <rect x="722.18" y="113.11" width="3.48" height="3.48"/>
      <rect x="725.66" y="113.11" width="3.48" height="3.48"/>
      <rect x="729.14" y="113.11" width="3.48" height="3.48"/>
      <rect x="732.62" y="113.11" width="3.48" height="3.48"/>
      <rect x="736.1" y="113.11" width="3.48" height="3.48"/>
      <rect x="739.58" y="113.11" width="3.48" height="3.48"/>
      <rect x="743.06" y="113.11" width="3.48" height="3.48"/>
      <rect x="746.54" y="113.11" width="3.48" height="3.48"/>
      <rect x="711.73" y="116.59" width="3.48" height="3.48"/>
      <rect x="715.21" y="116.59" width="3.48" height="3.48"/>
      <rect x="718.7" y="116.59" width="3.48" height="3.48"/>
      <rect x="722.18" y="116.59" width="3.48" height="3.48"/>
      <rect x="725.66" y="116.59" width="3.48" height="3.48"/>
      <rect x="729.14" y="116.59" width="3.48" height="3.48"/>
      <rect x="732.62" y="116.59" width="3.48" height="3.48"/>
      <rect x="736.1" y="116.59" width="3.48" height="3.48"/>
      <rect x="739.58" y="116.59" width="3.48" height="3.48"/>
      <rect x="743.06" y="116.59" width="3.48" height="3.48"/>
      <rect x="746.54" y="116.59" width="3.48" height="3.48"/>
      <rect x="729.14" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="732.62" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="736.1" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="739.58" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="FR" title="France" class="land">
      <rect x="482.03" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="485.51" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="475.07" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="478.55" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="482.03" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="485.51" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="488.99" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="468.11" y="102.67" width="3.48" height="3.48"/>
      <rect x="471.59" y="102.67" width="3.48" height="3.48"/>
      <rect x="475.07" y="102.67" width="3.48" height="3.48"/>
      <rect x="478.55" y="102.67" width="3.48" height="3.48"/>
      <rect x="482.03" y="102.67" width="3.48" height="3.48"/>
      <rect x="485.51" y="102.67" width="3.48" height="3.48"/>
      <rect x="488.99" y="102.67" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="102.67" width="3.48" height="3.48"/>
      <rect x="475.07" y="106.15" width="3.48" height="3.48"/>
      <rect x="478.55" y="106.15" width="3.48" height="3.48"/>
      <rect x="482.03" y="106.15" width="3.48" height="3.48"/>
      <rect x="485.51" y="106.15" width="3.48" height="3.48"/>
      <rect x="488.99" y="106.15" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="106.15" width="3.48" height="3.48"/>
      <rect x="475.07" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="478.55" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="482.03" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="485.51" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="488.99" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="475.07" y="113.11" width="3.48" height="3.48"/>
      <rect x="478.55" y="113.11" width="3.48" height="3.48"/>
      <rect x="482.03" y="113.11" width="3.48" height="3.48"/>
      <rect x="485.51" y="113.11" width="3.48" height="3.48"/>
      <rect x="488.99" y="113.11" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="113.11" width="3.48" height="3.48"/>
      <rect x="475.07" y="116.59" width="3.48" height="3.48"/>
      <rect x="478.55" y="116.59" width="3.48" height="3.48"/>
      <rect x="482.03" y="116.59" width="3.48" height="3.48"/>
      <rect x="485.51" y="116.59" width="3.48" height="3.48"/>
      <rect x="488.99" y="116.59" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="116.59" width="3.48" height="3.48"/>
      <rect x="482.03" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="499.43" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="BE" title="Belgium" class="land">
      <rect x="488.99" y="95.71000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="CZ" title="Czechia" class="land">
      <rect x="509.87" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="516.83" y="95.71000000000001" width="3.48" height="3.48"/>
      <rect x="509.87" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="516.83" y="99.19000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="SK" title="Slovakia" class="land">
      <rect x="520.31" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="523.79" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="527.28" y="99.19000000000001" width="3.48" height="3.48"/>
      <rect x="520.31" y="102.67" width="3.48" height="3.48"/>
    </g>
    <g id="AT" title="Austria" class="land">
      <rect x="509.87" y="102.67" width="3.48" height="3.48"/>
      <rect x="513.35" y="102.67" width="3.48" height="3.48"/>
      <rect x="516.83" y="102.67" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="106.15" width="3.48" height="3.48"/>
      <rect x="506.39" y="106.15" width="3.48" height="3.48"/>
      <rect x="509.87" y="106.15" width="3.48" height="3.48"/>
      <rect x="513.35" y="106.15" width="3.48" height="3.48"/>
    </g>
    <g id="HU" title="Hungary" class="land">
      <rect x="523.79" y="102.67" width="3.48" height="3.48"/>
      <rect x="527.28" y="102.67" width="3.48" height="3.48"/>
      <rect x="530.76" y="102.67" width="3.48" height="3.48"/>
      <rect x="516.83" y="106.15" width="3.48" height="3.48"/>
      <rect x="520.31" y="106.15" width="3.48" height="3.48"/>
      <rect x="523.79" y="106.15" width="3.48" height="3.48"/>
      <rect x="527.28" y="106.15" width="3.48" height="3.48"/>
      <rect x="520.31" y="109.63000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="RO" title="Romania" class="land">
      <rect x="541.2" y="102.67" width="3.48" height="3.48"/>
      <rect x="530.76" y="106.15" width="3.48" height="3.48"/>
      <rect x="534.24" y="106.15" width="3.48" height="3.48"/>
      <rect x="537.72" y="106.15" width="3.48" height="3.48"/>
      <rect x="541.2" y="106.15" width="3.48" height="3.48"/>
      <rect x="527.28" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="534.24" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="113.11" width="3.48" height="3.48"/>
      <rect x="534.24" y="113.11" width="3.48" height="3.48"/>
      <rect x="537.72" y="113.11" width="3.48" height="3.48"/>
      <rect x="541.2" y="113.11" width="3.48" height="3.48"/>
      <rect x="544.68" y="113.11" width="3.48" height="3.48"/>
    </g>
    <g id="MD" title="Moldova" class="land">
      <rect x="544.68" y="102.67" width="3.48" height="3.48"/>
      <rect x="544.68" y="106.15" width="3.48" height="3.48"/>
    </g>
    <g id="CH" title="Switzerland" class="land">
      <rect x="495.95" y="106.15" width="3.48" height="3.48"/>
      <rect x="499.43" y="106.15" width="3.48" height="3.48"/>
    </g>
    <g id="IT" title="Italy" class="land">
      <rect x="495.95" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="499.43" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="506.39" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="495.95" y="113.11" width="3.48" height="3.48"/>
      <rect x="499.43" y="113.11" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="113.11" width="3.48" height="3.48"/>
      <rect x="506.39" y="113.11" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="116.59" width="3.48" height="3.48"/>
      <rect x="506.39" y="116.59" width="3.48" height="3.48"/>
      <rect x="509.87" y="116.59" width="3.48" height="3.48"/>
      <rect x="506.39" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="509.87" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="509.87" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="516.83" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="499.43" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="516.83" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="499.43" y="130.51" width="3.48" height="3.48"/>
      <rect x="509.87" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="133.98999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="SI" title="Slovenia" class="land">
      <rect x="509.87" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="109.63000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="HR" title="Croatia" class="land">
      <rect x="516.83" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="513.35" y="113.11" width="3.48" height="3.48"/>
      <rect x="516.83" y="116.59" width="3.48" height="3.48"/>
    </g>
    <g id="RS" title="Serbia" class="land">
      <rect x="523.79" y="109.63000000000001" width="3.48" height="3.48"/>
      <rect x="527.28" y="113.11" width="3.48" height="3.48"/>
      <rect x="527.28" y="116.59" width="3.48" height="3.48"/>
      <rect x="530.76" y="116.59" width="3.48" height="3.48"/>
      <rect x="530.76" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="BA" title="Bosnia and Herzegovina" class="land">
      <rect x="516.83" y="113.11" width="3.48" height="3.48"/>
      <rect x="520.31" y="113.11" width="3.48" height="3.48"/>
      <rect x="523.79" y="113.11" width="3.48" height="3.48"/>
      <rect x="520.31" y="116.59" width="3.48" height="3.48"/>
      <rect x="523.79" y="116.59" width="3.48" height="3.48"/>
    </g>
    <g id="UZ" title="Uzbekistan" class="land">
      <rect x="614.28" y="113.11" width="3.48" height="3.48"/>
      <rect x="617.76" y="113.11" width="3.48" height="3.48"/>
      <rect x="621.24" y="113.11" width="3.48" height="3.48"/>
      <rect x="614.28" y="116.59" width="3.48" height="3.48"/>
      <rect x="617.76" y="116.59" width="3.48" height="3.48"/>
      <rect x="621.24" y="116.59" width="3.48" height="3.48"/>
      <rect x="624.73" y="116.59" width="3.48" height="3.48"/>
      <rect x="628.21" y="116.59" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="635.17" y="116.59" width="3.48" height="3.48"/>
      <rect x="617.76" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="617.76" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="628.21" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="638.65" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="649.09" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="635.17" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="638.65" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="642.13" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="645.61" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="638.65" y="130.51" width="3.48" height="3.48"/>
      <rect x="642.13" y="130.51" width="3.48" height="3.48"/>
      <rect x="645.61" y="130.51" width="3.48" height="3.48"/>
      <rect x="645.61" y="133.98999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="JP" title="Japan" class="land">
      <rect x="823.11" y="113.11" width="3.48" height="3.48"/>
      <rect x="823.11" y="116.59" width="3.48" height="3.48"/>
      <rect x="826.59" y="116.59" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="116.59" width="3.48" height="3.48"/>
      <rect x="826.59" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="826.59" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="826.59" y="130.51" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="130.51" width="3.48" height="3.48"/>
      <rect x="826.59" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="823.11" y="137.47" width="3.48" height="3.48"/>
      <rect x="826.59" y="137.47" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="823.11" y="140.95" width="3.48" height="3.48"/>
      <rect x="826.59" y="140.95" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="805.7" y="144.44" width="3.48" height="3.48"/>
      <rect x="812.66" y="144.44" width="3.48" height="3.48"/>
      <rect x="816.15" y="144.44" width="3.48" height="3.48"/>
      <rect x="823.11" y="144.44" width="3.48" height="3.48"/>
      <rect x="809.18" y="147.92" width="3.48" height="3.48"/>
      <rect x="812.66" y="147.92" width="3.48" height="3.48"/>
      <rect x="816.15" y="147.92" width="3.48" height="3.48"/>
      <rect x="823.11" y="147.92" width="3.48" height="3.48"/>
      <rect x="812.66" y="151.39999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="ES" title="Spain" class="land">
      <rect x="457.67" y="116.59" width="3.48" height="3.48"/>
      <rect x="461.15" y="116.59" width="3.48" height="3.48"/>
      <rect x="457.67" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="461.15" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="464.63" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="468.11" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="471.59" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="475.07" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="478.55" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="461.15" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="464.63" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="468.11" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="471.59" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="475.07" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="478.55" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="482.03" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="461.15" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="464.63" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="468.11" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="471.59" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="475.07" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="461.15" y="130.51" width="3.48" height="3.48"/>
      <rect x="464.63" y="130.51" width="3.48" height="3.48"/>
      <rect x="468.11" y="130.51" width="3.48" height="3.48"/>
      <rect x="471.59" y="130.51" width="3.48" height="3.48"/>
      <rect x="475.07" y="130.51" width="3.48" height="3.48"/>
      <rect x="461.15" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="137.47" width="3.48" height="3.48"/>
      <rect x="464.63" y="137.47" width="3.48" height="3.48"/>
      <rect x="468.11" y="137.47" width="3.48" height="3.48"/>
      <rect x="471.59" y="137.47" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="165.32" width="3.48" height="3.48"/>
    </g>
    <g id="BG" title="Bulgaria" class="land">
      <rect x="534.24" y="116.59" width="3.48" height="3.48"/>
      <rect x="537.72" y="116.59" width="3.48" height="3.48"/>
      <rect x="541.2" y="116.59" width="3.48" height="3.48"/>
      <rect x="544.68" y="116.59" width="3.48" height="3.48"/>
      <rect x="534.24" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="544.68" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="ME" title="Montenegro" class="land">
      <rect x="523.79" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="XK" title="Kosovo" class="land">
      <rect x="527.28" y="120.07000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="GE" title="Georgia" class="land">
      <rect x="579.48" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="123.55000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="TM" title="Turkmenistan" class="land">
      <rect x="621.24" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="621.24" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="624.73" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="610.8" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="614.28" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="617.76" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="621.24" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="624.73" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="628.21" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="614.28" y="130.51" width="3.48" height="3.48"/>
      <rect x="617.76" y="130.51" width="3.48" height="3.48"/>
      <rect x="621.24" y="130.51" width="3.48" height="3.48"/>
      <rect x="624.73" y="130.51" width="3.48" height="3.48"/>
      <rect x="628.21" y="130.51" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="130.51" width="3.48" height="3.48"/>
      <rect x="635.17" y="130.51" width="3.48" height="3.48"/>
      <rect x="614.28" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="621.24" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="624.73" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="635.17" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="638.65" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="642.13" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="635.17" y="137.47" width="3.48" height="3.48"/>
      <rect x="638.65" y="137.47" width="3.48" height="3.48"/>
      <rect x="635.17" y="140.95" width="3.48" height="3.48"/>
    </g>
    <g id="KG" title="Kyrgyzstan" class="land">
      <rect x="652.5699999999999" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="120.07000000000001" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="659.53" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="663.01" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="666.49" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="669.97" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="656.05" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="659.53" y="127.03000000000002" width="3.48" height="3.48"/>
    </g>
    <g id="PT" title="Portugal" class="land">
      <rect x="457.67" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="457.67" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="454.19" y="130.51" width="3.48" height="3.48"/>
      <rect x="457.67" y="130.51" width="3.48" height="3.48"/>
      <rect x="457.67" y="133.98999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="AL" title="Albania" class="land">
      <rect x="527.28" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="527.28" y="127.03000000000002" width="3.48" height="3.48"/>
    </g>
    <g id="MK" title="North Macedonia" class="land">
      <rect x="530.76" y="123.55000000000001" width="3.48" height="3.48"/>
    </g>
    <g id="GR" title="Greece" class="land">
      <rect x="534.24" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="537.72" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="530.76" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="530.76" y="130.51" width="3.48" height="3.48"/>
      <rect x="534.24" y="130.51" width="3.48" height="3.48"/>
      <rect x="530.76" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="137.47" width="3.48" height="3.48"/>
    </g>
    <g id="TR" title="Türkiye" class="land">
      <rect x="544.68" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="555.12" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="558.6" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="562.08" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="565.56" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="579.48" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="582.96" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="541.2" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="544.68" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="548.16" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="551.64" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="555.12" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="558.6" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="562.08" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="565.56" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="569.04" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="572.52" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="576" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="579.48" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="582.96" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="544.68" y="130.51" width="3.48" height="3.48"/>
      <rect x="548.16" y="130.51" width="3.48" height="3.48"/>
      <rect x="551.64" y="130.51" width="3.48" height="3.48"/>
      <rect x="555.12" y="130.51" width="3.48" height="3.48"/>
      <rect x="558.6" y="130.51" width="3.48" height="3.48"/>
      <rect x="562.08" y="130.51" width="3.48" height="3.48"/>
      <rect x="565.56" y="130.51" width="3.48" height="3.48"/>
      <rect x="569.04" y="130.51" width="3.48" height="3.48"/>
      <rect x="572.52" y="130.51" width="3.48" height="3.48"/>
      <rect x="576" y="130.51" width="3.48" height="3.48"/>
      <rect x="579.48" y="130.51" width="3.48" height="3.48"/>
      <rect x="582.96" y="130.51" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="130.51" width="3.48" height="3.48"/>
      <rect x="548.16" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="137.47" width="3.48" height="3.48"/>
      <rect x="551.64" y="137.47" width="3.48" height="3.48"/>
      <rect x="555.12" y="137.47" width="3.48" height="3.48"/>
      <rect x="558.6" y="137.47" width="3.48" height="3.48"/>
      <rect x="562.08" y="137.47" width="3.48" height="3.48"/>
      <rect x="565.56" y="137.47" width="3.48" height="3.48"/>
      <rect x="569.04" y="137.47" width="3.48" height="3.48"/>
      <rect x="572.52" y="137.47" width="3.48" height="3.48"/>
      <rect x="576" y="137.47" width="3.48" height="3.48"/>
    </g>
    <g id="AZ" title="Azerbaijan" class="land">
      <rect x="589.92" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="596.88" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="593.4" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="596.88" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="593.4" y="130.51" width="3.48" height="3.48"/>
    </g>
    <g id="KP" title="North Korea" class="land">
      <rect x="791.78" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="795.26" y="123.55000000000001" width="3.48" height="3.48"/>
      <rect x="788.3" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="791.78" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="795.26" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="791.78" y="130.51" width="3.48" height="3.48"/>
      <rect x="795.26" y="130.51" width="3.48" height="3.48"/>
      <rect x="791.78" y="133.98999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="AM" title="Armenia" class="land">
      <rect x="586.4399999999999" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="589.92" y="127.03000000000002" width="3.48" height="3.48"/>
    </g>
    <g id="TJ" title="Tajikistan" class="land">
      <rect x="649.09" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="127.03000000000002" width="3.48" height="3.48"/>
      <rect x="649.09" y="130.51" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="130.51" width="3.48" height="3.48"/>
      <rect x="656.05" y="130.51" width="3.48" height="3.48"/>
      <rect x="659.53" y="130.51" width="3.48" height="3.48"/>
      <rect x="649.09" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="656.05" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="659.53" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="133.98999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="IR" title="Iran" class="land">
      <rect x="589.92" y="130.51" width="3.48" height="3.48"/>
      <rect x="596.88" y="130.51" width="3.48" height="3.48"/>
      <rect x="589.92" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="617.76" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="137.47" width="3.48" height="3.48"/>
      <rect x="596.88" y="137.47" width="3.48" height="3.48"/>
      <rect x="600.36" y="137.47" width="3.48" height="3.48"/>
      <rect x="603.84" y="137.47" width="3.48" height="3.48"/>
      <rect x="614.28" y="137.47" width="3.48" height="3.48"/>
      <rect x="617.76" y="137.47" width="3.48" height="3.48"/>
      <rect x="621.24" y="137.47" width="3.48" height="3.48"/>
      <rect x="624.73" y="137.47" width="3.48" height="3.48"/>
      <rect x="628.21" y="137.47" width="3.48" height="3.48"/>
      <rect x="596.88" y="140.95" width="3.48" height="3.48"/>
      <rect x="600.36" y="140.95" width="3.48" height="3.48"/>
      <rect x="603.84" y="140.95" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="610.8" y="140.95" width="3.48" height="3.48"/>
      <rect x="614.28" y="140.95" width="3.48" height="3.48"/>
      <rect x="617.76" y="140.95" width="3.48" height="3.48"/>
      <rect x="621.24" y="140.95" width="3.48" height="3.48"/>
      <rect x="624.73" y="140.95" width="3.48" height="3.48"/>
      <rect x="628.21" y="140.95" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="593.4" y="144.44" width="3.48" height="3.48"/>
      <rect x="596.88" y="144.44" width="3.48" height="3.48"/>
      <rect x="600.36" y="144.44" width="3.48" height="3.48"/>
      <rect x="603.84" y="144.44" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="144.44" width="3.48" height="3.48"/>
      <rect x="610.8" y="144.44" width="3.48" height="3.48"/>
      <rect x="614.28" y="144.44" width="3.48" height="3.48"/>
      <rect x="617.76" y="144.44" width="3.48" height="3.48"/>
      <rect x="621.24" y="144.44" width="3.48" height="3.48"/>
      <rect x="624.73" y="144.44" width="3.48" height="3.48"/>
      <rect x="628.21" y="144.44" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="144.44" width="3.48" height="3.48"/>
      <rect x="596.88" y="147.92" width="3.48" height="3.48"/>
      <rect x="600.36" y="147.92" width="3.48" height="3.48"/>
      <rect x="603.84" y="147.92" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="147.92" width="3.48" height="3.48"/>
      <rect x="610.8" y="147.92" width="3.48" height="3.48"/>
      <rect x="614.28" y="147.92" width="3.48" height="3.48"/>
      <rect x="617.76" y="147.92" width="3.48" height="3.48"/>
      <rect x="621.24" y="147.92" width="3.48" height="3.48"/>
      <rect x="624.73" y="147.92" width="3.48" height="3.48"/>
      <rect x="628.21" y="147.92" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="147.92" width="3.48" height="3.48"/>
      <rect x="600.36" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="610.8" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="614.28" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="617.76" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="621.24" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="624.73" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="154.88" width="3.48" height="3.48"/>
      <rect x="603.84" y="154.88" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="610.8" y="154.88" width="3.48" height="3.48"/>
      <rect x="614.28" y="154.88" width="3.48" height="3.48"/>
      <rect x="617.76" y="154.88" width="3.48" height="3.48"/>
      <rect x="621.24" y="154.88" width="3.48" height="3.48"/>
      <rect x="624.73" y="154.88" width="3.48" height="3.48"/>
      <rect x="628.21" y="154.88" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="635.17" y="154.88" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="610.8" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="614.28" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="617.76" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="621.24" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="624.73" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="628.21" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="610.8" y="161.84" width="3.48" height="3.48"/>
      <rect x="614.28" y="161.84" width="3.48" height="3.48"/>
      <rect x="617.76" y="161.84" width="3.48" height="3.48"/>
      <rect x="621.24" y="161.84" width="3.48" height="3.48"/>
      <rect x="624.73" y="161.84" width="3.48" height="3.48"/>
      <rect x="628.21" y="161.84" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="161.84" width="3.48" height="3.48"/>
      <rect x="635.17" y="161.84" width="3.48" height="3.48"/>
      <rect x="610.8" y="165.32" width="3.48" height="3.48"/>
      <rect x="614.28" y="165.32" width="3.48" height="3.48"/>
      <rect x="617.76" y="165.32" width="3.48" height="3.48"/>
      <rect x="621.24" y="165.32" width="3.48" height="3.48"/>
      <rect x="624.73" y="165.32" width="3.48" height="3.48"/>
      <rect x="628.21" y="165.32" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="165.32" width="3.48" height="3.48"/>
      <rect x="635.17" y="165.32" width="3.48" height="3.48"/>
      <rect x="638.65" y="165.32" width="3.48" height="3.48"/>
      <rect x="617.76" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="621.24" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="635.17" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="638.65" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="172.28" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="635.17" y="172.28" width="3.48" height="3.48"/>
    </g>
    <g id="KR" title="South Korea" class="land">
      <rect x="795.26" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="798.74" y="133.98999999999998" width="3.48" height="3.48"/>
      <rect x="795.26" y="137.47" width="3.48" height="3.48"/>
      <rect x="798.74" y="137.47" width="3.48" height="3.48"/>
      <rect x="802.22" y="137.47" width="3.48" height="3.48"/>
      <rect x="798.74" y="140.95" width="3.48" height="3.48"/>
      <rect x="802.22" y="140.95" width="3.48" height="3.48"/>
      <rect x="798.74" y="144.44" width="3.48" height="3.48"/>
    </g>
    <g id="DZ" title="Algeria" class="land">
      <rect x="488.99" y="137.47" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="137.47" width="3.48" height="3.48"/>
      <rect x="495.95" y="137.47" width="3.48" height="3.48"/>
      <rect x="478.55" y="140.95" width="3.48" height="3.48"/>
      <rect x="482.03" y="140.95" width="3.48" height="3.48"/>
      <rect x="485.51" y="140.95" width="3.48" height="3.48"/>
      <rect x="488.99" y="140.95" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="140.95" width="3.48" height="3.48"/>
      <rect x="495.95" y="140.95" width="3.48" height="3.48"/>
      <rect x="475.07" y="144.44" width="3.48" height="3.48"/>
      <rect x="478.55" y="144.44" width="3.48" height="3.48"/>
      <rect x="482.03" y="144.44" width="3.48" height="3.48"/>
      <rect x="485.51" y="144.44" width="3.48" height="3.48"/>
      <rect x="488.99" y="144.44" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="144.44" width="3.48" height="3.48"/>
      <rect x="495.95" y="144.44" width="3.48" height="3.48"/>
      <rect x="475.07" y="147.92" width="3.48" height="3.48"/>
      <rect x="478.55" y="147.92" width="3.48" height="3.48"/>
      <rect x="482.03" y="147.92" width="3.48" height="3.48"/>
      <rect x="485.51" y="147.92" width="3.48" height="3.48"/>
      <rect x="488.99" y="147.92" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="147.92" width="3.48" height="3.48"/>
      <rect x="495.95" y="147.92" width="3.48" height="3.48"/>
      <rect x="475.07" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="154.88" width="3.48" height="3.48"/>
      <rect x="471.59" y="154.88" width="3.48" height="3.48"/>
      <rect x="475.07" y="154.88" width="3.48" height="3.48"/>
      <rect x="478.55" y="154.88" width="3.48" height="3.48"/>
      <rect x="482.03" y="154.88" width="3.48" height="3.48"/>
      <rect x="485.51" y="154.88" width="3.48" height="3.48"/>
      <rect x="488.99" y="154.88" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="154.88" width="3.48" height="3.48"/>
      <rect x="495.95" y="154.88" width="3.48" height="3.48"/>
      <rect x="499.43" y="154.88" width="3.48" height="3.48"/>
      <rect x="464.63" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="468.11" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="471.59" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="475.07" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="478.55" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="482.03" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="485.51" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="488.99" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="495.95" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="499.43" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="457.67" y="161.84" width="3.48" height="3.48"/>
      <rect x="461.15" y="161.84" width="3.48" height="3.48"/>
      <rect x="464.63" y="161.84" width="3.48" height="3.48"/>
      <rect x="468.11" y="161.84" width="3.48" height="3.48"/>
      <rect x="471.59" y="161.84" width="3.48" height="3.48"/>
      <rect x="475.07" y="161.84" width="3.48" height="3.48"/>
      <rect x="478.55" y="161.84" width="3.48" height="3.48"/>
      <rect x="482.03" y="161.84" width="3.48" height="3.48"/>
      <rect x="485.51" y="161.84" width="3.48" height="3.48"/>
      <rect x="488.99" y="161.84" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="161.84" width="3.48" height="3.48"/>
      <rect x="495.95" y="161.84" width="3.48" height="3.48"/>
      <rect x="499.43" y="161.84" width="3.48" height="3.48"/>
      <rect x="457.67" y="165.32" width="3.48" height="3.48"/>
      <rect x="461.15" y="165.32" width="3.48" height="3.48"/>
      <rect x="464.63" y="165.32" width="3.48" height="3.48"/>
      <rect x="468.11" y="165.32" width="3.48" height="3.48"/>
      <rect x="471.59" y="165.32" width="3.48" height="3.48"/>
      <rect x="475.07" y="165.32" width="3.48" height="3.48"/>
      <rect x="478.55" y="165.32" width="3.48" height="3.48"/>
      <rect x="482.03" y="165.32" width="3.48" height="3.48"/>
      <rect x="485.51" y="165.32" width="3.48" height="3.48"/>
      <rect x="488.99" y="165.32" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="165.32" width="3.48" height="3.48"/>
      <rect x="495.95" y="165.32" width="3.48" height="3.48"/>
      <rect x="499.43" y="165.32" width="3.48" height="3.48"/>
      <rect x="457.67" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="172.28" width="3.48" height="3.48"/>
      <rect x="468.11" y="172.28" width="3.48" height="3.48"/>
      <rect x="471.59" y="172.28" width="3.48" height="3.48"/>
      <rect x="475.07" y="172.28" width="3.48" height="3.48"/>
      <rect x="478.55" y="172.28" width="3.48" height="3.48"/>
      <rect x="482.03" y="172.28" width="3.48" height="3.48"/>
      <rect x="485.51" y="172.28" width="3.48" height="3.48"/>
      <rect x="488.99" y="172.28" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="172.28" width="3.48" height="3.48"/>
      <rect x="495.95" y="172.28" width="3.48" height="3.48"/>
      <rect x="499.43" y="172.28" width="3.48" height="3.48"/>
      <rect x="468.11" y="175.76" width="3.48" height="3.48"/>
      <rect x="471.59" y="175.76" width="3.48" height="3.48"/>
      <rect x="475.07" y="175.76" width="3.48" height="3.48"/>
      <rect x="478.55" y="175.76" width="3.48" height="3.48"/>
      <rect x="482.03" y="175.76" width="3.48" height="3.48"/>
      <rect x="485.51" y="175.76" width="3.48" height="3.48"/>
      <rect x="488.99" y="175.76" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="175.76" width="3.48" height="3.48"/>
      <rect x="495.95" y="175.76" width="3.48" height="3.48"/>
      <rect x="499.43" y="175.76" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="175.76" width="3.48" height="3.48"/>
      <rect x="471.59" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="182.72" width="3.48" height="3.48"/>
      <rect x="478.55" y="182.72" width="3.48" height="3.48"/>
      <rect x="482.03" y="182.72" width="3.48" height="3.48"/>
      <rect x="485.51" y="182.72" width="3.48" height="3.48"/>
      <rect x="488.99" y="182.72" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="182.72" width="3.48" height="3.48"/>
      <rect x="495.95" y="182.72" width="3.48" height="3.48"/>
      <rect x="499.43" y="182.72" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="182.72" width="3.48" height="3.48"/>
      <rect x="482.03" y="186.2" width="3.48" height="3.48"/>
      <rect x="485.51" y="186.2" width="3.48" height="3.48"/>
      <rect x="488.99" y="186.2" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="186.2" width="3.48" height="3.48"/>
      <rect x="495.95" y="186.2" width="3.48" height="3.48"/>
      <rect x="485.51" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="193.16" width="3.48" height="3.48"/>
    </g>
    <g id="TN" title="Tunisia" class="land">
      <rect x="499.43" y="137.47" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="137.47" width="3.48" height="3.48"/>
      <rect x="499.43" y="140.95" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="140.95" width="3.48" height="3.48"/>
      <rect x="499.43" y="144.44" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="144.44" width="3.48" height="3.48"/>
      <rect x="499.43" y="147.92" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="147.92" width="3.48" height="3.48"/>
      <rect x="499.43" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="154.88" width="3.48" height="3.48"/>
    </g>
    <g id="SY" title="Syria" class="land">
      <rect x="579.48" y="137.47" width="3.48" height="3.48"/>
      <rect x="582.96" y="137.47" width="3.48" height="3.48"/>
      <rect x="569.04" y="140.95" width="3.48" height="3.48"/>
      <rect x="572.52" y="140.95" width="3.48" height="3.48"/>
      <rect x="576" y="140.95" width="3.48" height="3.48"/>
      <rect x="579.48" y="140.95" width="3.48" height="3.48"/>
      <rect x="572.52" y="144.44" width="3.48" height="3.48"/>
      <rect x="576" y="144.44" width="3.48" height="3.48"/>
      <rect x="579.48" y="144.44" width="3.48" height="3.48"/>
      <rect x="569.04" y="147.92" width="3.48" height="3.48"/>
      <rect x="572.52" y="147.92" width="3.48" height="3.48"/>
      <rect x="576" y="147.92" width="3.48" height="3.48"/>
    </g>
    <g id="IQ" title="Iraq" class="land">
      <rect x="586.4399999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="589.92" y="137.47" width="3.48" height="3.48"/>
      <rect x="582.96" y="140.95" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="589.92" y="140.95" width="3.48" height="3.48"/>
      <rect x="593.4" y="140.95" width="3.48" height="3.48"/>
      <rect x="582.96" y="144.44" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="144.44" width="3.48" height="3.48"/>
      <rect x="589.92" y="144.44" width="3.48" height="3.48"/>
      <rect x="579.48" y="147.92" width="3.48" height="3.48"/>
      <rect x="582.96" y="147.92" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="147.92" width="3.48" height="3.48"/>
      <rect x="589.92" y="147.92" width="3.48" height="3.48"/>
      <rect x="593.4" y="147.92" width="3.48" height="3.48"/>
      <rect x="579.48" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="589.92" y="154.88" width="3.48" height="3.48"/>
      <rect x="593.4" y="154.88" width="3.48" height="3.48"/>
      <rect x="596.88" y="154.88" width="3.48" height="3.48"/>
      <rect x="589.92" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="593.4" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="596.88" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="600.36" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="596.88" y="161.84" width="3.48" height="3.48"/>
    </g>
    <g id="AF" title="Afghanistan" class="land">
      <rect x="642.13" y="137.47" width="3.48" height="3.48"/>
      <rect x="645.61" y="137.47" width="3.48" height="3.48"/>
      <rect x="649.09" y="137.47" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="137.47" width="3.48" height="3.48"/>
      <rect x="656.05" y="137.47" width="3.48" height="3.48"/>
      <rect x="659.53" y="137.47" width="3.48" height="3.48"/>
      <rect x="638.65" y="140.95" width="3.48" height="3.48"/>
      <rect x="642.13" y="140.95" width="3.48" height="3.48"/>
      <rect x="645.61" y="140.95" width="3.48" height="3.48"/>
      <rect x="649.09" y="140.95" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="140.95" width="3.48" height="3.48"/>
      <rect x="656.05" y="140.95" width="3.48" height="3.48"/>
      <rect x="635.17" y="144.44" width="3.48" height="3.48"/>
      <rect x="638.65" y="144.44" width="3.48" height="3.48"/>
      <rect x="642.13" y="144.44" width="3.48" height="3.48"/>
      <rect x="645.61" y="144.44" width="3.48" height="3.48"/>
      <rect x="649.09" y="144.44" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="144.44" width="3.48" height="3.48"/>
      <rect x="656.05" y="144.44" width="3.48" height="3.48"/>
      <rect x="635.17" y="147.92" width="3.48" height="3.48"/>
      <rect x="638.65" y="147.92" width="3.48" height="3.48"/>
      <rect x="642.13" y="147.92" width="3.48" height="3.48"/>
      <rect x="645.61" y="147.92" width="3.48" height="3.48"/>
      <rect x="649.09" y="147.92" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="147.92" width="3.48" height="3.48"/>
      <rect x="635.17" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="638.65" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="642.13" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="645.61" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="649.09" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="638.65" y="154.88" width="3.48" height="3.48"/>
      <rect x="642.13" y="154.88" width="3.48" height="3.48"/>
      <rect x="645.61" y="154.88" width="3.48" height="3.48"/>
      <rect x="635.17" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="638.65" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="642.13" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="645.61" y="158.35999999999999" width="3.48" height="3.48"/>
    </g>
    <g id="PK" title="Pakistan" class="land">
      <rect x="663.01" y="137.47" width="3.48" height="3.48"/>
      <rect x="666.49" y="137.47" width="3.48" height="3.48"/>
      <rect x="659.53" y="140.95" width="3.48" height="3.48"/>
      <rect x="663.01" y="140.95" width="3.48" height="3.48"/>
      <rect x="666.49" y="140.95" width="3.48" height="3.48"/>
      <rect x="669.97" y="140.95" width="3.48" height="3.48"/>
      <rect x="659.53" y="144.44" width="3.48" height="3.48"/>
      <rect x="663.01" y="144.44" width="3.48" height="3.48"/>
      <rect x="656.05" y="147.92" width="3.48" height="3.48"/>
      <rect x="659.53" y="147.92" width="3.48" height="3.48"/>
      <rect x="663.01" y="147.92" width="3.48" height="3.48"/>
      <rect x="656.05" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="659.53" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="666.49" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="649.09" y="154.88" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="154.88" width="3.48" height="3.48"/>
      <rect x="656.05" y="154.88" width="3.48" height="3.48"/>
      <rect x="659.53" y="154.88" width="3.48" height="3.48"/>
      <rect x="663.01" y="154.88" width="3.48" height="3.48"/>
      <rect x="666.49" y="154.88" width="3.48" height="3.48"/>
      <rect x="649.09" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="656.05" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="659.53" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="663.01" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="666.49" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="638.65" y="161.84" width="3.48" height="3.48"/>
      <rect x="642.13" y="161.84" width="3.48" height="3.48"/>
      <rect x="645.61" y="161.84" width="3.48" height="3.48"/>
      <rect x="649.09" y="161.84" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="161.84" width="3.48" height="3.48"/>
      <rect x="656.05" y="161.84" width="3.48" height="3.48"/>
      <rect x="659.53" y="161.84" width="3.48" height="3.48"/>
      <rect x="663.01" y="161.84" width="3.48" height="3.48"/>
      <rect x="642.13" y="165.32" width="3.48" height="3.48"/>
      <rect x="645.61" y="165.32" width="3.48" height="3.48"/>
      <rect x="649.09" y="165.32" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="165.32" width="3.48" height="3.48"/>
      <rect x="656.05" y="165.32" width="3.48" height="3.48"/>
      <rect x="663.01" y="165.32" width="3.48" height="3.48"/>
      <rect x="642.13" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="645.61" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="649.09" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="656.05" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="638.65" y="172.28" width="3.48" height="3.48"/>
      <rect x="642.13" y="172.28" width="3.48" height="3.48"/>
      <rect x="645.61" y="172.28" width="3.48" height="3.48"/>
      <rect x="649.09" y="172.28" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="656.05" y="172.28" width="3.48" height="3.48"/>
      <rect x="659.53" y="172.28" width="3.48" height="3.48"/>
      <rect x="656.05" y="175.76" width="3.48" height="3.48"/>
      <rect x="659.53" y="175.76" width="3.48" height="3.48"/>
    </g>
    <g id="MA" title="Morocco" class="land">
      <rect x="461.15" y="144.44" width="3.48" height="3.48"/>
      <rect x="464.63" y="144.44" width="3.48" height="3.48"/>
      <rect x="468.11" y="144.44" width="3.48" height="3.48"/>
      <rect x="471.59" y="144.44" width="3.48" height="3.48"/>
      <rect x="457.67" y="147.92" width="3.48" height="3.48"/>
      <rect x="461.15" y="147.92" width="3.48" height="3.48"/>
      <rect x="464.63" y="147.92" width="3.48" height="3.48"/>
      <rect x="468.11" y="147.92" width="3.48" height="3.48"/>
      <rect x="471.59" y="147.92" width="3.48" height="3.48"/>
      <rect x="454.19" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="457.67" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="154.88" width="3.48" height="3.48"/>
      <rect x="457.67" y="154.88" width="3.48" height="3.48"/>
      <rect x="461.15" y="154.88" width="3.48" height="3.48"/>
      <rect x="464.63" y="154.88" width="3.48" height="3.48"/>
      <rect x="454.19" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="457.67" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="461.15" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="450.71" y="161.84" width="3.48" height="3.48"/>
      <rect x="454.19" y="161.84" width="3.48" height="3.48"/>
      <rect x="447.23" y="165.32" width="3.48" height="3.48"/>
      <rect x="450.71" y="165.32" width="3.48" height="3.48"/>
      <rect x="454.19" y="165.32" width="3.48" height="3.48"/>
    </g>
    <g id="LB" title="Lebanon" class="land">
      <rect x="569.04" y="144.44" width="3.48" height="3.48"/>
    </g>
    <g id="IN" title="India" class="land">
      <rect x="666.49" y="144.44" width="3.48" height="3.48"/>
      <rect x="669.97" y="144.44" width="3.48" height="3.48"/>
      <rect x="673.45" y="144.44" width="3.48" height="3.48"/>
      <rect x="666.49" y="147.92" width="3.48" height="3.48"/>
      <rect x="669.97" y="147.92" width="3.48" height="3.48"/>
      <rect x="673.45" y="147.92" width="3.48" height="3.48"/>
      <rect x="676.93" y="147.92" width="3.48" height="3.48"/>
      <rect x="669.97" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="673.45" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="154.88" width="3.48" height="3.48"/>
      <rect x="673.45" y="154.88" width="3.48" height="3.48"/>
      <rect x="676.93" y="154.88" width="3.48" height="3.48"/>
      <rect x="669.97" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="673.45" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="676.93" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="680.41" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="683.89" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="666.49" y="161.84" width="3.48" height="3.48"/>
      <rect x="669.97" y="161.84" width="3.48" height="3.48"/>
      <rect x="673.45" y="161.84" width="3.48" height="3.48"/>
      <rect x="676.93" y="161.84" width="3.48" height="3.48"/>
      <rect x="680.41" y="161.84" width="3.48" height="3.48"/>
      <rect x="683.89" y="161.84" width="3.48" height="3.48"/>
      <rect x="722.18" y="161.84" width="3.48" height="3.48"/>
      <rect x="659.53" y="165.32" width="3.48" height="3.48"/>
      <rect x="666.49" y="165.32" width="3.48" height="3.48"/>
      <rect x="669.97" y="165.32" width="3.48" height="3.48"/>
      <rect x="673.45" y="165.32" width="3.48" height="3.48"/>
      <rect x="676.93" y="165.32" width="3.48" height="3.48"/>
      <rect x="680.41" y="165.32" width="3.48" height="3.48"/>
      <rect x="683.89" y="165.32" width="3.48" height="3.48"/>
      <rect x="687.37" y="165.32" width="3.48" height="3.48"/>
      <rect x="718.7" y="165.32" width="3.48" height="3.48"/>
      <rect x="722.18" y="165.32" width="3.48" height="3.48"/>
      <rect x="725.66" y="165.32" width="3.48" height="3.48"/>
      <rect x="729.14" y="165.32" width="3.48" height="3.48"/>
      <rect x="659.53" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="666.49" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="673.45" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="690.85" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="697.81" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="708.25" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="718.7" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="722.18" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="172.28" width="3.48" height="3.48"/>
      <rect x="666.49" y="172.28" width="3.48" height="3.48"/>
      <rect x="669.97" y="172.28" width="3.48" height="3.48"/>
      <rect x="673.45" y="172.28" width="3.48" height="3.48"/>
      <rect x="676.93" y="172.28" width="3.48" height="3.48"/>
      <rect x="680.41" y="172.28" width="3.48" height="3.48"/>
      <rect x="683.89" y="172.28" width="3.48" height="3.48"/>
      <rect x="687.37" y="172.28" width="3.48" height="3.48"/>
      <rect x="690.85" y="172.28" width="3.48" height="3.48"/>
      <rect x="694.33" y="172.28" width="3.48" height="3.48"/>
      <rect x="697.81" y="172.28" width="3.48" height="3.48"/>
      <rect x="701.29" y="172.28" width="3.48" height="3.48"/>
      <rect x="704.77" y="172.28" width="3.48" height="3.48"/>
      <rect x="711.73" y="172.28" width="3.48" height="3.48"/>
      <rect x="715.21" y="172.28" width="3.48" height="3.48"/>
      <rect x="718.7" y="172.28" width="3.48" height="3.48"/>
      <rect x="722.18" y="172.28" width="3.48" height="3.48"/>
      <rect x="663.01" y="175.76" width="3.48" height="3.48"/>
      <rect x="666.49" y="175.76" width="3.48" height="3.48"/>
      <rect x="669.97" y="175.76" width="3.48" height="3.48"/>
      <rect x="673.45" y="175.76" width="3.48" height="3.48"/>
      <rect x="676.93" y="175.76" width="3.48" height="3.48"/>
      <rect x="680.41" y="175.76" width="3.48" height="3.48"/>
      <rect x="683.89" y="175.76" width="3.48" height="3.48"/>
      <rect x="687.37" y="175.76" width="3.48" height="3.48"/>
      <rect x="690.85" y="175.76" width="3.48" height="3.48"/>
      <rect x="694.33" y="175.76" width="3.48" height="3.48"/>
      <rect x="697.81" y="175.76" width="3.48" height="3.48"/>
      <rect x="701.29" y="175.76" width="3.48" height="3.48"/>
      <rect x="704.77" y="175.76" width="3.48" height="3.48"/>
      <rect x="718.7" y="175.76" width="3.48" height="3.48"/>
      <rect x="722.18" y="175.76" width="3.48" height="3.48"/>
      <rect x="659.53" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="666.49" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="673.45" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="690.85" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="697.81" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="701.29" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="704.77" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="708.25" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="663.01" y="182.72" width="3.48" height="3.48"/>
      <rect x="666.49" y="182.72" width="3.48" height="3.48"/>
      <rect x="669.97" y="182.72" width="3.48" height="3.48"/>
      <rect x="673.45" y="182.72" width="3.48" height="3.48"/>
      <rect x="676.93" y="182.72" width="3.48" height="3.48"/>
      <rect x="680.41" y="182.72" width="3.48" height="3.48"/>
      <rect x="683.89" y="182.72" width="3.48" height="3.48"/>
      <rect x="687.37" y="182.72" width="3.48" height="3.48"/>
      <rect x="690.85" y="182.72" width="3.48" height="3.48"/>
      <rect x="694.33" y="182.72" width="3.48" height="3.48"/>
      <rect x="697.81" y="182.72" width="3.48" height="3.48"/>
      <rect x="701.29" y="182.72" width="3.48" height="3.48"/>
      <rect x="704.77" y="182.72" width="3.48" height="3.48"/>
      <rect x="708.25" y="182.72" width="3.48" height="3.48"/>
      <rect x="663.01" y="186.2" width="3.48" height="3.48"/>
      <rect x="666.49" y="186.2" width="3.48" height="3.48"/>
      <rect x="669.97" y="186.2" width="3.48" height="3.48"/>
      <rect x="673.45" y="186.2" width="3.48" height="3.48"/>
      <rect x="676.93" y="186.2" width="3.48" height="3.48"/>
      <rect x="680.41" y="186.2" width="3.48" height="3.48"/>
      <rect x="683.89" y="186.2" width="3.48" height="3.48"/>
      <rect x="687.37" y="186.2" width="3.48" height="3.48"/>
      <rect x="690.85" y="186.2" width="3.48" height="3.48"/>
      <rect x="694.33" y="186.2" width="3.48" height="3.48"/>
      <rect x="697.81" y="186.2" width="3.48" height="3.48"/>
      <rect x="701.29" y="186.2" width="3.48" height="3.48"/>
      <rect x="704.77" y="186.2" width="3.48" height="3.48"/>
      <rect x="669.97" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="673.45" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="690.85" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="697.81" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="701.29" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="704.77" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="669.97" y="193.16" width="3.48" height="3.48"/>
      <rect x="673.45" y="193.16" width="3.48" height="3.48"/>
      <rect x="676.93" y="193.16" width="3.48" height="3.48"/>
      <rect x="680.41" y="193.16" width="3.48" height="3.48"/>
      <rect x="683.89" y="193.16" width="3.48" height="3.48"/>
      <rect x="687.37" y="193.16" width="3.48" height="3.48"/>
      <rect x="690.85" y="193.16" width="3.48" height="3.48"/>
      <rect x="694.33" y="193.16" width="3.48" height="3.48"/>
      <rect x="697.81" y="193.16" width="3.48" height="3.48"/>
      <rect x="701.29" y="193.16" width="3.48" height="3.48"/>
      <rect x="673.45" y="196.64" width="3.48" height="3.48"/>
      <rect x="676.93" y="196.64" width="3.48" height="3.48"/>
      <rect x="680.41" y="196.64" width="3.48" height="3.48"/>
      <rect x="683.89" y="196.64" width="3.48" height="3.48"/>
      <rect x="687.37" y="196.64" width="3.48" height="3.48"/>
      <rect x="690.85" y="196.64" width="3.48" height="3.48"/>
      <rect x="694.33" y="196.64" width="3.48" height="3.48"/>
      <rect x="697.81" y="196.64" width="3.48" height="3.48"/>
      <rect x="673.45" y="200.12" width="3.48" height="3.48"/>
      <rect x="676.93" y="200.12" width="3.48" height="3.48"/>
      <rect x="680.41" y="200.12" width="3.48" height="3.48"/>
      <rect x="683.89" y="200.12" width="3.48" height="3.48"/>
      <rect x="687.37" y="200.12" width="3.48" height="3.48"/>
      <rect x="690.85" y="200.12" width="3.48" height="3.48"/>
      <rect x="694.33" y="200.12" width="3.48" height="3.48"/>
      <rect x="673.45" y="203.6" width="3.48" height="3.48"/>
      <rect x="676.93" y="203.6" width="3.48" height="3.48"/>
      <rect x="680.41" y="203.6" width="3.48" height="3.48"/>
      <rect x="683.89" y="203.6" width="3.48" height="3.48"/>
      <rect x="687.37" y="203.6" width="3.48" height="3.48"/>
      <rect x="690.85" y="203.6" width="3.48" height="3.48"/>
      <rect x="676.93" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="680.41" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="676.93" y="210.56" width="3.48" height="3.48"/>
      <rect x="680.41" y="210.56" width="3.48" height="3.48"/>
      <rect x="683.89" y="210.56" width="3.48" height="3.48"/>
      <rect x="687.37" y="210.56" width="3.48" height="3.48"/>
      <rect x="690.85" y="210.56" width="3.48" height="3.48"/>
      <rect x="680.41" y="214.04" width="3.48" height="3.48"/>
      <rect x="683.89" y="214.04" width="3.48" height="3.48"/>
      <rect x="687.37" y="214.04" width="3.48" height="3.48"/>
      <rect x="690.85" y="214.04" width="3.48" height="3.48"/>
      <rect x="680.41" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="687.37" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="683.89" y="221" width="3.48" height="3.48"/>
      <rect x="687.37" y="221" width="3.48" height="3.48"/>
      <rect x="683.89" y="224.48" width="3.48" height="3.48"/>
      <rect x="687.37" y="224.48" width="3.48" height="3.48"/>
    </g>
    <g id="MX" title="Mexico" class="land">
      <rect x="179.23999999999998" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="182.72" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="186.2" y="154.88" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="154.88" width="3.48" height="3.48"/>
      <rect x="193.16" y="154.88" width="3.48" height="3.48"/>
      <rect x="196.64" y="154.88" width="3.48" height="3.48"/>
      <rect x="200.12" y="154.88" width="3.48" height="3.48"/>
      <rect x="203.6" y="154.88" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="193.16" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="196.64" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="200.12" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="203.6" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="182.72" y="161.84" width="3.48" height="3.48"/>
      <rect x="186.2" y="161.84" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="161.84" width="3.48" height="3.48"/>
      <rect x="193.16" y="161.84" width="3.48" height="3.48"/>
      <rect x="196.64" y="161.84" width="3.48" height="3.48"/>
      <rect x="200.12" y="161.84" width="3.48" height="3.48"/>
      <rect x="203.6" y="161.84" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="161.84" width="3.48" height="3.48"/>
      <rect x="210.56" y="161.84" width="3.48" height="3.48"/>
      <rect x="214.04" y="161.84" width="3.48" height="3.48"/>
      <rect x="182.72" y="165.32" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="165.32" width="3.48" height="3.48"/>
      <rect x="193.16" y="165.32" width="3.48" height="3.48"/>
      <rect x="196.64" y="165.32" width="3.48" height="3.48"/>
      <rect x="200.12" y="165.32" width="3.48" height="3.48"/>
      <rect x="203.6" y="165.32" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="165.32" width="3.48" height="3.48"/>
      <rect x="210.56" y="165.32" width="3.48" height="3.48"/>
      <rect x="214.04" y="165.32" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="165.32" width="3.48" height="3.48"/>
      <rect x="182.72" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="193.16" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="196.64" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="200.12" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="210.56" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="214.04" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="186.2" y="172.28" width="3.48" height="3.48"/>
      <rect x="193.16" y="172.28" width="3.48" height="3.48"/>
      <rect x="196.64" y="172.28" width="3.48" height="3.48"/>
      <rect x="200.12" y="172.28" width="3.48" height="3.48"/>
      <rect x="203.6" y="172.28" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="172.28" width="3.48" height="3.48"/>
      <rect x="210.56" y="172.28" width="3.48" height="3.48"/>
      <rect x="214.04" y="172.28" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="172.28" width="3.48" height="3.48"/>
      <rect x="221" y="172.28" width="3.48" height="3.48"/>
      <rect x="186.2" y="175.76" width="3.48" height="3.48"/>
      <rect x="196.64" y="175.76" width="3.48" height="3.48"/>
      <rect x="200.12" y="175.76" width="3.48" height="3.48"/>
      <rect x="203.6" y="175.76" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="175.76" width="3.48" height="3.48"/>
      <rect x="210.56" y="175.76" width="3.48" height="3.48"/>
      <rect x="214.04" y="175.76" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="175.76" width="3.48" height="3.48"/>
      <rect x="221" y="175.76" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="200.12" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="210.56" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="214.04" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="200.12" y="182.72" width="3.48" height="3.48"/>
      <rect x="203.6" y="182.72" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="182.72" width="3.48" height="3.48"/>
      <rect x="210.56" y="182.72" width="3.48" height="3.48"/>
      <rect x="214.04" y="182.72" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="182.72" width="3.48" height="3.48"/>
      <rect x="200.12" y="186.2" width="3.48" height="3.48"/>
      <rect x="203.6" y="186.2" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="186.2" width="3.48" height="3.48"/>
      <rect x="210.56" y="186.2" width="3.48" height="3.48"/>
      <rect x="214.04" y="186.2" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="186.2" width="3.48" height="3.48"/>
      <rect x="241.89" y="186.2" width="3.48" height="3.48"/>
      <rect x="245.37" y="186.2" width="3.48" height="3.48"/>
      <rect x="200.12" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="210.56" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="214.04" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="221" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="238.41" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="241.89" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="245.37" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="203.6" y="193.16" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="193.16" width="3.48" height="3.48"/>
      <rect x="210.56" y="193.16" width="3.48" height="3.48"/>
      <rect x="214.04" y="193.16" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="193.16" width="3.48" height="3.48"/>
      <rect x="221" y="193.16" width="3.48" height="3.48"/>
      <rect x="238.41" y="193.16" width="3.48" height="3.48"/>
      <rect x="241.89" y="193.16" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="196.64" width="3.48" height="3.48"/>
      <rect x="210.56" y="196.64" width="3.48" height="3.48"/>
      <rect x="214.04" y="196.64" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="196.64" width="3.48" height="3.48"/>
      <rect x="221" y="196.64" width="3.48" height="3.48"/>
      <rect x="224.48" y="196.64" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="196.64" width="3.48" height="3.48"/>
      <rect x="231.44" y="196.64" width="3.48" height="3.48"/>
      <rect x="234.92" y="196.64" width="3.48" height="3.48"/>
      <rect x="238.41" y="196.64" width="3.48" height="3.48"/>
      <rect x="214.04" y="200.12" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="200.12" width="3.48" height="3.48"/>
      <rect x="221" y="200.12" width="3.48" height="3.48"/>
      <rect x="224.48" y="200.12" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="200.12" width="3.48" height="3.48"/>
      <rect x="231.44" y="200.12" width="3.48" height="3.48"/>
      <rect x="234.92" y="200.12" width="3.48" height="3.48"/>
      <rect x="221" y="203.6" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="203.6" width="3.48" height="3.48"/>
      <rect x="231.44" y="203.6" width="3.48" height="3.48"/>
    </g>
    <g id="LY" title="Libya" class="land">
      <rect x="509.87" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="154.88" width="3.48" height="3.48"/>
      <rect x="509.87" y="154.88" width="3.48" height="3.48"/>
      <rect x="513.35" y="154.88" width="3.48" height="3.48"/>
      <rect x="516.83" y="154.88" width="3.48" height="3.48"/>
      <rect x="530.76" y="154.88" width="3.48" height="3.48"/>
      <rect x="534.24" y="154.88" width="3.48" height="3.48"/>
      <rect x="537.72" y="154.88" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="506.39" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="509.87" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="513.35" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="516.83" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="520.31" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="523.79" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="527.28" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="530.76" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="534.24" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="537.72" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="161.84" width="3.48" height="3.48"/>
      <rect x="506.39" y="161.84" width="3.48" height="3.48"/>
      <rect x="509.87" y="161.84" width="3.48" height="3.48"/>
      <rect x="513.35" y="161.84" width="3.48" height="3.48"/>
      <rect x="516.83" y="161.84" width="3.48" height="3.48"/>
      <rect x="520.31" y="161.84" width="3.48" height="3.48"/>
      <rect x="523.79" y="161.84" width="3.48" height="3.48"/>
      <rect x="527.28" y="161.84" width="3.48" height="3.48"/>
      <rect x="530.76" y="161.84" width="3.48" height="3.48"/>
      <rect x="534.24" y="161.84" width="3.48" height="3.48"/>
      <rect x="537.72" y="161.84" width="3.48" height="3.48"/>
      <rect x="541.2" y="161.84" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="165.32" width="3.48" height="3.48"/>
      <rect x="506.39" y="165.32" width="3.48" height="3.48"/>
      <rect x="509.87" y="165.32" width="3.48" height="3.48"/>
      <rect x="513.35" y="165.32" width="3.48" height="3.48"/>
      <rect x="516.83" y="165.32" width="3.48" height="3.48"/>
      <rect x="520.31" y="165.32" width="3.48" height="3.48"/>
      <rect x="523.79" y="165.32" width="3.48" height="3.48"/>
      <rect x="527.28" y="165.32" width="3.48" height="3.48"/>
      <rect x="530.76" y="165.32" width="3.48" height="3.48"/>
      <rect x="534.24" y="165.32" width="3.48" height="3.48"/>
      <rect x="537.72" y="165.32" width="3.48" height="3.48"/>
      <rect x="541.2" y="165.32" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="172.28" width="3.48" height="3.48"/>
      <rect x="506.39" y="172.28" width="3.48" height="3.48"/>
      <rect x="509.87" y="172.28" width="3.48" height="3.48"/>
      <rect x="513.35" y="172.28" width="3.48" height="3.48"/>
      <rect x="516.83" y="172.28" width="3.48" height="3.48"/>
      <rect x="520.31" y="172.28" width="3.48" height="3.48"/>
      <rect x="523.79" y="172.28" width="3.48" height="3.48"/>
      <rect x="527.28" y="172.28" width="3.48" height="3.48"/>
      <rect x="530.76" y="172.28" width="3.48" height="3.48"/>
      <rect x="534.24" y="172.28" width="3.48" height="3.48"/>
      <rect x="537.72" y="172.28" width="3.48" height="3.48"/>
      <rect x="541.2" y="172.28" width="3.48" height="3.48"/>
      <rect x="506.39" y="175.76" width="3.48" height="3.48"/>
      <rect x="509.87" y="175.76" width="3.48" height="3.48"/>
      <rect x="513.35" y="175.76" width="3.48" height="3.48"/>
      <rect x="516.83" y="175.76" width="3.48" height="3.48"/>
      <rect x="520.31" y="175.76" width="3.48" height="3.48"/>
      <rect x="523.79" y="175.76" width="3.48" height="3.48"/>
      <rect x="527.28" y="175.76" width="3.48" height="3.48"/>
      <rect x="530.76" y="175.76" width="3.48" height="3.48"/>
      <rect x="534.24" y="175.76" width="3.48" height="3.48"/>
      <rect x="537.72" y="175.76" width="3.48" height="3.48"/>
      <rect x="541.2" y="175.76" width="3.48" height="3.48"/>
      <rect x="509.87" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="182.72" width="3.48" height="3.48"/>
      <rect x="530.76" y="182.72" width="3.48" height="3.48"/>
      <rect x="534.24" y="182.72" width="3.48" height="3.48"/>
      <rect x="537.72" y="182.72" width="3.48" height="3.48"/>
      <rect x="541.2" y="182.72" width="3.48" height="3.48"/>
      <rect x="530.76" y="186.2" width="3.48" height="3.48"/>
      <rect x="534.24" y="186.2" width="3.48" height="3.48"/>
      <rect x="537.72" y="186.2" width="3.48" height="3.48"/>
      <rect x="541.2" y="186.2" width="3.48" height="3.48"/>
      <rect x="537.72" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="189.67999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="JO" title="Jordan" class="land">
      <rect x="569.04" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="151.39999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="154.88" width="3.48" height="3.48"/>
      <rect x="569.04" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="572.52" y="158.35999999999999" width="3.48" height="3.48"/>
    </g>
    <g id="EG" title="Egypt" class="land">
      <rect x="541.2" y="154.88" width="3.48" height="3.48"/>
      <rect x="544.68" y="154.88" width="3.48" height="3.48"/>
      <rect x="555.12" y="154.88" width="3.48" height="3.48"/>
      <rect x="558.6" y="154.88" width="3.48" height="3.48"/>
      <rect x="541.2" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="544.68" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="548.16" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="551.64" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="555.12" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="558.6" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="562.08" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="565.56" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="544.68" y="161.84" width="3.48" height="3.48"/>
      <rect x="548.16" y="161.84" width="3.48" height="3.48"/>
      <rect x="551.64" y="161.84" width="3.48" height="3.48"/>
      <rect x="555.12" y="161.84" width="3.48" height="3.48"/>
      <rect x="558.6" y="161.84" width="3.48" height="3.48"/>
      <rect x="565.56" y="161.84" width="3.48" height="3.48"/>
      <rect x="544.68" y="165.32" width="3.48" height="3.48"/>
      <rect x="548.16" y="165.32" width="3.48" height="3.48"/>
      <rect x="551.64" y="165.32" width="3.48" height="3.48"/>
      <rect x="555.12" y="165.32" width="3.48" height="3.48"/>
      <rect x="558.6" y="165.32" width="3.48" height="3.48"/>
      <rect x="562.08" y="165.32" width="3.48" height="3.48"/>
      <rect x="565.56" y="165.32" width="3.48" height="3.48"/>
      <rect x="544.68" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="172.28" width="3.48" height="3.48"/>
      <rect x="548.16" y="172.28" width="3.48" height="3.48"/>
      <rect x="551.64" y="172.28" width="3.48" height="3.48"/>
      <rect x="555.12" y="172.28" width="3.48" height="3.48"/>
      <rect x="558.6" y="172.28" width="3.48" height="3.48"/>
      <rect x="562.08" y="172.28" width="3.48" height="3.48"/>
      <rect x="565.56" y="172.28" width="3.48" height="3.48"/>
      <rect x="544.68" y="175.76" width="3.48" height="3.48"/>
      <rect x="548.16" y="175.76" width="3.48" height="3.48"/>
      <rect x="551.64" y="175.76" width="3.48" height="3.48"/>
      <rect x="555.12" y="175.76" width="3.48" height="3.48"/>
      <rect x="558.6" y="175.76" width="3.48" height="3.48"/>
      <rect x="562.08" y="175.76" width="3.48" height="3.48"/>
      <rect x="565.56" y="175.76" width="3.48" height="3.48"/>
      <rect x="544.68" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="182.72" width="3.48" height="3.48"/>
      <rect x="548.16" y="182.72" width="3.48" height="3.48"/>
      <rect x="551.64" y="182.72" width="3.48" height="3.48"/>
      <rect x="555.12" y="182.72" width="3.48" height="3.48"/>
      <rect x="558.6" y="182.72" width="3.48" height="3.48"/>
      <rect x="562.08" y="182.72" width="3.48" height="3.48"/>
      <rect x="565.56" y="182.72" width="3.48" height="3.48"/>
      <rect x="569.04" y="182.72" width="3.48" height="3.48"/>
      <rect x="572.52" y="182.72" width="3.48" height="3.48"/>
    </g>
    <g id="IL" title="Israel" class="land">
      <rect x="565.56" y="154.88" width="3.48" height="3.48"/>
    </g>
    <g id="SA" title="Saudi Arabia" class="land">
      <rect x="572.52" y="154.88" width="3.48" height="3.48"/>
      <rect x="576" y="154.88" width="3.48" height="3.48"/>
      <rect x="579.48" y="154.88" width="3.48" height="3.48"/>
      <rect x="582.96" y="154.88" width="3.48" height="3.48"/>
      <rect x="576" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="579.48" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="582.96" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="569.04" y="161.84" width="3.48" height="3.48"/>
      <rect x="572.52" y="161.84" width="3.48" height="3.48"/>
      <rect x="576" y="161.84" width="3.48" height="3.48"/>
      <rect x="579.48" y="161.84" width="3.48" height="3.48"/>
      <rect x="582.96" y="161.84" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="161.84" width="3.48" height="3.48"/>
      <rect x="589.92" y="161.84" width="3.48" height="3.48"/>
      <rect x="593.4" y="161.84" width="3.48" height="3.48"/>
      <rect x="569.04" y="165.32" width="3.48" height="3.48"/>
      <rect x="572.52" y="165.32" width="3.48" height="3.48"/>
      <rect x="576" y="165.32" width="3.48" height="3.48"/>
      <rect x="579.48" y="165.32" width="3.48" height="3.48"/>
      <rect x="582.96" y="165.32" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="165.32" width="3.48" height="3.48"/>
      <rect x="589.92" y="165.32" width="3.48" height="3.48"/>
      <rect x="593.4" y="165.32" width="3.48" height="3.48"/>
      <rect x="596.88" y="165.32" width="3.48" height="3.48"/>
      <rect x="600.36" y="165.32" width="3.48" height="3.48"/>
      <rect x="572.52" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="172.28" width="3.48" height="3.48"/>
      <rect x="579.48" y="172.28" width="3.48" height="3.48"/>
      <rect x="582.96" y="172.28" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="589.92" y="172.28" width="3.48" height="3.48"/>
      <rect x="593.4" y="172.28" width="3.48" height="3.48"/>
      <rect x="596.88" y="172.28" width="3.48" height="3.48"/>
      <rect x="600.36" y="172.28" width="3.48" height="3.48"/>
      <rect x="603.84" y="172.28" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="172.28" width="3.48" height="3.48"/>
      <rect x="576" y="175.76" width="3.48" height="3.48"/>
      <rect x="579.48" y="175.76" width="3.48" height="3.48"/>
      <rect x="582.96" y="175.76" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="175.76" width="3.48" height="3.48"/>
      <rect x="589.92" y="175.76" width="3.48" height="3.48"/>
      <rect x="593.4" y="175.76" width="3.48" height="3.48"/>
      <rect x="596.88" y="175.76" width="3.48" height="3.48"/>
      <rect x="600.36" y="175.76" width="3.48" height="3.48"/>
      <rect x="603.84" y="175.76" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="175.76" width="3.48" height="3.48"/>
      <rect x="579.48" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="610.8" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="182.72" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="182.72" width="3.48" height="3.48"/>
      <rect x="589.92" y="182.72" width="3.48" height="3.48"/>
      <rect x="593.4" y="182.72" width="3.48" height="3.48"/>
      <rect x="596.88" y="182.72" width="3.48" height="3.48"/>
      <rect x="600.36" y="182.72" width="3.48" height="3.48"/>
      <rect x="603.84" y="182.72" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="182.72" width="3.48" height="3.48"/>
      <rect x="610.8" y="182.72" width="3.48" height="3.48"/>
      <rect x="614.28" y="182.72" width="3.48" height="3.48"/>
      <rect x="617.76" y="182.72" width="3.48" height="3.48"/>
      <rect x="621.24" y="182.72" width="3.48" height="3.48"/>
      <rect x="582.96" y="186.2" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="186.2" width="3.48" height="3.48"/>
      <rect x="589.92" y="186.2" width="3.48" height="3.48"/>
      <rect x="593.4" y="186.2" width="3.48" height="3.48"/>
      <rect x="596.88" y="186.2" width="3.48" height="3.48"/>
      <rect x="600.36" y="186.2" width="3.48" height="3.48"/>
      <rect x="603.84" y="186.2" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="186.2" width="3.48" height="3.48"/>
      <rect x="610.8" y="186.2" width="3.48" height="3.48"/>
      <rect x="614.28" y="186.2" width="3.48" height="3.48"/>
      <rect x="617.76" y="186.2" width="3.48" height="3.48"/>
      <rect x="621.24" y="186.2" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="610.8" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="614.28" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="617.76" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="621.24" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="193.16" width="3.48" height="3.48"/>
      <rect x="589.92" y="193.16" width="3.48" height="3.48"/>
      <rect x="593.4" y="193.16" width="3.48" height="3.48"/>
      <rect x="596.88" y="193.16" width="3.48" height="3.48"/>
      <rect x="600.36" y="193.16" width="3.48" height="3.48"/>
      <rect x="603.84" y="193.16" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="193.16" width="3.48" height="3.48"/>
      <rect x="610.8" y="193.16" width="3.48" height="3.48"/>
      <rect x="614.28" y="193.16" width="3.48" height="3.48"/>
      <rect x="589.92" y="196.64" width="3.48" height="3.48"/>
      <rect x="593.4" y="196.64" width="3.48" height="3.48"/>
      <rect x="596.88" y="196.64" width="3.48" height="3.48"/>
      <rect x="600.36" y="196.64" width="3.48" height="3.48"/>
      <rect x="603.84" y="196.64" width="3.48" height="3.48"/>
    </g>
    <g id="NP" title="Nepal" class="land">
      <rect x="687.37" y="158.35999999999999" width="3.48" height="3.48"/>
      <rect x="687.37" y="161.84" width="3.48" height="3.48"/>
      <rect x="690.85" y="161.84" width="3.48" height="3.48"/>
      <rect x="694.33" y="161.84" width="3.48" height="3.48"/>
      <rect x="690.85" y="165.32" width="3.48" height="3.48"/>
      <rect x="694.33" y="165.32" width="3.48" height="3.48"/>
      <rect x="697.81" y="165.32" width="3.48" height="3.48"/>
      <rect x="701.29" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="704.77" y="168.79999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="KW" title="Kuwait" class="land">
      <rect x="600.36" y="161.84" width="3.48" height="3.48"/>
    </g>
    <g id="BT" title="Bhutan" class="land">
      <rect x="711.73" y="165.32" width="3.48" height="3.48"/>
      <rect x="711.73" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="715.21" y="168.79999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="EH" title="Western Sahara" class="land">
      <rect x="443.75" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="450.71" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="172.28" width="3.48" height="3.48"/>
      <rect x="443.75" y="172.28" width="3.48" height="3.48"/>
      <rect x="440.27" y="175.76" width="3.48" height="3.48"/>
      <rect x="443.75" y="175.76" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="443.75" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="182.72" width="3.48" height="3.48"/>
      <rect x="440.27" y="182.72" width="3.48" height="3.48"/>
    </g>
    <g id="MM" title="Myanmar" class="land">
      <rect x="729.14" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="732.62" y="168.79999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="172.28" width="3.48" height="3.48"/>
      <rect x="729.14" y="172.28" width="3.48" height="3.48"/>
      <rect x="732.62" y="172.28" width="3.48" height="3.48"/>
      <rect x="725.66" y="175.76" width="3.48" height="3.48"/>
      <rect x="729.14" y="175.76" width="3.48" height="3.48"/>
      <rect x="722.18" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="729.14" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="732.62" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="736.1" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="722.18" y="182.72" width="3.48" height="3.48"/>
      <rect x="725.66" y="182.72" width="3.48" height="3.48"/>
      <rect x="729.14" y="182.72" width="3.48" height="3.48"/>
      <rect x="732.62" y="182.72" width="3.48" height="3.48"/>
      <rect x="736.1" y="182.72" width="3.48" height="3.48"/>
      <rect x="722.18" y="186.2" width="3.48" height="3.48"/>
      <rect x="725.66" y="186.2" width="3.48" height="3.48"/>
      <rect x="729.14" y="186.2" width="3.48" height="3.48"/>
      <rect x="732.62" y="186.2" width="3.48" height="3.48"/>
      <rect x="736.1" y="186.2" width="3.48" height="3.48"/>
      <rect x="739.58" y="186.2" width="3.48" height="3.48"/>
      <rect x="725.66" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="729.14" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="732.62" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="736.1" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="739.58" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="725.66" y="193.16" width="3.48" height="3.48"/>
      <rect x="729.14" y="193.16" width="3.48" height="3.48"/>
      <rect x="732.62" y="193.16" width="3.48" height="3.48"/>
      <rect x="729.14" y="196.64" width="3.48" height="3.48"/>
      <rect x="732.62" y="196.64" width="3.48" height="3.48"/>
      <rect x="736.1" y="196.64" width="3.48" height="3.48"/>
      <rect x="729.14" y="200.12" width="3.48" height="3.48"/>
      <rect x="732.62" y="200.12" width="3.48" height="3.48"/>
      <rect x="736.1" y="200.12" width="3.48" height="3.48"/>
    </g>
    <g id="MR" title="Mauritania" class="land">
      <rect x="447.23" y="172.28" width="3.48" height="3.48"/>
      <rect x="450.71" y="172.28" width="3.48" height="3.48"/>
      <rect x="454.19" y="172.28" width="3.48" height="3.48"/>
      <rect x="457.67" y="172.28" width="3.48" height="3.48"/>
      <rect x="461.15" y="172.28" width="3.48" height="3.48"/>
      <rect x="447.23" y="175.76" width="3.48" height="3.48"/>
      <rect x="450.71" y="175.76" width="3.48" height="3.48"/>
      <rect x="454.19" y="175.76" width="3.48" height="3.48"/>
      <rect x="457.67" y="175.76" width="3.48" height="3.48"/>
      <rect x="447.23" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="450.71" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="457.67" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="443.75" y="182.72" width="3.48" height="3.48"/>
      <rect x="447.23" y="182.72" width="3.48" height="3.48"/>
      <rect x="450.71" y="182.72" width="3.48" height="3.48"/>
      <rect x="454.19" y="182.72" width="3.48" height="3.48"/>
      <rect x="457.67" y="182.72" width="3.48" height="3.48"/>
      <rect x="433.31" y="186.2" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="186.2" width="3.48" height="3.48"/>
      <rect x="440.27" y="186.2" width="3.48" height="3.48"/>
      <rect x="443.75" y="186.2" width="3.48" height="3.48"/>
      <rect x="447.23" y="186.2" width="3.48" height="3.48"/>
      <rect x="450.71" y="186.2" width="3.48" height="3.48"/>
      <rect x="454.19" y="186.2" width="3.48" height="3.48"/>
      <rect x="457.67" y="186.2" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="443.75" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="450.71" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="457.67" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="193.16" width="3.48" height="3.48"/>
      <rect x="440.27" y="193.16" width="3.48" height="3.48"/>
      <rect x="443.75" y="193.16" width="3.48" height="3.48"/>
      <rect x="447.23" y="193.16" width="3.48" height="3.48"/>
      <rect x="450.71" y="193.16" width="3.48" height="3.48"/>
      <rect x="454.19" y="193.16" width="3.48" height="3.48"/>
      <rect x="457.67" y="193.16" width="3.48" height="3.48"/>
      <rect x="461.15" y="193.16" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="196.64" width="3.48" height="3.48"/>
      <rect x="440.27" y="196.64" width="3.48" height="3.48"/>
      <rect x="443.75" y="196.64" width="3.48" height="3.48"/>
      <rect x="447.23" y="196.64" width="3.48" height="3.48"/>
      <rect x="450.71" y="196.64" width="3.48" height="3.48"/>
      <rect x="454.19" y="196.64" width="3.48" height="3.48"/>
      <rect x="457.67" y="196.64" width="3.48" height="3.48"/>
      <rect x="461.15" y="196.64" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="200.12" width="3.48" height="3.48"/>
      <rect x="440.27" y="200.12" width="3.48" height="3.48"/>
      <rect x="443.75" y="200.12" width="3.48" height="3.48"/>
      <rect x="447.23" y="200.12" width="3.48" height="3.48"/>
      <rect x="450.71" y="200.12" width="3.48" height="3.48"/>
      <rect x="454.19" y="200.12" width="3.48" height="3.48"/>
      <rect x="457.67" y="200.12" width="3.48" height="3.48"/>
      <rect x="461.15" y="200.12" width="3.48" height="3.48"/>
      <rect x="443.75" y="203.6" width="3.48" height="3.48"/>
      <rect x="447.23" y="203.6" width="3.48" height="3.48"/>
      <rect x="450.71" y="203.6" width="3.48" height="3.48"/>
      <rect x="454.19" y="203.6" width="3.48" height="3.48"/>
      <rect x="457.67" y="203.6" width="3.48" height="3.48"/>
      <rect x="461.15" y="203.6" width="3.48" height="3.48"/>
    </g>
    <g id="QA" title="Qatar" class="land">
      <rect x="610.8" y="172.28" width="3.48" height="3.48"/>
      <rect x="610.8" y="175.76" width="3.48" height="3.48"/>
    </g>
    <g id="BD" title="Bangladesh" class="land">
      <rect x="708.25" y="172.28" width="3.48" height="3.48"/>
      <rect x="708.25" y="175.76" width="3.48" height="3.48"/>
      <rect x="711.73" y="175.76" width="3.48" height="3.48"/>
      <rect x="715.21" y="175.76" width="3.48" height="3.48"/>
      <rect x="711.73" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="715.21" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="718.7" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="711.73" y="182.72" width="3.48" height="3.48"/>
      <rect x="715.21" y="182.72" width="3.48" height="3.48"/>
      <rect x="718.7" y="182.72" width="3.48" height="3.48"/>
    </g>
    <g id="BS" title="Bahamas" class="land">
      <rect x="273.21" y="175.76" width="3.48" height="3.48"/>
    </g>
    <g id="ML" title="Mali" class="land">
      <rect x="461.15" y="175.76" width="3.48" height="3.48"/>
      <rect x="464.63" y="175.76" width="3.48" height="3.48"/>
      <rect x="461.15" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="182.72" width="3.48" height="3.48"/>
      <rect x="464.63" y="182.72" width="3.48" height="3.48"/>
      <rect x="468.11" y="182.72" width="3.48" height="3.48"/>
      <rect x="471.59" y="182.72" width="3.48" height="3.48"/>
      <rect x="461.15" y="186.2" width="3.48" height="3.48"/>
      <rect x="464.63" y="186.2" width="3.48" height="3.48"/>
      <rect x="468.11" y="186.2" width="3.48" height="3.48"/>
      <rect x="471.59" y="186.2" width="3.48" height="3.48"/>
      <rect x="475.07" y="186.2" width="3.48" height="3.48"/>
      <rect x="478.55" y="186.2" width="3.48" height="3.48"/>
      <rect x="461.15" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="193.16" width="3.48" height="3.48"/>
      <rect x="468.11" y="193.16" width="3.48" height="3.48"/>
      <rect x="471.59" y="193.16" width="3.48" height="3.48"/>
      <rect x="475.07" y="193.16" width="3.48" height="3.48"/>
      <rect x="478.55" y="193.16" width="3.48" height="3.48"/>
      <rect x="482.03" y="193.16" width="3.48" height="3.48"/>
      <rect x="464.63" y="196.64" width="3.48" height="3.48"/>
      <rect x="468.11" y="196.64" width="3.48" height="3.48"/>
      <rect x="471.59" y="196.64" width="3.48" height="3.48"/>
      <rect x="475.07" y="196.64" width="3.48" height="3.48"/>
      <rect x="478.55" y="196.64" width="3.48" height="3.48"/>
      <rect x="482.03" y="196.64" width="3.48" height="3.48"/>
      <rect x="485.51" y="196.64" width="3.48" height="3.48"/>
      <rect x="464.63" y="200.12" width="3.48" height="3.48"/>
      <rect x="468.11" y="200.12" width="3.48" height="3.48"/>
      <rect x="471.59" y="200.12" width="3.48" height="3.48"/>
      <rect x="475.07" y="200.12" width="3.48" height="3.48"/>
      <rect x="478.55" y="200.12" width="3.48" height="3.48"/>
      <rect x="482.03" y="200.12" width="3.48" height="3.48"/>
      <rect x="485.51" y="200.12" width="3.48" height="3.48"/>
      <rect x="464.63" y="203.6" width="3.48" height="3.48"/>
      <rect x="468.11" y="203.6" width="3.48" height="3.48"/>
      <rect x="471.59" y="203.6" width="3.48" height="3.48"/>
      <rect x="475.07" y="203.6" width="3.48" height="3.48"/>
      <rect x="478.55" y="203.6" width="3.48" height="3.48"/>
      <rect x="482.03" y="203.6" width="3.48" height="3.48"/>
      <rect x="485.51" y="203.6" width="3.48" height="3.48"/>
      <rect x="447.23" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="450.71" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="457.67" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="210.56" width="3.48" height="3.48"/>
      <rect x="450.71" y="210.56" width="3.48" height="3.48"/>
      <rect x="454.19" y="210.56" width="3.48" height="3.48"/>
      <rect x="457.67" y="210.56" width="3.48" height="3.48"/>
      <rect x="461.15" y="210.56" width="3.48" height="3.48"/>
      <rect x="464.63" y="210.56" width="3.48" height="3.48"/>
      <rect x="468.11" y="210.56" width="3.48" height="3.48"/>
      <rect x="447.23" y="214.04" width="3.48" height="3.48"/>
      <rect x="450.71" y="214.04" width="3.48" height="3.48"/>
      <rect x="454.19" y="214.04" width="3.48" height="3.48"/>
      <rect x="457.67" y="214.04" width="3.48" height="3.48"/>
      <rect x="461.15" y="214.04" width="3.48" height="3.48"/>
      <rect x="464.63" y="214.04" width="3.48" height="3.48"/>
      <rect x="457.67" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="217.51999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="AE" title="United Arab Emirates" class="land">
      <rect x="621.24" y="175.76" width="3.48" height="3.48"/>
      <rect x="614.28" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="617.76" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="621.24" y="179.23999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="OM" title="Oman" class="land">
      <rect x="624.73" y="175.76" width="3.48" height="3.48"/>
      <rect x="624.73" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="179.23999999999998" width="3.48" height="3.48"/>
      <rect x="624.73" y="182.72" width="3.48" height="3.48"/>
      <rect x="628.21" y="182.72" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="182.72" width="3.48" height="3.48"/>
      <rect x="624.73" y="186.2" width="3.48" height="3.48"/>
      <rect x="628.21" y="186.2" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="186.2" width="3.48" height="3.48"/>
      <rect x="624.73" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="628.21" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="617.76" y="193.16" width="3.48" height="3.48"/>
      <rect x="621.24" y="193.16" width="3.48" height="3.48"/>
      <rect x="624.73" y="193.16" width="3.48" height="3.48"/>
      <rect x="628.21" y="193.16" width="3.48" height="3.48"/>
      <rect x="617.76" y="196.64" width="3.48" height="3.48"/>
      <rect x="621.24" y="196.64" width="3.48" height="3.48"/>
      <rect x="624.73" y="196.64" width="3.48" height="3.48"/>
    </g>
    <g id="TW" title="Taiwan" class="land">
      <rect x="795.26" y="175.76" width="3.48" height="3.48"/>
      <rect x="795.26" y="179.23999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="CU" title="Cuba" class="land">
      <rect x="255.81" y="182.72" width="3.48" height="3.48"/>
      <rect x="262.77" y="182.72" width="3.48" height="3.48"/>
      <rect x="266.25" y="182.72" width="3.48" height="3.48"/>
      <rect x="273.21" y="186.2" width="3.48" height="3.48"/>
      <rect x="273.21" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="276.69" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="280.17" y="189.67999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="NE" title="Niger" class="land">
      <rect x="506.39" y="182.72" width="3.48" height="3.48"/>
      <rect x="509.87" y="182.72" width="3.48" height="3.48"/>
      <rect x="513.35" y="182.72" width="3.48" height="3.48"/>
      <rect x="499.43" y="186.2" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="186.2" width="3.48" height="3.48"/>
      <rect x="506.39" y="186.2" width="3.48" height="3.48"/>
      <rect x="509.87" y="186.2" width="3.48" height="3.48"/>
      <rect x="513.35" y="186.2" width="3.48" height="3.48"/>
      <rect x="516.83" y="186.2" width="3.48" height="3.48"/>
      <rect x="495.95" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="193.16" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="193.16" width="3.48" height="3.48"/>
      <rect x="495.95" y="193.16" width="3.48" height="3.48"/>
      <rect x="499.43" y="193.16" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="193.16" width="3.48" height="3.48"/>
      <rect x="506.39" y="193.16" width="3.48" height="3.48"/>
      <rect x="509.87" y="193.16" width="3.48" height="3.48"/>
      <rect x="513.35" y="193.16" width="3.48" height="3.48"/>
      <rect x="516.83" y="193.16" width="3.48" height="3.48"/>
      <rect x="488.99" y="196.64" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="196.64" width="3.48" height="3.48"/>
      <rect x="495.95" y="196.64" width="3.48" height="3.48"/>
      <rect x="499.43" y="196.64" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="196.64" width="3.48" height="3.48"/>
      <rect x="506.39" y="196.64" width="3.48" height="3.48"/>
      <rect x="509.87" y="196.64" width="3.48" height="3.48"/>
      <rect x="513.35" y="196.64" width="3.48" height="3.48"/>
      <rect x="516.83" y="196.64" width="3.48" height="3.48"/>
      <rect x="488.99" y="200.12" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="200.12" width="3.48" height="3.48"/>
      <rect x="495.95" y="200.12" width="3.48" height="3.48"/>
      <rect x="499.43" y="200.12" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="200.12" width="3.48" height="3.48"/>
      <rect x="506.39" y="200.12" width="3.48" height="3.48"/>
      <rect x="509.87" y="200.12" width="3.48" height="3.48"/>
      <rect x="513.35" y="200.12" width="3.48" height="3.48"/>
      <rect x="516.83" y="200.12" width="3.48" height="3.48"/>
      <rect x="488.99" y="203.6" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="203.6" width="3.48" height="3.48"/>
      <rect x="495.95" y="203.6" width="3.48" height="3.48"/>
      <rect x="499.43" y="203.6" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="203.6" width="3.48" height="3.48"/>
      <rect x="506.39" y="203.6" width="3.48" height="3.48"/>
      <rect x="509.87" y="203.6" width="3.48" height="3.48"/>
      <rect x="513.35" y="203.6" width="3.48" height="3.48"/>
      <rect x="478.55" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="210.56" width="3.48" height="3.48"/>
      <rect x="485.51" y="210.56" width="3.48" height="3.48"/>
      <rect x="495.95" y="210.56" width="3.48" height="3.48"/>
      <rect x="499.43" y="210.56" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="210.56" width="3.48" height="3.48"/>
      <rect x="506.39" y="210.56" width="3.48" height="3.48"/>
      <rect x="509.87" y="210.56" width="3.48" height="3.48"/>
      <rect x="485.51" y="214.04" width="3.48" height="3.48"/>
    </g>
    <g id="TD" title="Chad" class="land">
      <rect x="516.83" y="182.72" width="3.48" height="3.48"/>
      <rect x="520.31" y="182.72" width="3.48" height="3.48"/>
      <rect x="523.79" y="182.72" width="3.48" height="3.48"/>
      <rect x="520.31" y="186.2" width="3.48" height="3.48"/>
      <rect x="523.79" y="186.2" width="3.48" height="3.48"/>
      <rect x="527.28" y="186.2" width="3.48" height="3.48"/>
      <rect x="520.31" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="193.16" width="3.48" height="3.48"/>
      <rect x="523.79" y="193.16" width="3.48" height="3.48"/>
      <rect x="527.28" y="193.16" width="3.48" height="3.48"/>
      <rect x="530.76" y="193.16" width="3.48" height="3.48"/>
      <rect x="534.24" y="193.16" width="3.48" height="3.48"/>
      <rect x="537.72" y="193.16" width="3.48" height="3.48"/>
      <rect x="520.31" y="196.64" width="3.48" height="3.48"/>
      <rect x="523.79" y="196.64" width="3.48" height="3.48"/>
      <rect x="527.28" y="196.64" width="3.48" height="3.48"/>
      <rect x="530.76" y="196.64" width="3.48" height="3.48"/>
      <rect x="534.24" y="196.64" width="3.48" height="3.48"/>
      <rect x="537.72" y="196.64" width="3.48" height="3.48"/>
      <rect x="520.31" y="200.12" width="3.48" height="3.48"/>
      <rect x="523.79" y="200.12" width="3.48" height="3.48"/>
      <rect x="527.28" y="200.12" width="3.48" height="3.48"/>
      <rect x="530.76" y="200.12" width="3.48" height="3.48"/>
      <rect x="534.24" y="200.12" width="3.48" height="3.48"/>
      <rect x="537.72" y="200.12" width="3.48" height="3.48"/>
      <rect x="516.83" y="203.6" width="3.48" height="3.48"/>
      <rect x="520.31" y="203.6" width="3.48" height="3.48"/>
      <rect x="523.79" y="203.6" width="3.48" height="3.48"/>
      <rect x="527.28" y="203.6" width="3.48" height="3.48"/>
      <rect x="530.76" y="203.6" width="3.48" height="3.48"/>
      <rect x="534.24" y="203.6" width="3.48" height="3.48"/>
      <rect x="537.72" y="203.6" width="3.48" height="3.48"/>
      <rect x="516.83" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="210.56" width="3.48" height="3.48"/>
      <rect x="520.31" y="210.56" width="3.48" height="3.48"/>
      <rect x="523.79" y="210.56" width="3.48" height="3.48"/>
      <rect x="527.28" y="210.56" width="3.48" height="3.48"/>
      <rect x="530.76" y="210.56" width="3.48" height="3.48"/>
      <rect x="534.24" y="210.56" width="3.48" height="3.48"/>
      <rect x="516.83" y="214.04" width="3.48" height="3.48"/>
      <rect x="520.31" y="214.04" width="3.48" height="3.48"/>
      <rect x="523.79" y="214.04" width="3.48" height="3.48"/>
      <rect x="527.28" y="214.04" width="3.48" height="3.48"/>
      <rect x="530.76" y="214.04" width="3.48" height="3.48"/>
      <rect x="534.24" y="214.04" width="3.48" height="3.48"/>
      <rect x="520.31" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="527.28" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="221" width="3.48" height="3.48"/>
      <rect x="523.79" y="221" width="3.48" height="3.48"/>
      <rect x="527.28" y="221" width="3.48" height="3.48"/>
      <rect x="530.76" y="221" width="3.48" height="3.48"/>
      <rect x="534.24" y="221" width="3.48" height="3.48"/>
      <rect x="516.83" y="224.48" width="3.48" height="3.48"/>
      <rect x="520.31" y="224.48" width="3.48" height="3.48"/>
      <rect x="523.79" y="224.48" width="3.48" height="3.48"/>
      <rect x="527.28" y="224.48" width="3.48" height="3.48"/>
      <rect x="520.31" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="227.95999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="VN" title="Vietnam" class="land">
      <rect x="746.54" y="182.72" width="3.48" height="3.48"/>
      <rect x="750.02" y="182.72" width="3.48" height="3.48"/>
      <rect x="753.5" y="182.72" width="3.48" height="3.48"/>
      <rect x="756.98" y="182.72" width="3.48" height="3.48"/>
      <rect x="750.02" y="186.2" width="3.48" height="3.48"/>
      <rect x="753.5" y="186.2" width="3.48" height="3.48"/>
      <rect x="756.98" y="186.2" width="3.48" height="3.48"/>
      <rect x="756.98" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="193.16" width="3.48" height="3.48"/>
      <rect x="760.46" y="200.12" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="203.6" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="210.56" width="3.48" height="3.48"/>
      <rect x="767.42" y="214.04" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="767.42" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="221" width="3.48" height="3.48"/>
    </g>
    <g id="SD" title="Sudan" class="land">
      <rect x="544.68" y="186.2" width="3.48" height="3.48"/>
      <rect x="548.16" y="186.2" width="3.48" height="3.48"/>
      <rect x="551.64" y="186.2" width="3.48" height="3.48"/>
      <rect x="555.12" y="186.2" width="3.48" height="3.48"/>
      <rect x="558.6" y="186.2" width="3.48" height="3.48"/>
      <rect x="562.08" y="186.2" width="3.48" height="3.48"/>
      <rect x="565.56" y="186.2" width="3.48" height="3.48"/>
      <rect x="569.04" y="186.2" width="3.48" height="3.48"/>
      <rect x="572.52" y="186.2" width="3.48" height="3.48"/>
      <rect x="544.68" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="193.16" width="3.48" height="3.48"/>
      <rect x="544.68" y="193.16" width="3.48" height="3.48"/>
      <rect x="548.16" y="193.16" width="3.48" height="3.48"/>
      <rect x="551.64" y="193.16" width="3.48" height="3.48"/>
      <rect x="555.12" y="193.16" width="3.48" height="3.48"/>
      <rect x="558.6" y="193.16" width="3.48" height="3.48"/>
      <rect x="562.08" y="193.16" width="3.48" height="3.48"/>
      <rect x="565.56" y="193.16" width="3.48" height="3.48"/>
      <rect x="569.04" y="193.16" width="3.48" height="3.48"/>
      <rect x="572.52" y="193.16" width="3.48" height="3.48"/>
      <rect x="541.2" y="196.64" width="3.48" height="3.48"/>
      <rect x="544.68" y="196.64" width="3.48" height="3.48"/>
      <rect x="548.16" y="196.64" width="3.48" height="3.48"/>
      <rect x="551.64" y="196.64" width="3.48" height="3.48"/>
      <rect x="555.12" y="196.64" width="3.48" height="3.48"/>
      <rect x="558.6" y="196.64" width="3.48" height="3.48"/>
      <rect x="562.08" y="196.64" width="3.48" height="3.48"/>
      <rect x="565.56" y="196.64" width="3.48" height="3.48"/>
      <rect x="569.04" y="196.64" width="3.48" height="3.48"/>
      <rect x="572.52" y="196.64" width="3.48" height="3.48"/>
      <rect x="576" y="196.64" width="3.48" height="3.48"/>
      <rect x="541.2" y="200.12" width="3.48" height="3.48"/>
      <rect x="544.68" y="200.12" width="3.48" height="3.48"/>
      <rect x="548.16" y="200.12" width="3.48" height="3.48"/>
      <rect x="551.64" y="200.12" width="3.48" height="3.48"/>
      <rect x="555.12" y="200.12" width="3.48" height="3.48"/>
      <rect x="558.6" y="200.12" width="3.48" height="3.48"/>
      <rect x="562.08" y="200.12" width="3.48" height="3.48"/>
      <rect x="565.56" y="200.12" width="3.48" height="3.48"/>
      <rect x="569.04" y="200.12" width="3.48" height="3.48"/>
      <rect x="572.52" y="200.12" width="3.48" height="3.48"/>
      <rect x="541.2" y="203.6" width="3.48" height="3.48"/>
      <rect x="544.68" y="203.6" width="3.48" height="3.48"/>
      <rect x="548.16" y="203.6" width="3.48" height="3.48"/>
      <rect x="551.64" y="203.6" width="3.48" height="3.48"/>
      <rect x="555.12" y="203.6" width="3.48" height="3.48"/>
      <rect x="558.6" y="203.6" width="3.48" height="3.48"/>
      <rect x="562.08" y="203.6" width="3.48" height="3.48"/>
      <rect x="565.56" y="203.6" width="3.48" height="3.48"/>
      <rect x="569.04" y="203.6" width="3.48" height="3.48"/>
      <rect x="572.52" y="203.6" width="3.48" height="3.48"/>
      <rect x="537.72" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="210.56" width="3.48" height="3.48"/>
      <rect x="541.2" y="210.56" width="3.48" height="3.48"/>
      <rect x="544.68" y="210.56" width="3.48" height="3.48"/>
      <rect x="548.16" y="210.56" width="3.48" height="3.48"/>
      <rect x="551.64" y="210.56" width="3.48" height="3.48"/>
      <rect x="555.12" y="210.56" width="3.48" height="3.48"/>
      <rect x="558.6" y="210.56" width="3.48" height="3.48"/>
      <rect x="562.08" y="210.56" width="3.48" height="3.48"/>
      <rect x="565.56" y="210.56" width="3.48" height="3.48"/>
      <rect x="569.04" y="210.56" width="3.48" height="3.48"/>
      <rect x="572.52" y="210.56" width="3.48" height="3.48"/>
      <rect x="537.72" y="214.04" width="3.48" height="3.48"/>
      <rect x="541.2" y="214.04" width="3.48" height="3.48"/>
      <rect x="544.68" y="214.04" width="3.48" height="3.48"/>
      <rect x="548.16" y="214.04" width="3.48" height="3.48"/>
      <rect x="551.64" y="214.04" width="3.48" height="3.48"/>
      <rect x="555.12" y="214.04" width="3.48" height="3.48"/>
      <rect x="558.6" y="214.04" width="3.48" height="3.48"/>
      <rect x="562.08" y="214.04" width="3.48" height="3.48"/>
      <rect x="565.56" y="214.04" width="3.48" height="3.48"/>
      <rect x="569.04" y="214.04" width="3.48" height="3.48"/>
      <rect x="541.2" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="221" width="3.48" height="3.48"/>
      <rect x="548.16" y="221" width="3.48" height="3.48"/>
      <rect x="551.64" y="221" width="3.48" height="3.48"/>
      <rect x="555.12" y="221" width="3.48" height="3.48"/>
      <rect x="558.6" y="221" width="3.48" height="3.48"/>
      <rect x="541.2" y="224.48" width="3.48" height="3.48"/>
    </g>
    <g id="LA" title="Lao People's Democratic Republic" class="land">
      <rect x="743.06" y="186.2" width="3.48" height="3.48"/>
      <rect x="746.54" y="186.2" width="3.48" height="3.48"/>
      <rect x="743.06" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="189.67999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="193.16" width="3.48" height="3.48"/>
      <rect x="750.02" y="193.16" width="3.48" height="3.48"/>
      <rect x="746.54" y="196.64" width="3.48" height="3.48"/>
      <rect x="750.02" y="196.64" width="3.48" height="3.48"/>
      <rect x="756.98" y="196.64" width="3.48" height="3.48"/>
      <rect x="756.98" y="200.12" width="3.48" height="3.48"/>
      <rect x="760.46" y="203.6" width="3.48" height="3.48"/>
      <rect x="760.46" y="207.07999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="HT" title="Haiti" class="land">
      <rect x="287.13" y="193.16" width="3.48" height="3.48"/>
    </g>
    <g id="DO" title="Dominican Republic" class="land">
      <rect x="290.61" y="193.16" width="3.48" height="3.48"/>
      <rect x="287.13" y="196.64" width="3.48" height="3.48"/>
    </g>
    <g id="TH" title="Thailand" class="land">
      <rect x="736.1" y="193.16" width="3.48" height="3.48"/>
      <rect x="739.58" y="193.16" width="3.48" height="3.48"/>
      <rect x="743.06" y="193.16" width="3.48" height="3.48"/>
      <rect x="739.58" y="196.64" width="3.48" height="3.48"/>
      <rect x="743.06" y="196.64" width="3.48" height="3.48"/>
      <rect x="753.5" y="196.64" width="3.48" height="3.48"/>
      <rect x="739.58" y="200.12" width="3.48" height="3.48"/>
      <rect x="743.06" y="200.12" width="3.48" height="3.48"/>
      <rect x="746.54" y="200.12" width="3.48" height="3.48"/>
      <rect x="750.02" y="200.12" width="3.48" height="3.48"/>
      <rect x="753.5" y="200.12" width="3.48" height="3.48"/>
      <rect x="739.58" y="203.6" width="3.48" height="3.48"/>
      <rect x="743.06" y="203.6" width="3.48" height="3.48"/>
      <rect x="746.54" y="203.6" width="3.48" height="3.48"/>
      <rect x="750.02" y="203.6" width="3.48" height="3.48"/>
      <rect x="753.5" y="203.6" width="3.48" height="3.48"/>
      <rect x="756.98" y="203.6" width="3.48" height="3.48"/>
      <rect x="739.58" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="210.56" width="3.48" height="3.48"/>
      <rect x="746.54" y="210.56" width="3.48" height="3.48"/>
      <rect x="750.02" y="210.56" width="3.48" height="3.48"/>
      <rect x="743.06" y="214.04" width="3.48" height="3.48"/>
      <rect x="743.06" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="224.48" width="3.48" height="3.48"/>
      <rect x="743.06" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="746.54" y="231.44" width="3.48" height="3.48"/>
    </g>
    <g id="BZ" title="Belize" class="land">
      <rect x="241.89" y="196.64" width="3.48" height="3.48"/>
      <rect x="241.89" y="200.12" width="3.48" height="3.48"/>
    </g>
    <g id="JM" title="Jamaica" class="land">
      <rect x="273.21" y="196.64" width="3.48" height="3.48"/>
    </g>
    <g id="PR" title="Puerto Rico" class="land">
      <rect x="301.05" y="196.64" width="3.48" height="3.48"/>
    </g>
    <g id="ER" title="Eritrea" class="land">
      <rect x="579.48" y="196.64" width="3.48" height="3.48"/>
      <rect x="576" y="200.12" width="3.48" height="3.48"/>
      <rect x="579.48" y="200.12" width="3.48" height="3.48"/>
      <rect x="576" y="203.6" width="3.48" height="3.48"/>
      <rect x="579.48" y="203.6" width="3.48" height="3.48"/>
      <rect x="576" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="210.56" width="3.48" height="3.48"/>
    </g>
    <g id="YE" title="Yemen" class="land">
      <rect x="607.3199999999999" y="196.64" width="3.48" height="3.48"/>
      <rect x="610.8" y="196.64" width="3.48" height="3.48"/>
      <rect x="614.28" y="196.64" width="3.48" height="3.48"/>
      <rect x="593.4" y="200.12" width="3.48" height="3.48"/>
      <rect x="596.88" y="200.12" width="3.48" height="3.48"/>
      <rect x="600.36" y="200.12" width="3.48" height="3.48"/>
      <rect x="603.84" y="200.12" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="200.12" width="3.48" height="3.48"/>
      <rect x="610.8" y="200.12" width="3.48" height="3.48"/>
      <rect x="614.28" y="200.12" width="3.48" height="3.48"/>
      <rect x="617.76" y="200.12" width="3.48" height="3.48"/>
      <rect x="593.4" y="203.6" width="3.48" height="3.48"/>
      <rect x="596.88" y="203.6" width="3.48" height="3.48"/>
      <rect x="600.36" y="203.6" width="3.48" height="3.48"/>
      <rect x="603.84" y="203.6" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="203.6" width="3.48" height="3.48"/>
      <rect x="610.8" y="203.6" width="3.48" height="3.48"/>
      <rect x="614.28" y="203.6" width="3.48" height="3.48"/>
      <rect x="593.4" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="210.56" width="3.48" height="3.48"/>
      <rect x="596.88" y="210.56" width="3.48" height="3.48"/>
      <rect x="600.36" y="210.56" width="3.48" height="3.48"/>
      <rect x="621.24" y="214.04" width="3.48" height="3.48"/>
    </g>
    <g id="PH" title="Philippines" class="land">
      <rect x="798.74" y="196.64" width="3.48" height="3.48"/>
      <rect x="798.74" y="200.12" width="3.48" height="3.48"/>
      <rect x="802.22" y="200.12" width="3.48" height="3.48"/>
      <rect x="798.74" y="203.6" width="3.48" height="3.48"/>
      <rect x="805.7" y="210.56" width="3.48" height="3.48"/>
      <rect x="805.7" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="812.66" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="805.7" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="809.18" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="812.66" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="816.15" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="812.66" y="231.44" width="3.48" height="3.48"/>
      <rect x="816.15" y="231.44" width="3.48" height="3.48"/>
    </g>
    <g id="GT" title="Guatemala" class="land">
      <rect x="238.41" y="200.12" width="3.48" height="3.48"/>
      <rect x="234.92" y="203.6" width="3.48" height="3.48"/>
      <rect x="238.41" y="203.6" width="3.48" height="3.48"/>
      <rect x="241.89" y="203.6" width="3.48" height="3.48"/>
      <rect x="231.44" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="234.92" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="238.41" y="207.07999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="HN" title="Honduras" class="land">
      <rect x="245.37" y="203.6" width="3.48" height="3.48"/>
      <rect x="248.85" y="203.6" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="203.6" width="3.48" height="3.48"/>
      <rect x="241.89" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="245.37" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="248.85" y="207.07999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="SN" title="Senegal" class="land">
      <rect x="433.31" y="203.6" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="203.6" width="3.48" height="3.48"/>
      <rect x="440.27" y="203.6" width="3.48" height="3.48"/>
      <rect x="433.31" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="443.75" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="210.56" width="3.48" height="3.48"/>
      <rect x="443.75" y="210.56" width="3.48" height="3.48"/>
      <rect x="433.31" y="214.04" width="3.48" height="3.48"/>
      <rect x="443.75" y="214.04" width="3.48" height="3.48"/>
    </g>
    <g id="NI" title="Nicaragua" class="land">
      <rect x="252.32999999999998" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="245.37" y="210.56" width="3.48" height="3.48"/>
      <rect x="248.85" y="210.56" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="210.56" width="3.48" height="3.48"/>
      <rect x="245.37" y="214.04" width="3.48" height="3.48"/>
      <rect x="248.85" y="214.04" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="214.04" width="3.48" height="3.48"/>
      <rect x="248.85" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="217.51999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="BF" title="Burkina Faso" class="land">
      <rect x="475.07" y="207.07999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="210.56" width="3.48" height="3.48"/>
      <rect x="475.07" y="210.56" width="3.48" height="3.48"/>
      <rect x="478.55" y="210.56" width="3.48" height="3.48"/>
      <rect x="468.11" y="214.04" width="3.48" height="3.48"/>
      <rect x="471.59" y="214.04" width="3.48" height="3.48"/>
      <rect x="475.07" y="214.04" width="3.48" height="3.48"/>
      <rect x="478.55" y="214.04" width="3.48" height="3.48"/>
      <rect x="482.03" y="214.04" width="3.48" height="3.48"/>
      <rect x="464.63" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="221" width="3.48" height="3.48"/>
      <rect x="468.11" y="221" width="3.48" height="3.48"/>
    </g>
    <g id="SV" title="El Salvador" class="land">
      <rect x="238.41" y="210.56" width="3.48" height="3.48"/>
      <rect x="241.89" y="210.56" width="3.48" height="3.48"/>
    </g>
    <g id="GM" title="Gambia" class="land">
      <rect x="433.31" y="210.56" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="210.56" width="3.48" height="3.48"/>
    </g>
    <g id="NG" title="Nigeria" class="land">
      <rect x="488.99" y="210.56" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="210.56" width="3.48" height="3.48"/>
      <rect x="513.35" y="210.56" width="3.48" height="3.48"/>
      <rect x="488.99" y="214.04" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="214.04" width="3.48" height="3.48"/>
      <rect x="495.95" y="214.04" width="3.48" height="3.48"/>
      <rect x="499.43" y="214.04" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="214.04" width="3.48" height="3.48"/>
      <rect x="506.39" y="214.04" width="3.48" height="3.48"/>
      <rect x="509.87" y="214.04" width="3.48" height="3.48"/>
      <rect x="513.35" y="214.04" width="3.48" height="3.48"/>
      <rect x="488.99" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="221" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="221" width="3.48" height="3.48"/>
      <rect x="495.95" y="221" width="3.48" height="3.48"/>
      <rect x="499.43" y="221" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="221" width="3.48" height="3.48"/>
      <rect x="506.39" y="221" width="3.48" height="3.48"/>
      <rect x="509.87" y="221" width="3.48" height="3.48"/>
      <rect x="485.51" y="224.48" width="3.48" height="3.48"/>
      <rect x="488.99" y="224.48" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="224.48" width="3.48" height="3.48"/>
      <rect x="495.95" y="224.48" width="3.48" height="3.48"/>
      <rect x="499.43" y="224.48" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="224.48" width="3.48" height="3.48"/>
      <rect x="506.39" y="224.48" width="3.48" height="3.48"/>
      <rect x="509.87" y="224.48" width="3.48" height="3.48"/>
      <rect x="485.51" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="488.99" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="495.95" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="499.43" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="506.39" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="231.44" width="3.48" height="3.48"/>
      <rect x="488.99" y="231.44" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="231.44" width="3.48" height="3.48"/>
      <rect x="495.95" y="231.44" width="3.48" height="3.48"/>
      <rect x="499.43" y="231.44" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="231.44" width="3.48" height="3.48"/>
      <rect x="506.39" y="231.44" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="234.92" width="3.48" height="3.48"/>
      <rect x="495.95" y="234.92" width="3.48" height="3.48"/>
      <rect x="499.43" y="234.92" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="238.41" width="3.48" height="3.48"/>
      <rect x="495.95" y="238.41" width="3.48" height="3.48"/>
    </g>
    <g id="ET" title="Ethiopia" class="land">
      <rect x="576" y="210.56" width="3.48" height="3.48"/>
      <rect x="579.48" y="210.56" width="3.48" height="3.48"/>
      <rect x="582.96" y="210.56" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="210.56" width="3.48" height="3.48"/>
      <rect x="572.52" y="214.04" width="3.48" height="3.48"/>
      <rect x="576" y="214.04" width="3.48" height="3.48"/>
      <rect x="579.48" y="214.04" width="3.48" height="3.48"/>
      <rect x="582.96" y="214.04" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="214.04" width="3.48" height="3.48"/>
      <rect x="589.92" y="214.04" width="3.48" height="3.48"/>
      <rect x="572.52" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="221" width="3.48" height="3.48"/>
      <rect x="572.52" y="221" width="3.48" height="3.48"/>
      <rect x="576" y="221" width="3.48" height="3.48"/>
      <rect x="579.48" y="221" width="3.48" height="3.48"/>
      <rect x="582.96" y="221" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="221" width="3.48" height="3.48"/>
      <rect x="589.92" y="221" width="3.48" height="3.48"/>
      <rect x="569.04" y="224.48" width="3.48" height="3.48"/>
      <rect x="572.52" y="224.48" width="3.48" height="3.48"/>
      <rect x="576" y="224.48" width="3.48" height="3.48"/>
      <rect x="579.48" y="224.48" width="3.48" height="3.48"/>
      <rect x="582.96" y="224.48" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="224.48" width="3.48" height="3.48"/>
      <rect x="589.92" y="224.48" width="3.48" height="3.48"/>
      <rect x="593.4" y="224.48" width="3.48" height="3.48"/>
      <rect x="569.04" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="596.88" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="600.36" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="231.44" width="3.48" height="3.48"/>
      <rect x="576" y="231.44" width="3.48" height="3.48"/>
      <rect x="579.48" y="231.44" width="3.48" height="3.48"/>
      <rect x="582.96" y="231.44" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="231.44" width="3.48" height="3.48"/>
      <rect x="589.92" y="231.44" width="3.48" height="3.48"/>
      <rect x="593.4" y="231.44" width="3.48" height="3.48"/>
      <rect x="596.88" y="231.44" width="3.48" height="3.48"/>
      <rect x="600.36" y="231.44" width="3.48" height="3.48"/>
      <rect x="572.52" y="234.92" width="3.48" height="3.48"/>
      <rect x="576" y="234.92" width="3.48" height="3.48"/>
      <rect x="579.48" y="234.92" width="3.48" height="3.48"/>
      <rect x="582.96" y="234.92" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="234.92" width="3.48" height="3.48"/>
      <rect x="589.92" y="234.92" width="3.48" height="3.48"/>
      <rect x="593.4" y="234.92" width="3.48" height="3.48"/>
      <rect x="596.88" y="234.92" width="3.48" height="3.48"/>
      <rect x="576" y="238.41" width="3.48" height="3.48"/>
      <rect x="579.48" y="238.41" width="3.48" height="3.48"/>
      <rect x="582.96" y="238.41" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="238.41" width="3.48" height="3.48"/>
      <rect x="589.92" y="238.41" width="3.48" height="3.48"/>
      <rect x="582.96" y="241.89" width="3.48" height="3.48"/>
    </g>
    <g id="KH" title="Cambodia" class="land">
      <rect x="753.5" y="210.56" width="3.48" height="3.48"/>
      <rect x="756.98" y="210.56" width="3.48" height="3.48"/>
      <rect x="760.46" y="210.56" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="210.56" width="3.48" height="3.48"/>
      <rect x="753.5" y="214.04" width="3.48" height="3.48"/>
      <rect x="756.98" y="214.04" width="3.48" height="3.48"/>
      <rect x="760.46" y="214.04" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="214.04" width="3.48" height="3.48"/>
      <rect x="753.5" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="756.98" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="760.46" y="217.51999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="GW" title="Guinea-Bissau" class="land">
      <rect x="436.78999999999996" y="214.04" width="3.48" height="3.48"/>
      <rect x="440.27" y="214.04" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="217.51999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="CO" title="Colombia" class="land">
      <rect x="283.65" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="276.69" y="221" width="3.48" height="3.48"/>
      <rect x="280.17" y="221" width="3.48" height="3.48"/>
      <rect x="273.21" y="224.48" width="3.48" height="3.48"/>
      <rect x="276.69" y="224.48" width="3.48" height="3.48"/>
      <rect x="280.17" y="224.48" width="3.48" height="3.48"/>
      <rect x="269.73" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="273.21" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="276.69" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="280.17" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="269.73" y="231.44" width="3.48" height="3.48"/>
      <rect x="273.21" y="231.44" width="3.48" height="3.48"/>
      <rect x="276.69" y="231.44" width="3.48" height="3.48"/>
      <rect x="280.17" y="231.44" width="3.48" height="3.48"/>
      <rect x="283.65" y="231.44" width="3.48" height="3.48"/>
      <rect x="287.13" y="231.44" width="3.48" height="3.48"/>
      <rect x="269.73" y="234.92" width="3.48" height="3.48"/>
      <rect x="273.21" y="234.92" width="3.48" height="3.48"/>
      <rect x="276.69" y="234.92" width="3.48" height="3.48"/>
      <rect x="280.17" y="234.92" width="3.48" height="3.48"/>
      <rect x="283.65" y="234.92" width="3.48" height="3.48"/>
      <rect x="287.13" y="234.92" width="3.48" height="3.48"/>
      <rect x="290.61" y="234.92" width="3.48" height="3.48"/>
      <rect x="294.09" y="234.92" width="3.48" height="3.48"/>
      <rect x="269.73" y="238.41" width="3.48" height="3.48"/>
      <rect x="273.21" y="238.41" width="3.48" height="3.48"/>
      <rect x="276.69" y="238.41" width="3.48" height="3.48"/>
      <rect x="280.17" y="238.41" width="3.48" height="3.48"/>
      <rect x="283.65" y="238.41" width="3.48" height="3.48"/>
      <rect x="287.13" y="238.41" width="3.48" height="3.48"/>
      <rect x="290.61" y="238.41" width="3.48" height="3.48"/>
      <rect x="294.09" y="238.41" width="3.48" height="3.48"/>
      <rect x="269.73" y="241.89" width="3.48" height="3.48"/>
      <rect x="273.21" y="241.89" width="3.48" height="3.48"/>
      <rect x="276.69" y="241.89" width="3.48" height="3.48"/>
      <rect x="280.17" y="241.89" width="3.48" height="3.48"/>
      <rect x="283.65" y="241.89" width="3.48" height="3.48"/>
      <rect x="287.13" y="241.89" width="3.48" height="3.48"/>
      <rect x="290.61" y="241.89" width="3.48" height="3.48"/>
      <rect x="294.09" y="241.89" width="3.48" height="3.48"/>
      <rect x="266.25" y="245.37" width="3.48" height="3.48"/>
      <rect x="269.73" y="245.37" width="3.48" height="3.48"/>
      <rect x="273.21" y="245.37" width="3.48" height="3.48"/>
      <rect x="276.69" y="245.37" width="3.48" height="3.48"/>
      <rect x="280.17" y="245.37" width="3.48" height="3.48"/>
      <rect x="283.65" y="245.37" width="3.48" height="3.48"/>
      <rect x="287.13" y="245.37" width="3.48" height="3.48"/>
      <rect x="290.61" y="245.37" width="3.48" height="3.48"/>
      <rect x="294.09" y="245.37" width="3.48" height="3.48"/>
      <rect x="266.25" y="248.85" width="3.48" height="3.48"/>
      <rect x="269.73" y="248.85" width="3.48" height="3.48"/>
      <rect x="273.21" y="248.85" width="3.48" height="3.48"/>
      <rect x="276.69" y="248.85" width="3.48" height="3.48"/>
      <rect x="280.17" y="248.85" width="3.48" height="3.48"/>
      <rect x="283.65" y="248.85" width="3.48" height="3.48"/>
      <rect x="287.13" y="248.85" width="3.48" height="3.48"/>
      <rect x="273.21" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="276.69" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="280.17" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="283.65" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="287.13" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="280.17" y="255.81" width="3.48" height="3.48"/>
      <rect x="283.65" y="255.81" width="3.48" height="3.48"/>
      <rect x="287.13" y="255.81" width="3.48" height="3.48"/>
      <rect x="280.17" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="283.65" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="287.13" y="259.28999999999996" width="3.48" height="3.48"/>
    </g>
    <g id="VE" title="Venezuela" class="land">
      <rect x="290.61" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="283.65" y="221" width="3.48" height="3.48"/>
      <rect x="287.13" y="221" width="3.48" height="3.48"/>
      <rect x="290.61" y="221" width="3.48" height="3.48"/>
      <rect x="294.09" y="221" width="3.48" height="3.48"/>
      <rect x="297.57" y="221" width="3.48" height="3.48"/>
      <rect x="301.05" y="221" width="3.48" height="3.48"/>
      <rect x="304.53" y="221" width="3.48" height="3.48"/>
      <rect x="308.01" y="221" width="3.48" height="3.48"/>
      <rect x="283.65" y="224.48" width="3.48" height="3.48"/>
      <rect x="287.13" y="224.48" width="3.48" height="3.48"/>
      <rect x="290.61" y="224.48" width="3.48" height="3.48"/>
      <rect x="294.09" y="224.48" width="3.48" height="3.48"/>
      <rect x="297.57" y="224.48" width="3.48" height="3.48"/>
      <rect x="301.05" y="224.48" width="3.48" height="3.48"/>
      <rect x="304.53" y="224.48" width="3.48" height="3.48"/>
      <rect x="308.01" y="224.48" width="3.48" height="3.48"/>
      <rect x="311.49" y="224.48" width="3.48" height="3.48"/>
      <rect x="283.65" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="287.13" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="290.61" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="294.09" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="297.57" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="301.05" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="304.53" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="308.01" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="311.49" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="290.61" y="231.44" width="3.48" height="3.48"/>
      <rect x="294.09" y="231.44" width="3.48" height="3.48"/>
      <rect x="297.57" y="231.44" width="3.48" height="3.48"/>
      <rect x="301.05" y="231.44" width="3.48" height="3.48"/>
      <rect x="304.53" y="231.44" width="3.48" height="3.48"/>
      <rect x="308.01" y="231.44" width="3.48" height="3.48"/>
      <rect x="311.49" y="231.44" width="3.48" height="3.48"/>
      <rect x="297.57" y="234.92" width="3.48" height="3.48"/>
      <rect x="301.05" y="234.92" width="3.48" height="3.48"/>
      <rect x="304.53" y="234.92" width="3.48" height="3.48"/>
      <rect x="308.01" y="234.92" width="3.48" height="3.48"/>
      <rect x="311.49" y="234.92" width="3.48" height="3.48"/>
      <rect x="297.57" y="238.41" width="3.48" height="3.48"/>
      <rect x="301.05" y="238.41" width="3.48" height="3.48"/>
      <rect x="304.53" y="238.41" width="3.48" height="3.48"/>
      <rect x="308.01" y="238.41" width="3.48" height="3.48"/>
      <rect x="311.49" y="238.41" width="3.48" height="3.48"/>
      <rect x="297.57" y="241.89" width="3.48" height="3.48"/>
      <rect x="301.05" y="241.89" width="3.48" height="3.48"/>
      <rect x="297.57" y="245.37" width="3.48" height="3.48"/>
      <rect x="301.05" y="245.37" width="3.48" height="3.48"/>
      <rect x="304.53" y="245.37" width="3.48" height="3.48"/>
      <rect x="297.57" y="248.85" width="3.48" height="3.48"/>
      <rect x="301.05" y="248.85" width="3.48" height="3.48"/>
    </g>
    <g id="GN" title="Guinea" class="land">
      <rect x="440.27" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="443.75" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="450.71" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="454.19" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="440.27" y="221" width="3.48" height="3.48"/>
      <rect x="443.75" y="221" width="3.48" height="3.48"/>
      <rect x="447.23" y="221" width="3.48" height="3.48"/>
      <rect x="450.71" y="221" width="3.48" height="3.48"/>
      <rect x="454.19" y="221" width="3.48" height="3.48"/>
      <rect x="450.71" y="224.48" width="3.48" height="3.48"/>
      <rect x="454.19" y="224.48" width="3.48" height="3.48"/>
      <rect x="454.19" y="227.95999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="BJ" title="Benin" class="land">
      <rect x="482.03" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="485.51" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="221" width="3.48" height="3.48"/>
      <rect x="485.51" y="221" width="3.48" height="3.48"/>
      <rect x="482.03" y="224.48" width="3.48" height="3.48"/>
      <rect x="482.03" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="482.03" y="231.44" width="3.48" height="3.48"/>
    </g>
    <g id="CM" title="Cameroon" class="land">
      <rect x="516.83" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="221" width="3.48" height="3.48"/>
      <rect x="516.83" y="221" width="3.48" height="3.48"/>
      <rect x="513.35" y="224.48" width="3.48" height="3.48"/>
      <rect x="509.87" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="231.44" width="3.48" height="3.48"/>
      <rect x="513.35" y="231.44" width="3.48" height="3.48"/>
      <rect x="516.83" y="231.44" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="234.92" width="3.48" height="3.48"/>
      <rect x="506.39" y="234.92" width="3.48" height="3.48"/>
      <rect x="509.87" y="234.92" width="3.48" height="3.48"/>
      <rect x="513.35" y="234.92" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="238.41" width="3.48" height="3.48"/>
      <rect x="506.39" y="238.41" width="3.48" height="3.48"/>
      <rect x="509.87" y="238.41" width="3.48" height="3.48"/>
      <rect x="513.35" y="238.41" width="3.48" height="3.48"/>
      <rect x="506.39" y="241.89" width="3.48" height="3.48"/>
      <rect x="509.87" y="241.89" width="3.48" height="3.48"/>
      <rect x="513.35" y="241.89" width="3.48" height="3.48"/>
      <rect x="516.83" y="241.89" width="3.48" height="3.48"/>
      <rect x="506.39" y="245.37" width="3.48" height="3.48"/>
      <rect x="509.87" y="245.37" width="3.48" height="3.48"/>
      <rect x="513.35" y="245.37" width="3.48" height="3.48"/>
      <rect x="516.83" y="245.37" width="3.48" height="3.48"/>
      <rect x="520.31" y="245.37" width="3.48" height="3.48"/>
    </g>
    <g id="SS" title="South Sudan" class="land">
      <rect x="565.56" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="221" width="3.48" height="3.48"/>
      <rect x="562.08" y="221" width="3.48" height="3.48"/>
      <rect x="565.56" y="221" width="3.48" height="3.48"/>
      <rect x="544.68" y="224.48" width="3.48" height="3.48"/>
      <rect x="548.16" y="224.48" width="3.48" height="3.48"/>
      <rect x="551.64" y="224.48" width="3.48" height="3.48"/>
      <rect x="555.12" y="224.48" width="3.48" height="3.48"/>
      <rect x="558.6" y="224.48" width="3.48" height="3.48"/>
      <rect x="562.08" y="224.48" width="3.48" height="3.48"/>
      <rect x="565.56" y="224.48" width="3.48" height="3.48"/>
      <rect x="544.68" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="231.44" width="3.48" height="3.48"/>
      <rect x="551.64" y="231.44" width="3.48" height="3.48"/>
      <rect x="555.12" y="231.44" width="3.48" height="3.48"/>
      <rect x="558.6" y="231.44" width="3.48" height="3.48"/>
      <rect x="562.08" y="231.44" width="3.48" height="3.48"/>
      <rect x="565.56" y="231.44" width="3.48" height="3.48"/>
      <rect x="569.04" y="231.44" width="3.48" height="3.48"/>
      <rect x="551.64" y="234.92" width="3.48" height="3.48"/>
      <rect x="555.12" y="234.92" width="3.48" height="3.48"/>
      <rect x="558.6" y="234.92" width="3.48" height="3.48"/>
      <rect x="562.08" y="234.92" width="3.48" height="3.48"/>
      <rect x="565.56" y="234.92" width="3.48" height="3.48"/>
      <rect x="569.04" y="234.92" width="3.48" height="3.48"/>
      <rect x="555.12" y="238.41" width="3.48" height="3.48"/>
      <rect x="558.6" y="238.41" width="3.48" height="3.48"/>
      <rect x="562.08" y="238.41" width="3.48" height="3.48"/>
      <rect x="565.56" y="238.41" width="3.48" height="3.48"/>
      <rect x="569.04" y="238.41" width="3.48" height="3.48"/>
    </g>
    <g id="DJ" title="Djibouti" class="land">
      <rect x="589.92" y="217.51999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="SO" title="Somalia" class="land">
      <rect x="593.4" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="610.8" y="217.51999999999998" width="3.48" height="3.48"/>
      <rect x="593.4" y="221" width="3.48" height="3.48"/>
      <rect x="596.88" y="221" width="3.48" height="3.48"/>
      <rect x="600.36" y="221" width="3.48" height="3.48"/>
      <rect x="603.84" y="221" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="221" width="3.48" height="3.48"/>
      <rect x="610.8" y="221" width="3.48" height="3.48"/>
      <rect x="596.88" y="224.48" width="3.48" height="3.48"/>
      <rect x="600.36" y="224.48" width="3.48" height="3.48"/>
      <rect x="603.84" y="224.48" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="224.48" width="3.48" height="3.48"/>
      <rect x="610.8" y="224.48" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="610.8" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="603.84" y="231.44" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="231.44" width="3.48" height="3.48"/>
      <rect x="600.36" y="234.92" width="3.48" height="3.48"/>
      <rect x="603.84" y="234.92" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="234.92" width="3.48" height="3.48"/>
      <rect x="593.4" y="238.41" width="3.48" height="3.48"/>
      <rect x="596.88" y="238.41" width="3.48" height="3.48"/>
      <rect x="600.36" y="238.41" width="3.48" height="3.48"/>
      <rect x="603.84" y="238.41" width="3.48" height="3.48"/>
      <rect x="589.92" y="241.89" width="3.48" height="3.48"/>
      <rect x="593.4" y="241.89" width="3.48" height="3.48"/>
      <rect x="596.88" y="241.89" width="3.48" height="3.48"/>
      <rect x="600.36" y="241.89" width="3.48" height="3.48"/>
      <rect x="589.92" y="245.37" width="3.48" height="3.48"/>
      <rect x="593.4" y="245.37" width="3.48" height="3.48"/>
      <rect x="596.88" y="245.37" width="3.48" height="3.48"/>
      <rect x="600.36" y="245.37" width="3.48" height="3.48"/>
      <rect x="589.92" y="248.85" width="3.48" height="3.48"/>
      <rect x="593.4" y="248.85" width="3.48" height="3.48"/>
      <rect x="589.92" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="589.92" y="255.81" width="3.48" height="3.48"/>
    </g>
    <g id="CR" title="Costa Rica" class="land">
      <rect x="248.85" y="221" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="221" width="3.48" height="3.48"/>
    </g>
    <g id="CI" title="Côte d'Ivoire" class="land">
      <rect x="457.67" y="221" width="3.48" height="3.48"/>
      <rect x="461.15" y="221" width="3.48" height="3.48"/>
      <rect x="457.67" y="224.48" width="3.48" height="3.48"/>
      <rect x="461.15" y="224.48" width="3.48" height="3.48"/>
      <rect x="464.63" y="224.48" width="3.48" height="3.48"/>
      <rect x="468.11" y="224.48" width="3.48" height="3.48"/>
      <rect x="457.67" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="461.15" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="464.63" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="468.11" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="457.67" y="231.44" width="3.48" height="3.48"/>
      <rect x="461.15" y="231.44" width="3.48" height="3.48"/>
      <rect x="464.63" y="231.44" width="3.48" height="3.48"/>
      <rect x="468.11" y="231.44" width="3.48" height="3.48"/>
      <rect x="457.67" y="234.92" width="3.48" height="3.48"/>
      <rect x="461.15" y="234.92" width="3.48" height="3.48"/>
      <rect x="464.63" y="234.92" width="3.48" height="3.48"/>
      <rect x="468.11" y="234.92" width="3.48" height="3.48"/>
      <rect x="457.67" y="238.41" width="3.48" height="3.48"/>
    </g>
    <g id="GH" title="Ghana" class="land">
      <rect x="471.59" y="221" width="3.48" height="3.48"/>
      <rect x="475.07" y="221" width="3.48" height="3.48"/>
      <rect x="471.59" y="224.48" width="3.48" height="3.48"/>
      <rect x="475.07" y="224.48" width="3.48" height="3.48"/>
      <rect x="471.59" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="475.07" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="478.55" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="471.59" y="231.44" width="3.48" height="3.48"/>
      <rect x="475.07" y="231.44" width="3.48" height="3.48"/>
      <rect x="471.59" y="234.92" width="3.48" height="3.48"/>
      <rect x="475.07" y="234.92" width="3.48" height="3.48"/>
    </g>
    <g id="TG" title="Togo" class="land">
      <rect x="478.55" y="221" width="3.48" height="3.48"/>
      <rect x="478.55" y="224.48" width="3.48" height="3.48"/>
      <rect x="478.55" y="231.44" width="3.48" height="3.48"/>
    </g>
    <g id="CF" title="Central African Republic" class="land">
      <rect x="537.72" y="221" width="3.48" height="3.48"/>
      <rect x="530.76" y="224.48" width="3.48" height="3.48"/>
      <rect x="534.24" y="224.48" width="3.48" height="3.48"/>
      <rect x="537.72" y="224.48" width="3.48" height="3.48"/>
      <rect x="527.28" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="231.44" width="3.48" height="3.48"/>
      <rect x="523.79" y="231.44" width="3.48" height="3.48"/>
      <rect x="527.28" y="231.44" width="3.48" height="3.48"/>
      <rect x="530.76" y="231.44" width="3.48" height="3.48"/>
      <rect x="534.24" y="231.44" width="3.48" height="3.48"/>
      <rect x="537.72" y="231.44" width="3.48" height="3.48"/>
      <rect x="541.2" y="231.44" width="3.48" height="3.48"/>
      <rect x="544.68" y="231.44" width="3.48" height="3.48"/>
      <rect x="516.83" y="234.92" width="3.48" height="3.48"/>
      <rect x="520.31" y="234.92" width="3.48" height="3.48"/>
      <rect x="523.79" y="234.92" width="3.48" height="3.48"/>
      <rect x="527.28" y="234.92" width="3.48" height="3.48"/>
      <rect x="530.76" y="234.92" width="3.48" height="3.48"/>
      <rect x="534.24" y="234.92" width="3.48" height="3.48"/>
      <rect x="537.72" y="234.92" width="3.48" height="3.48"/>
      <rect x="541.2" y="234.92" width="3.48" height="3.48"/>
      <rect x="544.68" y="234.92" width="3.48" height="3.48"/>
      <rect x="548.16" y="234.92" width="3.48" height="3.48"/>
      <rect x="516.83" y="238.41" width="3.48" height="3.48"/>
      <rect x="520.31" y="238.41" width="3.48" height="3.48"/>
      <rect x="523.79" y="238.41" width="3.48" height="3.48"/>
      <rect x="527.28" y="238.41" width="3.48" height="3.48"/>
      <rect x="534.24" y="238.41" width="3.48" height="3.48"/>
      <rect x="537.72" y="238.41" width="3.48" height="3.48"/>
      <rect x="520.31" y="241.89" width="3.48" height="3.48"/>
    </g>
    <g id="PA" title="Panama" class="land">
      <rect x="255.81" y="224.48" width="3.48" height="3.48"/>
      <rect x="262.77" y="224.48" width="3.48" height="3.48"/>
      <rect x="266.25" y="224.48" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="227.95999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="SL" title="Sierra Leone" class="land">
      <rect x="443.75" y="224.48" width="3.48" height="3.48"/>
      <rect x="447.23" y="224.48" width="3.48" height="3.48"/>
      <rect x="443.75" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="227.95999999999998" width="3.48" height="3.48"/>
    </g>
    <g id="LR" title="Liberia" class="land">
      <rect x="450.71" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="447.23" y="231.44" width="3.48" height="3.48"/>
      <rect x="450.71" y="231.44" width="3.48" height="3.48"/>
      <rect x="454.19" y="231.44" width="3.48" height="3.48"/>
      <rect x="450.71" y="234.92" width="3.48" height="3.48"/>
      <rect x="454.19" y="234.92" width="3.48" height="3.48"/>
    </g>
    <g id="LK" title="Sri Lanka" class="land">
      <rect x="694.33" y="227.95999999999998" width="3.48" height="3.48"/>
      <rect x="694.33" y="231.44" width="3.48" height="3.48"/>
    </g>
    <g id="GY" title="Guyana" class="land">
      <rect x="314.96999999999997" y="231.44" width="3.48" height="3.48"/>
      <rect x="318.45" y="231.44" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="234.92" width="3.48" height="3.48"/>
      <rect x="318.45" y="234.92" width="3.48" height="3.48"/>
      <rect x="321.93" y="234.92" width="3.48" height="3.48"/>
      <rect x="318.45" y="238.41" width="3.48" height="3.48"/>
      <rect x="318.45" y="241.89" width="3.48" height="3.48"/>
      <rect x="318.45" y="245.37" width="3.48" height="3.48"/>
      <rect x="321.93" y="245.37" width="3.48" height="3.48"/>
      <rect x="318.45" y="248.85" width="3.48" height="3.48"/>
    </g>
    <g id="MY" title="Malaysia" class="land">
      <rect x="791.78" y="231.44" width="3.48" height="3.48"/>
      <rect x="750.02" y="234.92" width="3.48" height="3.48"/>
      <rect x="791.78" y="234.92" width="3.48" height="3.48"/>
      <rect x="795.26" y="234.92" width="3.48" height="3.48"/>
      <rect x="750.02" y="238.41" width="3.48" height="3.48"/>
      <rect x="753.5" y="238.41" width="3.48" height="3.48"/>
      <rect x="788.3" y="238.41" width="3.48" height="3.48"/>
      <rect x="791.78" y="238.41" width="3.48" height="3.48"/>
      <rect x="795.26" y="238.41" width="3.48" height="3.48"/>
      <rect x="750.02" y="241.89" width="3.48" height="3.48"/>
      <rect x="753.5" y="241.89" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="241.89" width="3.48" height="3.48"/>
      <rect x="753.5" y="245.37" width="3.48" height="3.48"/>
      <rect x="777.86" y="245.37" width="3.48" height="3.48"/>
      <rect x="781.34" y="245.37" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="245.37" width="3.48" height="3.48"/>
      <rect x="774.38" y="248.85" width="3.48" height="3.48"/>
      <rect x="777.86" y="248.85" width="3.48" height="3.48"/>
    </g>
    <g id="SR" title="Suriname" class="land">
      <rect x="325.40999999999997" y="234.92" width="3.48" height="3.48"/>
      <rect x="328.89" y="234.92" width="3.48" height="3.48"/>
      <rect x="321.93" y="238.41" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="238.41" width="3.48" height="3.48"/>
      <rect x="328.89" y="238.41" width="3.48" height="3.48"/>
      <rect x="321.93" y="241.89" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="241.89" width="3.48" height="3.48"/>
      <rect x="328.89" y="241.89" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="245.37" width="3.48" height="3.48"/>
    </g>
    <g id="GF" title="French Guiana" class="land">
      <rect x="332.37" y="234.92" width="3.48" height="3.48"/>
      <rect x="332.37" y="238.41" width="3.48" height="3.48"/>
      <rect x="335.86" y="238.41" width="3.48" height="3.48"/>
      <rect x="332.37" y="241.89" width="3.48" height="3.48"/>
      <rect x="335.86" y="241.89" width="3.48" height="3.48"/>
      <rect x="332.37" y="245.37" width="3.48" height="3.48"/>
    </g>
    <g id="BR" title="Brazil" class="land">
      <rect x="314.96999999999997" y="238.41" width="3.48" height="3.48"/>
      <rect x="304.53" y="241.89" width="3.48" height="3.48"/>
      <rect x="308.01" y="241.89" width="3.48" height="3.48"/>
      <rect x="311.49" y="241.89" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="241.89" width="3.48" height="3.48"/>
      <rect x="339.34" y="241.89" width="3.48" height="3.48"/>
      <rect x="308.01" y="245.37" width="3.48" height="3.48"/>
      <rect x="311.49" y="245.37" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="245.37" width="3.48" height="3.48"/>
      <rect x="328.89" y="245.37" width="3.48" height="3.48"/>
      <rect x="335.86" y="245.37" width="3.48" height="3.48"/>
      <rect x="339.34" y="245.37" width="3.48" height="3.48"/>
      <rect x="290.61" y="248.85" width="3.48" height="3.48"/>
      <rect x="294.09" y="248.85" width="3.48" height="3.48"/>
      <rect x="304.53" y="248.85" width="3.48" height="3.48"/>
      <rect x="308.01" y="248.85" width="3.48" height="3.48"/>
      <rect x="311.49" y="248.85" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="248.85" width="3.48" height="3.48"/>
      <rect x="321.93" y="248.85" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="248.85" width="3.48" height="3.48"/>
      <rect x="328.89" y="248.85" width="3.48" height="3.48"/>
      <rect x="332.37" y="248.85" width="3.48" height="3.48"/>
      <rect x="335.86" y="248.85" width="3.48" height="3.48"/>
      <rect x="339.34" y="248.85" width="3.48" height="3.48"/>
      <rect x="290.61" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="294.09" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="297.57" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="301.05" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="304.53" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="308.01" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="311.49" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="318.45" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="321.93" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="328.89" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="332.37" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="335.86" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="339.34" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="342.82" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="290.61" y="255.81" width="3.48" height="3.48"/>
      <rect x="294.09" y="255.81" width="3.48" height="3.48"/>
      <rect x="297.57" y="255.81" width="3.48" height="3.48"/>
      <rect x="301.05" y="255.81" width="3.48" height="3.48"/>
      <rect x="304.53" y="255.81" width="3.48" height="3.48"/>
      <rect x="308.01" y="255.81" width="3.48" height="3.48"/>
      <rect x="311.49" y="255.81" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="255.81" width="3.48" height="3.48"/>
      <rect x="318.45" y="255.81" width="3.48" height="3.48"/>
      <rect x="321.93" y="255.81" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="255.81" width="3.48" height="3.48"/>
      <rect x="328.89" y="255.81" width="3.48" height="3.48"/>
      <rect x="332.37" y="255.81" width="3.48" height="3.48"/>
      <rect x="335.86" y="255.81" width="3.48" height="3.48"/>
      <rect x="342.82" y="255.81" width="3.48" height="3.48"/>
      <rect x="349.78" y="255.81" width="3.48" height="3.48"/>
      <rect x="290.61" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="294.09" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="297.57" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="301.05" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="304.53" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="308.01" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="311.49" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="318.45" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="321.93" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="328.89" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="332.37" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="335.86" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="339.34" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="342.82" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="346.3" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="349.78" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="353.26" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="356.74" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="290.61" y="262.77" width="3.48" height="3.48"/>
      <rect x="294.09" y="262.77" width="3.48" height="3.48"/>
      <rect x="297.57" y="262.77" width="3.48" height="3.48"/>
      <rect x="301.05" y="262.77" width="3.48" height="3.48"/>
      <rect x="304.53" y="262.77" width="3.48" height="3.48"/>
      <rect x="308.01" y="262.77" width="3.48" height="3.48"/>
      <rect x="311.49" y="262.77" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="262.77" width="3.48" height="3.48"/>
      <rect x="318.45" y="262.77" width="3.48" height="3.48"/>
      <rect x="321.93" y="262.77" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="262.77" width="3.48" height="3.48"/>
      <rect x="328.89" y="262.77" width="3.48" height="3.48"/>
      <rect x="332.37" y="262.77" width="3.48" height="3.48"/>
      <rect x="335.86" y="262.77" width="3.48" height="3.48"/>
      <rect x="339.34" y="262.77" width="3.48" height="3.48"/>
      <rect x="342.82" y="262.77" width="3.48" height="3.48"/>
      <rect x="346.3" y="262.77" width="3.48" height="3.48"/>
      <rect x="349.78" y="262.77" width="3.48" height="3.48"/>
      <rect x="353.26" y="262.77" width="3.48" height="3.48"/>
      <rect x="356.74" y="262.77" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="262.77" width="3.48" height="3.48"/>
      <rect x="363.7" y="262.77" width="3.48" height="3.48"/>
      <rect x="367.18" y="262.77" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="262.77" width="3.48" height="3.48"/>
      <rect x="287.13" y="266.25" width="3.48" height="3.48"/>
      <rect x="290.61" y="266.25" width="3.48" height="3.48"/>
      <rect x="294.09" y="266.25" width="3.48" height="3.48"/>
      <rect x="297.57" y="266.25" width="3.48" height="3.48"/>
      <rect x="301.05" y="266.25" width="3.48" height="3.48"/>
      <rect x="304.53" y="266.25" width="3.48" height="3.48"/>
      <rect x="308.01" y="266.25" width="3.48" height="3.48"/>
      <rect x="311.49" y="266.25" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="266.25" width="3.48" height="3.48"/>
      <rect x="318.45" y="266.25" width="3.48" height="3.48"/>
      <rect x="321.93" y="266.25" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="266.25" width="3.48" height="3.48"/>
      <rect x="328.89" y="266.25" width="3.48" height="3.48"/>
      <rect x="332.37" y="266.25" width="3.48" height="3.48"/>
      <rect x="335.86" y="266.25" width="3.48" height="3.48"/>
      <rect x="339.34" y="266.25" width="3.48" height="3.48"/>
      <rect x="342.82" y="266.25" width="3.48" height="3.48"/>
      <rect x="346.3" y="266.25" width="3.48" height="3.48"/>
      <rect x="349.78" y="266.25" width="3.48" height="3.48"/>
      <rect x="353.26" y="266.25" width="3.48" height="3.48"/>
      <rect x="356.74" y="266.25" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="266.25" width="3.48" height="3.48"/>
      <rect x="363.7" y="266.25" width="3.48" height="3.48"/>
      <rect x="367.18" y="266.25" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="266.25" width="3.48" height="3.48"/>
      <rect x="374.14" y="266.25" width="3.48" height="3.48"/>
      <rect x="283.65" y="269.73" width="3.48" height="3.48"/>
      <rect x="287.13" y="269.73" width="3.48" height="3.48"/>
      <rect x="290.61" y="269.73" width="3.48" height="3.48"/>
      <rect x="294.09" y="269.73" width="3.48" height="3.48"/>
      <rect x="297.57" y="269.73" width="3.48" height="3.48"/>
      <rect x="301.05" y="269.73" width="3.48" height="3.48"/>
      <rect x="304.53" y="269.73" width="3.48" height="3.48"/>
      <rect x="308.01" y="269.73" width="3.48" height="3.48"/>
      <rect x="311.49" y="269.73" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="269.73" width="3.48" height="3.48"/>
      <rect x="318.45" y="269.73" width="3.48" height="3.48"/>
      <rect x="321.93" y="269.73" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="269.73" width="3.48" height="3.48"/>
      <rect x="328.89" y="269.73" width="3.48" height="3.48"/>
      <rect x="332.37" y="269.73" width="3.48" height="3.48"/>
      <rect x="335.86" y="269.73" width="3.48" height="3.48"/>
      <rect x="339.34" y="269.73" width="3.48" height="3.48"/>
      <rect x="342.82" y="269.73" width="3.48" height="3.48"/>
      <rect x="346.3" y="269.73" width="3.48" height="3.48"/>
      <rect x="349.78" y="269.73" width="3.48" height="3.48"/>
      <rect x="353.26" y="269.73" width="3.48" height="3.48"/>
      <rect x="356.74" y="269.73" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="269.73" width="3.48" height="3.48"/>
      <rect x="363.7" y="269.73" width="3.48" height="3.48"/>
      <rect x="367.18" y="269.73" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="269.73" width="3.48" height="3.48"/>
      <rect x="374.14" y="269.73" width="3.48" height="3.48"/>
      <rect x="377.62" y="269.73" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="269.73" width="3.48" height="3.48"/>
      <rect x="280.17" y="273.21" width="3.48" height="3.48"/>
      <rect x="283.65" y="273.21" width="3.48" height="3.48"/>
      <rect x="287.13" y="273.21" width="3.48" height="3.48"/>
      <rect x="290.61" y="273.21" width="3.48" height="3.48"/>
      <rect x="294.09" y="273.21" width="3.48" height="3.48"/>
      <rect x="297.57" y="273.21" width="3.48" height="3.48"/>
      <rect x="301.05" y="273.21" width="3.48" height="3.48"/>
      <rect x="304.53" y="273.21" width="3.48" height="3.48"/>
      <rect x="308.01" y="273.21" width="3.48" height="3.48"/>
      <rect x="311.49" y="273.21" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="273.21" width="3.48" height="3.48"/>
      <rect x="318.45" y="273.21" width="3.48" height="3.48"/>
      <rect x="321.93" y="273.21" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="273.21" width="3.48" height="3.48"/>
      <rect x="328.89" y="273.21" width="3.48" height="3.48"/>
      <rect x="332.37" y="273.21" width="3.48" height="3.48"/>
      <rect x="335.86" y="273.21" width="3.48" height="3.48"/>
      <rect x="339.34" y="273.21" width="3.48" height="3.48"/>
      <rect x="342.82" y="273.21" width="3.48" height="3.48"/>
      <rect x="346.3" y="273.21" width="3.48" height="3.48"/>
      <rect x="349.78" y="273.21" width="3.48" height="3.48"/>
      <rect x="353.26" y="273.21" width="3.48" height="3.48"/>
      <rect x="356.74" y="273.21" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="273.21" width="3.48" height="3.48"/>
      <rect x="363.7" y="273.21" width="3.48" height="3.48"/>
      <rect x="367.18" y="273.21" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="273.21" width="3.48" height="3.48"/>
      <rect x="374.14" y="273.21" width="3.48" height="3.48"/>
      <rect x="377.62" y="273.21" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="273.21" width="3.48" height="3.48"/>
      <rect x="280.17" y="276.69" width="3.48" height="3.48"/>
      <rect x="283.65" y="276.69" width="3.48" height="3.48"/>
      <rect x="287.13" y="276.69" width="3.48" height="3.48"/>
      <rect x="290.61" y="276.69" width="3.48" height="3.48"/>
      <rect x="294.09" y="276.69" width="3.48" height="3.48"/>
      <rect x="297.57" y="276.69" width="3.48" height="3.48"/>
      <rect x="301.05" y="276.69" width="3.48" height="3.48"/>
      <rect x="304.53" y="276.69" width="3.48" height="3.48"/>
      <rect x="308.01" y="276.69" width="3.48" height="3.48"/>
      <rect x="311.49" y="276.69" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="276.69" width="3.48" height="3.48"/>
      <rect x="318.45" y="276.69" width="3.48" height="3.48"/>
      <rect x="321.93" y="276.69" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="276.69" width="3.48" height="3.48"/>
      <rect x="328.89" y="276.69" width="3.48" height="3.48"/>
      <rect x="332.37" y="276.69" width="3.48" height="3.48"/>
      <rect x="335.86" y="276.69" width="3.48" height="3.48"/>
      <rect x="339.34" y="276.69" width="3.48" height="3.48"/>
      <rect x="342.82" y="276.69" width="3.48" height="3.48"/>
      <rect x="346.3" y="276.69" width="3.48" height="3.48"/>
      <rect x="349.78" y="276.69" width="3.48" height="3.48"/>
      <rect x="353.26" y="276.69" width="3.48" height="3.48"/>
      <rect x="356.74" y="276.69" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="276.69" width="3.48" height="3.48"/>
      <rect x="363.7" y="276.69" width="3.48" height="3.48"/>
      <rect x="367.18" y="276.69" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="276.69" width="3.48" height="3.48"/>
      <rect x="374.14" y="276.69" width="3.48" height="3.48"/>
      <rect x="377.62" y="276.69" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="276.69" width="3.48" height="3.48"/>
      <rect x="283.65" y="280.17" width="3.48" height="3.48"/>
      <rect x="287.13" y="280.17" width="3.48" height="3.48"/>
      <rect x="290.61" y="280.17" width="3.48" height="3.48"/>
      <rect x="294.09" y="280.17" width="3.48" height="3.48"/>
      <rect x="297.57" y="280.17" width="3.48" height="3.48"/>
      <rect x="301.05" y="280.17" width="3.48" height="3.48"/>
      <rect x="304.53" y="280.17" width="3.48" height="3.48"/>
      <rect x="308.01" y="280.17" width="3.48" height="3.48"/>
      <rect x="311.49" y="280.17" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="280.17" width="3.48" height="3.48"/>
      <rect x="318.45" y="280.17" width="3.48" height="3.48"/>
      <rect x="321.93" y="280.17" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="280.17" width="3.48" height="3.48"/>
      <rect x="328.89" y="280.17" width="3.48" height="3.48"/>
      <rect x="332.37" y="280.17" width="3.48" height="3.48"/>
      <rect x="335.86" y="280.17" width="3.48" height="3.48"/>
      <rect x="339.34" y="280.17" width="3.48" height="3.48"/>
      <rect x="342.82" y="280.17" width="3.48" height="3.48"/>
      <rect x="346.3" y="280.17" width="3.48" height="3.48"/>
      <rect x="349.78" y="280.17" width="3.48" height="3.48"/>
      <rect x="353.26" y="280.17" width="3.48" height="3.48"/>
      <rect x="356.74" y="280.17" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="280.17" width="3.48" height="3.48"/>
      <rect x="363.7" y="280.17" width="3.48" height="3.48"/>
      <rect x="367.18" y="280.17" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="280.17" width="3.48" height="3.48"/>
      <rect x="374.14" y="280.17" width="3.48" height="3.48"/>
      <rect x="377.62" y="280.17" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="280.17" width="3.48" height="3.48"/>
      <rect x="283.65" y="283.65" width="3.48" height="3.48"/>
      <rect x="290.61" y="283.65" width="3.48" height="3.48"/>
      <rect x="294.09" y="283.65" width="3.48" height="3.48"/>
      <rect x="297.57" y="283.65" width="3.48" height="3.48"/>
      <rect x="304.53" y="283.65" width="3.48" height="3.48"/>
      <rect x="308.01" y="283.65" width="3.48" height="3.48"/>
      <rect x="311.49" y="283.65" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="283.65" width="3.48" height="3.48"/>
      <rect x="318.45" y="283.65" width="3.48" height="3.48"/>
      <rect x="321.93" y="283.65" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="283.65" width="3.48" height="3.48"/>
      <rect x="328.89" y="283.65" width="3.48" height="3.48"/>
      <rect x="332.37" y="283.65" width="3.48" height="3.48"/>
      <rect x="335.86" y="283.65" width="3.48" height="3.48"/>
      <rect x="339.34" y="283.65" width="3.48" height="3.48"/>
      <rect x="342.82" y="283.65" width="3.48" height="3.48"/>
      <rect x="346.3" y="283.65" width="3.48" height="3.48"/>
      <rect x="349.78" y="283.65" width="3.48" height="3.48"/>
      <rect x="353.26" y="283.65" width="3.48" height="3.48"/>
      <rect x="356.74" y="283.65" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="283.65" width="3.48" height="3.48"/>
      <rect x="363.7" y="283.65" width="3.48" height="3.48"/>
      <rect x="367.18" y="283.65" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="283.65" width="3.48" height="3.48"/>
      <rect x="374.14" y="283.65" width="3.48" height="3.48"/>
      <rect x="377.62" y="283.65" width="3.48" height="3.48"/>
      <rect x="304.53" y="287.13" width="3.48" height="3.48"/>
      <rect x="308.01" y="287.13" width="3.48" height="3.48"/>
      <rect x="311.49" y="287.13" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="287.13" width="3.48" height="3.48"/>
      <rect x="318.45" y="287.13" width="3.48" height="3.48"/>
      <rect x="321.93" y="287.13" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="287.13" width="3.48" height="3.48"/>
      <rect x="328.89" y="287.13" width="3.48" height="3.48"/>
      <rect x="332.37" y="287.13" width="3.48" height="3.48"/>
      <rect x="335.86" y="287.13" width="3.48" height="3.48"/>
      <rect x="339.34" y="287.13" width="3.48" height="3.48"/>
      <rect x="342.82" y="287.13" width="3.48" height="3.48"/>
      <rect x="346.3" y="287.13" width="3.48" height="3.48"/>
      <rect x="349.78" y="287.13" width="3.48" height="3.48"/>
      <rect x="353.26" y="287.13" width="3.48" height="3.48"/>
      <rect x="356.74" y="287.13" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="287.13" width="3.48" height="3.48"/>
      <rect x="363.7" y="287.13" width="3.48" height="3.48"/>
      <rect x="367.18" y="287.13" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="287.13" width="3.48" height="3.48"/>
      <rect x="374.14" y="287.13" width="3.48" height="3.48"/>
      <rect x="377.62" y="287.13" width="3.48" height="3.48"/>
      <rect x="304.53" y="290.61" width="3.48" height="3.48"/>
      <rect x="308.01" y="290.61" width="3.48" height="3.48"/>
      <rect x="311.49" y="290.61" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="290.61" width="3.48" height="3.48"/>
      <rect x="318.45" y="290.61" width="3.48" height="3.48"/>
      <rect x="321.93" y="290.61" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="290.61" width="3.48" height="3.48"/>
      <rect x="328.89" y="290.61" width="3.48" height="3.48"/>
      <rect x="332.37" y="290.61" width="3.48" height="3.48"/>
      <rect x="335.86" y="290.61" width="3.48" height="3.48"/>
      <rect x="339.34" y="290.61" width="3.48" height="3.48"/>
      <rect x="342.82" y="290.61" width="3.48" height="3.48"/>
      <rect x="346.3" y="290.61" width="3.48" height="3.48"/>
      <rect x="349.78" y="290.61" width="3.48" height="3.48"/>
      <rect x="353.26" y="290.61" width="3.48" height="3.48"/>
      <rect x="356.74" y="290.61" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="290.61" width="3.48" height="3.48"/>
      <rect x="363.7" y="290.61" width="3.48" height="3.48"/>
      <rect x="367.18" y="290.61" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="290.61" width="3.48" height="3.48"/>
      <rect x="374.14" y="290.61" width="3.48" height="3.48"/>
      <rect x="311.49" y="294.09" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="294.09" width="3.48" height="3.48"/>
      <rect x="318.45" y="294.09" width="3.48" height="3.48"/>
      <rect x="321.93" y="294.09" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="294.09" width="3.48" height="3.48"/>
      <rect x="328.89" y="294.09" width="3.48" height="3.48"/>
      <rect x="332.37" y="294.09" width="3.48" height="3.48"/>
      <rect x="335.86" y="294.09" width="3.48" height="3.48"/>
      <rect x="339.34" y="294.09" width="3.48" height="3.48"/>
      <rect x="342.82" y="294.09" width="3.48" height="3.48"/>
      <rect x="346.3" y="294.09" width="3.48" height="3.48"/>
      <rect x="349.78" y="294.09" width="3.48" height="3.48"/>
      <rect x="353.26" y="294.09" width="3.48" height="3.48"/>
      <rect x="356.74" y="294.09" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="294.09" width="3.48" height="3.48"/>
      <rect x="363.7" y="294.09" width="3.48" height="3.48"/>
      <rect x="367.18" y="294.09" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="294.09" width="3.48" height="3.48"/>
      <rect x="318.45" y="297.57" width="3.48" height="3.48"/>
      <rect x="321.93" y="297.57" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="297.57" width="3.48" height="3.48"/>
      <rect x="328.89" y="297.57" width="3.48" height="3.48"/>
      <rect x="332.37" y="297.57" width="3.48" height="3.48"/>
      <rect x="335.86" y="297.57" width="3.48" height="3.48"/>
      <rect x="339.34" y="297.57" width="3.48" height="3.48"/>
      <rect x="342.82" y="297.57" width="3.48" height="3.48"/>
      <rect x="346.3" y="297.57" width="3.48" height="3.48"/>
      <rect x="349.78" y="297.57" width="3.48" height="3.48"/>
      <rect x="353.26" y="297.57" width="3.48" height="3.48"/>
      <rect x="356.74" y="297.57" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="297.57" width="3.48" height="3.48"/>
      <rect x="363.7" y="297.57" width="3.48" height="3.48"/>
      <rect x="367.18" y="297.57" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="297.57" width="3.48" height="3.48"/>
      <rect x="318.45" y="301.05" width="3.48" height="3.48"/>
      <rect x="321.93" y="301.05" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="301.05" width="3.48" height="3.48"/>
      <rect x="328.89" y="301.05" width="3.48" height="3.48"/>
      <rect x="332.37" y="301.05" width="3.48" height="3.48"/>
      <rect x="335.86" y="301.05" width="3.48" height="3.48"/>
      <rect x="339.34" y="301.05" width="3.48" height="3.48"/>
      <rect x="342.82" y="301.05" width="3.48" height="3.48"/>
      <rect x="346.3" y="301.05" width="3.48" height="3.48"/>
      <rect x="349.78" y="301.05" width="3.48" height="3.48"/>
      <rect x="353.26" y="301.05" width="3.48" height="3.48"/>
      <rect x="356.74" y="301.05" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="301.05" width="3.48" height="3.48"/>
      <rect x="363.7" y="301.05" width="3.48" height="3.48"/>
      <rect x="367.18" y="301.05" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="301.05" width="3.48" height="3.48"/>
      <rect x="321.93" y="304.53" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="304.53" width="3.48" height="3.48"/>
      <rect x="328.89" y="304.53" width="3.48" height="3.48"/>
      <rect x="332.37" y="304.53" width="3.48" height="3.48"/>
      <rect x="335.86" y="304.53" width="3.48" height="3.48"/>
      <rect x="339.34" y="304.53" width="3.48" height="3.48"/>
      <rect x="342.82" y="304.53" width="3.48" height="3.48"/>
      <rect x="346.3" y="304.53" width="3.48" height="3.48"/>
      <rect x="349.78" y="304.53" width="3.48" height="3.48"/>
      <rect x="353.26" y="304.53" width="3.48" height="3.48"/>
      <rect x="356.74" y="304.53" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="304.53" width="3.48" height="3.48"/>
      <rect x="363.7" y="304.53" width="3.48" height="3.48"/>
      <rect x="367.18" y="304.53" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="304.53" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="308.01" width="3.48" height="3.48"/>
      <rect x="328.89" y="308.01" width="3.48" height="3.48"/>
      <rect x="332.37" y="308.01" width="3.48" height="3.48"/>
      <rect x="335.86" y="308.01" width="3.48" height="3.48"/>
      <rect x="339.34" y="308.01" width="3.48" height="3.48"/>
      <rect x="342.82" y="308.01" width="3.48" height="3.48"/>
      <rect x="346.3" y="308.01" width="3.48" height="3.48"/>
      <rect x="349.78" y="308.01" width="3.48" height="3.48"/>
      <rect x="353.26" y="308.01" width="3.48" height="3.48"/>
      <rect x="356.74" y="308.01" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="308.01" width="3.48" height="3.48"/>
      <rect x="363.7" y="308.01" width="3.48" height="3.48"/>
      <rect x="367.18" y="308.01" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="308.01" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="311.49" width="3.48" height="3.48"/>
      <rect x="328.89" y="311.49" width="3.48" height="3.48"/>
      <rect x="332.37" y="311.49" width="3.48" height="3.48"/>
      <rect x="335.86" y="311.49" width="3.48" height="3.48"/>
      <rect x="339.34" y="311.49" width="3.48" height="3.48"/>
      <rect x="342.82" y="311.49" width="3.48" height="3.48"/>
      <rect x="346.3" y="311.49" width="3.48" height="3.48"/>
      <rect x="349.78" y="311.49" width="3.48" height="3.48"/>
      <rect x="353.26" y="311.49" width="3.48" height="3.48"/>
      <rect x="356.74" y="311.49" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="311.49" width="3.48" height="3.48"/>
      <rect x="363.7" y="311.49" width="3.48" height="3.48"/>
      <rect x="367.18" y="311.49" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="311.49" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="328.89" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="332.37" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="339.34" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="342.82" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="346.3" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="349.78" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="353.26" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="356.74" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="363.7" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="367.18" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="318.45" width="3.48" height="3.48"/>
      <rect x="328.89" y="318.45" width="3.48" height="3.48"/>
      <rect x="332.37" y="318.45" width="3.48" height="3.48"/>
      <rect x="335.86" y="318.45" width="3.48" height="3.48"/>
      <rect x="339.34" y="318.45" width="3.48" height="3.48"/>
      <rect x="342.82" y="318.45" width="3.48" height="3.48"/>
      <rect x="346.3" y="318.45" width="3.48" height="3.48"/>
      <rect x="349.78" y="318.45" width="3.48" height="3.48"/>
      <rect x="353.26" y="318.45" width="3.48" height="3.48"/>
      <rect x="356.74" y="318.45" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="318.45" width="3.48" height="3.48"/>
      <rect x="363.7" y="318.45" width="3.48" height="3.48"/>
      <rect x="367.18" y="318.45" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="321.93" width="3.48" height="3.48"/>
      <rect x="328.89" y="321.93" width="3.48" height="3.48"/>
      <rect x="332.37" y="321.93" width="3.48" height="3.48"/>
      <rect x="335.86" y="321.93" width="3.48" height="3.48"/>
      <rect x="339.34" y="321.93" width="3.48" height="3.48"/>
      <rect x="342.82" y="321.93" width="3.48" height="3.48"/>
      <rect x="346.3" y="321.93" width="3.48" height="3.48"/>
      <rect x="349.78" y="321.93" width="3.48" height="3.48"/>
      <rect x="353.26" y="321.93" width="3.48" height="3.48"/>
      <rect x="356.74" y="321.93" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="321.93" width="3.48" height="3.48"/>
      <rect x="363.7" y="321.93" width="3.48" height="3.48"/>
      <rect x="367.18" y="321.93" width="3.48" height="3.48"/>
      <rect x="332.37" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="339.34" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="342.82" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="346.3" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="349.78" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="353.26" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="356.74" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="328.89" width="3.48" height="3.48"/>
      <rect x="339.34" y="328.89" width="3.48" height="3.48"/>
      <rect x="342.82" y="328.89" width="3.48" height="3.48"/>
      <rect x="346.3" y="328.89" width="3.48" height="3.48"/>
      <rect x="349.78" y="328.89" width="3.48" height="3.48"/>
      <rect x="353.26" y="328.89" width="3.48" height="3.48"/>
      <rect x="335.86" y="332.37" width="3.48" height="3.48"/>
      <rect x="339.34" y="332.37" width="3.48" height="3.48"/>
      <rect x="342.82" y="332.37" width="3.48" height="3.48"/>
      <rect x="346.3" y="332.37" width="3.48" height="3.48"/>
      <rect x="349.78" y="332.37" width="3.48" height="3.48"/>
      <rect x="339.34" y="335.86" width="3.48" height="3.48"/>
      <rect x="342.82" y="335.86" width="3.48" height="3.48"/>
      <rect x="346.3" y="335.86" width="3.48" height="3.48"/>
      <rect x="349.78" y="335.86" width="3.48" height="3.48"/>
      <rect x="335.86" y="339.34" width="3.48" height="3.48"/>
      <rect x="339.34" y="339.34" width="3.48" height="3.48"/>
      <rect x="342.82" y="339.34" width="3.48" height="3.48"/>
      <rect x="346.3" y="339.34" width="3.48" height="3.48"/>
      <rect x="349.78" y="339.34" width="3.48" height="3.48"/>
      <rect x="332.37" y="342.82" width="3.48" height="3.48"/>
      <rect x="335.86" y="342.82" width="3.48" height="3.48"/>
      <rect x="339.34" y="342.82" width="3.48" height="3.48"/>
      <rect x="342.82" y="342.82" width="3.48" height="3.48"/>
      <rect x="346.3" y="342.82" width="3.48" height="3.48"/>
      <rect x="332.37" y="346.3" width="3.48" height="3.48"/>
      <rect x="335.86" y="346.3" width="3.48" height="3.48"/>
      <rect x="339.34" y="346.3" width="3.48" height="3.48"/>
      <rect x="342.82" y="346.3" width="3.48" height="3.48"/>
      <rect x="346.3" y="346.3" width="3.48" height="3.48"/>
      <rect x="335.86" y="349.78" width="3.48" height="3.48"/>
      <rect x="339.34" y="349.78" width="3.48" height="3.48"/>
      <rect x="342.82" y="349.78" width="3.48" height="3.48"/>
      <rect x="346.3" y="349.78" width="3.48" height="3.48"/>
      <rect x="342.82" y="353.26" width="3.48" height="3.48"/>
    </g>
    <g id="CD" title="Democratic Republic of Congo" class="land">
      <rect x="530.76" y="238.41" width="3.48" height="3.48"/>
      <rect x="541.2" y="238.41" width="3.48" height="3.48"/>
      <rect x="544.68" y="238.41" width="3.48" height="3.48"/>
      <rect x="548.16" y="238.41" width="3.48" height="3.48"/>
      <rect x="551.64" y="238.41" width="3.48" height="3.48"/>
      <rect x="527.28" y="241.89" width="3.48" height="3.48"/>
      <rect x="530.76" y="241.89" width="3.48" height="3.48"/>
      <rect x="534.24" y="241.89" width="3.48" height="3.48"/>
      <rect x="537.72" y="241.89" width="3.48" height="3.48"/>
      <rect x="541.2" y="241.89" width="3.48" height="3.48"/>
      <rect x="544.68" y="241.89" width="3.48" height="3.48"/>
      <rect x="548.16" y="241.89" width="3.48" height="3.48"/>
      <rect x="551.64" y="241.89" width="3.48" height="3.48"/>
      <rect x="555.12" y="241.89" width="3.48" height="3.48"/>
      <rect x="558.6" y="241.89" width="3.48" height="3.48"/>
      <rect x="527.28" y="245.37" width="3.48" height="3.48"/>
      <rect x="530.76" y="245.37" width="3.48" height="3.48"/>
      <rect x="534.24" y="245.37" width="3.48" height="3.48"/>
      <rect x="537.72" y="245.37" width="3.48" height="3.48"/>
      <rect x="541.2" y="245.37" width="3.48" height="3.48"/>
      <rect x="544.68" y="245.37" width="3.48" height="3.48"/>
      <rect x="548.16" y="245.37" width="3.48" height="3.48"/>
      <rect x="551.64" y="245.37" width="3.48" height="3.48"/>
      <rect x="555.12" y="245.37" width="3.48" height="3.48"/>
      <rect x="558.6" y="245.37" width="3.48" height="3.48"/>
      <rect x="527.28" y="248.85" width="3.48" height="3.48"/>
      <rect x="530.76" y="248.85" width="3.48" height="3.48"/>
      <rect x="534.24" y="248.85" width="3.48" height="3.48"/>
      <rect x="537.72" y="248.85" width="3.48" height="3.48"/>
      <rect x="541.2" y="248.85" width="3.48" height="3.48"/>
      <rect x="544.68" y="248.85" width="3.48" height="3.48"/>
      <rect x="548.16" y="248.85" width="3.48" height="3.48"/>
      <rect x="551.64" y="248.85" width="3.48" height="3.48"/>
      <rect x="555.12" y="248.85" width="3.48" height="3.48"/>
      <rect x="558.6" y="248.85" width="3.48" height="3.48"/>
      <rect x="527.28" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="530.76" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="534.24" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="537.72" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="541.2" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="544.68" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="548.16" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="551.64" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="555.12" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="255.81" width="3.48" height="3.48"/>
      <rect x="527.28" y="255.81" width="3.48" height="3.48"/>
      <rect x="530.76" y="255.81" width="3.48" height="3.48"/>
      <rect x="534.24" y="255.81" width="3.48" height="3.48"/>
      <rect x="537.72" y="255.81" width="3.48" height="3.48"/>
      <rect x="541.2" y="255.81" width="3.48" height="3.48"/>
      <rect x="544.68" y="255.81" width="3.48" height="3.48"/>
      <rect x="548.16" y="255.81" width="3.48" height="3.48"/>
      <rect x="551.64" y="255.81" width="3.48" height="3.48"/>
      <rect x="555.12" y="255.81" width="3.48" height="3.48"/>
      <rect x="523.79" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="527.28" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="530.76" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="534.24" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="537.72" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="541.2" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="544.68" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="548.16" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="551.64" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="555.12" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="523.79" y="262.77" width="3.48" height="3.48"/>
      <rect x="527.28" y="262.77" width="3.48" height="3.48"/>
      <rect x="530.76" y="262.77" width="3.48" height="3.48"/>
      <rect x="534.24" y="262.77" width="3.48" height="3.48"/>
      <rect x="537.72" y="262.77" width="3.48" height="3.48"/>
      <rect x="541.2" y="262.77" width="3.48" height="3.48"/>
      <rect x="544.68" y="262.77" width="3.48" height="3.48"/>
      <rect x="548.16" y="262.77" width="3.48" height="3.48"/>
      <rect x="551.64" y="262.77" width="3.48" height="3.48"/>
      <rect x="555.12" y="262.77" width="3.48" height="3.48"/>
      <rect x="520.31" y="266.25" width="3.48" height="3.48"/>
      <rect x="523.79" y="266.25" width="3.48" height="3.48"/>
      <rect x="527.28" y="266.25" width="3.48" height="3.48"/>
      <rect x="530.76" y="266.25" width="3.48" height="3.48"/>
      <rect x="534.24" y="266.25" width="3.48" height="3.48"/>
      <rect x="537.72" y="266.25" width="3.48" height="3.48"/>
      <rect x="541.2" y="266.25" width="3.48" height="3.48"/>
      <rect x="544.68" y="266.25" width="3.48" height="3.48"/>
      <rect x="548.16" y="266.25" width="3.48" height="3.48"/>
      <rect x="551.64" y="266.25" width="3.48" height="3.48"/>
      <rect x="555.12" y="266.25" width="3.48" height="3.48"/>
      <rect x="513.35" y="269.73" width="3.48" height="3.48"/>
      <rect x="516.83" y="269.73" width="3.48" height="3.48"/>
      <rect x="520.31" y="269.73" width="3.48" height="3.48"/>
      <rect x="523.79" y="269.73" width="3.48" height="3.48"/>
      <rect x="527.28" y="269.73" width="3.48" height="3.48"/>
      <rect x="530.76" y="269.73" width="3.48" height="3.48"/>
      <rect x="534.24" y="269.73" width="3.48" height="3.48"/>
      <rect x="537.72" y="269.73" width="3.48" height="3.48"/>
      <rect x="541.2" y="269.73" width="3.48" height="3.48"/>
      <rect x="544.68" y="269.73" width="3.48" height="3.48"/>
      <rect x="548.16" y="269.73" width="3.48" height="3.48"/>
      <rect x="551.64" y="269.73" width="3.48" height="3.48"/>
      <rect x="555.12" y="269.73" width="3.48" height="3.48"/>
      <rect x="523.79" y="273.21" width="3.48" height="3.48"/>
      <rect x="527.28" y="273.21" width="3.48" height="3.48"/>
      <rect x="530.76" y="273.21" width="3.48" height="3.48"/>
      <rect x="534.24" y="273.21" width="3.48" height="3.48"/>
      <rect x="537.72" y="273.21" width="3.48" height="3.48"/>
      <rect x="541.2" y="273.21" width="3.48" height="3.48"/>
      <rect x="544.68" y="273.21" width="3.48" height="3.48"/>
      <rect x="548.16" y="273.21" width="3.48" height="3.48"/>
      <rect x="551.64" y="273.21" width="3.48" height="3.48"/>
      <rect x="555.12" y="273.21" width="3.48" height="3.48"/>
      <rect x="523.79" y="276.69" width="3.48" height="3.48"/>
      <rect x="527.28" y="276.69" width="3.48" height="3.48"/>
      <rect x="537.72" y="276.69" width="3.48" height="3.48"/>
      <rect x="541.2" y="276.69" width="3.48" height="3.48"/>
      <rect x="544.68" y="276.69" width="3.48" height="3.48"/>
      <rect x="548.16" y="276.69" width="3.48" height="3.48"/>
      <rect x="551.64" y="276.69" width="3.48" height="3.48"/>
      <rect x="555.12" y="276.69" width="3.48" height="3.48"/>
      <rect x="558.6" y="276.69" width="3.48" height="3.48"/>
      <rect x="537.72" y="280.17" width="3.48" height="3.48"/>
      <rect x="541.2" y="280.17" width="3.48" height="3.48"/>
      <rect x="544.68" y="280.17" width="3.48" height="3.48"/>
      <rect x="548.16" y="280.17" width="3.48" height="3.48"/>
      <rect x="551.64" y="280.17" width="3.48" height="3.48"/>
      <rect x="537.72" y="283.65" width="3.48" height="3.48"/>
      <rect x="541.2" y="283.65" width="3.48" height="3.48"/>
      <rect x="544.68" y="283.65" width="3.48" height="3.48"/>
      <rect x="548.16" y="283.65" width="3.48" height="3.48"/>
      <rect x="551.64" y="283.65" width="3.48" height="3.48"/>
      <rect x="537.72" y="287.13" width="3.48" height="3.48"/>
      <rect x="544.68" y="287.13" width="3.48" height="3.48"/>
      <rect x="548.16" y="287.13" width="3.48" height="3.48"/>
      <rect x="551.64" y="287.13" width="3.48" height="3.48"/>
      <rect x="551.64" y="290.61" width="3.48" height="3.48"/>
      <rect x="555.12" y="294.09" width="3.48" height="3.48"/>
    </g>
    <g id="KE" title="Kenya" class="land">
      <rect x="572.52" y="238.41" width="3.48" height="3.48"/>
      <rect x="572.52" y="241.89" width="3.48" height="3.48"/>
      <rect x="576" y="241.89" width="3.48" height="3.48"/>
      <rect x="579.48" y="241.89" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="241.89" width="3.48" height="3.48"/>
      <rect x="572.52" y="245.37" width="3.48" height="3.48"/>
      <rect x="576" y="245.37" width="3.48" height="3.48"/>
      <rect x="579.48" y="245.37" width="3.48" height="3.48"/>
      <rect x="582.96" y="245.37" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="245.37" width="3.48" height="3.48"/>
      <rect x="572.52" y="248.85" width="3.48" height="3.48"/>
      <rect x="576" y="248.85" width="3.48" height="3.48"/>
      <rect x="579.48" y="248.85" width="3.48" height="3.48"/>
      <rect x="582.96" y="248.85" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="248.85" width="3.48" height="3.48"/>
      <rect x="569.04" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="572.52" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="576" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="579.48" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="582.96" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="569.04" y="255.81" width="3.48" height="3.48"/>
      <rect x="572.52" y="255.81" width="3.48" height="3.48"/>
      <rect x="576" y="255.81" width="3.48" height="3.48"/>
      <rect x="579.48" y="255.81" width="3.48" height="3.48"/>
      <rect x="582.96" y="255.81" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="255.81" width="3.48" height="3.48"/>
      <rect x="576" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="579.48" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="582.96" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="579.48" y="262.77" width="3.48" height="3.48"/>
      <rect x="582.96" y="262.77" width="3.48" height="3.48"/>
      <rect x="582.96" y="266.25" width="3.48" height="3.48"/>
    </g>
    <g id="ID" title="Indonesia" class="land">
      <rect x="736.1" y="238.41" width="3.48" height="3.48"/>
      <rect x="739.58" y="238.41" width="3.48" height="3.48"/>
      <rect x="739.58" y="241.89" width="3.48" height="3.48"/>
      <rect x="743.06" y="241.89" width="3.48" height="3.48"/>
      <rect x="788.3" y="241.89" width="3.48" height="3.48"/>
      <rect x="791.78" y="241.89" width="3.48" height="3.48"/>
      <rect x="743.06" y="245.37" width="3.48" height="3.48"/>
      <rect x="746.54" y="245.37" width="3.48" height="3.48"/>
      <rect x="788.3" y="245.37" width="3.48" height="3.48"/>
      <rect x="791.78" y="245.37" width="3.48" height="3.48"/>
      <rect x="823.11" y="245.37" width="3.48" height="3.48"/>
      <rect x="739.58" y="248.85" width="3.48" height="3.48"/>
      <rect x="746.54" y="248.85" width="3.48" height="3.48"/>
      <rect x="750.02" y="248.85" width="3.48" height="3.48"/>
      <rect x="770.9" y="248.85" width="3.48" height="3.48"/>
      <rect x="781.34" y="248.85" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="248.85" width="3.48" height="3.48"/>
      <rect x="788.3" y="248.85" width="3.48" height="3.48"/>
      <rect x="791.78" y="248.85" width="3.48" height="3.48"/>
      <rect x="795.26" y="248.85" width="3.48" height="3.48"/>
      <rect x="812.66" y="248.85" width="3.48" height="3.48"/>
      <rect x="823.11" y="248.85" width="3.48" height="3.48"/>
      <rect x="746.54" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="750.02" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="753.5" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="774.38" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="777.86" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="781.34" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="788.3" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="791.78" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="743.06" y="255.81" width="3.48" height="3.48"/>
      <rect x="750.02" y="255.81" width="3.48" height="3.48"/>
      <rect x="753.5" y="255.81" width="3.48" height="3.48"/>
      <rect x="756.98" y="255.81" width="3.48" height="3.48"/>
      <rect x="774.38" y="255.81" width="3.48" height="3.48"/>
      <rect x="777.86" y="255.81" width="3.48" height="3.48"/>
      <rect x="781.34" y="255.81" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="255.81" width="3.48" height="3.48"/>
      <rect x="788.3" y="255.81" width="3.48" height="3.48"/>
      <rect x="791.78" y="255.81" width="3.48" height="3.48"/>
      <rect x="805.7" y="255.81" width="3.48" height="3.48"/>
      <rect x="809.18" y="255.81" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="255.81" width="3.48" height="3.48"/>
      <rect x="833.55" y="255.81" width="3.48" height="3.48"/>
      <rect x="837.03" y="255.81" width="3.48" height="3.48"/>
      <rect x="840.51" y="255.81" width="3.48" height="3.48"/>
      <rect x="750.02" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="753.5" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="756.98" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="774.38" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="777.86" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="781.34" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="788.3" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="798.74" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="802.22" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="816.15" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="833.55" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="837.03" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="847.47" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="850.95" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="753.5" y="262.77" width="3.48" height="3.48"/>
      <rect x="756.98" y="262.77" width="3.48" height="3.48"/>
      <rect x="760.46" y="262.77" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="262.77" width="3.48" height="3.48"/>
      <rect x="788.3" y="262.77" width="3.48" height="3.48"/>
      <rect x="798.74" y="262.77" width="3.48" height="3.48"/>
      <rect x="805.7" y="262.77" width="3.48" height="3.48"/>
      <rect x="823.11" y="262.77" width="3.48" height="3.48"/>
      <rect x="826.59" y="262.77" width="3.48" height="3.48"/>
      <rect x="843.99" y="262.77" width="3.48" height="3.48"/>
      <rect x="847.47" y="262.77" width="3.48" height="3.48"/>
      <rect x="850.95" y="262.77" width="3.48" height="3.48"/>
      <rect x="854.43" y="262.77" width="3.48" height="3.48"/>
      <rect x="756.98" y="266.25" width="3.48" height="3.48"/>
      <rect x="760.46" y="266.25" width="3.48" height="3.48"/>
      <rect x="805.7" y="266.25" width="3.48" height="3.48"/>
      <rect x="840.51" y="266.25" width="3.48" height="3.48"/>
      <rect x="843.99" y="266.25" width="3.48" height="3.48"/>
      <rect x="847.47" y="266.25" width="3.48" height="3.48"/>
      <rect x="850.95" y="266.25" width="3.48" height="3.48"/>
      <rect x="854.43" y="266.25" width="3.48" height="3.48"/>
      <rect x="760.46" y="269.73" width="3.48" height="3.48"/>
      <rect x="798.74" y="269.73" width="3.48" height="3.48"/>
      <rect x="850.95" y="269.73" width="3.48" height="3.48"/>
      <rect x="854.43" y="269.73" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="273.21" width="3.48" height="3.48"/>
      <rect x="767.42" y="273.21" width="3.48" height="3.48"/>
      <rect x="850.95" y="273.21" width="3.48" height="3.48"/>
      <rect x="854.43" y="273.21" width="3.48" height="3.48"/>
      <rect x="767.42" y="276.69" width="3.48" height="3.48"/>
      <rect x="770.9" y="276.69" width="3.48" height="3.48"/>
      <rect x="774.38" y="276.69" width="3.48" height="3.48"/>
      <rect x="777.86" y="276.69" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="276.69" width="3.48" height="3.48"/>
      <rect x="850.95" y="276.69" width="3.48" height="3.48"/>
      <rect x="854.43" y="276.69" width="3.48" height="3.48"/>
      <rect x="788.3" y="280.17" width="3.48" height="3.48"/>
      <rect x="791.78" y="280.17" width="3.48" height="3.48"/>
      <rect x="795.26" y="280.17" width="3.48" height="3.48"/>
      <rect x="802.22" y="280.17" width="3.48" height="3.48"/>
      <rect x="798.74" y="283.65" width="3.48" height="3.48"/>
      <rect x="809.18" y="283.65" width="3.48" height="3.48"/>
    </g>
    <g id="BN" title="Brunei" class="land">
      <rect x="784.8199999999999" y="238.41" width="3.48" height="3.48"/>
    </g>
    <g id="CG" title="Republic of Congo" class="land">
      <rect x="523.79" y="241.89" width="3.48" height="3.48"/>
      <rect x="523.79" y="245.37" width="3.48" height="3.48"/>
      <rect x="516.83" y="248.85" width="3.48" height="3.48"/>
      <rect x="520.31" y="248.85" width="3.48" height="3.48"/>
      <rect x="523.79" y="248.85" width="3.48" height="3.48"/>
      <rect x="516.83" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="520.31" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="523.79" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="516.83" y="255.81" width="3.48" height="3.48"/>
      <rect x="520.31" y="255.81" width="3.48" height="3.48"/>
      <rect x="516.83" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="520.31" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="509.87" y="262.77" width="3.48" height="3.48"/>
      <rect x="513.35" y="262.77" width="3.48" height="3.48"/>
      <rect x="516.83" y="262.77" width="3.48" height="3.48"/>
      <rect x="520.31" y="262.77" width="3.48" height="3.48"/>
      <rect x="509.87" y="266.25" width="3.48" height="3.48"/>
      <rect x="513.35" y="266.25" width="3.48" height="3.48"/>
      <rect x="516.83" y="266.25" width="3.48" height="3.48"/>
    </g>
    <g id="UG" title="Uganda" class="land">
      <rect x="562.08" y="241.89" width="3.48" height="3.48"/>
      <rect x="565.56" y="241.89" width="3.48" height="3.48"/>
      <rect x="569.04" y="241.89" width="3.48" height="3.48"/>
      <rect x="562.08" y="245.37" width="3.48" height="3.48"/>
      <rect x="565.56" y="245.37" width="3.48" height="3.48"/>
      <rect x="569.04" y="245.37" width="3.48" height="3.48"/>
      <rect x="562.08" y="248.85" width="3.48" height="3.48"/>
      <rect x="565.56" y="248.85" width="3.48" height="3.48"/>
      <rect x="569.04" y="248.85" width="3.48" height="3.48"/>
      <rect x="558.6" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="562.08" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="565.56" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="558.6" y="255.81" width="3.48" height="3.48"/>
      <rect x="562.08" y="255.81" width="3.48" height="3.48"/>
      <rect x="565.56" y="255.81" width="3.48" height="3.48"/>
    </g>
    <g id="GQ" title="Equatorial Guinea" class="land">
      <rect x="502.90999999999997" y="248.85" width="3.48" height="3.48"/>
      <rect x="506.39" y="248.85" width="3.48" height="3.48"/>
    </g>
    <g id="GA" title="Gabon" class="land">
      <rect x="509.87" y="248.85" width="3.48" height="3.48"/>
      <rect x="513.35" y="248.85" width="3.48" height="3.48"/>
      <rect x="506.39" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="509.87" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="513.35" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="255.81" width="3.48" height="3.48"/>
      <rect x="506.39" y="255.81" width="3.48" height="3.48"/>
      <rect x="509.87" y="255.81" width="3.48" height="3.48"/>
      <rect x="513.35" y="255.81" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="506.39" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="509.87" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="513.35" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="506.39" y="262.77" width="3.48" height="3.48"/>
    </g>
    <g id="EC" title="Ecuador" class="land">
      <rect x="262.77" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="266.25" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="269.73" y="252.32999999999998" width="3.48" height="3.48"/>
      <rect x="231.44" y="255.81" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="255.81" width="3.48" height="3.48"/>
      <rect x="262.77" y="255.81" width="3.48" height="3.48"/>
      <rect x="266.25" y="255.81" width="3.48" height="3.48"/>
      <rect x="269.73" y="255.81" width="3.48" height="3.48"/>
      <rect x="273.21" y="255.81" width="3.48" height="3.48"/>
      <rect x="262.77" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="266.25" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="269.73" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="262.77" y="262.77" width="3.48" height="3.48"/>
      <rect x="266.25" y="262.77" width="3.48" height="3.48"/>
      <rect x="262.77" y="266.25" width="3.48" height="3.48"/>
    </g>
    <g id="PE" title="Peru" class="land">
      <rect x="276.69" y="255.81" width="3.48" height="3.48"/>
      <rect x="273.21" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="276.69" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="269.73" y="262.77" width="3.48" height="3.48"/>
      <rect x="273.21" y="262.77" width="3.48" height="3.48"/>
      <rect x="276.69" y="262.77" width="3.48" height="3.48"/>
      <rect x="280.17" y="262.77" width="3.48" height="3.48"/>
      <rect x="283.65" y="262.77" width="3.48" height="3.48"/>
      <rect x="287.13" y="262.77" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="266.25" width="3.48" height="3.48"/>
      <rect x="266.25" y="266.25" width="3.48" height="3.48"/>
      <rect x="269.73" y="266.25" width="3.48" height="3.48"/>
      <rect x="273.21" y="266.25" width="3.48" height="3.48"/>
      <rect x="276.69" y="266.25" width="3.48" height="3.48"/>
      <rect x="280.17" y="266.25" width="3.48" height="3.48"/>
      <rect x="283.65" y="266.25" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="269.73" width="3.48" height="3.48"/>
      <rect x="262.77" y="269.73" width="3.48" height="3.48"/>
      <rect x="266.25" y="269.73" width="3.48" height="3.48"/>
      <rect x="269.73" y="269.73" width="3.48" height="3.48"/>
      <rect x="273.21" y="269.73" width="3.48" height="3.48"/>
      <rect x="276.69" y="269.73" width="3.48" height="3.48"/>
      <rect x="280.17" y="269.73" width="3.48" height="3.48"/>
      <rect x="262.77" y="273.21" width="3.48" height="3.48"/>
      <rect x="266.25" y="273.21" width="3.48" height="3.48"/>
      <rect x="269.73" y="273.21" width="3.48" height="3.48"/>
      <rect x="273.21" y="273.21" width="3.48" height="3.48"/>
      <rect x="276.69" y="273.21" width="3.48" height="3.48"/>
      <rect x="266.25" y="276.69" width="3.48" height="3.48"/>
      <rect x="269.73" y="276.69" width="3.48" height="3.48"/>
      <rect x="273.21" y="276.69" width="3.48" height="3.48"/>
      <rect x="276.69" y="276.69" width="3.48" height="3.48"/>
      <rect x="266.25" y="280.17" width="3.48" height="3.48"/>
      <rect x="269.73" y="280.17" width="3.48" height="3.48"/>
      <rect x="273.21" y="280.17" width="3.48" height="3.48"/>
      <rect x="276.69" y="280.17" width="3.48" height="3.48"/>
      <rect x="280.17" y="280.17" width="3.48" height="3.48"/>
      <rect x="269.73" y="283.65" width="3.48" height="3.48"/>
      <rect x="273.21" y="283.65" width="3.48" height="3.48"/>
      <rect x="276.69" y="283.65" width="3.48" height="3.48"/>
      <rect x="280.17" y="283.65" width="3.48" height="3.48"/>
      <rect x="287.13" y="283.65" width="3.48" height="3.48"/>
      <rect x="269.73" y="287.13" width="3.48" height="3.48"/>
      <rect x="273.21" y="287.13" width="3.48" height="3.48"/>
      <rect x="276.69" y="287.13" width="3.48" height="3.48"/>
      <rect x="280.17" y="287.13" width="3.48" height="3.48"/>
      <rect x="283.65" y="287.13" width="3.48" height="3.48"/>
      <rect x="287.13" y="287.13" width="3.48" height="3.48"/>
      <rect x="290.61" y="287.13" width="3.48" height="3.48"/>
      <rect x="273.21" y="290.61" width="3.48" height="3.48"/>
      <rect x="276.69" y="290.61" width="3.48" height="3.48"/>
      <rect x="280.17" y="290.61" width="3.48" height="3.48"/>
      <rect x="283.65" y="290.61" width="3.48" height="3.48"/>
      <rect x="287.13" y="290.61" width="3.48" height="3.48"/>
      <rect x="290.61" y="290.61" width="3.48" height="3.48"/>
      <rect x="273.21" y="294.09" width="3.48" height="3.48"/>
      <rect x="276.69" y="294.09" width="3.48" height="3.48"/>
      <rect x="280.17" y="294.09" width="3.48" height="3.48"/>
      <rect x="283.65" y="294.09" width="3.48" height="3.48"/>
      <rect x="287.13" y="294.09" width="3.48" height="3.48"/>
      <rect x="290.61" y="294.09" width="3.48" height="3.48"/>
      <rect x="276.69" y="297.57" width="3.48" height="3.48"/>
      <rect x="280.17" y="297.57" width="3.48" height="3.48"/>
      <rect x="283.65" y="297.57" width="3.48" height="3.48"/>
      <rect x="287.13" y="297.57" width="3.48" height="3.48"/>
      <rect x="290.61" y="297.57" width="3.48" height="3.48"/>
      <rect x="280.17" y="301.05" width="3.48" height="3.48"/>
      <rect x="283.65" y="301.05" width="3.48" height="3.48"/>
      <rect x="287.13" y="301.05" width="3.48" height="3.48"/>
      <rect x="290.61" y="301.05" width="3.48" height="3.48"/>
      <rect x="283.65" y="304.53" width="3.48" height="3.48"/>
      <rect x="287.13" y="304.53" width="3.48" height="3.48"/>
      <rect x="290.61" y="304.53" width="3.48" height="3.48"/>
      <rect x="290.61" y="308.01" width="3.48" height="3.48"/>
    </g>
    <g id="RW" title="Rwanda" class="land">
      <rect x="558.6" y="259.28999999999996" width="3.48" height="3.48"/>
    </g>
    <g id="TZ" title="Tanzania" class="land">
      <rect x="562.08" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="565.56" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="569.04" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="572.52" y="259.28999999999996" width="3.48" height="3.48"/>
      <rect x="562.08" y="262.77" width="3.48" height="3.48"/>
      <rect x="565.56" y="262.77" width="3.48" height="3.48"/>
      <rect x="569.04" y="262.77" width="3.48" height="3.48"/>
      <rect x="572.52" y="262.77" width="3.48" height="3.48"/>
      <rect x="576" y="262.77" width="3.48" height="3.48"/>
      <rect x="558.6" y="266.25" width="3.48" height="3.48"/>
      <rect x="562.08" y="266.25" width="3.48" height="3.48"/>
      <rect x="565.56" y="266.25" width="3.48" height="3.48"/>
      <rect x="569.04" y="266.25" width="3.48" height="3.48"/>
      <rect x="572.52" y="266.25" width="3.48" height="3.48"/>
      <rect x="576" y="266.25" width="3.48" height="3.48"/>
      <rect x="579.48" y="266.25" width="3.48" height="3.48"/>
      <rect x="558.6" y="269.73" width="3.48" height="3.48"/>
      <rect x="562.08" y="269.73" width="3.48" height="3.48"/>
      <rect x="565.56" y="269.73" width="3.48" height="3.48"/>
      <rect x="569.04" y="269.73" width="3.48" height="3.48"/>
      <rect x="572.52" y="269.73" width="3.48" height="3.48"/>
      <rect x="576" y="269.73" width="3.48" height="3.48"/>
      <rect x="579.48" y="269.73" width="3.48" height="3.48"/>
      <rect x="558.6" y="273.21" width="3.48" height="3.48"/>
      <rect x="562.08" y="273.21" width="3.48" height="3.48"/>
      <rect x="565.56" y="273.21" width="3.48" height="3.48"/>
      <rect x="569.04" y="273.21" width="3.48" height="3.48"/>
      <rect x="572.52" y="273.21" width="3.48" height="3.48"/>
      <rect x="576" y="273.21" width="3.48" height="3.48"/>
      <rect x="579.48" y="273.21" width="3.48" height="3.48"/>
      <rect x="562.08" y="276.69" width="3.48" height="3.48"/>
      <rect x="565.56" y="276.69" width="3.48" height="3.48"/>
      <rect x="569.04" y="276.69" width="3.48" height="3.48"/>
      <rect x="572.52" y="276.69" width="3.48" height="3.48"/>
      <rect x="576" y="276.69" width="3.48" height="3.48"/>
      <rect x="579.48" y="276.69" width="3.48" height="3.48"/>
      <rect x="562.08" y="280.17" width="3.48" height="3.48"/>
      <rect x="565.56" y="280.17" width="3.48" height="3.48"/>
      <rect x="569.04" y="280.17" width="3.48" height="3.48"/>
      <rect x="572.52" y="280.17" width="3.48" height="3.48"/>
      <rect x="576" y="280.17" width="3.48" height="3.48"/>
      <rect x="579.48" y="280.17" width="3.48" height="3.48"/>
      <rect x="572.52" y="283.65" width="3.48" height="3.48"/>
      <rect x="576" y="283.65" width="3.48" height="3.48"/>
      <rect x="579.48" y="283.65" width="3.48" height="3.48"/>
      <rect x="582.96" y="283.65" width="3.48" height="3.48"/>
      <rect x="572.52" y="287.13" width="3.48" height="3.48"/>
      <rect x="576" y="287.13" width="3.48" height="3.48"/>
      <rect x="579.48" y="287.13" width="3.48" height="3.48"/>
    </g>
    <g id="BI" title="Burundi" class="land">
      <rect x="558.6" y="262.77" width="3.48" height="3.48"/>
    </g>
    <g id="PG" title="Papua New Guinea" class="land">
      <rect x="857.91" y="262.77" width="3.48" height="3.48"/>
      <rect x="885.75" y="262.77" width="3.48" height="3.48"/>
      <rect x="857.91" y="266.25" width="3.48" height="3.48"/>
      <rect x="861.39" y="266.25" width="3.48" height="3.48"/>
      <rect x="864.87" y="266.25" width="3.48" height="3.48"/>
      <rect x="885.75" y="266.25" width="3.48" height="3.48"/>
      <rect x="857.91" y="269.73" width="3.48" height="3.48"/>
      <rect x="861.39" y="269.73" width="3.48" height="3.48"/>
      <rect x="864.87" y="269.73" width="3.48" height="3.48"/>
      <rect x="868.35" y="269.73" width="3.48" height="3.48"/>
      <rect x="885.75" y="269.73" width="3.48" height="3.48"/>
      <rect x="857.91" y="273.21" width="3.48" height="3.48"/>
      <rect x="861.39" y="273.21" width="3.48" height="3.48"/>
      <rect x="864.87" y="273.21" width="3.48" height="3.48"/>
      <rect x="868.35" y="273.21" width="3.48" height="3.48"/>
      <rect x="871.83" y="273.21" width="3.48" height="3.48"/>
      <rect x="896.1899999999999" y="273.21" width="3.48" height="3.48"/>
      <rect x="857.91" y="276.69" width="3.48" height="3.48"/>
      <rect x="861.39" y="276.69" width="3.48" height="3.48"/>
      <rect x="868.35" y="276.69" width="3.48" height="3.48"/>
      <rect x="871.83" y="276.69" width="3.48" height="3.48"/>
      <rect x="857.91" y="280.17" width="3.48" height="3.48"/>
      <rect x="861.39" y="280.17" width="3.48" height="3.48"/>
      <rect x="871.83" y="280.17" width="3.48" height="3.48"/>
      <rect x="875.31" y="280.17" width="3.48" height="3.48"/>
      <rect x="875.31" y="283.65" width="3.48" height="3.48"/>
    </g>
    <g id="AO" title="Angola" class="land">
      <rect x="509.87" y="269.73" width="3.48" height="3.48"/>
      <rect x="513.35" y="273.21" width="3.48" height="3.48"/>
      <rect x="516.83" y="273.21" width="3.48" height="3.48"/>
      <rect x="520.31" y="273.21" width="3.48" height="3.48"/>
      <rect x="513.35" y="276.69" width="3.48" height="3.48"/>
      <rect x="516.83" y="276.69" width="3.48" height="3.48"/>
      <rect x="520.31" y="276.69" width="3.48" height="3.48"/>
      <rect x="530.76" y="276.69" width="3.48" height="3.48"/>
      <rect x="534.24" y="276.69" width="3.48" height="3.48"/>
      <rect x="513.35" y="280.17" width="3.48" height="3.48"/>
      <rect x="516.83" y="280.17" width="3.48" height="3.48"/>
      <rect x="520.31" y="280.17" width="3.48" height="3.48"/>
      <rect x="523.79" y="280.17" width="3.48" height="3.48"/>
      <rect x="527.28" y="280.17" width="3.48" height="3.48"/>
      <rect x="530.76" y="280.17" width="3.48" height="3.48"/>
      <rect x="534.24" y="280.17" width="3.48" height="3.48"/>
      <rect x="513.35" y="283.65" width="3.48" height="3.48"/>
      <rect x="516.83" y="283.65" width="3.48" height="3.48"/>
      <rect x="520.31" y="283.65" width="3.48" height="3.48"/>
      <rect x="523.79" y="283.65" width="3.48" height="3.48"/>
      <rect x="527.28" y="283.65" width="3.48" height="3.48"/>
      <rect x="530.76" y="283.65" width="3.48" height="3.48"/>
      <rect x="534.24" y="283.65" width="3.48" height="3.48"/>
      <rect x="516.83" y="287.13" width="3.48" height="3.48"/>
      <rect x="520.31" y="287.13" width="3.48" height="3.48"/>
      <rect x="523.79" y="287.13" width="3.48" height="3.48"/>
      <rect x="527.28" y="287.13" width="3.48" height="3.48"/>
      <rect x="530.76" y="287.13" width="3.48" height="3.48"/>
      <rect x="534.24" y="287.13" width="3.48" height="3.48"/>
      <rect x="541.2" y="287.13" width="3.48" height="3.48"/>
      <rect x="516.83" y="290.61" width="3.48" height="3.48"/>
      <rect x="520.31" y="290.61" width="3.48" height="3.48"/>
      <rect x="523.79" y="290.61" width="3.48" height="3.48"/>
      <rect x="527.28" y="290.61" width="3.48" height="3.48"/>
      <rect x="530.76" y="290.61" width="3.48" height="3.48"/>
      <rect x="534.24" y="290.61" width="3.48" height="3.48"/>
      <rect x="537.72" y="290.61" width="3.48" height="3.48"/>
      <rect x="513.35" y="294.09" width="3.48" height="3.48"/>
      <rect x="516.83" y="294.09" width="3.48" height="3.48"/>
      <rect x="520.31" y="294.09" width="3.48" height="3.48"/>
      <rect x="523.79" y="294.09" width="3.48" height="3.48"/>
      <rect x="527.28" y="294.09" width="3.48" height="3.48"/>
      <rect x="530.76" y="294.09" width="3.48" height="3.48"/>
      <rect x="534.24" y="294.09" width="3.48" height="3.48"/>
      <rect x="513.35" y="297.57" width="3.48" height="3.48"/>
      <rect x="516.83" y="297.57" width="3.48" height="3.48"/>
      <rect x="520.31" y="297.57" width="3.48" height="3.48"/>
      <rect x="523.79" y="297.57" width="3.48" height="3.48"/>
      <rect x="527.28" y="297.57" width="3.48" height="3.48"/>
      <rect x="530.76" y="297.57" width="3.48" height="3.48"/>
      <rect x="534.24" y="297.57" width="3.48" height="3.48"/>
      <rect x="509.87" y="301.05" width="3.48" height="3.48"/>
      <rect x="513.35" y="301.05" width="3.48" height="3.48"/>
      <rect x="516.83" y="301.05" width="3.48" height="3.48"/>
      <rect x="520.31" y="301.05" width="3.48" height="3.48"/>
      <rect x="523.79" y="301.05" width="3.48" height="3.48"/>
      <rect x="527.28" y="301.05" width="3.48" height="3.48"/>
      <rect x="530.76" y="301.05" width="3.48" height="3.48"/>
      <rect x="534.24" y="301.05" width="3.48" height="3.48"/>
      <rect x="509.87" y="304.53" width="3.48" height="3.48"/>
      <rect x="513.35" y="304.53" width="3.48" height="3.48"/>
      <rect x="516.83" y="304.53" width="3.48" height="3.48"/>
      <rect x="520.31" y="304.53" width="3.48" height="3.48"/>
      <rect x="523.79" y="304.53" width="3.48" height="3.48"/>
      <rect x="527.28" y="304.53" width="3.48" height="3.48"/>
      <rect x="530.76" y="304.53" width="3.48" height="3.48"/>
      <rect x="534.24" y="304.53" width="3.48" height="3.48"/>
      <rect x="527.28" y="308.01" width="3.48" height="3.48"/>
      <rect x="530.76" y="308.01" width="3.48" height="3.48"/>
      <rect x="534.24" y="308.01" width="3.48" height="3.48"/>
      <rect x="537.72" y="308.01" width="3.48" height="3.48"/>
    </g>
    <g id="SB" title="Solomon Islands" class="land">
      <rect x="903.15" y="276.69" width="3.48" height="3.48"/>
    </g>
    <g id="ZM" title="Zambia" class="land">
      <rect x="555.12" y="280.17" width="3.48" height="3.48"/>
      <rect x="558.6" y="280.17" width="3.48" height="3.48"/>
      <rect x="555.12" y="283.65" width="3.48" height="3.48"/>
      <rect x="558.6" y="283.65" width="3.48" height="3.48"/>
      <rect x="562.08" y="283.65" width="3.48" height="3.48"/>
      <rect x="565.56" y="283.65" width="3.48" height="3.48"/>
      <rect x="555.12" y="287.13" width="3.48" height="3.48"/>
      <rect x="558.6" y="287.13" width="3.48" height="3.48"/>
      <rect x="562.08" y="287.13" width="3.48" height="3.48"/>
      <rect x="565.56" y="287.13" width="3.48" height="3.48"/>
      <rect x="541.2" y="290.61" width="3.48" height="3.48"/>
      <rect x="544.68" y="290.61" width="3.48" height="3.48"/>
      <rect x="548.16" y="290.61" width="3.48" height="3.48"/>
      <rect x="555.12" y="290.61" width="3.48" height="3.48"/>
      <rect x="558.6" y="290.61" width="3.48" height="3.48"/>
      <rect x="562.08" y="290.61" width="3.48" height="3.48"/>
      <rect x="565.56" y="290.61" width="3.48" height="3.48"/>
      <rect x="537.72" y="294.09" width="3.48" height="3.48"/>
      <rect x="541.2" y="294.09" width="3.48" height="3.48"/>
      <rect x="544.68" y="294.09" width="3.48" height="3.48"/>
      <rect x="548.16" y="294.09" width="3.48" height="3.48"/>
      <rect x="551.64" y="294.09" width="3.48" height="3.48"/>
      <rect x="558.6" y="294.09" width="3.48" height="3.48"/>
      <rect x="562.08" y="294.09" width="3.48" height="3.48"/>
      <rect x="537.72" y="297.57" width="3.48" height="3.48"/>
      <rect x="541.2" y="297.57" width="3.48" height="3.48"/>
      <rect x="544.68" y="297.57" width="3.48" height="3.48"/>
      <rect x="548.16" y="297.57" width="3.48" height="3.48"/>
      <rect x="551.64" y="297.57" width="3.48" height="3.48"/>
      <rect x="555.12" y="297.57" width="3.48" height="3.48"/>
      <rect x="558.6" y="297.57" width="3.48" height="3.48"/>
      <rect x="562.08" y="297.57" width="3.48" height="3.48"/>
      <rect x="537.72" y="301.05" width="3.48" height="3.48"/>
      <rect x="541.2" y="301.05" width="3.48" height="3.48"/>
      <rect x="544.68" y="301.05" width="3.48" height="3.48"/>
      <rect x="548.16" y="301.05" width="3.48" height="3.48"/>
      <rect x="551.64" y="301.05" width="3.48" height="3.48"/>
      <rect x="555.12" y="301.05" width="3.48" height="3.48"/>
      <rect x="537.72" y="304.53" width="3.48" height="3.48"/>
      <rect x="541.2" y="304.53" width="3.48" height="3.48"/>
      <rect x="544.68" y="304.53" width="3.48" height="3.48"/>
      <rect x="548.16" y="304.53" width="3.48" height="3.48"/>
      <rect x="551.64" y="304.53" width="3.48" height="3.48"/>
      <rect x="544.68" y="308.01" width="3.48" height="3.48"/>
      <rect x="548.16" y="308.01" width="3.48" height="3.48"/>
    </g>
    <g id="TL" title="Timor-Leste" class="land">
      <rect x="816.15" y="280.17" width="3.48" height="3.48"/>
    </g>
    <g id="BO" title="Bolivia" class="land">
      <rect x="301.05" y="283.65" width="3.48" height="3.48"/>
      <rect x="294.09" y="287.13" width="3.48" height="3.48"/>
      <rect x="297.57" y="287.13" width="3.48" height="3.48"/>
      <rect x="301.05" y="287.13" width="3.48" height="3.48"/>
      <rect x="294.09" y="290.61" width="3.48" height="3.48"/>
      <rect x="297.57" y="290.61" width="3.48" height="3.48"/>
      <rect x="301.05" y="290.61" width="3.48" height="3.48"/>
      <rect x="294.09" y="294.09" width="3.48" height="3.48"/>
      <rect x="297.57" y="294.09" width="3.48" height="3.48"/>
      <rect x="301.05" y="294.09" width="3.48" height="3.48"/>
      <rect x="304.53" y="294.09" width="3.48" height="3.48"/>
      <rect x="308.01" y="294.09" width="3.48" height="3.48"/>
      <rect x="294.09" y="297.57" width="3.48" height="3.48"/>
      <rect x="297.57" y="297.57" width="3.48" height="3.48"/>
      <rect x="301.05" y="297.57" width="3.48" height="3.48"/>
      <rect x="304.53" y="297.57" width="3.48" height="3.48"/>
      <rect x="308.01" y="297.57" width="3.48" height="3.48"/>
      <rect x="311.49" y="297.57" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="297.57" width="3.48" height="3.48"/>
      <rect x="294.09" y="301.05" width="3.48" height="3.48"/>
      <rect x="297.57" y="301.05" width="3.48" height="3.48"/>
      <rect x="301.05" y="301.05" width="3.48" height="3.48"/>
      <rect x="304.53" y="301.05" width="3.48" height="3.48"/>
      <rect x="308.01" y="301.05" width="3.48" height="3.48"/>
      <rect x="311.49" y="301.05" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="301.05" width="3.48" height="3.48"/>
      <rect x="294.09" y="304.53" width="3.48" height="3.48"/>
      <rect x="297.57" y="304.53" width="3.48" height="3.48"/>
      <rect x="301.05" y="304.53" width="3.48" height="3.48"/>
      <rect x="304.53" y="304.53" width="3.48" height="3.48"/>
      <rect x="308.01" y="304.53" width="3.48" height="3.48"/>
      <rect x="311.49" y="304.53" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="304.53" width="3.48" height="3.48"/>
      <rect x="318.45" y="304.53" width="3.48" height="3.48"/>
      <rect x="294.09" y="308.01" width="3.48" height="3.48"/>
      <rect x="297.57" y="308.01" width="3.48" height="3.48"/>
      <rect x="301.05" y="308.01" width="3.48" height="3.48"/>
      <rect x="304.53" y="308.01" width="3.48" height="3.48"/>
      <rect x="308.01" y="308.01" width="3.48" height="3.48"/>
      <rect x="311.49" y="308.01" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="308.01" width="3.48" height="3.48"/>
      <rect x="318.45" y="308.01" width="3.48" height="3.48"/>
      <rect x="321.93" y="308.01" width="3.48" height="3.48"/>
      <rect x="297.57" y="311.49" width="3.48" height="3.48"/>
      <rect x="301.05" y="311.49" width="3.48" height="3.48"/>
      <rect x="304.53" y="311.49" width="3.48" height="3.48"/>
      <rect x="308.01" y="311.49" width="3.48" height="3.48"/>
      <rect x="311.49" y="311.49" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="311.49" width="3.48" height="3.48"/>
      <rect x="318.45" y="311.49" width="3.48" height="3.48"/>
      <rect x="321.93" y="311.49" width="3.48" height="3.48"/>
      <rect x="297.57" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="318.45" width="3.48" height="3.48"/>
      <rect x="301.05" y="318.45" width="3.48" height="3.48"/>
      <rect x="304.53" y="318.45" width="3.48" height="3.48"/>
      <rect x="308.01" y="318.45" width="3.48" height="3.48"/>
      <rect x="311.49" y="318.45" width="3.48" height="3.48"/>
      <rect x="301.05" y="321.93" width="3.48" height="3.48"/>
      <rect x="308.01" y="321.93" width="3.48" height="3.48"/>
    </g>
    <g id="MW" title="Malawi" class="land">
      <rect x="569.04" y="283.65" width="3.48" height="3.48"/>
      <rect x="569.04" y="287.13" width="3.48" height="3.48"/>
      <rect x="565.56" y="294.09" width="3.48" height="3.48"/>
      <rect x="569.04" y="294.09" width="3.48" height="3.48"/>
      <rect x="569.04" y="297.57" width="3.48" height="3.48"/>
      <rect x="569.04" y="301.05" width="3.48" height="3.48"/>
    </g>
    <g id="MZ" title="Mozambique" class="land">
      <rect x="582.96" y="287.13" width="3.48" height="3.48"/>
      <rect x="569.04" y="290.61" width="3.48" height="3.48"/>
      <rect x="572.52" y="290.61" width="3.48" height="3.48"/>
      <rect x="576" y="290.61" width="3.48" height="3.48"/>
      <rect x="579.48" y="290.61" width="3.48" height="3.48"/>
      <rect x="582.96" y="290.61" width="3.48" height="3.48"/>
      <rect x="572.52" y="294.09" width="3.48" height="3.48"/>
      <rect x="576" y="294.09" width="3.48" height="3.48"/>
      <rect x="579.48" y="294.09" width="3.48" height="3.48"/>
      <rect x="582.96" y="294.09" width="3.48" height="3.48"/>
      <rect x="565.56" y="297.57" width="3.48" height="3.48"/>
      <rect x="572.52" y="297.57" width="3.48" height="3.48"/>
      <rect x="576" y="297.57" width="3.48" height="3.48"/>
      <rect x="579.48" y="297.57" width="3.48" height="3.48"/>
      <rect x="582.96" y="297.57" width="3.48" height="3.48"/>
      <rect x="558.6" y="301.05" width="3.48" height="3.48"/>
      <rect x="562.08" y="301.05" width="3.48" height="3.48"/>
      <rect x="565.56" y="301.05" width="3.48" height="3.48"/>
      <rect x="572.52" y="301.05" width="3.48" height="3.48"/>
      <rect x="576" y="301.05" width="3.48" height="3.48"/>
      <rect x="579.48" y="301.05" width="3.48" height="3.48"/>
      <rect x="582.96" y="301.05" width="3.48" height="3.48"/>
      <rect x="565.56" y="304.53" width="3.48" height="3.48"/>
      <rect x="569.04" y="304.53" width="3.48" height="3.48"/>
      <rect x="572.52" y="304.53" width="3.48" height="3.48"/>
      <rect x="576" y="304.53" width="3.48" height="3.48"/>
      <rect x="579.48" y="304.53" width="3.48" height="3.48"/>
      <rect x="565.56" y="308.01" width="3.48" height="3.48"/>
      <rect x="569.04" y="308.01" width="3.48" height="3.48"/>
      <rect x="572.52" y="308.01" width="3.48" height="3.48"/>
      <rect x="576" y="308.01" width="3.48" height="3.48"/>
      <rect x="565.56" y="311.49" width="3.48" height="3.48"/>
      <rect x="569.04" y="311.49" width="3.48" height="3.48"/>
      <rect x="572.52" y="311.49" width="3.48" height="3.48"/>
      <rect x="565.56" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="565.56" y="318.45" width="3.48" height="3.48"/>
      <rect x="569.04" y="318.45" width="3.48" height="3.48"/>
      <rect x="562.08" y="321.93" width="3.48" height="3.48"/>
      <rect x="565.56" y="321.93" width="3.48" height="3.48"/>
      <rect x="569.04" y="321.93" width="3.48" height="3.48"/>
      <rect x="562.08" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="565.56" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="569.04" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="562.08" y="328.89" width="3.48" height="3.48"/>
      <rect x="565.56" y="328.89" width="3.48" height="3.48"/>
      <rect x="569.04" y="328.89" width="3.48" height="3.48"/>
      <rect x="562.08" y="332.37" width="3.48" height="3.48"/>
      <rect x="562.08" y="335.86" width="3.48" height="3.48"/>
    </g>
    <g id="AU" title="Australia" class="land">
      <rect x="857.91" y="287.13" width="3.48" height="3.48"/>
      <rect x="833.55" y="290.61" width="3.48" height="3.48"/>
      <rect x="837.03" y="290.61" width="3.48" height="3.48"/>
      <rect x="857.91" y="290.61" width="3.48" height="3.48"/>
      <rect x="826.59" y="294.09" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="294.09" width="3.48" height="3.48"/>
      <rect x="833.55" y="294.09" width="3.48" height="3.48"/>
      <rect x="837.03" y="294.09" width="3.48" height="3.48"/>
      <rect x="840.51" y="294.09" width="3.48" height="3.48"/>
      <rect x="857.91" y="294.09" width="3.48" height="3.48"/>
      <rect x="816.15" y="297.57" width="3.48" height="3.48"/>
      <rect x="823.11" y="297.57" width="3.48" height="3.48"/>
      <rect x="826.59" y="297.57" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="297.57" width="3.48" height="3.48"/>
      <rect x="833.55" y="297.57" width="3.48" height="3.48"/>
      <rect x="837.03" y="297.57" width="3.48" height="3.48"/>
      <rect x="857.91" y="297.57" width="3.48" height="3.48"/>
      <rect x="809.18" y="301.05" width="3.48" height="3.48"/>
      <rect x="812.66" y="301.05" width="3.48" height="3.48"/>
      <rect x="816.15" y="301.05" width="3.48" height="3.48"/>
      <rect x="819.63" y="301.05" width="3.48" height="3.48"/>
      <rect x="823.11" y="301.05" width="3.48" height="3.48"/>
      <rect x="826.59" y="301.05" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="301.05" width="3.48" height="3.48"/>
      <rect x="833.55" y="301.05" width="3.48" height="3.48"/>
      <rect x="837.03" y="301.05" width="3.48" height="3.48"/>
      <rect x="854.43" y="301.05" width="3.48" height="3.48"/>
      <rect x="857.91" y="301.05" width="3.48" height="3.48"/>
      <rect x="861.39" y="301.05" width="3.48" height="3.48"/>
      <rect x="805.7" y="304.53" width="3.48" height="3.48"/>
      <rect x="809.18" y="304.53" width="3.48" height="3.48"/>
      <rect x="812.66" y="304.53" width="3.48" height="3.48"/>
      <rect x="816.15" y="304.53" width="3.48" height="3.48"/>
      <rect x="819.63" y="304.53" width="3.48" height="3.48"/>
      <rect x="823.11" y="304.53" width="3.48" height="3.48"/>
      <rect x="826.59" y="304.53" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="304.53" width="3.48" height="3.48"/>
      <rect x="833.55" y="304.53" width="3.48" height="3.48"/>
      <rect x="837.03" y="304.53" width="3.48" height="3.48"/>
      <rect x="840.51" y="304.53" width="3.48" height="3.48"/>
      <rect x="843.99" y="304.53" width="3.48" height="3.48"/>
      <rect x="847.47" y="304.53" width="3.48" height="3.48"/>
      <rect x="854.43" y="304.53" width="3.48" height="3.48"/>
      <rect x="857.91" y="304.53" width="3.48" height="3.48"/>
      <rect x="861.39" y="304.53" width="3.48" height="3.48"/>
      <rect x="802.22" y="308.01" width="3.48" height="3.48"/>
      <rect x="805.7" y="308.01" width="3.48" height="3.48"/>
      <rect x="809.18" y="308.01" width="3.48" height="3.48"/>
      <rect x="812.66" y="308.01" width="3.48" height="3.48"/>
      <rect x="816.15" y="308.01" width="3.48" height="3.48"/>
      <rect x="819.63" y="308.01" width="3.48" height="3.48"/>
      <rect x="823.11" y="308.01" width="3.48" height="3.48"/>
      <rect x="826.59" y="308.01" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="308.01" width="3.48" height="3.48"/>
      <rect x="833.55" y="308.01" width="3.48" height="3.48"/>
      <rect x="837.03" y="308.01" width="3.48" height="3.48"/>
      <rect x="840.51" y="308.01" width="3.48" height="3.48"/>
      <rect x="843.99" y="308.01" width="3.48" height="3.48"/>
      <rect x="847.47" y="308.01" width="3.48" height="3.48"/>
      <rect x="850.95" y="308.01" width="3.48" height="3.48"/>
      <rect x="854.43" y="308.01" width="3.48" height="3.48"/>
      <rect x="857.91" y="308.01" width="3.48" height="3.48"/>
      <rect x="861.39" y="308.01" width="3.48" height="3.48"/>
      <rect x="864.87" y="308.01" width="3.48" height="3.48"/>
      <rect x="802.22" y="311.49" width="3.48" height="3.48"/>
      <rect x="805.7" y="311.49" width="3.48" height="3.48"/>
      <rect x="809.18" y="311.49" width="3.48" height="3.48"/>
      <rect x="812.66" y="311.49" width="3.48" height="3.48"/>
      <rect x="816.15" y="311.49" width="3.48" height="3.48"/>
      <rect x="819.63" y="311.49" width="3.48" height="3.48"/>
      <rect x="823.11" y="311.49" width="3.48" height="3.48"/>
      <rect x="826.59" y="311.49" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="311.49" width="3.48" height="3.48"/>
      <rect x="833.55" y="311.49" width="3.48" height="3.48"/>
      <rect x="837.03" y="311.49" width="3.48" height="3.48"/>
      <rect x="840.51" y="311.49" width="3.48" height="3.48"/>
      <rect x="843.99" y="311.49" width="3.48" height="3.48"/>
      <rect x="847.47" y="311.49" width="3.48" height="3.48"/>
      <rect x="850.95" y="311.49" width="3.48" height="3.48"/>
      <rect x="854.43" y="311.49" width="3.48" height="3.48"/>
      <rect x="857.91" y="311.49" width="3.48" height="3.48"/>
      <rect x="861.39" y="311.49" width="3.48" height="3.48"/>
      <rect x="795.26" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="798.74" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="802.22" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="805.7" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="809.18" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="812.66" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="816.15" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="819.63" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="823.11" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="826.59" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="833.55" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="840.51" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="843.99" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="847.47" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="850.95" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="854.43" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="857.91" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="861.39" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="864.87" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="868.35" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="318.45" width="3.48" height="3.48"/>
      <rect x="788.3" y="318.45" width="3.48" height="3.48"/>
      <rect x="791.78" y="318.45" width="3.48" height="3.48"/>
      <rect x="795.26" y="318.45" width="3.48" height="3.48"/>
      <rect x="798.74" y="318.45" width="3.48" height="3.48"/>
      <rect x="802.22" y="318.45" width="3.48" height="3.48"/>
      <rect x="805.7" y="318.45" width="3.48" height="3.48"/>
      <rect x="809.18" y="318.45" width="3.48" height="3.48"/>
      <rect x="812.66" y="318.45" width="3.48" height="3.48"/>
      <rect x="816.15" y="318.45" width="3.48" height="3.48"/>
      <rect x="819.63" y="318.45" width="3.48" height="3.48"/>
      <rect x="823.11" y="318.45" width="3.48" height="3.48"/>
      <rect x="826.59" y="318.45" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="318.45" width="3.48" height="3.48"/>
      <rect x="833.55" y="318.45" width="3.48" height="3.48"/>
      <rect x="837.03" y="318.45" width="3.48" height="3.48"/>
      <rect x="840.51" y="318.45" width="3.48" height="3.48"/>
      <rect x="843.99" y="318.45" width="3.48" height="3.48"/>
      <rect x="847.47" y="318.45" width="3.48" height="3.48"/>
      <rect x="850.95" y="318.45" width="3.48" height="3.48"/>
      <rect x="854.43" y="318.45" width="3.48" height="3.48"/>
      <rect x="857.91" y="318.45" width="3.48" height="3.48"/>
      <rect x="861.39" y="318.45" width="3.48" height="3.48"/>
      <rect x="864.87" y="318.45" width="3.48" height="3.48"/>
      <rect x="868.35" y="318.45" width="3.48" height="3.48"/>
      <rect x="781.34" y="321.93" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="321.93" width="3.48" height="3.48"/>
      <rect x="788.3" y="321.93" width="3.48" height="3.48"/>
      <rect x="791.78" y="321.93" width="3.48" height="3.48"/>
      <rect x="795.26" y="321.93" width="3.48" height="3.48"/>
      <rect x="798.74" y="321.93" width="3.48" height="3.48"/>
      <rect x="802.22" y="321.93" width="3.48" height="3.48"/>
      <rect x="805.7" y="321.93" width="3.48" height="3.48"/>
      <rect x="809.18" y="321.93" width="3.48" height="3.48"/>
      <rect x="812.66" y="321.93" width="3.48" height="3.48"/>
      <rect x="816.15" y="321.93" width="3.48" height="3.48"/>
      <rect x="819.63" y="321.93" width="3.48" height="3.48"/>
      <rect x="823.11" y="321.93" width="3.48" height="3.48"/>
      <rect x="826.59" y="321.93" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="321.93" width="3.48" height="3.48"/>
      <rect x="833.55" y="321.93" width="3.48" height="3.48"/>
      <rect x="837.03" y="321.93" width="3.48" height="3.48"/>
      <rect x="840.51" y="321.93" width="3.48" height="3.48"/>
      <rect x="843.99" y="321.93" width="3.48" height="3.48"/>
      <rect x="847.47" y="321.93" width="3.48" height="3.48"/>
      <rect x="850.95" y="321.93" width="3.48" height="3.48"/>
      <rect x="854.43" y="321.93" width="3.48" height="3.48"/>
      <rect x="857.91" y="321.93" width="3.48" height="3.48"/>
      <rect x="861.39" y="321.93" width="3.48" height="3.48"/>
      <rect x="864.87" y="321.93" width="3.48" height="3.48"/>
      <rect x="868.35" y="321.93" width="3.48" height="3.48"/>
      <rect x="777.86" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="781.34" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="788.3" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="791.78" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="795.26" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="798.74" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="802.22" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="805.7" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="809.18" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="812.66" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="816.15" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="819.63" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="823.11" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="826.59" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="833.55" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="840.51" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="843.99" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="847.47" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="850.95" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="854.43" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="857.91" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="861.39" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="864.87" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="868.35" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="871.83" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="774.38" y="328.89" width="3.48" height="3.48"/>
      <rect x="777.86" y="328.89" width="3.48" height="3.48"/>
      <rect x="781.34" y="328.89" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="328.89" width="3.48" height="3.48"/>
      <rect x="788.3" y="328.89" width="3.48" height="3.48"/>
      <rect x="791.78" y="328.89" width="3.48" height="3.48"/>
      <rect x="795.26" y="328.89" width="3.48" height="3.48"/>
      <rect x="798.74" y="328.89" width="3.48" height="3.48"/>
      <rect x="802.22" y="328.89" width="3.48" height="3.48"/>
      <rect x="805.7" y="328.89" width="3.48" height="3.48"/>
      <rect x="809.18" y="328.89" width="3.48" height="3.48"/>
      <rect x="812.66" y="328.89" width="3.48" height="3.48"/>
      <rect x="816.15" y="328.89" width="3.48" height="3.48"/>
      <rect x="819.63" y="328.89" width="3.48" height="3.48"/>
      <rect x="823.11" y="328.89" width="3.48" height="3.48"/>
      <rect x="826.59" y="328.89" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="328.89" width="3.48" height="3.48"/>
      <rect x="833.55" y="328.89" width="3.48" height="3.48"/>
      <rect x="837.03" y="328.89" width="3.48" height="3.48"/>
      <rect x="840.51" y="328.89" width="3.48" height="3.48"/>
      <rect x="843.99" y="328.89" width="3.48" height="3.48"/>
      <rect x="847.47" y="328.89" width="3.48" height="3.48"/>
      <rect x="850.95" y="328.89" width="3.48" height="3.48"/>
      <rect x="854.43" y="328.89" width="3.48" height="3.48"/>
      <rect x="857.91" y="328.89" width="3.48" height="3.48"/>
      <rect x="861.39" y="328.89" width="3.48" height="3.48"/>
      <rect x="864.87" y="328.89" width="3.48" height="3.48"/>
      <rect x="868.35" y="328.89" width="3.48" height="3.48"/>
      <rect x="871.83" y="328.89" width="3.48" height="3.48"/>
      <rect x="777.86" y="332.37" width="3.48" height="3.48"/>
      <rect x="781.34" y="332.37" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="332.37" width="3.48" height="3.48"/>
      <rect x="788.3" y="332.37" width="3.48" height="3.48"/>
      <rect x="791.78" y="332.37" width="3.48" height="3.48"/>
      <rect x="795.26" y="332.37" width="3.48" height="3.48"/>
      <rect x="798.74" y="332.37" width="3.48" height="3.48"/>
      <rect x="802.22" y="332.37" width="3.48" height="3.48"/>
      <rect x="805.7" y="332.37" width="3.48" height="3.48"/>
      <rect x="809.18" y="332.37" width="3.48" height="3.48"/>
      <rect x="812.66" y="332.37" width="3.48" height="3.48"/>
      <rect x="816.15" y="332.37" width="3.48" height="3.48"/>
      <rect x="819.63" y="332.37" width="3.48" height="3.48"/>
      <rect x="823.11" y="332.37" width="3.48" height="3.48"/>
      <rect x="826.59" y="332.37" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="332.37" width="3.48" height="3.48"/>
      <rect x="833.55" y="332.37" width="3.48" height="3.48"/>
      <rect x="837.03" y="332.37" width="3.48" height="3.48"/>
      <rect x="840.51" y="332.37" width="3.48" height="3.48"/>
      <rect x="843.99" y="332.37" width="3.48" height="3.48"/>
      <rect x="847.47" y="332.37" width="3.48" height="3.48"/>
      <rect x="850.95" y="332.37" width="3.48" height="3.48"/>
      <rect x="854.43" y="332.37" width="3.48" height="3.48"/>
      <rect x="857.91" y="332.37" width="3.48" height="3.48"/>
      <rect x="861.39" y="332.37" width="3.48" height="3.48"/>
      <rect x="864.87" y="332.37" width="3.48" height="3.48"/>
      <rect x="868.35" y="332.37" width="3.48" height="3.48"/>
      <rect x="871.83" y="332.37" width="3.48" height="3.48"/>
      <rect x="875.31" y="332.37" width="3.48" height="3.48"/>
      <rect x="774.38" y="335.86" width="3.48" height="3.48"/>
      <rect x="777.86" y="335.86" width="3.48" height="3.48"/>
      <rect x="781.34" y="335.86" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="335.86" width="3.48" height="3.48"/>
      <rect x="788.3" y="335.86" width="3.48" height="3.48"/>
      <rect x="791.78" y="335.86" width="3.48" height="3.48"/>
      <rect x="795.26" y="335.86" width="3.48" height="3.48"/>
      <rect x="798.74" y="335.86" width="3.48" height="3.48"/>
      <rect x="802.22" y="335.86" width="3.48" height="3.48"/>
      <rect x="805.7" y="335.86" width="3.48" height="3.48"/>
      <rect x="809.18" y="335.86" width="3.48" height="3.48"/>
      <rect x="812.66" y="335.86" width="3.48" height="3.48"/>
      <rect x="816.15" y="335.86" width="3.48" height="3.48"/>
      <rect x="819.63" y="335.86" width="3.48" height="3.48"/>
      <rect x="823.11" y="335.86" width="3.48" height="3.48"/>
      <rect x="826.59" y="335.86" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="335.86" width="3.48" height="3.48"/>
      <rect x="833.55" y="335.86" width="3.48" height="3.48"/>
      <rect x="837.03" y="335.86" width="3.48" height="3.48"/>
      <rect x="840.51" y="335.86" width="3.48" height="3.48"/>
      <rect x="843.99" y="335.86" width="3.48" height="3.48"/>
      <rect x="847.47" y="335.86" width="3.48" height="3.48"/>
      <rect x="850.95" y="335.86" width="3.48" height="3.48"/>
      <rect x="854.43" y="335.86" width="3.48" height="3.48"/>
      <rect x="857.91" y="335.86" width="3.48" height="3.48"/>
      <rect x="861.39" y="335.86" width="3.48" height="3.48"/>
      <rect x="864.87" y="335.86" width="3.48" height="3.48"/>
      <rect x="868.35" y="335.86" width="3.48" height="3.48"/>
      <rect x="871.83" y="335.86" width="3.48" height="3.48"/>
      <rect x="875.31" y="335.86" width="3.48" height="3.48"/>
      <rect x="774.38" y="339.34" width="3.48" height="3.48"/>
      <rect x="777.86" y="339.34" width="3.48" height="3.48"/>
      <rect x="781.34" y="339.34" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="339.34" width="3.48" height="3.48"/>
      <rect x="788.3" y="339.34" width="3.48" height="3.48"/>
      <rect x="791.78" y="339.34" width="3.48" height="3.48"/>
      <rect x="795.26" y="339.34" width="3.48" height="3.48"/>
      <rect x="798.74" y="339.34" width="3.48" height="3.48"/>
      <rect x="802.22" y="339.34" width="3.48" height="3.48"/>
      <rect x="805.7" y="339.34" width="3.48" height="3.48"/>
      <rect x="809.18" y="339.34" width="3.48" height="3.48"/>
      <rect x="812.66" y="339.34" width="3.48" height="3.48"/>
      <rect x="816.15" y="339.34" width="3.48" height="3.48"/>
      <rect x="819.63" y="339.34" width="3.48" height="3.48"/>
      <rect x="823.11" y="339.34" width="3.48" height="3.48"/>
      <rect x="826.59" y="339.34" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="339.34" width="3.48" height="3.48"/>
      <rect x="833.55" y="339.34" width="3.48" height="3.48"/>
      <rect x="837.03" y="339.34" width="3.48" height="3.48"/>
      <rect x="840.51" y="339.34" width="3.48" height="3.48"/>
      <rect x="843.99" y="339.34" width="3.48" height="3.48"/>
      <rect x="847.47" y="339.34" width="3.48" height="3.48"/>
      <rect x="850.95" y="339.34" width="3.48" height="3.48"/>
      <rect x="854.43" y="339.34" width="3.48" height="3.48"/>
      <rect x="857.91" y="339.34" width="3.48" height="3.48"/>
      <rect x="861.39" y="339.34" width="3.48" height="3.48"/>
      <rect x="864.87" y="339.34" width="3.48" height="3.48"/>
      <rect x="868.35" y="339.34" width="3.48" height="3.48"/>
      <rect x="871.83" y="339.34" width="3.48" height="3.48"/>
      <rect x="774.38" y="342.82" width="3.48" height="3.48"/>
      <rect x="777.86" y="342.82" width="3.48" height="3.48"/>
      <rect x="781.34" y="342.82" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="342.82" width="3.48" height="3.48"/>
      <rect x="788.3" y="342.82" width="3.48" height="3.48"/>
      <rect x="791.78" y="342.82" width="3.48" height="3.48"/>
      <rect x="795.26" y="342.82" width="3.48" height="3.48"/>
      <rect x="798.74" y="342.82" width="3.48" height="3.48"/>
      <rect x="802.22" y="342.82" width="3.48" height="3.48"/>
      <rect x="805.7" y="342.82" width="3.48" height="3.48"/>
      <rect x="809.18" y="342.82" width="3.48" height="3.48"/>
      <rect x="812.66" y="342.82" width="3.48" height="3.48"/>
      <rect x="816.15" y="342.82" width="3.48" height="3.48"/>
      <rect x="819.63" y="342.82" width="3.48" height="3.48"/>
      <rect x="823.11" y="342.82" width="3.48" height="3.48"/>
      <rect x="826.59" y="342.82" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="342.82" width="3.48" height="3.48"/>
      <rect x="833.55" y="342.82" width="3.48" height="3.48"/>
      <rect x="837.03" y="342.82" width="3.48" height="3.48"/>
      <rect x="840.51" y="342.82" width="3.48" height="3.48"/>
      <rect x="843.99" y="342.82" width="3.48" height="3.48"/>
      <rect x="847.47" y="342.82" width="3.48" height="3.48"/>
      <rect x="850.95" y="342.82" width="3.48" height="3.48"/>
      <rect x="854.43" y="342.82" width="3.48" height="3.48"/>
      <rect x="857.91" y="342.82" width="3.48" height="3.48"/>
      <rect x="861.39" y="342.82" width="3.48" height="3.48"/>
      <rect x="864.87" y="342.82" width="3.48" height="3.48"/>
      <rect x="868.35" y="342.82" width="3.48" height="3.48"/>
      <rect x="871.83" y="342.82" width="3.48" height="3.48"/>
      <rect x="774.38" y="346.3" width="3.48" height="3.48"/>
      <rect x="777.86" y="346.3" width="3.48" height="3.48"/>
      <rect x="781.34" y="346.3" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="346.3" width="3.48" height="3.48"/>
      <rect x="788.3" y="346.3" width="3.48" height="3.48"/>
      <rect x="791.78" y="346.3" width="3.48" height="3.48"/>
      <rect x="795.26" y="346.3" width="3.48" height="3.48"/>
      <rect x="798.74" y="346.3" width="3.48" height="3.48"/>
      <rect x="802.22" y="346.3" width="3.48" height="3.48"/>
      <rect x="805.7" y="346.3" width="3.48" height="3.48"/>
      <rect x="809.18" y="346.3" width="3.48" height="3.48"/>
      <rect x="812.66" y="346.3" width="3.48" height="3.48"/>
      <rect x="816.15" y="346.3" width="3.48" height="3.48"/>
      <rect x="819.63" y="346.3" width="3.48" height="3.48"/>
      <rect x="823.11" y="346.3" width="3.48" height="3.48"/>
      <rect x="826.59" y="346.3" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="346.3" width="3.48" height="3.48"/>
      <rect x="833.55" y="346.3" width="3.48" height="3.48"/>
      <rect x="837.03" y="346.3" width="3.48" height="3.48"/>
      <rect x="840.51" y="346.3" width="3.48" height="3.48"/>
      <rect x="843.99" y="346.3" width="3.48" height="3.48"/>
      <rect x="847.47" y="346.3" width="3.48" height="3.48"/>
      <rect x="850.95" y="346.3" width="3.48" height="3.48"/>
      <rect x="854.43" y="346.3" width="3.48" height="3.48"/>
      <rect x="857.91" y="346.3" width="3.48" height="3.48"/>
      <rect x="861.39" y="346.3" width="3.48" height="3.48"/>
      <rect x="864.87" y="346.3" width="3.48" height="3.48"/>
      <rect x="868.35" y="346.3" width="3.48" height="3.48"/>
      <rect x="871.83" y="346.3" width="3.48" height="3.48"/>
      <rect x="774.38" y="349.78" width="3.48" height="3.48"/>
      <rect x="777.86" y="349.78" width="3.48" height="3.48"/>
      <rect x="781.34" y="349.78" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="349.78" width="3.48" height="3.48"/>
      <rect x="788.3" y="349.78" width="3.48" height="3.48"/>
      <rect x="791.78" y="349.78" width="3.48" height="3.48"/>
      <rect x="795.26" y="349.78" width="3.48" height="3.48"/>
      <rect x="798.74" y="349.78" width="3.48" height="3.48"/>
      <rect x="802.22" y="349.78" width="3.48" height="3.48"/>
      <rect x="805.7" y="349.78" width="3.48" height="3.48"/>
      <rect x="809.18" y="349.78" width="3.48" height="3.48"/>
      <rect x="812.66" y="349.78" width="3.48" height="3.48"/>
      <rect x="816.15" y="349.78" width="3.48" height="3.48"/>
      <rect x="819.63" y="349.78" width="3.48" height="3.48"/>
      <rect x="823.11" y="349.78" width="3.48" height="3.48"/>
      <rect x="826.59" y="349.78" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="349.78" width="3.48" height="3.48"/>
      <rect x="833.55" y="349.78" width="3.48" height="3.48"/>
      <rect x="837.03" y="349.78" width="3.48" height="3.48"/>
      <rect x="840.51" y="349.78" width="3.48" height="3.48"/>
      <rect x="843.99" y="349.78" width="3.48" height="3.48"/>
      <rect x="847.47" y="349.78" width="3.48" height="3.48"/>
      <rect x="850.95" y="349.78" width="3.48" height="3.48"/>
      <rect x="854.43" y="349.78" width="3.48" height="3.48"/>
      <rect x="857.91" y="349.78" width="3.48" height="3.48"/>
      <rect x="861.39" y="349.78" width="3.48" height="3.48"/>
      <rect x="864.87" y="349.78" width="3.48" height="3.48"/>
      <rect x="868.35" y="349.78" width="3.48" height="3.48"/>
      <rect x="774.38" y="353.26" width="3.48" height="3.48"/>
      <rect x="777.86" y="353.26" width="3.48" height="3.48"/>
      <rect x="781.34" y="353.26" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="353.26" width="3.48" height="3.48"/>
      <rect x="788.3" y="353.26" width="3.48" height="3.48"/>
      <rect x="791.78" y="353.26" width="3.48" height="3.48"/>
      <rect x="795.26" y="353.26" width="3.48" height="3.48"/>
      <rect x="798.74" y="353.26" width="3.48" height="3.48"/>
      <rect x="802.22" y="353.26" width="3.48" height="3.48"/>
      <rect x="819.63" y="353.26" width="3.48" height="3.48"/>
      <rect x="823.11" y="353.26" width="3.48" height="3.48"/>
      <rect x="826.59" y="353.26" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="353.26" width="3.48" height="3.48"/>
      <rect x="833.55" y="353.26" width="3.48" height="3.48"/>
      <rect x="837.03" y="353.26" width="3.48" height="3.48"/>
      <rect x="840.51" y="353.26" width="3.48" height="3.48"/>
      <rect x="843.99" y="353.26" width="3.48" height="3.48"/>
      <rect x="847.47" y="353.26" width="3.48" height="3.48"/>
      <rect x="850.95" y="353.26" width="3.48" height="3.48"/>
      <rect x="854.43" y="353.26" width="3.48" height="3.48"/>
      <rect x="857.91" y="353.26" width="3.48" height="3.48"/>
      <rect x="861.39" y="353.26" width="3.48" height="3.48"/>
      <rect x="864.87" y="353.26" width="3.48" height="3.48"/>
      <rect x="774.38" y="356.74" width="3.48" height="3.48"/>
      <rect x="777.86" y="356.74" width="3.48" height="3.48"/>
      <rect x="781.34" y="356.74" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="356.74" width="3.48" height="3.48"/>
      <rect x="788.3" y="356.74" width="3.48" height="3.48"/>
      <rect x="791.78" y="356.74" width="3.48" height="3.48"/>
      <rect x="823.11" y="356.74" width="3.48" height="3.48"/>
      <rect x="826.59" y="356.74" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="356.74" width="3.48" height="3.48"/>
      <rect x="833.55" y="356.74" width="3.48" height="3.48"/>
      <rect x="837.03" y="356.74" width="3.48" height="3.48"/>
      <rect x="840.51" y="356.74" width="3.48" height="3.48"/>
      <rect x="843.99" y="356.74" width="3.48" height="3.48"/>
      <rect x="847.47" y="356.74" width="3.48" height="3.48"/>
      <rect x="850.95" y="356.74" width="3.48" height="3.48"/>
      <rect x="854.43" y="356.74" width="3.48" height="3.48"/>
      <rect x="857.91" y="356.74" width="3.48" height="3.48"/>
      <rect x="861.39" y="356.74" width="3.48" height="3.48"/>
      <rect x="770.9" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="774.38" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="777.86" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="823.11" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="826.59" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="833.55" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="840.51" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="843.99" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="847.47" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="850.95" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="854.43" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="857.91" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="363.7" width="3.48" height="3.48"/>
      <rect x="833.55" y="363.7" width="3.48" height="3.48"/>
      <rect x="837.03" y="363.7" width="3.48" height="3.48"/>
      <rect x="840.51" y="363.7" width="3.48" height="3.48"/>
      <rect x="843.99" y="363.7" width="3.48" height="3.48"/>
      <rect x="847.47" y="363.7" width="3.48" height="3.48"/>
      <rect x="850.95" y="363.7" width="3.48" height="3.48"/>
      <rect x="854.43" y="363.7" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="367.18" width="3.48" height="3.48"/>
      <rect x="833.55" y="367.18" width="3.48" height="3.48"/>
      <rect x="837.03" y="367.18" width="3.48" height="3.48"/>
      <rect x="840.51" y="367.18" width="3.48" height="3.48"/>
      <rect x="843.99" y="367.18" width="3.48" height="3.48"/>
      <rect x="847.47" y="367.18" width="3.48" height="3.48"/>
      <rect x="850.95" y="367.18" width="3.48" height="3.48"/>
      <rect x="854.43" y="367.18" width="3.48" height="3.48"/>
      <rect x="830.0699999999999" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="833.55" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="840.51" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="843.99" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="847.47" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="850.95" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="840.51" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="837.03" y="384.58" width="3.48" height="3.48"/>
      <rect x="840.51" y="384.58" width="3.48" height="3.48"/>
    </g>
    <g id="MG" title="Madagascar" class="land">
      <rect x="607.3199999999999" y="297.57" width="3.48" height="3.48"/>
      <rect x="610.8" y="297.57" width="3.48" height="3.48"/>
      <rect x="603.84" y="301.05" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="301.05" width="3.48" height="3.48"/>
      <rect x="610.8" y="301.05" width="3.48" height="3.48"/>
      <rect x="596.88" y="304.53" width="3.48" height="3.48"/>
      <rect x="600.36" y="304.53" width="3.48" height="3.48"/>
      <rect x="603.84" y="304.53" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="304.53" width="3.48" height="3.48"/>
      <rect x="596.88" y="308.01" width="3.48" height="3.48"/>
      <rect x="600.36" y="308.01" width="3.48" height="3.48"/>
      <rect x="603.84" y="308.01" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="308.01" width="3.48" height="3.48"/>
      <rect x="596.88" y="311.49" width="3.48" height="3.48"/>
      <rect x="600.36" y="311.49" width="3.48" height="3.48"/>
      <rect x="603.84" y="311.49" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="311.49" width="3.48" height="3.48"/>
      <rect x="596.88" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="600.36" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="603.84" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="593.4" y="318.45" width="3.48" height="3.48"/>
      <rect x="596.88" y="318.45" width="3.48" height="3.48"/>
      <rect x="600.36" y="318.45" width="3.48" height="3.48"/>
      <rect x="603.84" y="318.45" width="3.48" height="3.48"/>
      <rect x="593.4" y="321.93" width="3.48" height="3.48"/>
      <rect x="596.88" y="321.93" width="3.48" height="3.48"/>
      <rect x="600.36" y="321.93" width="3.48" height="3.48"/>
      <rect x="593.4" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="596.88" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="600.36" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="593.4" y="328.89" width="3.48" height="3.48"/>
      <rect x="596.88" y="328.89" width="3.48" height="3.48"/>
      <rect x="600.36" y="328.89" width="3.48" height="3.48"/>
    </g>
    <g id="VU" title="Vanuatu" class="land">
      <rect x="924.04" y="301.05" width="3.48" height="3.48"/>
      <rect x="924.04" y="308.01" width="3.48" height="3.48"/>
    </g>
    <g id="ZW" title="Zimbabwe" class="land">
      <rect x="555.12" y="304.53" width="3.48" height="3.48"/>
      <rect x="558.6" y="304.53" width="3.48" height="3.48"/>
      <rect x="562.08" y="304.53" width="3.48" height="3.48"/>
      <rect x="551.64" y="308.01" width="3.48" height="3.48"/>
      <rect x="555.12" y="308.01" width="3.48" height="3.48"/>
      <rect x="558.6" y="308.01" width="3.48" height="3.48"/>
      <rect x="562.08" y="308.01" width="3.48" height="3.48"/>
      <rect x="548.16" y="311.49" width="3.48" height="3.48"/>
      <rect x="551.64" y="311.49" width="3.48" height="3.48"/>
      <rect x="555.12" y="311.49" width="3.48" height="3.48"/>
      <rect x="558.6" y="311.49" width="3.48" height="3.48"/>
      <rect x="562.08" y="311.49" width="3.48" height="3.48"/>
      <rect x="548.16" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="551.64" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="555.12" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="558.6" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="562.08" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="551.64" y="318.45" width="3.48" height="3.48"/>
      <rect x="555.12" y="318.45" width="3.48" height="3.48"/>
      <rect x="558.6" y="318.45" width="3.48" height="3.48"/>
      <rect x="562.08" y="318.45" width="3.48" height="3.48"/>
      <rect x="558.6" y="321.93" width="3.48" height="3.48"/>
    </g>
    <g id="FJ" title="Fiji" class="land">
      <rect x="955.36" y="304.53" width="3.48" height="3.48"/>
      <rect x="948.4" y="308.01" width="3.48" height="3.48"/>
    </g>
    <g id="NA" title="Namibia" class="land">
      <rect x="509.87" y="308.01" width="3.48" height="3.48"/>
      <rect x="513.35" y="308.01" width="3.48" height="3.48"/>
      <rect x="516.83" y="308.01" width="3.48" height="3.48"/>
      <rect x="520.31" y="308.01" width="3.48" height="3.48"/>
      <rect x="523.79" y="308.01" width="3.48" height="3.48"/>
      <rect x="541.2" y="308.01" width="3.48" height="3.48"/>
      <rect x="509.87" y="311.49" width="3.48" height="3.48"/>
      <rect x="513.35" y="311.49" width="3.48" height="3.48"/>
      <rect x="516.83" y="311.49" width="3.48" height="3.48"/>
      <rect x="520.31" y="311.49" width="3.48" height="3.48"/>
      <rect x="523.79" y="311.49" width="3.48" height="3.48"/>
      <rect x="527.28" y="311.49" width="3.48" height="3.48"/>
      <rect x="530.76" y="311.49" width="3.48" height="3.48"/>
      <rect x="513.35" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="516.83" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="520.31" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="523.79" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="527.28" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="530.76" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="513.35" y="318.45" width="3.48" height="3.48"/>
      <rect x="516.83" y="318.45" width="3.48" height="3.48"/>
      <rect x="520.31" y="318.45" width="3.48" height="3.48"/>
      <rect x="523.79" y="318.45" width="3.48" height="3.48"/>
      <rect x="527.28" y="318.45" width="3.48" height="3.48"/>
      <rect x="530.76" y="318.45" width="3.48" height="3.48"/>
      <rect x="516.83" y="321.93" width="3.48" height="3.48"/>
      <rect x="520.31" y="321.93" width="3.48" height="3.48"/>
      <rect x="523.79" y="321.93" width="3.48" height="3.48"/>
      <rect x="527.28" y="321.93" width="3.48" height="3.48"/>
      <rect x="516.83" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="520.31" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="523.79" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="527.28" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="516.83" y="328.89" width="3.48" height="3.48"/>
      <rect x="520.31" y="328.89" width="3.48" height="3.48"/>
      <rect x="523.79" y="328.89" width="3.48" height="3.48"/>
      <rect x="527.28" y="328.89" width="3.48" height="3.48"/>
      <rect x="516.83" y="332.37" width="3.48" height="3.48"/>
      <rect x="520.31" y="332.37" width="3.48" height="3.48"/>
      <rect x="523.79" y="332.37" width="3.48" height="3.48"/>
      <rect x="527.28" y="332.37" width="3.48" height="3.48"/>
      <rect x="516.83" y="335.86" width="3.48" height="3.48"/>
      <rect x="520.31" y="335.86" width="3.48" height="3.48"/>
      <rect x="523.79" y="335.86" width="3.48" height="3.48"/>
      <rect x="527.28" y="335.86" width="3.48" height="3.48"/>
      <rect x="520.31" y="339.34" width="3.48" height="3.48"/>
      <rect x="523.79" y="339.34" width="3.48" height="3.48"/>
      <rect x="527.28" y="339.34" width="3.48" height="3.48"/>
      <rect x="523.79" y="342.82" width="3.48" height="3.48"/>
    </g>
    <g id="CL" title="Chile" class="land">
      <rect x="294.09" y="311.49" width="3.48" height="3.48"/>
      <rect x="294.09" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="318.45" width="3.48" height="3.48"/>
      <rect x="294.09" y="321.93" width="3.48" height="3.48"/>
      <rect x="297.57" y="321.93" width="3.48" height="3.48"/>
      <rect x="294.09" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="328.89" width="3.48" height="3.48"/>
      <rect x="297.57" y="328.89" width="3.48" height="3.48"/>
      <rect x="294.09" y="332.37" width="3.48" height="3.48"/>
      <rect x="297.57" y="332.37" width="3.48" height="3.48"/>
      <rect x="294.09" y="335.86" width="3.48" height="3.48"/>
      <rect x="297.57" y="335.86" width="3.48" height="3.48"/>
      <rect x="294.09" y="339.34" width="3.48" height="3.48"/>
      <rect x="297.57" y="339.34" width="3.48" height="3.48"/>
      <rect x="294.09" y="342.82" width="3.48" height="3.48"/>
      <rect x="294.09" y="346.3" width="3.48" height="3.48"/>
      <rect x="294.09" y="349.78" width="3.48" height="3.48"/>
      <rect x="294.09" y="353.26" width="3.48" height="3.48"/>
      <rect x="294.09" y="356.74" width="3.48" height="3.48"/>
      <rect x="297.57" y="356.74" width="3.48" height="3.48"/>
      <rect x="294.09" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="363.7" width="3.48" height="3.48"/>
      <rect x="297.57" y="363.7" width="3.48" height="3.48"/>
      <rect x="294.09" y="367.18" width="3.48" height="3.48"/>
      <rect x="297.57" y="367.18" width="3.48" height="3.48"/>
      <rect x="294.09" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="374.14" width="3.48" height="3.48"/>
      <rect x="297.57" y="374.14" width="3.48" height="3.48"/>
      <rect x="294.09" y="377.62" width="3.48" height="3.48"/>
      <rect x="297.57" y="377.62" width="3.48" height="3.48"/>
      <rect x="294.09" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="388.06" width="3.48" height="3.48"/>
      <rect x="301.05" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="301.05" y="395.02" width="3.48" height="3.48"/>
      <rect x="297.57" y="398.5" width="3.48" height="3.48"/>
      <rect x="301.05" y="398.5" width="3.48" height="3.48"/>
      <rect x="304.53" y="398.5" width="3.48" height="3.48"/>
      <rect x="301.05" y="401.98" width="3.48" height="3.48"/>
      <rect x="297.57" y="405.46" width="3.48" height="3.48"/>
      <rect x="301.05" y="405.46" width="3.48" height="3.48"/>
      <rect x="304.53" y="412.42" width="3.48" height="3.48"/>
      <rect x="308.01" y="415.9" width="3.48" height="3.48"/>
      <rect x="311.49" y="415.9" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="415.9" width="3.48" height="3.48"/>
      <rect x="308.01" y="419.38" width="3.48" height="3.48"/>
      <rect x="311.49" y="419.38" width="3.48" height="3.48"/>
      <rect x="318.45" y="419.38" width="3.48" height="3.48"/>
      <rect x="318.45" y="422.86" width="3.48" height="3.48"/>
    </g>
    <g id="BW" title="Botswana" class="land">
      <rect x="534.24" y="311.49" width="3.48" height="3.48"/>
      <rect x="537.72" y="311.49" width="3.48" height="3.48"/>
      <rect x="541.2" y="311.49" width="3.48" height="3.48"/>
      <rect x="544.68" y="311.49" width="3.48" height="3.48"/>
      <rect x="534.24" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="537.72" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="541.2" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="544.68" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="534.24" y="318.45" width="3.48" height="3.48"/>
      <rect x="537.72" y="318.45" width="3.48" height="3.48"/>
      <rect x="541.2" y="318.45" width="3.48" height="3.48"/>
      <rect x="544.68" y="318.45" width="3.48" height="3.48"/>
      <rect x="548.16" y="318.45" width="3.48" height="3.48"/>
      <rect x="530.76" y="321.93" width="3.48" height="3.48"/>
      <rect x="534.24" y="321.93" width="3.48" height="3.48"/>
      <rect x="537.72" y="321.93" width="3.48" height="3.48"/>
      <rect x="541.2" y="321.93" width="3.48" height="3.48"/>
      <rect x="544.68" y="321.93" width="3.48" height="3.48"/>
      <rect x="548.16" y="321.93" width="3.48" height="3.48"/>
      <rect x="551.64" y="321.93" width="3.48" height="3.48"/>
      <rect x="530.76" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="534.24" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="537.72" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="541.2" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="544.68" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="548.16" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="530.76" y="328.89" width="3.48" height="3.48"/>
      <rect x="534.24" y="328.89" width="3.48" height="3.48"/>
      <rect x="537.72" y="328.89" width="3.48" height="3.48"/>
      <rect x="541.2" y="328.89" width="3.48" height="3.48"/>
      <rect x="544.68" y="328.89" width="3.48" height="3.48"/>
      <rect x="534.24" y="332.37" width="3.48" height="3.48"/>
      <rect x="541.2" y="332.37" width="3.48" height="3.48"/>
      <rect x="530.76" y="335.86" width="3.48" height="3.48"/>
      <rect x="534.24" y="335.86" width="3.48" height="3.48"/>
    </g>
    <g id="PY" title="Paraguay" class="land">
      <rect x="314.96999999999997" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="318.45" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="314.96999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="318.45" width="3.48" height="3.48"/>
      <rect x="318.45" y="318.45" width="3.48" height="3.48"/>
      <rect x="321.93" y="318.45" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="321.93" width="3.48" height="3.48"/>
      <rect x="318.45" y="321.93" width="3.48" height="3.48"/>
      <rect x="321.93" y="321.93" width="3.48" height="3.48"/>
      <rect x="318.45" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="328.89" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="328.89" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="328.89" width="3.48" height="3.48"/>
      <rect x="328.89" y="328.89" width="3.48" height="3.48"/>
      <rect x="332.37" y="328.89" width="3.48" height="3.48"/>
      <rect x="328.89" y="332.37" width="3.48" height="3.48"/>
      <rect x="332.37" y="332.37" width="3.48" height="3.48"/>
      <rect x="328.89" y="335.86" width="3.48" height="3.48"/>
      <rect x="332.37" y="335.86" width="3.48" height="3.48"/>
    </g>
    <g id="AR" title="Argentina" class="land">
      <rect x="304.53" y="321.93" width="3.48" height="3.48"/>
      <rect x="311.49" y="321.93" width="3.48" height="3.48"/>
      <rect x="301.05" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="328.89" width="3.48" height="3.48"/>
      <rect x="304.53" y="328.89" width="3.48" height="3.48"/>
      <rect x="308.01" y="328.89" width="3.48" height="3.48"/>
      <rect x="311.49" y="328.89" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="328.89" width="3.48" height="3.48"/>
      <rect x="318.45" y="328.89" width="3.48" height="3.48"/>
      <rect x="301.05" y="332.37" width="3.48" height="3.48"/>
      <rect x="304.53" y="332.37" width="3.48" height="3.48"/>
      <rect x="308.01" y="332.37" width="3.48" height="3.48"/>
      <rect x="311.49" y="332.37" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="332.37" width="3.48" height="3.48"/>
      <rect x="318.45" y="332.37" width="3.48" height="3.48"/>
      <rect x="321.93" y="332.37" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="332.37" width="3.48" height="3.48"/>
      <rect x="301.05" y="335.86" width="3.48" height="3.48"/>
      <rect x="304.53" y="335.86" width="3.48" height="3.48"/>
      <rect x="308.01" y="335.86" width="3.48" height="3.48"/>
      <rect x="311.49" y="335.86" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="335.86" width="3.48" height="3.48"/>
      <rect x="318.45" y="335.86" width="3.48" height="3.48"/>
      <rect x="321.93" y="335.86" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="335.86" width="3.48" height="3.48"/>
      <rect x="335.86" y="335.86" width="3.48" height="3.48"/>
      <rect x="301.05" y="339.34" width="3.48" height="3.48"/>
      <rect x="304.53" y="339.34" width="3.48" height="3.48"/>
      <rect x="308.01" y="339.34" width="3.48" height="3.48"/>
      <rect x="311.49" y="339.34" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="339.34" width="3.48" height="3.48"/>
      <rect x="318.45" y="339.34" width="3.48" height="3.48"/>
      <rect x="321.93" y="339.34" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="339.34" width="3.48" height="3.48"/>
      <rect x="328.89" y="339.34" width="3.48" height="3.48"/>
      <rect x="332.37" y="339.34" width="3.48" height="3.48"/>
      <rect x="297.57" y="342.82" width="3.48" height="3.48"/>
      <rect x="301.05" y="342.82" width="3.48" height="3.48"/>
      <rect x="304.53" y="342.82" width="3.48" height="3.48"/>
      <rect x="308.01" y="342.82" width="3.48" height="3.48"/>
      <rect x="311.49" y="342.82" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="342.82" width="3.48" height="3.48"/>
      <rect x="318.45" y="342.82" width="3.48" height="3.48"/>
      <rect x="321.93" y="342.82" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="342.82" width="3.48" height="3.48"/>
      <rect x="328.89" y="342.82" width="3.48" height="3.48"/>
      <rect x="297.57" y="346.3" width="3.48" height="3.48"/>
      <rect x="301.05" y="346.3" width="3.48" height="3.48"/>
      <rect x="304.53" y="346.3" width="3.48" height="3.48"/>
      <rect x="308.01" y="346.3" width="3.48" height="3.48"/>
      <rect x="311.49" y="346.3" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="346.3" width="3.48" height="3.48"/>
      <rect x="318.45" y="346.3" width="3.48" height="3.48"/>
      <rect x="321.93" y="346.3" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="346.3" width="3.48" height="3.48"/>
      <rect x="328.89" y="346.3" width="3.48" height="3.48"/>
      <rect x="297.57" y="349.78" width="3.48" height="3.48"/>
      <rect x="301.05" y="349.78" width="3.48" height="3.48"/>
      <rect x="304.53" y="349.78" width="3.48" height="3.48"/>
      <rect x="308.01" y="349.78" width="3.48" height="3.48"/>
      <rect x="311.49" y="349.78" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="349.78" width="3.48" height="3.48"/>
      <rect x="318.45" y="349.78" width="3.48" height="3.48"/>
      <rect x="321.93" y="349.78" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="349.78" width="3.48" height="3.48"/>
      <rect x="297.57" y="353.26" width="3.48" height="3.48"/>
      <rect x="301.05" y="353.26" width="3.48" height="3.48"/>
      <rect x="304.53" y="353.26" width="3.48" height="3.48"/>
      <rect x="308.01" y="353.26" width="3.48" height="3.48"/>
      <rect x="311.49" y="353.26" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="353.26" width="3.48" height="3.48"/>
      <rect x="318.45" y="353.26" width="3.48" height="3.48"/>
      <rect x="321.93" y="353.26" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="353.26" width="3.48" height="3.48"/>
      <rect x="301.05" y="356.74" width="3.48" height="3.48"/>
      <rect x="304.53" y="356.74" width="3.48" height="3.48"/>
      <rect x="308.01" y="356.74" width="3.48" height="3.48"/>
      <rect x="311.49" y="356.74" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="356.74" width="3.48" height="3.48"/>
      <rect x="318.45" y="356.74" width="3.48" height="3.48"/>
      <rect x="321.93" y="356.74" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="356.74" width="3.48" height="3.48"/>
      <rect x="301.05" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="318.45" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="363.7" width="3.48" height="3.48"/>
      <rect x="304.53" y="363.7" width="3.48" height="3.48"/>
      <rect x="308.01" y="363.7" width="3.48" height="3.48"/>
      <rect x="311.49" y="363.7" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="363.7" width="3.48" height="3.48"/>
      <rect x="318.45" y="363.7" width="3.48" height="3.48"/>
      <rect x="321.93" y="363.7" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="363.7" width="3.48" height="3.48"/>
      <rect x="328.89" y="363.7" width="3.48" height="3.48"/>
      <rect x="301.05" y="367.18" width="3.48" height="3.48"/>
      <rect x="304.53" y="367.18" width="3.48" height="3.48"/>
      <rect x="308.01" y="367.18" width="3.48" height="3.48"/>
      <rect x="311.49" y="367.18" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="367.18" width="3.48" height="3.48"/>
      <rect x="318.45" y="367.18" width="3.48" height="3.48"/>
      <rect x="321.93" y="367.18" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="367.18" width="3.48" height="3.48"/>
      <rect x="328.89" y="367.18" width="3.48" height="3.48"/>
      <rect x="332.37" y="367.18" width="3.48" height="3.48"/>
      <rect x="301.05" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="318.45" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="328.89" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="332.37" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="374.14" width="3.48" height="3.48"/>
      <rect x="304.53" y="374.14" width="3.48" height="3.48"/>
      <rect x="308.01" y="374.14" width="3.48" height="3.48"/>
      <rect x="311.49" y="374.14" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="374.14" width="3.48" height="3.48"/>
      <rect x="318.45" y="374.14" width="3.48" height="3.48"/>
      <rect x="321.93" y="374.14" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="374.14" width="3.48" height="3.48"/>
      <rect x="301.05" y="377.62" width="3.48" height="3.48"/>
      <rect x="304.53" y="377.62" width="3.48" height="3.48"/>
      <rect x="308.01" y="377.62" width="3.48" height="3.48"/>
      <rect x="311.49" y="377.62" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="377.62" width="3.48" height="3.48"/>
      <rect x="318.45" y="377.62" width="3.48" height="3.48"/>
      <rect x="321.93" y="377.62" width="3.48" height="3.48"/>
      <rect x="301.05" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="384.58" width="3.48" height="3.48"/>
      <rect x="304.53" y="384.58" width="3.48" height="3.48"/>
      <rect x="308.01" y="384.58" width="3.48" height="3.48"/>
      <rect x="311.49" y="384.58" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="384.58" width="3.48" height="3.48"/>
      <rect x="304.53" y="388.06" width="3.48" height="3.48"/>
      <rect x="308.01" y="388.06" width="3.48" height="3.48"/>
      <rect x="311.49" y="388.06" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="388.06" width="3.48" height="3.48"/>
      <rect x="304.53" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="308.01" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="311.49" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="304.53" y="395.02" width="3.48" height="3.48"/>
      <rect x="308.01" y="395.02" width="3.48" height="3.48"/>
      <rect x="311.49" y="395.02" width="3.48" height="3.48"/>
      <rect x="308.01" y="398.5" width="3.48" height="3.48"/>
      <rect x="311.49" y="398.5" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="398.5" width="3.48" height="3.48"/>
      <rect x="304.53" y="401.98" width="3.48" height="3.48"/>
      <rect x="308.01" y="401.98" width="3.48" height="3.48"/>
      <rect x="311.49" y="401.98" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="401.98" width="3.48" height="3.48"/>
      <rect x="318.45" y="401.98" width="3.48" height="3.48"/>
      <rect x="304.53" y="405.46" width="3.48" height="3.48"/>
      <rect x="308.01" y="405.46" width="3.48" height="3.48"/>
      <rect x="311.49" y="405.46" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="405.46" width="3.48" height="3.48"/>
      <rect x="304.53" y="408.94" width="3.48" height="3.48"/>
      <rect x="308.01" y="408.94" width="3.48" height="3.48"/>
      <rect x="311.49" y="408.94" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="408.94" width="3.48" height="3.48"/>
      <rect x="308.01" y="412.42" width="3.48" height="3.48"/>
      <rect x="311.49" y="412.42" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="412.42" width="3.48" height="3.48"/>
      <rect x="321.93" y="422.86" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="422.86" width="3.48" height="3.48"/>
      <rect x="328.89" y="422.86" width="3.48" height="3.48"/>
    </g>
    <g id="ZA" title="South Africa" class="land">
      <rect x="555.12" y="321.93" width="3.48" height="3.48"/>
      <rect x="551.64" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="555.12" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="558.6" y="325.40999999999997" width="3.48" height="3.48"/>
      <rect x="548.16" y="328.89" width="3.48" height="3.48"/>
      <rect x="551.64" y="328.89" width="3.48" height="3.48"/>
      <rect x="555.12" y="328.89" width="3.48" height="3.48"/>
      <rect x="558.6" y="328.89" width="3.48" height="3.48"/>
      <rect x="530.76" y="332.37" width="3.48" height="3.48"/>
      <rect x="537.72" y="332.37" width="3.48" height="3.48"/>
      <rect x="544.68" y="332.37" width="3.48" height="3.48"/>
      <rect x="548.16" y="332.37" width="3.48" height="3.48"/>
      <rect x="551.64" y="332.37" width="3.48" height="3.48"/>
      <rect x="555.12" y="332.37" width="3.48" height="3.48"/>
      <rect x="558.6" y="332.37" width="3.48" height="3.48"/>
      <rect x="537.72" y="335.86" width="3.48" height="3.48"/>
      <rect x="541.2" y="335.86" width="3.48" height="3.48"/>
      <rect x="544.68" y="335.86" width="3.48" height="3.48"/>
      <rect x="548.16" y="335.86" width="3.48" height="3.48"/>
      <rect x="551.64" y="335.86" width="3.48" height="3.48"/>
      <rect x="555.12" y="335.86" width="3.48" height="3.48"/>
      <rect x="530.76" y="339.34" width="3.48" height="3.48"/>
      <rect x="534.24" y="339.34" width="3.48" height="3.48"/>
      <rect x="537.72" y="339.34" width="3.48" height="3.48"/>
      <rect x="541.2" y="339.34" width="3.48" height="3.48"/>
      <rect x="544.68" y="339.34" width="3.48" height="3.48"/>
      <rect x="548.16" y="339.34" width="3.48" height="3.48"/>
      <rect x="551.64" y="339.34" width="3.48" height="3.48"/>
      <rect x="555.12" y="339.34" width="3.48" height="3.48"/>
      <rect x="558.6" y="339.34" width="3.48" height="3.48"/>
      <rect x="520.31" y="342.82" width="3.48" height="3.48"/>
      <rect x="527.28" y="342.82" width="3.48" height="3.48"/>
      <rect x="530.76" y="342.82" width="3.48" height="3.48"/>
      <rect x="534.24" y="342.82" width="3.48" height="3.48"/>
      <rect x="537.72" y="342.82" width="3.48" height="3.48"/>
      <rect x="541.2" y="342.82" width="3.48" height="3.48"/>
      <rect x="544.68" y="342.82" width="3.48" height="3.48"/>
      <rect x="548.16" y="342.82" width="3.48" height="3.48"/>
      <rect x="555.12" y="342.82" width="3.48" height="3.48"/>
      <rect x="558.6" y="342.82" width="3.48" height="3.48"/>
      <rect x="523.79" y="346.3" width="3.48" height="3.48"/>
      <rect x="527.28" y="346.3" width="3.48" height="3.48"/>
      <rect x="530.76" y="346.3" width="3.48" height="3.48"/>
      <rect x="534.24" y="346.3" width="3.48" height="3.48"/>
      <rect x="537.72" y="346.3" width="3.48" height="3.48"/>
      <rect x="541.2" y="346.3" width="3.48" height="3.48"/>
      <rect x="544.68" y="346.3" width="3.48" height="3.48"/>
      <rect x="555.12" y="346.3" width="3.48" height="3.48"/>
      <rect x="523.79" y="349.78" width="3.48" height="3.48"/>
      <rect x="527.28" y="349.78" width="3.48" height="3.48"/>
      <rect x="530.76" y="349.78" width="3.48" height="3.48"/>
      <rect x="534.24" y="349.78" width="3.48" height="3.48"/>
      <rect x="537.72" y="349.78" width="3.48" height="3.48"/>
      <rect x="541.2" y="349.78" width="3.48" height="3.48"/>
      <rect x="544.68" y="349.78" width="3.48" height="3.48"/>
      <rect x="548.16" y="349.78" width="3.48" height="3.48"/>
      <rect x="551.64" y="349.78" width="3.48" height="3.48"/>
      <rect x="527.28" y="353.26" width="3.48" height="3.48"/>
      <rect x="530.76" y="353.26" width="3.48" height="3.48"/>
      <rect x="534.24" y="353.26" width="3.48" height="3.48"/>
      <rect x="537.72" y="353.26" width="3.48" height="3.48"/>
      <rect x="541.2" y="353.26" width="3.48" height="3.48"/>
      <rect x="544.68" y="353.26" width="3.48" height="3.48"/>
      <rect x="548.16" y="353.26" width="3.48" height="3.48"/>
      <rect x="523.79" y="356.74" width="3.48" height="3.48"/>
      <rect x="527.28" y="356.74" width="3.48" height="3.48"/>
      <rect x="530.76" y="356.74" width="3.48" height="3.48"/>
      <rect x="534.24" y="356.74" width="3.48" height="3.48"/>
      <rect x="537.72" y="356.74" width="3.48" height="3.48"/>
      <rect x="541.2" y="356.74" width="3.48" height="3.48"/>
      <rect x="544.68" y="356.74" width="3.48" height="3.48"/>
      <rect x="527.28" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="530.76" y="360.21999999999997" width="3.48" height="3.48"/>
    </g>
    <g id="SZ" title="Eswatini" class="land">
      <rect x="558.6" y="335.86" width="3.48" height="3.48"/>
    </g>
    <g id="LS" title="Lesotho" class="land">
      <rect x="551.64" y="342.82" width="3.48" height="3.48"/>
      <rect x="548.16" y="346.3" width="3.48" height="3.48"/>
      <rect x="551.64" y="346.3" width="3.48" height="3.48"/>
    </g>
    <g id="UY" title="Uruguay" class="land">
      <rect x="328.89" y="349.78" width="3.48" height="3.48"/>
      <rect x="332.37" y="349.78" width="3.48" height="3.48"/>
      <rect x="328.89" y="353.26" width="3.48" height="3.48"/>
      <rect x="332.37" y="353.26" width="3.48" height="3.48"/>
      <rect x="335.86" y="353.26" width="3.48" height="3.48"/>
      <rect x="339.34" y="353.26" width="3.48" height="3.48"/>
      <rect x="328.89" y="356.74" width="3.48" height="3.48"/>
      <rect x="332.37" y="356.74" width="3.48" height="3.48"/>
      <rect x="335.86" y="356.74" width="3.48" height="3.48"/>
      <rect x="339.34" y="356.74" width="3.48" height="3.48"/>
      <rect x="332.37" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="360.21999999999997" width="3.48" height="3.48"/>
      <rect x="339.34" y="360.21999999999997" width="3.48" height="3.48"/>
    </g>
    <g id="NZ" title="New Zealand" class="land">
      <rect x="917.08" y="363.7" width="3.48" height="3.48"/>
      <rect x="917.08" y="367.18" width="3.48" height="3.48"/>
      <rect x="917.08" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="924.04" y="370.65999999999997" width="3.48" height="3.48"/>
      <rect x="913.6" y="374.14" width="3.48" height="3.48"/>
      <rect x="917.08" y="374.14" width="3.48" height="3.48"/>
      <rect x="920.56" y="374.14" width="3.48" height="3.48"/>
      <rect x="913.6" y="377.62" width="3.48" height="3.48"/>
      <rect x="903.15" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="906.63" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="910.11" y="381.09999999999997" width="3.48" height="3.48"/>
      <rect x="899.67" y="384.58" width="3.48" height="3.48"/>
      <rect x="903.15" y="384.58" width="3.48" height="3.48"/>
      <rect x="896.1899999999999" y="388.06" width="3.48" height="3.48"/>
      <rect x="889.23" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="892.71" y="391.53999999999996" width="3.48" height="3.48"/>
      <rect x="882.27" y="395.02" width="3.48" height="3.48"/>
      <rect x="885.75" y="395.02" width="3.48" height="3.48"/>
      <rect x="889.23" y="395.02" width="3.48" height="3.48"/>
    </g>
    <g id="AQ" title="Antarctica" class="land">
      <rect x="349.78" y="443.75" width="3.48" height="3.48"/>
      <rect x="353.26" y="447.23" width="3.48" height="3.48"/>
      <rect x="356.74" y="447.23" width="3.48" height="3.48"/>
      <rect x="342.82" y="450.71" width="3.48" height="3.48"/>
      <rect x="346.3" y="450.71" width="3.48" height="3.48"/>
      <rect x="342.82" y="454.19" width="3.48" height="3.48"/>
      <rect x="715.21" y="454.19" width="3.48" height="3.48"/>
      <rect x="335.86" y="457.67" width="3.48" height="3.48"/>
      <rect x="339.34" y="457.67" width="3.48" height="3.48"/>
      <rect x="579.48" y="457.67" width="3.48" height="3.48"/>
      <rect x="582.96" y="457.67" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="457.67" width="3.48" height="3.48"/>
      <rect x="589.92" y="457.67" width="3.48" height="3.48"/>
      <rect x="593.4" y="457.67" width="3.48" height="3.48"/>
      <rect x="596.88" y="457.67" width="3.48" height="3.48"/>
      <rect x="656.05" y="457.67" width="3.48" height="3.48"/>
      <rect x="659.53" y="457.67" width="3.48" height="3.48"/>
      <rect x="663.01" y="457.67" width="3.48" height="3.48"/>
      <rect x="666.49" y="457.67" width="3.48" height="3.48"/>
      <rect x="669.97" y="457.67" width="3.48" height="3.48"/>
      <rect x="673.45" y="457.67" width="3.48" height="3.48"/>
      <rect x="676.93" y="457.67" width="3.48" height="3.48"/>
      <rect x="680.41" y="457.67" width="3.48" height="3.48"/>
      <rect x="683.89" y="457.67" width="3.48" height="3.48"/>
      <rect x="687.37" y="457.67" width="3.48" height="3.48"/>
      <rect x="690.85" y="457.67" width="3.48" height="3.48"/>
      <rect x="694.33" y="457.67" width="3.48" height="3.48"/>
      <rect x="697.81" y="457.67" width="3.48" height="3.48"/>
      <rect x="701.29" y="457.67" width="3.48" height="3.48"/>
      <rect x="704.77" y="457.67" width="3.48" height="3.48"/>
      <rect x="708.25" y="457.67" width="3.48" height="3.48"/>
      <rect x="711.73" y="457.67" width="3.48" height="3.48"/>
      <rect x="715.21" y="457.67" width="3.48" height="3.48"/>
      <rect x="722.18" y="457.67" width="3.48" height="3.48"/>
      <rect x="725.66" y="457.67" width="3.48" height="3.48"/>
      <rect x="729.14" y="457.67" width="3.48" height="3.48"/>
      <rect x="732.62" y="457.67" width="3.48" height="3.48"/>
      <rect x="736.1" y="457.67" width="3.48" height="3.48"/>
      <rect x="739.58" y="457.67" width="3.48" height="3.48"/>
      <rect x="743.06" y="457.67" width="3.48" height="3.48"/>
      <rect x="746.54" y="457.67" width="3.48" height="3.48"/>
      <rect x="750.02" y="457.67" width="3.48" height="3.48"/>
      <rect x="753.5" y="457.67" width="3.48" height="3.48"/>
      <rect x="756.98" y="457.67" width="3.48" height="3.48"/>
      <rect x="760.46" y="457.67" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="457.67" width="3.48" height="3.48"/>
      <rect x="767.42" y="457.67" width="3.48" height="3.48"/>
      <rect x="770.9" y="457.67" width="3.48" height="3.48"/>
      <rect x="774.38" y="457.67" width="3.48" height="3.48"/>
      <rect x="777.86" y="457.67" width="3.48" height="3.48"/>
      <rect x="339.34" y="461.15" width="3.48" height="3.48"/>
      <rect x="342.82" y="461.15" width="3.48" height="3.48"/>
      <rect x="565.56" y="461.15" width="3.48" height="3.48"/>
      <rect x="569.04" y="461.15" width="3.48" height="3.48"/>
      <rect x="572.52" y="461.15" width="3.48" height="3.48"/>
      <rect x="576" y="461.15" width="3.48" height="3.48"/>
      <rect x="579.48" y="461.15" width="3.48" height="3.48"/>
      <rect x="582.96" y="461.15" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="461.15" width="3.48" height="3.48"/>
      <rect x="589.92" y="461.15" width="3.48" height="3.48"/>
      <rect x="593.4" y="461.15" width="3.48" height="3.48"/>
      <rect x="596.88" y="461.15" width="3.48" height="3.48"/>
      <rect x="600.36" y="461.15" width="3.48" height="3.48"/>
      <rect x="603.84" y="461.15" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="461.15" width="3.48" height="3.48"/>
      <rect x="610.8" y="461.15" width="3.48" height="3.48"/>
      <rect x="614.28" y="461.15" width="3.48" height="3.48"/>
      <rect x="617.76" y="461.15" width="3.48" height="3.48"/>
      <rect x="642.13" y="461.15" width="3.48" height="3.48"/>
      <rect x="645.61" y="461.15" width="3.48" height="3.48"/>
      <rect x="649.09" y="461.15" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="461.15" width="3.48" height="3.48"/>
      <rect x="656.05" y="461.15" width="3.48" height="3.48"/>
      <rect x="659.53" y="461.15" width="3.48" height="3.48"/>
      <rect x="663.01" y="461.15" width="3.48" height="3.48"/>
      <rect x="666.49" y="461.15" width="3.48" height="3.48"/>
      <rect x="669.97" y="461.15" width="3.48" height="3.48"/>
      <rect x="673.45" y="461.15" width="3.48" height="3.48"/>
      <rect x="676.93" y="461.15" width="3.48" height="3.48"/>
      <rect x="680.41" y="461.15" width="3.48" height="3.48"/>
      <rect x="683.89" y="461.15" width="3.48" height="3.48"/>
      <rect x="687.37" y="461.15" width="3.48" height="3.48"/>
      <rect x="690.85" y="461.15" width="3.48" height="3.48"/>
      <rect x="694.33" y="461.15" width="3.48" height="3.48"/>
      <rect x="697.81" y="461.15" width="3.48" height="3.48"/>
      <rect x="701.29" y="461.15" width="3.48" height="3.48"/>
      <rect x="704.77" y="461.15" width="3.48" height="3.48"/>
      <rect x="708.25" y="461.15" width="3.48" height="3.48"/>
      <rect x="711.73" y="461.15" width="3.48" height="3.48"/>
      <rect x="715.21" y="461.15" width="3.48" height="3.48"/>
      <rect x="718.7" y="461.15" width="3.48" height="3.48"/>
      <rect x="722.18" y="461.15" width="3.48" height="3.48"/>
      <rect x="725.66" y="461.15" width="3.48" height="3.48"/>
      <rect x="729.14" y="461.15" width="3.48" height="3.48"/>
      <rect x="732.62" y="461.15" width="3.48" height="3.48"/>
      <rect x="736.1" y="461.15" width="3.48" height="3.48"/>
      <rect x="739.58" y="461.15" width="3.48" height="3.48"/>
      <rect x="743.06" y="461.15" width="3.48" height="3.48"/>
      <rect x="746.54" y="461.15" width="3.48" height="3.48"/>
      <rect x="750.02" y="461.15" width="3.48" height="3.48"/>
      <rect x="753.5" y="461.15" width="3.48" height="3.48"/>
      <rect x="756.98" y="461.15" width="3.48" height="3.48"/>
      <rect x="760.46" y="461.15" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="461.15" width="3.48" height="3.48"/>
      <rect x="767.42" y="461.15" width="3.48" height="3.48"/>
      <rect x="770.9" y="461.15" width="3.48" height="3.48"/>
      <rect x="774.38" y="461.15" width="3.48" height="3.48"/>
      <rect x="777.86" y="461.15" width="3.48" height="3.48"/>
      <rect x="781.34" y="461.15" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="461.15" width="3.48" height="3.48"/>
      <rect x="332.37" y="464.63" width="3.48" height="3.48"/>
      <rect x="335.86" y="464.63" width="3.48" height="3.48"/>
      <rect x="339.34" y="464.63" width="3.48" height="3.48"/>
      <rect x="342.82" y="464.63" width="3.48" height="3.48"/>
      <rect x="346.3" y="464.63" width="3.48" height="3.48"/>
      <rect x="349.78" y="464.63" width="3.48" height="3.48"/>
      <rect x="509.87" y="464.63" width="3.48" height="3.48"/>
      <rect x="544.68" y="464.63" width="3.48" height="3.48"/>
      <rect x="548.16" y="464.63" width="3.48" height="3.48"/>
      <rect x="551.64" y="464.63" width="3.48" height="3.48"/>
      <rect x="558.6" y="464.63" width="3.48" height="3.48"/>
      <rect x="562.08" y="464.63" width="3.48" height="3.48"/>
      <rect x="565.56" y="464.63" width="3.48" height="3.48"/>
      <rect x="569.04" y="464.63" width="3.48" height="3.48"/>
      <rect x="572.52" y="464.63" width="3.48" height="3.48"/>
      <rect x="576" y="464.63" width="3.48" height="3.48"/>
      <rect x="579.48" y="464.63" width="3.48" height="3.48"/>
      <rect x="582.96" y="464.63" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="589.92" y="464.63" width="3.48" height="3.48"/>
      <rect x="593.4" y="464.63" width="3.48" height="3.48"/>
      <rect x="596.88" y="464.63" width="3.48" height="3.48"/>
      <rect x="600.36" y="464.63" width="3.48" height="3.48"/>
      <rect x="603.84" y="464.63" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="610.8" y="464.63" width="3.48" height="3.48"/>
      <rect x="614.28" y="464.63" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="635.17" y="464.63" width="3.48" height="3.48"/>
      <rect x="638.65" y="464.63" width="3.48" height="3.48"/>
      <rect x="642.13" y="464.63" width="3.48" height="3.48"/>
      <rect x="645.61" y="464.63" width="3.48" height="3.48"/>
      <rect x="649.09" y="464.63" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="656.05" y="464.63" width="3.48" height="3.48"/>
      <rect x="659.53" y="464.63" width="3.48" height="3.48"/>
      <rect x="663.01" y="464.63" width="3.48" height="3.48"/>
      <rect x="666.49" y="464.63" width="3.48" height="3.48"/>
      <rect x="669.97" y="464.63" width="3.48" height="3.48"/>
      <rect x="673.45" y="464.63" width="3.48" height="3.48"/>
      <rect x="676.93" y="464.63" width="3.48" height="3.48"/>
      <rect x="680.41" y="464.63" width="3.48" height="3.48"/>
      <rect x="683.89" y="464.63" width="3.48" height="3.48"/>
      <rect x="687.37" y="464.63" width="3.48" height="3.48"/>
      <rect x="690.85" y="464.63" width="3.48" height="3.48"/>
      <rect x="694.33" y="464.63" width="3.48" height="3.48"/>
      <rect x="697.81" y="464.63" width="3.48" height="3.48"/>
      <rect x="701.29" y="464.63" width="3.48" height="3.48"/>
      <rect x="704.77" y="464.63" width="3.48" height="3.48"/>
      <rect x="708.25" y="464.63" width="3.48" height="3.48"/>
      <rect x="711.73" y="464.63" width="3.48" height="3.48"/>
      <rect x="715.21" y="464.63" width="3.48" height="3.48"/>
      <rect x="718.7" y="464.63" width="3.48" height="3.48"/>
      <rect x="722.18" y="464.63" width="3.48" height="3.48"/>
      <rect x="725.66" y="464.63" width="3.48" height="3.48"/>
      <rect x="729.14" y="464.63" width="3.48" height="3.48"/>
      <rect x="732.62" y="464.63" width="3.48" height="3.48"/>
      <rect x="736.1" y="464.63" width="3.48" height="3.48"/>
      <rect x="739.58" y="464.63" width="3.48" height="3.48"/>
      <rect x="743.06" y="464.63" width="3.48" height="3.48"/>
      <rect x="746.54" y="464.63" width="3.48" height="3.48"/>
      <rect x="750.02" y="464.63" width="3.48" height="3.48"/>
      <rect x="753.5" y="464.63" width="3.48" height="3.48"/>
      <rect x="756.98" y="464.63" width="3.48" height="3.48"/>
      <rect x="760.46" y="464.63" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="767.42" y="464.63" width="3.48" height="3.48"/>
      <rect x="770.9" y="464.63" width="3.48" height="3.48"/>
      <rect x="774.38" y="464.63" width="3.48" height="3.48"/>
      <rect x="777.86" y="464.63" width="3.48" height="3.48"/>
      <rect x="781.34" y="464.63" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="464.63" width="3.48" height="3.48"/>
      <rect x="788.3" y="464.63" width="3.48" height="3.48"/>
      <rect x="791.78" y="464.63" width="3.48" height="3.48"/>
      <rect x="795.26" y="464.63" width="3.48" height="3.48"/>
      <rect x="798.74" y="464.63" width="3.48" height="3.48"/>
      <rect x="802.22" y="464.63" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="468.11" width="3.48" height="3.48"/>
      <rect x="335.86" y="468.11" width="3.48" height="3.48"/>
      <rect x="339.34" y="468.11" width="3.48" height="3.48"/>
      <rect x="342.82" y="468.11" width="3.48" height="3.48"/>
      <rect x="346.3" y="468.11" width="3.48" height="3.48"/>
      <rect x="349.78" y="468.11" width="3.48" height="3.48"/>
      <rect x="353.26" y="468.11" width="3.48" height="3.48"/>
      <rect x="464.63" y="468.11" width="3.48" height="3.48"/>
      <rect x="471.59" y="468.11" width="3.48" height="3.48"/>
      <rect x="482.03" y="468.11" width="3.48" height="3.48"/>
      <rect x="485.51" y="468.11" width="3.48" height="3.48"/>
      <rect x="488.99" y="468.11" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="468.11" width="3.48" height="3.48"/>
      <rect x="495.95" y="468.11" width="3.48" height="3.48"/>
      <rect x="499.43" y="468.11" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="468.11" width="3.48" height="3.48"/>
      <rect x="506.39" y="468.11" width="3.48" height="3.48"/>
      <rect x="509.87" y="468.11" width="3.48" height="3.48"/>
      <rect x="513.35" y="468.11" width="3.48" height="3.48"/>
      <rect x="516.83" y="468.11" width="3.48" height="3.48"/>
      <rect x="520.31" y="468.11" width="3.48" height="3.48"/>
      <rect x="523.79" y="468.11" width="3.48" height="3.48"/>
      <rect x="527.28" y="468.11" width="3.48" height="3.48"/>
      <rect x="530.76" y="468.11" width="3.48" height="3.48"/>
      <rect x="534.24" y="468.11" width="3.48" height="3.48"/>
      <rect x="537.72" y="468.11" width="3.48" height="3.48"/>
      <rect x="541.2" y="468.11" width="3.48" height="3.48"/>
      <rect x="544.68" y="468.11" width="3.48" height="3.48"/>
      <rect x="548.16" y="468.11" width="3.48" height="3.48"/>
      <rect x="551.64" y="468.11" width="3.48" height="3.48"/>
      <rect x="555.12" y="468.11" width="3.48" height="3.48"/>
      <rect x="558.6" y="468.11" width="3.48" height="3.48"/>
      <rect x="562.08" y="468.11" width="3.48" height="3.48"/>
      <rect x="565.56" y="468.11" width="3.48" height="3.48"/>
      <rect x="569.04" y="468.11" width="3.48" height="3.48"/>
      <rect x="572.52" y="468.11" width="3.48" height="3.48"/>
      <rect x="576" y="468.11" width="3.48" height="3.48"/>
      <rect x="579.48" y="468.11" width="3.48" height="3.48"/>
      <rect x="582.96" y="468.11" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="589.92" y="468.11" width="3.48" height="3.48"/>
      <rect x="593.4" y="468.11" width="3.48" height="3.48"/>
      <rect x="596.88" y="468.11" width="3.48" height="3.48"/>
      <rect x="600.36" y="468.11" width="3.48" height="3.48"/>
      <rect x="603.84" y="468.11" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="610.8" y="468.11" width="3.48" height="3.48"/>
      <rect x="614.28" y="468.11" width="3.48" height="3.48"/>
      <rect x="621.24" y="468.11" width="3.48" height="3.48"/>
      <rect x="624.73" y="468.11" width="3.48" height="3.48"/>
      <rect x="628.21" y="468.11" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="635.17" y="468.11" width="3.48" height="3.48"/>
      <rect x="638.65" y="468.11" width="3.48" height="3.48"/>
      <rect x="642.13" y="468.11" width="3.48" height="3.48"/>
      <rect x="645.61" y="468.11" width="3.48" height="3.48"/>
      <rect x="649.09" y="468.11" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="656.05" y="468.11" width="3.48" height="3.48"/>
      <rect x="659.53" y="468.11" width="3.48" height="3.48"/>
      <rect x="663.01" y="468.11" width="3.48" height="3.48"/>
      <rect x="666.49" y="468.11" width="3.48" height="3.48"/>
      <rect x="669.97" y="468.11" width="3.48" height="3.48"/>
      <rect x="673.45" y="468.11" width="3.48" height="3.48"/>
      <rect x="676.93" y="468.11" width="3.48" height="3.48"/>
      <rect x="680.41" y="468.11" width="3.48" height="3.48"/>
      <rect x="683.89" y="468.11" width="3.48" height="3.48"/>
      <rect x="687.37" y="468.11" width="3.48" height="3.48"/>
      <rect x="690.85" y="468.11" width="3.48" height="3.48"/>
      <rect x="694.33" y="468.11" width="3.48" height="3.48"/>
      <rect x="697.81" y="468.11" width="3.48" height="3.48"/>
      <rect x="701.29" y="468.11" width="3.48" height="3.48"/>
      <rect x="704.77" y="468.11" width="3.48" height="3.48"/>
      <rect x="708.25" y="468.11" width="3.48" height="3.48"/>
      <rect x="711.73" y="468.11" width="3.48" height="3.48"/>
      <rect x="715.21" y="468.11" width="3.48" height="3.48"/>
      <rect x="718.7" y="468.11" width="3.48" height="3.48"/>
      <rect x="722.18" y="468.11" width="3.48" height="3.48"/>
      <rect x="725.66" y="468.11" width="3.48" height="3.48"/>
      <rect x="729.14" y="468.11" width="3.48" height="3.48"/>
      <rect x="732.62" y="468.11" width="3.48" height="3.48"/>
      <rect x="736.1" y="468.11" width="3.48" height="3.48"/>
      <rect x="739.58" y="468.11" width="3.48" height="3.48"/>
      <rect x="743.06" y="468.11" width="3.48" height="3.48"/>
      <rect x="746.54" y="468.11" width="3.48" height="3.48"/>
      <rect x="750.02" y="468.11" width="3.48" height="3.48"/>
      <rect x="753.5" y="468.11" width="3.48" height="3.48"/>
      <rect x="756.98" y="468.11" width="3.48" height="3.48"/>
      <rect x="760.46" y="468.11" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="767.42" y="468.11" width="3.48" height="3.48"/>
      <rect x="770.9" y="468.11" width="3.48" height="3.48"/>
      <rect x="774.38" y="468.11" width="3.48" height="3.48"/>
      <rect x="777.86" y="468.11" width="3.48" height="3.48"/>
      <rect x="781.34" y="468.11" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="468.11" width="3.48" height="3.48"/>
      <rect x="788.3" y="468.11" width="3.48" height="3.48"/>
      <rect x="791.78" y="468.11" width="3.48" height="3.48"/>
      <rect x="795.26" y="468.11" width="3.48" height="3.48"/>
      <rect x="798.74" y="468.11" width="3.48" height="3.48"/>
      <rect x="802.22" y="468.11" width="3.48" height="3.48"/>
      <rect x="805.7" y="468.11" width="3.48" height="3.48"/>
      <rect x="809.18" y="468.11" width="3.48" height="3.48"/>
      <rect x="812.66" y="468.11" width="3.48" height="3.48"/>
      <rect x="280.17" y="471.59" width="3.48" height="3.48"/>
      <rect x="283.65" y="471.59" width="3.48" height="3.48"/>
      <rect x="287.13" y="471.59" width="3.48" height="3.48"/>
      <rect x="332.37" y="471.59" width="3.48" height="3.48"/>
      <rect x="335.86" y="471.59" width="3.48" height="3.48"/>
      <rect x="339.34" y="471.59" width="3.48" height="3.48"/>
      <rect x="346.3" y="471.59" width="3.48" height="3.48"/>
      <rect x="349.78" y="471.59" width="3.48" height="3.48"/>
      <rect x="353.26" y="471.59" width="3.48" height="3.48"/>
      <rect x="454.19" y="471.59" width="3.48" height="3.48"/>
      <rect x="457.67" y="471.59" width="3.48" height="3.48"/>
      <rect x="461.15" y="471.59" width="3.48" height="3.48"/>
      <rect x="464.63" y="471.59" width="3.48" height="3.48"/>
      <rect x="468.11" y="471.59" width="3.48" height="3.48"/>
      <rect x="471.59" y="471.59" width="3.48" height="3.48"/>
      <rect x="475.07" y="471.59" width="3.48" height="3.48"/>
      <rect x="478.55" y="471.59" width="3.48" height="3.48"/>
      <rect x="482.03" y="471.59" width="3.48" height="3.48"/>
      <rect x="485.51" y="471.59" width="3.48" height="3.48"/>
      <rect x="488.99" y="471.59" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="471.59" width="3.48" height="3.48"/>
      <rect x="495.95" y="471.59" width="3.48" height="3.48"/>
      <rect x="499.43" y="471.59" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="471.59" width="3.48" height="3.48"/>
      <rect x="506.39" y="471.59" width="3.48" height="3.48"/>
      <rect x="509.87" y="471.59" width="3.48" height="3.48"/>
      <rect x="513.35" y="471.59" width="3.48" height="3.48"/>
      <rect x="516.83" y="471.59" width="3.48" height="3.48"/>
      <rect x="520.31" y="471.59" width="3.48" height="3.48"/>
      <rect x="523.79" y="471.59" width="3.48" height="3.48"/>
      <rect x="527.28" y="471.59" width="3.48" height="3.48"/>
      <rect x="530.76" y="471.59" width="3.48" height="3.48"/>
      <rect x="534.24" y="471.59" width="3.48" height="3.48"/>
      <rect x="537.72" y="471.59" width="3.48" height="3.48"/>
      <rect x="541.2" y="471.59" width="3.48" height="3.48"/>
      <rect x="544.68" y="471.59" width="3.48" height="3.48"/>
      <rect x="548.16" y="471.59" width="3.48" height="3.48"/>
      <rect x="551.64" y="471.59" width="3.48" height="3.48"/>
      <rect x="555.12" y="471.59" width="3.48" height="3.48"/>
      <rect x="558.6" y="471.59" width="3.48" height="3.48"/>
      <rect x="562.08" y="471.59" width="3.48" height="3.48"/>
      <rect x="565.56" y="471.59" width="3.48" height="3.48"/>
      <rect x="569.04" y="471.59" width="3.48" height="3.48"/>
      <rect x="572.52" y="471.59" width="3.48" height="3.48"/>
      <rect x="576" y="471.59" width="3.48" height="3.48"/>
      <rect x="579.48" y="471.59" width="3.48" height="3.48"/>
      <rect x="582.96" y="471.59" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="589.92" y="471.59" width="3.48" height="3.48"/>
      <rect x="593.4" y="471.59" width="3.48" height="3.48"/>
      <rect x="596.88" y="471.59" width="3.48" height="3.48"/>
      <rect x="600.36" y="471.59" width="3.48" height="3.48"/>
      <rect x="603.84" y="471.59" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="614.28" y="471.59" width="3.48" height="3.48"/>
      <rect x="617.76" y="471.59" width="3.48" height="3.48"/>
      <rect x="621.24" y="471.59" width="3.48" height="3.48"/>
      <rect x="624.73" y="471.59" width="3.48" height="3.48"/>
      <rect x="628.21" y="471.59" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="635.17" y="471.59" width="3.48" height="3.48"/>
      <rect x="638.65" y="471.59" width="3.48" height="3.48"/>
      <rect x="642.13" y="471.59" width="3.48" height="3.48"/>
      <rect x="645.61" y="471.59" width="3.48" height="3.48"/>
      <rect x="649.09" y="471.59" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="656.05" y="471.59" width="3.48" height="3.48"/>
      <rect x="659.53" y="471.59" width="3.48" height="3.48"/>
      <rect x="663.01" y="471.59" width="3.48" height="3.48"/>
      <rect x="666.49" y="471.59" width="3.48" height="3.48"/>
      <rect x="669.97" y="471.59" width="3.48" height="3.48"/>
      <rect x="673.45" y="471.59" width="3.48" height="3.48"/>
      <rect x="676.93" y="471.59" width="3.48" height="3.48"/>
      <rect x="680.41" y="471.59" width="3.48" height="3.48"/>
      <rect x="683.89" y="471.59" width="3.48" height="3.48"/>
      <rect x="687.37" y="471.59" width="3.48" height="3.48"/>
      <rect x="690.85" y="471.59" width="3.48" height="3.48"/>
      <rect x="694.33" y="471.59" width="3.48" height="3.48"/>
      <rect x="697.81" y="471.59" width="3.48" height="3.48"/>
      <rect x="701.29" y="471.59" width="3.48" height="3.48"/>
      <rect x="704.77" y="471.59" width="3.48" height="3.48"/>
      <rect x="708.25" y="471.59" width="3.48" height="3.48"/>
      <rect x="711.73" y="471.59" width="3.48" height="3.48"/>
      <rect x="715.21" y="471.59" width="3.48" height="3.48"/>
      <rect x="718.7" y="471.59" width="3.48" height="3.48"/>
      <rect x="722.18" y="471.59" width="3.48" height="3.48"/>
      <rect x="725.66" y="471.59" width="3.48" height="3.48"/>
      <rect x="729.14" y="471.59" width="3.48" height="3.48"/>
      <rect x="732.62" y="471.59" width="3.48" height="3.48"/>
      <rect x="736.1" y="471.59" width="3.48" height="3.48"/>
      <rect x="739.58" y="471.59" width="3.48" height="3.48"/>
      <rect x="743.06" y="471.59" width="3.48" height="3.48"/>
      <rect x="746.54" y="471.59" width="3.48" height="3.48"/>
      <rect x="750.02" y="471.59" width="3.48" height="3.48"/>
      <rect x="753.5" y="471.59" width="3.48" height="3.48"/>
      <rect x="756.98" y="471.59" width="3.48" height="3.48"/>
      <rect x="760.46" y="471.59" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="767.42" y="471.59" width="3.48" height="3.48"/>
      <rect x="770.9" y="471.59" width="3.48" height="3.48"/>
      <rect x="774.38" y="471.59" width="3.48" height="3.48"/>
      <rect x="777.86" y="471.59" width="3.48" height="3.48"/>
      <rect x="781.34" y="471.59" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="471.59" width="3.48" height="3.48"/>
      <rect x="788.3" y="471.59" width="3.48" height="3.48"/>
      <rect x="791.78" y="471.59" width="3.48" height="3.48"/>
      <rect x="795.26" y="471.59" width="3.48" height="3.48"/>
      <rect x="798.74" y="471.59" width="3.48" height="3.48"/>
      <rect x="802.22" y="471.59" width="3.48" height="3.48"/>
      <rect x="805.7" y="471.59" width="3.48" height="3.48"/>
      <rect x="809.18" y="471.59" width="3.48" height="3.48"/>
      <rect x="812.66" y="471.59" width="3.48" height="3.48"/>
      <rect x="238.41" y="475.07" width="3.48" height="3.48"/>
      <rect x="276.69" y="475.07" width="3.48" height="3.48"/>
      <rect x="280.17" y="475.07" width="3.48" height="3.48"/>
      <rect x="283.65" y="475.07" width="3.48" height="3.48"/>
      <rect x="287.13" y="475.07" width="3.48" height="3.48"/>
      <rect x="290.61" y="475.07" width="3.48" height="3.48"/>
      <rect x="294.09" y="475.07" width="3.48" height="3.48"/>
      <rect x="297.57" y="475.07" width="3.48" height="3.48"/>
      <rect x="301.05" y="475.07" width="3.48" height="3.48"/>
      <rect x="304.53" y="475.07" width="3.48" height="3.48"/>
      <rect x="308.01" y="475.07" width="3.48" height="3.48"/>
      <rect x="311.49" y="475.07" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="475.07" width="3.48" height="3.48"/>
      <rect x="318.45" y="475.07" width="3.48" height="3.48"/>
      <rect x="321.93" y="475.07" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="475.07" width="3.48" height="3.48"/>
      <rect x="328.89" y="475.07" width="3.48" height="3.48"/>
      <rect x="332.37" y="475.07" width="3.48" height="3.48"/>
      <rect x="335.86" y="475.07" width="3.48" height="3.48"/>
      <rect x="339.34" y="475.07" width="3.48" height="3.48"/>
      <rect x="342.82" y="475.07" width="3.48" height="3.48"/>
      <rect x="346.3" y="475.07" width="3.48" height="3.48"/>
      <rect x="349.78" y="475.07" width="3.48" height="3.48"/>
      <rect x="353.26" y="475.07" width="3.48" height="3.48"/>
      <rect x="356.74" y="475.07" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="475.07" width="3.48" height="3.48"/>
      <rect x="447.23" y="475.07" width="3.48" height="3.48"/>
      <rect x="450.71" y="475.07" width="3.48" height="3.48"/>
      <rect x="454.19" y="475.07" width="3.48" height="3.48"/>
      <rect x="457.67" y="475.07" width="3.48" height="3.48"/>
      <rect x="461.15" y="475.07" width="3.48" height="3.48"/>
      <rect x="464.63" y="475.07" width="3.48" height="3.48"/>
      <rect x="468.11" y="475.07" width="3.48" height="3.48"/>
      <rect x="471.59" y="475.07" width="3.48" height="3.48"/>
      <rect x="475.07" y="475.07" width="3.48" height="3.48"/>
      <rect x="478.55" y="475.07" width="3.48" height="3.48"/>
      <rect x="482.03" y="475.07" width="3.48" height="3.48"/>
      <rect x="485.51" y="475.07" width="3.48" height="3.48"/>
      <rect x="488.99" y="475.07" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="475.07" width="3.48" height="3.48"/>
      <rect x="495.95" y="475.07" width="3.48" height="3.48"/>
      <rect x="499.43" y="475.07" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="475.07" width="3.48" height="3.48"/>
      <rect x="506.39" y="475.07" width="3.48" height="3.48"/>
      <rect x="509.87" y="475.07" width="3.48" height="3.48"/>
      <rect x="513.35" y="475.07" width="3.48" height="3.48"/>
      <rect x="516.83" y="475.07" width="3.48" height="3.48"/>
      <rect x="520.31" y="475.07" width="3.48" height="3.48"/>
      <rect x="523.79" y="475.07" width="3.48" height="3.48"/>
      <rect x="527.28" y="475.07" width="3.48" height="3.48"/>
      <rect x="530.76" y="475.07" width="3.48" height="3.48"/>
      <rect x="534.24" y="475.07" width="3.48" height="3.48"/>
      <rect x="537.72" y="475.07" width="3.48" height="3.48"/>
      <rect x="541.2" y="475.07" width="3.48" height="3.48"/>
      <rect x="544.68" y="475.07" width="3.48" height="3.48"/>
      <rect x="548.16" y="475.07" width="3.48" height="3.48"/>
      <rect x="551.64" y="475.07" width="3.48" height="3.48"/>
      <rect x="555.12" y="475.07" width="3.48" height="3.48"/>
      <rect x="558.6" y="475.07" width="3.48" height="3.48"/>
      <rect x="562.08" y="475.07" width="3.48" height="3.48"/>
      <rect x="565.56" y="475.07" width="3.48" height="3.48"/>
      <rect x="569.04" y="475.07" width="3.48" height="3.48"/>
      <rect x="572.52" y="475.07" width="3.48" height="3.48"/>
      <rect x="576" y="475.07" width="3.48" height="3.48"/>
      <rect x="579.48" y="475.07" width="3.48" height="3.48"/>
      <rect x="582.96" y="475.07" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="589.92" y="475.07" width="3.48" height="3.48"/>
      <rect x="593.4" y="475.07" width="3.48" height="3.48"/>
      <rect x="596.88" y="475.07" width="3.48" height="3.48"/>
      <rect x="600.36" y="475.07" width="3.48" height="3.48"/>
      <rect x="603.84" y="475.07" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="610.8" y="475.07" width="3.48" height="3.48"/>
      <rect x="614.28" y="475.07" width="3.48" height="3.48"/>
      <rect x="617.76" y="475.07" width="3.48" height="3.48"/>
      <rect x="621.24" y="475.07" width="3.48" height="3.48"/>
      <rect x="624.73" y="475.07" width="3.48" height="3.48"/>
      <rect x="628.21" y="475.07" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="635.17" y="475.07" width="3.48" height="3.48"/>
      <rect x="638.65" y="475.07" width="3.48" height="3.48"/>
      <rect x="642.13" y="475.07" width="3.48" height="3.48"/>
      <rect x="645.61" y="475.07" width="3.48" height="3.48"/>
      <rect x="649.09" y="475.07" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="656.05" y="475.07" width="3.48" height="3.48"/>
      <rect x="659.53" y="475.07" width="3.48" height="3.48"/>
      <rect x="663.01" y="475.07" width="3.48" height="3.48"/>
      <rect x="666.49" y="475.07" width="3.48" height="3.48"/>
      <rect x="669.97" y="475.07" width="3.48" height="3.48"/>
      <rect x="673.45" y="475.07" width="3.48" height="3.48"/>
      <rect x="676.93" y="475.07" width="3.48" height="3.48"/>
      <rect x="680.41" y="475.07" width="3.48" height="3.48"/>
      <rect x="683.89" y="475.07" width="3.48" height="3.48"/>
      <rect x="687.37" y="475.07" width="3.48" height="3.48"/>
      <rect x="690.85" y="475.07" width="3.48" height="3.48"/>
      <rect x="694.33" y="475.07" width="3.48" height="3.48"/>
      <rect x="697.81" y="475.07" width="3.48" height="3.48"/>
      <rect x="701.29" y="475.07" width="3.48" height="3.48"/>
      <rect x="704.77" y="475.07" width="3.48" height="3.48"/>
      <rect x="708.25" y="475.07" width="3.48" height="3.48"/>
      <rect x="711.73" y="475.07" width="3.48" height="3.48"/>
      <rect x="715.21" y="475.07" width="3.48" height="3.48"/>
      <rect x="718.7" y="475.07" width="3.48" height="3.48"/>
      <rect x="722.18" y="475.07" width="3.48" height="3.48"/>
      <rect x="725.66" y="475.07" width="3.48" height="3.48"/>
      <rect x="729.14" y="475.07" width="3.48" height="3.48"/>
      <rect x="732.62" y="475.07" width="3.48" height="3.48"/>
      <rect x="736.1" y="475.07" width="3.48" height="3.48"/>
      <rect x="739.58" y="475.07" width="3.48" height="3.48"/>
      <rect x="743.06" y="475.07" width="3.48" height="3.48"/>
      <rect x="746.54" y="475.07" width="3.48" height="3.48"/>
      <rect x="750.02" y="475.07" width="3.48" height="3.48"/>
      <rect x="753.5" y="475.07" width="3.48" height="3.48"/>
      <rect x="756.98" y="475.07" width="3.48" height="3.48"/>
      <rect x="760.46" y="475.07" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="767.42" y="475.07" width="3.48" height="3.48"/>
      <rect x="770.9" y="475.07" width="3.48" height="3.48"/>
      <rect x="774.38" y="475.07" width="3.48" height="3.48"/>
      <rect x="777.86" y="475.07" width="3.48" height="3.48"/>
      <rect x="781.34" y="475.07" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="475.07" width="3.48" height="3.48"/>
      <rect x="788.3" y="475.07" width="3.48" height="3.48"/>
      <rect x="791.78" y="475.07" width="3.48" height="3.48"/>
      <rect x="795.26" y="475.07" width="3.48" height="3.48"/>
      <rect x="798.74" y="475.07" width="3.48" height="3.48"/>
      <rect x="210.56" y="478.55" width="3.48" height="3.48"/>
      <rect x="214.04" y="478.55" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="478.55" width="3.48" height="3.48"/>
      <rect x="221" y="478.55" width="3.48" height="3.48"/>
      <rect x="224.48" y="478.55" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="478.55" width="3.48" height="3.48"/>
      <rect x="231.44" y="478.55" width="3.48" height="3.48"/>
      <rect x="234.92" y="478.55" width="3.48" height="3.48"/>
      <rect x="238.41" y="478.55" width="3.48" height="3.48"/>
      <rect x="241.89" y="478.55" width="3.48" height="3.48"/>
      <rect x="245.37" y="478.55" width="3.48" height="3.48"/>
      <rect x="248.85" y="478.55" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="478.55" width="3.48" height="3.48"/>
      <rect x="255.81" y="478.55" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="478.55" width="3.48" height="3.48"/>
      <rect x="266.25" y="478.55" width="3.48" height="3.48"/>
      <rect x="276.69" y="478.55" width="3.48" height="3.48"/>
      <rect x="280.17" y="478.55" width="3.48" height="3.48"/>
      <rect x="287.13" y="478.55" width="3.48" height="3.48"/>
      <rect x="290.61" y="478.55" width="3.48" height="3.48"/>
      <rect x="294.09" y="478.55" width="3.48" height="3.48"/>
      <rect x="297.57" y="478.55" width="3.48" height="3.48"/>
      <rect x="301.05" y="478.55" width="3.48" height="3.48"/>
      <rect x="304.53" y="478.55" width="3.48" height="3.48"/>
      <rect x="308.01" y="478.55" width="3.48" height="3.48"/>
      <rect x="311.49" y="478.55" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="478.55" width="3.48" height="3.48"/>
      <rect x="318.45" y="478.55" width="3.48" height="3.48"/>
      <rect x="321.93" y="478.55" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="478.55" width="3.48" height="3.48"/>
      <rect x="328.89" y="478.55" width="3.48" height="3.48"/>
      <rect x="332.37" y="478.55" width="3.48" height="3.48"/>
      <rect x="335.86" y="478.55" width="3.48" height="3.48"/>
      <rect x="339.34" y="478.55" width="3.48" height="3.48"/>
      <rect x="342.82" y="478.55" width="3.48" height="3.48"/>
      <rect x="346.3" y="478.55" width="3.48" height="3.48"/>
      <rect x="349.78" y="478.55" width="3.48" height="3.48"/>
      <rect x="353.26" y="478.55" width="3.48" height="3.48"/>
      <rect x="443.75" y="478.55" width="3.48" height="3.48"/>
      <rect x="447.23" y="478.55" width="3.48" height="3.48"/>
      <rect x="450.71" y="478.55" width="3.48" height="3.48"/>
      <rect x="454.19" y="478.55" width="3.48" height="3.48"/>
      <rect x="457.67" y="478.55" width="3.48" height="3.48"/>
      <rect x="461.15" y="478.55" width="3.48" height="3.48"/>
      <rect x="464.63" y="478.55" width="3.48" height="3.48"/>
      <rect x="468.11" y="478.55" width="3.48" height="3.48"/>
      <rect x="471.59" y="478.55" width="3.48" height="3.48"/>
      <rect x="475.07" y="478.55" width="3.48" height="3.48"/>
      <rect x="478.55" y="478.55" width="3.48" height="3.48"/>
      <rect x="482.03" y="478.55" width="3.48" height="3.48"/>
      <rect x="485.51" y="478.55" width="3.48" height="3.48"/>
      <rect x="488.99" y="478.55" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="478.55" width="3.48" height="3.48"/>
      <rect x="495.95" y="478.55" width="3.48" height="3.48"/>
      <rect x="499.43" y="478.55" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="478.55" width="3.48" height="3.48"/>
      <rect x="506.39" y="478.55" width="3.48" height="3.48"/>
      <rect x="509.87" y="478.55" width="3.48" height="3.48"/>
      <rect x="513.35" y="478.55" width="3.48" height="3.48"/>
      <rect x="516.83" y="478.55" width="3.48" height="3.48"/>
      <rect x="520.31" y="478.55" width="3.48" height="3.48"/>
      <rect x="523.79" y="478.55" width="3.48" height="3.48"/>
      <rect x="527.28" y="478.55" width="3.48" height="3.48"/>
      <rect x="530.76" y="478.55" width="3.48" height="3.48"/>
      <rect x="534.24" y="478.55" width="3.48" height="3.48"/>
      <rect x="537.72" y="478.55" width="3.48" height="3.48"/>
      <rect x="541.2" y="478.55" width="3.48" height="3.48"/>
      <rect x="544.68" y="478.55" width="3.48" height="3.48"/>
      <rect x="548.16" y="478.55" width="3.48" height="3.48"/>
      <rect x="551.64" y="478.55" width="3.48" height="3.48"/>
      <rect x="555.12" y="478.55" width="3.48" height="3.48"/>
      <rect x="558.6" y="478.55" width="3.48" height="3.48"/>
      <rect x="562.08" y="478.55" width="3.48" height="3.48"/>
      <rect x="565.56" y="478.55" width="3.48" height="3.48"/>
      <rect x="569.04" y="478.55" width="3.48" height="3.48"/>
      <rect x="572.52" y="478.55" width="3.48" height="3.48"/>
      <rect x="576" y="478.55" width="3.48" height="3.48"/>
      <rect x="579.48" y="478.55" width="3.48" height="3.48"/>
      <rect x="582.96" y="478.55" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="589.92" y="478.55" width="3.48" height="3.48"/>
      <rect x="593.4" y="478.55" width="3.48" height="3.48"/>
      <rect x="596.88" y="478.55" width="3.48" height="3.48"/>
      <rect x="600.36" y="478.55" width="3.48" height="3.48"/>
      <rect x="603.84" y="478.55" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="610.8" y="478.55" width="3.48" height="3.48"/>
      <rect x="614.28" y="478.55" width="3.48" height="3.48"/>
      <rect x="617.76" y="478.55" width="3.48" height="3.48"/>
      <rect x="621.24" y="478.55" width="3.48" height="3.48"/>
      <rect x="624.73" y="478.55" width="3.48" height="3.48"/>
      <rect x="628.21" y="478.55" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="635.17" y="478.55" width="3.48" height="3.48"/>
      <rect x="638.65" y="478.55" width="3.48" height="3.48"/>
      <rect x="642.13" y="478.55" width="3.48" height="3.48"/>
      <rect x="645.61" y="478.55" width="3.48" height="3.48"/>
      <rect x="649.09" y="478.55" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="656.05" y="478.55" width="3.48" height="3.48"/>
      <rect x="659.53" y="478.55" width="3.48" height="3.48"/>
      <rect x="663.01" y="478.55" width="3.48" height="3.48"/>
      <rect x="666.49" y="478.55" width="3.48" height="3.48"/>
      <rect x="669.97" y="478.55" width="3.48" height="3.48"/>
      <rect x="673.45" y="478.55" width="3.48" height="3.48"/>
      <rect x="676.93" y="478.55" width="3.48" height="3.48"/>
      <rect x="680.41" y="478.55" width="3.48" height="3.48"/>
      <rect x="683.89" y="478.55" width="3.48" height="3.48"/>
      <rect x="687.37" y="478.55" width="3.48" height="3.48"/>
      <rect x="690.85" y="478.55" width="3.48" height="3.48"/>
      <rect x="694.33" y="478.55" width="3.48" height="3.48"/>
      <rect x="697.81" y="478.55" width="3.48" height="3.48"/>
      <rect x="701.29" y="478.55" width="3.48" height="3.48"/>
      <rect x="704.77" y="478.55" width="3.48" height="3.48"/>
      <rect x="708.25" y="478.55" width="3.48" height="3.48"/>
      <rect x="711.73" y="478.55" width="3.48" height="3.48"/>
      <rect x="715.21" y="478.55" width="3.48" height="3.48"/>
      <rect x="718.7" y="478.55" width="3.48" height="3.48"/>
      <rect x="722.18" y="478.55" width="3.48" height="3.48"/>
      <rect x="725.66" y="478.55" width="3.48" height="3.48"/>
      <rect x="729.14" y="478.55" width="3.48" height="3.48"/>
      <rect x="732.62" y="478.55" width="3.48" height="3.48"/>
      <rect x="736.1" y="478.55" width="3.48" height="3.48"/>
      <rect x="739.58" y="478.55" width="3.48" height="3.48"/>
      <rect x="743.06" y="478.55" width="3.48" height="3.48"/>
      <rect x="746.54" y="478.55" width="3.48" height="3.48"/>
      <rect x="750.02" y="478.55" width="3.48" height="3.48"/>
      <rect x="753.5" y="478.55" width="3.48" height="3.48"/>
      <rect x="756.98" y="478.55" width="3.48" height="3.48"/>
      <rect x="760.46" y="478.55" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="767.42" y="478.55" width="3.48" height="3.48"/>
      <rect x="770.9" y="478.55" width="3.48" height="3.48"/>
      <rect x="774.38" y="478.55" width="3.48" height="3.48"/>
      <rect x="777.86" y="478.55" width="3.48" height="3.48"/>
      <rect x="781.34" y="478.55" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="478.55" width="3.48" height="3.48"/>
      <rect x="788.3" y="478.55" width="3.48" height="3.48"/>
      <rect x="200.12" y="482.03" width="3.48" height="3.48"/>
      <rect x="203.6" y="482.03" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="482.03" width="3.48" height="3.48"/>
      <rect x="210.56" y="482.03" width="3.48" height="3.48"/>
      <rect x="214.04" y="482.03" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="482.03" width="3.48" height="3.48"/>
      <rect x="221" y="482.03" width="3.48" height="3.48"/>
      <rect x="224.48" y="482.03" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="482.03" width="3.48" height="3.48"/>
      <rect x="231.44" y="482.03" width="3.48" height="3.48"/>
      <rect x="234.92" y="482.03" width="3.48" height="3.48"/>
      <rect x="238.41" y="482.03" width="3.48" height="3.48"/>
      <rect x="241.89" y="482.03" width="3.48" height="3.48"/>
      <rect x="245.37" y="482.03" width="3.48" height="3.48"/>
      <rect x="248.85" y="482.03" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="482.03" width="3.48" height="3.48"/>
      <rect x="255.81" y="482.03" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="482.03" width="3.48" height="3.48"/>
      <rect x="262.77" y="482.03" width="3.48" height="3.48"/>
      <rect x="266.25" y="482.03" width="3.48" height="3.48"/>
      <rect x="269.73" y="482.03" width="3.48" height="3.48"/>
      <rect x="273.21" y="482.03" width="3.48" height="3.48"/>
      <rect x="276.69" y="482.03" width="3.48" height="3.48"/>
      <rect x="280.17" y="482.03" width="3.48" height="3.48"/>
      <rect x="283.65" y="482.03" width="3.48" height="3.48"/>
      <rect x="287.13" y="482.03" width="3.48" height="3.48"/>
      <rect x="290.61" y="482.03" width="3.48" height="3.48"/>
      <rect x="294.09" y="482.03" width="3.48" height="3.48"/>
      <rect x="297.57" y="482.03" width="3.48" height="3.48"/>
      <rect x="301.05" y="482.03" width="3.48" height="3.48"/>
      <rect x="304.53" y="482.03" width="3.48" height="3.48"/>
      <rect x="308.01" y="482.03" width="3.48" height="3.48"/>
      <rect x="311.49" y="482.03" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="482.03" width="3.48" height="3.48"/>
      <rect x="318.45" y="482.03" width="3.48" height="3.48"/>
      <rect x="321.93" y="482.03" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="482.03" width="3.48" height="3.48"/>
      <rect x="328.89" y="482.03" width="3.48" height="3.48"/>
      <rect x="335.86" y="482.03" width="3.48" height="3.48"/>
      <rect x="339.34" y="482.03" width="3.48" height="3.48"/>
      <rect x="342.82" y="482.03" width="3.48" height="3.48"/>
      <rect x="422.86" y="482.03" width="3.48" height="3.48"/>
      <rect x="426.34" y="482.03" width="3.48" height="3.48"/>
      <rect x="429.82" y="482.03" width="3.48" height="3.48"/>
      <rect x="433.31" y="482.03" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="482.03" width="3.48" height="3.48"/>
      <rect x="440.27" y="482.03" width="3.48" height="3.48"/>
      <rect x="443.75" y="482.03" width="3.48" height="3.48"/>
      <rect x="447.23" y="482.03" width="3.48" height="3.48"/>
      <rect x="450.71" y="482.03" width="3.48" height="3.48"/>
      <rect x="454.19" y="482.03" width="3.48" height="3.48"/>
      <rect x="457.67" y="482.03" width="3.48" height="3.48"/>
      <rect x="461.15" y="482.03" width="3.48" height="3.48"/>
      <rect x="464.63" y="482.03" width="3.48" height="3.48"/>
      <rect x="468.11" y="482.03" width="3.48" height="3.48"/>
      <rect x="471.59" y="482.03" width="3.48" height="3.48"/>
      <rect x="475.07" y="482.03" width="3.48" height="3.48"/>
      <rect x="478.55" y="482.03" width="3.48" height="3.48"/>
      <rect x="482.03" y="482.03" width="3.48" height="3.48"/>
      <rect x="485.51" y="482.03" width="3.48" height="3.48"/>
      <rect x="488.99" y="482.03" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="482.03" width="3.48" height="3.48"/>
      <rect x="495.95" y="482.03" width="3.48" height="3.48"/>
      <rect x="499.43" y="482.03" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="482.03" width="3.48" height="3.48"/>
      <rect x="506.39" y="482.03" width="3.48" height="3.48"/>
      <rect x="509.87" y="482.03" width="3.48" height="3.48"/>
      <rect x="513.35" y="482.03" width="3.48" height="3.48"/>
      <rect x="516.83" y="482.03" width="3.48" height="3.48"/>
      <rect x="520.31" y="482.03" width="3.48" height="3.48"/>
      <rect x="523.79" y="482.03" width="3.48" height="3.48"/>
      <rect x="527.28" y="482.03" width="3.48" height="3.48"/>
      <rect x="530.76" y="482.03" width="3.48" height="3.48"/>
      <rect x="534.24" y="482.03" width="3.48" height="3.48"/>
      <rect x="537.72" y="482.03" width="3.48" height="3.48"/>
      <rect x="541.2" y="482.03" width="3.48" height="3.48"/>
      <rect x="544.68" y="482.03" width="3.48" height="3.48"/>
      <rect x="548.16" y="482.03" width="3.48" height="3.48"/>
      <rect x="551.64" y="482.03" width="3.48" height="3.48"/>
      <rect x="555.12" y="482.03" width="3.48" height="3.48"/>
      <rect x="558.6" y="482.03" width="3.48" height="3.48"/>
      <rect x="562.08" y="482.03" width="3.48" height="3.48"/>
      <rect x="565.56" y="482.03" width="3.48" height="3.48"/>
      <rect x="569.04" y="482.03" width="3.48" height="3.48"/>
      <rect x="572.52" y="482.03" width="3.48" height="3.48"/>
      <rect x="576" y="482.03" width="3.48" height="3.48"/>
      <rect x="579.48" y="482.03" width="3.48" height="3.48"/>
      <rect x="582.96" y="482.03" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="589.92" y="482.03" width="3.48" height="3.48"/>
      <rect x="593.4" y="482.03" width="3.48" height="3.48"/>
      <rect x="596.88" y="482.03" width="3.48" height="3.48"/>
      <rect x="600.36" y="482.03" width="3.48" height="3.48"/>
      <rect x="603.84" y="482.03" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="610.8" y="482.03" width="3.48" height="3.48"/>
      <rect x="614.28" y="482.03" width="3.48" height="3.48"/>
      <rect x="617.76" y="482.03" width="3.48" height="3.48"/>
      <rect x="621.24" y="482.03" width="3.48" height="3.48"/>
      <rect x="624.73" y="482.03" width="3.48" height="3.48"/>
      <rect x="628.21" y="482.03" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="635.17" y="482.03" width="3.48" height="3.48"/>
      <rect x="638.65" y="482.03" width="3.48" height="3.48"/>
      <rect x="642.13" y="482.03" width="3.48" height="3.48"/>
      <rect x="645.61" y="482.03" width="3.48" height="3.48"/>
      <rect x="649.09" y="482.03" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="656.05" y="482.03" width="3.48" height="3.48"/>
      <rect x="659.53" y="482.03" width="3.48" height="3.48"/>
      <rect x="663.01" y="482.03" width="3.48" height="3.48"/>
      <rect x="666.49" y="482.03" width="3.48" height="3.48"/>
      <rect x="669.97" y="482.03" width="3.48" height="3.48"/>
      <rect x="673.45" y="482.03" width="3.48" height="3.48"/>
      <rect x="676.93" y="482.03" width="3.48" height="3.48"/>
      <rect x="680.41" y="482.03" width="3.48" height="3.48"/>
      <rect x="683.89" y="482.03" width="3.48" height="3.48"/>
      <rect x="687.37" y="482.03" width="3.48" height="3.48"/>
      <rect x="690.85" y="482.03" width="3.48" height="3.48"/>
      <rect x="694.33" y="482.03" width="3.48" height="3.48"/>
      <rect x="697.81" y="482.03" width="3.48" height="3.48"/>
      <rect x="701.29" y="482.03" width="3.48" height="3.48"/>
      <rect x="704.77" y="482.03" width="3.48" height="3.48"/>
      <rect x="708.25" y="482.03" width="3.48" height="3.48"/>
      <rect x="711.73" y="482.03" width="3.48" height="3.48"/>
      <rect x="715.21" y="482.03" width="3.48" height="3.48"/>
      <rect x="718.7" y="482.03" width="3.48" height="3.48"/>
      <rect x="722.18" y="482.03" width="3.48" height="3.48"/>
      <rect x="725.66" y="482.03" width="3.48" height="3.48"/>
      <rect x="729.14" y="482.03" width="3.48" height="3.48"/>
      <rect x="732.62" y="482.03" width="3.48" height="3.48"/>
      <rect x="736.1" y="482.03" width="3.48" height="3.48"/>
      <rect x="739.58" y="482.03" width="3.48" height="3.48"/>
      <rect x="743.06" y="482.03" width="3.48" height="3.48"/>
      <rect x="746.54" y="482.03" width="3.48" height="3.48"/>
      <rect x="750.02" y="482.03" width="3.48" height="3.48"/>
      <rect x="753.5" y="482.03" width="3.48" height="3.48"/>
      <rect x="756.98" y="482.03" width="3.48" height="3.48"/>
      <rect x="760.46" y="482.03" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="767.42" y="482.03" width="3.48" height="3.48"/>
      <rect x="770.9" y="482.03" width="3.48" height="3.48"/>
      <rect x="774.38" y="482.03" width="3.48" height="3.48"/>
      <rect x="777.86" y="482.03" width="3.48" height="3.48"/>
      <rect x="781.34" y="482.03" width="3.48" height="3.48"/>
      <rect x="784.8199999999999" y="482.03" width="3.48" height="3.48"/>
      <rect x="186.2" y="485.51" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="485.51" width="3.48" height="3.48"/>
      <rect x="193.16" y="485.51" width="3.48" height="3.48"/>
      <rect x="196.64" y="485.51" width="3.48" height="3.48"/>
      <rect x="200.12" y="485.51" width="3.48" height="3.48"/>
      <rect x="203.6" y="485.51" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="485.51" width="3.48" height="3.48"/>
      <rect x="210.56" y="485.51" width="3.48" height="3.48"/>
      <rect x="214.04" y="485.51" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="485.51" width="3.48" height="3.48"/>
      <rect x="221" y="485.51" width="3.48" height="3.48"/>
      <rect x="224.48" y="485.51" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="485.51" width="3.48" height="3.48"/>
      <rect x="231.44" y="485.51" width="3.48" height="3.48"/>
      <rect x="234.92" y="485.51" width="3.48" height="3.48"/>
      <rect x="238.41" y="485.51" width="3.48" height="3.48"/>
      <rect x="241.89" y="485.51" width="3.48" height="3.48"/>
      <rect x="245.37" y="485.51" width="3.48" height="3.48"/>
      <rect x="248.85" y="485.51" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="485.51" width="3.48" height="3.48"/>
      <rect x="255.81" y="485.51" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="485.51" width="3.48" height="3.48"/>
      <rect x="262.77" y="485.51" width="3.48" height="3.48"/>
      <rect x="266.25" y="485.51" width="3.48" height="3.48"/>
      <rect x="269.73" y="485.51" width="3.48" height="3.48"/>
      <rect x="273.21" y="485.51" width="3.48" height="3.48"/>
      <rect x="276.69" y="485.51" width="3.48" height="3.48"/>
      <rect x="280.17" y="485.51" width="3.48" height="3.48"/>
      <rect x="283.65" y="485.51" width="3.48" height="3.48"/>
      <rect x="287.13" y="485.51" width="3.48" height="3.48"/>
      <rect x="290.61" y="485.51" width="3.48" height="3.48"/>
      <rect x="294.09" y="485.51" width="3.48" height="3.48"/>
      <rect x="297.57" y="485.51" width="3.48" height="3.48"/>
      <rect x="301.05" y="485.51" width="3.48" height="3.48"/>
      <rect x="304.53" y="485.51" width="3.48" height="3.48"/>
      <rect x="308.01" y="485.51" width="3.48" height="3.48"/>
      <rect x="311.49" y="485.51" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="485.51" width="3.48" height="3.48"/>
      <rect x="318.45" y="485.51" width="3.48" height="3.48"/>
      <rect x="321.93" y="485.51" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="485.51" width="3.48" height="3.48"/>
      <rect x="335.86" y="485.51" width="3.48" height="3.48"/>
      <rect x="388.06" y="485.51" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="485.51" width="3.48" height="3.48"/>
      <rect x="412.42" y="485.51" width="3.48" height="3.48"/>
      <rect x="415.9" y="485.51" width="3.48" height="3.48"/>
      <rect x="419.38" y="485.51" width="3.48" height="3.48"/>
      <rect x="422.86" y="485.51" width="3.48" height="3.48"/>
      <rect x="426.34" y="485.51" width="3.48" height="3.48"/>
      <rect x="429.82" y="485.51" width="3.48" height="3.48"/>
      <rect x="433.31" y="485.51" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="485.51" width="3.48" height="3.48"/>
      <rect x="440.27" y="485.51" width="3.48" height="3.48"/>
      <rect x="443.75" y="485.51" width="3.48" height="3.48"/>
      <rect x="447.23" y="485.51" width="3.48" height="3.48"/>
      <rect x="450.71" y="485.51" width="3.48" height="3.48"/>
      <rect x="454.19" y="485.51" width="3.48" height="3.48"/>
      <rect x="457.67" y="485.51" width="3.48" height="3.48"/>
      <rect x="461.15" y="485.51" width="3.48" height="3.48"/>
      <rect x="464.63" y="485.51" width="3.48" height="3.48"/>
      <rect x="468.11" y="485.51" width="3.48" height="3.48"/>
      <rect x="471.59" y="485.51" width="3.48" height="3.48"/>
      <rect x="475.07" y="485.51" width="3.48" height="3.48"/>
      <rect x="478.55" y="485.51" width="3.48" height="3.48"/>
      <rect x="482.03" y="485.51" width="3.48" height="3.48"/>
      <rect x="485.51" y="485.51" width="3.48" height="3.48"/>
      <rect x="488.99" y="485.51" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="485.51" width="3.48" height="3.48"/>
      <rect x="495.95" y="485.51" width="3.48" height="3.48"/>
      <rect x="499.43" y="485.51" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="485.51" width="3.48" height="3.48"/>
      <rect x="506.39" y="485.51" width="3.48" height="3.48"/>
      <rect x="509.87" y="485.51" width="3.48" height="3.48"/>
      <rect x="513.35" y="485.51" width="3.48" height="3.48"/>
      <rect x="516.83" y="485.51" width="3.48" height="3.48"/>
      <rect x="520.31" y="485.51" width="3.48" height="3.48"/>
      <rect x="523.79" y="485.51" width="3.48" height="3.48"/>
      <rect x="527.28" y="485.51" width="3.48" height="3.48"/>
      <rect x="530.76" y="485.51" width="3.48" height="3.48"/>
      <rect x="534.24" y="485.51" width="3.48" height="3.48"/>
      <rect x="537.72" y="485.51" width="3.48" height="3.48"/>
      <rect x="541.2" y="485.51" width="3.48" height="3.48"/>
      <rect x="544.68" y="485.51" width="3.48" height="3.48"/>
      <rect x="548.16" y="485.51" width="3.48" height="3.48"/>
      <rect x="551.64" y="485.51" width="3.48" height="3.48"/>
      <rect x="555.12" y="485.51" width="3.48" height="3.48"/>
      <rect x="558.6" y="485.51" width="3.48" height="3.48"/>
      <rect x="562.08" y="485.51" width="3.48" height="3.48"/>
      <rect x="565.56" y="485.51" width="3.48" height="3.48"/>
      <rect x="569.04" y="485.51" width="3.48" height="3.48"/>
      <rect x="572.52" y="485.51" width="3.48" height="3.48"/>
      <rect x="576" y="485.51" width="3.48" height="3.48"/>
      <rect x="579.48" y="485.51" width="3.48" height="3.48"/>
      <rect x="582.96" y="485.51" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="485.51" width="3.48" height="3.48"/>
      <rect x="589.92" y="485.51" width="3.48" height="3.48"/>
      <rect x="593.4" y="485.51" width="3.48" height="3.48"/>
      <rect x="596.88" y="485.51" width="3.48" height="3.48"/>
      <rect x="600.36" y="485.51" width="3.48" height="3.48"/>
      <rect x="603.84" y="485.51" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="485.51" width="3.48" height="3.48"/>
      <rect x="610.8" y="485.51" width="3.48" height="3.48"/>
      <rect x="614.28" y="485.51" width="3.48" height="3.48"/>
      <rect x="617.76" y="485.51" width="3.48" height="3.48"/>
      <rect x="621.24" y="485.51" width="3.48" height="3.48"/>
      <rect x="624.73" y="485.51" width="3.48" height="3.48"/>
      <rect x="628.21" y="485.51" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="485.51" width="3.48" height="3.48"/>
      <rect x="635.17" y="485.51" width="3.48" height="3.48"/>
      <rect x="638.65" y="485.51" width="3.48" height="3.48"/>
      <rect x="642.13" y="485.51" width="3.48" height="3.48"/>
      <rect x="645.61" y="485.51" width="3.48" height="3.48"/>
      <rect x="649.09" y="485.51" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="485.51" width="3.48" height="3.48"/>
      <rect x="656.05" y="485.51" width="3.48" height="3.48"/>
      <rect x="659.53" y="485.51" width="3.48" height="3.48"/>
      <rect x="663.01" y="485.51" width="3.48" height="3.48"/>
      <rect x="666.49" y="485.51" width="3.48" height="3.48"/>
      <rect x="669.97" y="485.51" width="3.48" height="3.48"/>
      <rect x="673.45" y="485.51" width="3.48" height="3.48"/>
      <rect x="676.93" y="485.51" width="3.48" height="3.48"/>
      <rect x="680.41" y="485.51" width="3.48" height="3.48"/>
      <rect x="683.89" y="485.51" width="3.48" height="3.48"/>
      <rect x="687.37" y="485.51" width="3.48" height="3.48"/>
      <rect x="690.85" y="485.51" width="3.48" height="3.48"/>
      <rect x="694.33" y="485.51" width="3.48" height="3.48"/>
      <rect x="697.81" y="485.51" width="3.48" height="3.48"/>
      <rect x="701.29" y="485.51" width="3.48" height="3.48"/>
      <rect x="704.77" y="485.51" width="3.48" height="3.48"/>
      <rect x="708.25" y="485.51" width="3.48" height="3.48"/>
      <rect x="711.73" y="485.51" width="3.48" height="3.48"/>
      <rect x="715.21" y="485.51" width="3.48" height="3.48"/>
      <rect x="718.7" y="485.51" width="3.48" height="3.48"/>
      <rect x="722.18" y="485.51" width="3.48" height="3.48"/>
      <rect x="725.66" y="485.51" width="3.48" height="3.48"/>
      <rect x="729.14" y="485.51" width="3.48" height="3.48"/>
      <rect x="732.62" y="485.51" width="3.48" height="3.48"/>
      <rect x="736.1" y="485.51" width="3.48" height="3.48"/>
      <rect x="739.58" y="485.51" width="3.48" height="3.48"/>
      <rect x="743.06" y="485.51" width="3.48" height="3.48"/>
      <rect x="746.54" y="485.51" width="3.48" height="3.48"/>
      <rect x="750.02" y="485.51" width="3.48" height="3.48"/>
      <rect x="753.5" y="485.51" width="3.48" height="3.48"/>
      <rect x="756.98" y="485.51" width="3.48" height="3.48"/>
      <rect x="760.46" y="485.51" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="485.51" width="3.48" height="3.48"/>
      <rect x="767.42" y="485.51" width="3.48" height="3.48"/>
      <rect x="770.9" y="485.51" width="3.48" height="3.48"/>
      <rect x="774.38" y="485.51" width="3.48" height="3.48"/>
      <rect x="777.86" y="485.51" width="3.48" height="3.48"/>
      <rect x="781.34" y="485.51" width="3.48" height="3.48"/>
      <rect x="182.72" y="488.99" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="488.99" width="3.48" height="3.48"/>
      <rect x="210.56" y="488.99" width="3.48" height="3.48"/>
      <rect x="214.04" y="488.99" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="488.99" width="3.48" height="3.48"/>
      <rect x="221" y="488.99" width="3.48" height="3.48"/>
      <rect x="224.48" y="488.99" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="488.99" width="3.48" height="3.48"/>
      <rect x="231.44" y="488.99" width="3.48" height="3.48"/>
      <rect x="234.92" y="488.99" width="3.48" height="3.48"/>
      <rect x="238.41" y="488.99" width="3.48" height="3.48"/>
      <rect x="241.89" y="488.99" width="3.48" height="3.48"/>
      <rect x="245.37" y="488.99" width="3.48" height="3.48"/>
      <rect x="248.85" y="488.99" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="488.99" width="3.48" height="3.48"/>
      <rect x="255.81" y="488.99" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="488.99" width="3.48" height="3.48"/>
      <rect x="262.77" y="488.99" width="3.48" height="3.48"/>
      <rect x="266.25" y="488.99" width="3.48" height="3.48"/>
      <rect x="269.73" y="488.99" width="3.48" height="3.48"/>
      <rect x="273.21" y="488.99" width="3.48" height="3.48"/>
      <rect x="276.69" y="488.99" width="3.48" height="3.48"/>
      <rect x="280.17" y="488.99" width="3.48" height="3.48"/>
      <rect x="283.65" y="488.99" width="3.48" height="3.48"/>
      <rect x="287.13" y="488.99" width="3.48" height="3.48"/>
      <rect x="290.61" y="488.99" width="3.48" height="3.48"/>
      <rect x="294.09" y="488.99" width="3.48" height="3.48"/>
      <rect x="297.57" y="488.99" width="3.48" height="3.48"/>
      <rect x="301.05" y="488.99" width="3.48" height="3.48"/>
      <rect x="304.53" y="488.99" width="3.48" height="3.48"/>
      <rect x="308.01" y="488.99" width="3.48" height="3.48"/>
      <rect x="311.49" y="488.99" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="488.99" width="3.48" height="3.48"/>
      <rect x="318.45" y="488.99" width="3.48" height="3.48"/>
      <rect x="321.93" y="488.99" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="488.99" width="3.48" height="3.48"/>
      <rect x="328.89" y="488.99" width="3.48" height="3.48"/>
      <rect x="332.37" y="488.99" width="3.48" height="3.48"/>
      <rect x="335.86" y="488.99" width="3.48" height="3.48"/>
      <rect x="353.26" y="488.99" width="3.48" height="3.48"/>
      <rect x="384.58" y="488.99" width="3.48" height="3.48"/>
      <rect x="388.06" y="488.99" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="488.99" width="3.48" height="3.48"/>
      <rect x="395.02" y="488.99" width="3.48" height="3.48"/>
      <rect x="426.34" y="488.99" width="3.48" height="3.48"/>
      <rect x="429.82" y="488.99" width="3.48" height="3.48"/>
      <rect x="433.31" y="488.99" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="488.99" width="3.48" height="3.48"/>
      <rect x="440.27" y="488.99" width="3.48" height="3.48"/>
      <rect x="443.75" y="488.99" width="3.48" height="3.48"/>
      <rect x="447.23" y="488.99" width="3.48" height="3.48"/>
      <rect x="450.71" y="488.99" width="3.48" height="3.48"/>
      <rect x="454.19" y="488.99" width="3.48" height="3.48"/>
      <rect x="457.67" y="488.99" width="3.48" height="3.48"/>
      <rect x="461.15" y="488.99" width="3.48" height="3.48"/>
      <rect x="464.63" y="488.99" width="3.48" height="3.48"/>
      <rect x="468.11" y="488.99" width="3.48" height="3.48"/>
      <rect x="471.59" y="488.99" width="3.48" height="3.48"/>
      <rect x="475.07" y="488.99" width="3.48" height="3.48"/>
      <rect x="478.55" y="488.99" width="3.48" height="3.48"/>
      <rect x="482.03" y="488.99" width="3.48" height="3.48"/>
      <rect x="485.51" y="488.99" width="3.48" height="3.48"/>
      <rect x="488.99" y="488.99" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="488.99" width="3.48" height="3.48"/>
      <rect x="495.95" y="488.99" width="3.48" height="3.48"/>
      <rect x="499.43" y="488.99" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="488.99" width="3.48" height="3.48"/>
      <rect x="506.39" y="488.99" width="3.48" height="3.48"/>
      <rect x="509.87" y="488.99" width="3.48" height="3.48"/>
      <rect x="513.35" y="488.99" width="3.48" height="3.48"/>
      <rect x="516.83" y="488.99" width="3.48" height="3.48"/>
      <rect x="520.31" y="488.99" width="3.48" height="3.48"/>
      <rect x="523.79" y="488.99" width="3.48" height="3.48"/>
      <rect x="527.28" y="488.99" width="3.48" height="3.48"/>
      <rect x="530.76" y="488.99" width="3.48" height="3.48"/>
      <rect x="534.24" y="488.99" width="3.48" height="3.48"/>
      <rect x="537.72" y="488.99" width="3.48" height="3.48"/>
      <rect x="541.2" y="488.99" width="3.48" height="3.48"/>
      <rect x="544.68" y="488.99" width="3.48" height="3.48"/>
      <rect x="548.16" y="488.99" width="3.48" height="3.48"/>
      <rect x="551.64" y="488.99" width="3.48" height="3.48"/>
      <rect x="555.12" y="488.99" width="3.48" height="3.48"/>
      <rect x="558.6" y="488.99" width="3.48" height="3.48"/>
      <rect x="562.08" y="488.99" width="3.48" height="3.48"/>
      <rect x="565.56" y="488.99" width="3.48" height="3.48"/>
      <rect x="569.04" y="488.99" width="3.48" height="3.48"/>
      <rect x="572.52" y="488.99" width="3.48" height="3.48"/>
      <rect x="576" y="488.99" width="3.48" height="3.48"/>
      <rect x="579.48" y="488.99" width="3.48" height="3.48"/>
      <rect x="582.96" y="488.99" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="488.99" width="3.48" height="3.48"/>
      <rect x="589.92" y="488.99" width="3.48" height="3.48"/>
      <rect x="593.4" y="488.99" width="3.48" height="3.48"/>
      <rect x="596.88" y="488.99" width="3.48" height="3.48"/>
      <rect x="600.36" y="488.99" width="3.48" height="3.48"/>
      <rect x="603.84" y="488.99" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="488.99" width="3.48" height="3.48"/>
      <rect x="610.8" y="488.99" width="3.48" height="3.48"/>
      <rect x="614.28" y="488.99" width="3.48" height="3.48"/>
      <rect x="617.76" y="488.99" width="3.48" height="3.48"/>
      <rect x="621.24" y="488.99" width="3.48" height="3.48"/>
      <rect x="624.73" y="488.99" width="3.48" height="3.48"/>
      <rect x="628.21" y="488.99" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="488.99" width="3.48" height="3.48"/>
      <rect x="635.17" y="488.99" width="3.48" height="3.48"/>
      <rect x="638.65" y="488.99" width="3.48" height="3.48"/>
      <rect x="642.13" y="488.99" width="3.48" height="3.48"/>
      <rect x="645.61" y="488.99" width="3.48" height="3.48"/>
      <rect x="649.09" y="488.99" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="488.99" width="3.48" height="3.48"/>
      <rect x="656.05" y="488.99" width="3.48" height="3.48"/>
      <rect x="659.53" y="488.99" width="3.48" height="3.48"/>
      <rect x="663.01" y="488.99" width="3.48" height="3.48"/>
      <rect x="666.49" y="488.99" width="3.48" height="3.48"/>
      <rect x="669.97" y="488.99" width="3.48" height="3.48"/>
      <rect x="673.45" y="488.99" width="3.48" height="3.48"/>
      <rect x="676.93" y="488.99" width="3.48" height="3.48"/>
      <rect x="680.41" y="488.99" width="3.48" height="3.48"/>
      <rect x="683.89" y="488.99" width="3.48" height="3.48"/>
      <rect x="687.37" y="488.99" width="3.48" height="3.48"/>
      <rect x="690.85" y="488.99" width="3.48" height="3.48"/>
      <rect x="694.33" y="488.99" width="3.48" height="3.48"/>
      <rect x="697.81" y="488.99" width="3.48" height="3.48"/>
      <rect x="701.29" y="488.99" width="3.48" height="3.48"/>
      <rect x="704.77" y="488.99" width="3.48" height="3.48"/>
      <rect x="708.25" y="488.99" width="3.48" height="3.48"/>
      <rect x="711.73" y="488.99" width="3.48" height="3.48"/>
      <rect x="715.21" y="488.99" width="3.48" height="3.48"/>
      <rect x="718.7" y="488.99" width="3.48" height="3.48"/>
      <rect x="722.18" y="488.99" width="3.48" height="3.48"/>
      <rect x="725.66" y="488.99" width="3.48" height="3.48"/>
      <rect x="729.14" y="488.99" width="3.48" height="3.48"/>
      <rect x="732.62" y="488.99" width="3.48" height="3.48"/>
      <rect x="736.1" y="488.99" width="3.48" height="3.48"/>
      <rect x="739.58" y="488.99" width="3.48" height="3.48"/>
      <rect x="743.06" y="488.99" width="3.48" height="3.48"/>
      <rect x="746.54" y="488.99" width="3.48" height="3.48"/>
      <rect x="750.02" y="488.99" width="3.48" height="3.48"/>
      <rect x="753.5" y="488.99" width="3.48" height="3.48"/>
      <rect x="756.98" y="488.99" width="3.48" height="3.48"/>
      <rect x="760.46" y="488.99" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="488.99" width="3.48" height="3.48"/>
      <rect x="767.42" y="488.99" width="3.48" height="3.48"/>
      <rect x="196.64" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="200.12" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="203.6" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="210.56" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="214.04" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="221" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="224.48" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="231.44" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="234.92" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="238.41" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="241.89" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="245.37" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="248.85" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="255.81" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="262.77" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="266.25" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="269.73" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="273.21" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="276.69" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="280.17" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="283.65" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="287.13" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="290.61" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="318.45" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="328.89" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="332.37" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="339.34" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="342.82" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="346.3" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="349.78" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="353.26" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="405.46" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="408.94" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="412.42" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="415.9" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="419.38" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="422.86" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="426.34" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="429.82" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="433.31" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="440.27" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="443.75" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="447.23" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="450.71" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="454.19" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="457.67" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="461.15" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="464.63" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="468.11" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="471.59" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="475.07" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="478.55" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="482.03" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="485.51" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="488.99" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="495.95" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="499.43" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="506.39" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="509.87" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="513.35" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="516.83" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="520.31" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="523.79" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="527.28" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="530.76" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="534.24" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="537.72" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="541.2" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="544.68" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="548.16" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="551.64" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="555.12" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="558.6" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="562.08" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="565.56" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="569.04" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="572.52" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="576" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="579.48" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="582.96" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="589.92" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="593.4" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="596.88" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="600.36" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="603.84" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="610.8" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="614.28" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="617.76" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="621.24" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="624.73" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="628.21" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="635.17" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="638.65" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="642.13" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="645.61" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="649.09" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="656.05" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="659.53" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="663.01" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="666.49" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="669.97" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="673.45" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="676.93" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="680.41" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="683.89" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="687.37" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="690.85" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="694.33" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="697.81" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="701.29" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="704.77" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="708.25" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="711.73" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="715.21" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="718.7" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="722.18" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="725.66" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="729.14" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="732.62" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="736.1" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="739.58" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="743.06" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="746.54" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="750.02" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="753.5" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="756.98" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="760.46" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="492.46999999999997" width="3.48" height="3.48"/>
      <rect x="175.76" y="495.95" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="495.95" width="3.48" height="3.48"/>
      <rect x="193.16" y="495.95" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="495.95" width="3.48" height="3.48"/>
      <rect x="210.56" y="495.95" width="3.48" height="3.48"/>
      <rect x="214.04" y="495.95" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="495.95" width="3.48" height="3.48"/>
      <rect x="221" y="495.95" width="3.48" height="3.48"/>
      <rect x="224.48" y="495.95" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="495.95" width="3.48" height="3.48"/>
      <rect x="231.44" y="495.95" width="3.48" height="3.48"/>
      <rect x="234.92" y="495.95" width="3.48" height="3.48"/>
      <rect x="238.41" y="495.95" width="3.48" height="3.48"/>
      <rect x="241.89" y="495.95" width="3.48" height="3.48"/>
      <rect x="245.37" y="495.95" width="3.48" height="3.48"/>
      <rect x="248.85" y="495.95" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="495.95" width="3.48" height="3.48"/>
      <rect x="255.81" y="495.95" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="495.95" width="3.48" height="3.48"/>
      <rect x="262.77" y="495.95" width="3.48" height="3.48"/>
      <rect x="266.25" y="495.95" width="3.48" height="3.48"/>
      <rect x="269.73" y="495.95" width="3.48" height="3.48"/>
      <rect x="273.21" y="495.95" width="3.48" height="3.48"/>
      <rect x="276.69" y="495.95" width="3.48" height="3.48"/>
      <rect x="280.17" y="495.95" width="3.48" height="3.48"/>
      <rect x="283.65" y="495.95" width="3.48" height="3.48"/>
      <rect x="287.13" y="495.95" width="3.48" height="3.48"/>
      <rect x="290.61" y="495.95" width="3.48" height="3.48"/>
      <rect x="294.09" y="495.95" width="3.48" height="3.48"/>
      <rect x="297.57" y="495.95" width="3.48" height="3.48"/>
      <rect x="301.05" y="495.95" width="3.48" height="3.48"/>
      <rect x="304.53" y="495.95" width="3.48" height="3.48"/>
      <rect x="308.01" y="495.95" width="3.48" height="3.48"/>
      <rect x="311.49" y="495.95" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="318.45" y="495.95" width="3.48" height="3.48"/>
      <rect x="321.93" y="495.95" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="328.89" y="495.95" width="3.48" height="3.48"/>
      <rect x="332.37" y="495.95" width="3.48" height="3.48"/>
      <rect x="335.86" y="495.95" width="3.48" height="3.48"/>
      <rect x="339.34" y="495.95" width="3.48" height="3.48"/>
      <rect x="342.82" y="495.95" width="3.48" height="3.48"/>
      <rect x="346.3" y="495.95" width="3.48" height="3.48"/>
      <rect x="349.78" y="495.95" width="3.48" height="3.48"/>
      <rect x="353.26" y="495.95" width="3.48" height="3.48"/>
      <rect x="356.74" y="495.95" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="363.7" y="495.95" width="3.48" height="3.48"/>
      <rect x="367.18" y="495.95" width="3.48" height="3.48"/>
      <rect x="377.62" y="495.95" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="384.58" y="495.95" width="3.48" height="3.48"/>
      <rect x="388.06" y="495.95" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="495.95" width="3.48" height="3.48"/>
      <rect x="395.02" y="495.95" width="3.48" height="3.48"/>
      <rect x="398.5" y="495.95" width="3.48" height="3.48"/>
      <rect x="401.98" y="495.95" width="3.48" height="3.48"/>
      <rect x="405.46" y="495.95" width="3.48" height="3.48"/>
      <rect x="408.94" y="495.95" width="3.48" height="3.48"/>
      <rect x="412.42" y="495.95" width="3.48" height="3.48"/>
      <rect x="415.9" y="495.95" width="3.48" height="3.48"/>
      <rect x="419.38" y="495.95" width="3.48" height="3.48"/>
      <rect x="422.86" y="495.95" width="3.48" height="3.48"/>
      <rect x="426.34" y="495.95" width="3.48" height="3.48"/>
      <rect x="429.82" y="495.95" width="3.48" height="3.48"/>
      <rect x="433.31" y="495.95" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="495.95" width="3.48" height="3.48"/>
      <rect x="440.27" y="495.95" width="3.48" height="3.48"/>
      <rect x="443.75" y="495.95" width="3.48" height="3.48"/>
      <rect x="447.23" y="495.95" width="3.48" height="3.48"/>
      <rect x="450.71" y="495.95" width="3.48" height="3.48"/>
      <rect x="454.19" y="495.95" width="3.48" height="3.48"/>
      <rect x="457.67" y="495.95" width="3.48" height="3.48"/>
      <rect x="461.15" y="495.95" width="3.48" height="3.48"/>
      <rect x="464.63" y="495.95" width="3.48" height="3.48"/>
      <rect x="468.11" y="495.95" width="3.48" height="3.48"/>
      <rect x="471.59" y="495.95" width="3.48" height="3.48"/>
      <rect x="475.07" y="495.95" width="3.48" height="3.48"/>
      <rect x="478.55" y="495.95" width="3.48" height="3.48"/>
      <rect x="482.03" y="495.95" width="3.48" height="3.48"/>
      <rect x="485.51" y="495.95" width="3.48" height="3.48"/>
      <rect x="488.99" y="495.95" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="495.95" y="495.95" width="3.48" height="3.48"/>
      <rect x="499.43" y="495.95" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="495.95" width="3.48" height="3.48"/>
      <rect x="506.39" y="495.95" width="3.48" height="3.48"/>
      <rect x="509.87" y="495.95" width="3.48" height="3.48"/>
      <rect x="513.35" y="495.95" width="3.48" height="3.48"/>
      <rect x="516.83" y="495.95" width="3.48" height="3.48"/>
      <rect x="520.31" y="495.95" width="3.48" height="3.48"/>
      <rect x="523.79" y="495.95" width="3.48" height="3.48"/>
      <rect x="527.28" y="495.95" width="3.48" height="3.48"/>
      <rect x="530.76" y="495.95" width="3.48" height="3.48"/>
      <rect x="534.24" y="495.95" width="3.48" height="3.48"/>
      <rect x="537.72" y="495.95" width="3.48" height="3.48"/>
      <rect x="541.2" y="495.95" width="3.48" height="3.48"/>
      <rect x="544.68" y="495.95" width="3.48" height="3.48"/>
      <rect x="548.16" y="495.95" width="3.48" height="3.48"/>
      <rect x="551.64" y="495.95" width="3.48" height="3.48"/>
      <rect x="555.12" y="495.95" width="3.48" height="3.48"/>
      <rect x="558.6" y="495.95" width="3.48" height="3.48"/>
      <rect x="562.08" y="495.95" width="3.48" height="3.48"/>
      <rect x="565.56" y="495.95" width="3.48" height="3.48"/>
      <rect x="569.04" y="495.95" width="3.48" height="3.48"/>
      <rect x="572.52" y="495.95" width="3.48" height="3.48"/>
      <rect x="576" y="495.95" width="3.48" height="3.48"/>
      <rect x="579.48" y="495.95" width="3.48" height="3.48"/>
      <rect x="582.96" y="495.95" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="495.95" width="3.48" height="3.48"/>
      <rect x="589.92" y="495.95" width="3.48" height="3.48"/>
      <rect x="593.4" y="495.95" width="3.48" height="3.48"/>
      <rect x="596.88" y="495.95" width="3.48" height="3.48"/>
      <rect x="600.36" y="495.95" width="3.48" height="3.48"/>
      <rect x="603.84" y="495.95" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="495.95" width="3.48" height="3.48"/>
      <rect x="610.8" y="495.95" width="3.48" height="3.48"/>
      <rect x="614.28" y="495.95" width="3.48" height="3.48"/>
      <rect x="617.76" y="495.95" width="3.48" height="3.48"/>
      <rect x="621.24" y="495.95" width="3.48" height="3.48"/>
      <rect x="624.73" y="495.95" width="3.48" height="3.48"/>
      <rect x="628.21" y="495.95" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="495.95" width="3.48" height="3.48"/>
      <rect x="635.17" y="495.95" width="3.48" height="3.48"/>
      <rect x="638.65" y="495.95" width="3.48" height="3.48"/>
      <rect x="642.13" y="495.95" width="3.48" height="3.48"/>
      <rect x="645.61" y="495.95" width="3.48" height="3.48"/>
      <rect x="649.09" y="495.95" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="495.95" width="3.48" height="3.48"/>
      <rect x="656.05" y="495.95" width="3.48" height="3.48"/>
      <rect x="659.53" y="495.95" width="3.48" height="3.48"/>
      <rect x="663.01" y="495.95" width="3.48" height="3.48"/>
      <rect x="666.49" y="495.95" width="3.48" height="3.48"/>
      <rect x="669.97" y="495.95" width="3.48" height="3.48"/>
      <rect x="673.45" y="495.95" width="3.48" height="3.48"/>
      <rect x="676.93" y="495.95" width="3.48" height="3.48"/>
      <rect x="680.41" y="495.95" width="3.48" height="3.48"/>
      <rect x="683.89" y="495.95" width="3.48" height="3.48"/>
      <rect x="687.37" y="495.95" width="3.48" height="3.48"/>
      <rect x="690.85" y="495.95" width="3.48" height="3.48"/>
      <rect x="694.33" y="495.95" width="3.48" height="3.48"/>
      <rect x="697.81" y="495.95" width="3.48" height="3.48"/>
      <rect x="701.29" y="495.95" width="3.48" height="3.48"/>
      <rect x="704.77" y="495.95" width="3.48" height="3.48"/>
      <rect x="708.25" y="495.95" width="3.48" height="3.48"/>
      <rect x="711.73" y="495.95" width="3.48" height="3.48"/>
      <rect x="715.21" y="495.95" width="3.48" height="3.48"/>
      <rect x="718.7" y="495.95" width="3.48" height="3.48"/>
      <rect x="722.18" y="495.95" width="3.48" height="3.48"/>
      <rect x="725.66" y="495.95" width="3.48" height="3.48"/>
      <rect x="729.14" y="495.95" width="3.48" height="3.48"/>
      <rect x="732.62" y="495.95" width="3.48" height="3.48"/>
      <rect x="736.1" y="495.95" width="3.48" height="3.48"/>
      <rect x="739.58" y="495.95" width="3.48" height="3.48"/>
      <rect x="743.06" y="495.95" width="3.48" height="3.48"/>
      <rect x="746.54" y="495.95" width="3.48" height="3.48"/>
      <rect x="750.02" y="495.95" width="3.48" height="3.48"/>
      <rect x="753.5" y="495.95" width="3.48" height="3.48"/>
      <rect x="756.98" y="495.95" width="3.48" height="3.48"/>
      <rect x="760.46" y="495.95" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="495.95" width="3.48" height="3.48"/>
      <rect x="767.42" y="495.95" width="3.48" height="3.48"/>
      <rect x="175.76" y="499.43" width="3.48" height="3.48"/>
      <rect x="179.23999999999998" y="499.43" width="3.48" height="3.48"/>
      <rect x="182.72" y="499.43" width="3.48" height="3.48"/>
      <rect x="186.2" y="499.43" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="499.43" width="3.48" height="3.48"/>
      <rect x="193.16" y="499.43" width="3.48" height="3.48"/>
      <rect x="196.64" y="499.43" width="3.48" height="3.48"/>
      <rect x="200.12" y="499.43" width="3.48" height="3.48"/>
      <rect x="203.6" y="499.43" width="3.48" height="3.48"/>
      <rect x="214.04" y="499.43" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="499.43" width="3.48" height="3.48"/>
      <rect x="221" y="499.43" width="3.48" height="3.48"/>
      <rect x="224.48" y="499.43" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="499.43" width="3.48" height="3.48"/>
      <rect x="231.44" y="499.43" width="3.48" height="3.48"/>
      <rect x="234.92" y="499.43" width="3.48" height="3.48"/>
      <rect x="238.41" y="499.43" width="3.48" height="3.48"/>
      <rect x="241.89" y="499.43" width="3.48" height="3.48"/>
      <rect x="245.37" y="499.43" width="3.48" height="3.48"/>
      <rect x="248.85" y="499.43" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="499.43" width="3.48" height="3.48"/>
      <rect x="255.81" y="499.43" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="499.43" width="3.48" height="3.48"/>
      <rect x="262.77" y="499.43" width="3.48" height="3.48"/>
      <rect x="266.25" y="499.43" width="3.48" height="3.48"/>
      <rect x="269.73" y="499.43" width="3.48" height="3.48"/>
      <rect x="273.21" y="499.43" width="3.48" height="3.48"/>
      <rect x="276.69" y="499.43" width="3.48" height="3.48"/>
      <rect x="280.17" y="499.43" width="3.48" height="3.48"/>
      <rect x="283.65" y="499.43" width="3.48" height="3.48"/>
      <rect x="287.13" y="499.43" width="3.48" height="3.48"/>
      <rect x="290.61" y="499.43" width="3.48" height="3.48"/>
      <rect x="294.09" y="499.43" width="3.48" height="3.48"/>
      <rect x="297.57" y="499.43" width="3.48" height="3.48"/>
      <rect x="301.05" y="499.43" width="3.48" height="3.48"/>
      <rect x="304.53" y="499.43" width="3.48" height="3.48"/>
      <rect x="308.01" y="499.43" width="3.48" height="3.48"/>
      <rect x="311.49" y="499.43" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="318.45" y="499.43" width="3.48" height="3.48"/>
      <rect x="321.93" y="499.43" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="328.89" y="499.43" width="3.48" height="3.48"/>
      <rect x="332.37" y="499.43" width="3.48" height="3.48"/>
      <rect x="335.86" y="499.43" width="3.48" height="3.48"/>
      <rect x="339.34" y="499.43" width="3.48" height="3.48"/>
      <rect x="342.82" y="499.43" width="3.48" height="3.48"/>
      <rect x="346.3" y="499.43" width="3.48" height="3.48"/>
      <rect x="349.78" y="499.43" width="3.48" height="3.48"/>
      <rect x="353.26" y="499.43" width="3.48" height="3.48"/>
      <rect x="356.74" y="499.43" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="363.7" y="499.43" width="3.48" height="3.48"/>
      <rect x="367.18" y="499.43" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="374.14" y="499.43" width="3.48" height="3.48"/>
      <rect x="377.62" y="499.43" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="384.58" y="499.43" width="3.48" height="3.48"/>
      <rect x="388.06" y="499.43" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="499.43" width="3.48" height="3.48"/>
      <rect x="395.02" y="499.43" width="3.48" height="3.48"/>
      <rect x="398.5" y="499.43" width="3.48" height="3.48"/>
      <rect x="401.98" y="499.43" width="3.48" height="3.48"/>
      <rect x="405.46" y="499.43" width="3.48" height="3.48"/>
      <rect x="408.94" y="499.43" width="3.48" height="3.48"/>
      <rect x="412.42" y="499.43" width="3.48" height="3.48"/>
      <rect x="415.9" y="499.43" width="3.48" height="3.48"/>
      <rect x="419.38" y="499.43" width="3.48" height="3.48"/>
      <rect x="422.86" y="499.43" width="3.48" height="3.48"/>
      <rect x="426.34" y="499.43" width="3.48" height="3.48"/>
      <rect x="429.82" y="499.43" width="3.48" height="3.48"/>
      <rect x="433.31" y="499.43" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="499.43" width="3.48" height="3.48"/>
      <rect x="440.27" y="499.43" width="3.48" height="3.48"/>
      <rect x="443.75" y="499.43" width="3.48" height="3.48"/>
      <rect x="447.23" y="499.43" width="3.48" height="3.48"/>
      <rect x="450.71" y="499.43" width="3.48" height="3.48"/>
      <rect x="454.19" y="499.43" width="3.48" height="3.48"/>
      <rect x="457.67" y="499.43" width="3.48" height="3.48"/>
      <rect x="461.15" y="499.43" width="3.48" height="3.48"/>
      <rect x="464.63" y="499.43" width="3.48" height="3.48"/>
      <rect x="468.11" y="499.43" width="3.48" height="3.48"/>
      <rect x="471.59" y="499.43" width="3.48" height="3.48"/>
      <rect x="475.07" y="499.43" width="3.48" height="3.48"/>
      <rect x="478.55" y="499.43" width="3.48" height="3.48"/>
      <rect x="482.03" y="499.43" width="3.48" height="3.48"/>
      <rect x="485.51" y="499.43" width="3.48" height="3.48"/>
      <rect x="488.99" y="499.43" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="495.95" y="499.43" width="3.48" height="3.48"/>
      <rect x="499.43" y="499.43" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="499.43" width="3.48" height="3.48"/>
      <rect x="506.39" y="499.43" width="3.48" height="3.48"/>
      <rect x="509.87" y="499.43" width="3.48" height="3.48"/>
      <rect x="513.35" y="499.43" width="3.48" height="3.48"/>
      <rect x="516.83" y="499.43" width="3.48" height="3.48"/>
      <rect x="520.31" y="499.43" width="3.48" height="3.48"/>
      <rect x="523.79" y="499.43" width="3.48" height="3.48"/>
      <rect x="527.28" y="499.43" width="3.48" height="3.48"/>
      <rect x="530.76" y="499.43" width="3.48" height="3.48"/>
      <rect x="534.24" y="499.43" width="3.48" height="3.48"/>
      <rect x="537.72" y="499.43" width="3.48" height="3.48"/>
      <rect x="541.2" y="499.43" width="3.48" height="3.48"/>
      <rect x="544.68" y="499.43" width="3.48" height="3.48"/>
      <rect x="548.16" y="499.43" width="3.48" height="3.48"/>
      <rect x="551.64" y="499.43" width="3.48" height="3.48"/>
      <rect x="555.12" y="499.43" width="3.48" height="3.48"/>
      <rect x="558.6" y="499.43" width="3.48" height="3.48"/>
      <rect x="562.08" y="499.43" width="3.48" height="3.48"/>
      <rect x="565.56" y="499.43" width="3.48" height="3.48"/>
      <rect x="569.04" y="499.43" width="3.48" height="3.48"/>
      <rect x="572.52" y="499.43" width="3.48" height="3.48"/>
      <rect x="576" y="499.43" width="3.48" height="3.48"/>
      <rect x="579.48" y="499.43" width="3.48" height="3.48"/>
      <rect x="582.96" y="499.43" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="499.43" width="3.48" height="3.48"/>
      <rect x="589.92" y="499.43" width="3.48" height="3.48"/>
      <rect x="593.4" y="499.43" width="3.48" height="3.48"/>
      <rect x="596.88" y="499.43" width="3.48" height="3.48"/>
      <rect x="600.36" y="499.43" width="3.48" height="3.48"/>
      <rect x="603.84" y="499.43" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="499.43" width="3.48" height="3.48"/>
      <rect x="610.8" y="499.43" width="3.48" height="3.48"/>
      <rect x="614.28" y="499.43" width="3.48" height="3.48"/>
      <rect x="617.76" y="499.43" width="3.48" height="3.48"/>
      <rect x="621.24" y="499.43" width="3.48" height="3.48"/>
      <rect x="624.73" y="499.43" width="3.48" height="3.48"/>
      <rect x="628.21" y="499.43" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="499.43" width="3.48" height="3.48"/>
      <rect x="635.17" y="499.43" width="3.48" height="3.48"/>
      <rect x="638.65" y="499.43" width="3.48" height="3.48"/>
      <rect x="642.13" y="499.43" width="3.48" height="3.48"/>
      <rect x="645.61" y="499.43" width="3.48" height="3.48"/>
      <rect x="649.09" y="499.43" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="499.43" width="3.48" height="3.48"/>
      <rect x="656.05" y="499.43" width="3.48" height="3.48"/>
      <rect x="659.53" y="499.43" width="3.48" height="3.48"/>
      <rect x="663.01" y="499.43" width="3.48" height="3.48"/>
      <rect x="666.49" y="499.43" width="3.48" height="3.48"/>
      <rect x="669.97" y="499.43" width="3.48" height="3.48"/>
      <rect x="673.45" y="499.43" width="3.48" height="3.48"/>
      <rect x="676.93" y="499.43" width="3.48" height="3.48"/>
      <rect x="680.41" y="499.43" width="3.48" height="3.48"/>
      <rect x="683.89" y="499.43" width="3.48" height="3.48"/>
      <rect x="687.37" y="499.43" width="3.48" height="3.48"/>
      <rect x="690.85" y="499.43" width="3.48" height="3.48"/>
      <rect x="694.33" y="499.43" width="3.48" height="3.48"/>
      <rect x="697.81" y="499.43" width="3.48" height="3.48"/>
      <rect x="701.29" y="499.43" width="3.48" height="3.48"/>
      <rect x="704.77" y="499.43" width="3.48" height="3.48"/>
      <rect x="708.25" y="499.43" width="3.48" height="3.48"/>
      <rect x="711.73" y="499.43" width="3.48" height="3.48"/>
      <rect x="715.21" y="499.43" width="3.48" height="3.48"/>
      <rect x="718.7" y="499.43" width="3.48" height="3.48"/>
      <rect x="722.18" y="499.43" width="3.48" height="3.48"/>
      <rect x="725.66" y="499.43" width="3.48" height="3.48"/>
      <rect x="729.14" y="499.43" width="3.48" height="3.48"/>
      <rect x="732.62" y="499.43" width="3.48" height="3.48"/>
      <rect x="736.1" y="499.43" width="3.48" height="3.48"/>
      <rect x="739.58" y="499.43" width="3.48" height="3.48"/>
      <rect x="743.06" y="499.43" width="3.48" height="3.48"/>
      <rect x="746.54" y="499.43" width="3.48" height="3.48"/>
      <rect x="750.02" y="499.43" width="3.48" height="3.48"/>
      <rect x="753.5" y="499.43" width="3.48" height="3.48"/>
      <rect x="756.98" y="499.43" width="3.48" height="3.48"/>
      <rect x="760.46" y="499.43" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="499.43" width="3.48" height="3.48"/>
      <rect x="767.42" y="499.43" width="3.48" height="3.48"/>
      <rect x="770.9" y="499.43" width="3.48" height="3.48"/>
      <rect x="774.38" y="499.43" width="3.48" height="3.48"/>
      <rect x="777.86" y="499.43" width="3.48" height="3.48"/>
      <rect x="189.67999999999998" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="193.16" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="196.64" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="200.12" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="203.6" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="207.07999999999998" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="210.56" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="214.04" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="217.51999999999998" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="221" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="224.48" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="227.95999999999998" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="231.44" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="234.92" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="238.41" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="241.89" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="245.37" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="248.85" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="252.32999999999998" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="255.81" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="259.28999999999996" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="262.77" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="266.25" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="269.73" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="273.21" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="276.69" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="280.17" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="283.65" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="287.13" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="290.61" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="294.09" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="297.57" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="301.05" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="304.53" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="308.01" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="311.49" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="314.96999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="318.45" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="321.93" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="325.40999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="328.89" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="332.37" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="335.86" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="339.34" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="342.82" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="346.3" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="349.78" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="353.26" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="356.74" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="360.21999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="363.7" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="367.18" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="370.65999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="374.14" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="377.62" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="381.09999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="384.58" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="388.06" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="391.53999999999996" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="395.02" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="398.5" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="401.98" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="405.46" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="408.94" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="412.42" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="415.9" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="419.38" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="422.86" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="426.34" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="429.82" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="433.31" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="436.78999999999996" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="440.27" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="443.75" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="447.23" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="450.71" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="454.19" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="457.67" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="461.15" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="464.63" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="468.11" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="471.59" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="475.07" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="478.55" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="482.03" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="485.51" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="488.99" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="492.46999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="495.95" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="499.43" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="502.90999999999997" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="506.39" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="509.87" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="513.35" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="516.83" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="520.31" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="523.79" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="527.28" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="530.76" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="534.24" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="537.72" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="541.2" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="544.68" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="548.16" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="551.64" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="555.12" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="558.6" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="562.08" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="565.56" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="569.04" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="572.52" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="576" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="579.48" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="582.96" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="586.4399999999999" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="589.92" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="593.4" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="596.88" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="600.36" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="603.84" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="607.3199999999999" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="610.8" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="614.28" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="617.76" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="621.24" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="624.73" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="628.21" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="631.6899999999999" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="635.17" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="638.65" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="642.13" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="645.61" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="649.09" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="652.5699999999999" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="656.05" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="659.53" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="663.01" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="666.49" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="669.97" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="673.45" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="676.93" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="680.41" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="683.89" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="687.37" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="690.85" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="694.33" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="697.81" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="701.29" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="704.77" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="708.25" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="711.73" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="715.21" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="718.7" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="722.18" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="725.66" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="729.14" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="732.62" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="736.1" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="739.58" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="743.06" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="746.54" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="750.02" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="753.5" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="756.98" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="760.46" y="502.90999999999997" width="3.48" height="3.48"/>
      <rect x="763.9399999999999" y="502.90999999999997" width="3.48" height="3.48"/>
    </g>
  </g>
</svg>`;

let mapSvgEl = null;
let mapOverlayCanvas = null, mapOverlayCtx = null;
let mapW = 600, mapH = 340;
let mapHover = null, mapAnimFrame = 0, mapAnimId = null;
let mapReady = false;
let mapCanvas = null, mapCtx = null; // kept for compat

function initMap() {
  const shell = document.getElementById('map-shell');
  shell.style.cssText += ';overflow:hidden;position:relative;';

  // SVG viewBox: 901.93 x 501.69 — aspect 1.797:1 (landscape)
  // Estrategia: siempre llenar el ANCHO del shell.
  // La altura resultante puede ser > o < al shell → pan vertical.
  // En desktop (shell muy ancho) → fill height, pan horizontal.

  const svgWrap = document.createElement('div');
  svgWrap.id = 'map-svg-wrap';
  svgWrap.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;will-change:transform;';
  svgWrap.innerHTML = SVG_MAP_SRC;
  mapSvgEl = svgWrap.querySelector('svg');
  if (mapSvgEl) {
    mapSvgEl.removeAttribute('width');
    mapSvgEl.removeAttribute('height');
    mapSvgEl.style.cssText = 'display:block;width:100%;height:100%;';
    mapSvgEl.setAttribute('preserveAspectRatio', 'xMinYMin meet');
  }

  const overlayCanvas = document.createElement('canvas');
  overlayCanvas.id = 'map-canvas';
  overlayCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:3;';
  mapOverlayCanvas = overlayCanvas;
  mapCanvas = overlayCanvas;

  const oldCanvas = document.getElementById('map-canvas');
  if (oldCanvas) oldCanvas.replaceWith(svgWrap);
  shell.appendChild(overlayCanvas);

  // Calcula dimensiones del SVG dentro del shell
  // El SVG aspect ratio es fijo: SVG_VB.w / SVG_VB.h
  function getSvgLayout() {
    const svgAR = SVG_VB.w / SVG_VB.h; // ~1.797
    const shellAR = mapW / mapH;
    let drawW, drawH;
    // Si el shell es más ancho que el SVG AR → fit por altura, pan H
    // Si el shell es más estrecho → fit por anchura, pan V
    // SIEMPRE fit por altura: top e inferior pegados al contenedor
    drawH = mapH;
    drawW = mapH * svgAR;
    // Offset base: centrado horizontalmente, vertical = 0
    const baseX = (mapW - drawW) / 2;
    const baseY = 0;
    return { drawW, drawH, baseX, baseY };
  }

  function applySvgTransform() {
    const { drawW, drawH, baseX, baseY } = getSvgLayout();
    svgWrap.style.width  = drawW + 'px';
    svgWrap.style.height = drawH + 'px';
    svgWrap.style.transform = `translate(${baseX + mapPanX}px, ${baseY + mapPanY}px)`;
  }

  function setSize() {
    const r = shell.getBoundingClientRect();
    if (r.width < 10) return;
    mapW = r.width;
    mapH = r.height;
    overlayCanvas.width  = mapW;
    overlayCanvas.height = mapH;
    mapOverlayCtx = overlayCanvas.getContext('2d');
    mapCtx = mapOverlayCtx;
    mapPanX = 0; mapPanY = 0;
    applySvgTransform();
    mapReady = true;
    if (!mapAnimId) drawMapV2();
  }

  const ro = new ResizeObserver(() => { setSize(); });
  ro.observe(shell);
  setSize();
  applyEpochColorToMap('sigloxxi');

  // ── DRAG / PAN ──────────────────────────────────────────────
  let dragMoved = false;
  let touchStartPos = null;

  function startDrag(cx, cy) {
    mapIsDragging = true;
    mapDragStartX = cx; mapDragStartY = cy;
    mapDragPanX   = mapPanX; mapDragPanY = mapPanY;
    dragMoved = false;
  }

  function moveDrag(cx, cy) {
    if (!mapIsDragging) return;
    const dx = cx - mapDragStartX, dy = cy - mapDragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragMoved = true;
    mapPanX = mapDragPanX + dx;
    mapPanY = mapDragPanY + dy;
    clampPan();
    applySvgTransform();
  }

  function endDrag() {
    mapIsDragging = false;
  }

  // Mouse
  overlayCanvas.addEventListener('mousedown',  e => { startDrag(e.clientX, e.clientY); });
  window.addEventListener('mousemove', e => {
    if (!mapIsDragging) return;
    moveDrag(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', e => {
    if (!mapIsDragging) return;
    const moved = dragMoved;
    endDrag();
    if (!moved && mapReady) {
      const r = overlayCanvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      EPOCHS.forEach(ep => { if (Math.hypot(mx - epos(ep).x, my - epos(ep).y) < 20) selectEpoch(ep.id); });
    }
  });
  overlayCanvas.addEventListener('mousemove', e => {
    if (mapIsDragging || !mapReady) return;
    const r = overlayCanvas.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    let found = null;
    EPOCHS.forEach(ep => { const p = epos(ep); if (Math.hypot(mx-p.x, my-p.y) < 18) found = ep.id; });
    if (found !== mapHover) { mapHover = found; playSfx(found ? 'hover' : null); }
    document.getElementById('map-coords').textContent = found
      ? EPOCHS.find(e=>e.id===found).name+' · '+EPOCHS.find(e=>e.id===found).period : '';
  });
  overlayCanvas.addEventListener('mouseleave', () => {
    if (!mapIsDragging) { mapHover = null; document.getElementById('map-coords').textContent = ''; }
  });

  // Touch
  overlayCanvas.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  overlayCanvas.addEventListener('touchmove', e => {
    if (e.touches.length !== 1) return;
    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  overlayCanvas.addEventListener('touchend', e => {
    const moved = dragMoved;
    endDrag();
    if (!moved && touchStartPos && mapReady) {
      const r = overlayCanvas.getBoundingClientRect();
      const mx = touchStartPos.x - r.left, my = touchStartPos.y - r.top;
      EPOCHS.forEach(ep => { if (Math.hypot(mx - epos(ep).x, my - epos(ep).y) < 24) selectEpoch(ep.id); });
    }
    touchStartPos = null;
  }, { passive: true });
}

function applyEpochColorToMap(epochId) {
  if (!mapSvgEl) return;
  const palette = MAP_EPOCH_PALETTES[epochId] || MAP_EPOCH_PALETTES.default;
  // Update SVG style for land color + background
  let styleEl = mapSvgEl.querySelector('style');
  if (!styleEl) { styleEl = document.createElementNS('http://www.w3.org/2000/svg','style'); mapSvgEl.prepend(styleEl); }
  styleEl.textContent = `.land { fill: ${palette.land}; transition: fill 0.6s ease; }`;
  mapSvgEl.style.backgroundColor = palette.water;
}

// SVG viewBox original del mapa amcharts
const SVG_VB = { x: 58.91, y: 6.7, w: 901.93, h: 501.69 };

// Coordenadas de épocas en espacio SVG (en lugar de % del canvas)
// mx/my originales son % del canvas → convertimos a % del viewBox
// Los marcadores se anclan a píxeles SVG específicos
// Formato: [svgX, svgY] en coordenadas del viewBox
const EPOCH_SVG_COORDS = {
  mesopotamia: [595, 165],   // Irak / Mesopotamia
  egipto:      [545, 178],   // Egipto / Valle del Nilo
  grecia:      [535, 140],   // Grecia / Mediterráneo
  edadmedia:   [575, 150],   // Oriente Medio / Bagdad
  era1300:     [518, 97],   // Europa Central (Alemania/Italia)
  era1700:     [485, 110],   // Europa Occidental (Francia/UK)
  sigloxx:     [261, 150],   // EEUU Este
  sigloxxi:    [182, 147],   // California / EEUU Oeste
};

// Estado del pan
let mapPanX = 0, mapPanY = 0;
let mapIsDragging = false, mapDragStartX = 0, mapDragStartY = 0, mapDragPanX = 0, mapDragPanY = 0;
let mapScale = 1; // escala actual del SVG respecto al shell

function epos(ep) {
  // Convertir coordenadas SVG del marcador a posición en el canvas overlay
  const coords = EPOCH_SVG_COORDS[ep.id];
  if (!coords) return { x: ep.mx/100 * mapW, y: ep.my/100 * mapH };
  const [svgX, svgY] = coords;
  // Proyectar punto SVG al canvas teniendo en cuenta pan y escala
  // El SVG tiene preserveAspectRatio=xMidYMid meet dentro del shell
  // Necesitamos calcular el rectángulo real que ocupa el SVG dentro del shell
  const svgAR = SVG_VB.w / SVG_VB.h;
  const shellAR = mapW / mapH;
  let drawW, drawH, offX, offY;
  // SIEMPRE fit por altura
  drawH = mapH; drawW = mapH * svgAR;
  offY = 0; offX = (mapW - drawW) / 2;
  // Coordenada en el lienzo sin pan
  const cx = offX + ((svgX - SVG_VB.x) / SVG_VB.w) * drawW;
  const cy = offY + ((svgY - SVG_VB.y) / SVG_VB.h) * drawH;
  return { x: cx + mapPanX, y: cy + mapPanY };
}

function clampPan() {
  const svgAR = SVG_VB.w / SVG_VB.h;
  const shellAR = mapW / mapH;
  let drawW, drawH;
  // SIEMPRE fit por altura
  drawH = mapH; drawW = mapH * svgAR;
  // Cuánto puede moverse: la diferencia entre draw y shell, dividida en dos lados
  const maxPanX = Math.max(0, (drawW - mapW) / 2);
  const maxPanY = Math.max(0, (drawH - mapH) / 2);
  mapPanX = Math.max(-maxPanX, Math.min(maxPanX, mapPanX));
  mapPanY = Math.max(-maxPanY, Math.min(maxPanY, mapPanY));
}

function drawConns() {
  mapOverlayCtx.save();
  mapOverlayCtx.strokeStyle = 'rgba(255,255,255,.07)';
  mapOverlayCtx.lineWidth = 1;
  mapOverlayCtx.setLineDash([3, 6]);
  for (let i = 0; i < EPOCHS.length - 1; i++) {
    const a = epos(EPOCHS[i]), b = epos(EPOCHS[i+1]);
    mapOverlayCtx.beginPath();
    mapOverlayCtx.moveTo(a.x, a.y);
    mapOverlayCtx.lineTo(b.x, b.y);
    mapOverlayCtx.stroke();
  }
  mapOverlayCtx.setLineDash([]);
  mapOverlayCtx.restore();
}

function drawMapV2() {
  if (mapAnimId) cancelAnimationFrame(mapAnimId);
  function frame() {
    mapAnimFrame++;
    if (!mapOverlayCtx || !mapReady) { mapAnimId = requestAnimationFrame(frame); return; }

    const ctx = mapOverlayCtx;
    const ep_palette = MAP_EPOCH_PALETTES[currentEpoch] || MAP_EPOCH_PALETTES.default;

    // Clear overlay (SVG handles background)
    ctx.clearRect(0, 0, mapW, mapH);

    drawConns();

    EPOCHS.forEach(ep => {
      const pos = epos(ep);
      const isSel = currentEpoch === ep.id;
      const isHov = mapHover === ep.id;
      const pulse = .5 + .5 * Math.sin(mapAnimFrame * .04 + EPOCHS.indexOf(ep));

      if (isSel) {
        ctx.save();
        ctx.beginPath(); ctx.arc(pos.x, pos.y, 22 + pulse * 7, 0, Math.PI * 2);
        ctx.strokeStyle = ep.color; ctx.lineWidth = 1.5; ctx.globalAlpha = .28 * pulse;
        ctx.stroke(); ctx.globalAlpha = 1; ctx.restore();
      }

      ctx.save();
      ctx.beginPath(); ctx.arc(pos.x, pos.y, 13 + pulse * 3, 0, Math.PI * 2);
      ctx.strokeStyle = ep.color; ctx.lineWidth = 1; ctx.globalAlpha = .15 + .1 * pulse;
      ctx.stroke(); ctx.globalAlpha = 1; ctx.restore();

      const sz = isSel ? 14 : isHov ? 11 : 9;
      ctx.save();
      ctx.fillStyle = isSel || isHov ? ep.color : '#0a0c16';
      ctx.strokeStyle = ep.color; ctx.lineWidth = isSel ? 2.5 : 1.5;
      ctx.shadowColor = ep.color; ctx.shadowBlur = isSel ? 20 : isHov ? 10 : 5;
      ctx.fillRect(pos.x - sz * .5 | 0, pos.y - sz * .5 | 0, sz, sz);
      ctx.strokeRect(pos.x - sz * .5 | 0, pos.y - sz * .5 | 0, sz, sz);
      ctx.shadowBlur = 0; ctx.restore();

      ctx.save();
      ctx.font = `${isSel ? 7 : 6}px "Press Start 2P"`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillStyle = isSel ? ep.color : isHov ? '#fff' : 'rgba(255,255,255,.55)';
      ctx.shadowColor = ep.color; ctx.shadowBlur = isSel ? 8 : 0;
      const lbl = ep.name.length > 12 ? ep.name.substring(0, 10) + '…' : ep.name;
      ctx.fillText(lbl, pos.x, pos.y + sz * .5 + 5);
      ctx.shadowBlur = 0; ctx.restore();

      ctx.save();
      ctx.font = `${isSel ? 11 : 9}px serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(ep.icon, pos.x, pos.y);
      ctx.restore();
    });

    mapAnimId = requestAnimationFrame(frame);
  }
  mapAnimId = requestAnimationFrame(frame);
}

// Función para "Descubrir más" - navega a Siglo XXI
function discoverMore() {
  nav('sigloxxi');
  playSfx('click');
}

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

  // ← NUEVO: Inicializar escritorio al entrar a Siglo XXI
  if (id === 'sigloxxi') {
    setTimeout(() => {
      if (typeof initDesktop === 'function') initDesktop();
    }, 100);
  }
  
  if (id === 'home') {
    // Reset completo al ir a inicio
    currentEpoch = null;
    document.querySelectorAll('.sl-item').forEach(el => el.classList.remove('active'));
    closePanel();
    applyEpochColorToMap('sigloxxi');
    
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
  applyEpochColorToMap(id);

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
  // Mostrar/ocultar botón "Descubrir más" solo para Siglo XXI
  const discoverBtn = document.getElementById('ep-btn-discover');
  if (discoverBtn) {
    discoverBtn.style.display = ep.id === 'sigloxxi' ? 'inline-flex' : 'none';
  }
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
  // El multiplayer se conecta desde setupMultiplayer() de la primera escena Phaser
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

  // Botón CHAT (centro del D-Pad, id=btn-chat) — manejado en index.html
  // No duplicar aquí para evitar conflictos
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