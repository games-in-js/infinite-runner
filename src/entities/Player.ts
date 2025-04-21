class Player {
  private dy = 0;
  private grounded = true;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.setupControls();
  }

  setupControls() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.jump();
      }
    });
  }

  jump() {
    if (this.grounded) {
      this.dy = -20;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(canvas: HTMLCanvasElement) {
    this.y += this.dy;

    // gravidade
    if (this.y + this.height < canvas.height) {
      this.dy += 1;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.height;
    }
  }
}

export default Player;
