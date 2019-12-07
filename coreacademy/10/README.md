# Keyboard Events

Only some games exclusively use the mouse to play. Plenty of browser games, especially those with more complex gameplay, require keyboard input. Before, we assigned mouse events to specific GameObjects. This helped us tell if a mouse cursor was hovering over, or clicking on, an object in our game. Where mouse clicks take place at a specific point in our game with x and y coordinates, a keyboard offers a different interface without that positional information. So our keyboard handlers will handle any keypress that happens while our game is in focus — for this reason they won’t be registered as events to particular GameObjects in our game.

The first way of adding a keypress handler is by calling this.input.keyboard.on(). This takes two arguments: first, the name of the event — something like "keyboard-A" for the A keypress. Next, the function to be called when handling the keypress. We can pass a function we’ve defined elsewhere, but unless you’re duplicating functionality (say to avoid replicating the same code for a keyboard and a gamepad) it’s fine to define an anonymous function. Here’s how that would look:

```JavaScript
const gameState = {};

function create() {
  gameState.circle = this.add.circle(30, 30, 10, 0xFF0000);
  this.input.keyboard.on('keyboard-W', function() {
    gameState.circle.fillColor = 0xFFFF00;
  });
}
```

This code creates a red circle and then, when a W is pressed on the keyboard, the circle turns yellow.

createCursorKeys()
Another way of adding a keyboard event listener is by using a shortcut that Phaser offers, createCursorKeys(). This creates an object that maps the names of some usual cursor keys (UP, DOWN, LEFT, RIGHT, SHIFT, and SPACE) to a cursor object that we can use to detect when they’ve been pressed. We can save those as a property in our gameState object and then check if they’re pressed within our update() function.

```JavaScript
const gameState = {};

function create() {
  gameState.circle = this.add.circle(50, 50, 20, 0xFF0000);
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.left.isDown) {
    // move the circle left!
    gameState.circle.x -= 3;
  }
}

const config = { scene: { create, update }};
const game = new Phaser.Game(config);
```

Above, we created a cursors property for our gameState and assigned the result of .createCursorKeys() to it. In our update() method we checked if the left key is being pressed by checking if gameState.cursors.left.isDown is truthy. If the left button is pressed, we move the circle to the left.

Instructions

1. See Codey in the game? We’re going to finally be able to make Codey move with our arrow keys!

First create gameState.cursors in our create() function by calling this.input.keyboard.createCursorKeys().

2. Now let’s start interpreting keyboard input. In update() check if the right arrow key is down. If it is, update gameState.codey‘s x value by adding 5 to it.

3. Notice how much more quickly Codey zips across the screen when we add 5 to their x coordinate! With higher numbers Codey will move faster and with lower numbers Codey will move slower. At any rate, we should let Codey move left after moving right.

In update() check if the left arrow key is down and subtract (-=) 5 from Codey’s x position if it is.

4. Now that we’ve conquered left and right, think about how you might move Codey up and down the screen. When you’re satisfied, move on to the next exercise.

For a real challenge, how would you make Codey accelerate speed after moving in the same direction for a few frames?