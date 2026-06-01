/* =============================================================
   TIME TRAVELER RPG — Phaser 3 Game
   v3.0 — Ocultar jugador local en selector, collision blocks system,
           escenas de épocas limpias, fondos animados por secuencia
   ============================================================= */

const EPOCHS_DATA = [
    { id: 'mesopotamia', name: 'Mesopotamia', period: '~3500-500 a.C.', color: '#d4a574', icon: '🏺', desc: 'Ábacos de arcilla y tablillas cuneiformes', animatedBg: false },
    { id: 'egipto', name: 'Egipto', period: '~3000-30 a.C.', color: '#e8c85a', icon: '🔺', desc: 'Geometría y el Papiro de Ahmes', animatedBg: false },
    { id: 'grecia', name: 'Grecia', period: '~800-31 a.C.', color: '#f0e6d2', icon: '🏛️', desc: 'El Mecanismo de Anticitera', animatedBg: false },
    { id: 'edadmedia', name: 'Edad Media', period: '476-1400 d.C.', color: '#9c7c4a', icon: '🏰', desc: 'Álgebra árabe y relojes mecánicos', animatedBg: false },
    { id: 'era1300', name: '1300-1700', period: '1300-1700', color: '#c08840', icon: '⚙️', desc: 'Pascalina y cálculo diferencial', animatedBg: true, bgPrefix: 'era1300_bg' },
    { id: 'era1700', name: '1700-1900', period: '1700-1900', color: '#8fa8c0', icon: '🏭', desc: 'Máquina analítica de Babbage', animatedBg: true, bgPrefix: 'era1700_bg' },
    { id: 'sigloxx', name: 'Siglo XX', period: '1900-2000', color: '#00d4aa', icon: '💻', desc: 'Turing, von Neumann y computadoras', animatedBg: true, bgPrefix: 'sigloxx_bg' },
    { id: 'sigloxxi', name: 'Siglo XXI', period: '2000-hoy', color: '#00f5ff', icon: '🌐', desc: 'IA, nube y computación cuántica', animatedBg: true, bgPrefix: 'sigloxxi_bg' }
];

// ============================================================
// CLASE BASE — Con sistema de bloques de colisión
// ============================================================
class BaseScene extends Phaser.Scene {
    constructor(key) { super({ key }); }

    // ============================================================
    // SISTEMA DE BLOQUES DE COLISIÓN
    // ============================================================
    // Método para crear bloques de colisión invisibles
    // Úsalo en create() de cada escena: this.createCollisionBlock(x, y, w, h);
    // Los bloques se almacenan en this._collisionBlocks para gestión
    createCollisionBlock(x, y, w, h) {
        const block = this.add.rectangle(x, y, w, h, 0xff0000, 0); // alpha=0: invisible
        block.setDepth(2);
        this.physics.add.existing(block, true); // static body

        if (this.player) {
            this.physics.add.collider(this.player, block);
        }

        if (!this._collisionBlocks) this._collisionBlocks = [];
        this._collisionBlocks.push(block);
        return block;
    }

    // Método para aplicar colisiones del jugador a todos los bloques existentes
    // (útil si creas bloques antes del jugador)
    applyCollisionToPlayer() {
        if (!this.player || !this._collisionBlocks) return;
        this._collisionBlocks.forEach(block => {
            this.physics.add.collider(this.player, block);
        });
    }

    // Método para limpiar todos los bloques de colisión
    clearCollisionBlocks() {
        if (!this._collisionBlocks) return;
        this._collisionBlocks.forEach(block => {
            if (block && block.active) block.destroy();
        });
        this._collisionBlocks = [];
    }

    // Preload de todas las imágenes de personajes
    preloadCharacters() {
        const base = 'assets/characters/';
        // Hombre
        this.load.image('chico',       base + 'chico.png');
        this.load.image('chicoespa',   base + 'chicoespa.png');
        this.load.image('chicoper',    base + 'chicoper.png');
        this.load.image('chicomin',    base + 'chicomin.png');
        this.load.image('chicoperizq', base + 'chicoperizq.png');
        this.load.image('chicominizq', base + 'chicominizq.png');
        // Mujer
        this.load.image('chica',       base + 'chica.png');
        this.load.image('chicaespa',   base + 'chicaespa.png');
        this.load.image('chicaper',    base + 'chicaper.png');
        this.load.image('chicamin',    base + 'chicamin.png');
        this.load.image('chicaperizq', base + 'chicaperizq.png');
        this.load.image('chicaminizq', base + 'chicaminizq.png');
    }

    getGender() {
        return (window.multiplayer && window.multiplayer.playerGender) ||
               localStorage.getItem('playerGender') || 'm';
    }

    createPlayer(x, y) {
        const gender = this.getGender();
        const textureKey = gender === 'f' ? 'chica' : 'chico';

        let playerImg;
        if (this.textures.exists(textureKey)) {
            playerImg = this.add.image(x, y, textureKey);
            playerImg.setDisplaySize(115, 115);
        } else {
            const size = 28;
            playerImg = this.add.rectangle(
                x, y, 
                size, size,
                gender === 'f' ? 0xbf5fff : 0x00f5ff
            );
        }

        this.physics.add.existing(playerImg);
        playerImg.body.setCollideWorldBounds(true);
        playerImg.body.setSize(20, 30);
        playerImg.setDepth(10);

        playerImg._gender = gender;
        playerImg._walkFrame = 0;
        playerImg._walkTimer = 0;
        playerImg._lastDir = 'front';

        // Aplicar colisiones con bloques existentes
        this.applyCollisionToPlayer();

        return playerImg;
    }

