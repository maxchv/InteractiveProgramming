/*jshint esversion: 6 */


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
};

let game = new Phaser.Game(config);
let count = 64;
let info;
let time = 1000;
let timer;

function preload() {
    this.load.image('sky', './img/sky.png');
    this.load.image('box', './img/box.png');
}

function hide() {
    this.visible = false;
    count--;
    info.text = 'Ящиков: ' + count;
}

function create() {
    this.add.image(400, 300, 'sky');

    for (let i = 0; i < count; i++) {
        let box = this.add.sprite(
            Math.random() * 800, 
            Math.random() * 600, 
            'box'
        );
        box.setInteractive();
        box.on('pointerdown', hide);
    }

    info = this.add.text(10, 10, 'Ящиков: ' + count, { fontSize: 24, fontFamily: 'cursive' });

    timer = this.add.text(10, 50, 'Время: ' + time, { fontSize: 24, fontFamily: 'cursive' });
}

function update() {
    time -= 1;
    if(time <= 0) {
        this.add.text(250, 250, 'Game Over', { fontSize: 60, fontFamily: 'cursive' });
        this.scene.pause();
    }
    timer.setText("Время: " + time);
}