class TextManager {
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  private getResponsiveFontSize(vmin: number) {
    const maxDimension = Math.max(this.canvas.width, this.canvas.height);
    return Math.round((maxDimension * vmin) / 100);
  }

  drawText(
    text: string,
    x: number,
    y: number,
    size: number = 3, // css 1vw / 2vw
    align: CanvasTextAlign = "center",
    color: string = "#ffffff"
  ) {
    const fontSize = this.getResponsiveFontSize(size);

    this.ctx.fillStyle = color;
    this.ctx.font = `${fontSize}px "Press Start 2P"`;
    this.ctx.textAlign = align;
    this.ctx.fillText(text, x, y);
  }

  drawInitialScreen() {
    const titleY = this.canvas.height / 2;
    const centerText = this.canvas.width / 2;
    const spacing = this.getResponsiveFontSize(3);

    this.drawText("Press space or touch to play", centerText, titleY, 1.5);

    this.drawText(
      "Press space, click or scream to jump",
      centerText,
      titleY + spacing,
      1
    );
  }

  drawScore(score: number) {
    const spacing = this.getResponsiveFontSize(4);

    this.drawText(
      `Score: ${score.toString().padStart(6, "0")}`,
      spacing,
      spacing,
      1,
      "left"
    );
  }

  drawHighScore(highScore: number) {
    const spacing = this.getResponsiveFontSize(4);

    this.drawText(
      `High Score: ${highScore.toString().padStart(6, "0")}`,
      this.canvas.width - spacing,
      spacing,
      1,
      "right"
    );
  }

  drawGameOverScreen() {
    const titleY = this.canvas.height / 2;
    const centerText = this.canvas.width / 2;
    const spacing = this.getResponsiveFontSize(3);

    this.drawText("Game Over", centerText, titleY, 2);

    this.drawText(
      "Press space or touch to restart",
      centerText,
      titleY + spacing,
      1
    );
  }
}

export default TextManager;