    updatePlayerSprite(player, vx, vy) {
        if (!player || !player.setTexture) return;
        const g = player._gender || 'm';
        const now = Date.now();
        const moving = Math.abs(vx) > 1 || Math.abs(vy) > 1;

        if (moving) {
            if (now - player._walkTimer > 150) {
                player._walkFrame = (player._walkFrame + 1) % 2;
                player._walkTimer = now;
            }

            if (Math.abs(vx) >= Math.abs(vy)) {
                if (vx > 0) {
                    player._lastDir = 'right';
                    const keys = g === 'f' ? ['chicaper','chicamin'] : ['chicoper','chicomin'];
                    const k = keys[player._walkFrame];
                    if (this.textures.exists(k)) player.setTexture(k);
                } else {
                    player._lastDir = 'left';
                    const keys = g === 'f' ? ['chicaperizq','chicaminizq'] : ['chicoperizq','chicominizq'];
                    const k = keys[player._walkFrame];
                    if (this.textures.exists(k)) player.setTexture(k);
                }
            } else {
                if (vy < 0) {
                    player._lastDir = 'back';
                    const k = g === 'f' ? 'chicaespa' : 'chicoespa';
                    if (this.textures.exists(k)) player.setTexture(k);
                } else {
                    player._lastDir = 'front';
                    const k = g === 'f' ? 'chica' : 'chico';
                    if (this.textures.exists(k)) player.setTexture(k);
                }
            }
        } else {
            const k = g === 'f' ? 'chica' : 'chico';
            if (this.textures.exists(k)) player.setTexture(k);
        }
    }

    createDialogBox() {
        const width = 600, height = 80;
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
        text.setDepth(101); text.setVisible(false);

        const hint = this.add.text(x + width/2 - 10, y + height/2 - 18, '▼ ESPACIO para continuar', {
            fontFamily: '"VT323", monospace', fontSize: '12px', color: '#00f5ff'
        }).setOrigin(1, 0.5);
        hint.setDepth(101); hint.setVisible(false);

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

    createPixelSmoke(x, y) {
        const emitSmoke = () => {
            const puff = this.add.rectangle(
                x + Phaser.Math.Between(-4, 4),
                y,
                Phaser.Math.Between(4, 8),
                Phaser.Math.Between(4, 8),
                Phaser.Utils.Array.GetRandom([0xaaaaaa, 0x888888, 0xbbbbbb]),
                0.7
            );
            puff.setDepth(20);
            this.tweens.add({
                targets: puff,
                y: y - Phaser.Math.Between(25, 45),
                alpha: 0,
                scaleX: Phaser.Math.FloatBetween(1.5, 2.5),
                scaleY: Phaser.Math.FloatBetween(1.5, 8.5),
                duration: Phaser.Math.Between(1500, 2500),
                onComplete: () => puff.destroy()
            });
        };
        this.time.addEvent({ delay: 400, callback: emitSmoke, loop: true });
    }

    // ============================================================
    // MULTIPLAYER
    // ============================================================
    setupMultiplayer() {
        if (window.multiplayer && !window.multiplayer.connected) {
            window.multiplayer.connect(this);
        } else if (window.multiplayer && window.multiplayer.connected) {
            if (window.multiplayer.currentScene !== this.scene.key) {
                window.multiplayer.joinRoom(this);
            }
        }
        this.chatInput = null;
        this.isChatOpen = false;

        this.chatKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.chatKey.on('down', () => { if (!this.isChatOpen) this.openChatInput(); });

        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.escKey.on('down', () => { if (this.isChatOpen) this.closeChatInput(); });
    }

    openChatInput() {
        if (this.isChatOpen) return;
        this.isChatOpen = true;
        if (this.player && this.player.body) this.player.body.setVelocity(0, 0);
        this.releaseGameKeys();
        const overlay = document.getElementById('game-chat-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            const input = document.getElementById('game-chat-input');
            if (input) { input.value = ''; input.focus(); }
        }
    }

    closeChatInput() {
        this.isChatOpen = false;
        const overlay = document.getElementById('game-chat-overlay');
        if (overlay) overlay.style.display = 'none';
        const canvas = document.querySelector('#game-container canvas');
        if (canvas) canvas.focus();
    }

    releaseGameKeys() {
        if (!this.input || !this.input.keyboard) return;
        [Phaser.Input.Keyboard.KeyCodes.W, Phaser.Input.Keyboard.KeyCodes.A,
         Phaser.Input.Keyboard.KeyCodes.S, Phaser.Input.Keyboard.KeyCodes.D,
         Phaser.Input.Keyboard.KeyCodes.UP, Phaser.Input.Keyboard.KeyCodes.DOWN,
         Phaser.Input.Keyboard.KeyCodes.LEFT, Phaser.Input.Keyboard.KeyCodes.RIGHT,
         Phaser.Input.Keyboard.KeyCodes.SPACE].forEach(kc => {
            const k = this.input.keyboard.getKey(kc);
            if (k && k.isDown) { k.isDown = false; k.isUp = true; }
        });
        if (this.cursors) {
            ['up','down','left','right','space'].forEach(d => {
                if (this.cursors[d]) { this.cursors[d].isDown = false; this.cursors[d].isUp = true; }
            });
        }
        if (this.wasd) {
            ['up','down','left','right','space'].forEach(d => {
                if (this.wasd[d]) { this.wasd[d].isDown = false; this.wasd[d].isUp = true; }
            });
        }
    }

    sendChatMessage(text) {
        if (window.multiplayer) window.multiplayer.sendChat(text);
        this.closeChatInput();
    }

    notifySceneChange(newSceneKey) {
        if (window.multiplayer && window.multiplayer.connected) {
            window.multiplayer.changeScene('world', newSceneKey,
                this.player ? this.player.x : 400,
                this.player ? this.player.y : 400);
        }
    }

    notifyEpochSceneChange(epochId) {
        const sceneKey = 'EpochScene_' + epochId;
        if (window.multiplayer && window.multiplayer.connected) {
            window.multiplayer.changeScene('world', sceneKey,
                this.player ? this.player.x : 400,
                this.player ? this.player.y : 400);
        }
    }
}

// ============================================================
// ESCENA 1: EXTERIOR (con bloques de colisión)
// ============================================================
class ExteriorScene extends BaseScene {
    constructor() { super('ExteriorScene'); }

