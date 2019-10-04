# Input
It’s time to make a game that we can actually play! Phaser gives us ways to handle mouse and keyboard input, so that we can trigger events to happen in the game. In this exercise we’re going to look at ways to use the mouse, but we’ll be covering keyboard input in our next exercise.

In order to interact with a GameObject, we need to call the setInteractive() method on it. The setInteractive() method tells Phaser to listen in for interactive events on the GameObject.

After calling setInteractive() we can provide the GameObject with an event handler. The event handler is a function that gets called when a specific interaction has happened to the GameObject. We’re going to look at four different possible events in this exercise:

'pointerdown': this event gets called when the mouse button has been pressed (but not released) on the GameObject.
'pointerup': this event gets called when the mouse button has been released over a GameObject.
'pointerover': this event gets called when the mouse pointer hovers over the GameObject.
'pointerout': this event gets called when a mouse pointer that was hovering over a GameObject is moved somewhere else.
It’s interesting to consider 'pointerdown' and 'pointerup' are completely separate events. “A mouse click is a mouse click, you can’t say it’s only half” one might say. Not to meander too far into the dark forests of user experience and game design, let’s just clarify that pressing down the mouse is done much more haphazardly than releasing the mouse. A player may realize they had not intended to click somewhere, drag their cursor away to release. If we capture the 'pointerup' event, we’ll only do things after the mouse click has been finished. If we only use the 'pointerdown' event, we’ll ignore a player who realized they have misclicked.

Now let’s say we wanted to make our famous circle GameObject change colors at the click of a mouse. We would use the 'pointerup' event for that, because that means the mouse has been clicked and released. We would add an event listener to change the color on the 'pointerup' event. Here’s how that would look:

const gameState = {}

function create() {
  gameState.circle = this.add.circle(50, 50, 20, 0xFF0000);
  gameState.circle.setInteractive();
  gameState.circle.on('pointerup', function() {
    this.fillColor = 0x00FF00;
  });
}

const config = {
  scene: { create }
}

const game = new Phaser.Game(config)
The above code creates a red circle in a Scene’s create() method, then makes it interactive by calling setInteractive() on it. Now that it’s interactive, we can add an event listener for the 'pointerup' event. This is done by calling the .on() method on the GameObject.

The .on() method takes two arguments: the name of the event ('pointerup') and the callback function. We create a new function as the second argument, with one line inside of it: reassigning this.fillColor. Updating this.fillColor changes the color of the circle (that’s what this is here).

Notice that we have a change in our game’s state without defining an update() function. Event listeners can be defined in the create() function, because they’re part of the definition of the GameObject and the setup of the Game.

Instructions
1.
Let’s start making this switch work! In create(), add a line setting gameState.rect2 as interactive.

2.
Now let’s create a handler for the pointerup event for when we click (and release) over gameState.rect2. Start by giving it just an empty function

3.
Inside our 'pointerup' listener for gameState.rect2, let’s switch the colors of our rectangles.

Set the fillColor of gameState.rect1 to gameState.offColor and the fillColor of gameState.rect2 to gameState.onColor.

4.
Now click on the lower square and observe the two colors switch! Well now we’ve got a switch that really switches! But does it switch back?

How would you program it so that when you click rect1 afterwards it switches the colors back? Try to get the switch to keep switching, then move on to the next exercise.

