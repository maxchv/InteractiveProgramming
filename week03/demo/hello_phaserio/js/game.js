let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: gameScene
};

let game = new Phaser.Game(config);

gameScene.preload = function preload() {
    this.load.image("btnRange100", "./assets/button_range100.png");
    this.load.image("btnRange100Down", "./assets/button_range100_down.png");
    this.load.image("btnRange1000", "./assets/button_range1000.png");
    this.load.image("btnRange1000Down", "./assets/button_range1000_down.png");
}

let range = 100;
let secretNumber;
let remainingGuesses;
let message;
let message2;

function init() {
    console.log(`New game. Ragne is from 0 to ${range}`);
    secretNumber = Phaser.Math.Between(0, range);
    console.log(`Secret number ${secretNumber}`);
    remainingGuesses = Math.ceil(Math.log2(range));
    console.log(`Number of remaining guesses is  ${remainingGuesses}`);
    message = `New game [0, ${range})`;
}

function range100() {
    range = 100;
    message2 = '';
    init();
}

function range1000() {
    range = 1000;
    message2 = '';
    init();
}

function getInput(guess) {
    let g = parseInt(guess);
    console.log(`Guess was ${guess}`);
    remainingGuesses--;
    message = `Number of remaining guesses is ${remainingGuesses}`;
    if (remainingGuesses > 0) {
        if (g > secretNumber) {
            message2 = 'Lower!';
            console.log('Lower!');
        } else if (g < secretNumber) {
            message2 = "Higher!";
            console.log('Higher!');
        } else {
            message2 = "Correct!";
            console.log('Correct!');
            init();
        }
    } else {
        message2 = "You are looser";
        console.log('You did not guess secret number.');
        console.log('Secret number was ' + secretNumber);
        init();
    }
}

gameScene.addButton = function (config) {
    const btn = this.add.image(config.x, config.y, config.texture);
    btn.setInteractive();
    btn.on('pointerdown', function (event) {
        this.setTexture(config.textureDown);
        config.callback();
    });
    btn.on('pointerup', function (event) {
        this.setTexture(config.texture);
    });
}

gameScene.create = function create() {
    font = { fontFamily: '"Roboto Condensed"', fontSize: '18pt', color: 'lightgreen' };
    this.infoMessage = this.add.text(400, 90, '', font);
    this.infoMessage2 = this.add.text(400, 150, '', font);

    const inputNumber = this.add.text(50, 240, "", { fontFamily: '"Roboto Condensed"', fontSize: '18pt' });

    this.addButton({ x: 150, y: 100, texture: 'btnRange100', textureDown: 'btnRange100Down', callback: range100 });
    this.addButton({ x: 150, y: 170, texture: 'btnRange1000', textureDown: 'btnRange1000Down', callback: range1000 });

    this.input.keyboard.on('keydown', (event) => {
        if (event.key >= '0' && event.key <= '9') {
            inputNumber.setText(inputNumber.text + event.key);
        } else if (event.key == 'Enter') {
            getInput(inputNumber.text);
            inputNumber.setText('');
        }
    });
    init();
}

gameScene.update = function () {
    this.infoMessage.setText(message);
    this.infoMessage2.setText(message2);
}