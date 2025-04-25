import { GROUND_HEIGHT, PLAYER_SPRITE_SIZE } from "../constants";
import Sprite from "./Sprite";

class Player extends Sprite {
  private dy = 0;
  private grounded = true;

  constructor(public x: number, public y: number) {
    super(x, y, PLAYER_SPRITE_SIZE, PLAYER_SPRITE_SIZE, {
      imageSrc: "player.png",
      spriteWidth: PLAYER_SPRITE_SIZE,
      spriteHeight: PLAYER_SPRITE_SIZE,
      frameSpacing: 192,
      frameCount: 16,
    });

    this.setupControls();
  }

  setupControls() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.jump();
      }
    });

    window.addEventListener("touchstart", () => {
      this.jump();
    });
  }

  jump(jumpHeight: number = -20) {
    if (jumpHeight < -15) {
      if (this.grounded) {
        this.dy = jumpHeight;
      }
    }
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

    super.updateAnimation();
  }

  reset(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.grounded = true;
  }
}

export default Player;
