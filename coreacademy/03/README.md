# Draw A Sprite

Phaser gives us very similar tools to create a `GameObject` for sprites that we provide. A sprite is an image that is intended to represent a character, enemy, or some other object in a game. We use image files for a lot of different things in games, including backgrounds and icons, but sprites represent a person or item inside the game itself.

In order to add a sprite we can call `this.add.sprite()`. However, we need to load in the image we want to use as a sprite in an earlier step. `preload()` is the name of the function that happens before `create()`. Where `create()` is about setting up all the game objects to set the stage for our game, `preload()` is about loading in all asset files that we’ll be using. “Assets” could refer to lots of things but, for now, our assets will consist of sprites, background images, in-game sounds, and background music.

So the two steps to creating a sprite in your game are: Loading the image in `preload()` with `this.load.image()` which takes two arguments: a key that you’ll use to refer to it and the path to the image itself. The path can be a local file or the `URL` for a resource hosted elsewhere on the web.

Creating the `GameObject` in `create()` with `this.add.sprite()` which requires three arguments: the `x` value, the `y` value, and the `key` used when you loaded the image.

```JavaScript
function preload() {
  this.load.image('dragon', 'assets/sprites/dragon.png');
}

function create() {
  this.add.sprite(40, 80, 'dragon');
}
```

In `preload()` we loaded an image into our game and gave it a `key` value of 'dragon'. The location of the image we loaded was `assets/sprites/dragon.png`.

Then we created the `GameObject` itself in `create()`. We set it 40 pixels to the right and 80 pixels down and informed Phaser to use the image we loaded in earlier under the key “dragon”. It’s important to note that our `x` and `y` values of 40 and 80 indicate the center of the sprite. So calling `this.add.image(0, 0, 'dragon');` would only display the bottom right quarter of the image.

## Instructions

1. In the `preload()` function load in our codey sprite from 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png'. Give it the key 'codey'.

2. In the `create()` function write the code to display Codey on your screen by creating a `GameObject` that uses the Codey sprite.