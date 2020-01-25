# Неделя 6 - Массивы, взаимодействие объектов, рестарт игры

<!-- Creating sprites that are affected by physics.
Creating groups of sprites affected by physics.
Creating groups of sprites NOT affected by physics.
Adding Colliders objects between sprites and groups of sprites.
Creating a loop to continuously execute a function.
Pausing physics.
Restarting a Scene. -->

## Массивы

**Массив** — это область памяти, где могут последовательно храниться несколько значений.
Для доступа к элементам массивов используются индексы.

Основные действия над массивами - добавление элементов, получение отдельных элементов, удаление элементов, перебор всех элементов.

Для добавления элементов в массив используется метод `push()`:

```JavaScript
let arr = []; // создание пустого массива

console.log(arr.length); // 0 элементов в массиве

arr.push(1); // добавление первого элемента

console.log(arr.length); // 1 элемент в массиве
```

Обратите внимание на атрибут `length`, которые позволяет получить размер массива.

Отдельный элемент массива можно получить по его индексу.
Обратите внимание, что первый элемент массива имеет индекс `0`, а последний - `arr.length - 1`:

```JavaScript
arr.push(2);

console.log(arr[0]); // отобразит 1
console.log(arr[1]); // отобразит 2
console.log(arr[2]); // отобразит undefined
```

Обратите внимание, что в предыдущем примере при обращении к несуществующему элементу массива по индексу, то возвращается значение `undefined`!

## Группа спрайтов

<!-- We’re gonna get that player sprite to land on some steady ground. -->
Нам необходимо что бі спрайт игрока приземлиться на какой-нибудь ровной площадке.

<!-- But first, we need to create a ground platform! -->
Но сначала нам нужно создать платформу!

<!-- This ground platform will not be affected by gravity but we want it to interact with the player sprite. Therefore, we can’t use `this.add.image()` like we do for our background image since images aren’t affected by physics and don’t interact with GameObjects. -->
На эту платформу гравитация не будет влиять, но она должна взаимодействовать со спрайтом игрока.
Поэтому мы не можем использовать `this.add.image()`, как для фонового изображения, поскольку изображения не зависят от физики и не взаимодействуют с объектами **GameObject**.

<!-- What we need is `this.physics.add.staticGroup()` to create a Group object which keeps track of our platforms. Group objects are used to create and maintain sprites in a group. In this case, we can use this Group object to create additional platforms: -->
Нам нужен метод `this.physics.add.staticGroup()` для создания объекта **Group**, который отслеживает наши платформы.
Групповые объекты используются для создания и поддержки спрайтов в группе.
В этом случае мы можем использовать этот объект **Group** для создания дополнительных платформ:

```JavaScript
function create() {
  const platforms = this.physics.add.staticGroup();
  platforms.create(320, 350, 'platform');
}
```

<!-- From the example above, we’ve created a static Group Object and saved it to the platforms variable. Our platforms won’t be affected by the game’s gravity. Then, we call `platforms.create()` with these 3 arguments: -->
В приведенном выше примере мы создали статический объект **Group** и сохранили его в переменной `platforms`.
На наши платформы не будет влиять гравитация игры.
Затем мы вызываем метод `platform.create()` с 3 аргументами:

<!-- * The first argument is the x-coordinate of the sprite’s center.
* The second argument is the y-coordinate of the sprite’s center.
* The last argument is the key of the sprite’s image. -->

* первый аргумент - это x-координата центра спрайта.
* второй аргумент - это y-координата центра спрайта.
* последний аргумент является ключом изображения спрайта.

## Таймер

<!-- Currently, our game creates a few enemy sprites and stops. But we could create a loop to consistently create more enemies to make the game more challenging. To implement this loop we can call `this.time.addEvent()` and pass in an object with specifications for how we want this loop to run. For instance: -->

Часто в игре необходимо с заданной периодичностью выполнять некий код. Например, создавать врагов или другие игровые объекты.
Для этого мы можем вызвать `this.time.addEvent()` и передать объект со спецификациями о том, что должно происходить и когда.

Например:

```JavaScript
let enemyGenLoop;

function create() {
  enemyGenLoop = this.time.addEvent({
    callback: generateEnemy,
    delay: 100,
    callbackScope: this,
    loop: true,
  })
}

function generateEnemy () {
  // Код для создания врагов
}
```

<!-- In our example, we accessed the Scene’s time property and called `.addEvent()` with an object representing the event we want called. That object has 4 keys that each provide different specifications: -->

В нашем примере мы получили доступ к свойству `time` объекта **Scene** и вызвали метод `.addEvent()` с объектом, представляющим событие, которое мы хотим вызвать.

Этот объект имеет 4 ключа, каждый из которых предоставляет различные спецификации:

<!-- * callback has a value of generateEnemy which means this event will call `generateEnemy()` function.
* delay has a value of `100`, which determines, in milliseconds, how long is the delay before executing the callback again.
* callbackScope has a value of this, which selects the Scene this event is used in.
* loop has a value of true, which means that this event will continue to execute until we remove it. -->

