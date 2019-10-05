# Adding Enemies
At this point, we have a controllable player sprite, a platform, and a collider set up. Let’s make some enemies!

Unlike the player sprite, we probably want multiple enemies to triumph over. And unlike the platform, we should have physics affect them. Once again, Phaser has a handy method for us, this.physics.add.group() which returns a Group object that we can use to organize multiple enemy sprites. For instance:

function create() {
  const enemies = this.physics.add.group();
  enemies.create(320, 10, 'enemy');  
} 
From the example above we called this.physics.add.group() and assigned it to a variable, enemies. Then we call enemies.create(320, 10, 'enemy') to create one sprite centered at the coordinates (320, 10) using the 'enemy' key.

But with our current code, we know that our enemy will always appear at the coordinates (320, 10). That’s not much of challenge. Instead, we can randomize where this enemy’s x-coordinate using Math.random() and multiply that value by the width of the screen. The logic being:

Math.random() returns a value from 0 to 1, e.g. 0.12418156798374347.
When we multiply the value from Math.random() with the width of the screen (in pixels), we get a value that is between from 0 (left-hand side) to the width of the game(right-hand side).
The product is a random x-coordinate that is always on the screen.
Our updated code:

function create() {
  const enemies = this.physics.add.group();
  const xCoordinate = Math.random() * 450;
  enemies.create(xCoordinate, 10, 'enemy');  
} 
Since we want to create multiple enemy sprites, we can use a function to house the logic for enemy creation:

function create() {
  const enemies = this.physics.add.group();
  function generateEnemy () {
    const xCoordinate = Math.random() * 450;
    enemies.create(xCoordinate, 10, 'enemy');  
  }
} 
With our updated code, we can create an enemy sprite every time we call generateEnemy(). Let’s bring this logic into our game!

Instructions
1.
Let’s first create an enemy using this.physics.add.group() and assign it to a variable bugs.

2.
Inside create, define an empty bugGen() function that will house the logic for creating enemies.

3.
Inside the function body of bugGen(), create a variable xCoord and assign to it Math.random() * 450.

4.
After defining xCoord, call bugs.create(xCoord, 10, 'bug1').

5.
Test out bugGen()! Inside create(), call bugGen() to see a bug appear on screen. Notice that the bug sprite is affected by gravity!

You can call the function many times to create multiple bugs.

