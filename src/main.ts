import { INITIAL_GAME_SPEED } from "./constants";
import Player from "./entities/Player";
import ObstacleManager from "./managers/ObstacleManager";
import TextManager from "./managers/TextManager";
import "./style.css";

class Game {
  canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
  ctx = this.canvas.getContext("2d")!;
  player: Player;
  obstacleManager: ObstacleManager;
  textManager: TextManager;

  lastTimestamp = 0;
  gameSpeed = INITIAL_GAME_SPEED;
  isGameOver = false;
  isPlaying = false;

  constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.player = new Player(50, this.canvas.height - 50, 50, 50, "#f231a5");
    this.obstacleManager = new ObstacleManager(this.canvas, this.ctx);
    this.textManager = new TextManager(this.canvas, this.ctx);

    this.setupControls();
  }

  handleGameAction() {
    if (!this.isPlaying && !this.isGameOver) {
      this.isPlaying = true;
    } else if (this.isGameOver) {
      this.resetGame();
    }
  }

  setupControls() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.handleGameAction();
      }
    });
  }

  resetGame() {
    this.isGameOver = false;
    this.isPlaying = true;
    this.gameSpeed = INITIAL_GAME_SPEED;
    this.obstacleManager.reset();
    this.player.reset(50, this.canvas.height - 50);
  }

  render(timestamp: number) {
    // calcular a diferença entre o tempo passado do quadro anterior e o quadro
    // que acabou de renderizar, gerar o delta time (diferencial)
    const deltatime = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    // clear canvas
    this.ctx.fillStyle = "#0a0c21";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // desenha os elementos
    this.player.draw(this.ctx);
    this.obstacleManager.draw();

    if (!this.isPlaying) {
      this.textManager.drawInitialScreen();
    }

    // atualiza os elementos
    if (this.isPlaying && !this.isGameOver) {
      this.player.update(this.canvas);
      this.obstacleManager.update(deltatime, this.gameSpeed);
      this.gameSpeed += 0.3 * (deltatime / 1000);

      if (this.obstacleManager.checkCollision(this.player)) {
        this.isGameOver = true;
      }
    }

    if (this.isGameOver) {
      this.textManager.drawGameOverScreen();
    }
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
