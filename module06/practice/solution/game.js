let config = {
    width: 800,
    heigth: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: {
        preload,
        create,
        update
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    // 1. Добавить настройки физики в config
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: true
        },
    }
};


let game = new Phaser.Game(config);

// 2. Объявить глобальные переменные player, ball, cursors
let player;
let ball;
let cursors;

function preload() {
    // 3. в функции preload через this.load.image загрузить изображения ball.png, paddle.png, brick1.png
    this.load.image('ball', 'img/ball.png');
    this.load.image('paddle', 'img/paddle.png');
    this.load.image('brick1', 'img/brick1.png');
    this.load.image('brick2', 'img/brick2.png');
    this.load.image('brick3', 'img/brick3.png');
}

function create() {

    // 4. в фнкции create() создать спрайты на основе загруженных изображений используя метод this.physics.add.sprite 
    player = this.physics.add.sprite(400, 600, 'paddle');

    ball = this.physics.add.sprite(400, 565, 'ball');

    brick1 = this.physics.add.sprite(100, 100, 'brick1');

    // 5. в фнкции create() создать объект cursors для управления объектом paddle
    cursors = this.input.keyboard.createCursorKeys();

    // 6. в фнкции create() задать коллизию с миром через метод setCollideWorldBounds() для спрайтов ball и paddle
    player.setCollideWorldBounds(true);
    ball.setCollideWorldBounds(true);

    // 7. в фнкции create() Через метод setBouce(1,1) задать осткакивание мяча (ball)
    ball.setBounce(1, 1);

    this.physics.world.checkCollision.down = false;

    this.physics.add.collider(ball, player, hitPlayer, null, this);
    this.physics.add.collider(ball, brick1, hitBrick, null, this);

    player.setImmovable(true);
}

function hitPlayer(ball, player) {

}

function hitBrick(ball, brick) {
    brick.disableBody(true, true);
}

function update() {
    // 8. В функции update() реализовать управление paddle через кнопки влево (left) вправо right()
    //    для изменения положения спрайта использовать методы setVelocityX()

    // 9. В функции update() реализовать начальное движение мяча при нажатии кнопки пробел (space)
    player.setVelocityX(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-350);
    } else if (cursors.right.isDown) {
        player.setVelocityX(350);
    }

    if (cursors.space.isDown) {
        ball.setVelocityY(-200);
        ball.setVelocityX(150);
    }
}