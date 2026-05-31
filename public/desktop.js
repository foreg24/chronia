/* =============================================================
   DESKTOP SIGLO XXI v3.4 — Barra de tareas con Avances y Autores
   - Avances y Autores como apps separadas en la barra
   - Vista previa con cierre automático a 2s, permanece con hover
   - Click: 0 ventanas → nueva, 1 ventana → toggle, 2+ → vista previa
   ============================================================= */

const ASSETS = {
  wallpaper:     'assets/desktop/wallpaper.png',
  startIcon:     'assets/desktop/icon-start.png',
  terminalIcon:  'assets/desktop/icon-terminal.png',
  browserIcon:   'assets/desktop/icon-browser.png',
  trashIcon:     'assets/desktop/icon-trash.png',
  app1Icon:      'assets/desktop/icon-app1.png',
  app2Icon:      'assets/desktop/icon-app2.png',
  app3Icon:      'assets/desktop/icon-app3.png',
  app4Icon:      'assets/desktop/icon-app4.png',
  app5Icon:      'assets/desktop/icon-app5.png',
  folderIcon:    'assets/desktop/icon-folder.png',
  folderDocs:    'assets/desktop/icon-folder-docs.png',
  docAdvances:   'assets/desktop/icon-doc-advances.png',
  docAuthors:    'assets/desktop/icon-doc-authors.png',
  barapp1:       'assets/desktop/barapp1.png',
  barapp2:       'assets/desktop/barapp2.png',
  barapp3:       'assets/desktop/barapp3.png',
};

