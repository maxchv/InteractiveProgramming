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

## Группа спрайтов

We’re gonna get that player sprite to land on some steady ground. 

But first, we need to create a ground platform! 

This ground platform will not be affected by gravity but we want it to interact with the player sprite. Therefore, we can’t use this.add.image() like we do for our background image since images aren’t affected by physics and don’t interact with GameObjects.

What we need is this.physics.add.staticGroup() to create a Group object which keeps track of our platforms. Group objects are used to create and maintain sprites in a group. In this case, we can use this Group object to create additional platforms:

```JavaScript
function create() {
  const platforms = this.physics.add.staticGroup();
  platforms.create(320, 350, 'platform');
}
```

From the example above, we’ve created a static Group Object and saved it to the platforms variable. Our platforms won’t be affected by the game’s gravity. Then, we call `platforms.create()` with these 3 arguments:

* The first argument is the x-coordinate of the sprite’s center.
* The second argument is the y-coordinate of the sprite’s center.
* The last argument is the key of the sprite’s image.

## Таймер

Currently, our game creates a few enemy sprites and stops. But we could create a loop to consistently create more enemies to make the game more challenging. To implement this loop we can call this.time.addEvent() and pass in an object with specifications for how we want this loop to run. For instance:

```JavaScript
function create() {
  const enemyGenLoop = this.time.addEvent({
    callback: generateEnemy,
    delay: 100,
    callbackScope: this,
    loop: true,
  })
} 

function generateEnemy () { 
  // Code to create an enemy sprite
}
```

In our example, we accessed the Scene’s time property and called `.addEvent()` with an object representing the event we want called. That object has 4 keys that each provide different specifications:

callback has a value of generateEnemy which means this event will call `generateEnemy()` function.
delay has a value of `100`, which determines, in milliseconds, how long is the delay before executing the callback again.
callbackScope has a value of this, which selects the Scene this event is used in.
loop has a value of true, which means that this event will continue to execute until we remove it.
For more information about timed events, look over RexRainbow’s comprehensive Phaser documentation!


## Пересечение игровых объектов 

this.physics.add.overlap()

## Уничтожение объектов

Our enemy sprites threaten to take over our game if we don’t remove them! We’re going to need to use Phaser’s `.destroy()` method to remove enemy sprites from our game.

Let’s first take a second to consider when we want our enemies removed. For our game, bugs should disappear when they hit the ground. Therefore, we need a Collider for enemies and platforms. Unlike the one we previously created, this Collider takes a third argument of a callback function.

```JavaScript
function create() {
  // … 
  this.physics.add.collider(enemies, platforms, function(singleEnemy) {
    singleEnemy.destroy();
  });
}
```

In our example, we called `this.physics.add.collider()` with three arguments:

The first two arguments are Group objects, enemies and platforms.
The third argument is a callback function that has a parameter, singleEnemy:
The ordering of the callback function’s parameter corresponds to the ordering of `.collider()`‘s first two arguments.
We call `singleEnemy.destroy()` which will remove the enemy’s sprite when it collides with a platform.
Let’s use this logic to remove bug sprites as they hit the ground.

## Пауза

It’s great to see our score increase, but it doesn’t mean much if there’s no way to lose. One common losing condition is when a player sprite collides with an enemy sprite. This means we need to include another Collider object with a callback in create():

this.physics.add.collider(player, enemies, () => {
  // Logic to end the game
});
For our game, it ends when the player sprite a bug collide. When this event happens we also want certain things to stop. For instance, we don’t want our game to continue creating bugs. We could call .destroy() on the loop that creates our bugs. Another thing we would want to stop is the physics of our game. To put a pause on physics, we call this.physics.pause().

## Перезапуск сцены

Once a game ends, we should allow players to restart and try again! Phaser has a convenient method to solve this issue: `this.scene.restart()`.

Like the method’s name implies, `this.scene.restart()`, restarts the **Scene**.

We should also consider when we want to restart the scene, each game has different criteria. For our game, we want this option to be available after the player sprite has collided with a bug. We should also give our players an option to restart when they choose to.

One way to implement this logic is to add on to the callback function of the player and bugs Collider object. We’ll add an event listener for a mouse click, or 'pointerup' event. When this event occurs, then we’ll restart the Scene. Let’s add this feature in.

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
