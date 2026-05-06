/* =============================================================
   MULTIJUGADOR v3.0 — WebSocket Client con interpolación suave
   =============================================================
   CAMBIOS CLAVE:
   - Throttling: envía move máximo 10 veces/segundo
   - Interpolación por frame (no tweens que compiten)
   - Dead reckoning + lerp suave
   - Gender correcto en todos los mensajes
   - Animación de sprites por dirección sin glitch
   ============================================================= */

class MultiplayerManager {
  constructor() {
    this.ws = null;
    this.id = null;
    this.connected = false;
    this.players = new Map();
    this.currentRoom = 'exterior';
    this.currentScene = 'ExteriorScene';
    this.playerName = localStorage.getItem('playerName') || '';
    this.playerGender = localStorage.getItem('playerGender') || 'm';
    this.reconnectAttempts = 0;
    this.maxReconnect = 5;
    this.pingInterval = null;
    this.chatHistory = [];
    this.onChatMessage = null;
    this.onPlayerCountChange = null;

    // THROTTLING: Control de envío de movimiento
    this._lastMoveSend = 0;
    this._moveThrottleMs = 80; // ~12 updates/segundo (suficiente para fluido)
    this._lastSentX = 0;
    this._lastSentY = 0;
    this._minMoveDelta = 3; // Mínimo px de cambio para enviar

    // Buffer de posición para interpolación
    this._positionBuffer = new Map(); // playerId -> {x, y, timestamp}
  }

