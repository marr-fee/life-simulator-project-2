import { updateRoundCount, updatePlayerRoundScore, updateComputerRoundScore, updatePlayerScore, updateComputerScore, updateMessage, updateFinalPlayerScore, updateFinalComputerScore, continueGame, startGameAgain, gamePlayButton, leaveGameBtns } from "./rps-DOM.js"

import { rockPaperScissorsDiv, gridContainer, menuTitle, gamePlayContainer } from "../DOM.js";

import { playRockPaperScissors} from "./main-rps-script.js";
import { updateMenus } from "../menu-update.js";



export let playerScore = 0;
export let computerScore = 0;
export let roundCount = 1;


export function openRockPaperScissors(){
  rockPaperScissorsDiv.style.display = "block";
  gridContainer.style.display = "none";
  menuTitle.style.display = "none";
  gamePlayContainer.style.paddingTop = "10px";
  leaveGameBtns.style.display = "flex";

  playRockPaperScissors();
}

export function closeRockPaperScissors(){
  rockPaperScissorsDiv.style.display = "none";
  gridContainer.style.display = "grid";
  gamePlayContainer.style.paddingTop = "45px";
  menuTitle.style.display = "block";
  leaveGameBtns.style.display = "none";
  updateMenus("Games");
}

export function pickRandomComputerMove(){

    let randomPick = ["rock", "paper", "scissors"];
    let figure = Math.floor(Math.random() * randomPick.length);
    return randomPick[figure];
  }


export function hasPlayerWonRound(playerMove, computerMove) {
    return(
      playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" ||
      playerMove === "scissors" && computerMove === "paper"); 

      // to return a boolean value.
  }

export function updateResults(playerMove, computerMove) {

  let comparedResult =
    hasPlayerWonRound(playerMove, computerMove) ? (playerScore++, updatePlayerScore.innerText = playerScore, updateMessage.innerHTML = `You picked <b>${playerMove}</b> and Computer picked <b>${computerMove}</b><br>
      <b>${playerMove}</b> beats <b>${computerMove}<b><br>
      You won this round!`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden") : playerMove === computerMove ? (updateMessage.innerHTML = `Both chose <b>${playerMove}</b>,<br> That's a <b>Tie</b>.`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden") : (computerScore++, updateComputerScore.innerText = computerScore, updateMessage.innerHTML = `You picked <b>${playerMove}</b> and Computer picked <b>${computerMove}</b><br>
        <b>${computerMove}</b> beats <b>${playerMove}</b><br>
        <b>Computer won this round!</b>`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden")

        return comparedResult;
  };


export function startNextRound(){
  playerScore = 0;
  computerScore = 0;
  roundCount++;

  updateMessage.innerText = "";
  document.getElementById("game-reset-div").style.display = "none";
  document.getElementById("game-play-main-div").style.display = "block";
  updateRoundCount.innerText = roundCount;
  updateFinalPlayerScore.innerText = "0";
  updateFinalComputerScore.innerText = "0";
  updatePlayerScore.innerText = "0";
  updateComputerScore.innerText = "0";
  continueGame.style.display = "none";
  gamePlayButton.style.visibility ="visible";
  startGameAgain.style.display = "block";

}


export function continueGameBtn(){
  continueGame.style.display = "none";
  gamePlayButton.style.visibility ="visible";
  gamePlayButton.style.display ="flex";
  
}

export function resetGame(){
  roundCount = 1;
  updateRoundCount.innerText = roundCount;
  updateComputerRoundScore.innerText = "0";
  updatePlayerRoundScore.innerText = "0";
  playerScore = 0;
  computerScore = 0;
  updateMessage.innerText = "";
  updateFinalPlayerScore.innerText = "0";
  updateFinalComputerScore.innerText = "0";
  updatePlayerScore.innerText = "0";
  updateComputerScore.innerText = "0";
  gamePlayButton.style.visibility ="visible";
  continueGame.style.display = "none";
  alert("Game has been reset");
} 

