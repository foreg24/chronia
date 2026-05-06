/* =============================================================
   DESKTOP SIGLO XXI — Escritorio PC funcional con carpetas y documentos
   v1.0 — Sistema de archivos virtual, ventanas arrastrables, apps
   ============================================================= */

// ============================================================
// SISTEMA DE ARCHIVOS VIRTUAL
// ============================================================
const FILE_SYSTEM = {
  id: 'root',
  name: 'Escritorio',
  type: 'folder',
  icon: 'assets/desktop/pc-icon.png',
  children: [
    {
      id: 'docs',
      name: 'Documentos',
      type: 'folder',
      icon: 'assets/desktop/folder-documents.png',
      children: [
        {
          id: 'doc-ia',
          name: 'IA y Machine Learning.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'Inteligencia Artificial y Machine Learning',
            body: `
              <h1>Inteligencia Artificial y Machine Learning</h1>
              <p>La inteligencia artificial (IA) es una disciplina del conocimiento que se ocupa de crear 
              sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.</p>

              <h2>Machine Learning</h2>
              <p>El aprendizaje automático es un subconjunto de la IA que permite a las máquinas aprender 
              de los datos sin ser programadas explícitamente para cada tarea.</p>

              <h2>Aplicaciones principales</h2>
              <ul>
                <li>Reconocimiento de imágenes y voz</li>
                <li>Procesamiento del lenguaje natural</li>
                <li>Sistemas de recomendación</li>
                <li>Vehículos autónomos</li>
                <li>Diagnóstico médico asistido</li>
              </ul>

              <h2>Frameworks populares</h2>
              <ul>
                <li>TensorFlow (Google)</li>
                <li>PyTorch (Meta)</li>
                <li>Scikit-learn</li>
                <li>Keras</li>
              </ul>
            `
          }
        },
        {
          id: 'doc-cloud',
          name: 'Computación en la Nube.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'Computación en la Nube',
            body: `
              <h1>Computación en la Nube</h1>
              <p>La computación en la nube es el modelo de entrega de servicios informáticos a través 
              de Internet, permitiendo acceso a recursos como servidores, almacenamiento y bases de datos.</p>

              <h2>Modelos de servicio</h2>
              <ul>
                <li><strong>IaaS</strong> (Infraestructura como Servicio) — AWS EC2, Azure VMs</li>
                <li><strong>PaaS</strong> (Plataforma como Servicio) — Heroku, Google App Engine</li>
                <li><strong>SaaS</strong> (Software como Servicio) — Gmail, Salesforce</li>
              </ul>

              <h2>Proveedores líderes</h2>
              <ul>
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
                <li>IBM Cloud</li>
              </ul>
            `
          }
        },
        {
          id: 'doc-devops',
          name: 'DevOps y CI_CD.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'DevOps y CI/CD',
            body: `
              <h1>DevOps y CI/CD</h1>
              <p>DevOps es una cultura, práctica y conjunto de herramientas que integra el desarrollo 
              de software (Dev) con las operaciones de TI (Ops).</p>

              <h2>Principios fundamentales</h2>
              <ul>
                <li>Colaboración entre equipos</li>
                <li>Automatización de procesos</li>
                <li>Integración continua (CI)</li>
                <li>Entrega continua (CD)</li>
                <li>Monitoreo y retroalimentación</li>
              </ul>

              <h2>Herramientas esenciales</h2>
              <ul>
                <li>Docker — Contenedores</li>
                <li>Kubernetes — Orquestación</li>
                <li>Jenkins — Automatización</li>
                <li>Git — Control de versiones</li>
                <li>Ansible — Configuración</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'web',
      name: 'Historia Web',
      type: 'folder',
      icon: 'assets/desktop/folder-web.png',
      children: [
        {
          id: 'doc-web1',
          name: 'WWW y Tim Berners-Lee.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'World Wide Web — Tim Berners-Lee',
            body: `
              <h1>World Wide Web (1991)</h1>
              <p>Tim Berners-Lee inventó la World Wide Web en 1989 mientras trabajaba en el CERN. 
              La primera página web se publicó el 20 de diciembre de 1990.</p>

              <h2>Tecnologías fundamentales</h2>
              <ul>
                <li><strong>HTML</strong> — Lenguaje de marcado para documentos web</li>
                <li><strong>HTTP</strong> — Protocolo de transferencia de hipertexto</li>
                <li><strong>URL</strong> — Localizador uniforme de recursos</li>
              </ul>

              <h2>Evolución</h2>
              <ul>
                <li>Web 1.0 (1991-2004) — Sitios estáticos, lectura</li>
                <li>Web 2.0 (2004-2016) — Redes sociales, interactividad</li>
                <li>Web 3.0 (2016-presente) — Descentralización, blockchain, IA</li>
              </ul>
            `
          }
        },
        {
          id: 'doc-linux',
          name: 'Linux y Open Source.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'Linux y el Movimiento Open Source',
            body: `
              <h1>Linux (1991)</h1>
              <p>Linus Torvalds creó el kernel de Linux en 1991 como un proyecto personal. 
              Hoy Linux domina servidores, supercomputadoras y dispositivos móviles (Android).</p>

              <h2>Principios del Open Source</h2>
              <ul>
                <li>Libertad de ejecutar el programa</li>
                <li>Libertad de estudiar y modificar el código</li>
                <li>Libertad de redistribuir copias</li>
                <li>Libertad de distribuir versiones modificadas</li>
              </ul>

              <h2>Distribuciones populares</h2>
              <ul>
                <li>Ubuntu — Amigable para usuarios</li>
                <li>Debian — Estabilidad y software libre</li>
                <li>Fedora — Innovación tecnológica</li>
                <li>Arch Linux — Personalización total</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'quantum',
      name: 'Computación Cuántica',
      type: 'folder',
      icon: 'assets/desktop/folder-quantum.png',
      children: [
        {
          id: 'doc-quantum',
          name: 'Introducción a la Computación Cuántica.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'Computación Cuántica',
            body: `
              <h1>Computación Cuántica</h1>
              <p>La computación cuántica utiliza principios de la mecánica cuántica para procesar 
              información de formas imposibles para las computadoras clásicas.</p>

              <h2>Conceptos clave</h2>
              <ul>
                <li><strong>Qubit</strong> — Bit cuántico que puede estar en superposición</li>
                <li><strong>Superposición</strong> — Estado múltiple simultáneo</li>
                <li><strong>Entrelazamiento</strong> — Correlación cuántica entre partículas</li>
                <li><strong>Interferencia</strong> — Amplificación o cancelación de estados</li>
              </ul>

              <h2>Aplicaciones potenciales</h2>
              <ul>
                <li>Criptografía y seguridad</li>
                <li>Optimización de rutas y logística</li>
                <li>Simulación molecular para farmacéutica</li>
                <li>Inteligencia artificial cuántica</li>
              </ul>

              <h2>Plataformas actuales</h2>
              <ul>
                <li>IBM Quantum</li>
                <li>Google Quantum AI</li>
                <li>Microsoft Azure Quantum</li>
                <li>D-Wave Systems</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'agile',
      name: 'Metodologías Ágiles',
      type: 'folder',
      icon: 'assets/desktop/folder-agile.png',
      children: [
        {
          id: 'doc-agile',
          name: 'Scrum y Kanban.docx',
          type: 'document',
          icon: 'assets/desktop/file-word.png',
          content: {
            title: 'Metodologías Ágiles: Scrum y Kanban',
            body: `
              <h1>Scrum</h1>
              <p>Scrum es un marco de trabajo ágil para gestión de proyectos complejos, 
              especialmente desarrollo de software.</p>

              <h2>Roles</h2>
              <ul>
                <li><strong>Product Owner</strong> — Define el producto y prioriza el backlog</li>
                <li><strong>Scrum Master</strong> — Facilita el proceso y elimina obstáculos</li>
                <li><strong>Development Team</strong> — Equipo multifuncional autoorganizado</li>
              </ul>

              <h2>Artefactos</h2>
              <ul>
                <li>Product Backlog — Lista priorizada de funcionalidades</li>
                <li>Sprint Backlog — Tareas del sprint actual</li>
                <li>Incremento — Producto potencialmente entregable</li>
              </ul>

              <h1>Kanban</h1>
              <p>Sistema visual de gestión de trabajo que enfatiza el flujo continuo 
              y la limitación del trabajo en progreso (WIP).</p>

              <h2>Principios</h2>
              <ul>
                <li>Visualizar el flujo de trabajo</li>
                <li>Limitar WIP</li>
                <li>Gestionar el flujo</li>
                <li>Hacer políticas explícitas</li>
                <li>Implementar bucles de retroalimentación</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'recycle',
      name: 'Papelera',
      type: 'folder',
      icon: 'assets/desktop/trash-empty.png',
      children: []
    }
  ]
};

// ============================================================
// ESTADO DEL ESCRITORIO
// ============================================================
let desktopState = {
  currentFolder: FILE_SYSTEM,
  openWindows: [],
  windowZIndex: 100,
  selectedIcon: null,
  startMenuOpen: false
};

let windowCounter = 0;

// ============================================================
// INICIALIZACIÓN
// ============================================================
function initDesktop() {
  renderDesktopIcons();
  updateClock();
  setInterval(updateClock, 1000);

  // Cerrar menú inicio al hacer click fuera
  document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('start-menu');
    const startBtn = document.querySelector('.taskbar-start');
    if (desktopState.startMenuOpen && 
        !startMenu.contains(e.target) && 
        !startBtn.contains(e.target)) {
      toggleStartMenu();
    }
  });
}

