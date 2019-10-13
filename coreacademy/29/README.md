# Separate Files
Having two Scenes, a gameState object, and our config object in the same file can make our code feel cluttered. As we add more Scenes, this file will continue to grow and it can become difficult to maintain.

One way to remedy our growing code is to reorganize our code into different files and import them into the same game using <script> elements inside our index.html file.

Currently, the <body> of index.html looks like:

<body>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.min.js"></script>
  <script src="game.js"></script>
</body>
We can break up the code in game.js into files, each one containing code for a specific scene so that our <body> looks more like:

<body>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.min.js"></script>

  <script src="firstScene.js"></script>
  <script src="secondScene.js"></script>
  <script src="thirdScene.js"></script>
  <script src="game.js"></script>
</body>
We’ll keep each Scene’s code inside separate files to make it easier to maintain our growing code and avoid the need to scroll through a single gigantic game file.

Instructions
1.
We’ve already provided new blank files, StartScene.js and GameScene.js.

To include these files in our game, in index.html add two <script> elements BELOW the <script> element that links to the Phaser CDN.

One of the <script> will have a src attribute of "StartScene.js" and the other a src attribute of "GameScene.js".

2.
Copy the entire code for the StartScene class from game.js and paste the code into the StartScene.js file.

Remove the code for the StartScene class from game.js.

3.
Like we did for StartScene, transfer the GameScene scene code to the GameScene.js. Make sure that the game.js no longer has the GameScene code.