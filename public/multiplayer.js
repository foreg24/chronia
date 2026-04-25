/* =============================================================
   MULTIJUGADOR — WebSocket Client para Time Traveler RPG
   Chat, nombres de jugadores, sincronización de posiciones
   ============================================================= */

class MultiplayerManager {
  constructor() {
    this.ws = null;
    this.id = null;
    this.connected = false;
    this.players = new Map(); // id -> { sprite, nameText, chatBubble, name, x, y }
    this.currentRoom = 'exterior';
    this.playerName = localStorage.getItem('playerName') || '';
    this.reconnectAttempts = 0;
    this.maxReconnect = 5;
    this.pingInterval = null;
    this.chatHistory = [];
    this.onChatMessage = null; // callback
    this.onPlayerCountChange = null; // callback
  }

  connect(scene) {
    // Determinar URL del WebSocket
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    const wsUrl = `${protocol}//${host}`;

    // En producción usa el mismo host; en local usa puerto 3000 (servidor unificado)
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const devUrl  = `ws://localhost:${window.location.port || 3000}`;
    const prodUrl = `${protocol}//${host}`;
    const wsUrl   = isLocal ? devUrl : prodUrl;

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('🟢 Conectado al servidor multijugador');
        this.connected = true;
        this.reconnectAttempts = 0;

        // Pedir nombre si no lo tiene
        if (!this.playerName) {
          this.askForName();
        } else {
          this.joinRoom(scene);
        }

        // Ping cada 15 segundos
        this.pingInterval = setInterval(() => {
          if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type: 'ping' }));
          }
        }, 15000);
      };

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          this.handleMessage(msg, scene);
        } catch (e) {
          console.error('Error parseando mensaje:', e);
        }
      };

      this.ws.onclose = () => {
        console.log('🔴 Desconectado del servidor');
        this.connected = false;
        this.cleanupPlayers(scene);
        clearInterval(this.pingInterval);

        // Reconexión automática
        if (this.reconnectAttempts < this.maxReconnect) {
          this.reconnectAttempts++;
          setTimeout(() => {
            console.log(`🔄 Reconectando... intento ${this.reconnectAttempts}`);
            this.connect(scene);
          }, 2000 * this.reconnectAttempts);
        }
      };

      this.ws.onerror = (err) => {
        console.error('WebSocket error:', err);
      };

    } catch (e) {
      console.error('Error conectando WebSocket:', e);
      // Modo offline
      this.showOfflineMode();
    }
  }

  askForName() {
    // Crear modal para pedir nombre
    const overlay = document.createElement('div');
    overlay.id = 'name-modal-overlay';
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.85);
      display: flex; align-items: center; justify-content: center;
      z-index: 99999; backdrop-filter: blur(8px);
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
      background: #0a0a12; border: 2px solid var(--accent, #00f5ff);
      border-radius: 12px; padding: 2rem; text-align: center;
      max-width: 380px; width: 90%; box-shadow: 0 0 40px rgba(0,245,255,0.3);
    `;

    modal.innerHTML = `
      <div style="font-family: 'Press Start 2P', monospace; font-size: 0.55rem; color: var(--accent, #00f5ff); margin-bottom: 1.5rem; line-height: 1.8;">
        🎮 ENTRAR AL MUNDO
      </div>
      <div style="font-family: 'VT323', monospace; font-size: 1.1rem; color: #8892a4; margin-bottom: 1.5rem;">
        Elige tu nombre de viajero temporal
      </div>
      <input type="text" id="player-name-input" maxlength="15" placeholder="Tu nombre..."
        style="width: 100%; padding: 0.7rem 1rem; background: rgba(255,255,255,0.05);
               border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
               color: #e0e8f0; font-family: 'VT323', monospace; font-size: 1.1rem;
               outline: none; margin-bottom: 1rem; text-align: center;
               caret-color: var(--accent, #00f5ff);"
        value="${this.playerName}">
      <button id="name-submit-btn"
        style="width: 100%; padding: 0.7rem; background: var(--accent, #00f5ff);
               color: #000; border: none; border-radius: 6px;
               font-family: 'Press Start 2P', monospace; font-size: 0.4rem;
               cursor: pointer; box-shadow: 0 0 15px rgba(0,245,255,0.4);
               transition: all 0.2s;">
        ENTRAR ➤
      </button>
      <div style="font-family: 'VT323', monospace; font-size: 0.85rem; color: #4a5568; margin-top: 0.8rem;">
        Máximo 15 caracteres
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const input = document.getElementById('player-name-input');
    const btn = document.getElementById('name-submit-btn');
    input.focus();

    const submit = () => {
      const name = input.value.trim() || 'Viajero';
      this.playerName = name.substring(0, 15);
      localStorage.setItem('playerName', this.playerName);
      overlay.remove();

      // Ahora sí unirse a la sala
      const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (currentScene) {
        this.joinRoom(currentScene);
      }
    };

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
    });
  }

  joinRoom(scene) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

    const roomMap = {
      'ExteriorScene': 'exterior',
      'CasaScene': 'casa',
      'FuturisticScene': 'futuristic',
      'EpochSelectorScene': 'selector',
      'EpochScene': 'epoch'
    };

    this.currentRoom = roomMap[scene.scene.key] || 'exterior';

    const x = scene.player ? scene.player.x : 400;
    const y = scene.player ? scene.player.y : 400;

    this.ws.send(JSON.stringify({
      type: 'join',
      name: this.playerName,
      room: this.currentRoom,
      scene: scene.scene.key,
      x: x,
      y: y
    }));
  }

  handleMessage(msg, scene) {
    switch (msg.type) {
      case 'init': {
        this.id = msg.id;
        // Crear sprites para jugadores existentes
        msg.players.forEach(p => {
          this.createPlayerSprite(p, scene);
        });
        // Cargar mensajes previos
        if (msg.messages) {
          msg.messages.forEach(m => {
            this.showChatBubble(m.senderId, m.name, m.text, scene);
          });
        }
        this.updatePlayerCount();
        break;
      }

      case 'playerJoined': {
        if (msg.id !== this.id) {
          this.createPlayerSprite(msg, scene);
          this.showSystemMessage(`${msg.name} se ha unido`, scene);
          this.updatePlayerCount();
        }
        break;
      }

      case 'playerMoved': {
        this.updatePlayerPosition(msg.id, msg.x, msg.y, scene);
        break;
      }

      case 'playerLeft': {
        this.removePlayer(msg.id, scene);
        this.showSystemMessage(`${msg.name} se ha ido`, scene);
        this.updatePlayerCount();
        break;
      }

      case 'chatMessage': {
        this.showChatBubble(msg.senderId, msg.name, msg.text, scene);
        if (this.onChatMessage) {
          this.onChatMessage(msg);
        }
        break;
      }

      case 'pong': {
        // Ping recibido, todo bien
        break;
      }
    }
  }

  createPlayerSprite(playerData, scene) {
    if (this.players.has(playerData.id)) return;
    if (!scene || !scene.add) return;

    const container = scene.add.container(playerData.x, playerData.y);
    container.setDepth(15);

    // Sprite del jugador (diferente color para otros)
    const body = scene.add.rectangle(0, 0, 16, 24, 0xff6b35); // Naranja para otros jugadores
    const head = scene.add.circle(0, -14, 6, 0xffdbac);
    const shadow = scene.add.ellipse(0, 12, 14, 6, 0x000000, 0.3);

    // Nombre flotante
    const nameText = scene.add.text(0, -38, playerData.name, {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: '7px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
      align: 'center'
    }).setOrigin(0.5);

    // Indicador online (punto verde)
    const onlineDot = scene.add.circle(0, -48, 3, 0x39ff14);
    onlineDot.setAlpha(0.8);

    container.add([shadow, body, head, nameText, onlineDot]);

    // Animación de entrada
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
      name: playerData.name,
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

    // Interpolación suave
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
    // Buscar el jugador
    let targetContainer = null;
    let isLocal = false;

    if (senderId === this.id) {
      // Es mensaje propio, buscar el jugador local
      const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
      if (currentScene && currentScene.player) {
        targetContainer = currentScene.player;
        isLocal = true;
      }
    } else {
      const player = this.players.get(senderId);
      if (player && player.container) {
        targetContainer = player.container;
      }
    }

    if (!targetContainer || !scene || !scene.add) return;

    // Crear burbuja de chat
    const bubbleWidth = Math.min(Math.max(text.length * 6 + 20, 60), 200);
    const bubbleHeight = 28;
    const bubbleY = isLocal ? -55 : -55;

    const bubbleContainer = scene.add.container(0, bubbleY);

    const bg = scene.add.rectangle(0, 0, bubbleWidth, bubbleHeight, 0x000000, 0.85);
    bg.setStrokeStyle(1, 0x00f5ff);

    const chatText = scene.add.text(0, 0, text, {
      fontFamily: '"VT323", monospace',
      fontSize: '10px',
      color: '#ffffff',
      wordWrap: { width: bubbleWidth - 16 }
    }).setOrigin(0.5);

    // Pequeño triángulo apuntando al jugador
    const triangle = scene.add.triangle(0, bubbleHeight/2, -6, 0, 6, 0, 0, 6, 0x000000);
    triangle.setStrokeStyle(1, 0x00f5ff);

    bubbleContainer.add([bg, chatText, triangle]);
    bubbleContainer.setDepth(100);

    if (isLocal) {
      // Para jugador local, posicionar sobre el jugador
      bubbleContainer.x = targetContainer.x;
      bubbleContainer.y = targetContainer.y - 55;
      scene.add.existing(bubbleContainer);

      // Seguir al jugador
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

      // Destruir después de 4 segundos
      scene.time.delayedCall(4000, () => {
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
      // Para otros jugadores, añadir a su container
      targetContainer.add(bubbleContainer);

      // Destruir burbuja anterior si existe
      if (player.chatBubble) {
        player.chatBubble.destroy();
      }
      player.chatBubble = bubbleContainer;

      // Destruir después de 4 segundos
      scene.time.delayedCall(4000, () => {
        if (bubbleContainer && bubbleContainer.active) {
          scene.tweens.add({
            targets: bubbleContainer,
            alpha: 0,
            y: bubbleContainer.y - 20,
            duration: 300,
            onComplete: () => {
              if (bubbleContainer && bubbleContainer.active) {
                bubbleContainer.destroy();
              }
              if (player.chatBubble === bubbleContainer) {
                player.chatBubble = null;
              }
            }
          });
        }
      });
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
      text: text.trim().substring(0, 100) // máximo 100 chars
    }));
  }

  changeScene(newRoom, newScene, x, y) {
    if (!this.connected || !this.ws) return;

    // Limpiar jugadores de escena anterior
    const currentScene = window.gameInstance?.scene?.scenes?.find(s => s.scene.isActive());
    if (currentScene) {
      this.cleanupPlayers(currentScene);
    }

    this.ws.send(JSON.stringify({
      type: 'sceneChange',
      room: newRoom,
      scene: newScene,
      x: x,
      y: y
    }));

    this.currentRoom = newRoom;
  }

  cleanupPlayers(scene) {
    this.players.forEach((player, id) => {
      if (player.container) {
        player.container.destroy();
      }
    });
    this.players.clear();
  }

  updatePlayerCount() {
    if (this.onPlayerCountChange) {
      this.onPlayerCountChange(this.players.size + 1); // +1 por el jugador local
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
    if (this.ws) {
      this.ws.close();
    }
    clearInterval(this.pingInterval);
    this.connected = false;
  }
}

// Instancia global
window.multiplayer = new MultiplayerManager();