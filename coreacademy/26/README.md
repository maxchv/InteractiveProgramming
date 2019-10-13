# Using Classes in Phaser (ES6)
In this exercise, we’re going to refactor the code from the Learn Phaser: Physics Lesson.

One major change that we’re going to implement is the inclusion of JavaScript’s class syntax. Each class will represent a Scene and contain the familiar preload(), create(), and update() functions. We’re going to refer to these functions as methods since they’re functions that belong to a class. Below is a sample template:

class ExampleScene extends Phaser.Scene {
  constructor(){
    super({ key: 'ExampleScene' });
  }
  preload() {
    // ...
  }
  create() {
    // ...
  }
  update() {
    // ...
  }
}
Our ExampleScene class is a subclass of Phaser.Scene:

It has a constructor() method that is used to create an initialize the Scene object.
Inside the constructor() method, we call super() which calls the constructor() of the Phaser.Scene.
We provide super() with the object { key: 'ExampleScene' } so that we can refer to this class in our config object.
preload(), create(), and update() are included but are now methods, notice the lack of the function keyword.
In order for our Phaser game to know about this class, we’ll also need to change the config object:

const config = {
  // …
  scene: [ExampleScene]
};
In the code above, our config object’s scene property has a value of an array. While the only element currently inside the array is ExampleScene, we can later add more scenes to this array.

By refactoring our code, we’re laying the groundwork to include more scenes in this existing game. In later exercises, we can add scenes for starting and ending the game!

Instructions
1.
Create a new class called GameScene that extends Phaser.Scene

2.
Inside the class you just created, add a constructor() method.

3.
With our constructor set up, we need a way to reference GameScene.

Inside the constructor() method, call super() with the argument { key: 'GameScene' }

4.
We can now move all the preload(), create(), and update() functions into the GameScene class.

After copying the 3 functions into the GameScene class, remove each method’s function keyword.

At this point we will NOT have the global preload(), create(), and update() functions. That code exists ONLY inside the GameScene class. That also means that our game won’t work now, but we’ll fix this in the next step!

5.
To be able to use GameScene, locate the config object and its scene property. Delete the scene‘s current value and replace it with an array containing GameScene.