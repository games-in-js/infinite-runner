import Obstacle from "../entities/Obstacle";
import {
  INITIAL_GAME_SPEED,
  SPAWN_MAX_TIME,
  SPAWN_MIN_TIME,
} from "../constants";

class ObstacleManager {
  obstacles: Array<Obstacle> = [];
  nextSpawnTime = 0;

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  createObstacle() {
    const obstacle = new Obstacle(
      this.canvas.width,
      this.canvas.height - 70,
      30,
      70,
      "#fff000"
    );

    this.obstacles.push(obstacle);
  }

  draw() {
    this.obstacles.forEach((obstacle) => {
      obstacle.draw(this.ctx);
    });
  }

  update(deltatime: number, gameSpeed: number) {
    if (this.nextSpawnTime <= 0) {
      this.createObstacle();

      const speedFactor = INITIAL_GAME_SPEED / gameSpeed;

      this.nextSpawnTime =
        Math.floor(
          Math.random() * (SPAWN_MAX_TIME - SPAWN_MIN_TIME) + SPAWN_MIN_TIME
        ) * speedFactor;
    }

    this.nextSpawnTime -= deltatime;

    this.obstacles.forEach((obstacle) => {
      obstacle.x -= gameSpeed;
    });
  }
}

export default ObstacleManager;