// ============================================================
// CONTENIDO DE LOS 9 AVANCES
// ============================================================
const AVANCES_CONTENT = {
  adv1: {
    title: 'Web 2.0 en adelante',
    body: `<h1>Web 2.0 en adelante</h1>
    <h2>Web 2.0 (La Web Social, 2000-2010)</h2>
    <p>Introdujo la interactividad, permitiendo a los usuarios generar contenido (UGC), comentar y compartir. Surgieron las redes sociales, blogs, wikis y aplicaciones web dinámicas.</p>
    <h2>Web 3.0 (La Web Semántica/Inteligente, 2010-Presente)</h2>
    <p>Enfocada en la comprensión de datos por máquinas, la descentralización (blockchain) y la Inteligencia Artificial (IA). Busca ofrecer búsquedas más relevantes y personalizadas, y la interacción se da en múltiples dispositivos.</p>
    <h2>Web 4.0 (La Web Ubicua/Inteligente, Futuro/Actual)</h2>
    <p>Se centra en la integración completa de la IA, voz como interfaz (chatbots), y el Internet de las cosas (IoT). Busca predecir comportamientos y ofrecer soluciones en tiempo real.</p>`
  },
  adv2: {
    title: 'Redes 3G en adelante',
    body: `<h1>Redes 3G en adelante</h1>
    <h2>3G (Años 2000)</h2>
    <p>Llegada de la banda ancha móvil. Permitió la navegación por internet, compartir fotos y velocidades de datos superiores.</p>
    <h2>4G (Años 2010)</h2>
    <p>Basado en el estándar LTE (Long-Term Evolution), ofreció altas velocidades (hasta 1 Gbps) para streaming HD y videollamadas. Cambió a redes totalmente IP (conmutación de paquetes).</p>
    <h2>5G (Actualidad)</h2>
    <p>Ofrece velocidades mucho más rápidas, latencia extremadamente baja y mayor fiabilidad para la interconexión masiva de dispositivos (IoT).</p>`
  },
  adv3: {
    title: 'Smartphones',
    body: `<h1>Smartphones</h1>
    <p>Un smartphone, o teléfono inteligente, es un dispositivo móvil avanzado que combina funciones de telefonía celular con capacidades de computación de bolsillo, operando bajo sistemas como Android o iOS.</p>
    <h2>Características principales</h2>
    <ul>
      <li><strong>Conectividad:</strong> Wi-Fi, Bluetooth, 4G/5G, NFC</li>
      <li><strong>Multimedia:</strong> Cámara de alta resolución, reproductor de vídeo y música</li>
      <li><strong>Funcionalidades:</strong> Agenda, calculadora, correo electrónico, redes sociales</li>
      <li><strong>Hardware:</strong> Pantallas táctiles de alta definición y procesadores rápidos</li>
      <li><strong>Aplicaciones:</strong> Acceso a tiendas de aplicaciones (Google Play, App Store)</li>
    </ul>`
  },
  adv4: {
    title: 'Redes Sociales',
    body: `<h1>Redes Sociales</h1>
    <p>Las redes sociales son plataformas digitales que permiten a personas y organizaciones conectarse, comunicarse y compartir contenido en tiempo real a través de Internet.</p>
    <h2>Principales Redes Sociales (2026)</h2>
    <ul>
      <li><strong>Facebook:</strong> Lidera con más de 3.000 millones de usuarios</li>
      <li><strong>YouTube:</strong> Plataforma principal de vídeo</li>
      <li><strong>Instagram:</strong> Enfocada en contenido visual</li>
      <li><strong>WhatsApp:</strong> Principal herramienta de mensajería instantánea</li>
      <li><strong>TikTok:</strong> Alta popularidad en vídeos cortos</li>
      <li><strong>LinkedIn:</strong> Red enfocada al ámbito profesional</li>
      <li><strong>Telegram:</strong> Mensajería y canales de difusión</li>
    </ul>`
  },
  adv5: {
    title: 'Inteligencia Artificial (IA)',
    body: `<h1>Inteligencia Artificial (IA)</h1>
    <p>La inteligencia artificial (IA) es un conjunto de tecnologías que permiten a las computadoras aprender, razonar, percibir y tomar decisiones, simulando capacidades cognitivas humanas.</p>
    <h2>Aspectos clave</h2>
    <ul>
      <li><strong>Aprendizaje y Adaptación:</strong> Las máquinas aprenden de la experiencia y mejoran con el tiempo</li>
      <li><strong>Funciones Principales:</strong> Reconocimiento de voz, traducción de idiomas, toma de decisiones</li>
      <li><strong>Tipos de IA:</strong> IA estrecha (tareas específicas) e IA General (investigación)</li>
      <li><strong>Impacto:</strong> Algoritmos de recomendación, conducción autónoma, diagnóstico de enfermedades</li>
      <li><strong>Desafíos:</strong> Sesgos en datos, regulación ética, impacto laboral</li>
    </ul>
    <p>Modelos populares: ChatGPT, Claude y Gemini.</p>`
  },
  adv6: {
    title: 'Grafeno',
    body: `<h1>Grafeno</h1>
    <p>El grafeno es un material bidimensional formado por una sola capa de átomos de carbono dispuestos en un patrón hexagonal. Es extremadamente ligero, transparente, flexible y 200 veces más resistente que el acero.</p>
    <h2>Características Principales</h2>
    <ul>
      <li><strong>Estructura:</strong> Átomos de carbono en red hexagonal</li>
      <li><strong>Resistencia:</strong> 200 veces más resistente que el acero</li>
      <li><strong>Conductividad:</strong> Excelente conductor de electricidad y calor</li>
      <li><strong>Flexibilidad:</strong> Material bidimensional muy flexible</li>
      <li><strong>Impermeabilidad:</strong> Impermeable a los gases</li>
    </ul>
    <h2>Aplicaciones</h2>
    <ul>
      <li>Electrónica: microchips, transistores, pantallas táctiles flexibles</li>
      <li>Energía: baterías y placas solares más eficientes</li>
      <li>Materiales: compuestos ligeros para aeroespacial y automoción</li>
      <li>Medicina: sensores médicos y sistemas de liberación de fármacos</li>
    </ul>`
  },
  adv7: {
    title: 'Impresión 3D',
    body: `<h1>Impresión 3D</h1>
    <p>La impresión 3D, o fabricación aditiva, crea objetos tridimensionales superponiendo capas sucesivas de material (plásticos, metales, resinas) a partir de un diseño digital.</p>
    <h2>Aspectos Clave</h2>
    <ul>
      <li><strong>Proceso:</strong> Modelo virtual (CAD) interpretado capa por capa</li>
      <li><strong>Materiales:</strong> PLA (ecológico), ABS (industrial), Resina (alta precisión)</li>
      <li><strong>Tecnologías:</strong> FDM/FFF, SLA/DLP, SLS</li>
      <li><strong>Software:</strong> Rhinoceros, AutoCAD, SolidWorks, Blender, FreeCAD</li>
    </ul>
    <h2>Aplicaciones</h2>
    <p>Prototipado, implantes médicos, automoción, aeroespacial y educación.</p>`
  },
  adv8: {
    title: 'Blockchain',
    body: `<h1>Blockchain</h1>
    <p>La tecnología blockchain es un libro de contabilidad digital descentralizado, inmutable y compartido que registra transacciones de forma segura mediante criptografía.</p>
    <h2>Características Clave</h2>
    <ul>
      <li><strong>Descentralización:</strong> Información distribuida en múltiples nodos</li>
      <li><strong>Inmutabilidad:</strong> Información casi imposible de falsificar</li>
      <li><strong>Seguridad:</strong> Criptografía avanzada para vincular bloques</li>
      <li><strong>Contratos Inteligentes:</strong> Automatización de acuerdos sin terceros</li>
    </ul>
    <h2>Aplicaciones</h2>
    <ul>
      <li>Criptomonedas: Bitcoin y Ethereum</li>
      <li>Cadena de Suministro: trazabilidad de productos</li>
      <li>Finanzas: transferencias de activos rápidas y seguras</li>
      <li>Votación y Contratos: procesos electorales seguros</li>
    </ul>`
  },
  adv9: {
    title: 'Computación Cuántica',
    body: `<h1>Computación Cuántica</h1>
    <p>La computación cuántica utiliza principios de la mecánica cuántica, como la superposición y el entrelazamiento, para procesar información a velocidades inalcanzables para ordenadores clásicos.</p>
    <h2>Conceptos Clave</h2>
    <ul>
      <li><strong>Cúbits (Qubits):</strong> Pueden estar en superposición de estados (0 y 1 a la vez)</li>
      <li><strong>Superposición:</strong> Explora múltiples soluciones simultáneamente</li>
      <li><strong>Entrelazamiento:</strong> Estado de un cúbit afecta a otro instantáneamente</li>
      <li><strong>Interferencia:</strong> Amplifica trayectorias correctas, cancela incorrectas</li>
    </ul>
    <h2>Aplicaciones Potenciales</h2>
    <ul>
      <li>Descubrimiento de fármacos y materiales</li>
      <li>Optimización logística y financiera</li>
      <li>Criptografía y seguridad</li>
      <li>Inteligencia Artificial y machine learning</li>
    </ul>`
  }
};