* `callback` ссылается на метод обратного вызова, который имеет значение `generateEnemy`. Это означает, что это событие вызовет функцию `generateEnemy()`.
* `delay` имеет значение `100`, которое определяет время задержки, в миллисекундах, пперед повторным выполнением обратного вызова.
* `callbackScope` имеет значение `this`, которое ссылается на сцену, в которой используется это событие.
* `loop` имеет значение `true`, что означает, что это событие будет продолжаться, пока мы его не удалим.

## Пересечение игровых объектов

Если необходимо проверить пересечение двух объектов, то можно применить метод `this.physics.add.overlap()`.

В отличие от `this.physics.add.collide()`, объекты НЕ разделяются автоматически и не применяются физика, а просто проверяется наложение одного игрового объекта на другой.

Пример:

```JavaScript
function create() {
    // ...
    this.physics.add.overlap(player, bugs, gameOverHandler);
    // ...
}

function gameOverHandler() {
    // ...
}
```

## Уничтожение объектов

<!-- Our enemy sprites threaten to take over our game if we don’t remove them! We’re going to need to use Phaser’s `.destroy()` method to remove enemy sprites from our game. -->

Когда вражеские спрайты угрожают захватить нашу игру, то нам нужно использовать метод **Phaser** `.destroy()` для их уничтожения.

<!-- Let’s first take a second to consider when we want our enemies removed. For our game, bugs should disappear when they hit the ground. Therefore, we need a Collider for enemies and platforms. Unlike the one we previously created, this Collider takes a third argument of a callback function. -->

Например, если враги должны исчезать, когда они падают на землю, то нужнож сделать overlap для врагов и платформ.

```JavaScript
function create() {
  // …
  this.physics.add.overlap(enemies, platforms, bugDestroyHandler);
}

function bugDestroyHandler(bug) {
    bug.destroy();
}
```

Мы вызываем метод `bug.destroy()`, который удалит вражеский спрайт при столкновении с платформой внутри функции обратного вызова `enemyOverlapHandler()`.

<!-- We call `singleEnemy.destroy()` which will remove the enemy’s sprite when it collides with a platform.
Let’s use this logic to remove bug sprites as they hit the ground. -->

## Пауза

<!-- It’s great to see our score increase, but it doesn’t mean much if there’s no way to lose. One common losing condition is when a player sprite collides with an enemy sprite. This means we need to include another Collider object with a callback in `create()`: -->
Одним из условий завершения игры и проигрыша может быть событие, когда когда спрайт игрока сталкивается с вражеским спрайтом.

Это означает, что нам нужно добавить событие `overlap` с обратным вызовом в функцию `create()`:

```JavaScript
this.physics.add.overlap(player, bugs, gameOverHandler, null, this);
```

И реализовать функцию обратного вызгва `gameOverHandler()` в которой реализовать логику завершения игры.

```JavaScript
function gameOverHandler() {
    // ...
    enemyGenLoop.destroy();
    this.physics.pause();
    // ...
```

<!-- For our game, it ends when the player sprite a bug collide. When this event happens we also want certain things to stop. For instance, we don’t want our game to continue creating bugs. We could call `.destroy()` on the loop that creates our bugs. Another thing we would want to stop is the physics of our game. To put a pause on physics, we call `this.physics.pause()`. -->

Если игра заканчивается, то необходимо также остановить таймер.
Для этого мы можем вызвать `.destroy ()` для объекта таймер `enemyGenLoop`.
Еще одна вещь, которую мы хотели бы остановить, это физика нашей игры. 
Чтобы сделать паузу в физике, мы вызываем `this.physics.pause ()`.

## Перезапуск сцены

<!-- Once a game ends, we should allow players to restart and try again! Phaser has a convenient method to solve this issue: `this.scene.restart()`. -->
Как только игра заканчивается, мы должны позволить игрокам перезагрузиться и начать заново!
В **Phaser** есть удобный метод для решения этой проблемы: `this.scene.restart()`.

<!-- Like the method’s name implies, `this.scene.restart()`, restarts the **Scene**. -->
Как следует из названия метода, `this.scene.restart()` перезапускает объект **Scene**.

<!-- Работа с мышью, методы массивов, применение объектов в качестве словарей

Работа с мышью, изучение методов массивов и объектов, отрисовка изображений

1. Работа с мышью
2. Итерации
3. Словари
4. Изображения
5. Визуализация итераций

Пример: <http://www.codeskulptor.org/#user14_2efEcq2Lra_76.py>

Пример js: <http://divideby5.com/games/memorymatcher/>

## Ссылки

1. [A 3 part tutorial on using the Graphics features to draw all kinds of interesting shapes.](https://www.phaser.io/news/2017/02/drawing-graphics-tutorials) -->

## Вопросы

1. Что такое массив?
2. Как создать массив?
3. Как добавить новый элемент в конец массива?
4. Как удалить последний элемент из массива?
5. Какой индекс у первого элемента массива?
6. Как получить длину массива?
7. Что выведеться на консоль?

    ```JavaScript
    let arr = [5, 6, 7];
    console.log(arr[1]);
    ```

8. Что выведется на консоль?

    ```JavaScript
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
    ```

9. Что выведется на консоль?

    ```JavaScript
    let arr = [1, 2, 3];
    arr.pop();
    console.log(arr);
    ```

10. Как создать статическую группу объектов?
11. Как создать таймер?
12. Как добавить паузу в игру?
13. Как перезапустить игру?

## Ссылки

1. [Массив (Array) в JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
