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
let cursors;

function preload() {
    console.log('preload');
}

function create() {
    console.log('create');
    circle = this.add.circle(400, 300, 20, 0xFFFFFF);
    cursors = this.input.keyboard.createCursorKeys();

}

function update() {
    if(cursors.left.isDown) {
        circle.x -= 2;
    } else if(cursors.space.isDown) {
        circle.x = 400;
        circle.y = 300;
    }
    
}