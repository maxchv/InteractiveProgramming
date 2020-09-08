# Draw A Circle

In this exercise, we’re going to cover how to make a simple geometric shape in Phaser. A Circle! To do this, we’re going to use the method `this.add.circle()`. This creates a `GameObject` that we can use to represent a circle in the game. `GameObjects` can have different animations or interactions that we can add to them, but for now, we’re going to focus on drawing them. To make a circle we provide `this.add.circle()` with four arguments in the following order:

* The `x` coordinate for the center of the circle. A larger x value means the circle will be further to the right in the game.
* The `y` coordinate for the center of the circle. A larger y value means the circle will appear further down in the game.
* The `radius`, a value for how large the circle should be.
* The `fillColor`, a number representing the color for the circle. We will be providing hexadecimal values for all colors in this lesson. Feel free to use an online color picker when choosing yours, most will supply a hexadecimal value. Hexadecimal colors in `JavaScript` look like `0xFF8030` where 0x indicates the value is hexadecimal and `FF8030` is the color code for the color we want.

For example:

```javascript
    this.add.circle(20, 50, 10, 0xFF0000);
```

This line of code would create a new circle that is 20 pixels to the right and 50 pixels down from the top-left corner (sometimes called “the origin”). This circle will be 10 pixels in radius (i.e., 20 pixels across), and bright red due to the color we supplied `0xFF0000`.

## Instructions
1. Create your own circle! Inside the `create()` function you’ll find circles numbered 1-4. Create a circle5 and give it `x`, `y`, `radius`, and `fillColor` values of your choosing!

