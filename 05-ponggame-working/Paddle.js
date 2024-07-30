class Paddle {
    

    move(isCPU, ball) {
        if (isCPU) {
            // ball.y <- where the ball is
            // this.y <- where the paddle is
            // this.l <- how long the paddle is

            // control this.vy using ball
            // don't set this.y! (cheating)
            this.vy = paddleVelocity; // <-- change this
        }
        
    }
}
