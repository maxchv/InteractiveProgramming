function create() {


}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    scene: {
        create
    }
}

const game = new Phaser.Game(config)