# Scene Transitions
Phaser has built-in methods that make it easy for us to transition from one Scene to another. For us to transition between Scenes we have to .stop() the playing of a Scene and .start() the next Scene.

To stop a Scene, call this.scene.stop('keyOfScene').

Then, to start a Scene, call this.scene.start('keyOfAnotherScene').

The .stop() and .start() methods take in a string that has the value of a Scene’s key. Like the name of the methods imply, .stop() will stop the Scene and start() will start playing the Scene.

Let’s see this in action!

Instructions
1.
For our game, we want to start the next scene after a player clicks on the game screen.

In the StartScene class, there is an event handler in create() for 'pointerup' events. Inside the callback of the event handler, call this.scene.stop('StartScene').

2.
Still inside the callback function, call this.scene.start('GameScene').

With this functionality in, players can click anyone on the start screen and transition to playing the game!