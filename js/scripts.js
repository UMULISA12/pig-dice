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
  Player.prototype.winner = function() {
    if (this.totalScore >= 100) {
      $(".image").html("<img src='img/200w (1).webp'>")
      alert(this.playerName + " ,you have won!" + " (" + this.totalScore + " points!)"+ " Press 'New game'.")
  
    }
  }
  Player.prototype.pic = function() {
    if (this.score === 2) {
      $(".image").html("<img src='images/2dice.png'>")
    } else if (this.score === 3) {
      $(".image").html("<img src='images/3dice.png'>")
    } else if (this.score === 4) {
      $(".image").html("<img src='images/4dice.png'>")
    } else if (this.score === 5) {
      $(".image").html("<img src='images/5dice.png'>")
    } else if (this.score === 6) {
      $(".image").html("<img src='images/6dice.png'>")
    } else {
      $(".image").html("<img src='img/download ().jpeg'>");
    }
    Player.prototype.newGame = function() {
        this.score = 0;
        this.roundScore = 0;
        this.totalScore = 0;
    
      }
    }
    //Front-end