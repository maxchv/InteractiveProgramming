let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {
    console.log('preload');
    this.load.image("logo", "./assets/logo.png");
}

function clickHandler(logo) {
    console.log("clicked");
}

function create() {
    console.log('created');
    const logo = this.add.image(400, 150, "logo");
    logo.setInteractive();
    logo.on('clicked', clickHandler, this);

    //  If a Game Object is clicked on, this event is fired.
    //  We can use it to emit the 'clicked' event on the game object itself.
    this.input.on('gameobjectup', function (pointer, gameObject) {
        gameObject.emit('clicked', gameObject);
    }, this);
}



function update() {
    console.log('update');
}