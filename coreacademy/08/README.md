# Storing State
Because we handle all of our Scene information in different functions, it becomes important to pass information between our Scene functions. Something we created in create() will need to be updated in update(), for instance. There are a few ways we can accomplish this:

Create global variables for everything.
Attach important variables to the Scene itself by creating a new property for this from within a Scene method.
Create a gameState object and keep track of the state there.
Each solution is a valid technique, but we’re going to focus on creating a gameState object and manipulating that from now on. Here’s one way that we’ll apply this solution:

const gameState = {};

function create() {
  gameState.circle = this.add.circle(20, 20, 5, 0xff0000);
  gameState.rectangle = this.add.rectangle(40, 60, 90, 10, 0x00ff00);
}

function update() {
  gameState.circle.x += 1;
  gameState.rectangle.y += 1;
}
In the above code, we started by defining a gameState as a new JavaScript object. In create() we create a circle and a rectangle and assign them to properties of our gameState object. Then in update() we can refer to gameState.circle and gameState.rectangle to manipulate them!

Instructions
1.
Now let’s store state for ourselves! First up, create a gameState variable as a global variable for this script.

2.
In create(), create a new circle using this.add.circle(). Save the results in gameState.circle.

Remember the 4 arguments for circle are x, y, radius, and fillColor.

3.
Update gameState.circle in our update() function so that it moves downwards.

Add 1 to its y value every update cycle in order to move the circle downwards.

