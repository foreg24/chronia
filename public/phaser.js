/* =============================================================
   TIME TRAVELER RPG — Phaser 3 Game
   Casa de campo → Casa rústica → Habitación futurista 
   → Selector de épocas → Épocas históricas
   ============================================================= */

// Configuración global del juego
const GAME_CONFIG = {
    width: 800,
    height: 450,
    pixelArt: true,
    backgroundColor: '#1a1a2e',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

// Datos de las épocas (del proyecto original)
const EPOCHS_DATA = [
    { id: 'mesopotamia', name: 'Mesopotamia', period: '~3500-500 a.C.', color: '#d4a574', icon: '🏺', desc: 'Ábacos de arcilla y tablillas cuneiformes' },
    { id: 'egipto', name: 'Egipto', period: '~3000-30 a.C.', color: '#e8c85a', icon: '🔺', desc: 'Geometría y el Papiro de Ahmes' },
    { id: 'grecia', name: 'Grecia', period: '~800-31 a.C.', color: '#f0e6d2', icon: '🏛️', desc: 'El Mecanismo de Anticitera' },
    { id: 'edadmedia', name: 'Edad Media', period: '476-1400 d.C.', color: '#9c7c4a', icon: '🏰', desc: 'Álgebra árabe y relojes mecánicos' },
    { id: 'era1300', name: '1300-1700', period: '1300-1700', color: '#c08840', icon: '⚙️', desc: 'Pascalina y cálculo diferencial' },
    { id: 'era1700', name: '1700-1900', period: '1700-1900', color: '#8fa8c0', icon: '🏭', desc: 'Máquina analítica de Babbage' },
    { id: 'sigloxx', name: 'Siglo XX', period: '1900-2000', color: '#00d4aa', icon: '💻', desc: 'Turing, von Neumann y computadoras' },
    { id: 'sigloxxi', name: 'Siglo XXI', period: '2000-hoy', color: '#00f5ff', icon: '🌐', desc: 'IA, nube y computación cuántica' }
];

// Clase base para escenas con tilemaps simples
class BaseScene extends Phaser.Scene {
    constructor(key) {
        super({ key });
    }

    createPlayer(x, y) {
        // Crear jugador como un rectángulo con animación simple
        const player = this.add.rectangle(x, y, 16, 24, 0x00f5ff);
        this.physics.add.existing(player);
        player.body.setCollideWorldBounds(true);
        player.body.setSize(12, 20);
        
        // Añadir "cabeza" al personaje
        const head = this.add.circle(x, y - 14, 6, 0xffdbac);
        this.playerHead = head;
        
        // Sombra
        const shadow = this.add.ellipse(x, y + 12, 14, 6, 0x000000, 0.3);
        this.playerShadow = shadow;
        
        player.setDepth(10);
        head.setDepth(11);
        shadow.setDepth(9);
        
        return player;
    }
    
    updatePlayerVisuals(player) {
        if (this.playerHead && this.playerShadow) {
            this.playerHead.x = player.x;
            this.playerHead.y = player.y - 14;
            this.playerShadow.x = player.x;
            this.playerShadow.y = player.y + 12;
        }
    }
    
    createDialogBox() {
        const width = 600;
        const height = 80;
        const x = this.cameras.main.centerX;
        const y = this.cameras.main.height - 60;
        
        const bg = this.add.rectangle(x, y, width, height, 0x000000, 0.85);
        bg.setStrokeStyle(2, 0x00f5ff);
        bg.setDepth(100);
        bg.setVisible(false);
        
        const text = this.add.text(x - width/2 + 15, y - height/2 + 12, '', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            color: '#ffffff',
            wordWrap: { width: width - 30 }
        });
        text.setDepth(101);
        text.setVisible(false);
        
        const hint = this.add.text(x + width/2 - 10, y + height/2 - 18, '▼ ESPACIO para continuar', {
            fontFamily: '"VT323", monospace',
            fontSize: '12px',
            color: '#00f5ff'
        }).setOrigin(1, 0.5);
        hint.setDepth(101);
        hint.setVisible(false);
        
        return { bg, text, hint, visible: false };
    }
    
    showDialog(dialog, message, hintText = '▼ ESPACIO para continuar') {
        dialog.text.setText(message);
        dialog.hint.setText(hintText);
        dialog.bg.setVisible(true);
        dialog.text.setVisible(true);
        dialog.hint.setVisible(true);
        dialog.visible = true;
    }
    
    hideDialog(dialog) {
        dialog.bg.setVisible(false);
        dialog.text.setVisible(false);
        dialog.hint.setVisible(false);
        dialog.visible = false;
    }
    
    createParticles(x, y, color) {
        const particles = this.add.particles(x, y, 'particle', {
            speed: { min: 20, max: 60 },
            scale: { start: 0.5, end: 0 },
            lifespan: 600,
            quantity: 1,
            frequency: 100,
            tint: color
        });
        return particles;
    }

    // === MULTIPLAYER INTEGRATION ===
    setupMultiplayer() {
        if (window.multiplayer && !window.multiplayer.connected) {
            window.multiplayer.connect(this);
        } else if (window.multiplayer && window.multiplayer.connected) {
            window.multiplayer.joinRoom(this);
        }
        this.chatInput = null;
        this.isChatOpen = false;

        // Tecla T para abrir chat
        this.chatKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.chatKey.on('down', () => { 
            if (!this.isChatOpen) {
                this.openChatInput();
            }
        });

        // ESC para cerrar chat
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.escKey.on('down', () => { 
            if (this.isChatOpen) {
                this.closeChatInput();
            }
        });
    }

    openChatInput() {
        if (this.isChatOpen) return;
        this.isChatOpen = true;

        // Detener movimiento del jugador
        if (this.player && this.player.body) {
            this.player.body.setVelocity(0, 0);
        }

        // SOLTAR todas las teclas de movimiento en Phaser
        // para que no interfieran con la escritura
        this.releaseGameKeys();

        // Mostrar overlay de chat
        const overlay = document.getElementById('game-chat-overlay');
        if (overlay) { 
            overlay.style.display = 'flex'; 
            const input = document.getElementById('game-chat-input');
            if (input) {
                input.value = '';
                input.focus();
            }
        }
    }

    closeChatInput() {
        this.isChatOpen = false;

        const overlay = document.getElementById('game-chat-overlay');
        if (overlay) overlay.style.display = 'none';

        // Devolver foco al canvas de Phaser
        const canvas = document.querySelector('#game-container canvas');
        if (canvas) canvas.focus();
    }

    releaseGameKeys() {
        // Soltar teclas de movimiento para que no interfieran con el chat
        if (!this.input || !this.input.keyboard) return;

        const keysToRelease = [
            Phaser.Input.Keyboard.KeyCodes.W,
            Phaser.Input.Keyboard.KeyCodes.A,
            Phaser.Input.Keyboard.KeyCodes.S,
            Phaser.Input.Keyboard.KeyCodes.D,
            Phaser.Input.Keyboard.KeyCodes.UP,
            Phaser.Input.Keyboard.KeyCodes.DOWN,
            Phaser.Input.Keyboard.KeyCodes.LEFT,
            Phaser.Input.Keyboard.KeyCodes.RIGHT,
            Phaser.Input.Keyboard.KeyCodes.SPACE,
        ];

        keysToRelease.forEach(keyCode => {
            const key = this.input.keyboard.getKey(keyCode);
            if (key && key.isDown) {
                key.isDown = false;
                key.isUp = true;
            }
        });

        // Soltar cursores
        if (this.cursors) {
            ['up', 'down', 'left', 'right', 'space'].forEach(dir => {
                if (this.cursors[dir]) {
                    this.cursors[dir].isDown = false;
                    this.cursors[dir].isUp = true;
                }
            });
        }

        // Soltar WASD
        if (this.wasd) {
            ['up', 'down', 'left', 'right', 'space'].forEach(dir => {
                if (this.wasd[dir]) {
                    this.wasd[dir].isDown = false;
                    this.wasd[dir].isUp = true;
                }
            });
        }
    }

    sendChatMessage(text) {
        if (window.multiplayer) window.multiplayer.sendChat(text);
        this.closeChatInput();
    }

    notifySceneChange(newSceneKey) {
        const roomMap = { 'ExteriorScene': 'exterior', 'CasaScene': 'casa', 'FuturisticScene': 'futuristic', 'EpochSelectorScene': 'selector', 'EpochScene': 'epoch' };
        if (window.multiplayer && window.multiplayer.connected) {
            window.multiplayer.changeScene(roomMap[newSceneKey] || 'exterior', newSceneKey, this.player ? this.player.x : 400, this.player ? this.player.y : 400);
        }
    }
}

