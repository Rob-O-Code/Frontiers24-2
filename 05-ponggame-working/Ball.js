class Ball {
    constructor(x, y, vx, vy, r, c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    /**
     * Causes the ball to bounce off of objects on the screen
     * @param {*} things a collection of bounceable things 
     * @returns the side that scored a point, or SIDE.NONE
     */
    bounce(things) {
        
        return SIDE.NONE;
    }

    bounceWalls() {
        if (this.y - this.r < 0) {
            this.vy = Math.abs(this.vy);
        }
        if (this.y + this.r > boardHeight) {
            this.vy = -Math.abs(this.vy);
        }
    }

    bounceLeftPaddle(paddle) {
        if (this.x - this.r > paddle.w) return SIDE.NONE;
        if (this.x - this.r < 0) return SIDE.RIGHT; // Someone got a point...
        if (this.y < paddle.y) return SIDE.NONE;
        if (this.y > paddle.y + paddle.l) return SIDE.NONE;
        if (this.vx < 0) {
            this.vx = paddleForce * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2; // between -1.0 and 1.0
            this.vy = this.vy + paddlePos*paddleSpin;
        }
        return SIDE.NONE;
    }

    bounceRightPaddle(paddle) {
        if (this.x + this.r < paddle.x) return SIDE.NONE;
        if (this.x + this.r > paddle.x + paddle.w) return SIDE.LEFT; // Someone got a point...
        if (this.y < paddle.y) return SIDE.NONE;
        if (this.y > paddle.y + paddle.l) return SIDE.NONE;
        if (this.vx > 0) {
            this.vx = -paddleForce * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2; // between -1.0 and 1.0
            this.vy = this.vy + paddlePos*paddleSpin;
        }
        return SIDE.NONE;
    }
}