function create() {

  // Укажите название вашей игры вместо My Game
  this.add.text(50, 100, "My Game", {
    font: "40px Times New Roman",
    fill: "#ffa0d0"
  });

  // Замените by ItStep на ваше имя!
  this.add.text(130, 300, "by Itstep", {
    font: "20px Times New Roman",
    fill: "#ffa0d0"
  });
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#5f2a55",
  scene: {
    create
  }
};

const game = new Phaser.Game(config);