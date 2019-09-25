
// # implementation of card game - Memory

let gameScene = new Phaser.Scene("Game");

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  scale: {
    // Center the game canvas both horizontally within the parent
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: gameScene
};

const game = new Phaser.Game(config);

var cards, moves, state, prev, prevprev, label, vals;

// helper function to initialize globals
function init() {
    cards = [];
    moves = 1;
    state = 0;
    prev = null;
    prevprev = null;
    label.setText("Moves = 0");
    vals = [];
    for(let j=0; j<2; j++){
      vals[i] = {'click': false, balue:value[i]}
    }
    random.shuffle(vals)
    for i in range(16):
        CARDS[i]={"click": False,    # it is exposed          
                  "value": vals[i]}
}

gameScene.preload = function () {
  
}


gameScene.create = function () {
  label = this.add.text(100, 100, "Text");
}


gameScene.update = function () {

}