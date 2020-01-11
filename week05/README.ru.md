# Неделя 5 - Работа с клавиатурой, массивы, моделирование перемещения объектов

<!-- Изучение основ работы с массивами в `JavaScript`, моделирование перемещения объектов в `JavaScript`, классическая аркадная игра "Pong"

1. Массивы
2. Вввод с клавиатуры
3. Движение
4. Коллизии и отскок
5. Управление скоростью -->

## Объект курсор (cursor)

На прошлой неделе мы рассматривали работу с клавиатурой через объект `input.keyboard` игровой сцены.

Но есть и другой способ обработать события связанные с клавиатурой предоставляет метод [`createCursorKeys()`](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html#createCursorKeys__anchor).

Этот метод создает объект [`CursorKeys`](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Input.Keyboard.html#.CursorKeys) через который мы можем получить доступ к наиболее часто используемым клавишам (`UP`, `DOWN`, `LEFT`, `RIGHT`, `SHIFT`, и `SPACE`).

Мы можем сохранить этот объект в глобальной переменной `cursor` для того, чтобы проверять в методе `update()` какая была нажата клавиша.

```JavaScript
let cursor; // объект курсор
let circle;

function create() {
  circle = this.add.circle(50, 50, 20, 0xFF0000);
  cursors = this.input.keyboard.createCursorKeys(); // создаем объект-курсор
}

function update() {
  if (cursors.left.isDown) {
    // перемещаем круг влево
    circle.x -= 3;
  }
}

const config = {
  scene: {
    create,
    update
  }
};

const game = new Phaser.Game(config);
```

В примере выше мы создали переменную `cursors` для сохранения объекта, возвращаемого методом `.createCursorKeys()` из `this.input.keyboard` внутри функции `create()`.

В функции `update()` теперь делаем проверку нажата ли кнопка на клавиатуре **стрелка влево**: `cursors.left.isDown`.
В случае, если кнопка **стрелка влево** нажата, то перемещаем круг налево на 3 пикселя.

Практическое задание: управлять курсором игровым объектом на сцене

## Физика

Для правильного определения столкновений нам необходима физика, и в этом уроке мы покажем, что есть у Phaser на этот счёт, продемонстрировав это на простом примере.

В `Phaser 3` есть три разных физических движка: `Arcade Physics`, `Impact Physics` и `Matter.js Physics`.

Мы будем использовать `Arcade Physics`, потому что нам не нужны сложные геометрические вычисления.

Для добавления физики необходимо в настройках игры добавить объект `phisics` в котором указать атрибут `default` со значением `'acade'`:

```JavaScript
let config = {
    ...
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: false
        },
    }
};
```

Атрибут `gravity` позволяет задать гравитацию, а `debug` управлять режимом отладки.

При добавлении игровых спрайтов в методе `create()` игровой сцены теперь используем объект [`phisics`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html):

```JavaScript
function create() {
    player = this.physics.add.sprite(400, 600, 'paddle');
    ...
}
```

Спрайт с физическими свойствами обладает дополнительными [методами](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html), например, [`setVelocityX()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setVelocityX__anchor) и [`setVelocityY()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setVelocityY__anchor), которые позволяют задавать скорость спрайта по оси `x` и `y`:

```JavaScript
function update() {
    player.setVelocityX(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-350);
    } else if (cursors.right.isDown) {
        player.setVelocityX(350);
    }
}
```

Для того, что бы спрайт был в пределах игровой сцены используется метод [`secCollideWorldBounds()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setCollideWorldBounds__anchor) для спрайта. В этом случае игровой объект будет иметь коллизию с игровым миром.

```JavaScript
  player.setCollideWorldBounds(true);
```

В случае, если одна из границ, например, нижняя, не должны быть препядствием для спрайта, то отключить это можно через [команду](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Physics.Arcade.html#.CheckCollisionObject)

```JavaScript
  this.physics.world.checkCollision.down = false;
```

Если необходимо что бы спрайт отскакивал от границ сцены и других спрайтов, то это необходимо задать через метод [`setBounce()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setBounce__anchor) спрайта:

```JavaScript
  ball.setBounce(1, 1);
```

Бывает нужно что бы спрайт взаимодействовал физически с другими спрайтами, но при этом не перемещался при взаимодействии.
Для этого используется метод [`setImmovable()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setImmovable__anchor)

```JavaScript
  player.setImmovable(true);
```

Для определения момента коллизии спрайтов изспользуется метод [`collider()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#collider__anchor) объекта `phisics.add` сцены:

```JavaScript
  this.physics.add.collider(ball, brick, hitBrick, null, this);
```

Первым и вторым аргументом метода `collider()` передаются взаимодействующие спрайты, третьим передается функция обратного вызова, которая сработает в момент коллизии:

```JavaScript
function hitBrick(ball, brick) {
    brick.disableBody(true, true);
}
```

Метод [`disableBody()`](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#disableBody__anchor) в функции `hitBrick()` позволяет удалить объект с игровой сцены.


![Видео занятия](https://youtu.be/qsfgjVJaY0M)
<!-- Пример: <http://www.codeskulptor.org/#user4-PgyXog4HlK-57.py>

Tutorial: <https://stackabuse.com/introduction-to-phaser-3-building-breakout/> -->
