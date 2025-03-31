// to handle all menu displays
import { gridContainer, menuTitle } from "./DOM.js";


// All menu options saved in menus
export const menus = {
  main: {
  title: "Main Menu",
  branches: [
    {tag: "My Home", image: "images/icons8-home-48.png"},
    {tag: "Locations", image: "images/icons8-location-100.png"},
    {tag: "Phone", image: "images/icons8-phone-48.png"},
    {tag: "Stats", image: "images/icons8-bar-chart-48.png"},
    {tag: "Settings", image: "images/icons8-options-100.png"}
  ]
  },
  Locations: {
    title: "Locations",
    branches: [
      {tag: "City", image: "images/cityscape.png"},
      {tag: "Village", image: "images/houses.png"}
    ]
  },
  City: {
    title: "City",
    branches: [
      {tag: "Hospital", image: "images/icons8-hospital-48.png"}
    ]
  }
}




export function updateMenus(menuTag){

  // Get the selected menu (either 'main' or 'Locations')
  const menu = menus[menuTag];
 
  // Generate the HTML
  menuTitle.innerHTML = `${menu.title}`;

  let gridItems;

  gridItems = menu.branches.map((branch)=>{
    return `
    <div class="grid-item">
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
    // When clicked, it calls the navigateMenus function with the branch.tag (menu name) as the argument.
    gridItem.addEventListener('click', () => navigateMenus(branch.tag));
  });
}

export function navigateMenus(menu){
  if (menu !== "Main Menu"){
    updateMenus(menu);
  }
}

navigateMenus("main");