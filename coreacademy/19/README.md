# Timed Events
Currently, our game creates a few enemy sprites and stops. But we could create a loop to consistently create more enemies to make the game more challenging. To implement this loop we can call this.time.addEvent() and pass in an object with specifications for how we want this loop to run. For instance:

function create() {
  function generateEnemy () { 
    // Code to create an enemy sprite
  }
  const enemyGenLoop = this.time.addEvent({
    callback: generateEnemy,
    delay: 100,
    callbackScope: this,
    loop: true,
  })
} 
In our example, we accessed the Scene’s time property and called .addEvent() with an object representing the event we want called. That object has 4 keys that each provide different specifications:

callback has a value of generateEnemy which means this event will call generateEnemy() function.
delay has a value of 100, which determines, in milliseconds, how long is the delay before executing the callback again.
callbackScope has a value of this, which selects the Scene this event is used in.
loop has a value of true, which means that this event will continue to execute until we remove it.
For more information about timed events, look over RexRainbow’s comprehensive Phaser documentation!

Instructions
1.
In create(), in a line under bugGen(), call this.time.addEvent() and assign it to a variable bugGenLoop.

We’ll provide .addEvent() with an argument in the next step.

2.
Pass into .addEvent() an object with the following properties:

delay: 150,
callback: bugGen,
callbackScope: this,
loop: true
After you pass this checkpoint, watch the bugs rain from the sky!