// =============================================================
// ESCENA 1: EXTERIOR - Casa de campo
// =============================================================
class ExteriorScene extends BaseScene {
    constructor() {
        super('ExteriorScene');
    }
    
    preload() {
        // Crear texturas programáticamente
        this.load.setBaseURL('');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#2d5016');
        
        // Crear texturas simples
        this.createTextures();
        
        // Fondo - Cielo
        const sky = this.add.rectangle(400, 150, 800, 300, 0x87CEEB);
        
        // Sol
        const sun = this.add.circle(650, 80, 35, 0xFFD700);
        sun.setStrokeStyle(3, 0xFFA500);
        
        // Nubes
        this.createCloud(150, 60);
        this.createCloud(400, 90);
        this.createCloud(600, 50);
        
        // Montañas lejanas
        this.createMountain(100, 300, 0x5a7d3a);
        this.createMountain(300, 300, 0x4a6d2a);
        this.createMountain(550, 300, 0x5a7d3a);
        this.createMountain(720, 300, 0x4a6d2a);
        
        // Suelo de pasto
        const ground = this.add.rectangle(400, 380, 800, 140, 0x3d7a1e);
        const groundTop = this.add.rectangle(400, 310, 800, 4, 0x4a8f2a);
        
        // Detalles del suelo
        for (let i = 0; i < 30; i++) {
            const x = Phaser.Math.Between(20, 780);
            const y = Phaser.Math.Between(320, 440);
            this.add.ellipse(x, y, 6, 4, 0x2d6a1e);
        }
        
        // Flores
        this.createFlower(120, 350);
        this.createFlower(250, 380);
        this.createFlower(500, 360);
        this.createFlower(680, 390);
        this.createFlower(750, 340);
        
        // Árboles
        this.createTree(80, 280);
        this.createTree(200, 270);
        this.createTree(700, 285);
        this.createTree(780, 275);
        
        // Casa de campo
        this.createHouse(400, 260);
        
        // Cerca
        this.createFence(50, 310, 8);
        this.createFence(650, 310, 6);
        
        // Camino a la puerta
        this.createPath(400, 310, 400, 450);
        
        // Jugador
        this.player = this.createPlayer(400, 400);
        this.player.setDepth(10);
        
        // Zona de entrada a la casa
        this.doorZone = this.add.rectangle(400, 270, 40, 10, 0x00f5ff, 0);
        this.physics.add.existing(this.doorZone, true);
        
        // Partículas de la puerta
        this.doorParticles = this.add.particles(400, 270, 'particle', {
            speed: { min: 10, max: 30 },
            scale: { start: 0.3, end: 0 },
            lifespan: 400,
            quantity: 1,
            frequency: 200,
            tint: 0x00f5ff
        });
        
        this.physics.world.setBounds(0, 0, 800, 300);

        // Diálogo
        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog, 'Bienvenido a tu casa de campo.\nUsa WASD o flechas para moverte.\nAcércate a la puerta y presiona ESPACIO para entrar.');
        this.dialogShown = true;
        
        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
        
        // Colisiones con límites del mundo
        this.physics.world.setBounds(0, 285, 800, 130);
        
        // Indicador de puerta
        this.doorIndicator = this.add.text(400, 240, '▼ ENTRAR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);
        
        // Animación de entrada
        this.cameras.main.fadeIn(500);
        
        // Setup multiplayer
        this.setupMultiplayer();
    }
    
    createTextures() {
        // Textura de partícula
        const particleGraphics = this.make.graphics({ x: 0, y: 0, add: false });
        particleGraphics.fillStyle(0xffffff);
        particleGraphics.fillCircle(4, 4, 4);
        particleGraphics.generateTexture('particle', 8, 8);
    }
    
    createCloud(x, y) {
        const cloud = this.add.group();
        cloud.add(this.add.ellipse(x, y, 50, 25, 0xffffff, 0.8));
        cloud.add(this.add.ellipse(x - 15, y + 5, 35, 20, 0xffffff, 0.7));
        cloud.add(this.add.ellipse(x + 15, y + 5, 35, 20, 0xffffff, 0.7));
    }
    
    createMountain(x, y, color) {
        const g = this.add.graphics().setDepth(2);
        g.fillStyle(color);
        g.fillTriangle(x - 130, y, x + 130, y, x, y - 130);
    }
    
    createTree(x, y) {
        this.add.rectangle(x, y + 20, 12, 40, 0x8B4513).setDepth(3);
        this.add.circle(x, y - 10, 35, 0x228B22).setDepth(3);
        this.add.circle(x - 15, y - 5, 25, 0x2E8B57).setDepth(3);
        this.add.circle(x + 15, y - 5, 25, 0x2E8B57).setDepth(3);
    }
    
    createFlower(x, y) {
        const stem = this.add.rectangle(x, y + 5, 2, 12, 0x228B22);
        const petals = this.add.circle(x, y - 5, 5, Phaser.Math.RND.pick([0xFF69B4, 0xFFD700, 0xFF6347, 0x9370DB]));
        const center = this.add.circle(x, y - 5, 2, 0xFFD700);
    }
    
