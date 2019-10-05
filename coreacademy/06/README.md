# Start Making A Scene

It’s nice to have our games made to be a specific size with a specific background color, but where do we define game logic? Phaser games are composed of `Scenes` that we define and pass to Phaser in the config! A Phaser Scene can have any of the following functions:

* `preload()`, where we load in external files (or “assets”) to our game. 
* `create()`, where we define the `GameObjects` that are necessary at the start of our game. 
* `update()` where we define animation and interaction in our game (more on this in later exercises!)

When defining a `Scene`, it’s only necessary to define the functions we need. So we don’t need to define a `preload()` function for a game that doesn’t use external assets, for instance.

After these functions are defined, they’re passed in as an object to the Phaser config! Here’s how that looks altogether:

```JavaScript
function preload() {
  this.load.image('codey', 'assets/images/codey.png');
}

function create() {
  this.add.image('codey', 130, 100);
}

const config = {
  width: 300px,
  height: 600px,

  scene: {
    preload,
    create
  }
};
```

Above, we created `preload()` and `create()` methods for our `Scene`. The this object which we refer to so often in these methods refers to the `Scene` itself! Relatedly, `this.load` and `this.add` are helper libraries the `Scene` provides with methods (like `this.load.image()` and `this.add.circle()`) that allow us to load in files and create game objects respectively.

In our config we added in a new key, scene, and pass an object to it. The object maps our `preload()` function to the scene and our `create()` function to the scene. Note that we are using JavaScript’s property-value shorthand, the code above would be the same if we passed `{ preload: preload, create: create }` to the scene instead.

## Instructions

1. Create a function called `create()`.

2. Let’s create our “Start Screen”

Inside `create()` use `this.add.text()` to create a text `GameObject`. The arguments for `this.add.text()` are, in order:

* An `x` coordinate.
* A `y` coordinate.
* The text to add.

Create a text object with your starting text anywhere in your game.

3. Give config a new `scene` property. Give that property the value `{ create }`.

