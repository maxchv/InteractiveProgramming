let config = {
    width: 450,
    heigth: 550,
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
    
    physics:{
        default:'arcade',
        arcade:{
            gravity: {
                y: 100
            },
            debug: false
        },
    }
};


let game = new Phaser.Game(config);


let player;
let cursors;
let snowflakes = []; // массив снежинок
let timer;


function preload() {    
    this.load.image('codey','img/codey.png');
    this.load.image('snowflake','img/snowflake.png');
    this.load.image('platform','img/platform.png');
}

function create() {
    player = this.physics.add.sprite(225, 400,'codey');

    let platform = this.physics.add.staticGroup(); // создать статическую группу спрайтов
    let ground = platform.create(225, 490, 'platform'); // добавляем первый спрайт в группу
    ground.setScale(1, 0.3); // уменьшаю платформу по оси y (высоте) до 30%
    ground.refreshBody(); // обновить границы платформы после масштабирования
    
    // физика игрока
    this.physics.add.collider(ground, player);

    // добавляем снежинку

    timer = this.time.addEvent({
        delay: 1000, // время срабатывания таймера - 200 мс
        callback: addSnowflake, // функция, которая будет вызываться каждые 200 мс
        callbackScope: this,
        loop: true        
    });
    
    // физика снежинки
    this.physics.add.overlap(snowflakes, platform, destorySnowflake);

    cursors=this.input.keyboard.createCursorKeys();

    player.setCollideWorldBounds(true);

    this.input.on('pointerdown', pause, this);
}

function pause() {
    this.physics.pause();
}

function addSnowflake() {
    let x = Math.floor(Math.random() * config.width);
    let sf = this.physics.add.sprite(x, 10,'snowflake');
    sf.setScale(0.1);
    snowflakes.push(sf);
}

function destorySnowflake(sf) {
    sf.destroy();
}


function update() {
    player.setVelocityX(0);
    if (cursors.right.isDown){
        player.setVelocityX(160);        
    } else if(cursors.left.isDown) {
        player.setVelocityX(-160);
    }
}