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

    $(document).ready(function() {
        $("button#play").click(function(event) {
          player1 = new Player(true);
          player2 = new Player(false);
          $("#game").show();
          $("#pre-game").hide();
      
          var player1Name = $(".player1").val();
          $("#player1Name").text(player1Name);
      
          var player2Name = $(".player2").val();
          $("#player2Name").text(player2Name);
      
          player1.playerName = player1Name;
          player2.playerName = player2Name;
        });
        $(".reset").click(function(event) {
            event.preventDefault();
            $(".player1").val("");
            $(".player2").val("");
        
            $("#game").hide(); 
            $("#round-score-player1").empty();
            $("#total-score-player1").empty();
            $("#score-player1").empty();
            $("#round-score-player1").empty();
            $("#total-score-player2").empty();
            $("#score-player2").empty();
        
            $("#pre-game").show();
          }); 
          $("#roll-player1").click(function() {
            player1.score = rollDice();
            $("#score-player1").html(player1.score);
            player1.pic();
            $(".image").html(player1.image);
            player1.rollOne();
            $("#round-score-player1").html(player1.roundScore);
          }); 
          $("#roll-player2").click(function() {
            player2.score = rollDice();
            $("#score-player2").html(player2.score);
            player2.pic();
            $(".image").html(player2.image);
            player2.rollOne();
            $("#round-score-player2").html(player2.roundScore);
          }); 
          $("#hold-player1").click(function() {
            player1.hold();
            $("#total-score-player1").html(player1.totalScore);
            $("#round-score-player1").val("");
            $("#score-player1").val("");
            player1.winner();
          });