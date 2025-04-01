// To handle eventlisteners
import { gameIntroPage, startLifeBtn, buttonSpan, gameContainer, welcomeDiv, nextPageBtn1, submitPlayerStatBtn, gamePlayContainer } from "./DOM.js";

import { saveSelectedBelief, updatePlayerStats, getRandomPlayerStats } from "./player-stats.js";



// Event listener for continue button
nextPageBtn1.addEventListener('click', () =>{
  gameIntroPage.style.display = "none"; // Hides the game intro page
  startLifeBtn.style.display = "flex"; // Displays the glowing start game button
})


// Event listener for the glowing start game button
startLifeBtn.addEventListener('click', () => {
  startLifeBtn.classList.add("start-life"); // Adds a CSS class for animation/effects
  buttonSpan.classList.add('btn-span'); // Adds a CSS class to the span inside the button
  
  // Wait for 2.7 seconds to transition from intro to game
  setTimeout(() =>{
    startLifeBtn.style.display = "none"; 
    gameContainer.style.background = "linear-gradient(150deg, rgb(219, 184, 252), rgb(188, 150, 223)"; 
    gameContainer.style.color = "rgb(0, 0, 0)"; 
    welcomeDiv.style.display = "flex"; 
  }, 2700)

  // Generate random player stats
  getRandomPlayerStats();
})

// Event listener for the submit player stats button which also starts the time
submitPlayerStatBtn.addEventListener('click', () => {

  // FUNCTIONS to run on click
  saveSelectedBelief();
  
})
