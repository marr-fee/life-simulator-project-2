// to handle all menu displays
import { gridContainer } from "./DOM.js";

export const menus = {
  title: "Main Menu",
  branches: [
    {tag: "My Home", image: "images/icons8-home-48.png"},
    {tag: "Locations", image: "images/icons8-location-100.png"},
    {tag: "Phone", image: "images/icons8-phone-48.png"},
    {tag: "Stats", image: "images/icons8-bar-chart-48.png"},
    {tag: "Settings", image: "images/icons8-options-100.png"}
  ]
},
Locations = {
  title: "Locations",
  branches: [
    {tag: "City", image: "images/cityscape.png"},
    {tag: "Village", image: "images/houses.png"}
  ]
}

export function updateMenus(){

  let gridItems;

  gridItems = menus.branches.map((branch)=>{
    return `<div class="grid-item"><img src="${branch.image}" alt="${branch.tag} image"><p>${branch.tag}</p></div>`;

  })
  gridContainer.innerHTML += gridItems.join('');
}