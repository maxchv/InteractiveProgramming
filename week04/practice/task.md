
Задание

1. See Codey in the game? We’re going to finally be able to make Codey move with our arrow keys!

First create gameState.cursors in our create() function by calling this.input.keyboard.createCursorKeys().

2. Now let’s start interpreting keyboard input. In update() check if the right arrow key is down. If it is, update gameState.codey‘s x value by adding 5 to it.

3. Notice how much more quickly Codey zips across the screen when we add 5 to their x coordinate! With higher numbers Codey will move faster and with lower numbers Codey will move slower. At any rate, we should let Codey move left after moving right.

In update() check if the left arrow key is down and subtract (-=) 5 from Codey’s x position if it is.

4. Now that we’ve conquered left and right, think about how you might move Codey up and down the screen. When you’re satisfied, move on to the next exercise.

For a real challenge, how would you make Codey accelerate speed after moving in the same direction for a few frames?