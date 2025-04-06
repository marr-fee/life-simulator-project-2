import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
import { gridContainer, menuTitle } from "../DOM.js";
import { houseingWebsiteMainDiv, housePaymentCompletionDiv, chatBubbleHousing, housePurchaseFeeedbackDiv, housingWebsiteContainer, housingWebsiteWelcomDiv, initializeHouseList } from "./housing-homepage.js";
import { gameMainNavMenuDiv } from "../DOM.js";


export function calculateAmountAfterTax(percent, bill){
  let totalAmount;
  totalAmount = bill + ((percent * bill) / (100 * 1));
  return Math.floor(totalAmount);
}

export function closeHouseListingPage(){
  housingWebsiteContainer.style.display = "none";
  gridContainer.style.display = "grid";
  menuTitle.style.display = "block";
  //gamePlayContainer.style.paddingTop = "10px";
  exitAppBtn.style.display = "none";
  //gameMainNavMenuDiv.style.marginBottom = "-30px"
}



export function openHouseListingPage(){
    housingWebsiteContainer.style.display = "flex";
    housingWebsiteWelcomDiv.style.display = "flex";
    houseingWebsiteMainDiv.style.display = "none";
    gameMainNavMenuDiv.style.display = "none";
    setTimeout(() => {
      housingWebsiteWelcomDiv.style.display = "none";
      houseingWebsiteMainDiv.style.display = "flex";
      gameMainNavMenuDiv.style.display = "flex";
      exitAppBtn.style.display = "flex";
      exitAppBtn.style.top = "120px";
    }, 3000);
    
    gridContainer.style.display = "none";
    menuTitle.style.display = "none";
    //gamePlayContainer.style.paddingTop = "10px";
    exitAppBtn.style.display = "none";
    //gameMainNavMenuDiv.style.marginBottom = "-30px"
  
    initializeHouseList();
}
