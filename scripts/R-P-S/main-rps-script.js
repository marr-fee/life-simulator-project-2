// To handle ROCK PAPER SCISSORS LOGIG
import { pickRandomComputerMove, updateResults, continueGameBtn, startNextRound, resetGame, playerScore, computerScore, roundCount, closeRockPaperScissors } from "./rps-functions.js";

import { nextMoveButton, restartGame, roundOverDisplay, gameFinalOutcome, congratulationMsg, continuPlaying, nextRoundButton, updatePlayerRoundScore, updateComputerRoundScore, updateFinalPlayerScore, updateFinalComputerScore, startGameAgain, leaveGameBtns } from "./rps-DOM.js";

export let playerRoundScore = 0;
export let computerRoundScore = 0;


export function playRockPaperScissors(){

  
  const choices = ["rock", "paper", "scissors"];
  
  
  choices.forEach((playerMove) => {
    document.getElementById(playerMove).addEventListener("click", () => {
        playGame(playerMove);
      });
  });
  
  function playGame(playerMove) {
  
    let computerMove = pickRandomComputerMove();
  
    updateResults(playerMove, computerMove);
  
    if (playerScore === 10 && computerScore < 10){
      roundOverDisplay.innerHTML = `<strong>Round ${roundCount} Over!</strong>`;
      playerRoundScore++;
      updatePlayerRoundScore.innerText = playerRoundScore;
      gameFinalOutcome.innerText = `You Won This Round!`;
      gameFinalOutcome.style.color = "green";
      congratulationMsg.innerText = `Congratulations!`;
      updateFinalPlayerScore.innerText = playerScore;
      updateFinalComputerScore.innerText = computerScore;
      document.getElementById("game-reset-div").style.display = "block";
      
      document.getElementById("game-play-main-div").style.display = "none";
      startGameAgain.style.display = "none";
  
    } else if (playerScore < 10 && computerScore === 10) {
      roundOverDisplay.innerHTML = `<strong>Round ${roundCount} Over!</strong>`;
      computerRoundScore++;
      updateComputerRoundScore.innerText = computerRoundScore;
      gameFinalOutcome.innerText = `You Lose This Round!`;
      gameFinalOutcome.style.color = "red";
      congratulationMsg.innerText = `Better luck next round.`;
      updateFinalPlayerScore.innerText = playerScore;
      updateFinalComputerScore.innerText = computerScore;
      document.getElementById("game-reset-div").style.display = "block";
      document.getElementById("game-play-main-div").style.display = "none";
      startGameAgain.style.display = "none";
    }
  }
  
  
  nextMoveButton.addEventListener('click', () => {
    continueGameBtn();
  });
  
  nextRoundButton.addEventListener('click', () => {
    startNextRound();
  });
  
  restartGame.addEventListener('click', () => {
    resetGame();
  });
  
  leaveGameBtns.addEventListener('click', () => {
    closeRockPaperScissors();
  })
}
