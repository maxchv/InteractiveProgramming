# Detecting Collisions
We have a platform sprite, we have a player sprite, but they’re not interacting with each other! What’s missing? Remember, our physics plugin determines how GameObjects interact. The way to decide these interactions is to create a Collider object that checks if two GameObjects bump into each other.

To set a Collider object we need to call this.physics.add.collider(). The .collider() method takes three arguments (the last one argument is optional). The first two arguments are the GameObjects (or Group objects) that collide. Here’s an example of a collider with two arguments:

function create() {
  const player = this.physics.add.sprite(100, 100, 'player');
  const platform = this.physics.add.sprite(100, 500, 'platform');
  this.physics.add.collider(player, platform);
}
In the example above, we created a Collider object by calling this.physics.add.collider(player, platform). Now, the player and platform objects don’t overlap when they bump into each other.

While we’re on the topic of collisions, we can call the .setCollideWorldBounds(true) for GameObjects that we want to stay inside the screen of the game. For example, calling player.setCollideWorldBounds(true) will make it so the player sprite can’t fall off the screen!

Instructions
1.
Let’s keep Codey from going off the screen!

In create(), call gameState.player.setCollideWorldBounds(true).

2.
Now let’s create a collider between Codey and the ground platform.

Call this.physics.add.collider() with the following arguments:

gameState.player
platforms
After you clear this checkpoint you should see Codey land directly on the platform!

