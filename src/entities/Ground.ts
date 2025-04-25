import { GROUND_COLOR, GROUND_TILE_SIZE } from "../constants";

class Ground {
  private sprite: HTMLImageElement;

  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {
    this.sprite = new Image();
    this.sprite.src = "ground.png";
  }

  draw(ctx: CanvasRenderingContext2D) {
    const tilesX = Math.ceil(this.width / GROUND_TILE_SIZE);

    for (let j = 0; j < 2; j++) {
      const offsetX = this.x + j * this.width;

      ctx.fillStyle = GROUND_COLOR;
      ctx.fillRect(offsetX, this.y, this.width, this.height);

      for (let i = 0; i < tilesX; i++) {
        ctx.drawImage(
          this.sprite,
          offsetX + i * GROUND_TILE_SIZE,
          this.y,
          GROUND_TILE_SIZE,
          GROUND_TILE_SIZE
        );
      }
    }
  }

  update(gameSpeed: number) {
    this.x -= gameSpeed;
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}

export default Ground;
