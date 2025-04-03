// To handle navigation around the menu branches

import { updateMenus } from "./menu-update.js";
import { leaveGameBtns } from "./R-P-S/rps-DOM.js";
import { rockPaperScissorsDiv, gridContainer, menuTitle } from "./DOM.js";
import { tikTacToeDiv } from "./Tic-Tac-Toe/main-tik-tac-toe.js";


// handle previous menu and main menu features
export let menuHistory = ["main"]; 
  
export function navigateMenus(menu){
  

  // Remove a menu from the array and navigate to the last menu on the array
  if (menu === "Back"){
    goBack();
    return
  }

  if (menu === "main"){
    goToMain();
  }
  
  if (menu !== "main"){
    menuHistory.push(menu);
    updateMenus(menu);

  }
  
}

function goBack(){
  if (menuHistory.length > 1){
    menuHistory.pop();
    updateMenus(menuHistory[menuHistory.length - 1])
  }
}

function goToMain(){
  menuHistory = ["main"];
  updateMenus("main");
  // If the menuTag is "Main Menu", we show the menu and hide the games.
  rockPaperScissorsDiv.style.display = "none";  // Hide game interface
  tikTacToeDiv.style.display = "none";  // Hide game interface
  gridContainer.style.display = "grid";  // Show the main menu
  menuTitle.style.display = "block";  // Show menu title again
  leaveGameBtns.style.display = "none"
}

navigateMenus("main");