    createHouse(x, y) {
        // Base de la casa
        const base = this.add.rectangle(x, y, 140, 100, 0xD2B48C);
        base.setStrokeStyle(2, 0x8B7355);
        base.setDepth(5);
        
        // Techo — pegado justo encima de la base
        const g = this.add.graphics().setDepth(5);
        g.fillStyle(0x8B4513);
        g.fillTriangle(x - 85, y - 50, x + 85, y - 50, x, y - 110);
        g.lineStyle(2, 0x654321);
        g.strokeTriangle(x - 85, y - 50, x + 85, y - 50, x, y - 110);
        
        // Chimenea (encima del techo)
        this.add.rectangle(x + 40, y - 95, 18, 30, 0x8B4513).setDepth(6);
        this.createSmoke(x + 40, y - 112);
        
        // Puerta
        this.add.rectangle(x, y + 20, 30, 50, 0x654321).setStrokeStyle(2, 0x4a3728).setDepth(6);
        this.add.circle(x + 10, y + 20, 3, 0xFFD700).setDepth(6);
        
        // Ventanas
        const w1 = this.add.rectangle(x - 35, y - 10, 30, 30, 0x87CEEB).setDepth(6);
        w1.setStrokeStyle(2, 0x8B7355);
        this.add.rectangle(x - 35, y - 10, 30, 2, 0x8B7355).setDepth(6);
        this.add.rectangle(x - 35, y - 10, 2, 30, 0x8B7355).setDepth(6);
        
        const w2 = this.add.rectangle(x + 35, y - 10, 30, 30, 0x87CEEB).setDepth(6);
        w2.setStrokeStyle(2, 0x8B7355);
        this.add.rectangle(x + 35, y - 10, 30, 2, 0x8B7355).setDepth(6);
        this.add.rectangle(x + 35, y - 10, 2, 30, 0x8B7355).setDepth(6);
        
        // Macetas
        this.createPot(x - 50, y + 45);
        this.createPot(x + 50, y + 45);
    }
    
    createSmoke(x, y) {
        this.tweens.add({
            targets: this.add.circle(x, y, 5, 0xaaaaaa, 0.6),
            y: y - 30,
            alpha: 0,
            scale: 2,
            duration: 2000,
            repeat: -1,
            delay: 500
        });
    }
    
    createPot(x, y) {
        this.add.rectangle(x, y, 16, 12, 0x8B4513);
        this.add.circle(x, y - 8, 6, 0xFF6347);
        this.add.circle(x - 4, y - 6, 5, 0xFF69B4);
    }
    
    createFence(startX, y, count) {
        for (let i = 0; i < count; i++) {
            const x = startX + i * 25;
            this.add.rectangle(x, y, 4, 30, 0x8B4513);
            this.add.rectangle(x, y - 12, 20, 3, 0x8B4513);
            this.add.rectangle(x, y + 5, 20, 3, 0x8B4513);
        }
    }
    
    createPath(startX, startY, endX, endY) {
        const path = this.add.rectangle((startX + endX) / 2, (startY + endY) / 2, 40, endY - startY, 0xC4A35A);
        path.setDepth(1);
        
        // Piedras en el camino
        for (let i = 0; i < 8; i++) {
            const y = startY + (i / 8) * (endY - startY);
            this.add.ellipse(startX + Phaser.Math.Between(-10, 10), y, 8, 5, 0xB8956A);
        }
    }
    
    update() {
        if (!this.player) return;
        
        const speed = 160;
        let moving = false;
        
        // Movimiento horizontal
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.body.setVelocityX(-speed);
            moving = true;
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.body.setVelocityX(speed);
            moving = true;
        } else {
            this.player.body.setVelocityX(0);
        }
        
        // Movimiento vertical
        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.body.setVelocityY(-speed);
            moving = true;
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.body.setVelocityY(speed);
            moving = true;
        } else {
            this.player.body.setVelocityY(0);
        }
        
        // Animación de caminar
        if (moving) {
            this.player.y += Math.sin(this.time.now / 100) * 0.5;
        }
        
        this.updatePlayerVisuals(this.player);
        
        // Enviar posición al servidor
        if (moving && window.multiplayer && window.multiplayer.connected && this.player) {
            window.multiplayer.sendMove(this.player.x, this.player.y);
        }
        
        // Verificar proximidad a la puerta
        const distToDoor = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 270);
        this.doorIndicator.setVisible(distToDoor < 50);
        
        // Entrar a la casa
        if (distToDoor < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.enterHouse();
        }
        
        // Cerrar diálogo inicial
        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }
    
    enterHouse() {
        this.notifySceneChange('CasaScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => {
            this.scene.start('CasaScene');
        });
    }
}

