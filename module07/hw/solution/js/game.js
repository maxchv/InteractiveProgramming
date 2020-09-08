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

var cards, moves, state, prev, prevprev, label;

// helper function to initialize globals
function init() {
  moves = 0;
  state = 0;
  prev = null;
  prevprev = null;

  label.setText(`Moves: ${moves}`);

  let range = Phaser.Utils.Array.NumberArray;
  let shuffle = Phaser.Utils.Array.Shuffle;

  let vals = range(1, 8);
  vals = vals.concat(range(1, 8));
  // console.log(vals);

  // shuffle
  vals = shuffle(vals);
  // console.log(vals);

  if (cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].value = vals[i];
      cards[i].click = false;
      cards[i].shape.setVisible(true);
      cards[i].label.setText(`${vals[i]}`);
    }
  } else {
    cards = [];
    for (let i of vals) {
      cards.push({
        'click': false,
        'value': i
      })
    }
  }
  console.log(cards);
}

gameScene.preload = function () {}

gameScene.create = function () {

  label = this.add.text(50, 20, `Moves: ${moves}`, {
    fontSize: 40
  });

  init();

  this.add.text(580, 20, "Restart", {
    fontSize: 40
  }).setInteractive().on('pointerdown', () => init());

  let x, y;
  let height = this.sys.game.config.height;
  let width = this.sys.game.config.width;
  let cols, rows;
  cols = rows = Math.sqrt(cards.length);
  let xoffset = width / (cols + 1);
  let yoffset = height / (rows + 1);
  // console.log(width / (cols + 1));
  for (let i = 0; i < cols; i++) {
    x = i * xoffset + xoffset;
    //this.add.line(0, 0, x, 0, x, height, 0x00ff00).setOrigin(0, 0);
    for (let j = 0; j < rows; j++) {
      y = j * yoffset + yoffset;
      //this.add.line(0, 0, 0, y, width, y, 0x00ff00).setOrigin(0, 0);
      cards[i + j * rows].label = this.add.text(x, y, cards[i + j * rows].value, {
        fontSize: 80
      }).setOrigin(0.5);
    }
  }

  for (let i = 0; i < cols; i++) {
    x = i * xoffset + xoffset;
    for (let j = 0; j < rows; j++) {
      y = j * yoffset + yoffset;
      cards[i + j * rows].shape = this.add.rectangle(x, y, xoffset * 3. / 4, yoffset * 3. / 4, 0x0000cd, 1)
        .setOrigin(0.5)
        .setInteractive()
        .on('reverse', function (card, selected) {
          // console.log('reverse');
          if (card.click) {
            this.setVisible(false);
          } else {
            this.setVisible(true);
          }
        });
    }
  }

  this.input.on('gameobjectdown', (pointer, gameobject) => {
    const selected = cards.find(card => card.shape === gameobject);
    console.log(selected);
    if (selected) {
      selected.click = true;
      // console.log(state);
      if (state === 0) {
        state = 1;
      } else if (state === 1) {
        state = 2;
      } else {
        // console.log(prev.value);
        // console.log(prevprev.value);
        if (prev.value != prevprev.value) {
          prev.click = false;
          prevprev.click = false;
        }
        state = 1;
        moves += 1;
        label.setText(`Moves: ${moves}`);
      }
      prevprev = prev;
      prev = selected;

      for (let card of cards) {
        card.shape.emit('reverse', card, selected);
      }
    }
  });
}


gameScene.update = function () {

}