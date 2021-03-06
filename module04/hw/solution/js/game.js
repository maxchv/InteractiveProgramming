let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    },
    scale: {
        // Center the game canvas both horizontally within the parent
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
};


let game = new Phaser.Game(config);

function addButton(config) {
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

function preload() {
    this.load.image("btnRange100", "./assets/button_range100.png");
    this.load.image("btnRange100Down", "./assets/button_range100_down.png");
    this.load.image("btnRange1000", "./assets/button_range1000.png");
    this.load.image("btnRange1000Down", "./assets/button_range1000_down.png");
}

function create() {
    font = {
        fontFamily: '"Roboto Condensed"',
        fontSize: '18pt',
        color: 'lightgreen'
    };
    this.infoMessage = this.add.text(400, 90, '', font);
    this.infoMessage2 = this.add.text(400, 150, '', font);

    this.add.text(50, 240, "Enter a guess:", {
        fontFamily: '"Roboto Condensed"',
        fontSize: '18pt'
    });
    const inputNumber = this.add.text(210, 240, "", {
        fontFamily: '"Roboto Condensed"',
        fontSize: '18pt'
    });

    addButton.call(this, {
        x: 150,
        y: 100,
        texture: 'btnRange100',
        textureDown: 'btnRange100Down',
        callback: range100
    });
    addButton.call(this, {
        x: 150,
        y: 170,
        texture: 'btnRange1000',
        textureDown: 'btnRange1000Down',
        callback: range1000
    });

    this.input.keyboard.on('keydown', (event) => {
        console.log(event.key);
        if (event.key >= '0' && event.key <= '9' && inputNumber.text.length < 3) {
            inputNumber.setText(inputNumber.text + event.key);
        } else if (event.key == 'Backspace') {
            if (inputNumber.text) {
                inputNumber.setText(inputNumber.text.substr(0, inputNumber.text.length - 1));
            }
        } else if (event.key == 'Enter') {
            getInput(parseInt(inputNumber.text));
            inputNumber.setText('');
        }
    });
    newGame();
}

function update() {
    this.infoMessage.setText(message);
    this.infoMessage2.setText(message2);
}