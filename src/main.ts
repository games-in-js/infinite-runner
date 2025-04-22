import Obstacle from "./entities/Obstacle";
import Player from "./entities/Player";
import "./style.css";

class Game {
  canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
  ctx = this.canvas.getContext("2d")!;
  player: Player;
  obstacle: Obstacle;

  constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.player = new Player(50, this.canvas.height - 50, 50, 50, "#f231a5");
    this.obstacle = new Obstacle(
      this.canvas.width,
      this.canvas.height - 70,
      30,
      70,
      "#fff000"
    );
  }

  render() {
    this.ctx.fillStyle = "#0a0c21";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // desenha os elementos
    this.player.draw(this.ctx);
    this.obstacle.draw(this.ctx);

    // atualiza os elementos
    this.player.update(this.canvas);
    this.obstacle.update();
  }
}

window.onload = () => {
  const game = new Game();

  // loop infinito
  function gameLoop() {
    game.render();
    // atualizando a cada X quadros por segundo
    // varia baseado no seu monitor/hardware
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};
