# Losing Condition
It’s great to see our score increase, but it doesn’t mean much if there’s no way to lose. One common losing condition is when a player sprite collides with an enemy sprite. This means we need to include another Collider object with a callback in create():

this.physics.add.collider(player, enemies, () => {
  // Logic to end the game
});
For our game, it ends when the player sprite a bug collide. When this event happens we also want certain things to stop. For instance, we don’t want our game to continue creating bugs. We could call .destroy() on the loop that creates our bugs. Another thing we would want to stop is the physics of our game. To put a pause on physics, we call this.physics.pause().

In the code example above, notice the use of an arrow function (() => {}) for a callback instead of anonymous function (function() {}). The reason for using an arrow function is that it implicitly binds this. We know that we want to call this.physics.pause() and we need this to reference the Scene object. Therefore, we use an arrow function to bind this as the Scene object. To read more about arrow functions and this, check out MDN’s arrow function documentation

Let’s see how this works in our code!

Instructions
1.
In create(), create a Collider object using this.physics.add.collider(). The method call has the following arguments and in the following order:

gameState.player
bugs
an empty arrow callback function, e.g. () => {}
2.
Inside the callback function, you need to call .destroy() on bugGenLoop to stop the Timer event that creates the falling bugs!

3.
Inside the same callback function, under bugGen.destroy(), call this.physics.pause().

4.
Lastly, still inside the callback, add the text for players to know that the game is over.

The text should:

Be at coordinates of your choosing.
read 'Game Over'
have a font size of 15 pixels
have a fill of '#000000'
