const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      debug: false,
    },
  }
};

const game = new Phaser.Game(config);

var player;
var platforms;
var cursors;
var score = 0;


function preload() {
  // Загрузка фоновой картинки
  this.load.image('sky', 'img/sky.png');
  // Загрузка платформы
  this.load.image('ground', 'img/platform.png');
  // Звезды
  this.load.image('star', 'img/star.png');
  // Бомбы
  this.load.image('bomb', 'img/bomb.png');
  // Игровой персонаж
  this.load.spritesheet('dude', 'img/dude.png', {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  // Задаем фон
  this.add.image(400, 300, 'sky');

  // Создаем статическую группу
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  // Добавляем игрока
  player = this.physics.add.sprite(100, 450, 'dude').setBounce(0.2).setCollideWorldBounds(true);

  // Анимация движения влево
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 0,
      end: 3
    }),
    frameRate: 10,
    repeat: -1
  });

  // Анимация поворота
  this.anims.create({
    key: 'turn',
    frames: [{
      key: 'dude',
      frame: 4
    }],
    frameRate: 20
  });

  // Анимация движения вправо
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 5,
      end: 8
    }),
    frameRate: 10,
    repeat: -1
  });

  // Курсор для управления
  cursors = this.input.keyboard.createCursorKeys();

  // Создаем звезды
  let stars = [];
  for (let i = 0; i < 11; i++) {
    let star = this.physics.add.sprite(12 + 70 * i, 0, 'star');
    star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    stars.push(star);
  }

  // Определяем взаимодействие между игроком и платформой
  this.physics.add.collider(player, platforms);
  // Между звездами и платформой
  this.physics.add.collider(stars, platforms);

  // Здесь должен быть ваш код...
    
}

function update() {
  if (cursors.left.isDown) {
    // Движение влево
    player.setVelocityX(-160);

    player.anims.play('left', true);
  } else if (cursors.right.isDown) { 
    // Движение вправо
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else {
    // Стоит
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  // Прыжок
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}

