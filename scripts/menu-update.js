// To handle menu update functions 
import { menus } from "./menus.js";
import { navigateMenus, menuHistory } from "./menu-navigation.js";
import { gameContainer, gameMainNavMenuDiv, gridContainer, menuTitle } from "./DOM.js";
import { openRockPaperScissors } from "./R-P-S/rps-functions.js";
import { openTikTacToeGame } from "./Tic-Tac-Toe/main-tik-tac-toe.js";
import { openCryptoPage } from "./investments/crypto/cryptoFunctions.js";
import { openCalculatorApp } from "./calculator/calculator.js";


export function updateMenus(menuTag){

  // Get the selected menu (either 'main' or 'Locations')
  const menu = menus[menuTag];
 
  // Generate the HTML
  menuTitle.innerHTML = `${menu.title}`;

  let gridItems;
  let gridItemCount = 0;

  gridItems = menu.branches.map((branch)=>{
    return `
    <div class="grid-item" id="${branch.id}">
    <img src="${branch.image}" alt="${branch.tag} image" class="menu-grid-icons">
    <p class="menu-grid-tag">${branch.tag}</p>
    </div>`;

  })
  // Append each grid item into the grid container
  gridContainer.innerHTML = gridItems.join('') + `<div class="grid-item" id="back-to-previous">
    <img src="images/back.png" alt="Return image" class="menu-grid-icons">
    <p class="menu-grid-tag">Back</p>
  </div>
  <div class="grid-item" id="back-to-main">
    <img src="images/icons8-return-100.png" alt="Return to main menu image" class="menu-grid-icons">
    <p class="menu-grid-tag">Main Menu</p>
  </div>`;


  // Now add event listeners to each grid item after the HTML is generated
  const gridItemsElements = gridContainer.querySelectorAll('.grid-item');

  // Loop through each grid item in the list
  gridItemsElements.forEach((gridItem, index) => {
     
     gridItemCount += 1;

      // For each grid item, get the corresponding 'branch' from the menu's branches array.
  
    // If it's the "Back" button, add the event listener separately
    if (gridItem.id === "back-to-previous") {
      
      gridItem.addEventListener('click', () => {
        navigateMenus("Back"); // Navigate back to the previous menu
      });
      document.getElementById('back-to-previous').style.display = menuHistory.length > 1 ? "flex" : "none"
    }else if (gridItem.id === "back-to-main"){
      gridItem.addEventListener('click', () => {
        navigateMenus("main"); // Navigate back to the main menu 
      });
     
      document.getElementById('back-to-main').style.display = menuHistory.length > 2 ? "flex" : "none";
    } else {
  // The index of the grid item matches the index of the branch.
      const branch = menu.branches[index];

      
      // If the branch.tag is R-P-S, trigger the game directly
      if (branch.tag === "R-P-S") {
        gridItem.addEventListener('click', () => {
          openRockPaperScissors();
        });
      }else if (branch.tag === "Tik Tak Toe"){
        gridItem.addEventListener('click', () => {
          openTikTacToeGame();
        });
      }else if (branch.tag === "Crypto Exchange"){
        gridItem.addEventListener('click', () => {
          openCryptoPage();
        });
      }else if (branch.tag === "Calculator"){
        gridItem.addEventListener('click', () => {
          openCalculatorApp();
        });
      } else {
      gridItem.addEventListener('click', () => navigateMenus(branch.tag));
      }
    }
  });
  
  // add scroll bar if grid menu overflows
  if (gridItemCount > 12){
    gameContainer.style.overflowY = "scroll";
    gameContainer.style.scrollbarWidth = "thin";
    gameMainNavMenuDiv.style.position = "sticky";
    gameMainNavMenuDiv.style.marginBottom = "-25px";
  } else {
    gameContainer.style.overflowY = "hidden";
    gameContainer.style.scrollbarWidth = "none";
    gameMainNavMenuDiv.style.position = "sticky";
  }

}

