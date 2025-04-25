import { OBSTACLE_SPRITE_HEIGHT, OBSTACLE_SPRITE_WIDTH } from "../constants";
import Sprite from "./Sprite";

class Obstacle extends Sprite {
  constructor(public x: number, public y: number) {
    super(x, y, OBSTACLE_SPRITE_WIDTH, OBSTACLE_SPRITE_HEIGHT, {
      imageSrc: "monster.png",
      spriteWidth: OBSTACLE_SPRITE_WIDTH,
      spriteHeight: OBSTACLE_SPRITE_HEIGHT,
      frameCount: 4,
      animationSpeed: 6,
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.updateAnimation();
    super.draw(ctx);
  }
}

export default Obstacle;