// ============================================================
// RELOJ
// ============================================================
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const clock = document.getElementById('taskbar-clock');
  if (clock) clock.textContent = `${hours}:${minutes}`;
}

// ============================================================
// RENDERIZAR ICONOS DEL ESCRITORIO
// ============================================================
function renderDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  if (!container) return;

  container.innerHTML = '';

  desktopState.currentFolder.children.forEach(item => {
    const iconEl = document.createElement('div');
    iconEl.className = 'desktop-icon';
    iconEl.dataset.id = item.id;
    iconEl.dataset.type = item.type;

    // Icono (con fallback si no existe la imagen)
    const img = document.createElement('img');
    img.className = 'desktop-icon-img';
    img.src = item.icon || 'assets/desktop/folder-generic.png';
    img.alt = item.name;
    img.onerror = () => {
      // Fallback: emoji según tipo
      img.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.style.cssText = 'width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:2rem;';
      fallback.textContent = item.type === 'folder' ? '📁' : '📄';
      iconEl.insertBefore(fallback, iconEl.querySelector('.desktop-icon-label'));
    };

    const label = document.createElement('div');
    label.className = 'desktop-icon-label';
    label.textContent = item.name;

    iconEl.appendChild(img);
    iconEl.appendChild(label);

    // Eventos
    iconEl.addEventListener('click', (e) => {
      e.stopPropagation();
      selectIcon(item.id);
    });

    iconEl.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      openItem(item);
    });

    container.appendChild(iconEl);
  });
}

