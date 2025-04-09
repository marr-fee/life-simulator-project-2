
import { updateMenus } from "../menu-update.js";
import { gridContainer, menuTitle, gamePlayContainer, gameMainNavMenuDiv } from "../DOM.js";
import { leaveGameBtns } from "../R-P-S/rps-DOM.js";


export function openTikTacToeGame(){
  tikTacToeDiv.style.display = "flex";
  gridContainer.style.display = "none";
  menuTitle.style.display = "none";
  gamePlayContainer.style.display = 'none'
  leaveGameBtns.style.display = "flex";
  gameMainNavMenuDiv.style.display ='flex';

  playTikTacToeGame();

}

export const tikTacToeDiv = document.getElementById('tik-tac-toe-div')
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
const turnIndicator = document.getElementById('turn-indicator');

export function playTikTacToeGame(){

  
  function updateTurnIndicator() {
    turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
  }
  
  let currentPlayer = 'X';
  let boardState = Array(9).fill(null);
  
  function handleClick(event) {
    if (checkWinner()) return;
  
    const index = event.target.getAttribute('data-index');
  
    if (boardState[index] || checkWinner()) return;
  
    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;
  
    if (checkWinner()) {
      setTimeout(() => alert(`${currentPlayer} wins!`), 100);
      turnIndicator.textContent = `Player ${currentPlayer} wins!`;
    } else if (boardState.every(cell => cell)) {
      setTimeout(() => alert('Draw!'), 100);
      turnIndicator.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateTurnIndicator();
    }
  }
  
  function checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (let combo of winPatterns) {  // Use winPatterns here
      const [a, b, c] = combo;
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        cells[a].classList.add('winner');
        cells[b].classList.add('winner');
        cells[c].classList.add('winner');
        return true;
      }
    }
    return false;
  }
  
  function resetGame() {
    boardState.fill(null);
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('winner');
    });
  
    currentPlayer = 'X';
    updateTurnIndicator();
  }
  
  updateTurnIndicator();
  
  cells.forEach(cell => cell.addEventListener('click', handleClick));
  restartButton.addEventListener('click', resetGame);
  
}

export function closeTikTacToeGame(){
  tikTacToeDiv.style.display = "none";
  gridContainer.style.display = "grid";
  gamePlayContainer.style.display = 'flex';
  menuTitle.style.display = "block";
  leaveGameBtns.style.display = "none";
  updateMenus("Games");
}
  leaveGameBtns.addEventListener('click', () => {
    closeTikTacToeGame();
  })