// =============================================================
// ESCENA 2: CASA RÚSTICA - Interior
// =============================================================
class CasaScene extends BaseScene {
    constructor() {
        super('CasaScene');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#3d2817');
        
        // Suelo de madera
        for (let y = 200; y < 450; y += 40) {
            for (let x = 0; x < 800; x += 100) {
                const plank = this.add.rectangle(x + 50, y + 20, 96, 36, 0x8B6914);
                plank.setStrokeStyle(1, 0x5a4a1a);
            }
        }
        
        // Paredes
        const backWall = this.add.rectangle(400, 100, 800, 200, 0x5a3a1a);
        backWall.setStrokeStyle(3, 0x3d2817);
        
        // Vigas del techo
        for (let x = 0; x < 800; x += 100) {
            this.add.rectangle(x, 50, 15, 100, 0x4a2a0a);
        }
        
        // Chimenea
        this.createFireplace(200, 150);
        
        // Mesa rústica
        this.createTable(400, 200);
        
        // Sillas
        this.createChair(350, 200);
        this.createChair(450, 200);
        
        // Estantería
        this.createBookshelf(650, 130);
        
        // Cuadro en la pared
        this.createPainting(550, 100);
        
        // Alfombra
        this.createRug(400, 320);
        
        // Puerta a la habitación futurista (oculta detrás de estantería)
        this.hiddenDoor = this.add.rectangle(100, 150, 40, 70, 0x3d2817);
        this.hiddenDoor.setStrokeStyle(2, 0x5a3a1a);
        
        // Indicador de puerta secreta
        this.secretIndicator = this.add.text(100, 120, '?', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '12px',
            color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        // Jugador
        this.player = this.createPlayer(400, 350);
        
        // Zona de la puerta secreta
        this.secretZone = this.add.rectangle(100, 150, 50, 80, 0x00f5ff, 0);
        this.physics.add.existing(this.secretZone, true);
        
        // Partículas misteriosas cerca de la puerta
        this.secretParticles = this.add.particles(100, 150, 'particle', {
            speed: { min: 5, max: 15 },
            scale: { start: 0.2, end: 0 },
            lifespan: 800,
            quantity: 1,
            frequency: 300,
            tint: 0x00f5ff,
            alpha: { start: 0.5, end: 0 }
        });

        // Diálogo
        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog, 'Esta es tu casa. Hay algo extraño\nen esa puerta de la izquierda...\nAcércate y presiona ESPACIO.');
        this.dialogShown = true;

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
        
        this.physics.world.setBounds(50, 180, 700, 250);
        
        // Animación de entrada
        this.cameras.main.fadeIn(500);
        
        // Setup multiplayer
        this.setupMultiplayer();
        
        // Salida de la casa
        this.exitZone = this.add.rectangle(400, 420, 100, 20, 0xff0000, 0);
        this.physics.add.existing(this.exitZone, true);
        this.exitIndicator = this.add.text(400, 400, '▼ SALIR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#ff6b35'
        }).setOrigin(0.5).setVisible(false).setDepth(20);
    }
    
    createFireplace(x, y) {
        // Base
        this.add.rectangle(x, y + 30, 80, 60, 0x8B4513);
        // Interior
        this.add.rectangle(x, y + 20, 50, 40, 0x2a1a0a);
        // Fuego
        const fire = this.add.circle(x, y + 25, 15, 0xFF4500);
        // Animación del fuego
        this.tweens.add({
            targets: fire,
            scaleX: [1, 1.2, 0.9, 1.1, 1],
            scaleY: [1, 1.3, 0.8, 1.2, 1],
            duration: 500,
            repeat: -1,
            yoyo: true
        });
        // Chispas
        this.time.addEvent({
            delay: 200,
            callback: () => {
                const spark = this.add.circle(x + Phaser.Math.Between(-10, 10), y + 10, 2, 0xFFD700);
                this.tweens.add({
                    targets: spark,
                    y: y - 30,
                    alpha: 0,
                    duration: 1000,
                    onComplete: () => spark.destroy()
                });
            },
            loop: true
        });
        // Chimenea
        this.add.rectangle(x, y - 35, 30, 40, 0x8B4513);
    }
    
    createTable(x, y) {
        // Patas
        this.add.rectangle(x - 30, y + 20, 8, 40, 0x654321);
        this.add.rectangle(x + 30, y + 20, 8, 40, 0x654321);
        // Tablero
        this.add.rectangle(x, y, 80, 10, 0x8B6914);
        this.add.rectangle(x, y - 5, 80, 5, 0x9B7924);
    }
    
    createChair(x, y) {
        this.add.rectangle(x, y + 15, 20, 30, 0x654321);
        this.add.rectangle(x, y - 5, 20, 20, 0x8B6914);
    }
    
    createBookshelf(x, y) {
        // Estante
        this.add.rectangle(x, y, 80, 120, 0x5a3a1a);
        this.add.rectangle(x, y, 70, 110, 0x3d2817);
        // Libros
        const colors = [0x8B0000, 0x006400, 0x00008B, 0x8B008B, 0xDAA520];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 5; col++) {
                this.add.rectangle(x - 25 + col * 12, y - 30 + row * 35, 8, 25, colors[col % colors.length]);
            }
        }
    }
    
    createPainting(x, y) {
        const frame = this.add.rectangle(x, y, 50, 40, 0xDAA520);
        frame.setStrokeStyle(3, 0x8B6914);
        const canvas = this.add.rectangle(x, y, 40, 30, 0x87CEEB);
        // Paisaje simple
        this.add.circle(x, y + 5, 8, 0xFFD700);
        this.add.triangle(x, y + 15, -15, 0, 15, 0, 0, -10, 0x228B22);
    }
    
    createRug(x, y) {
        const rug = this.add.ellipse(x, y, 120, 60, 0x8B0000);
        rug.setStrokeStyle(3, 0xDAA520);
        // Patrón
        for (let i = 0; i < 5; i++) {
            this.add.ellipse(x - 40 + i * 20, y, 10, 30, 0xA52A2A);
        }
    }
    
    update() {
        if (!this.player) return;
        
        const speed = 160;
        
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.body.setVelocityX(speed);
        } else {
            this.player.body.setVelocityX(0);
        }
        
        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.body.setVelocityY(speed);
        } else {
            this.player.body.setVelocityY(0);
        }
        
        this.updatePlayerVisuals(this.player);
        
        // Enviar posición al servidor
        if (window.multiplayer && window.multiplayer.connected && this.player) {
            const vx = this.player.body.velocity.x;
            const vy = this.player.body.velocity.y;
            if (vx !== 0 || vy !== 0) {
                window.multiplayer.sendMove(this.player.x, this.player.y);
            }
        }
        
        // Verificar proximidad a puerta secreta
        const distToSecret = Phaser.Math.Distance.Between(this.player.x, this.player.y, 100, 150);
        this.secretIndicator.setVisible(distToSecret < 80);
        
        if (distToSecret < 60 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.enterFuturisticRoom();
        }
        
        // Verificar salida
        const distToExit = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 420);
        this.exitIndicator.setVisible(distToExit < 40);
        
        if (distToExit < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.exitHouse();
        }
        
        // Cerrar diálogo
        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }
    
    enterFuturisticRoom() {
        this.notifySceneChange('FuturisticScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => {
            this.scene.start('FuturisticScene');
        });
    }
    
    exitHouse() {
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => {
            this.scene.start('ExteriorScene');
        });
    }
}

// =============================================================
// ESCENA 3: HABITACIÓN FUTURISTA - Máquina del tiempo
// =============================================================
class FuturisticScene extends BaseScene {
    constructor() {
        super('FuturisticScene');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#050510');

        // Pared trasera futurista
        this.add.rectangle(400, 110, 800, 220, 0x0d0d20);
        this.add.rectangle(400, 220, 800, 3, 0x00f5ff);

        // Grid del suelo
        for (let x = 0; x <= 800; x += 50) {
            this.add.line(x, 335, 0, 0, 0, 220, 0x00f5ff, 0.08);
        }
        for (let y = 220; y <= 450; y += 40) {
            this.add.line(400, y, -400, 0, 400, 0, 0x00f5ff, 0.08);
        }

        // Suelo base
        this.add.rectangle(400, 340, 800, 230, 0x0a0a18);

        // Luces de neón en pared
        this.createNeonLight(160, 75);
        this.createNeonLight(640, 75);
        this.createNeonLight(400, 45);

        // Consolas + hologramas a los lados
        this.createConsole(160, 215);
        this.createConsole(640, 215);
        this.createHologram(160, 155, 'DATOS TEMPORALES');
        this.createHologram(640, 155, 'COORDENADAS');

        // Máquina del tiempo centrada, más abajo
        this.createTimeMachine(400, 230);

        // Partículas
        this.timeMachineParticles = this.add.particles(400, 210, 'particle', {
            speed: { min: 20, max: 60 },
            scale: { start: 0.5, end: 0 },
            lifespan: 1000,
            quantity: 2,
            frequency: 100,
            tint: 0x00f5ff,
            blendMode: 'ADD'
        });

        // Jugador
        this.player = this.createPlayer(400, 370);

        // Zona de interacción
        this.machineZone = this.add.rectangle(400, 230, 80, 80, 0x00f5ff, 0);
        this.physics.add.existing(this.machineZone, true);

        this.machineIndicator = this.add.text(400, 155, '▼ ACTIVAR MÁQUINA', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '7px',
            color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        // Diálogo
        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog, '¡Increíble! Una máquina del tiempo real.\nAcércate y presiona ESPACIO para activarla.');
        this.dialogShown = true;

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.physics.world.setBounds(30, 225, 740, 210);

        this.createScanlineEffect();

        // Salida
        this.exitZone = this.add.rectangle(400, 435, 80, 20, 0xff0000, 0);
        this.physics.add.existing(this.exitZone, true);
        this.exitIndicator = this.add.text(400, 415, '▼ VOLVER', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#ff6b35'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.cameras.main.fadeIn(500);
        
        // Setup multiplayer
        this.setupMultiplayer();
        
        // Efecto de scanline
        this.createScanlineEffect();
        
        // Salida
        this.exitZone = this.add.rectangle(400, 420, 80, 20, 0xff0000, 0);
        this.physics.add.existing(this.exitZone, true);
        this.exitIndicator = this.add.text(400, 400, '▼ VOLVER', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#ff6b35'
        }).setOrigin(0.5).setVisible(false).setDepth(20);
    }
    
