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
    this.load.image('bug1', 'img/bug_1.png');
    this.load.image('bug2', 'img/bug_2.png');
    this.load.image('bug3', 'img/bug_3.png');
    this.load.image('platform', 'img/platform.png');
    this.load.image('codey', 'img/codey.png');
}

/* Объявить глобальных переменных score = 0, scoreText, player, cursors */
let score = 0;
let scoreText;
let player;
let cursors;

function create() {

    player = this.physics.add.sprite(225, 450, 'codey');
    player.setScale(0.5);
    player.setCollideWorldBounds(true);

    const platforms = this.physics.add.staticGroup();
    const ground = platforms.create(225, 490, 'platform');
    ground.setScale(1, 0.3);
    ground.refreshBody();

    scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000'});

    this.physics.add.collider(player, ground);

    cursors = this.input.keyboard.createCursorKeys();

    const bugs = this.physics.add.group();

    function bugGen() {
        const x = Math.random() * 450;
        bugs.create(x, 10, 'bug1');
    }

    const bugGenLoop = this.time.addEvent({
        delay: 200,
        callback: bugGen,
        callbackScope: this,
        loop: true,
    });

    this.physics.add.overlap(bugs, platforms, function (bug) {
        bug.destroy();
        score += 10;
        scoreText.setText(`Score: ${score}`);
    });

    this.physics.add.overlap(player, bugs, () => {
        bugGenLoop.destroy();
        this.physics.pause();
        this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: '#000000'});
        this.add.text(152, 270, 'Click to Restart', { fontSize: '15px', fill: '#000000'});

        // Add your code below:
        this.input.on('pointerup', () => {
            score = 0;
            this.scene.restart();
        });
    });
}

function update() {
    player.setVelocityX(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } 
}

