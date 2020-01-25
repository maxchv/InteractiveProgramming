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

    // 3.1 Загружаем набор спрайтов 'img/cave_exit.png' для выхода с размерами 60 х 70


    // 4.1 Загружаем набор спрайтов 'img/snowman.png' для врага с размерами 50 х 70


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


    // 1.7 Добавляем коллизию между игроком и платформой, игроком и миром


    // Курсор для управления игроком
    cursors = this.input.keyboard.createCursorKeys();

    // 3.2 В функции create() добавляем физический спрайт и сохраняем в переменной exit

    // 3.3 Добавляем анимацию для exit


    // 3.4 Добавляем коллизию с платформой


    // 3.5 Добавляем событие выигрыш при пересечении между exit и player

    // 3.6 Воспроизводим анимацию glow

    // 4.2 Создаем физический спрайт врага (enemy), добавляем коллизию с платформой и миром
	
    // 4.3 Добавляем анимацию для врага и запускаем ее


    // 4.4 При пересечении объекта игрока с врагом будем вызывать функцию gameOver

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

    
    let scaleChange = 1.1;
    // 4.7 Функция обратного вызова для увеличения врага 

}

// 3.7 Объявляем функцию win, которая будет выполнена при выигрыше


// 3.8 Реализуем функцию restart, которая будет выполнена при перезапуске игры


// 4.5 Добавляем функцию gameOver


function update() {
    // 2.1 Если переменна active равна true
    //      И если нажата правая кнопка на клавиатуре, то нужно 
    //              * установить скорость игрока в направлении оси x равную 350
    //              * воспроизвести анимацию через метод  player.anims.play('run', true)
   
            // 2.2 Если же нажата левая кнопка мыши, то 
                //    * установить скорость игрока в направлении оси x равную -350
                //    * воспроизвести анимацию через метод  player.anims.play('run', true)
      
            // 2.3 если не нажаты кнопки влево или вправо, о задаем скорость 0 и воспроизводим анимацию 'idle'

        // 2.4 Если player косается земли (платформы) и кнопка вверх или пробле нажаты, то задаем скорость 
        // в направлении оси у равную -800
       
}