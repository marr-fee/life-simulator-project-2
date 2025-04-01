// To handle navigation around the menu branches

import { updateMenus } from "./menu-update.js";
import { leaveGameBtns } from "./R-P-S/rps-DOM.js";
import { rockPaperScissorsDiv, gridContainer, menuTitle } from "./DOM.js";
import { tikTacToeDiv } from "./Tic-Tac-Toe/main-tik-tac-toe.js";



export function navigateMenus(menu){
  if (menu !== "Main Menu"){
    updateMenus(menu);
  }
  
  if (menu === "Main Menu"){
    // If the menuTag is "Main Menu", we show the menu and hide the games.
    rockPaperScissorsDiv.style.display = "none";  // Hide game interface
    tikTacToeDiv.style.display = "none";  // Hide game interface
    gridContainer.style.display = "block";  // Show the main menu
    menuTitle.style.display = "block";  // Show menu title again
    leaveGameBtns.style.display = "none"
  }
}

navigateMenus("main");