// ============================================================
// SELECCIONAR ICONO
// ============================================================
function selectIcon(id) {
  document.querySelectorAll('.desktop-icon').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });
  desktopState.selectedIcon = id;
}

// ============================================================
// ABRIR ITEM (carpeta o documento)
// ============================================================
function openItem(item) {
  if (item.type === 'folder') {
    openFolderWindow(item);
  } else if (item.type === 'document') {
    openDocumentWindow(item);
  }
  playSfx('click');
}

// ============================================================
// ABRIR VENTANA DE CARPETA
// ============================================================
function openFolderWindow(folder) {
  const winId = `win-${++windowCounter}`;

  const windowEl = document.createElement('div');
  windowEl.className = 'desktop-window';
  windowEl.id = winId;
  windowEl.style.cssText = `
    width: 500px;
    height: 350px;
    top: ${50 + (desktopState.openWindows.length * 30)}px;
    left: ${50 + (desktopState.openWindows.length * 30)}px;
    z-index: ${++desktopState.windowZIndex};
  `;

  windowEl.innerHTML = `
    <div class="window-header" onmousedown="startDrag(event, '${winId}')">
      <div class="window-title">
        <span>📁</span> ${folder.name}
      </div>
      <div class="window-controls">
        <button class="window-btn minimize" onclick="minimizeWindow('${winId}')">−</button>
        <button class="window-btn maximize" onclick="maximizeWindow('${winId}')">□</button>
        <button class="window-btn close" onclick="closeWindow('${winId}')">×</button>
      </div>
    </div>
    <div class="window-content">
      <div class="folder-view" id="folder-view-${winId}"></div>
    </div>
  `;

  document.getElementById('desktop-windows').appendChild(windowEl);
  desktopState.openWindows.push({ id: winId, type: 'folder', data: folder });

  // Renderizar contenido de la carpeta
  const folderView = document.getElementById(`folder-view-${winId}`);
  folder.children.forEach(child => {
    const itemEl = document.createElement('div');
    itemEl.className = 'folder-item';
    itemEl.innerHTML = `
      <img class="folder-item-icon" src="${child.icon || 'assets/desktop/file-generic.png'}" 
           alt="${child.name}" 
           onerror="this.style.display='none';this.nextElementSibling.style.fontSize='2rem';this.nextElementSibling.textContent='${child.type === 'folder' ? '📁' : '📄'}';">
      <div class="folder-item-name">${child.name}</div>
    `;
    itemEl.addEventListener('dblclick', () => openItem(child));
    folderView.appendChild(itemEl);
  });

  // Traer al frente al hacer click
  windowEl.addEventListener('mousedown', () => {
    windowEl.style.zIndex = ++desktopState.windowZIndex;
  });

  updateTaskbar();
  playSfx('notify');
}

