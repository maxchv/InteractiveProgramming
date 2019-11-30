// 1. Объявить функцию preload, загрузить изображение по адресу 
// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg
// задать тег sky

// 2. Объявить функцию create, задать фон используя загруженное изображение sky

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#5f2a55",
  scene: {
    create,
    preload
  }
}

const game = new Phaser.Game(config)