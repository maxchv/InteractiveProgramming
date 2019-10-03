# Phaser.js tutorials

Welcome to Learn Phaser! Phaser.js is a game framework built with JavaScript that you can use to make video games on the web! Phaser gives us a set of utilities that we can use so that we don’t have to start from scratch when we want to make a game. In this lesson we’re going to cover how we can use Phaser to do the following things:

* Draw shapes and images
* Play sounds and music
* Add realism with animations
* Introduce interactivity with the mouse

All in a way that can be quickly transitioned into a website that you can share with anyone! We’re also going to cover setting up a basic Phaser project. Along the way we’ll learn about what Phaser is and what it does for us so that we can add more complex logic to our games later!

This course is going to cover Phaser 3, older versions of Phaser (most notably Phaser 2/Phaser CE) will not work in this course. Experienced JavaScripters may notice the function keyword frequently used instead of the newer arrow syntax — this and other choices are for compatibility and simplicity with Phaser’s design. In all other cases we’ll be using up-to-date JavaScript features to allow you to carry the skills you learn here with you in the future.

This course will not be covering JavaScript syntax, so you might be interested in brushing up on our JavaScript course before taking the plunge here. We’ll try to keep everything accessible no matter what level programmer you are, so you might prefer to wait until you get stuck before you explore more about the language itself. As the saying goes: “All roads lead to [developing a series of awesome browser games with Phaser]”.

Instructions

A good game needs a good title screen! We’re going to cover all the code in this example in this lesson, but first let’s see if we can create the title screen for a new game.

Change the text in the first call of `this.add.text()`, the title, from “Codey’s Adventures in Codeworld” to the name of your game!

## Draw A Circle

In this exercise, we’re going to cover how to make a simple geometric shape in Phaser. A Circle! To do this, we’re going to use the method this.add.circle(). This creates a GameObject that we can use to represent a circle in the game. GameObjects can have different animations or interactions that we can add to them, but for now, we’re going to focus on drawing them. To make a circle we provide this.add.circle() with four arguments in the following order:

* The x coordinate for the center of the circle. A larger x value means the circle will be further to the right in the game.
* The y coordinate for the center of the circle. A larger y value means the circle will appear further down in the game.
* The radius, a value for how large the circle should be.
* The fillColor, a number representing the color for the circle. We will be providing hexadecimal values for all colors in this lesson. Feel free to use an online color picker when choosing yours, most will supply a hexadecimal value. Hexadecimal colors in JavaScript look like 0xFF8030 where 0x indicates the value is hexadecimal and FF8030 is the color code for the color we want.

For example:

```javascript
    this.add.circle(20, 50, 10, 0xFF0000);
```

This line of code would create a new circle that is 20 pixels to the right and 50 pixels down from the top-left corner (sometimes called “the origin”). This circle will be 10 pixels in radius (i.e., 20 pixels across), and bright red due to the color we supplied `0xFF0000`.
