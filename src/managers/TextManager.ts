class TextManager {
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawText(
    text: string,
    x: number,
    y: number,
    size: number = 48,
    align: CanvasTextAlign = "center",
    color: string = "#ffffff"
  ) {
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px Arial`;
    this.ctx.textAlign = align;
    this.ctx.fillText(text, x, y);
  }

  drawInitialScreen() {
    const titleY = this.canvas.height / 2;
    const centerText = this.canvas.width / 2;

    this.drawText("Press space or touch to play", centerText, titleY);

    this.drawText(
      "Press space, click or scream to jump",
      centerText,
      titleY + 60,
      32
    );
  }

  drawGameOverScreen() {
    const titleY = this.canvas.height / 2;
    const centerText = this.canvas.width / 2;

    this.drawText("Game Over", centerText, titleY);

    this.drawText(
      "Press space or touch to restart",
      centerText,
      titleY + 60,
      32
    );
  }
}

export default TextManager;
