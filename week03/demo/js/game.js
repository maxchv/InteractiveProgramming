let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: {
        create
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
};


let game = new Phaser.Game(config);

function create() {
    this.add.text(50, 100, 'Hello Phaser.io');
    this.add.circle(100, 200, 50, 0xff0000);
}