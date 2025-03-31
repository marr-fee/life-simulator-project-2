// To handle RPS DOM manipulation


export const nextMoveButton = document.getElementById('continue-btn');
export const nextRoundButton = document.getElementById('next-round');
export const restartGame = document.getElementById('reset-game');

export let updateRoundCount = document.querySelector('.round-count');
export let roundOverDisplay = document.querySelector('.round-over');
export let updatePlayerRoundScore = document.querySelector('.player-round-score');
export let updateComputerRoundScore = document.querySelector('.computer-round-score');
export let updatePlayerScore = document.getElementById("player-score");
export let updateComputerScore = document.getElementById("computer-score");
export let updateMessage = document.getElementById("game-update-msg");
export let gameFinalOutcome = document.getElementById("final-win-or-lose-msg");
export let congratulationMsg = document.getElementById("congrats-betterluck-msg");
export let updateFinalPlayerScore = document.getElementById("final-player-score");
export let updateFinalComputerScore = document.getElementById("final-computer-score");
export let continueGame = document.getElementById("game-update-msg-container");
export let startGameAgain = document.getElementById("start-again-container");
export let gamePlayButton = document.getElementById("game-play-btn-container");
export let continuPlaying = document.getElementById("continue-btn");
export const leaveRPSgameBtn = document.getElementById('rps-exit-btn');