let codey;

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function here
function update() {
  codey.x+=1;
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    // Include update here!
    update
	}
}

const game = new Phaser.Game(config)
