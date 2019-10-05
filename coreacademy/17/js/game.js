function preload() {
    this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
    this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
    this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png')
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png')
}

const gameState = {}

function create() {
    gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);

    const platforms = this.physics.add.staticGroup();

    platforms.create(225, 510, 'platform');

    gameState.player.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.player, platforms);

    // Create your cursor object below: 
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Add your conditional statements below:
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
};

const game = new Phaser.Game(config);