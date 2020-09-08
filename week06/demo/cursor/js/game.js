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
};


let game = new Phaser.Game(config);

let circle;

function preload() {
    console.log('preload');
}

function create() {
    console.log('create');
    circle = this.add.circle(400, 300, 20, 0xFF0000);

}
function update() {

}