
// 1. Объявить функцию preload
  // 1.1 Загрузить изображение по адресу https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png и задатья тег 'codey'
  
// 2. Объявить функцию preload
  // 2.1 Добавить спрайт из загруженного объекта 'codey'

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