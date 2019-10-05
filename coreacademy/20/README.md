# Removing Enemies
Our enemy sprites threaten to take over our game if we don’t remove them! We’re going to need to use Phaser’s .destroy() method to remove enemy sprites from our game.

Let’s first take a second to consider when we want our enemies removed. For our game, bugs should disappear when they hit the ground. Therefore, we need a Collider for enemies and platforms. Unlike the one we previously created, this Collider takes a third argument of a callback function.

function create() {
  // … 
  this.physics.add.collider(enemies, platforms, function(singleEnemy) {
    singleEnemy.destroy();
  });
}
In our example, we called this.physics.add.collider() with three arguments:

The first two arguments are Group objects, enemies and platforms.
The third argument is a callback function that has a parameter, singleEnemy:
The ordering of the callback function’s parameter corresponds to the ordering of .collider()‘s first two arguments.
We call singleEnemy.destroy() which will remove the enemy’s sprite when it collides with a platform.
Let’s use this logic to remove bug sprites as they hit the ground.

Instructions
1.
Inside create(), call this.physics.add.collider() with the arguments bugs and platforms (in that order!) to create a Collider object to detect collisions between bugs and platforms.

2.
Add a third argument inside .collider(), pass an anonymous function that has one parameter, bug.

3.
Inside the callback function, call bug.destroy().

