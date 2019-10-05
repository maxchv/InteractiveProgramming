# Resetting A Scene
Once a game ends, we should allow players to restart and try again! Phaser has a convenient method to solve this issue: this.scene.restart().

Like the method’s name implies, this.scene.restart(), restarts the Scene.

We should also consider when we want to restart the scene, each game has different criteria. For our game, we want this option to be available after the player sprite has collided with a bug. We should also give our players an option to restart when they choose to.

One way to implement this logic is to add on to the callback function of the player and bugs Collider object. We’ll add an event listener for a mouse click, or 'pointerup' event. When this event occurs, then we’ll restart the Scene. Let’s add this feature in.

Instructions
1.
In the callback function of the gameState.player and bugs Collider, add an event listener by calling this.input.on() with the arguments (in the following order):

'pointerup'
an empty arrow callback function.
We’ll add to the callback function in the later steps.

2.
Inside the function body of the anonymous callback, let’s reassign gameState.score to 0 for the next playthrough.

3.
Under the reassignment of gameState.score, call this.scene.restart()

After you pass this checkpoint and play Bug Dodger, you’ll be able to restart the game after the game’s over!

