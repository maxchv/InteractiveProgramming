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

function preload() {
    this.load.image('cave', 'img/cave_background.png');

    // загрузить спрайты для анимации
    this.load.spritesheet('player', 'img/codey_sprite.png', {
        frameWidth: 72,
        frameHeight: 90
    });
}


function create() {
    // Задаем фоновую картинку
    this.add.image(0, 0, 'cave').setOrigin(0, 0);

    player = this.physics.add.sprite(300, 30, 'player');
    // ограничиваем перемещение сценой
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    // создаем анамацию передвижения
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
   
}

function update() {
    if(cursors.right.isDown) {
        player.setVelocityX(300);
        player.anims.play('run', true);
        player.flipX = false;
    } else if(cursors.left.isDown) {
        player.setVelocityX(-300);
        player.anims.play('run', true);
        player.flipX = true;
    } else {
        player.setVelocityX(0);
        player.anims.play('stay', true);
    }

    if((cursors.space.isDown || cursors.up.isDown)) {
        console.log( player.body.touching);
        player.setVelocityY(-200);
    }
       
}