    createNeonLight(x, y) {
        const light = this.add.rectangle(x, y, 60, 4, 0x00f5ff);
        light.setBlendMode('ADD');
        
        // Brillo pulsante
        this.tweens.add({
            targets: light,
            alpha: { from: 0.5, to: 1 },
            duration: 1000,
            repeat: -1,
            yoyo: true
        });
        
        // Glow
        const glow = this.add.rectangle(x, y, 80, 12, 0x00f5ff, 0.2);
        glow.setBlendMode('ADD');
        this.tweens.add({
            targets: glow,
            scaleX: [1, 1.2, 1],
            scaleY: [1, 1.5, 1],
            duration: 1500,
            repeat: -1,
            yoyo: true
        });
    }
    
    createConsole(x, y) {
        // Base
        this.add.rectangle(x, y + 20, 60, 40, 0x2a2a3a);
        this.add.rectangle(x, y + 20, 60, 40, 0x00f5ff, 0.1);
        // Pantalla
        const screen = this.add.rectangle(x, y - 5, 50, 30, 0x00f5ff, 0.3);
        screen.setStrokeStyle(1, 0x00f5ff);
        // Botones
        for (let i = 0; i < 4; i++) {
            const btn = this.add.circle(x - 15 + i * 10, y + 35, 3, 0x00f5ff);
            this.tweens.add({
                targets: btn,
                alpha: { from: 0.3, to: 1 },
                duration: 500 + i * 200,
                repeat: -1,
                yoyo: true
            });
        }
    }
    
    createHologram(x, y, text) {
        // Proyector
        this.add.rectangle(x, y + 20, 20, 10, 0x444444);
        // Holograma
        const holo = this.add.text(x, y, text, {
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '10px',
            color: '#00f5ff'
        }).setOrigin(0.5);
        holo.setBlendMode('ADD');
        
        // Animación de holograma
        this.tweens.add({
            targets: holo,
            alpha: { from: 0.4, to: 0.9 },
            y: y - 5,
            duration: 2000,
            repeat: -1,
            yoyo: true
        });
        
        // Líneas de escaneo
        const scanline = this.add.rectangle(x, y, 60, 1, 0x00f5ff, 0.5);
        this.tweens.add({
            targets: scanline,
            y: y - 20,
            duration: 1500,
            repeat: -1,
            yoyo: true
        });
    }
    
    createTimeMachine(x, y) {
        // Base de la máquina
        const base = this.add.ellipse(x, y + 40, 100, 30, 0x2a2a4a);
        base.setStrokeStyle(2, 0x00f5ff);
        
        // Columnas
        this.add.rectangle(x - 35, y, 10, 80, 0x3a3a5a);
        this.add.rectangle(x + 35, y, 10, 80, 0x3a3a5a);
        this.add.rectangle(x - 35, y, 10, 80, 0x00f5ff, 0.2);
        this.add.rectangle(x + 35, y, 10, 80, 0x00f5ff, 0.2);
        
        // Anillos giratorios
        this.outerRing = this.add.ellipse(x, y, 90, 90);
        this.outerRing.setStrokeStyle(3, 0x00f5ff);
        this.outerRing.setBlendMode('ADD');
        
        this.middleRing = this.add.ellipse(x, y, 70, 70);
        this.middleRing.setStrokeStyle(2, 0x39ff14);
        this.middleRing.setBlendMode('ADD');
        
        this.innerRing = this.add.ellipse(x, y, 50, 50);
        this.innerRing.setStrokeStyle(2, 0xbf5fff);
        this.innerRing.setBlendMode('ADD');
        
        // Animación de rotación
        this.tweens.add({
            targets: this.outerRing,
            angle: 360,
            duration: 8000,
            repeat: -1
        });
        
        this.tweens.add({
            targets: this.middleRing,
            angle: -360,
            duration: 6000,
            repeat: -1
        });
        
        this.tweens.add({
            targets: this.innerRing,
            angle: 360,
            duration: 4000,
            repeat: -1
        });
        
        // Núcleo brillante
        const core = this.add.circle(x, y, 15, 0x00f5ff);
        core.setBlendMode('ADD');
        this.tweens.add({
            targets: core,
            scale: [1, 1.3, 1],
            alpha: [0.7, 1, 0.7],
            duration: 1000,
            repeat: -1
        });
        
        // Símbolo de reloj en el centro
        this.add.text(x, y, '⏱', {
            fontSize: '20px'
        }).setOrigin(0.5).setDepth(15);
        
        // Panel de control
        this.add.rectangle(x, y + 55, 60, 20, 0x2a2a4a);
        this.add.rectangle(x, y + 55, 60, 20, 0x00f5ff, 0.1);
        // Luces del panel
        for (let i = 0; i < 5; i++) {
            const light = this.add.circle(x - 20 + i * 10, y + 55, 3, 0x00f5ff);
            this.tweens.add({
                targets: light,
                alpha: { from: 0.3, to: 1 },
                duration: 300,
                delay: i * 100,
                repeat: -1,
                yoyo: true
            });
        }
    }
    
    createScanlineEffect() {
        // Líneas de escaneo horizontales
        for (let i = 0; i < 5; i++) {
            const line = this.add.rectangle(400, i * 100, 800, 1, 0x00f5ff, 0.05);
            line.setBlendMode('ADD');
            this.tweens.add({
                targets: line,
                y: i * 100 + 50,
                duration: 3000 + i * 500,
                repeat: -1,
                yoyo: true
            });
        }
    }
    
