# New Scenes
Since we’re now using the class syntax in our Phaser game, we can add another class that will render a start screen for our players. This start screen will give our players a chance to ready themselves before actually playing the game.

Recall the template for creating a Scene:

class FirstScene extends Phaser.Scene {
  constructor(){
    super({ key: 'FirstScene' });
  }
  // ...
}
Notice we supplied super() with the key of 'FirstScene'. We’ll then reference this key in our config:

const config = {
  // …
  scene: [FirstScene, AnotherScene]
};
This time around, we have two elements inside scene‘s array. The ordering is important in determining which Scene the game plays first. For the example above, the game will play FirstScene and not play AnotherScene until prompted.

Let’s add a simple start screen to our game!

Instructions
1.
Add a class named StartScene that extends Phaser.Scene.

2.
Inside the class you just created, add a constructor() method.

Inside the constructor() method, call super() with the argument: { key: 'StartScene' }.

3.
Let’s keep our start screen simple, add a create() method to the StartScene class.

Inside create() call this.add.text( x, y, textArg):

replace x and y with numbers for the x- and y-coordinates respectively.
replace textArg with a string to tell players to start the game.
In our next exercise, we’ll go over how to transition from one Scene to another.

4.
Locate config and its scene property.

Inside the scene array, add StartScene to the start of the array BEFORE GameScene.

Notice how the ordering of the Scenes in the scene property affects which Scene plays first.