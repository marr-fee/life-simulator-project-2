
import { closeCalculatorApp } from "./calculator/calculator.js";
import { menuTitle } from "./DOM.js";
import { exitAppBtn } from "./investments/crypto/crypto-DOM.js";
import { closeCryptoPage } from "./investments/crypto/cryptoFunctions.js";
import { menuHistory } from "./menu-navigation.js";
import { updateMenus } from "./menu-update.js";
import { closeHouseListingPage } from "./houses/housing-functions.js";

exitAppBtn.addEventListener('click', ()=>{
  closeCryptoPage();
  closeCalculatorApp();
  closeHouseListingPage();
  exitAppBtn.style.display = "none";
  exitAppBtn.style.top = "35px"
  menuTitle.style.display = "block";
  updateMenus(menuHistory[menuHistory.length -1]);
})