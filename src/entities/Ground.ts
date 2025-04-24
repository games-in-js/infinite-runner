import { GROUND_COLOR } from "../constants";

class Ground {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = GROUND_COLOR;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Ground;
