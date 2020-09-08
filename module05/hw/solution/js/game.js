let gameScene = new Phaser.Scene("Game");

let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: gameScene,
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
};

let game = new Phaser.Game(config);

gameScene.preload = function preload() {
    this.load.image("btnStart", "./assets/button_start.png");
    this.load.image("btnStartDown", "./assets/button_start_down.png");
    this.load.image("btnStop", "./assets/button_stop.png");
    this.load.image("btnStopDown", "./assets/button_stop_down.png");
    this.load.image("btnReset", "./assets/button_reset.png");
    this.load.image("btnResetDown", "./assets/button_reset_down.png");
}

/**
 # template for "Stopwatch: The Game"

# define global variables


# define helper function format that converts time
# in tenths of seconds into formatted string A:BC.D
def format(t):
    pass
    
# define event handlers for buttons; "Start", "Stop", "Reset"


# define event handler for timer with 0.1 sec interval


# define draw handler
  
# create frame

# register event handlers

# start frame

# Please remember to review the grading rubric
 */

// define global variables
var nbr_win = 0;
var nbr_stop_watch = 0;
var time = 0;
var timer;
const interval = 100;

// define helper function format that converts time
// in tenths of seconds into formatted string A:BC.D
function format(t) {
    const sec = Math.floor(t / 10);
    const zsec = sec % 60 < 10 ? '0' : '';
    const min = Math.floor(sec / 60);
    const zmin = min < 10 ? '0' : '';
    return `${zmin}${min}:${zsec}${sec % 60}.${t % 10}`;
}

// define event handlers for buttons; "Start", "Stop", "Reset"

function time_handler() {
    time++;
}

function start() {
    if (!timer) {
        console.log('start');
        nbr_stop_watch++;
        timer = setInterval(time_handler, interval);
    }
}

function stop() {
    if (timer) {
        console.log('stop');
        clearInterval(timer);
        timer = undefined;
        if (time % 10 == 0) {
            nbr_win++;
        }
        // The game only begins when the user presses Spacebar to release the paddle
        if (!gameStarted) {
            // The ball should follow the paddle while the user selects where to start
            ball.setX(player.x);

            if (cursors.space.isDown) {
                gameStarted = true;
                ball.setVelocityY(-200);
                ball.setVelocityX(150);
                openingText.setVisible(false);
            }
        }
    }

    function reset() {
        console.log('reset');
        stop();
        time = nbr_stop_watch = nbr_win = 0;
    }

    gameScene.addButton = function (config) {
        const btn = this.add.image(config.x, config.y, config.texture);
        btn.setInteractive();
        btn.on('pointerdown', function (event) {
            this.setTexture(config.textureDown);
            config.callback();
        });
        btn.on('pointerup', function (event) {
            this.setTexture(config.texture);
        });
    }

    gameScene.create = function create() {
        font = {
            fontFamily: '"Roboto Condensed"',
            fontSize: '18pt',
            color: 'lightgreen'
        };
        this.infoGame = this.add.text(700, 50, '', font);
        this.infoTime = this.add.text(400, 290, '', {
            fontFamily: '"Roboto Condensed"',
            fontSize: '38pt',
            color: 'white'
        });

        this.addButton({
            x: 150,
            y: 100,
            texture: 'btnStart',
            textureDown: 'btnStopDown',
            callback: start
        });
        this.addButton({
            x: 150,
            y: 170,
            texture: 'btnStop',
            textureDown: 'btnStopDown',
            callback: stop
        });
        this.addButton({
            x: 150,
            y: 240,
            texture: 'btnReset',
            textureDown: 'btnResetDown',
            callback: reset
        });
    }

    gameScene.update = function () {
        this.infoGame.setText(`${nbr_win}/${nbr_stop_watch}`);
        this.infoTime.setText(format(time));
        // if (ball.body.velocity.x == 0) {
        //   randNum = Math.random();
        //   if (randNum >= 0.5) {
        //     ball.body.setVelocityX(150);
        //   } else {
        //     ball.body.setVelocityX(-150);
        //   }
        // }
    }

    /**
     * The function handles the collision between the ball and the player. We want
     * to ensure that the ball's direction after bouncing off the player is based
     * on which side of the player was hit. Also, to make things more difficult, we
     * want to increase the ball's velocity when it's hit.
     * @param ball - the ball sprite
     * @param player - the player/paddle sprite
     */
    function hitPlayer(ball, player) {
        // Increase the velocity of the ball after it bounces
        // ball.setVelocityY(ball.body.velocity.y - 5);

        // let newXVelocity = Math.abs(ball.body.velocity.x) + 5;
        // // If the ball is to the left of the player, ensure the x velocity is negative
        // if (ball.x < player.x) {
        //   ball.setVelocityX(-newXVelocity);
        // } else {
        //   ball.setVelocityX(newXVelocity);
        // }
    }