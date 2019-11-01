let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: gameScene,
    scale: {
        // Center the game canvas both horizontally within the parent
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
};

let game = new Phaser.Game(config);

gameScene.preload = function preload() {
    this.load.image("btnRange100", "./assets/button_range100.png");
    this.load.image("btnRange100Down", "./assets/button_range100_down.png");
    this.load.image("btnRange1000", "./assets/button_range1000.png");
    this.load.image("btnRange1000Down", "./assets/button_range1000_down.png");
}

/**
 * # template for "Guess the number" mini-project
# input will come from buttons and an input field
# all output for the game will be printed in the console



# helper function to start and restart the game
def new_game():
    # initialize global variables used in your code here

    # remove this when you add your code    
    pass


# define event handlers for control panel
def range100():
    # button that changes the range to [0,100) and starts a new game 
    
    # remove this when you add your code    
    pass

def range1000():
    # button that changes the range to [0,1000) and starts a new game     
    
    pass
    
def input_guess(guess):
    # main game logic goes here	
    
    # remove this when you add your code
    pass

    
# create frame


# register event handlers for control elements and start frame


# call new_game 
new_game()


# always remember to check your completed program against the grading rubric

 */

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

    this.add.text(50, 240, "Enter a guess:", { fontFamily: '"Roboto Condensed"', fontSize: '18pt' });
    const inputNumber = this.add.text(210, 240, "", { fontFamily: '"Roboto Condensed"', fontSize: '18pt' });

    this.addButton({ x: 150, y: 100, texture: 'btnRange100', textureDown: 'btnRange100Down', callback: range100 });
    this.addButton({ x: 150, y: 170, texture: 'btnRange1000', textureDown: 'btnRange1000Down', callback: range1000 });

    this.input.keyboard.on('keydown', (event) => {
        console.log(event.key);
        if (event.key >= '0' && event.key <= '9' && inputNumber.text.length < 3) {
            inputNumber.setText(inputNumber.text + event.key);
        } else if (event.key == 'Backspace') {
            if (inputNumber.text) {
                inputNumber.setText(inputNumber.text.substr(0, inputNumber.text.length - 1));
            }
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