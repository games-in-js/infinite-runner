import Obstacle from "../entities/Obstacle";

class ObstacleManager {
  obstacles: Array<Obstacle> = [];

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.createObstacle();
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

  update() {
    console.log(this.obstacles.length);

    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
  }
}

export default ObstacleManager;
