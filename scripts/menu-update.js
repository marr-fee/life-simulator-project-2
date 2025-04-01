// To handle menu update functions 
import { menus } from "./menus.js";
import { navigateMenus } from "./menu-navigation.js";
import { gridContainer, menuTitle } from "./DOM.js";
import { openRockPaperScissors } from "./R-P-S/rps-functions.js";
import { openTikTacToeGame } from "./Tic-Tac-Toe/main-tik-tac-toe.js";


export function updateMenus(menuTag){

  // Get the selected menu (either 'main' or 'Locations')
  const menu = menus[menuTag];
 
  // Generate the HTML
  menuTitle.innerHTML = `${menu.title}`;

  let gridItems;

  gridItems = menu.branches.map((branch)=>{
    return `
    <div class="grid-item" id="${branch.id}">
    <img src="${branch.image}" alt="${branch.tag} image" class="menu-grid-icons">
    <p class="menu-grid-tag">${branch.tag}</p>
    </div>`;

  })
  // Append each grid item into the grid container
  gridContainer.innerHTML = gridItems.join('');

  // Now add event listeners to each grid item after the HTML is generated
  const gridItemsElements = gridContainer.querySelectorAll('.grid-item');

  // Loop through each grid item in the list
  gridItemsElements.forEach((gridItem, index) => {
      // For each grid item, get the corresponding 'branch' from the menu's branches array.
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
    } else {
    gridItem.addEventListener('click', () => navigateMenus(branch.tag));
    }

  });

}
