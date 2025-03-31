// To handle eventlisteners
import { gameIntroPage, startLifeBtn, buttonSpan, gameContainer, welcomeDiv, gameMainNavMenuDiv, nextPageBtn1, submitPlayerStatBtn, gamePlayContainer } from "./DOM.js";
import { startTime } from "./time.js";
import { saveSelectedBelief, updatePlayerStats, getRandomPlayerStats } from "./player-stats.js";
import { updateMenus, menus } from "./menus.js";


// Event listener for the next page button (hides game intro page and shows glowing start game button)
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
  welcomeDiv.style.display = "none"; // Hide the welcome div when stats are submitted
  gameContainer.style.background = "rgb(255, 255, 255)"; // Change background color of the game container
  gameContainer.style.justifyContent = "flex-start";  // Change display of the game container to start the grid at the top
  gameMainNavMenuDiv.style.display = "flex";

  gamePlayContainer.style.display = "flex";
  saveSelectedBelief();
  startTime();
  updatePlayerStats();
  updateMenus();
})
