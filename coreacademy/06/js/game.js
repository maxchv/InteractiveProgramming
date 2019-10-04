// Create a create() function here:

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#a0a0dd",
  // Add in the scene information in the config here:
  scene: {
    create
  }

}

function create() {
  this.add.text(10, 10, "Game");
}

const game = new Phaser.Game(config)
