const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    parent: 'game',
    scene: {
        preload,
        create,
        update
    },
    
};

const game = new Phaser.Game(config);

function preload() {
    /* 2. Загрузить изображения из bug_1.png, bug_2.png, bug_3.png, platform.png и codey.png из папки img */
    
}

/* 3. Объявить глобальных переменных score = 0, scoreText, player, cursors, bugGenLoop и массив bugs = [] */


function create() {
    /* 4. создать спрайт `player` на основе изображения `codey.png` используя метод `this.physics.add.sprite`. Поместить спрайт в 
          локацию `x = 225`, `y = 450` */
    /* 5. Задать масштаб player равный 0.5 (уменьшить в 2 раза) через метод setScale() */
    /* 6. Задать коллизию с игровым миром для player через метод setColliderWorldBounds(true) */


    /* 7. Создаем статическую группу platforms через метод this.physics.add.staticGroup() */
    
    /* 8. Из статической группы создаем объект ground вызывая метод create()  */
    /* 9. Задаем масштаб ground через метод setScale(1, 0.3) */    
    /* 10. Обновляем объект ground через метод refreshBody() */
    
    /* 11. Что бы игрок не проваливался вниз, а стоял на платформе добавляем коллизию 
           между player и ground через метод this.physics.add.collider */
    
    /* 12. Создаем курсор для управления объектом player */
    
    /* 14. Создаем таймер для генерирования жуков, который будет срабатывать каждые 200 мс */
    
    /* 16. Добавляем событие контакта между жуками и платформой используя метод this.physics.add.overlap()  */
    
    /* 18. Добавляем событие контакта между игроком и жуками используя метод this.physics.add.overlap() */
    
    /* 20. Добавляем счет */
}

/* 15. Создаем функцию для создания жуков */

/* 17. Добавить функцию, которая должна срабатывать при падении жука на пол */

/* 19. Добавить функцию, которая вызывается в конце игры */

function update() {
    /* 13. Задать скорость по оси x для player через метод setVelocityX(0)
       Если нажата кнопка влево - задать скорость по оси х -160
       Если же вправо - то скорость по оси х 160 */
}