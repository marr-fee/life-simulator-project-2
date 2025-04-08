
import { closeCalculatorApp } from "./calculator/calculator.js";
import { menuTitle } from "./DOM.js";
import { exitAppBtn } from "./investments/crypto/crypto-DOM.js";
import { closeCryptoPage } from "./investments/crypto/cryptoFunctions.js";
import { menuHistory } from "./menu-navigation.js";
import { updateMenus } from "./menu-update.js";
import { closeHouseListingPage } from "./houses/housing-functions.js";
import { closeMessagingApp } from "./messaging/msg-functions.js";

exitAppBtn.addEventListener('click', ()=>{
  closeCryptoPage();
  closeCalculatorApp();
  closeHouseListingPage();
  closeMessagingApp();
  exitAppBtn.style.display = "none";
  menuTitle.style.display = "block";
  updateMenus(menuHistory[menuHistory.length -1]);
})