    preload() {
        this.load.image('exterior', 'assets/backgrounds/exterior.png');
        this.preloadCharacters();
        const g = this.make.graphics({ x: 0, y: 0, add: false });
        g.fillStyle(0xffffff);
        g.fillRect(0, 0, 4, 4);
        g.generateTexture('pixel', 4, 4);
    }

    create() {
        // Fondo
        if (this.textures.exists('exterior')) {
            this.add.image(400, 225, 'exterior').setDisplaySize(800, 450).setDepth(0);
        } else {
            this.cameras.main.setBackgroundColor('#2d5016');
        }

        this.createPixelSmoke(458, 124);

        // Límite inferior del mundo
        this.physics.world.setBounds(0, 300, 800, 165);

        // Jugador
        this.player = this.createPlayer(400, 400);

        // ============================================================
        // BLOQUES DE COLISIÓN — Ejemplos (modifica según tu imagen)
        // ============================================================
        // this.createCollisionBlock(x, y, width, height);
        // Ejemplo: árbol en el exterior
        // this.createCollisionBlock(200, 350, 60, 60);
        // Ejemplo: roca
        // this.createCollisionBlock(600, 360, 40, 30);
        // ============================================================

        // Puerta de entrada
        this.doorZone = this.add.rectangle(400, 270, 40, 30, 0x00f5ff, 0);
        this.doorZone.setDepth(5);
        this.physics.add.existing(this.doorZone, true);

        this.doorIndicator = this.add.text(405, 235, '▼ ENTRAR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '6px', color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog,
            'Bienvenido a tu casa de campo.\nUsa WASD o flechas para moverte.\nAcércate a la puerta y presiona ESPACIO para entrar.');
        this.dialogShown = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.cameras.main.fadeIn(500);
        this.setupMultiplayer();
    }

    update(time, delta) {
        if (!this.player || this.isChatOpen) return;

        const speed = 160;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown || this.wasd.left.isDown) vx = -speed;
        else if (this.cursors.right.isDown || this.wasd.right.isDown) vx = speed;

        if (this.cursors.up.isDown || this.wasd.up.isDown) vy = -speed;
        else if (this.cursors.down.isDown || this.wasd.down.isDown) vy = speed;

        this.player.body.setVelocity(vx, vy);
        this.updatePlayerSprite(this.player, vx, vy);

        if ((vx !== 0 || vy !== 0) && window.multiplayer?.connected) {
            window.multiplayer.sendMove(this.player.x, this.player.y);
        }

        if (window.multiplayer) {
            window.multiplayer.update(this, delta);
        }

        const distToDoor = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 270);
        this.doorIndicator.setVisible(distToDoor < 50);

        if (distToDoor < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.enterHouse();
        }

        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }

    enterHouse() {
        this.notifySceneChange('CasaScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => this.scene.start('CasaScene'));
    }
}

// ============================================================
// ESCENA 2: CASA INTERIOR (sin cambios — ya tiene colisiones)
// ============================================================
class CasaScene extends BaseScene {
    constructor() { super('CasaScene'); }

    preload() {
        this.load.image('house', 'assets/backgrounds/house.png');
        this.preloadCharacters();
    }

