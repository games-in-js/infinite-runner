import Player from "./entities/Player";
import ObstacleManager from "./managers/ObstacleManager";
import "./style.css";

class Game {
  canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
  ctx = this.canvas.getContext("2d")!;
  player: Player;
  obstacleManager: ObstacleManager;

  lastTimestamp = 0;

  constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.player = new Player(50, this.canvas.height - 50, 50, 50, "#f231a5");
    this.obstacleManager = new ObstacleManager(this.canvas, this.ctx);
  }

  render(timestamp: number) {
    // calcular a diferença entre o tempo passado do quadro anterior e o quadro
    // que acabou de renderizar, gerar o delta time (diferencial)
    const deltatime = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    this.ctx.fillStyle = "#0a0c21";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // desenha os elementos
    this.player.draw(this.ctx);
    this.obstacleManager.draw();

    // atualiza os elementos
    this.player.update(this.canvas);
    this.obstacleManager.update(deltatime);
  }
}

window.onload = () => {
  const game = new Game();

  // loop infinito
  function gameLoop(timestamp: number) {
    game.render(timestamp);
    // atualizando a cada X quadros por segundo
    // varia baseado no seu monitor/hardware
    requestAnimationFrame(gameLoop);
  }

  gameLoop(0);
};
