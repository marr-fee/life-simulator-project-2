
import { closeCalculatorApp } from "./calculator/calculator.js";
import { exitAppBtn } from "./investments/crypto/crypto-DOM.js";
import { closeCryptoPage } from "./investments/crypto/cryptoFunctions.js";
import { menuHistory } from "./menu-navigation.js";
import { updateMenus } from "./menu-update.js";

exitAppBtn.addEventListener('click', ()=>{
  closeCryptoPage();
  closeCalculatorApp();
  exitAppBtn.style.display ="none";
  updateMenus(menuHistory[menuHistory.length -1]);
})