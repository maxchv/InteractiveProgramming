# Adding a Sprite

Let’s jump right in and make a sprite. We’ve made sprites before using the method this.add.sprite(), but this time around, we’re going to use this.physics.add.sprite() and have our sprite affected by physics! In this case, our sprite will feel the effects of gravity.

The method this.physics.add.sprite() takes 3 arguments:

The first argument sets the x-coordinate of the sprite’s center.
The second argument sets the y-coordinate of the sprite’s center.
The third argument is the key of the image loaded in the preload() function.
Here’s the actual syntax:

function create() {
  this.physics.add.sprite(320, 300, 'player');
}
In the example above, we create a 'player' sprite with its center at the coordinate (320, 300) that will follow the physics of our game. The sprite created from the example above will continue to fall indefinitely. Let’s see this in action for ourselves!

Instructions
1.
In create(), call this.physics.add.sprite() and provide a positive x-coordinate, a positive y-coordinate, and the 'codey' as arguments.

After you pass this checkpoint, feel free to change the coordinates of the sprite and observe how it’s affected by the game’s gravity! Compare the behavior of the player sprite to the bug sprite created by this.add.sprite() which isn’t affected by gravity.

