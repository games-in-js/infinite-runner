import Obstacle from "../entities/Obstacle";

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

  // chamado a cada quadro por segundo
  // 60 fps = 60 quadros por segundo
  // 60 * 5 = subtrai 300 a cada segundo
  // 1000 ~ 1000 / 300 ~ 3.33s
  // 120 fps > 600! => 0.5s

  // um jogo não deve ser mais fácil/mais difícil pelo fps
  // deltatime
  update() {
    this.nextSpawnTime -= 5;

    if (this.nextSpawnTime <= 0) {
      this.createObstacle();

      this.nextSpawnTime = 300; // 1000ms === 1s
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
  }
}

export default ObstacleManager;
