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
  Player.prototype.rollOne = function() {
    if (this.score === 1) {
      this.roundScore = 0;
      alert(this.playerName + " has rolled 1!Next players turn!")
    } else {
      this.roundScore += this.score;
    }
  }
  Player.prototype.hold = function() {
    this.totalScore += this.roundScore;
    this.roundScore = 0;
    alert("Next player's turn!")
  }