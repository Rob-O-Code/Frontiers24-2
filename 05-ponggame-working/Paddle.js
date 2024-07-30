class Paddle {
    constructor(x, y, w, h, side, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.side = side;
        this.c = c;
        this.vy = 0;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

    move(isCPU, ball) {
        if (isCPU) {
            // ball.y <- where the ball is
            // this.y <- where the paddle is
            // this.h <- how long the paddle is

            // control this.vy using ball
            // don't set this.y! (cheating)
            this.vy = paddleVelocity; // <-- change this
        }
        this.y += this.vy;
        if (this.y < 0) this.y = 0;
        if (this.y + this.h > boardHeight) this.y = boardHeight - this.h;
    }
}
