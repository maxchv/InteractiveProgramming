# Create A Config

We’ve been making `GameObjects` in an existing game, but let’s take a step back and think about how to create a Phaser game from the beginning. We can do that by calling `new Phaser.Game()`. `Phaser.Game()` by itself creates a new `<canvas>` element and appends it to your HTML document. This element allows Phaser to draw sprites and shapes to a website.

In order to make games of our own design, we call `Phaser.Game()` with an object that specifies some meta-information about the game. We define that object beforehand and conventionally name the variable config. Here are some of the keys we can define in a config:

* `height`: the height, in pixels, of the `<canvas>` Phaser creates.
* `width`: the width, in pixels, of the `<canvas>` Phaser creates.
* `parent`: the HTML element that Phaser will place the `<canvas>` element inside of.
* `backgroundColor`: the background color of our game, usually given in hexadecimal.
* `type`: the Renderer Phaser will use: either `Phaser.WEBGL` which offers some additional features while drawing or `Phaser.CANVAS` which can run on more browsers. The default, `Phaser.AUTO`, checks if the browser supports `WebGL` and, if not, switches to canvas.

There is plenty more data that we could possibly add to configure our games, but these basics will get us pretty far. If you wish to learn more about the fields a config supports, check out the Phaser documentation.

Instructions
1. We’re going to build a Phaser Game from the ground up! Start by declaring a config object that includes the following properties: `width`, `height`, and `backgroundColor`.

2. Now let’s use that config to create a Game! Create a new game by passing our config into `new Phaser.Game()`. Save the results in a variable called game.

