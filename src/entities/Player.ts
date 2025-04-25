import { GROUND_HEIGHT, PLAYER_SPRITE_SIZE } from "../constants";

class Player {
  private dy = 0;
  private grounded = true;
  private sprite = new Image();

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {
    this.sprite.src = "player.png";
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

  jump(jumpHeight: number = -20) {
    if (jumpHeight < -15) {
      if (this.grounded) {
        this.dy = jumpHeight;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    const frameSpacing = 192;
    const frameNumber = 0;

    ctx.drawImage(
      this.sprite,
      0 + frameNumber * frameSpacing,
      0,
      PLAYER_SPRITE_SIZE,
      PLAYER_SPRITE_SIZE,
      this.x,
      this.y,
      PLAYER_SPRITE_SIZE,
      PLAYER_SPRITE_SIZE
    );
  }

  update(canvas: HTMLCanvasElement) {
    this.y += this.dy;

    const groundY = canvas.height - GROUND_HEIGHT;

    // gravidade
    if (this.y + this.height < groundY) {
      this.dy += 1;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = groundY - this.height;
    }
  }

  reset(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.grounded = true;
  }
}

export default Player;
