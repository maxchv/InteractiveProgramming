function preload() {
    this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
    this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
    this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png')
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png')
}

const gameState = {
    // Add the score property below: 
    score: 0
};

function create() {
    gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);

    const platforms = this.physics.add.staticGroup();

    platforms.create(225, 510, 'platform');

    gameState.player.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.player, platforms);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    const bugs = this.physics.add.group();

    function bugGen() {
        const xCoord = Math.random() * 450;
        bugs.create(xCoord, 10, 'bug1');
    }

    const bugGenLoop = this.time.addEvent({
        delay: 100,
        callback: bugGen,
        callbackScope: this,
        loop: true,
    });

    // Displays initial Score: 0 text
    gameState.scoreText = this.add.text(195, 485, 'Score: 0', {
        fontSize: '15px',
        fill: '#000000'
    });

    this.physics.add.collider(bugs, platforms, function (bug) {
        bug.destroy();
        // Add your code below:
        gameState.score += 10;
        gameState.scoreText.setText(`Score: ${gameState.score}`);

    });
}

function update() {
    if (gameState.cursors.left.isDown) {
        gameState.player.setVelocityX(-160);
    } else if (gameState.cursors.right.isDown) {
        gameState.player.setVelocityX(160);
    } else {
        gameState.player.setVelocityX(0);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            enableBody: true,
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)