// ============================================================
// CONTENIDO DE LOS 6 AUTORES/INVENTORES
// ============================================================
const AUTORES_CONTENT = {
  aut1: {
    title: 'Elon Musk',
    body: `<h1>Elon Musk</h1>
    <p>Empresario, inversor e ingeniero sudafricano-estadounidense conocido por liderar empresas como SpaceX y Tesla, con las que ha impulsado avances en la exploración espacial y los vehículos eléctricos, influyendo en el desarrollo tecnológico actual.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>SpaceX:</strong> Revolucionó la exploración espacial con cohetes reutilizables y el objetivo de colonizar Marte</li>
      <li><strong>Tesla:</strong> Impulsó la transición hacia los vehículos eléctricos de alto rendimiento</li>
      <li><strong>Neuralink:</strong> Desarrolla interfaces cerebro-computadora</li>
      <li><strong>The Boring Company:</strong> Innovación en infraestructura de túneles</li>
      <li><strong>Starlink:</strong> Red de internet satelital global</li>
    </ul>`
  },
  aut2: {
    title: 'Jeff Bezos',
    body: `<h1>Jeff Bezos</h1>
    <p>Empresario y magnate estadounidense conocido principalmente por ser el fundador de Amazon, una de las empresas más grandes e influyentes del mundo en comercio electrónico y tecnología.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>Amazon:</strong> Fundó la plataforma de comercio electrónico más grande del mundo</li>
      <li><strong>Amazon Web Services (AWS):</strong> Pionero en computación en la nube</li>
      <li><strong>Blue Origin:</strong> Empresa de turismo y exploración espacial</li>
      <li><strong>Kindle:</strong> Revolucionó la industria editorial con libros electrónicos</li>
      <li><strong>Logística:</strong> Innovó en distribución y entrega a domicilio</li>
    </ul>`
  },
  aut3: {
    title: 'Ginni Rometty',
    body: `<h1>Ginni Rometty</h1>
    <p>Empresaria estadounidense que lideró IBM como CEO, impulsando su transformación hacia la inteligencia artificial y la computación en la nube durante su mandato.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>IBM Watson:</strong> Impulsó el desarrollo de IA cognitiva para empresas</li>
      <li><strong>Transformación Digital:</strong> Lideró la transición de IBM hacia servicios cloud</li>
      <li><strong>IBM Cloud:</strong> Expansión de servicios de computación en la nube</li>
      <li><strong>Ciberseguridad:</strong> Fortaleció las capacidades de seguridad empresarial</li>
      <li><strong>Diversidad:</strong> Promovió la inclusión en el sector tecnológico</li>
    </ul>`
  },
  aut4: {
    title: 'Geoffrey Hinton',
    body: `<h1>Geoffrey Hinton</h1>
    <p>Científico computacional británico-canadiense, pionero en inteligencia artificial y aprendizaje profundo. Desarrolló la Máquina de Boltzmann, un modelo de aprendizaje inspirado en la física que permitió avances en el aprendizaje no supervisado y en la forma de representar el conocimiento en la inteligencia artificial.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>Máquina de Boltzmann:</strong> Modelo de aprendizaje no supervisado inspirado en la física</li>
      <li><strong>Backpropagation:</strong> Contribuyó al algoritmo fundamental del aprendizaje profundo</li>
      <li><strong>Deep Learning:</strong> Pionero en redes neuronales profundas</li>
      <li><strong>Google Brain:</strong> Participó en proyectos de IA en Google</li>
      <li><strong>Premio Turing (2018):</strong> Reconocimiento por sus contribuciones al deep learning</li>
    </ul>`
  },
  aut5: {
    title: 'Fei-Fei Li',
    body: `<h1>Fei-Fei Li</h1>
    <p>Científica computacional chino-estadounidense conocida como la "madrina de la IA" por su trabajo pionero en visión artificial, que sirve de base para muchos sistemas de inteligencia artificial de reconocimiento de imágenes.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>ImageNet:</strong> Creó la base de datos masiva que revolucionó el reconocimiento de imágenes</li>
      <li><strong>Visión por Computadora:</strong> Pionera en sistemas de reconocimiento visual</li>
      <li><strong>AI4ALL:</strong> Fundó organización para diversificar la IA</li>
      <li><strong>Stanford HAI:</strong> Co-directora del Instituto de IA Humana de Stanford</li>
      <li><strong>Ética en IA:</strong> Promueve el desarrollo responsable de la inteligencia artificial</li>
    </ul>`
  },
  aut6: {
    title: 'Sundar Pichai',
    body: `<h1>Sundar Pichai</h1>
    <p>Empresario indio-estadounidense que lideró el desarrollo y expansión de Android, convirtiéndolo en el sistema operativo más utilizado del mundo, y promovió avances en inteligencia artificial y servicios digitales dentro de Google, fortaleciendo herramientas como el buscador y otras plataformas globales.</p>
    <h2>Contribuciones Principales</h2>
    <ul>
      <li><strong>Android:</strong> Lideró su expansión hasta convertirlo en el SO móvil más usado</li>
      <li><strong>Google Chrome:</strong> Supervisó el desarrollo del navegador líder mundial</li>
      <li><strong>Google AI:</strong> Impulsó la integración de IA en productos de Google</li>
      <li><strong>Google Cloud:</strong> Expansión de servicios empresariales en la nube</li>
      <li><strong>CEO de Alphabet:</strong> Liderazgo en la empresa matriz de Google</li>
    </ul>`
  }
};