    create() {
        if (this.textures.exists('house')) {
            this.add.image(400, 225, 'house').setDisplaySize(800, 450).setDepth(0);
        } else {
            this.cameras.main.setBackgroundColor('#3d2817');
        }

        this.createFireEmbers(215, 145);

        this.player = this.createPlayer(400, 350);

        // Bloques de colisión existentes
        this.createCollisionBlock(145, 330, 260, 140);
        this.createCollisionBlock(658, 240, 206, 80);
        this.createCollisionBlock(660, 310, 157, 96);
        this.createCollisionBlock(210, 158, 120, 40);
        this.createCollisionBlock(410, 158, 240, 50);
        this.createCollisionBlock(663, 160, 110, 40);

        this.physics.world.setBounds(0, 158, 800, 250);

        this.secretZone = this.add.rectangle(100, 150, 50, 80, 0x00f5ff, 0);
        this.secretZone.setDepth(5);
        this.physics.add.existing(this.secretZone, true);

        this.secretIndicator = this.add.text(93, 100, '?', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '14px', color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.exitZone = this.add.rectangle(400, 420, 100, 20, 0xff0000, 0);
        this.physics.add.existing(this.exitZone, true);
        this.exitIndicator = this.add.text(400, 400, '▼ SALIR', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px', color: '#ff6b35'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog,
            'Esta es tu casa. Hay algo extraño\nen esa puerta de la izquierda...\nAcércate y presiona ESPACIO.');
        this.dialogShown = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.cameras.main.fadeIn(500);
        this.setupMultiplayer();
    }

    createFireEmbers(x, y) {
        this.time.addEvent({
            delay: 120,
            callback: () => {
                const ember = this.add.rectangle(
                    x + Phaser.Math.Between(-8, 8),
                    y,
                    Phaser.Math.Between(3, 6),
                    Phaser.Math.Between(3, 6),
                    Phaser.Utils.Array.GetRandom([0xFF4500, 0xFF6A00, 0xFFD700, 0xFF0000])
                );
                ember.setDepth(8);
                this.tweens.add({
                    targets: ember,
                    y: y - Phaser.Math.Between(20, 40),
                    alpha: 0,
                    scaleX: 0.5, scaleY: 0.5,
                    duration: Phaser.Math.Between(600, 1200),
                    onComplete: () => ember.destroy()
                });
            },
            loop: true
        });
    }

    update(time, delta) {
        if (!this.player || this.isChatOpen) return;

        const speed = 160;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown || this.wasd.left.isDown) vx = -speed;
        else if (this.cursors.right.isDown || this.wasd.right.isDown) vx = speed;
        if (this.cursors.up.isDown || this.wasd.up.isDown) vy = -speed;
        else if (this.cursors.down.isDown || this.wasd.down.isDown) vy = speed;

        this.player.body.setVelocity(vx, vy);
        this.updatePlayerSprite(this.player, vx, vy);

        if ((vx !== 0 || vy !== 0) && window.multiplayer?.connected) {
            window.multiplayer.sendMove(this.player.x, this.player.y);
        }

        if (window.multiplayer) {
            window.multiplayer.update(this, delta);
        }

        const distToSecret = Phaser.Math.Distance.Between(this.player.x, this.player.y, 100, 150);
        this.secretIndicator.setVisible(distToSecret < 60);

        if (distToSecret < 20 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.enterFuturisticRoom();
        }

        const distToExit = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 420);
        this.exitIndicator.setVisible(distToExit < 40);

