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
/* 1.2 Объявить глобальные переменные: player, enemy, exit, active
Переменной `active` присвоить значение `true` */
let player;
let enemy;
let exit;

let active = true; // если true, то играть можно (не конец игры)

// Массив координат платформ используется в функции create()
const positions = [{
    x: 50,
    y: 575
}, {
    x: 250,
    y: 575
}, {
    x: 450,
    y: 575
}, {
    x: 400,
    y: 380
}, {
    x: 100,
    y: 200
}, ];

function preload() {
    this.load.image('cave', 'img/cave_background.png');
    this.load.image('platform', 'img/platform.png');

    /*   
    1.3 Загружаем набор спрайтов. Для этого  в файле game.js внутри метода preload() вызвать метод this.load.spritesheet()     
    в который передать следующие аргументы:
        * 'codey'
        * 'img/codey_sprite.png'
        * { frameWidth: 72, frameHeight: 90 }
    */
    this.load.spritesheet('codey', 'img/codey_sprite.png', {
        frameWidth: 72,
        frameHeight: 90
    });

    // 3.1 Загружаем набор спрайтов 'img/cave_exit.png' для выхода с размерами 60 х 70
    this.load.spritesheet('exit', 'img/cave_exit.png', {
        frameWidth: 60,
        frameHeight: 70
    });

    // 4.1 Загружаем набор спрайтов 'img/snowman.png' для врага с размерами 50 х 70
    this.load.spritesheet('snowman', 'img/snowman.png', {
        frameWidth: 50,
        frameHeight: 70
    });
}

function create() {
    // Задаем фоновую картинку
    this.add.image(0, 0, 'cave').setOrigin(0, 0);

    // Создаем группу платформ
    const platforms = this.physics.add.staticGroup();
    // Добавляем платформы
    for (let i = 0; i < positions.length; i++) {
        platforms.create(positions[i].x, positions[i].y, 'platform');
    }

    /*
    1.4 Создаем физический спрайт игрока.
       Для этого в методе create() присвоить переменной player значение возвращаемое методом
       this.physics.add.sprite() при вызове со следующими аргументами:
       * 255
       * 500
       * 'codey'
    */
    player = this.physics.add.sprite(55, 500, 'codey');

    /*
    1.5 Создаем анимацию при передвижении игрока. Для этого внутри метода create(), 
       вызываем this.anims.create() и передаем туда следующий объект: 
        {
            key: 'run',
            frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        }
    */
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('codey', {
            start: 0,
            end: 3
        }),
        frameRate: 5,
        repeat: -1
    });

    /*
    1.6 Создаем анимацию когда игрок стоит. Для этого внутри метода create(), 
       вызываем this.anims.create() и передаем туда следующий объект: 
        {
            key: 'idle',
            frames: this.anims.generateFrameNumbers('codey', {
                start: 4,
                end: 5
            }),
            frameRate: 5,
            repeat: -1
        }
    */
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('codey', {
            start: 4,
            end: 5
        }),
        frameRate: 5,
        repeat: -1
    });

    // 1.7 Добавляем коллизию между игроком и платформой, игроком и миром
    this.physics.add.collider(player, platforms);
    player.setCollideWorldBounds(true);

    // Курсор для управления игроком
    cursors = this.input.keyboard.createCursorKeys();

    // 3.2 В функции create() добавляем физический спрайт и сохраняем в переменной exit
    exit = this.physics.add.sprite(50, 142, 'exit');

    // 3.3 Добавляем анимацию для exit
    this.anims.create({
        key: 'glow',
        frames: this.anims.generateFrameNumbers('exit', {
            start: 0,
            end: 5
        }),
        frameRate: 4,
        repeat: -1
    });

    // 3.4 Добавляем коллизию с платформой
    this.physics.add.collider(exit, platforms);


    // 3.5 Добавляем событие выигрыш при пересечении между exit и player
    this.physics.add.overlap(player, exit, win, null, this);

    // 3.6 Воспроизводим анимацию glow
    exit.anims.play('glow', true);

    // 4.2 Создаем физический спрайт врага (enemy), добавляем коллизию с платформой и миром
    enemy = this.physics.add.sprite(480, 300, 'snowman');
    this.physics.add.collider(enemy, platforms);
    enemy.setCollideWorldBounds(true);

    // 4.3 Добавляем анимацию для врага и запускаем ее
    this.anims.create({
        key: 'snowmanAlert',
        frames: this.anims.generateFrameNumbers('snowman', {
            start: 0,
            end: 3
        }),
        frameRate: 4,
        repeat: -1
    });
    enemy.anims.play('snowmanAlert', true);

    // 4.4 При пересечении объекта игрока с врагом будем вызывать функцию gameOver
    this.physics.add.overlap(player, enemy, gameOver, null, this);

    /*
    4.6 Добавляем движение врага туда-сюда
    Для этого присвоим значению enemy.move результат вызова метода this.tweens.add().
    В метод передаем объект со следующими атрибутами:
        targets: gameState.enemy.
        moves: 320 x-coordinate.
        ease: 'Linear'.
        duration: 1800 milliseconds.
        repeat: -1
        yoyo: true
    */
    enemy.move = this.tweens.add({
        targets: enemy,
        x: 320,
        ease: 'Linear',
        duration: 1800,
        repeat: -1,
        yoyo: true,
        onRepeat: growSnowman
    });

    
    let scaleChange = 1.1;
    // 4.7 Функция обратного вызова для увеличения врага 
    function growSnowman() {
        if (scaleChange < 4) {
            scaleChange += 0.3;
            enemy.setScale(scaleChange);
            enemy.y -= 15;
        }
    }
}