// ============================================================
// SISTEMA DE ARCHIVOS
// ============================================================
const FILE_SYSTEM = {
  id: 'root',
  name: 'Escritorio',
  type: 'folder',
  icon: ASSETS.folderIcon,
  isDesktop: true,
  children: [
    { id: 'terminal', name: 'Terminal', type: 'app', appType: 'terminal', icon: ASSETS.terminalIcon, clickable: true, onDesktop: true, onStart: true },
    { id: 'browser', name: 'Explorador Web', type: 'app', appType: 'browser', icon: ASSETS.browserIcon, clickable: true, onDesktop: true, onStart: true },
    { id: 'trash', name: 'Papelera', type: 'folder', icon: ASSETS.trashIcon, clickable: false, onDesktop: true, onStart: true, children: [] },
    { id: 'app1', name: 'Larp', type: 'app', appType: 'custom', icon: ASSETS.app1Icon, clickable: false, onDesktop: true },
    { id: 'app2', name: 'Steam', type: 'app', appType: 'custom', icon: ASSETS.app2Icon, clickable: false, onDesktop: true },
    { id: 'app3', name: 'Discord', type: 'app', appType: 'custom', icon: ASSETS.app3Icon, clickable: false, onDesktop: true },
    { id: 'app4', name: 'Minecraft Launcher', type: 'app', appType: 'custom', icon: ASSETS.app4Icon, clickable: false, onDesktop: true },
    { id: 'app5', name: 'VSCode', type: 'app', appType: 'custom', icon: ASSETS.app5Icon, clickable: false, onDesktop: true },
    { id: 'carpeta1', name: 'NO ENTRAR', type: 'folder', icon: ASSETS.folderIcon, clickable: false, onDesktop: true, children: [] },
    {
      id: 'documentos',
      name: 'Documentos',
      type: 'folder',
      icon: ASSETS.folderIcon,
      clickable: true,
      onDesktop: true,
      onStart: true,
      children: [
        { id: 'carpeta2', name: 'Primer Semestre', type: 'folder', icon: ASSETS.folderIcon, clickable: false, children: [] },
        {
          id: 'avances',
          name: 'Avances e Inventos',
          type: 'folder',
          icon: ASSETS.folderIcon,
          clickable: true,
          children: [
            { id: 'adv1', name: 'WEBs.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv1, appGroup: 'avances' },
            { id: 'adv2', name: 'Redes.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv2, appGroup: 'avances' },
            { id: 'adv3', name: 'Smartphones.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv3, appGroup: 'avances' },
            { id: 'adv4', name: 'Redes Sociales.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv4, appGroup: 'avances' },
            { id: 'adv5', name: 'IA.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv5, appGroup: 'avances' },
            { id: 'adv6', name: 'Grafeno.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv6, appGroup: 'avances' },
            { id: 'adv7', name: 'Impresion 3D.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv7, appGroup: 'avances' },
            { id: 'adv8', name: 'Blockchain.docx', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv8, appGroup: 'avances' },
            { id: 'adv9', name: 'Computación Cuántica', type: 'document', icon: ASSETS.docAdvances, clickable: true, content: AVANCES_CONTENT.adv9, appGroup: 'avances' },
          ]
        },
        {
          id: 'autores',
          name: 'Autores',
          type: 'folder',
          icon: ASSETS.folderIcon,
          clickable: true,
          children: [
            { id: 'aut1', name: 'Elon Musk.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut1, appGroup: 'autores' },
            { id: 'aut2', name: 'Jeff Bezos.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut2, appGroup: 'autores' },
            { id: 'aut3', name: 'Ginni Rometty.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut3, appGroup: 'autores' },
            { id: 'aut4', name: 'Geoffrey Hinton.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut4, appGroup: 'autores' },
            { id: 'aut5', name: 'Fei-Fei Li.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut5, appGroup: 'autores' },
            { id: 'aut6', name: 'Sundar Pichai.docx', type: 'document', icon: ASSETS.docAuthors, clickable: true, content: AUTORES_CONTENT.aut6, appGroup: 'autores' },
          ]
        }
      ]
    }
  ]
};

// ============================================================
// ESTADO
// ============================================================
let desktopState = {
  openWindows: [],
  windowZIndex: 100,
  selectedIcon: null,
  startMenuOpen: false,
  initialized: false
};

let windowCounter = 0;

// Mapa de grupos de apps para la barra de tareas
const TASKBAR_APP_GROUPS = [
  { id: 'barapp1', icon: ASSETS.barapp1, name: 'Bar App 1', match: () => false, alwaysShow: true },
  { id: 'barapp2', icon: ASSETS.barapp2, name: 'Bar App 2', match: () => false, alwaysShow: true },
  { id: 'barapp3', icon: ASSETS.barapp3, name: 'Bar App 3', match: () => false, alwaysShow: true },
  { id: 'browser', icon: ASSETS.browserIcon, name: 'Explorador Web', match: w => w.app === 'browser' },
  { id: 'terminal', icon: ASSETS.terminalIcon, name: 'Terminal', match: w => w.app === 'terminal' },
  { id: 'explorer', icon: ASSETS.folderDocs, name: 'Explorador de Archivos', match: w => w.type === 'folder' },
  { id: 'avances', icon: ASSETS.docAdvances, name: 'Avances e Inventos', match: w => w.appGroup === 'avances', dynamic: true },
  { id: 'autores', icon: ASSETS.docAuthors, name: 'Autores', match: w => w.appGroup === 'autores', dynamic: true },
];

// ============================================================
// INICIALIZACIÓN
// ============================================================
function initDesktop() {
  if (desktopState.initialized) return;
  desktopState.initialized = true;

  renderWallpaper();
  renderDesktopIcons();
  renderTaskbar();
  updateClock();
  setInterval(updateClock, 1000);

  document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-btn');
    if (desktopState.startMenuOpen && startMenu && startBtn &&
        !startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      toggleStartMenu();
    }
  });

  const workspace = document.getElementById('desktop-workspace');
  if (workspace) {
    workspace.addEventListener('click', (e) => {
      if (e.target === workspace || e.target.id === 'desktop-wallpaper') {
        deselectAllIcons();
      }
    });
  }
}

function renderWallpaper() {
  const wp = document.getElementById('desktop-wallpaper');
  if (wp) wp.style.backgroundImage = `url('${ASSETS.wallpaper}')`;
}

function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById('taskbar-clock-time');
  const dateEl = document.getElementById('taskbar-clock-date');
  if (timeEl) timeEl.textContent = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false });
  if (dateEl) dateEl.textContent = now.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' });
}

// ============================================================
// ICONOS DEL ESCRITORIO
// ============================================================
function renderDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  if (!container) return;
  container.innerHTML = '';

  const desktopItems = FILE_SYSTEM.children.filter(item => item.onDesktop);

  desktopItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'desktop-icon clickable';
    el.dataset.id = item.id;
    el.dataset.type = item.type;

    const img = document.createElement('img');
    img.className = 'desktop-icon-img';
    img.src = item.icon || ASSETS.folderIcon;
    img.alt = item.name;
    img.draggable = false;
    img.onerror = function() {
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.style.cssText = 'width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;';
      fallback.textContent = item.type === 'folder' ? '📁' : item.type === 'app' ? '⚡' : '📄';
      this.parentNode.insertBefore(fallback, this.nextSibling);
    };

    const label = document.createElement('div');
    label.className = 'desktop-icon-label';
    label.textContent = item.name;

    el.appendChild(img);
    el.appendChild(label);

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      selectIcon(item.id);
    });

    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (item.clickable) openItem(item);
    });

    container.appendChild(el);
  });
}