        if (distToExit < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.exitHouse();
        }

        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }

    enterFuturisticRoom() {
        this.notifySceneChange('FuturisticScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => this.scene.start('FuturisticScene'));
    }

    exitHouse() {
        this.notifySceneChange('ExteriorScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => this.scene.start('ExteriorScene'));
    }
}

// ============================================================
// ESCENA 3: CUARTO SECRETO / FUTURISTA (con bloques de colisión)
// ============================================================
class FuturisticScene extends BaseScene {
    constructor() { super('FuturisticScene'); }

    preload() {
        this.load.image('secretroom', 'assets/backgrounds/secretroom.png');
        this.preloadCharacters();
    }

    create() {
        if (this.textures.exists('secretroom')) {
            this.add.image(400, 225, 'secretroom').setDisplaySize(800, 450).setDepth(0);
        } else {
            this.cameras.main.setBackgroundColor('#050510');
        }

        this.createScanlines();
        this.createMachineParticles(405, 175);

        this.createMachineLights([
            { x: 147, y: 180, color: 0x00f5ff },
            { x: 647, y: 180, color: 0x00f5ff },
        ]);

        this.createMachineLabels([
            { x: 148, y: 80, text: 'DATOS TEMPORALES' },
            { x: 648, y: 80, text: 'COORDENADAS' },
        ]);

        this.player = this.createPlayer(400, 370);

        // ============================================================
        // BLOQUES DE COLISIÓN — Ejemplos (modifica según tu imagen)
        // ============================================================
        // this.createCollisionBlock(x, y, width, height);
        // Ejemplo: consola izquierda
        // this.createCollisionBlock(147, 200, 80, 60);
        // Ejemplo: consola derecha
        // this.createCollisionBlock(647, 200, 80, 60);
        // ============================================================

        this.machineZone = this.add.circle(400, 210, 40, 0x00f5ff, 0);
        this.machineZone.setDepth(5);
        const machineBody = this.add.rectangle(400, 210, 80, 80, 0x00f5ff, 0);
        this.physics.add.existing(machineBody, true);
        this._machineBody = machineBody;

        this.machineIndicator = this.add.text(400, 100, '▼ ACTIVAR MÁQUINA', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '7px', color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog,
            '¡Increíble! Una máquina del tiempo real.\nAcércate y presiona ESPACIO para activarla.');
        this.dialogShown = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.physics.world.setBounds(30, 200, 740, 210);

        this.exitZone = this.add.rectangle(400, 430, 80, 20, 0xff0000, 0);
        this.physics.add.existing(this.exitZone, true);
        this.exitIndicator = this.add.text(400, 410, '▼ VOLVER', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px', color: '#ff6b35'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.cameras.main.fadeIn(500);
        this.setupMultiplayer();
    }

    createScanlines() {
        for (let i = 0; i < 5; i++) {
            const line = this.add.rectangle(400, i * 90, 800, 1, 0x00f5ff, 0.07);
            line.setBlendMode('ADD');
            this.tweens.add({
                targets: line,
                y: i * 90 + 45,
                duration: 3000 + i * 500,
                repeat: -1, yoyo: true
            });
        }
    }

    createMachineParticles(x, y) {
        this.time.addEvent({
            delay: 80,
            callback: () => {
                const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
                const radius = Phaser.Math.Between(20, 50);
                const px = x + Math.cos(angle) * radius;
                const py = y + Math.sin(angle) * radius;
                const p = this.add.rectangle(px, py, 3, 3, 0x00f5ff);
                p.setBlendMode('ADD');
                p.setDepth(12);
                this.tweens.add({
                    targets: p,
                    x: px + Phaser.Math.Between(-15, 15),
                    y: py - Phaser.Math.Between(10, 30),
                    alpha: 0,
                    duration: Phaser.Math.Between(600, 1200),
                    onComplete: () => p.destroy()
                });
            },
            loop: true
        });
    }

    createMachineLights(machines) {
        machines.forEach(m => {
            for (let i = 0; i < 4; i++) {
                const light = this.add.rectangle(m.x - 15 + i * 10, m.y + 35, 5, 5, m.color);
                light.setDepth(10);
                this.tweens.add({
                    targets: light,
                    alpha: { from: 0.3, to: 1 },
                    duration: 300 + i * 150,
                    repeat: -1, yoyo: true
                });
            }
        });
    }

    createMachineLabels(labels) {
        labels.forEach(l => {
            const line = this.add.rectangle(l.x, l.y - 10, 100, 2, 0x00f5ff, 0.8);
            line.setDepth(10);
            this.tweens.add({ targets: line, alpha: { from: 0.4, to: 1 }, duration: 1200, repeat: -1, yoyo: true });

            const label = this.add.text(l.x, l.y, l.text, {
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '10px', color: '#00f5ff'
            }).setOrigin(0.5);
            label.setBlendMode('ADD');
            label.setDepth(10);
            this.tweens.add({ targets: label, alpha: { from: 0.4, to: 0.9 }, y: l.y - 3, duration: 2000, repeat: -1, yoyo: true });
        });
    }

    update(time, delta) {
        if (!this.player || this.isChatOpen) return;

        const speed = 160;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown || this.wasd.left.isDown) vx = -speed;
        else if (this.cursors.right.isDown || this.wasd.right.isDown) vx = speed;
        if (this.cursors.up.isDown || this.wasd.up.isDown) vy = -speed;
        else if (this.cursors.down.isDown || this.wasd.down.isDown) vy = speed;

        this.player.body.setVelocity(vx, vy);
        this.updatePlayerSprite(this.player, vx, vy);

        if ((vx !== 0 || vy !== 0) && window.multiplayer?.connected) {
            window.multiplayer.sendMove(this.player.x, this.player.y);
        }

        if (window.multiplayer) {
            window.multiplayer.update(this, delta);
        }

        const distToMachine = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 210);
        this.machineIndicator.setVisible(distToMachine < 60);

        if (distToMachine < 10 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.activateTimeMachine();
        }

        const distToExit = Phaser.Math.Distance.Between(this.player.x, this.player.y, 400, 430);
        this.exitIndicator.setVisible(distToExit < 40);

        if (distToExit < 40 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.exitRoom();
        }

        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }

    activateTimeMachine() {
        this.notifySceneChange('EpochSelectorScene');
        this.cameras.main.shake(200, 0.01);

        const flash = this.add.rectangle(400, 225, 800, 450, 0x00f5ff);
        flash.setBlendMode('ADD');
        flash.setAlpha(0);

        this.tweens.add({
            targets: flash, alpha: 0.8, duration: 200, yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(500);
                this.time.delayedCall(500, () => this.scene.start('EpochSelectorScene'));
            }
        });

        for (let i = 0; i < 20; i++) {
            const p = this.add.rectangle(400, 200, 3, 3, 0x00f5ff);
            const angle = (i / 20) * Math.PI * 2;
            this.tweens.add({
                targets: p,
                x: 400 + Math.cos(angle) * 100,
                y: 200 + Math.sin(angle) * 100,
                alpha: 0, duration: 500,
                onComplete: () => p.destroy()
            });
        }
    }

    exitRoom() {
        this.notifySceneChange('CasaScene');
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => this.scene.start('CasaScene'));
    }
}

// ============================================================
// ESCENA 4: SELECTOR DE ÉPOCAS — Ocultar jugador local
// ============================================================
class EpochSelectorScene extends BaseScene {
    constructor() { super('EpochSelectorScene'); }

    preload() { this.preloadCharacters(); }

    create() {
        this.cameras.main.setBackgroundColor('#050508');
        this.createStarfield();

        const title = this.add.text(400, 22, 'SELECCIONA UNA ÉPOCA', {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '13px', color: '#00f5ff', align: 'center'
        }).setOrigin(0.5);
        title.setShadow(0, 0, '#00f5ff', 10);

        this.add.text(400, 48, 'Viaja a través del tiempo', {
            fontFamily: '"VT323", monospace', fontSize: '16px', color: '#8892a4'
        }).setOrigin(0.5);

        this.epochCards = [];
        const cols = 4, cardW = 165, cardH = 105, gapX = 180, gapY = 120;
        const startX = 400 - gapX * 1.5, startY = 130;

        EPOCHS_DATA.forEach((epoch, index) => {
            const col = index % cols, row = Math.floor(index / cols);
            const x = startX + col * gapX, y = startY + row * gapY;
            this.epochCards.push(this.createEpochCard(x, y, epoch, index, cardW, cardH));
        });

        this.createReturnMachine(400, 375);

        this.add.text(400, 438, 'CLICK época para viajar  ·  CLICK máquina para volver', {
            fontFamily: '"Share Tech Mono", monospace', fontSize: '8px', color: '#4a5568'
        }).setOrigin(0.5);

        this.cameras.main.fadeIn(500);
        this.setupMultiplayer();
        this.createAmbientParticles();
    }

