# Move Your Bodies
Now we’re going to add motion to our Phaser game! You might recall that we can add an update() function to our Scene that adds motion, animation, and interaction! We’re going to start with something very simple: moving an object across the screen. If we create a GameObject centered at (0, 100), that is, if we create a GameObject with its x value equal to 0 and its y value equal to 100, we can move it across the screen in the update() function like so:

```JavaScript
let circle;

function create() {
  // create a red circle with radius 20 at (0, 100)
  circle = this.add.circle(0, 100, 20, 0xff0000);
}

function update() {
  // move that circle to the right
  circle.x += 1;
}
```

First, we define a global variable called circle because we’re going to be referring to the same object in two different functions. There are a few ways to do this, but for small games, it’s OK to make a few global variables.

Afterwards, in create() we assign a new GameObject to circle that we instantiate using this.add.circle() with x, y, radius, and fillColor arguments.

Then in update() we update our circle‘s x value. update() is called every frame the game is in view.

update() has two optional parameters: time and delta. The first is the number of milliseconds that your Phaser game has been running, the second is the difference (in milliseconds) since the last time update() was called. Phaser does its best to call update() 60 times per second, so delta‘s values will normally be around 16.6. This is good enough for us, so we’ll frequently define update() without parameters.

Instructions
1. We’ve set up a Game with our codey sprite. Let’s make Codey walk to the right!

First, create an update() function.

2. Inside update() update our codey sprite.

Increment (use +=) the x property of codey by 1.

3. Look at Codey go! Wait, why isn’t Codey going? Oh! We haven’t added our update() function to our Scene yet!

Add our update() function to config.scene.

Now look at Codey move!

