const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    parent: 'game',
    scene: {
        preload,
        create,
        update
    },
    /* 1. Добавить настройки физики. Задать гравитацию по оси y = 200 */
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    }
};

const game = new Phaser.Game(config);

function preload() {
    /* 2. Загрузить изображения из bug_1.png, bug_2.png, bug_3.png, platform.png и codey.png из папки img */
    this.load.image('bug1', 'img/bug_1.png');
    this.load.image('bug2', 'img/bug_2.png');
    this.load.image('bug3', 'img/bug_3.png');
    this.load.image('platform', 'img/platform.png');
    this.load.image('codey', 'img/codey.png');
}

/* 3. Объявить глобальных переменных score = 0, scoreText, player, cursors, bugGenLoop и массив bugs = [] */
let score = 0;
let scoreText;
let player;
let cursors;
const bugs = [];
let bugGenLoop;

function create() {
    /* 4. создать спрайт `player` на основе изображения `codey.png` используя метод `this.physics.add.sprite`. Поместить спрайт в 
          локацию `x = 225`, `y = 450` */
    /* 5. Задать масштаб player равный 0.5 (уменьшить в 2 раза) через метод setScale() */
    /* 6. Задать коллизию с игровым миром для player через метод setColliderWorldBounds(true) */
    player = this.physics.add.sprite(225, 450, 'codey');
    player.setScale(0.5);
    player.setCollideWorldBounds(true);

    /* 7. Создаем статическую группу platforms через метод this.physics.add.staticGroup() */
    const platforms = this.physics.add.staticGroup();

    /* 8. Из статической группы создаем объект ground вызывая метод create()  */
    /* 9. Задаем масштаб ground через метод setScale(1, 0.3) */    
    /* 10. Обновляем объект ground через метод refreshBody() */
    const ground = platforms.create(225, 490, 'platform');
    ground.setScale(1, 0.3);
    ground.refreshBody();

    /* 11. Что бы игрок не проваливался вниз, а стоял на платформе добавляем коллизию 
           между player и ground через метод this.physics.add.collider */
    this.physics.add.collider(player, platforms);

    /* 12. Создаем курсор для управления объектом player */
    cursors = this.input.keyboard.createCursorKeys();

    //const bugs = this.physics.add.group();

    /* 14. Создаем таймер для генерирования жуков, который будет срабатывать каждые 200 мс */
    bugGenLoop = this.time.addEvent({
        delay: 200,
        callback: bugGen,
        callbackScope: this,
        loop: true
    });

    /* 16. Добавляем событие контакта между жуками и платформой используя метод this.physics.add.overlap()  */
    this.physics.add.overlap(bugs, platforms, bugDestroyHandler);

    /* 18. Добавляем событие контакта между игроком и жуками используя метод this.physics.add.overlap() */
    this.physics.add.overlap(player, bugs, gameOverHandler, null, this);

    /* 20. Добавляем счет */
    scoreText = this.add.text(195, 485, 'Score: 0', {
        fontSize: '15px',
        fill: '#000000'
    });
}

/* 15. Создаем функцию для создания жуков */
function bugGen() {
    const x = Math.random() * 450;
    bugs.push(this.physics.add.sprite(x, 10, 'bug1'));
}

/* 17. Добавить функцию, которая должна срабатывать при падении жука на пол */
function bugDestroyHandler(bug) {
    bug.destroy();
    score += 10;
    scoreText.setText(`Score: ${score}`);
}

/* 19. Добавить функцию, которая вызывается в конце игры */
function gameOverHandler() {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(180, 250, 'Game Over', {
        fontSize: '15px',
        fill: '#000000'
    });
    this.add.text(152, 270, 'Click to Restart', {
        fontSize: '15px',
        fill: '#000000'
    });

    this.input.on('pointerup', () => {
        score = 0;
        this.scene.restart();
    });
}

function update() {
    /* 13. Задать скорость по оси x для player через метод setVelocityX(0)
       Если нажата кнопка влево - задать скорость по оси х -160
       Если же вправо - то скорость по оси х 160 */
    player.setVelocityX(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    }
}