// ============================================================
// ABRIR VENTANA DE DOCUMENTO (estilo Word)
// ============================================================
function openDocumentWindow(doc) {
  const winId = `win-${++windowCounter}`;

  const windowEl = document.createElement('div');
  windowEl.className = 'desktop-window';
  windowEl.id = winId;
  windowEl.style.cssText = `
    width: 600px;
    height: 450px;
    top: ${40 + (desktopState.openWindows.length * 25)}px;
    left: ${40 + (desktopState.openWindows.length * 25)}px;
    z-index: ${++desktopState.windowZIndex};
  `;

  windowEl.innerHTML = `
    <div class="window-header" onmousedown="startDrag(event, '${winId}')">
      <div class="window-title">
        <span>📝</span> ${doc.name}
      </div>
      <div class="window-controls">
        <button class="window-btn minimize" onclick="minimizeWindow('${winId}')">−</button>
        <button class="window-btn maximize" onclick="maximizeWindow('${winId}')">□</button>
        <button class="window-btn close" onclick="closeWindow('${winId}')">×</button>
      </div>
    </div>
    <div class="window-content" style="padding:0;">
      <div class="document-view">
        ${doc.content.body}
      </div>
    </div>
  `;

  document.getElementById('desktop-windows').appendChild(windowEl);
  desktopState.openWindows.push({ id: winId, type: 'document', data: doc });

  // Traer al frente al hacer click
  windowEl.addEventListener('mousedown', () => {
    windowEl.style.zIndex = ++desktopState.windowZIndex;
  });

  updateTaskbar();
  playSfx('notify');
}

