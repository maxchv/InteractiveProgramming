let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    parent: 'guess-number',
    width: 800,
    height: 600,
    scene: gameScene
};

let game = new Phaser.Game(config);

gameScene.preload = function preload() {
    // this.load.image("btnRange100", "./assets/button_range100.png");
}

/**
 * # template for "Stopwatch: The Game"

# define global variables


# define helper function format that converts time
# in tenths of seconds into formatted string A:BC.D
def format(t):
    pass
    
# define event handlers for buttons; "Start", "Stop", "Reset"


# define event handler for timer with 0.1 sec interval


# define draw handler

    
# create frame


# register event handlers


# start frame


# Please remember to review the grading rubric

 */

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
        } else if(event.key == 'Backspace')  {
            if(inputNumber.text) {
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