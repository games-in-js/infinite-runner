import Obstacle from "../entities/Obstacle";

const SPAWN_MIN_TIME = 1000;
const SPAWN_MAX_TIME = 2500;

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

  update(deltatime: number) {
    this.nextSpawnTime -= deltatime;

    if (this.nextSpawnTime <= 0) {
      this.createObstacle();

      this.nextSpawnTime = Math.floor(
        Math.random() * (SPAWN_MAX_TIME - SPAWN_MIN_TIME) + SPAWN_MIN_TIME
      );
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
  }
}

export default ObstacleManager;
