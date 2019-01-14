//Back-end
function Player(name, score, roundScore, totalScore, hold) {
    this.name;
    this.score = 0;
    this.roundScore = 0;
    this.totalScore = 0;
    this.image;
  }
  function rollDice() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
  }
