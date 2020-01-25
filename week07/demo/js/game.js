let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 600,
    parent: 'game',
    scene: {
        preload,
        create,
        update
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1500
            },
            debug: false,
            enableBody: true
        },
    }
};


let game = new Phaser.Game(config);

let cursors;
let player;
let snowman;

function preload() {
    this.load.image('cave', 'img/cave_background.png');
    this.load.image('platform', 'img/platform.png');

    // загрузить спрайты для анимации
    this.load.spritesheet('player', 'img/codey_sprite.png', {
        frameWidth: 72,
        frameHeight: 90
    });

    this.load.spritesheet('snowman', 'img/snowman.png', {
        frameWidth: 50,
        frameHeight: 70
    });
}


function create() {
    // Задаем фоновую картинку
    this.add.image(0, 0, 'cave').setOrigin(0, 0);

    // создаем спрайт игрока
    player = this.physics.add.sprite(200, 400, 'player');
    // ограничиваем перемещение игрока сценой
    player.setCollideWorldBounds(true);   

    // создаем анамацию передвижения игрока
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player',
            {
                start: 0,
                end: 3
            }),
        frameRate: 5,
        repeat: -1
    });
    // анимация простоя
    this.anims.create({
        key: 'stay',
        frames: this.anims.generateFrameNumbers('player',
            {
                start: 4,
                end: 5
            }),
        frameRate: 5,
        repeat: -1
    });

    snowman = this.physics.add.sprite(330, 30, 'snowman');
    // ограничиваем перемещение снеговика сценой
    snowman.setCollideWorldBounds(true);   

    snowman.move = this.tweens.add({
        x: 500,
        targets: snowman,
        easy: 'Linear',
        duration: 1000,
        repeat: -1,
        yoyo: true
    }); 

    // Создаем группу платформ
    const platforms = this.physics.add.staticGroup();
    // Добавляем платформы
    platforms.create(400, 380, 'platform');
    platforms.create(50, 575, 'platform');
    platforms.create(250, 575, 'platform');
    platforms.create(450, 575, 'platform');

    // Добавляем коллизию между платформой и игроком/снеговиком
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(snowman, platforms);
    this.physics.add.collider(snowman, player);
    
    // создаем курсор для управления через клавиатуру
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.right.isDown) {
        player.setVelocityX(300);
        player.anims.play('run', true);
        player.flipX = false;
    } else if (cursors.left.isDown) {
        player.setVelocityX(-300);
        player.anims.play('run', true);
        player.flipX = true;
    } else {
        player.setVelocityX(0);
        player.anims.play('stay', true);
    }

    if ((cursors.space.isDown || cursors.up.isDown) && player.body.touching.down) {
        console.log();
        player.setVelocityY(-800);
    }

}