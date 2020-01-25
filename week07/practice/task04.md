# Практическое задание

Продолжаем практическое занятие. Добавляем врага

## Шаг 4

1. В функции `prelad()` загружаем набор спрайтов `img/snowman.png` для врага с размерами `50 х 70`

    ![snowman](img/snowman_spritesheet.png)

2. В функции `create()` Создаем физический спрайт врага (`enemy`), добавляем коллизию с платформой и миром

    ![phys enemy](img/phys_enemy.png)

3. Добавляем анимацию для `enemy` с именем `snowmanAlert` и запускаем ее

    ![snowmanAlert](img/enemy_anim.png)

4. При пересечении объекта игрока с врагом будем вызывать функцию `gameOver`

    ![enemy plapyer collision](img/enemy_player.png)

5. Добавляем функцию `gameOver`

    ![gameover](img/gameover.png)

6. Добавляем движение врага туда-сюда. Для этого в функции `create()` присвоим значению `enemy.move` результат вызова метода `this.tweens.add()`. В метод передаем объект со следующими атрибутами:
    * targets: gameState.enemy.
    * moves: 320 x-coordinate.
    * ease: 'Linear'.
    * duration: 1800 milliseconds.
    * repeat: -1
    * yoyo: true

     ![tweens](img/tween.PNG)
