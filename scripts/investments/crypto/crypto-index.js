import { addFundsCryptoBtn, closeAddCryptoCtnrBtn } from "./crypto-DOM.js"
import { closeAddFundsDiv, openAddFundsDiv } from "./cryptoFunctions.js"



export const cryptos = [
  { name: "Marrfeecoin", abbriviation: "MAF", "Price per unit": 23440, isCoinStable: true },
  { name: "Starlight", abbriviation: "SLT", "Price per unit": 2090, isCoinStable: true },
  { name: "Volkancoin", abbriviation: "VLK", "Price per unit": 67000, isCoinStable: true },
  { name: "Leroyswitch", abbriviation: "SWL", "Price per unit": 72.4, isCoinStable: false },
  { name: "Oliviacoin", abbriviation: "OLI", "Price per unit": 2.33, isCoinStable: false },
  { name: "Osagiebucks", abbriviation: "OSB", "Price per unit": 22.45, isCoinStable: false }
]

addFundsCryptoBtn.addEventListener('click', ()=>{
  openAddFundsDiv();
})

closeAddCryptoCtnrBtn.addEventListener('click', ()=> {
  closeAddFundsDiv();
})