  connect(scene) {
    this._intentionalDisconnect = false;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    try {
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => {
        console.log('🟢 Conectado al servidor multijugador');
        this.connected = true;
        this.reconnectAttempts = 0;
        if (!this.playerName) this.playerName = 'Viajero';
        const activeScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive()) || scene;
        this.joinRoom(activeScene);
        this.pingInterval = setInterval(() => {
          if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type: 'ping' }));
          }
        }, 15000);
      };
      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          const activeScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive()) || scene;
          this.handleMessage(msg, activeScene);
        } catch (e) { console.error('Error parseando mensaje:', e); }
      };
      this.ws.onclose = () => {
        console.log('🔴 Desconectado del servidor');
        this.connected = false;
        this.cleanupPlayers(scene);
        clearInterval(this.pingInterval);
        if (!this._intentionalDisconnect && this.reconnectAttempts < this.maxReconnect) {
          this.reconnectAttempts++;
          setTimeout(() => {
            if (!this._intentionalDisconnect) {
              console.log(`🔄 Reconectando... intento ${this.reconnectAttempts}`);
              this.connect(scene);
            }
          }, 2000 * this.reconnectAttempts);
        }
      };
      this.ws.onerror = (err) => { console.error('WebSocket error:', err); };
    } catch (e) {
      console.error('Error conectando WebSocket:', e);
      this.showOfflineMode();
    }
  }

  joinRoom(scene) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.currentRoom = 'world';
    this.currentScene = scene.scene.key;
    const x = scene.player ? scene.player.x : 400;
    const y = scene.player ? scene.player.y : 400;
    this._lastSentX = x;
    this._lastSentY = y;
    this.ws.send(JSON.stringify({
      type: 'join',
      name: this.playerName,
      gender: this.playerGender,
      room: 'world',
      scene: scene.scene.key,
      x: x, y: y
    }));
  }

  // ============================================================
  // THROTTLED MOVE: Solo envía si pasó suficiente tiempo o distancia
  // ============================================================
  sendMove(x, y) {
    if (!this.connected || !this.ws) return;

    const now = Date.now();
    const dx = Math.abs(x - this._lastSentX);
    const dy = Math.abs(y - this._lastSentY);
    const timeSinceLast = now - this._lastMoveSend;

    // Enviar solo si:
    // 1. Pasó el tiempo mínimo (throttling) Y hay movimiento significativo
    // 2. O cambió de dirección bruscamente
    if (timeSinceLast >= this._moveThrottleMs && (dx > this._minMoveDelta || dy > this._minMoveDelta)) {
      this._lastMoveSend = now;
      this._lastSentX = x;
      this._lastSentY = y;
      this.ws.send(JSON.stringify({ type: 'move', x, y }));
    }
  }

  handleMessage(msg, scene) {
    switch (msg.type) {
      case 'sceneInit': {
        if (msg.players && msg.players.length > 0) {
          const targetScene = this.currentScene;
          const players = msg.players;
          let attempts = 0;
          const maxAttempts = 20;
          const tryCreate = () => {
            const active = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
            if (active && (active.scene.key === targetScene ||
                (targetScene.startsWith('EpochScene_') && active.scene.key === 'EpochScene'))) {
              players.forEach(p => { 
                if (!this.players.has(p.id)) this.createPlayerSprite(p, active); 
              });
              this.updatePlayerCount();
            } else if (attempts < maxAttempts) { attempts++; setTimeout(tryCreate, 100); }
          };
          tryCreate();
        }
        break;
      }
      case 'init': {
        this.id = msg.id;
        this.cleanupPlayers(scene);
        msg.players.forEach(p => { 
          if (p.scene === this.currentScene) this.createPlayerSprite(p, scene); 
        });
        this.updatePlayerCount();
        break;
      }
      case 'playerJoined': {
        if (msg.id !== this.id && msg.scene === this.currentScene) {
          if (this.players.has(msg.id)) this.removePlayer(msg.id, scene);
          this.createPlayerSprite(msg, scene);
          this.showSystemMessage(`${msg.name} se ha unido`, scene);
          this.updatePlayerCount();
        } else if (msg.id !== this.id && msg.scene !== this.currentScene) {
          if (this.players.has(msg.id)) { this.removePlayer(msg.id, scene); this.updatePlayerCount(); }
        }
        break;
      }
      case 'playerMoved': {
        const player = this.players.get(msg.id);
        if (player) {
          // Guardar posición objetivo en buffer (NO mover inmediatamente)
          player.targetX = msg.x;
          player.targetY = msg.y;
          player.hasTarget = true;
          player.lastUpdate = Date.now();
        }
        break;
      }
      case 'playerLeft': {
        if (msg.id !== this.id) {
          this.removePlayer(msg.id, scene);
          this.showSystemMessage(`${msg.name} se ha ido`, scene);
          this.updatePlayerCount();
        }
        break;
      }
      case 'playerSceneChange': {
        if (msg.id === this.id) return;
        if (msg.scene === this.currentScene) {
          if (!this.players.has(msg.id)) {
            this.createPlayerSprite({ 
              id: msg.id, 
              name: msg.name, 
              gender: msg.gender,
              x: msg.x, 
              y: msg.y, 
              scene: msg.scene 
            }, scene);
            this.updatePlayerCount();
          }
        } else {
          if (this.players.has(msg.id)) { this.removePlayer(msg.id, scene); this.updatePlayerCount(); }
        }
        break;
      }
      case 'chatMessage': {
        if (msg.scene === this.currentScene) {
          this.showChatBubble(msg.senderId, msg.name, msg.text, scene);
          if (this.onChatMessage) this.onChatMessage(msg);
        }
        break;
      }
      case 'pong': break;
    }
  }

  // ============================================================
  // CREATE PLAYER: Con sistema de interpolación por frame
  // ============================================================
  createPlayerSprite(playerData, scene) {
    if (this.players.has(playerData.id)) return;
    if (!scene || !scene.add) return;

    const gender = playerData.gender || 'm';
    const container = scene.add.container(playerData.x, playerData.y);
    container.setDepth(15);

    const textureKey = gender === 'f' ? 'chica' : 'chico';
    let body;
    if (scene.textures && scene.textures.exists(textureKey)) {
      body = scene.add.image(0, 0, textureKey).setDisplaySize(115, 115);
    } else {
      const size = 28;
      body = scene.add.rectangle(0, 0, size, size, gender === 'f' ? 0xbf5fff : 0x00f5ff);
    }

    const nameText = scene.add.text(0, -38, playerData.name, {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '7px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
      align: 'center'
    }).setOrigin(0.5);

    const onlineDot = scene.add.circle(0, -50, 3, 0x39ff14);
    onlineDot.setAlpha(0.8);

    container.add([body, nameText, onlineDot]);
    container.setScale(0);
    scene.tweens.add({ targets: container, scale: 1, duration: 300, ease: 'Back.easeOut' });

    // Sistema de interpolación suave
    this.players.set(playerData.id, {
      container, body, nameText, onlineDot,
      chatBubble: null, chatBubbleTimer: null,
      name: playerData.name, 
      gender: gender,
      scene: playerData.scene,
      // Posición actual (visual)
      x: playerData.x, 
      y: playerData.y,
      // Posición objetivo (del servidor)
      targetX: playerData.x,
      targetY: playerData.y,
      hasTarget: false,
      lastUpdate: Date.now(),
      // Animación
      walkFrame: 0, 
      walkTimer: 0,
      lastDir: 'front',
      isMoving: false
    });
  }

  // ============================================================
  // UPDATE: Llamar desde el update() de Phaser cada frame
  // Interpola suavemente hacia la posición objetivo
  // ============================================================
  update(scene, delta) {
    const now = Date.now();

    this.players.forEach((player, id) => {
      if (!player.container || !player.container.active) return;

      if (player.hasTarget) {
        // Calcular distancia al objetivo
        const dx = player.targetX - player.x;
        const dy = player.targetY - player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Si está muy cerca, snap directo
        if (dist < 1) {
          player.x = player.targetX;
          player.y = player.targetY;
          player.container.x = player.x;
          player.container.y = player.y;
          player.hasTarget = false;
          player.isMoving = false;
          this.updateSpriteAnimation(player, 0, 0, scene);
          return;
        }

        // INTERPOLACIÓN SUAVE: lerp factor basado en distancia
        // Más lejos = más rápido, más cerca = más suave
        const lerpFactor = Math.min(0.15, dist * 0.005); // Ajustable
        const moveX = dx * lerpFactor;
        const moveY = dy * lerpFactor;

        player.x += moveX;
        player.y += moveY;
        player.container.x = player.x;
        player.container.y = player.y;

        // Actualizar animación de sprite
        player.isMoving = true;
        this.updateSpriteAnimation(player, dx, dy, scene);

        // Si no recibimos update en 500ms, considerar detenido
        if (now - player.lastUpdate > 500) {
          player.hasTarget = false;
          player.isMoving = false;
          this.updateSpriteAnimation(player, 0, 0, scene);
        }
      } else if (player.isMoving) {
        // Se quedó sin target pero seguía marcado como moviendo
        player.isMoving = false;
        this.updateSpriteAnimation(player, 0, 0, scene);
      }
    });
  }

  // ============================================================
  // ANIMACIÓN DE SPRITE: Sin tweens, solo cambio de textura
  // ============================================================
  updateSpriteAnimation(player, dx, dy, scene) {
    if (!player.body || !player.body.setTexture) return;
    if (!scene || !scene.textures) return;

    const g = player.gender || 'm';
    const now = Date.now();
    const moving = Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5;

    if (moving) {
      // Animación de caminata cada 180ms
      if (now - player.walkTimer > 180) {
        player.walkFrame = (player.walkFrame + 1) % 2;
        player.walkTimer = now;
      }

      if (Math.abs(dx) >= Math.abs(dy)) {
        // Movimiento horizontal
        if (dx > 0) {
          player.lastDir = 'right';
          const keys = g === 'f' 
            ? ['chicaper', 'chicamin']
            : ['chicoper', 'chicomin'];
          const key = keys[player.walkFrame];
          if (scene.textures.exists(key)) player.body.setTexture(key);
        } else {
          player.lastDir = 'left';
          const keys = g === 'f'
            ? ['chicaperizq', 'chicaminizq']
            : ['chicoperizq', 'chicominizq'];
          const key = keys[player.walkFrame];
          if (scene.textures.exists(key)) player.body.setTexture(key);
        }
      } else {
        // Movimiento vertical
        if (dy < 0) {
          player.lastDir = 'back';
          const key = g === 'f' ? 'chicaespa' : 'chicoespa';
          if (scene.textures.exists(key)) player.body.setTexture(key);
        } else {
          player.lastDir = 'front';
          const key = g === 'f' ? 'chica' : 'chico';
          if (scene.textures.exists(key)) player.body.setTexture(key);
        }
      }
    } else {
      // En reposo: sprite frontal
      const key = g === 'f' ? 'chica' : 'chico';
      if (scene.textures.exists(key)) player.body.setTexture(key);
    }
  }

  removePlayer(id, scene) {
    const player = this.players.get(id);
    if (!player) return;
    if (player.chatBubbleTimer) { clearTimeout(player.chatBubbleTimer); player.chatBubbleTimer = null; }
    if (player.container && scene && scene.tweens) {
      scene.tweens.add({
        targets: player.container, scale: 0, alpha: 0, duration: 300,
        onComplete: () => { if (player.container) player.container.destroy(); }
      });
    } else if (player.container) { player.container.destroy(); }
    this.players.delete(id);
  }

  showChatBubble(senderId, name, text, scene) {
    let targetContainer = null;
    let isLocal = false;
    let player = null;

    if (senderId === this.id) {
      const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (currentScene && currentScene.player) { targetContainer = currentScene.player; isLocal = true; }
    } else {
      player = this.players.get(senderId);
      if (player && player.container) targetContainer = player.container;
    }

    if (!targetContainer || !scene || !scene.add) return;

    const bubbleWidth = Math.min(Math.max(text.length * 6 + 20, 60), 200);
    const bubbleHeight = 28;
    const bubbleContainer = scene.add.container(0, -55);
    const bg = scene.add.rectangle(0, 0, bubbleWidth, bubbleHeight, 0x000000, 0.85);
    bg.setStrokeStyle(1, 0x00f5ff);
    const chatText = scene.add.text(0, 0, text, {
      fontFamily: '"VT323", monospace', fontSize: '10px', color: '#ffffff',
      wordWrap: { width: bubbleWidth - 16 }
    }).setOrigin(0.5);
    const triangle = scene.add.triangle(0, bubbleHeight/2, -6, 0, 6, 0, 0, 6, 0x000000);
    triangle.setStrokeStyle(1, 0x00f5ff);
    bubbleContainer.add([bg, chatText, triangle]);
    bubbleContainer.setDepth(100);

    if (isLocal) {
      bubbleContainer.x = targetContainer.x;
      bubbleContainer.y = targetContainer.y - 55;
      scene.add.existing(bubbleContainer);
      const followEvent = scene.time.addEvent({
        delay: 16, loop: true,
        callback: () => {
          if (bubbleContainer && targetContainer) {
            bubbleContainer.x = targetContainer.x;
            bubbleContainer.y = targetContainer.y - 55;
          }
        }
      });
      scene.time.delayedCall(7000, () => {
        followEvent.remove();
        if (bubbleContainer) {
          scene.tweens.add({
            targets: bubbleContainer, alpha: 0, y: bubbleContainer.y - 20, duration: 300,
            onComplete: () => bubbleContainer.destroy()
          });
        }
      });
    } else {
      targetContainer.add(bubbleContainer);
      if (player.chatBubble) player.chatBubble.destroy();
      if (player.chatBubbleTimer) clearTimeout(player.chatBubbleTimer);
      player.chatBubble = bubbleContainer;
      player.chatBubbleTimer = setTimeout(() => {
        if (bubbleContainer && bubbleContainer.active) {
          if (scene && scene.tweens) {
            scene.tweens.add({
              targets: bubbleContainer, alpha: 0, y: bubbleContainer.y - 20, duration: 300,
              onComplete: () => {
                if (bubbleContainer && bubbleContainer.active) bubbleContainer.destroy();
                if (player && player.chatBubble === bubbleContainer) player.chatBubble = null;
              }
            });
          } else {
            bubbleContainer.destroy();
            if (player) player.chatBubble = null;
          }
        }
      }, 7000);
    }
  }

  showSystemMessage(text, scene) {
    if (!scene || !scene.add) return;
    const sysText = scene.add.text(scene.cameras.main.centerX, 60, text, {
      fontFamily: '"Press Start 2P", monospace', fontSize: '8px',
      color: '#39ff14', stroke: '#000000', strokeThickness: 3
    }).setOrigin(0.5).setDepth(200);
    scene.tweens.add({ targets: sysText, alpha: 0, y: 40, duration: 2500, onComplete: () => sysText.destroy() });
  }

  sendChat(text) {
    if (!this.connected || !this.ws) { this.showOfflineNotification(); return; }
    if (!text.trim()) return;
    this.ws.send(JSON.stringify({ type: 'chat', text: text.trim().substring(0, 100) }));
  }

  changeScene(newRoom, newScene, x, y) {
    if (!this.connected || !this.ws) return;
    const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
    if (currentScene) this.cleanupPlayers(currentScene);
    this.currentScene = newScene;
    this.currentRoom = 'world';
    this.ws.send(JSON.stringify({ type: 'sceneChange', room: 'world', scene: newScene, x, y }));
  }

  cleanupPlayers(scene) {
    this.players.forEach((player) => {
      if (player.chatBubbleTimer) { clearTimeout(player.chatBubbleTimer); player.chatBubbleTimer = null; }
      if (player.container) player.container.destroy();
    });
    this.players.clear();
  }

  updatePlayerCount() {
    if (this.onPlayerCountChange) this.onPlayerCountChange(this.players.size + 1);
  }

  showOfflineMode() {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = '🔌 Modo offline — El servidor no está disponible';
      toast.className = 'toast show';
      setTimeout(() => toast.classList.remove('show'), 4000);
    }
  }

  showOfflineNotification() {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = '🔌 No hay conexión al servidor';
      toast.className = 'toast show';
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  }

  disconnect() {
    this._intentionalDisconnect = true;
    if (this.ws) { this.ws.onclose = null; this.ws.close(); this.ws = null; }
    clearInterval(this.pingInterval);
    this.connected = false;
    this.reconnectAttempts = 0;
    this.players.clear();
  }
}

window.multiplayer = new MultiplayerManager();