    update() {
        if (!this.player) return;
        
        const speed = 160;
        
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.body.setVelocityX(speed);
        } else {
            this.player.body.setVelocityX(0);
        }
        
        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.body.setVelocityY(speed);
        } else {
            this.player.body.setVelocityY(0);
        }
        
        this.updatePlayerVisuals(this.player);
        
        // Enviar posición al servidor
        if (window.multiplayer && window.multiplayer.connected && this.player) {
            const vx = this.player.body.velocity.x;
            const vy = this.player.body.velocity.y;
            if (vx !== 0 || vy !== 0) {
                window.multiplayer.sendMove(this.player.x, this.player.y);
            }
        }
        
        // Verificar proximidad a la máquina
        const distToMachine = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 200);
        this.machineIndicator.setVisible(distToMachine < 60);
        
        if (distToMachine < 50 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.activateTimeMachine();
        }
        
        // Verificar salida
        const distToExit = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 420);
        this.exitIndicator.setVisible(distToExit < 40);
        
        if (distToExit < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.exitRoom();
        }
        
        // Cerrar diálogo
        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }
    
    activateTimeMachine() {
        this.notifySceneChange('EpochSelectorScene');
        // Efecto de activación
        this.cameras.main.shake(200, 0.01);
        
        // Flash de luz
        const flash = this.add.rectangle(400, 225, 800, 450, 0x00f5ff);
        flash.setBlendMode('ADD');
        flash.setAlpha(0);
        
        this.tweens.add({
            targets: flash,
            alpha: 0.8,
            duration: 200,
            yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(500);
                this.time.delayedCall(500, () => {
                    this.scene.start('EpochSelectorScene');
                });
            }
        });
        
        // Sonido visual (partículas explosivas)
        for (let i = 0; i < 20; i++) {
            const particle = this.add.circle(400, 200, 3, 0x00f5ff);
            const angle = (i / 20) * Math.PI * 2;
            this.tweens.add({
                targets: particle,
                x: 400 + Math.cos(angle) * 100,
                y: 200 + Math.sin(angle) * 100,
                alpha: 0,
                duration: 500,
                onComplete: () => particle.destroy()
            });
        }
    }
    
    exitRoom() {
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => {
            this.scene.start('CasaScene');
        });
    }
}

// =============================================================
// ESCENA 4: SELECTOR DE ÉPOCAS
// =============================================================
class EpochSelectorScene extends BaseScene {
    constructor() {
        super('EpochSelectorScene');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#050508');
        
        // Fondo estrellado
        this.createStarfield();
        
        // Título
        const title = this.add.text(400, 22, 'SELECCIONA UNA ÉPOCA', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '13px',
            color: '#00f5ff',
            align: 'center'
        }).setOrigin(0.5);
        title.setShadow(0, 0, '#00f5ff', 10);

        this.add.text(400, 48, 'Viaja a través del tiempo', {
            fontFamily: '"VT323", monospace',
            fontSize: '16px',
            color: '#8892a4'
        }).setOrigin(0.5);
        
        // Grid de tarjetas — 4 cols, 2 filas, centrado
        this.epochCards = [];
        const cols = 4;
        const cardW = 165;
        const cardH = 105;
        const gapX = 180;
        const gapY = 120;
        const startX = 400 - gapX * 1.5;
        const startY = 130;

        EPOCHS_DATA.forEach((epoch, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const x = startX + col * gapX;
            const y = startY + row * gapY;
            this.epochCards.push(this.createEpochCard(x, y, epoch, index, cardW, cardH));
        });

        // Máquina del tiempo
        this.createReturnMachine(400, 375);

        // Instrucciones
        this.add.text(400, 438, 'CLICK época para viajar  ·  CLICK máquina para volver', {
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '8px',
            color: '#4a5568'
        }).setOrigin(0.5);
        
        // Animación de entrada
        this.cameras.main.fadeIn(500);
        
        // Setup multiplayer
        this.setupMultiplayer();
        
        // Efecto de partículas de fondo
        this.createAmbientParticles();
    }
    
    createStarfield() {
        for (let i = 0; i < 100; i++) {
            const star = this.add.circle(
                Phaser.Math.Between(0, 800),
                Phaser.Math.Between(0, 450),
                Phaser.Math.Between(0.5, 2),
                0xffffff,
                Phaser.Math.FloatBetween(0.2, 0.8)
            );
            
            this.tweens.add({
                targets: star,
                alpha: { from: 0.2, to: 1 },
                duration: Phaser.Math.Between(1000, 3000),
                repeat: -1,
                yoyo: true
            });
        }
    }
    
    createEpochCard(x, y, epoch, index, cardW = 165, cardH = 105) {
        const container = this.add.container(x, y);

        const bg = this.add.rectangle(0, 0, cardW, cardH, 0x0a0a1a);
        bg.setStrokeStyle(2, parseInt(epoch.color.replace('#', '0x')));
        bg.setInteractive({ useHandCursor: true });
        container.add(bg);

        const glow = this.add.rectangle(0, 0, cardW, cardH, parseInt(epoch.color.replace('#', '0x')), 0.1);
        glow.setBlendMode('ADD');
        container.add(glow);

        const icon = this.add.text(0, -28, epoch.icon, { fontSize: '20px' }).setOrigin(0.5);
        container.add(icon);

        const name = this.add.text(0, -6, epoch.name, {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '7px',
            color: epoch.color,
            align: 'center',
            wordWrap: { width: cardW - 20 }
        }).setOrigin(0.5);
        container.add(name);

        const period = this.add.text(0, 16, epoch.period, {
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '8px',
            color: '#4a5568'
        }).setOrigin(0.5);
        container.add(period);

        const desc = this.add.text(0, 33, epoch.desc, {
            fontFamily: '"VT323", monospace',
            fontSize: '11px',
            color: '#8892a4',
            align: 'center',
            wordWrap: { width: cardW - 15 }
        }).setOrigin(0.5);
        container.add(desc);
        
        // Interacción hover
        bg.on('pointerover', () => {
            this.tweens.add({
                targets: container,
                scale: 1.1,
                duration: 200
            });
            bg.setStrokeStyle(3, parseInt(epoch.color.replace('#', '0x')));
            glow.setAlpha(0.3);
        });
        
        bg.on('pointerout', () => {
            this.tweens.add({
                targets: container,
                scale: 1,
                duration: 200
            });
            bg.setStrokeStyle(2, parseInt(epoch.color.replace('#', '0x')));
            glow.setAlpha(0.1);
        });
        
        bg.on('pointerdown', () => {
            this.selectEpoch(epoch);
        });
        
        // Animación flotante
        this.tweens.add({
            targets: container,
            y: y + 3,
            duration: 2000 + index * 200,
            repeat: -1,
            yoyo: true,
            ease: 'Sine.easeInOut'
        });
        
        return { container, bg, glow, epoch };
    }
    
    createReturnMachine(x, y) {
        const container = this.add.container(x, y);
        
        // Base
        const base = this.add.ellipse(0, 20, 80, 25, 0x2a2a4a);
        base.setStrokeStyle(2, 0x00f5ff);
        container.add(base);
        
        // Anillos
        const ring1 = this.add.ellipse(0, 0, 60, 60);
        ring1.setStrokeStyle(2, 0x00f5ff);
        container.add(ring1);
        
        const ring2 = this.add.ellipse(0, 0, 45, 45);
        ring2.setStrokeStyle(2, 0x39ff14);
        container.add(ring2);
        
        // Núcleo
        const core = this.add.circle(0, 0, 12, 0x00f5ff);
        core.setBlendMode('ADD');
        container.add(core);
        
        // Texto
        const text = this.add.text(0, 45, 'REGRESAR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#00f5ff'
        }).setOrigin(0.5);
        container.add(text);
        
        // Animación de rotación
        this.tweens.add({
            targets: ring1,
            angle: 360,
            duration: 6000,
            repeat: -1
        });
        
        this.tweens.add({
            targets: ring2,
            angle: -360,
            duration: 4000,
            repeat: -1
        });
        
        // Interacción
        const hitArea = this.add.rectangle(0, 0, 80, 80, 0x000000, 0);
        hitArea.setInteractive({ useHandCursor: true });
        container.add(hitArea);
        
        hitArea.on('pointerover', () => {
            this.tweens.add({
                targets: container,
                scale: 1.1,
                duration: 200
            });
        });
        
        hitArea.on('pointerout', () => {
            this.tweens.add({
                targets: container,
                scale: 1,
                duration: 200
            });
        });
        
        hitArea.on('pointerdown', () => {
            this.returnToPresent();
        });
        
        return container;
    }
    
    createAmbientParticles() {
        const particles = this.add.particles(400, 225, 'particle', {
            speed: { min: 10, max: 30 },
            scale: { start: 0.3, end: 0 },
            lifespan: 2000,
            quantity: 1,
            frequency: 200,
            tint: 0x00f5ff,
            alpha: { start: 0.3, end: 0 },
            blendMode: 'ADD'
        });
    }
    
    selectEpoch(epoch) {
        this.notifySceneChange('EpochScene');
        // Efecto de selección
        this.cameras.main.shake(100, 0.01);
        
        // Flash del color de la época
        const flash = this.add.rectangle(400, 225, 800, 450, parseInt(epoch.color.replace('#', '0x')));
        flash.setBlendMode('ADD');
        flash.setAlpha(0);
        
        this.tweens.add({
            targets: flash,
            alpha: 0.6,
            duration: 300,
            yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(400);
                this.time.delayedCall(400, () => {
                    this.scene.start('EpochScene', { epoch: epoch });
                });
            }
        });
    }
    
    returnToPresent() {
        this.cameras.main.fadeOut(400);
        this.time.delayedCall(400, () => {
            this.scene.start('FuturisticScene');
        });
    }
}

