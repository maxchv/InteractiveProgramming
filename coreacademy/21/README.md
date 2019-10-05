# Adding a score
One thing we’re still missing from our game is a scoring system to motivate our players. We can store our score as property in the gameState object and increase it as the game progresses. To display the score we can call this.add.text(). We should also consider when we want to increase the score, e.g. increase the score every 10 seconds, or each time an enemy is generated, or how much the player sprite moves, etc…

For our game, we could increase the score each time the player sprite dodges a bug. When a player dodges a bug, it collides with the platform, so we can add our logic in that Collider object. Let’s do that now!

When a game starts we should set a new property with a key of score and value of 0 in the gameState object like so:

const gameState = { score: 0 };
We’ll also need gameState to display the score on screen. In create() we would add:

gameState.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' })
Now we can access gameState.scoreText and change the text to display the increased score. Since we want to increment gameState.score when a bug collides with the ground platform, we need to add that logic to our ColliderObject:

this.physics.add.collider(bugs, platforms, function (bug){
  bug.destroy();

  gameState.score += 10;
  gameState.scoreText.setText(`Score: ${gameState.score}`)
})
Let’s incorporate this into our game!

Instructions
1.
Locate the gameState object and add a score key with a 0 value. You’ll use this property to keep track of the game’s score.

2.
In create(), inside the callback of the bugs and platforms Collider object, increase gameState.score by 10 every time a bug collides with the ground platform.

3.
Notice that at the center of the platform there is a displayed score! That’s because in create(), we added gameState.scoreText. And it is assigned this.add.text(16, 16, 'Score: 0', { fontSize: '15px', fill: '#000000' }). Since that the score is going to change, you need to change gameState.scoreText.

Call .setText(`Score: ${gameState.score}`) on gameState.scoreText.

Once you pass this checkpoint and play the game, you’ll see the updated score displayed on screen!

