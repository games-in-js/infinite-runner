class ScoreManager {
  private score = 0;
  private highScore = 0;

  constructor() {
    this.loadHighScore();
  }

  reset() {
    this.score = 0;
  }

  loadHighScore() {
    this.highScore = Number(localStorage.getItem("highScore")) || 0;
  }

  getScore() {
    return this.score;
  }

  getHighScore() {
    return this.highScore;
  }

  update(deltaTime: number) {
    // 60 pontos por segundo
    this.score += Math.floor(deltaTime / (1000 / 60));
  }

  updateHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("highScore", this.highScore.toString());
    }
  }
}

export default ScoreManager;
