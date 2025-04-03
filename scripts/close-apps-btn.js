
import { exitAppBtn } from "./investments/crypto/crypto-DOM.js";
import { closeCryptoPage } from "./investments/crypto/cryptoFunctions.js";

exitAppBtn.addEventListener('click', ()=>{
  closeCryptoPage();
  exitAppBtn.style.display ="none";
})