// ============================================================
// ABRIR APP ESPECIAL (navegador, terminal)
// ============================================================
function openApp(appName) {
  const winId = `win-${++windowCounter}`;

  const windowEl = document.createElement('div');
  windowEl.className = 'desktop-window';
  windowEl.id = winId;
  windowEl.style.cssText = `
    width: 550px;
    height: 380px;
    top: ${60 + (desktopState.openWindows.length * 30)}px;
    left: ${60 + (desktopState.openWindows.length * 30)}px;
    z-index: ${++desktopState.windowZIndex};
  `;

  let content = '';
  let title = '';
  let icon = '';

  switch(appName) {
    case 'navegador':
      title = 'Navegador Web';
      icon = '🌐';
      content = `
        <div style="padding:1rem;background:#0a0a12;height:100%;">
          <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
            <input type="text" placeholder="https://..." 
              style="flex:1;padding:0.4rem;background:rgba(255,255,255,0.05);border:1px solid rgba(0,245,255,0.2);border-radius:4px;color:#e0e8f0;font-family:var(--fm);font-size:0.6rem;">
            <button style="padding:0.4rem 0.8rem;background:var(--accent);border:none;border-radius:4px;color:#000;font-family:var(--fp);font-size:0.3rem;cursor:pointer;">Ir</button>
          </div>
          <div style="color:var(--mid);font-family:var(--ft);font-size:0.9rem;text-align:center;padding-top:3rem;">
            <p>🌐 Navegador ChronOS</p>
            <p style="margin-top:1rem;font-size:0.8rem;">Ingresa una URL para navegar</p>
          </div>
        </div>
      `;
      break;

    case 'terminal':
      title = 'Terminal';
      icon = '💻';
      content = `
        <div class="terminal-view" id="terminal-${winId}">
          <div class="terminal-line"><span class="terminal-prompt">user@chronos-sigloxxi:~$</span> welcome</div>
          <div class="terminal-line">🌐 Bienvenido a ChronOS Terminal — Siglo XXI</div>
          <div class="terminal-line">Comandos disponibles: help, clear, date, echo, ls</div>
          <div class="terminal-line">&nbsp;</div>
          <div class="terminal-line" id="terminal-input-line-${winId}">
            <span class="terminal-prompt">user@chronos-sigloxxi:~$</span>
            <input type="text" class="terminal-input" id="terminal-input-${winId}" 
              onkeydown="handleTerminalKey(event, '${winId}')" autofocus>
          </div>
        </div>
      `;
      break;

    case 'documentos':
      // Abrir la carpeta Documentos
      const docsFolder = FILE_SYSTEM.children.find(c => c.id === 'docs');
      if (docsFolder) {
        openFolderWindow(docsFolder);
        toggleStartMenu();
        return;
      }
      break;
  }

  if (!content) return;

  windowEl.innerHTML = `
    <div class="window-header" onmousedown="startDrag(event, '${winId}')">
      <div class="window-title">
        <span>${icon}</span> ${title}
      </div>
      <div class="window-controls">
        <button class="window-btn minimize" onclick="minimizeWindow('${winId}')">−</button>
        <button class="window-btn maximize" onclick="maximizeWindow('${winId}')">□</button>
        <button class="window-btn close" onclick="closeWindow('${winId}')">×</button>
      </div>
    </div>
    <div class="window-content" style="padding:0;overflow:hidden;">
      ${content}
    </div>
  `;

  document.getElementById('desktop-windows').appendChild(windowEl);
  desktopState.openWindows.push({ id: winId, type: 'app', app: appName });

  windowEl.addEventListener('mousedown', () => {
    windowEl.style.zIndex = ++desktopState.windowZIndex;
  });

  updateTaskbar();
  toggleStartMenu();
  playSfx('notify');

  // Enfocar input de terminal si es terminal
  if (appName === 'terminal') {
    setTimeout(() => {
      const input = document.getElementById(`terminal-input-${winId}`);
      if (input) input.focus();
    }, 100);
  }
}

// ============================================================
// TERMINAL — Manejar comandos
// ============================================================
function handleTerminalKey(e, winId) {
  if (e.key === 'Enter') {
    const input = document.getElementById(`terminal-input-${winId}`);
    const command = input.value.trim();
    const terminal = document.getElementById(`terminal-${winId}`);
    const inputLine = document.getElementById(`terminal-input-line-${winId}`);

    // Mostrar comando ejecutado
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-line';
    cmdLine.innerHTML = `<span class="terminal-prompt">user@chronos-sigloxxi:~$</span> ${esc(command)}`;
    terminal.insertBefore(cmdLine, inputLine);

    // Procesar comando
    let output = '';
    switch(command.toLowerCase()) {
      case 'help':
        output = `Comandos disponibles:
  help    — Muestra esta ayuda
  clear   — Limpia la terminal
  date    — Muestra la fecha actual
  echo    — Repite el texto
  ls      — Lista archivos
  whoami  — Muestra usuario actual
  uname   — Información del sistema`;
        break;
      case 'clear':
        // Limpiar todo excepto la línea de input
        const lines = terminal.querySelectorAll('.terminal-line');
        lines.forEach(line => {
          if (line.id !== `terminal-input-line-${winId}`) line.remove();
        });
        input.value = '';
        return;
      case 'date':
        output = new Date().toLocaleString('es-CO');
        break;
      case 'ls':
        output = 'Documentos/  Historia_Web/  Computacion_Cuantica/  Metodologias_Agiles/  Papelera/';
        break;
      case 'whoami':
        output = 'user (explorador del Siglo XXI)';
        break;
      case 'uname':
        output = 'ChronOS 21.0 — Kernel del futuro 🚀';
        break;
      default:
        if (command.startsWith('echo ')) {
          output = command.slice(5);
        } else if (command) {
          output = `Comando no encontrado: ${command}. Escribe 'help' para ver los disponibles.`;
        }
    }

    if (output) {
      output.split('\n').forEach(line => {
        const outLine = document.createElement('div');
        outLine.className = 'terminal-line';
        outLine.textContent = line;
        terminal.insertBefore(outLine, inputLine);
      });
    }

    input.value = '';
    terminal.scrollTop = terminal.scrollHeight;
  }
}