function selectIcon(id) {
  document.querySelectorAll('.desktop-icon').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });
  desktopState.selectedIcon = id;
}

function deselectAllIcons() {
  document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
  desktopState.selectedIcon = null;
}

// ============================================================
// BARRA DE TAREAS — 5 ICONOS FIJOS CON VISTA PREVIA
// ============================================================
function renderTaskbar() {
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.innerHTML = `<img src="${ASSETS.startIcon}" alt="Inicio" onerror="this.style.display='none';this.parentNode.textContent='🪟'">`;
  }
  updateTaskbar();
}

function updateTaskbar() {
  const center = document.getElementById('taskbar-center');
  if (!center) return;
  center.innerHTML = '';

  TASKBAR_APP_GROUPS.forEach(app => {
    const wins = desktopState.openWindows.filter(app.match);
    const hasOpen = wins.length > 0;

    // Si es dinámico y no hay ventanas, no mostrar
    if (app.dynamic && !hasOpen) return;

    const btn = document.createElement('div');
    btn.className = 'taskbar-app-icon' + (hasOpen ? ' active' : '');
    btn.dataset.app = app.id;
    btn.title = app.name;
    btn.innerHTML = `<img src="${app.icon}" alt="${app.name}" onerror="this.style.display='none';this.parentNode.textContent='📁'">`;

    // ===== VISTA PREVIA =====
    const preview = document.createElement('div');
    preview.className = 'taskbar-app-preview';
    preview.id = `preview-${app.id}`;

    if (wins.length > 0) {
      let previewHTML = `<div class="taskbar-app-preview-title">${wins.length} ventana${wins.length > 1 ? 's' : ''}</div>`;
      previewHTML += '<div style="display:flex;flex-direction:column;gap:4px;">';

      wins.forEach(w => {
        const name = w.data?.name || w.title || 'Ventana';
        const winEl = document.getElementById(w.id);
        const isVisible = winEl && winEl.style.display !== 'none';

        previewHTML += `
          <div class="taskbar-preview-item" data-winid="${w.id}" style="
            padding: 6px;
            background: ${isVisible ? 'rgba(0,120,212,0.15)' : 'rgba(255,255,255,0.05)'};
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.15s ease;
            border: 1px solid ${isVisible ? 'rgba(0,120,212,0.3)' : 'transparent'};
          ">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="
                width: 40px;
                height: 30px;
                background: ${w.type === 'document' ? '#f5f5f5' : '#1e1e1e'};
                border-radius: 3px;
                border: 1px solid rgba(255,255,255,0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.6rem;
                color: ${w.type === 'document' ? '#333' : '#fff'};
                flex-shrink: 0;
              ">${w.type === 'document' ? '📄' : '📁'}</div>
              <div style="
                font-size: 0.65rem;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-family: 'Segoe UI', sans-serif;
              ">${name}</div>
            </div>
          </div>
        `;
      });

      previewHTML += '</div>';
      preview.innerHTML = previewHTML;

      // Click en miniatura
      preview.querySelectorAll('.taskbar-preview-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          bringWindowToFront(item.dataset.winid);
          hideAllPreviews();
        });
      });
    } else {
      preview.innerHTML = `<div class="taskbar-app-preview-title">${app.name}</div><div style="padding:8px;color:rgba(255,255,255,0.4);font-size:0.6rem;text-align:center;">Sin ventanas abiertas</div>`;
    }

    btn.appendChild(preview);

    // ===== EVENTOS DE HOVER CON RETRASO =====
    let hoverTimer = null;
    let isHoveringPreview = false;

    btn.addEventListener('mouseenter', () => {
      // Mostrar preview inmediatamente si hay 2+ ventanas
      if (wins.length >= 2) {
        showPreview(preview);
      }
    });

    btn.addEventListener('mouseleave', () => {
      // Si no hay hover en la preview, cerrar en 2 segundos
      hoverTimer = setTimeout(() => {
        if (!isHoveringPreview) {
          hidePreview(preview);
        }
      }, 2000);
    });

    preview.addEventListener('mouseenter', () => {
      isHoveringPreview = true;
      if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
    });

    preview.addEventListener('mouseleave', () => {
      isHoveringPreview = false;
      hidePreview(preview);
    });

    // ===== CLICK EN EL ICONO =====
    btn.addEventListener('click', () => {
      // Apps alwaysShow no hacen nada al click
      if (app.alwaysShow) return;

      hideAllPreviews();

      if (wins.length === 0) {
        // Abrir nueva ventana
        if (app.id === 'browser') openAppById('browser');
        else if (app.id === 'terminal') openAppById('terminal');
        else if (app.id === 'explorer') openAppById('documentos');
        else if (app.id === 'avances') openAppById('adv1');
        else if (app.id === 'autores') openAppById('aut1');
      } else if (wins.length === 1) {
        // Toggle minimize/show
        toggleWindowVisibility(wins[0].id);
      } else {
        // 2+ ventanas: mostrar vista previa
        showPreview(preview);
      }
    });

    center.appendChild(btn);
  });
}

function showPreview(previewEl) {
  // Ocultar todas las demás previews primero
  document.querySelectorAll('.taskbar-app-preview').forEach(p => {
    if (p !== previewEl) hidePreview(p);
  });
  previewEl.style.opacity = '1';
  previewEl.style.pointerEvents = 'auto';
  previewEl.style.transform = 'translateX(-50%) scale(1)';
}

