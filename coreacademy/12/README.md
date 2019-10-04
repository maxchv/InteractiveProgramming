# 
Review
With all of the tools we just learned, we have everything we need to make a huge number of games. Think about games that you’ve played and try to imagine how they break down into the following steps:

Loading in assets (all the sounds and images for your game: 3D models and textures would also be assets here although that isn’t something we’re going to be handling in Phaser).
Setting up a scene by creating all of the interactive game objects.
Adding event listeners and handlers to those game objects.
Updating the scene each frame, detecting if buttons are pressed and triggering events based on those button presses.
Here’s a quick review of the concepts we’ve covered in cheat sheet form.

These are all core game development strategies at the heart of nearly every game you’ll play, and you’ve conquered them in Phaser! Congratulations!

Instructions
1.
The most fundamental part of a Phaser game is the config we pass to Phaser.Game(). Inside we define the width, height, the default backgroundColor, and Scene information.

Start by creating a simple config file with width, height, and a backgroundColor.

If you’re not sure what backgroundColor to use, try plum: 0xdda0dd.

2.
Now create the game! Call new Phaser.Game(config) and save the results in a new variable called game.

3.
Now let’s create a quick way to store different things we want to track within our scene. On the first line of game.js, create a gameState object to store things in our game we need to refer to.

4.
Now that we have a game, let’s start building our scene!

Create a preload() function, where we’ll load in our assets.

5.
Let’s load in our Codey sprite in preload(). Give it the key 'codey' and load it in from 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png'.

6.
Now let’s create a create() function and use it to create our GameObject for Codey.

Inside a new function called create(), call this.add.sprite() to create a Codey sprite. Remember to give these three arguments, in order: an x value, a y value, and the key for the image to use.

Save the new sprite as gameState.codey.

7.
Where’s Codey? Well we need to add our scene to our config first.

In config add a new key, scene, and pass an object containing preload and create.

8.
Also inside our create() function, let’s add cursors to gameState.cursors by using this.input.keyboard.createCursorKeys().

9.
Create an update() function. Inside the update function, check if the down button is pressed using gameState.cursors.down.isDown. If it is pressed, we want Codey moving downwards, so add 1 to Codey’s y value.

10.
Update your scene to include the update() functions we just wrote!

Congratulations, you’ve mastered the basics of Phaser!