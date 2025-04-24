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

    ctx.fillStyle = GROUND_COLOR;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    for (let i = 0; i < tilesX; i++) {
      ctx.drawImage(
        this.sprite,
        this.x + i * GROUND_TILE_SIZE, // 0 | 0 + 1 * 24 | 0 + 2 * 24
        this.y,
        GROUND_TILE_SIZE,
        GROUND_TILE_SIZE
      );
    }
  }
}

export default Ground;
