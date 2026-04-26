/* =============================================================
   MULTIJUGADOR — WebSocket Client para Time Traveler RPG
   v2.0 — Jugadores visibles por sala, filtrado por escena en cliente
   Chat 7s, sin jugadores fantasma, botón centro D-pad para chat
   ============================================================= */

class MultiplayerManager {
  constructor() {
    this.ws = null;
    this.id = null;
    this.connected = false;
    this.players = new Map(); // id -> { container, scene, nameText, ... }
    this.currentRoom = 'exterior';
    this.currentScene = 'ExteriorScene';
    this.playerName = localStorage.getItem('playerName') || '';
    this.reconnectAttempts = 0;
    this.maxReconnect = 5;
    this.pingInterval = null;
    this.chatHistory = [];
    this.onChatMessage = null;
    this.onPlayerCountChange = null;
  }

  connect(scene) {
    this._intentionalDisconnect = false;  // Nueva conexión, resetear flag
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('🟢 Conectado al servidor multijugador');
        this.connected = true;
        this.reconnectAttempts = 0;

        if (!this.playerName) this.playerName = 'Viajero';

        // Unirse a la sala desde la escena activa actual
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
          // Siempre usar la escena activa actual, no la del closure (puede ser vieja)
          const activeScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive()) || scene;
          this.handleMessage(msg, activeScene);
        } catch (e) {
          console.error('Error parseando mensaje:', e);
        }
      };

      this.ws.onclose = () => {
        console.log('🔴 Desconectado del servidor');
        this.connected = false;
        this.cleanupPlayers(scene);
        clearInterval(this.pingInterval);

        // Solo reconectar si NO fue una desconexión intencional (ej: cambio de sección)
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

      this.ws.onerror = (err) => {
        console.error('WebSocket error:', err);
      };

    } catch (e) {
      console.error('Error conectando WebSocket:', e);
      this.showOfflineMode();
    }
  }

  // El nombre se captura en el placeholder antes de iniciar el juego
  // Ver startGameWithName() en index.html

  joinRoom(scene) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

    // Todos los jugadores están en la misma sala 'world'
    // El filtrado por escena es 100% del lado del cliente
    this.currentRoom = 'world';
    this.currentScene = scene.scene.key;

    const x = scene.player ? scene.player.x : 400;
    const y = scene.player ? scene.player.y : 400;

    this.ws.send(JSON.stringify({
      type: 'join',
      name: this.playerName,
      room: 'world',
      scene: scene.scene.key,
      x: x,
      y: y
    }));
  }

  handleMessage(msg, scene) {
    switch (msg.type) {
      case 'sceneInit': {
        // El servidor nos dice quiénes ya estaban en la escena a la que entramos.
        // Problema: este mensaje puede llegar mientras Phaser aún está en transición
        // (la escena destino todavía no está activa). Usamos un retry con intervalo.
        if (msg.players && msg.players.length > 0) {
          const targetScene = this.currentScene;  // La escena a la que queremos llegar
          const players = msg.players;
          let attempts = 0;
          const maxAttempts = 20;  // hasta ~2 segundos

          const tryCreate = () => {
            const active = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
            // Esperar hasta que la escena activa sea la correcta
            if (active && (active.scene.key === targetScene ||
                // Para EpochScene todas comparten el mismo key 'EpochScene'
                (targetScene.startsWith('EpochScene_') && active.scene.key === 'EpochScene'))) {
              players.forEach(p => {
                if (!this.players.has(p.id)) {
                  this.createPlayerSprite(p, active);
                }
              });
              this.updatePlayerCount();
            } else if (attempts < maxAttempts) {
              attempts++;
              setTimeout(tryCreate, 100);
            }
          };
          tryCreate();
        }
        break;
      }

      case 'init': {
        this.id = msg.id;
        // Limpiar jugadores existentes
        this.cleanupPlayers(scene);

        // Crear sprites SOLO para jugadores en la MISMA escena
        msg.players.forEach(p => {
          if (p.scene === this.currentScene) {
            this.createPlayerSprite(p, scene);
          }
        });

        // NO cargar mensajes históricos — evita spam de mensajes viejos al volver
        this.updatePlayerCount();
        break;
      }

      case 'playerJoined': {
        // Solo mostrar si está en la MISMA escena
        if (msg.id !== this.id && msg.scene === this.currentScene) {
          // Si ya existe un sprite de este jugador (reconexión rápida), eliminarlo primero
          if (this.players.has(msg.id)) {
            this.removePlayer(msg.id, scene);
          }
          this.createPlayerSprite(msg, scene);
          this.showSystemMessage(`${msg.name} se ha unido`, scene);
          this.updatePlayerCount();
        } else if (msg.id !== this.id && msg.scene !== this.currentScene) {
          // Si está en otra escena y teníamos su sprite por reconexión, limpiarlo
          if (this.players.has(msg.id)) {
            this.removePlayer(msg.id, scene);
            this.updatePlayerCount();
          }
        }
        break;
      }

      case 'playerMoved': {
        // Solo actualizar si está en la MISMA escena
        const player = this.players.get(msg.id);
        if (player) {
          this.updatePlayerPosition(msg.id, msg.x, msg.y, scene);
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
        // Un jugador cambió de escena
        if (msg.id === this.id) return;

        if (msg.scene === this.currentScene) {
          // Llegó a nuestra escena — crearlo
          if (!this.players.has(msg.id)) {
            this.createPlayerSprite({
              id: msg.id,
              name: msg.name,
              x: msg.x,
              y: msg.y,
              scene: msg.scene
            }, scene);
            this.updatePlayerCount();
          }
        } else {
          // Se fue de nuestra escena — eliminarlo
          if (this.players.has(msg.id)) {
            this.removePlayer(msg.id, scene);
            this.updatePlayerCount();
          }
        }
        break;
      }

      case 'chatMessage': {
        // Solo mostrar si es de la misma escena
        if (msg.scene === this.currentScene) {
          this.showChatBubble(msg.senderId, msg.name, msg.text, scene);
          if (this.onChatMessage) {
            this.onChatMessage(msg);
          }
        }
        break;
      }

      case 'pong': {
        break;
      }
    }
  }

  createPlayerSprite(playerData, scene) {
    if (this.players.has(playerData.id)) {
      this.updatePlayerPosition(playerData.id, playerData.x, playerData.y, scene);
      return;
    }
    if (!scene || !scene.add) return;

    const container = scene.add.container(playerData.x, playerData.y);
    container.setDepth(15);

    const body = scene.add.rectangle(0, 0, 16, 24, 0xff6b35);
    const head = scene.add.circle(0, -14, 6, 0xffdbac);
    const shadow = scene.add.ellipse(0, 12, 14, 6, 0x000000, 0.3);

    const nameText = scene.add.text(0, -38, playerData.name, {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '7px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
      align: 'center'
    }).setOrigin(0.5);

    const onlineDot = scene.add.circle(0, -48, 3, 0x39ff14);
    onlineDot.setAlpha(0.8);

    container.add([shadow, body, head, nameText, onlineDot]);

    container.setScale(0);
    scene.tweens.add({
      targets: container,
      scale: 1,
      duration: 300,
      ease: 'Back.easeOut'
    });

    this.players.set(playerData.id, {
      container: container,
      body: body,
      head: head,
      shadow: shadow,
      nameText: nameText,
      onlineDot: onlineDot,
      chatBubble: null,
      chatBubbleTimer: null,
      name: playerData.name,
      scene: playerData.scene,
      x: playerData.x,
      y: playerData.y,
      targetX: playerData.x,
      targetY: playerData.y
    });
  }

  updatePlayerPosition(id, x, y, scene) {
    const player = this.players.get(id);
    if (!player || !player.container) return;

    player.targetX = x;
    player.targetY = y;

    if (scene && scene.tweens) {
      scene.tweens.add({
        targets: player.container,
        x: x,
        y: y,
        duration: 150,
        ease: 'Linear'
      });
    } else {
      player.container.x = x;
      player.container.y = y;
    }

    player.x = x;
    player.y = y;
  }

  removePlayer(id, scene) {
    const player = this.players.get(id);
    if (!player) return;

    if (player.chatBubbleTimer) {
      clearTimeout(player.chatBubbleTimer);
      player.chatBubbleTimer = null;
    }

    if (player.container && scene && scene.tweens) {
      scene.tweens.add({
        targets: player.container,
        scale: 0,
        alpha: 0,
        duration: 300,
        onComplete: () => {
          if (player.container) player.container.destroy();
        }
      });
    } else if (player.container) {
      player.container.destroy();
    }

    this.players.delete(id);
  }

  showChatBubble(senderId, name, text, scene) {
    let targetContainer = null;
    let isLocal = false;
    let player = null;

    if (senderId === this.id) {
      const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (currentScene && currentScene.player) {
        targetContainer = currentScene.player;
        isLocal = true;
      }
    } else {
      player = this.players.get(senderId);
      if (player && player.container) {
        targetContainer = player.container;
      }
    }

    if (!targetContainer || !scene || !scene.add) return;

    const bubbleWidth = Math.min(Math.max(text.length * 6 + 20, 60), 200);
    const bubbleHeight = 28;

    const bubbleContainer = scene.add.container(0, -55);

    const bg = scene.add.rectangle(0, 0, bubbleWidth, bubbleHeight, 0x000000, 0.85);
    bg.setStrokeStyle(1, 0x00f5ff);

    const chatText = scene.add.text(0, 0, text, {
      fontFamily: '"VT323", monospace',
      fontSize: '10px',
      color: '#ffffff',
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
        delay: 16,
        callback: () => {
          if (bubbleContainer && targetContainer) {
            bubbleContainer.x = targetContainer.x;
            bubbleContainer.y = targetContainer.y - 55;
          }
        },
        loop: true
      });

      scene.time.delayedCall(7000, () => {
        followEvent.remove();
        if (bubbleContainer) {
          scene.tweens.add({
            targets: bubbleContainer,
            alpha: 0,
            y: bubbleContainer.y - 20,
            duration: 300,
            onComplete: () => bubbleContainer.destroy()
          });
        }
      });
    } else {
      targetContainer.add(bubbleContainer);

      if (player.chatBubble) {
        player.chatBubble.destroy();
      }
      if (player.chatBubbleTimer) {
        clearTimeout(player.chatBubbleTimer);
      }
      player.chatBubble = bubbleContainer;

      player.chatBubbleTimer = setTimeout(() => {
        if (bubbleContainer && bubbleContainer.active) {
          if (scene && scene.tweens) {
            scene.tweens.add({
              targets: bubbleContainer,
              alpha: 0,
              y: bubbleContainer.y - 20,
              duration: 300,
              onComplete: () => {
                if (bubbleContainer && bubbleContainer.active) {
                  bubbleContainer.destroy();
                }
                if (player && player.chatBubble === bubbleContainer) {
                  player.chatBubble = null;
                }
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
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '8px',
      color: '#39ff14',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(200);

    scene.tweens.add({
      targets: sysText,
      alpha: 0,
      y: 40,
      duration: 2500,
      onComplete: () => sysText.destroy()
    });
  }

  sendMove(x, y) {
    if (!this.connected || !this.ws) return;

    this.ws.send(JSON.stringify({
      type: 'move',
      x: x,
      y: y
    }));
  }

  sendChat(text) {
    if (!this.connected || !this.ws) {
      this.showOfflineNotification();
      return;
    }

    if (!text.trim()) return;

    this.ws.send(JSON.stringify({
      type: 'chat',
      text: text.trim().substring(0, 100)
    }));
  }

  changeScene(newRoom, newScene, x, y) {
    if (!this.connected || !this.ws) return;

    // Limpiar jugadores de escena anterior
    const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
    if (currentScene) {
      this.cleanupPlayers(currentScene);
    }

    this.currentScene = newScene;
    this.currentRoom = 'world';

    this.ws.send(JSON.stringify({
      type: 'sceneChange',
      room: 'world',
      scene: newScene,
      x: x,
      y: y
    }));
  }

  cleanupPlayers(scene) {
    this.players.forEach((player, id) => {
      if (player.chatBubbleTimer) {
        clearTimeout(player.chatBubbleTimer);
        player.chatBubbleTimer = null;
      }
      if (player.container) {
        player.container.destroy();
      }
    });
    this.players.clear();
  }

  updatePlayerCount() {
    if (this.onPlayerCountChange) {
      this.onPlayerCountChange(this.players.size + 1);
    }
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
    this._intentionalDisconnect = true;  // Evita auto-reconexión
    if (this.ws) {
      this.ws.onclose = null;  // Quitar handler antes de cerrar
      this.ws.close();
      this.ws = null;
    }
    clearInterval(this.pingInterval);
    this.connected = false;
    this.reconnectAttempts = 0;
    this.players.clear();
  }
}

// Instancia global
window.multiplayer = new MultiplayerManager();