    createStarfield() {
        for (let i = 0; i < 100; i++) {
            const star = this.add.circle(
                Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 450),
                Phaser.Math.Between(0.5, 2), 0xffffff, Phaser.Math.FloatBetween(0.2, 0.8)
            );
            this.tweens.add({
                targets: star, alpha: { from: 0.2, to: 1 },
                duration: Phaser.Math.Between(1000, 3000), repeat: -1, yoyo: true
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
            fontFamily: '"Press Start 2P", monospace', fontSize: '7px',
            color: epoch.color, align: 'center', wordWrap: { width: cardW - 20 }
        }).setOrigin(0.5);
        container.add(name);

        const period = this.add.text(0, 16, epoch.period, {
            fontFamily: '"Share Tech Mono", monospace', fontSize: '8px', color: '#4a5568'
        }).setOrigin(0.5);
        container.add(period);

        const desc = this.add.text(0, 33, epoch.desc, {
            fontFamily: '"VT323", monospace', fontSize: '11px',
            color: '#8892a4', align: 'center', wordWrap: { width: cardW - 15 }
        }).setOrigin(0.5);
        container.add(desc);

        bg.on('pointerover', () => {
            this.tweens.add({ targets: container, scale: 1.1, duration: 200 });
            bg.setStrokeStyle(3, parseInt(epoch.color.replace('#', '0x')));
            glow.setAlpha(0.3);
        });
        bg.on('pointerout', () => {
            this.tweens.add({ targets: container, scale: 1, duration: 200 });
            bg.setStrokeStyle(2, parseInt(epoch.color.replace('#', '0x')));
            glow.setAlpha(0.1);
        });
        bg.on('pointerdown', () => this.selectEpoch(epoch));

        this.tweens.add({
            targets: container, y: y + 3,
            duration: 2000 + index * 200, repeat: -1, yoyo: true, ease: 'Sine.easeInOut'
        });

        return { container, bg, glow, epoch };
    }

    createReturnMachine(x, y) {
        const container = this.add.container(x, y);
        const base = this.add.ellipse(0, 20, 80, 25, 0x2a2a4a);
        base.setStrokeStyle(2, 0x00f5ff);
        container.add(base);

        const ring1 = this.add.ellipse(0, 0, 60, 60);
        ring1.setStrokeStyle(2, 0x00f5ff);
        container.add(ring1);

        const ring2 = this.add.ellipse(0, 0, 45, 45);
        ring2.setStrokeStyle(2, 0x39ff14);
        container.add(ring2);

        const core = this.add.circle(0, 0, 12, 0x00f5ff);
        core.setBlendMode('ADD');
        container.add(core);

        const text = this.add.text(0, 45, 'REGRESAR', {
            fontFamily: '"Press Start 2P", monospace', fontSize: '8px', color: '#00f5ff'
        }).setOrigin(0.5);
        container.add(text);

        this.tweens.add({ targets: ring1, angle: 360, duration: 6000, repeat: -1 });
        this.tweens.add({ targets: ring2, angle: -360, duration: 4000, repeat: -1 });

        const hitArea = this.add.rectangle(0, 0, 80, 80, 0x000000, 0);
        hitArea.setInteractive({ useHandCursor: true });
        container.add(hitArea);

        hitArea.on('pointerover', () => this.tweens.add({ targets: container, scale: 1.1, duration: 200 }));
        hitArea.on('pointerout', () => this.tweens.add({ targets: container, scale: 1, duration: 200 }));
        hitArea.on('pointerdown', () => this.returnToPresent());

        return container;
    }

    createAmbientParticles() {
        this.time.addEvent({
            delay: 200,
            callback: () => {
                const p = this.add.rectangle(
                    Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 450),
                    3, 3, 0x00f5ff
                );
                p.setAlpha(0.3);
                p.setBlendMode('ADD');
                this.tweens.add({
                    targets: p, alpha: 0, y: p.y - 20, duration: 2000,
                    onComplete: () => p.destroy()
                });
            },
            loop: true
        });
    }

    selectEpoch(epoch) {
        this.notifyEpochSceneChange(epoch.id);
        this.cameras.main.shake(100, 0.01);

        const flash = this.add.rectangle(400, 225, 800, 450, parseInt(epoch.color.replace('#', '0x')));
        flash.setBlendMode('ADD');
        flash.setAlpha(0);

        this.tweens.add({
            targets: flash, alpha: 0.6, duration: 300, yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(400);
                this.time.delayedCall(400, () => this.scene.start('EpochScene', { epoch }));
            }
        });
    }

    returnToPresent() {
        this.cameras.main.fadeOut(400);
        this.time.delayedCall(400, () => this.scene.start('FuturisticScene'));
    }

    // ============================================================
    // OVERRIDE: No mostrar sprite del jugador local en esta escena
    // ============================================================
    update(time, delta) {
        // En el selector de épocas NO hay movimiento del jugador local,
        // solo actualizamos la posición de otros jugadores
        if (window.multiplayer) {
            window.multiplayer.update(this, delta);
        }
    }
}