function hidePreview(previewEl) {
  previewEl.style.opacity = '0';
  previewEl.style.pointerEvents = 'none';
  previewEl.style.transform = 'translateX(-50%) scale(0.95)';
}

function hideAllPreviews() {
  document.querySelectorAll('.taskbar-app-preview').forEach(p => hidePreview(p));
}

function bringWindowToFront(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  win.style.display = 'flex';
  win.style.zIndex = ++desktopState.windowZIndex;
  updateTaskbar();
}

function toggleWindowVisibility(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  if (win.style.display === 'none') {
    win.style.display = 'flex';
    win.style.zIndex = ++desktopState.windowZIndex;
  } else {
    win.style.display = 'none';
  }
  updateTaskbar();
}

// ============================================================
// MENÚ INICIO
// ============================================================
function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  const btn = document.getElementById('start-btn');
  if (!menu) return;

  desktopState.startMenuOpen = !desktopState.startMenuOpen;
  menu.classList.toggle('open', desktopState.startMenuOpen);
  btn?.classList.toggle('active', desktopState.startMenuOpen);

  if (desktopState.startMenuOpen) renderStartMenu();
}

function renderStartMenu() {
  const pinnedGrid = document.getElementById('start-pinned-grid');
  const recGrid = document.getElementById('start-recommended-grid');
  if (!pinnedGrid || !recGrid) return;

  pinnedGrid.innerHTML = '';
  recGrid.innerHTML = '';

  const startItems = FILE_SYSTEM.children.filter(item => item.onStart);
  startItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'start-app-item';
    el.innerHTML = `
      <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none';this.parentNode.querySelector('span').style.fontSize='1.5rem';this.parentNode.querySelector('span').textContent='${item.type==='folder'?'📁':'⚡'}';">
      <span>${item.name}</span>
    `;
    el.addEventListener('click', () => { openItem(item); toggleStartMenu(); });
    pinnedGrid.appendChild(el);
  });

  const desktopApps = FILE_SYSTEM.children.filter(item => item.onDesktop && !item.onStart).slice(0, 4);
  desktopApps.forEach(item => {
    const el = document.createElement('div');
    el.className = 'start-rec-item';
    el.innerHTML = `<img src="${item.icon}" alt="" onerror="this.style.display='none'"><span>${item.name}</span>`;
    el.addEventListener('click', () => { openItem(item); toggleStartMenu(); });
    recGrid.appendChild(el);
  });
}

// ============================================================
// ABRIR ITEMS
// ============================================================
function openItem(item) {
  if (item.type === 'document') {
    const existingWin = desktopState.openWindows.find(w => w.data?.id === item.id);
    if (existingWin) {
      bringWindowToFront(existingWin.id);
      return;
    }
  }

  if (item.type === 'folder') {
    openFolderWindow(item);
  } else if (item.type === 'document') {
    openDocumentWindow(item);
  } else if (item.type === 'app') {
    openAppWindow(item);
  }
  if (typeof playSfx === 'function') playSfx('click');
}

