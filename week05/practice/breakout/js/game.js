let config = {
    width: 800,
    heigth: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: {
        preload,
        create,
        update
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    // 1. Добавить настройки физики в config
};


let game = new Phaser.Game(config);

// 2. Объявить глобальные переменные player, ball, cursors

function preload() {
    // 3. в функции preload через this.load.image загрузить изображения ball.png, paddle.png, brick1.png

}

function create() {

    // 4. создать спрайты на основе загруженных изображений используя метод this.physics.add.sprite 


    // 5. создать объект cursors для управления объектом paddle

    // 6. задать коллизию с миром через метод setCollideWorldBounds() для спрайтов ball и paddle


    // 7.Через метод setBouce(1,1) задать осткакивание мяча (ball)

}



function update() {
    // 8. реализовать управление paddle через кнопки влево (left) вправо right()
    //    для изменения положения спрайта использовать методы setVelocityX()

    // 9. реализовать начальное движение мяча при нажатии кнопки пробел (space)

}