// =============================================================
// ESCENA 5: ÉPOCA HISTÓRICA - Template para cada época
// =============================================================
class EpochScene extends BaseScene {
    constructor() {
        super('EpochScene');
    }
    
    init(data) {
        this.epochData = data.epoch;
    }
    
    create() {
        const color = this.epochData.color;
        const hexColor = parseInt(color.replace('#', '0x'));
        
        // Fondo según la época
        this.cameras.main.setBackgroundColor(this.getEpochBgColor());
        
        // Crear ambiente temático
        this.createEpochEnvironment();
        
        // Título de la época
        const title = this.add.text(400, 30, `${this.epochData.icon} ${this.epochData.name}`, {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '14px',
            color: color,
            align: 'center'
        }).setOrigin(0.5);
        title.setShadow(0, 0, color, 10);
        
        // Período
        this.add.text(400, 55, this.epochData.period, {
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '12px',
            color: '#8892a4'
        }).setOrigin(0.5);
        
        // Descripción
        this.add.text(400, 80, this.epochData.desc, {
            fontFamily: '"VT323", monospace',
            fontSize: '14px',
            color: '#e0e8f0',
            align: 'center',
            wordWrap: { width: 600 }
        }).setOrigin(0.5);
        
        // Elementos representativos
        this.createEpochElements();
        
        // MÁQUINA DEL TIEMPO (para regresar)
        this.createTimeMachine(700, 380);
        
        // Jugador
        this.player = this.createPlayer(100, 380);
        
        // Zona de la máquina
        this.machineZone = this.add.rectangle(700, 380, 60, 60, 0x00f5ff, 0);
        this.physics.add.existing(this.machineZone, true);
        
        // Indicador
        this.machineIndicator = this.add.text(700, 340, '▼ REGRESAR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);
        
        // Diálogo informativo
        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog, `Has llegado a ${this.epochData.name}.\n${this.getEpochInfo()}\nAcércate a la máquina del tiempo para regresar.`);
        this.dialogShown = true;
        
        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
        
        this.physics.world.setBounds(50, 100, 700, 330);
        
        // Animación de entrada
        this.cameras.main.fadeIn(500);
        
        // Setup multiplayer
        this.setupMultiplayer();
    }
    
    getEpochBgColor() {
        const colors = {
            mesopotamia: '#1a1205',
            egipto: '#0c0a02',
            grecia: '#0a0908',
            edadmedia: '#090809',
            era1300: '#0b0904',
            era1700: '#060a0e',
            sigloxx: '#030d0a',
            sigloxxi: '#03040f'
        };
        return colors[this.epochData.id] || '#050508';
    }
    
    getEpochInfo() {
        const info = {
            mesopotamia: 'Los sumerios inventaron el ábaco de arcilla y el sistema sexagesimal.',
            egipto: 'Imhotep diseñó pirámides y el Papiro de Ahmes documentó 84 problemas matemáticos.',
            grecia: 'El Mecanismo de Anticitera es la primera computadora analógica conocida.',
            edadmedia: 'Al-Khwarizmi creó el álgebra y Fibonacci introdujo la numeración arábiga.',
            era1300: 'Pascal inventó la calculadora mecánica y Leibniz el código binario.',
            era1700: 'Babbage diseñó la Máquina Analítica y Ada Lovelace el primer algoritmo.',
            sigloxx: 'Turing, von Neumann y Hopper revolucionaron la computación moderna.',
            sigloxxi: 'La IA, la nube y la computación cuántica definen el presente.'
        };
        return info[this.epochData.id] || '';
    }
    