// ============================================================
// VENTANA DE CARPETA
// ============================================================
function openFolderWindow(folder) {
  const winId = `win-${++windowCounter}`;

  const windowEl = document.createElement('div');
  windowEl.className = 'desktop-window';
  windowEl.id = winId;
  windowEl.style.cssText = `width:650px;height:420px;top:${40 + (desktopState.openWindows.length * 25)}px;left:${40 + (desktopState.openWindows.length * 25)}px;z-index:${++desktopState.windowZIndex};`;

  const headerIcon = (folder.id === 'documentos') ? ASSETS.folderDocs : ASSETS.folderIcon;
  windowEl.innerHTML = `
    <div class="window-header" onmousedown="startDrag(event, '${winId}')">
      <div class="window-title"><img src="${headerIcon}" alt=""> ${folder.name}</div>
      <div class="window-controls">
        <button class="window-btn minimize" onclick="minimizeWindow('${winId}')">−</button>
        <button class="window-btn maximize" onclick="maximizeWindow('${winId}')">□</button>
        <button class="window-btn close" onclick="closeWindow('${winId}')">×</button>
      </div>
    </div>
    <div class="window-content" style="padding:0;overflow:hidden;">
      <div class="explorer-body">
        <div class="explorer-sidebar">
          <div class="explorer-sidebar-section">
            <div class="explorer-sidebar-header">Principal</div>
            <div class="explorer-sidebar-item ${folder.id === 'root' || folder.isDesktop ? 'active' : ''}" onclick="navigateToFolder('${winId}', 'root')"><span>🖥️</span> PC</div>
            <div class="explorer-sidebar-item ${folder.id === 'documentos' ? 'active' : ''}" onclick="navigateToFolder('${winId}', 'documentos')"><span>📁</span> Documentos</div>
          </div>
          <div class="explorer-sidebar-section">
            <div class="explorer-sidebar-header">Apps</div>
            <div class="explorer-sidebar-item" onclick="openAppById('browser')"><span>🌐</span> Web</div>
            <div class="explorer-sidebar-item" onclick="openAppById('terminal')"><span>💻</span> Terminal</div>
          </div>
        </div>
        <div class="explorer-main">
          <div class="explorer-pathbar" id="pathbar-${winId}">PC › ${folder.name}</div>
          <div class="explorer-grid" id="folder-view-${winId}"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('desktop-windows').appendChild(windowEl);
  desktopState.openWindows.push({ id: winId, type: 'folder', data: folder, folderId: folder.id });

  renderFolderContents(winId, folder);

  windowEl.addEventListener('mousedown', () => {
    windowEl.style.zIndex = ++desktopState.windowZIndex;
  });

  updateTaskbar();
  if (typeof playSfx === 'function') playSfx('notify');
}

function renderFolderContents(winId, folder) {
  const view = document.getElementById(`folder-view-${winId}`);
  if (!view) return;
  view.innerHTML = '';

  if (!folder.children || folder.children.length === 0) {
    view.innerHTML = '<div style="color:rgba(255,255,255,0.3);text-align:center;padding:3rem;font-family:Segoe UI;font-size:0.8rem;">Esta carpeta está vacía</div>';
    return;
  }

  folder.children.forEach(child => {
    const el = document.createElement('div');
    el.className = 'explorer-item';
    el.style.cursor = child.clickable ? 'pointer' : 'default';
    el.innerHTML = `
      <img src="${child.icon || ASSETS.folderIcon}" alt="${child.name}" onerror="this.style.display='none';">
      <div class="explorer-item-name">${child.name}</div>
    `;

    if (child.clickable) {
      el.addEventListener('dblclick', () => openItem(child));
      el.addEventListener('click', () => {
        document.querySelectorAll('.explorer-item').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
      });
    }

    view.appendChild(el);
  });
}

function navigateToFolder(winId, folderId) {
  const folder = findItemById(FILE_SYSTEM, folderId);
  if (!folder) return;
  const win = document.getElementById(winId);
  if (!win) return;

  const navIcon = (folder.id === 'documentos') ? ASSETS.folderDocs : ASSETS.folderIcon;
  const titleEl = win.querySelector('.window-title');
  if (titleEl) titleEl.innerHTML = `<img src="${navIcon}" alt=""> ${folder.name}`;

  const pathbar = document.getElementById(`pathbar-${winId}`);
  if (pathbar) pathbar.innerHTML = `PC › ${folder.name}`;

  win.querySelectorAll('.explorer-sidebar-item').forEach(item => {
    item.classList.remove('active');
    if (folderId === 'root' && item.textContent.includes('PC')) item.classList.add('active');
    if (folderId === 'documentos' && item.textContent.includes('Documentos')) item.classList.add('active');
  });

  renderFolderContents(winId, folder);

  const winState = desktopState.openWindows.find(w => w.id === winId);
  if (winState) winState.folderId = folderId;
}

// ============================================================
// DOCUMENTO Y APP WINDOWS
// ============================================================
function openDocumentWindow(doc) {
  const winId = `win-${++windowCounter}`;
  const windowEl = createBaseWindow(winId, doc.name, doc.icon || ASSETS.docAdvances, 700, 500);

  windowEl.querySelector('.window-content').innerHTML = `
    <div class="document-view">${doc.content?.body || '<h1>Documento</h1><p>Sin contenido...</p>'}</div>
  `;

  document.getElementById('desktop-windows').appendChild(windowEl);
  desktopState.openWindows.push({
    id: winId,
    type: 'document',
    data: doc,
    title: doc.name,
    appGroup: doc.appGroup || null
  });
  setupWindowEvents(windowEl, winId);
  updateTaskbar();
  if (typeof playSfx === 'function') playSfx('notify');
}

function openAppWindow(app) {
  const winId = `win-${++windowCounter}`;

  if (app.appType === 'terminal') {
    const windowEl = createBaseWindow(winId, 'Terminal', ASSETS.terminalIcon, 580, 400);
    windowEl.querySelector('.window-content').innerHTML = `
      <div class="terminal-view" id="terminal-${winId}">
        <div class="terminal-line"><span class="terminal-prompt">user@chronos-sigloxxi:~$</span> welcome</div>
        <div class="terminal-line">🌐 Bienvenido a ChronOS Terminal — Siglo XXI</div>
        <div class="terminal-line">Comandos: help, clear, date, echo, ls, whoami, uname, cd, pwd</div>
        <div class="terminal-line">&nbsp;</div>
        <div class="terminal-input-line" id="terminal-input-line-${winId}">
          <span class="terminal-prompt">user@chronos-sigloxxi:~$</span>
          <input type="text" class="terminal-input" id="terminal-input-${winId}" onkeydown="handleTerminalKey(event, '${winId}')" spellcheck="false" autocomplete="off">
        </div>
      </div>
    `;
    document.getElementById('desktop-windows').appendChild(windowEl);
    desktopState.openWindows.push({ id: winId, type: 'app', app: 'terminal', data: app, title: 'Terminal' });
    setupWindowEvents(windowEl, winId);
    setTimeout(() => { const input = document.getElementById(`terminal-input-${winId}`); if (input) input.focus(); }, 100);
  } else if (app.appType === 'browser') {
    const windowEl = createBaseWindow(winId, 'Explorador Web', ASSETS.browserIcon, 700, 480);
    windowEl.querySelector('.window-content').innerHTML = `
      <div class="browser-view">
        <div class="browser-toolbar">
          <div class="browser-nav-btns">
            <button class="browser-nav-btn">◀</button>
            <button class="browser-nav-btn">▶</button>
            <button class="browser-nav-btn">↻</button>
          </div>
          <div class="browser-addressbar"><span class="lock-icon">🔒</span><span>chronos-sigloxxi.local</span></div>
        </div>
        <div class="browser-content">
          <div class="browser-logo">🌐</div>
          <p>ChronOS Browser</p>
          <p class="browser-hint">Navegador integrado del Siglo XXI</p>
        </div>
      </div>
    `;
    document.getElementById('desktop-windows').appendChild(windowEl);
    desktopState.openWindows.push({ id: winId, type: 'app', app: 'browser', data: app, title: 'Explorador Web' });
    setupWindowEvents(windowEl, winId);
  }

  updateTaskbar();
  if (typeof playSfx === 'function') playSfx('notify');
}

function createBaseWindow(winId, title, icon, width, height) {
  const el = document.createElement('div');
  el.className = 'desktop-window';
  el.id = winId;
  el.style.cssText = `width:${width}px;height:${height}px;top:${40 + (desktopState.openWindows.length * 25)}px;left:${40 + (desktopState.openWindows.length * 25)}px;z-index:${++desktopState.windowZIndex};`;
  el.innerHTML = `
    <div class="window-header" onmousedown="startDrag(event, '${winId}')">
      <div class="window-title"><img src="${icon}" alt="" onerror="this.style.display='none'"> ${title}</div>
      <div class="window-controls">
        <button class="window-btn minimize" onclick="minimizeWindow('${winId}')">−</button>
        <button class="window-btn maximize" onclick="maximizeWindow('${winId}')">□</button>
        <button class="window-btn close" onclick="closeWindow('${winId}')">×</button>
      </div>
    </div>
    <div class="window-content" style="padding:0;overflow:auto;"></div>
  `;
  return el;
}

function setupWindowEvents(el, winId) {
  el.addEventListener('mousedown', () => { el.style.zIndex = ++desktopState.windowZIndex; });
}

function openAppById(id) {
  const item = findItemById(FILE_SYSTEM, id);
  if (item) openItem(item);
}

// ============================================================
// TERMINAL
// ============================================================
function handleTerminalKey(e, winId) {
  if (e.key !== 'Enter') return;
  const input = document.getElementById(`terminal-input-${winId}`);
  const command = input.value.trim();
  const terminal = document.getElementById(`terminal-${winId}`);
  const inputLine = document.getElementById(`terminal-input-line-${winId}`);

  const cmdLine = document.createElement('div');
  cmdLine.className = 'terminal-line';
  cmdLine.innerHTML = `<span class="terminal-prompt">user@chronos-sigloxxi:~$</span> ${escHtml(command)}`;
  terminal.insertBefore(cmdLine, inputLine);

  if (command.toLowerCase() === 'clear') {
    terminal.querySelectorAll('.terminal-line').forEach(l => { if (l.id !== `terminal-input-line-${winId}`) l.remove(); });
  } else {
    const output = getTerminalOutput(command);
    if (output) {
      output.split('\n').forEach(line => {
        const outLine = document.createElement('div');
        outLine.className = 'terminal-line';
        outLine.textContent = line;
        terminal.insertBefore(outLine, inputLine);
      });
    }
  }

  input.value = '';
  setTimeout(() => terminal.scrollTop = terminal.scrollHeight, 10);
}

function getTerminalOutput(command) {
  const cmd = command.toLowerCase();
  const cmds = {
    'help': `Comandos disponibles:
  help     Muestra esta ayuda
  clear    Limpia la terminal
  date     Fecha y hora actual
  echo     Repite el texto
  ls       Lista archivos
  whoami   Usuario actual
  uname    Info del sistema
  pwd      Directorio actual
  cd       Cambiar directorio`,
    'date': new Date().toLocaleString('es-CO'),
    'ls': 'Documentos/  Avances_e_Inventos/  Autores/  Papelera/',
    'whoami': 'user (explorador del Siglo XXI)',
    'uname': 'ChronOS 21.0 — Kernel del futuro 🚀',
    'pwd': '/home/user/escritorio'
  };
  if (cmds[cmd]) return cmds[cmd];
  if (cmd.startsWith('echo ')) return command.slice(5);
  if (cmd.startsWith('cd ')) return `Cambiando a: ${command.slice(3)}`;
  if (cmd) return `Comando no encontrado: ${command}. Escribe 'help' para ver los disponibles.`;
  return '';
}

function escHtml(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ============================================================
// CONTROL DE VENTANAS
// ============================================================
function closeWindow(winId) {
  const win = document.getElementById(winId);
  if (win) {
    win.style.animation = 'windowClose 0.15s ease forwards';
    setTimeout(() => {
      win.remove();
      desktopState.openWindows = desktopState.openWindows.filter(w => w.id !== winId);
      updateTaskbar();
    }, 150);
  }
}

function minimizeWindow(winId) {
  const win = document.getElementById(winId);
  if (win) { win.style.display = 'none'; updateTaskbar(); }
}

function maximizeWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  if (win.dataset.maximized === 'true') {
    win.style.width = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.style.top = win.dataset.prevTop;
    win.style.left = win.dataset.prevLeft;
    win.style.borderRadius = '8px';
    win.dataset.maximized = 'false';
  } else {
    win.dataset.prevWidth = win.style.width;
    win.dataset.prevHeight = win.style.height;
    win.dataset.prevTop = win.style.top;
    win.dataset.prevLeft = win.style.left;
    win.style.width = '100%';
    win.style.height = 'calc(100%)';
    win.style.top = '0';
    win.style.left = '0';
    win.style.borderRadius = '0';
    win.dataset.maximized = 'true';
  }
}

// ============================================================
// ARRASTRAR
// ============================================================
let dragState = { active: false, winId: null, offsetX: 0, offsetY: 0 };

function startDrag(e, winId) {
  const win = document.getElementById(winId);
  if (win.dataset.maximized === 'true') return;
  dragState = { active: true, winId, offsetX: e.clientX - win.offsetLeft, offsetY: e.clientY - win.offsetTop };
  win.style.zIndex = ++desktopState.windowZIndex;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
}

function onDrag(e) {
  if (!dragState.active) return;
  const win = document.getElementById(dragState.winId);
  if (!win) return;
  win.style.left = (e.clientX - dragState.offsetX) + 'px';
  win.style.top = (e.clientY - dragState.offsetY) + 'px';
}

function stopDrag() {
  dragState.active = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
}

// ============================================================
// UTILIDADES
// ============================================================
function findItemById(root, id) {
  if (root.id === id) return root;
  if (root.children) {
    for (const child of root.children) {
      const found = findItemById(child, id);
      if (found) return found;
    }
  }
  return null;
}

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Meta' || e.key === 'OS') { e.preventDefault(); toggleStartMenu(); }
});