// ============================================================
// ESCENA 5: ÉPOCA HISTÓRICA — Limpia, con fondos animados
// ============================================================
class EpochScene extends BaseScene {
    constructor() { super('EpochScene'); }

    init(data) { this.epochData = data.epoch; }

    preload() {
        this.preloadCharacters();

        // ============================================================
        // CARGA DE FONDOS ANIMADOS (para épocas con animatedBg=true)
        // ============================================================
        // Formato de nombres: {prefix}_1.png, {prefix}_2.png, etc.
        // Ejemplo: era1300_bg_1.png, era1300_bg_2.png, era1300_bg_3.png
        // ============================================================
        if (this.epochData.animatedBg && this.epochData.bgPrefix) {
            const prefix = this.epochData.bgPrefix;
            // Carga hasta 10 frames (ajusta según necesites)
            // Si no existe la textura, Phaser la ignora silenciosamente
            for (let i = 1; i <= 20; i++) {
                this.load.image(`${prefix}_${i}`, `assets/backgrounds/${prefix}_${i}.png`);
            }
        }
        // ============================================================
        // Para épocas SIN fondo animado, carga imagen estática:
        // this.load.image('mesopotamia_bg', 'assets/backgrounds/mesopotamia.png');
        // this.load.image('egipto_bg', 'assets/backgrounds/egipto.png');
        // etc.
        // ============================================================
        this.load.image('mesopotamia_bg', 'assets/backgrounds/mesopotamia.png');
        this.load.image('egipto_bg', 'assets/backgrounds/egipto.png');
        this.load.image('grecia_bg', 'assets/backgrounds/grecia.png');
        this.load.image('edadmedia_bg', 'assets/backgrounds/edadmedia.png');
    }

    create() {
        const color = this.epochData.color;
        this.cameras.main.setBackgroundColor(this.getEpochBgColor());

        // ============================================================
        // FONDO: Animado o estático
        // ============================================================
        if (this.epochData.animatedBg && this.epochData.bgPrefix) {
            this.createAnimatedBackground(this.epochData.bgPrefix);
        } else {
            // Fondo estático por época
            const bgKey = this.epochData.id + '_bg';
            if (this.textures.exists(bgKey)) {
                this.add.image(400, 225, bgKey).setDisplaySize(800, 450).setDepth(0);
            }
        }

        // ============================================================
        // TÍTULO E INFO (con fondo opaco para legibilidad)
        // ============================================================
        const titleBg = this.add.rectangle(400, 45, 500, 90, 0x000000, 0.75);
        titleBg.setDepth(5);
        titleBg.setStrokeStyle(1, parseInt(color.replace('#', '0x')));

        const title = this.add.text(400, 30, `${this.epochData.icon} ${this.epochData.name}`, {
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '14px', color, align: 'center'
        }).setOrigin(0.5);
        title.setShadow(0, 0, color, 10);
        title.setDepth(6);

        const period = this.add.text(400, 55, this.epochData.period, {
            fontFamily: '"Share Tech Mono", monospace', fontSize: '12px', color: '#8892a4'
        }).setOrigin(0.5);
        period.setDepth(6);

        const desc = this.add.text(400, 80, this.epochData.desc, {
            fontFamily: '"VT323", monospace', fontSize: '14px',
            color: '#e0e8f0', align: 'center', wordWrap: { width: 600 }
        }).setOrigin(0.5);
        desc.setDepth(6);

        // ============================================================
        // MÁQUINA DEL TIEMPO (funcionamiento normal)
        // ============================================================
        this.createTimeMachineDecor(700, 380);

        // ============================================================
        // JUGADOR
        // ============================================================
        this.player = this.createPlayer(100, 380);

        // ============================================================
        // BLOQUES DE COLISIÓN — Ejemplos (modifica según tu imagen)
        // ============================================================
        // this.createCollisionBlock(x, y, width, height);
        // Ejemplo: pared izquierda
        // this.createCollisionBlock(50, 225, 20, 450);
        // Ejemplo: pared derecha
        // this.createCollisionBlock(750, 225, 20, 450);
        // ============================================================

        this.machineZone = this.add.rectangle(700, 380, 60, 60, 0x00f5ff, 0);
        this.physics.add.existing(this.machineZone, true);

        this.machineIndicator = this.add.text(700, 340, '▼ REGRESAR', {
            fontFamily: '"Press Start 2P", monospace', fontSize: '8px', color: '#00f5ff'
        }).setOrigin(0.5).setVisible(false).setDepth(20);

        this.dialog = this.createDialogBox();
        this.showDialog(this.dialog,
            `Has llegado a ${this.epochData.name}.\n${this.getEpochInfo()}\nAcércate a la máquina del tiempo para regresar.`);
        this.dialogShown = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.physics.world.setBounds(50, 100, 700, 330);
        this.cameras.main.fadeIn(500);
        this.setupEpochMultiplayer();
    }