    createEpochEnvironment() {
        // Suelo temático
        const groundY = 350;
        
        switch(this.epochData.id) {
            case 'mesopotamia':
                // Arena y ríos
                this.add.rectangle(400, groundY, 800, 100, 0xC4A35A);
                // Río Éufrates
                this.add.ellipse(200, groundY, 150, 30, 0x4169E1, 0.6);
                this.add.ellipse(600, groundY, 120, 25, 0x4169E1, 0.6);
                break;
                
            case 'egipto':
                // Arena
                this.add.rectangle(400, groundY, 800, 100, 0xF4A460);
                // Pirámides al fondo
                this.add.triangle(150, groundY - 50, 0, 0, 80, 0, 40, -60, 0xDAA520);
                this.add.triangle(300, groundY - 30, 0, 0, 60, 0, 30, -40, 0xDAA520);
                break;
                
            case 'grecia':
                // Mármol
                this.add.rectangle(400, groundY, 800, 100, 0xF5F5DC);
                // Columnas
                for (let x = 100; x < 800; x += 150) {
                    this.add.rectangle(x, groundY - 40, 20, 80, 0xE6E6FA);
                    this.add.rectangle(x, groundY - 80, 30, 10, 0xE6E6FA);
                }
                break;
                
            case 'edadmedia':
                // Tierra
                this.add.rectangle(400, groundY, 800, 100, 0x5a4a3a);
                // Castillo al fondo
                this.add.rectangle(400, groundY - 60, 120, 80, 0x696969);
                this.add.rectangle(400, groundY - 100, 140, 20, 0x2F4F4F);
                break;
                
            case 'era1300':
                // Pasto
                this.add.rectangle(400, groundY, 800, 100, 0x556B2F);
                // Molino
                this.add.rectangle(600, groundY - 40, 30, 80, 0x8B4513);
                // Aspas
                const blades = this.add.rectangle(600, groundY - 80, 80, 6, 0x8B4513);
                this.tweens.add({ targets: blades, angle: 360, duration: 4000, repeat: -1 });
                break;
                
            case 'era1700':
                // Fábrica
                this.add.rectangle(400, groundY, 800, 100, 0x4a4a4a);
                // Chimeneas industriales
                this.add.rectangle(200, groundY - 60, 30, 80, 0x696969);
                this.add.rectangle(250, groundY - 40, 25, 60, 0x696969);
                // Humo
                this.createSmoke(200, groundY - 100);
                this.createSmoke(250, groundY - 80);
                break;
                
            case 'sigloxx':
                // Asfalto
                this.add.rectangle(400, groundY, 800, 100, 0x2F2F2F);
                // Edificios
                this.add.rectangle(200, groundY - 50, 80, 100, 0x4682B4);
                this.add.rectangle(600, groundY - 70, 100, 140, 0x708090);
                // Ventanas iluminadas
                for (let row = 0; row < 4; row++) {
                    for (let col = 0; col < 3; col++) {
                        this.add.rectangle(185 + col * 15, groundY - 80 + row * 20, 8, 12, 0xFFD700, 0.8);
                    }
                }
                break;
                
            case 'sigloxxi':
                // Ciudad futurista
                this.add.rectangle(400, groundY, 800, 100, 0x1a1a2e);
                // Torres futuristas
                this.add.rectangle(200, groundY - 80, 60, 160, 0x00f5ff, 0.3);
                this.add.rectangle(600, groundY - 100, 80, 200, 0xbf5fff, 0.3);
                // Líneas de datos
                for (let i = 0; i < 5; i++) {
                    const line = this.add.line(400, groundY - 50 + i * 20, 0, 0, 800, 0, 0x00f5ff, 0.2);
                    this.tweens.add({
                        targets: line,
                        alpha: { from: 0.1, to: 0.5 },
                        duration: 1000 + i * 200,
                        repeat: -1,
                        yoyo: true
                    });
                }
                break;
        }
    }
    
    createSmoke(x, y) {
        this.tweens.add({
            targets: this.add.circle(x, y, 6, 0x666666, 0.5),
            y: y - 40,
            alpha: 0,
            scale: 2,
            duration: 2500,
            repeat: -1,
            delay: 300
        });
    }
    
    createEpochElements() {
        // Elementos interactivos específicos de cada época
        const groundY = 350;
        
        switch(this.epochData.id) {
            case 'mesopotamia':
                // Tablillas cuneiformes
                this.add.rectangle(300, groundY - 20, 30, 20, 0x8B4513);
                this.add.text(300, groundY - 20, '𒀭', { fontSize: '16px' }).setOrigin(0.5);
                break;
                
            case 'egipto':
                // Jeroglíficos decorativos
                this.add.text(500, groundY - 30, '𓂀 𓃻 𓆣', { fontSize: '20px' }).setOrigin(0.5);
                break;
                
            case 'grecia':
                // Símbolos matemáticos
                this.add.text(500, groundY - 30, 'π ∑ √', { fontSize: '24px', color: '#8B4513' }).setOrigin(0.5);
                break;
                
            case 'edadmedia':
                // Símbolos algebraicos
                this.add.text(500, groundY - 30, 'x² + y² = z²', { fontSize: '16px', color: '#DAA520' }).setOrigin(0.5);
                break;
                
            case 'era1300':
                // Fórmulas
                this.add.text(500, groundY - 30, '∫ dx', { fontSize: '20px', color: '#8B4513' }).setOrigin(0.5);
                break;
                
            case 'era1700':
                // Engranajes
                this.add.circle(500, groundY - 30, 15, 0x8B7355);
                this.add.circle(500, groundY - 30, 5, 0x4a4a4a);
                break;
                
            case 'sigloxx':
                // Código binario
                this.add.text(500, groundY - 30, '101010', { fontFamily: 'monospace', fontSize: '16px', color: '#00ff00' }).setOrigin(0.5);
                break;
                
            case 'sigloxxi':
                // Símbolo de cuántica
                this.add.text(500, groundY - 30, 'Ψ |0⟩ |1⟩', { fontSize: '18px', color: '#00f5ff' }).setOrigin(0.5);
                break;
        }
    }
    
    createTimeMachine(x, y) {
        // Mini máquina del tiempo para regresar
        const base = this.add.ellipse(x, y + 20, 60, 20, 0x2a2a4a);
        base.setStrokeStyle(2, 0x00f5ff);
        
        const ring = this.add.ellipse(x, y, 50, 50);
        ring.setStrokeStyle(2, 0x00f5ff);
        
        const core = this.add.circle(x, y, 10, 0x00f5ff);
        core.setBlendMode('ADD');
        
        this.tweens.add({
            targets: ring,
            angle: 360,
            duration: 5000,
            repeat: -1
        });
        
        // Brillo pulsante
        this.tweens.add({
            targets: core,
            scale: [1, 1.2, 1],
            alpha: [0.7, 1, 0.7],
            duration: 1000,
            repeat: -1
        });
    }
    
    update() {
        if (!this.player) return;
        
        const speed = 160;
        
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.body.setVelocityX(speed);
        } else {
            this.player.body.setVelocityX(0);
        }
        
        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.body.setVelocityY(speed);
        } else {
            this.player.body.setVelocityY(0);
        }
        
        this.updatePlayerVisuals(this.player);
        
        // Enviar posición al servidor
        if (window.multiplayer && window.multiplayer.connected && this.player) {
            const vx = this.player.body.velocity.x;
            const vy = this.player.body.velocity.y;
            if (vx !== 0 || vy !== 0) {
                window.multiplayer.sendMove(this.player.x, this.player.y);
            }
        }
        
        // Verificar proximidad a la máquina
        const distToMachine = Phaser.Math.Distance.Between(this.player.x, this.player.y, 700, 380);
        this.machineIndicator.setVisible(distToMachine < 60);
        
        if (distToMachine < 50 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.returnToSelector();
        }
        
        // Cerrar diálogo
        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }
    
    returnToSelector() {
        this.notifySceneChange('EpochSelectorScene');
        this.cameras.main.shake(100, 0.01);
        
        const flash = this.add.rectangle(400, 225, 800, 450, 0x00f5ff);
        flash.setBlendMode('ADD');
        flash.setAlpha(0);
        
        this.tweens.add({
            targets: flash,
            alpha: 0.8,
            duration: 200,
            yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(400);
                this.time.delayedCall(400, () => {
                    this.scene.start('EpochSelectorScene');
                });
            }
        });
    }
}

// =============================================================
// Las escenas se exportan aquí. La inicialización la maneja
// scripts.js → startGame() → initGame()
// =============================================================