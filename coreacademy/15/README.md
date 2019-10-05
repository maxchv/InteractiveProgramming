# Adding Static Groups
We’re gonna get that player sprite to land on some steady ground. But first, we need to create a ground platform! This ground platform will not be affected by gravity but we want it to interact with the player sprite. Therefore, we can’t use this.add.image() like we do for our background image since images aren’t affected by physics and don’t interact with GameObjects.

What we need is this.physics.add.staticGroup() to create a Group object which keeps track of our platforms. Group objects are used to create and maintain sprites in a group. In this case, we can use this Group object to create additional platforms:

function create() {
  const platforms = this.physics.add.staticGroup();
  platforms.create(320, 350, 'platform');
}
From the example above, we’ve created a static Group Object and saved it to the platforms variable. Our platforms won’t be affected by the game’s gravity. Then, we call platforms.create() with these 3 arguments:

The first argument is the x-coordinate of the sprite’s center.
The second argument is the y-coordinate of the sprite’s center.
The last argument is the key of the sprite’s image.
Let’s add this platform for Codey!

Instructions
1.
In create(), call this.physics.add.staticGroup() and assign it to a variable platforms.

2.
In a line under defining the platforms variable, call platforms.create(225, 510, 'platform').

You will see a teal platform appear at the bottom of the screen, but Codey should still be passing through. We’ll fix this issue in our next exercise.