function esc(s) {
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
  playSfx('click');
}

function minimizeWindow(winId) {
  const win = document.getElementById(winId);
  if (win) {
    win.style.display = 'none';
    updateTaskbar();
  }
  playSfx('click');
}

function maximizeWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;

  if (win.dataset.maximized === 'true') {
    // Restaurar
    win.style.width = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.style.top = win.dataset.prevTop;
    win.style.left = win.dataset.prevLeft;
    win.dataset.maximized = 'false';
  } else {
    // Maximizar
    win.dataset.prevWidth = win.style.width;
    win.dataset.prevHeight = win.style.height;
    win.dataset.prevTop = win.style.top;
    win.dataset.prevLeft = win.style.left;
    win.style.width = '100%';
    win.style.height = 'calc(100% - 34px)';
    win.style.top = '0';
    win.style.left = '0';
    win.dataset.maximized = 'true';
  }
  playSfx('click');
}

// ============================================================
// ARRASTRAR VENTANAS
// ============================================================
let dragState = { active: false, winId: null, offsetX: 0, offsetY: 0 };

function startDrag(e, winId) {
  const win = document.getElementById(winId);
  if (win.dataset.maximized === 'true') return;

  dragState = {
    active: true,
    winId: winId,
    offsetX: e.clientX - win.offsetLeft,
    offsetY: e.clientY - win.offsetTop
  };

  // Traer al frente
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
// BARRA DE TAREAS
// ============================================================
function updateTaskbar() {
  const container = document.getElementById('taskbar-apps');
  if (!container) return;

  container.innerHTML = '';

  desktopState.openWindows.forEach(win => {
    const btn = document.createElement('div');
    btn.className = 'taskbar-app';

    let icon = '📁';
    let name = 'Ventana';

    if (win.type === 'folder') {
      icon = '📁';
      name = win.data.name;
    } else if (win.type === 'document') {
      icon = '📝';
      name = win.data.name.substring(0, 15) + '...';
    } else if (win.type === 'app') {
      switch(win.app) {
        case 'navegador': icon = '🌐'; name = 'Navegador'; break;
        case 'terminal': icon = '💻'; name = 'Terminal'; break;
      }
    }

    btn.innerHTML = `<span>${icon}</span> <span>${name}</span>`;

    const winEl = document.getElementById(win.id);
    if (winEl && winEl.style.display !== 'none') {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      const w = document.getElementById(win.id);
      if (w) {
        if (w.style.display === 'none') {
          w.style.display = 'flex';
          w.style.zIndex = ++desktopState.windowZIndex;
        } else {
          w.style.zIndex = ++desktopState.windowZIndex;
        }
        updateTaskbar();
      }
    });

    container.appendChild(btn);
  });
}

// ============================================================
// MENÚ INICIO
// ============================================================
function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  if (!menu) return;

  desktopState.startMenuOpen = !desktopState.startMenuOpen;
  menu.style.display = desktopState.startMenuOpen ? 'block' : 'none';
  playSfx('click');
}

// ============================================================
// CLICK EN ÁREA DE TRABAJO (deseleccionar)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const workspace = document.getElementById('desktop-workspace');
  if (workspace) {
    workspace.addEventListener('click', (e) => {
      if (e.target === workspace || e.target.id === 'desktop-icons') {
        document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
        desktopState.selectedIcon = null;
      }
    });
  }
});

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
  // Win/Super key para menú inicio
  if (e.key === 'Meta' || e.key === 'OS') {
    e.preventDefault();
    toggleStartMenu();
  }
});