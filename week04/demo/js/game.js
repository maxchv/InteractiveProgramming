let config = {
    width: 800,
    heigth: 600,
    type: Phaser.AUTO,
    //backgroundColor: '#ffffff',
    scene: {
        preload,
        create,
        update
    }
};

let dog;

let game = new Phaser.Game(config);

function preload() {
    console.log('preload');
    this.load.image('dog', 'img/dog.png'); // загружаем изображение из папки img
}

function create() {
    console.log('create');
    dog = this.add.sprite(100, 100, 'dog'); // добавляем спрайт созданный из изображения dog
    dog.setScale(0.5); // уменьшаем размер спрайта в два раза
}

function update() {
    console.log("update");
    //console.dir(dog);
    dog.setX(dog.x + 1); 
    dog.setY(dog.y + 1);
}