// 3.7 Объявляем функцию win, которая будет выполнена при выигрыше
function win() {
    this.add.text(150, 50, '        Ты выиграл!\n Клик для игры с начала', {
        fontFamily: 'Arial',
        fontSize: 26,
        color: '#ffffff'
    });
    this.physics.pause();
    active = false;
    this.anims.pauseAll();
    this.input.on('pointerup', restart.bind(this));
}

// 3.8 Реализуем функцию restart, которая будет выполнена при перезапуске игры
function restart() {
    active = true;
    this.anims.resumeAll();
    this.scene.restart();
}

// 4.5 Добавляем функцию gameOver
function gameOver() {
    this.add.text(150, 50, '        Ты лузер!\n Клик для игры с начала', {
        fontFamily: 'Arial',
        fontSize: 26,
        color: '#ffffff'
    });
    this.physics.pause();
    active = false;
    this.anims.pauseAll();
    enemy.move.stop();
    this.input.on('pointerup', restart.bind(this));
}

function update() {
    // 2.1 Если переменна active равна true
    //      И если нажата правая кнопка на клавиатуре, то нужно 
    //              * установить скорость игрока в направлении оси x равную 350
    //              * воспроизвести анимацию через метод  player.anims.play('run', true)
    if (active) {
        if (cursors.right.isDown) {
            player.setVelocityX(350);            
            player.anims.play('run', true);
            player.flipX = false;
            // 2.2 Если же нажата левая кнопка мыши, то 
                //    * установить скорость игрока в направлении оси x равную -350
                //    * воспроизвести анимацию через метод  player.anims.play('run', true)
        } else if (cursors.left.isDown) {           
            player.setVelocityX(-350);
            player.anims.play('run', true);
            player.flipX = true;
        } else {
            // 2.3 если не нажаты кнопки влево или вправо, о задаем скорость 0 и воспроизводим анимацию 'idle'
            player.setVelocityX(0);
            // воспроизводим анимацию при простое
            player.anims.play('idle', true);
        }

        // 2.4 Если player косается земли (платформы) и кнопка вверх или пробле нажаты, то задаем скорость 
        // в направлении оси у равную -800
        if ((cursors.space.isDown || cursors.up.isDown) && player.body.touching.down) {
            player.setVelocityY(-800);
        }
    }
}