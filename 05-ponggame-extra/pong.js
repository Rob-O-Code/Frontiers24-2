const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");
const STATE = {STARTUP: 0, PLAYING: 1, GAMEOVER: 2};
const SIDE = {NONE: 0, LEFT: 1, RIGHT: 2};

let boardWidth = 300;
let boardHeight = 300;
let paddleWidth = 25;
let paddleLength = 90;
let ballRadius = 10;
let paddleVelocity = 5;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
let state = STATE.STARTUP;

function resetGame() {
    state = STATE.STARTUP;
    clearInterval(intervalID);
    nextTick();
}

let intervalID;
function nextTick() {
    switch (state) {
        case STATE.STARTUP:
            state = startup();
            break;
        case STATE.PLAYING:
            state = playing();
            break;
        case STATE.GAMEOVER:
            state = gameover();
            break;
        default:
            state = STATE.STARTUP;
            break;
    }
    intervalID = setTimeout(nextTick, 10);
}

function ballReset(side) {
    // Should ball go another direction?
    ball = new Ball(boardWidth/2, boardHeight/2, 1, -1, ballRadius, "hotpink");
}

function startup() {
    ballReset(SIDE.NONE);
    paddleL = new Paddle(0, 0, paddleWidth, paddleLength, SIDE.LEFT, "red");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleWidth, paddleLength, SIDE.RIGHT, "blue");
    draw();
    return STATE.PLAYING;
}

function playing() {
    paddleL.move(false, ball);
    paddleR.move(cpucheck.checked, ball);
    let sideScore = ball.bounce([paddleL, paddleR]);
    if (sideScore != SIDE.NONE) {
        if (sideScore == SIDE.LEFT) scoreL++;
        if (sideScore == SIDE.RIGHT) scoreR++;
        updateScore();
        ballReset(sideScore);
    }
    ball.move();
    draw();
    if (scoreL > 2 || scoreR > 2) return STATE.GAMEOVER;
    return STATE.PLAYING;
}

function gameover() {
    // What should happen here?
    return STATE.GAMEOVER;
}

function draw() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
    
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`; // 7 : 3
}