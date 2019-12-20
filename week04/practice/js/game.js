
let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: {
        preload,
        create
    }
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', './img/sky.png');
    this.load.image('box', './img/box.png');
}

function create() {
    this.add.image(400, 300, 'sky');

    for (let i = 0; i < 64; i++) {
        let box = this.add.sprite(Math.random() * 800, Math.random() * 600, 'box');
        box.setInteractive();
        box.on('pointerdown', function (event) {
            console.log(this);
            this.visible = false;
        });
    }
}