    // ============================================================
    // SISTEMA DE FONDO ANIMADO POR SECUENCIA DE IMÁGENES
    // ============================================================
    // INSTRUCCIONES PARA AGREGAR MÁS FRAMES:
    // 1. Guarda tus imágenes en assets/backgrounds/ con formato:
    //    {prefix}_1.png, {prefix}_2.png, {prefix}_3.png, etc.
    //    Ejemplo: era1300_bg_1.png, era1300_bg_2.png
    // 2. En EPOCHS_DATA, asegúrate de que animatedBg: true y bgPrefix correcto
    // 3. En preload(), ajusta el número en el for (i <= 10) si tienes más frames
    // 4. La velocidad de cambio se controla con bgFrameDuration (ms)
    // ============================================================
    createAnimatedBackground(prefix) {
        this.bgFrames = [];
        this.bgCurrentFrame = 0;
        this.bgFrameDuration = 200; // ms entre frames (ajustable)
        this.bgTimer = 0;

        // Detectar cuántos frames existen
        let frameCount = 0;
        for (let i = 1; i <= 10; i++) {
            if (this.textures.exists(`${prefix}_${i}`)) {
                frameCount++;
            } else {
                break;
            }
        }

        if (frameCount === 0) {
            // Fallback: fondo de color si no hay imágenes
            this.cameras.main.setBackgroundColor('#050508');
            return;
        }

        // Crear sprites para cada frame (todos ocultos excepto el primero)
        for (let i = 1; i <= frameCount; i++) {
            const frame = this.add.image(400, 225, `${prefix}_${i}`)
                .setDisplaySize(800, 450)
                .setDepth(0);
            frame.setVisible(i === 1);
            this.bgFrames.push(frame);
        }

        // Evento de tiempo para cambiar frames
        this.bgAnimationEvent = this.time.addEvent({
            delay: this.bgFrameDuration,
            callback: () => {
                if (this.bgFrames.length === 0) return;
                // Ocultar frame actual
                this.bgFrames[this.bgCurrentFrame].setVisible(false);
                // Avanzar al siguiente
                this.bgCurrentFrame = (this.bgCurrentFrame + 1) % this.bgFrames.length;
                // Mostrar nuevo frame
                this.bgFrames[this.bgCurrentFrame].setVisible(true);
            },
            loop: true
        });
    }

    setupEpochMultiplayer() {
        const epochSceneKey = 'EpochScene_' + (this.epochData ? this.epochData.id : 'unknown');
        if (window.multiplayer && !window.multiplayer.connected) {
            window.multiplayer.connect(this);
        } else if (window.multiplayer && window.multiplayer.connected) {
            if (window.multiplayer.currentScene !== epochSceneKey) {
                window.multiplayer.changeScene('world', epochSceneKey,
                    this.player ? this.player.x : 400,
                    this.player ? this.player.y : 400);
            }
        }
        this.chatInput = null;
        this.isChatOpen = false;

        this.chatKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.chatKey.on('down', () => { if (!this.isChatOpen) this.openChatInput(); });
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.escKey.on('down', () => { if (this.isChatOpen) this.closeChatInput(); });
    }

    getEpochBgColor() {
        const colors = {
            mesopotamia: '#1a1205', egipto: '#0c0a02', grecia: '#0a0908',
            edadmedia: '#090809', era1300: '#0b0904', era1700: '#060a0e',
            sigloxx: '#030d0a', sigloxxi: '#03040f'
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

    createTimeMachineDecor(x, y) {
        const base = this.add.ellipse(x, y + 20, 60, 20, 0x2a2a4a);
        base.setStrokeStyle(2, 0x00f5ff);
        const ring = this.add.ellipse(x, y, 50, 50);
        ring.setStrokeStyle(2, 0x00f5ff);
        const core = this.add.circle(x, y, 10, 0x00f5ff);
        core.setBlendMode('ADD');
        this.tweens.add({ targets: ring, angle: 360, duration: 5000, repeat: -1 });
        this.tweens.add({ targets: core, scale: [1, 1.2, 1], alpha: [0.7, 1, 0.7], duration: 1000, repeat: -1 });
    }

    update(time, delta) {
        if (!this.player || this.isChatOpen) return;

        const speed = 160;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown || this.wasd.left.isDown) vx = -speed;
        else if (this.cursors.right.isDown || this.wasd.right.isDown) vx = speed;
        if (this.cursors.up.isDown || this.wasd.up.isDown) vy = -speed;
        else if (this.cursors.down.isDown || this.wasd.down.isDown) vy = speed;

        this.player.body.setVelocity(vx, vy);
        this.updatePlayerSprite(this.player, vx, vy);

        if ((vx !== 0 || vy !== 0) && window.multiplayer?.connected) {
            window.multiplayer.sendMove(this.player.x, this.player.y);
        }

        if (window.multiplayer) {
            window.multiplayer.update(this, delta);
        }

        const distToMachine = Phaser.Math.Distance.Between(this.player.x, this.player.y, 700, 380);
        this.machineIndicator.setVisible(distToMachine < 60);

        if (distToMachine < 50 && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.returnToSelector();
        }

        if (this.dialogShown && Phaser.Input.Keyboard.JustDown(this.wasd.space)) {
            this.hideDialog(this.dialog);
            this.dialogShown = false;
        }
    }

    returnToSelector() {
        // Limpiar animación de fondo si existe
        if (this.bgAnimationEvent) {
            this.bgAnimationEvent.remove();
        }
        this.notifySceneChange('EpochSelectorScene');
        this.cameras.main.shake(100, 0.01);

        const flash = this.add.rectangle(400, 225, 800, 450, 0x00f5ff);
        flash.setBlendMode('ADD');
        flash.setAlpha(0);

        this.tweens.add({
            targets: flash, alpha: 0.8, duration: 200, yoyo: true,
            onComplete: () => {
                flash.destroy();
                this.cameras.main.fadeOut(400);
                this.time.delayedCall(400, () => this.scene.start('EpochSelectorScene'));
            }
        });
    }
}