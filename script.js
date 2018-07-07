// choix ordi
function computerTurn () {
  var alea = Math.floor(Math.random()*(3-1)) + 1;
  if (alea === 1) {
    document.querySelector("#para").textContent = "Computer chose rock.";
  }
  else if (alea === 2) {
    document.querySelector("#para").textContent = "Computer chose paper.";
  }
  else if (alea === 3){
    document.querySelector("#para").textContent = "Computer chose scissors.";
  }
  return alea;
}

//initialisation global variable + score
var playerTurn = 0;
var playerScore = 0;
var computerScore = 0;
document.querySelector("#scoreComputer").textContent = "Computer: " + computerScore;
document.querySelector("#scorePlayer").textContent = "Player: " + playerScore;


// Choix joueur
document.querySelector('#rock').onclick = function() {
  playerTurn = 1;
  var computer = computerTurn();
  console.log(computer);
  game(playerTurn, computer);
}
document.querySelector('#paper').onclick = function() {
  playerTurn = 2;
  var computer = computerTurn();
  game(playerTurn, computer);
}
document.querySelector('#scissors').onclick = function() {
  playerTurn = 3;
  var computer = computerTurn();
  game(playerTurn, computer);
}

// texte tour
function lose () {
  document.querySelector("#para").textContent += " You lose..";
  computerScore++;
  document.querySelector("#scoreComputer").textContent = "Computer: " + computerScore;
}
function win () {
  document.querySelector("#para").textContent += " You win !";
  playerScore++;
  document.querySelector("#scorePlayer").textContent = "Player: " + playerScore;
}

// jeu
function game (playerTurn, computer) {
    if (playerTurn===1) {
      /*if (computer===1) {
        lose();
      }*/
      if (computer===2) {
        lose();
      }
      else if (computer===3) {
        win();
      }
    }
    else if (playerTurn===2) {
      if (computer===1) {
        win();
      }
      /*else if (computer===2) {
        lose();
      }*/
      else if (computer===3) {
        lose();
      }
    }
    else if (playerTurn===3) {
      if (computer===1) {
        lose();
      }
      else if (computer===2) {
        win();
      }
    /*  else if (computer===3) {
        lose();
      }*/
    }
  if (playerScore === 5) {
    document.querySelector("#para").textContent = "Well done !";
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#scoreComputer").textContent = "Computer: " + computerScore;
    document.querySelector("#scorePlayer").textContent = "Player: " + playerScore;
  }
  else if (computerScore === 5) {
    document.querySelector("#para").textContent = "Try again !";
    computerScore = 0;
    playerScore = 0;
    document.querySelector("#scoreComputer").textContent = "Computer: " + computerScore;
    document.querySelector("#scorePlayer").textContent = "Player: " + playerScore;
  }
}
