import { addFundsCryptoBtn, closeAddCryptoCtnrBtn } from "./crypto-DOM.js"
import { closeAddFundsDiv, openAddFundsDiv } from "./cryptoFunctions.js"



export const cryptos = [
  { name: "Marrfeecoin", abbriviation: "MAF", pricePerUnit: 25440, twentyFourHourChange: 0.00 },
  { name: "Starlight", abbriviation: "SLT", pricePerUnit: 2390, twentyFourHourChange: 0.00 },
  { name: "Volkancoin", abbriviation: "VLK", pricePerUnit: 67060, twentyFourHourChange: 0.00 },
  { name: "Leroyswitch", abbriviation: "SWL", pricePerUnit: 72.4, twentyFourHourChange: 0.00 },
  { name: "Oliviacoin", abbriviation: "OLI", pricePerUnit: 2.43, twentyFourHourChange: 0.00 },
  { name: "Osagiebucks", abbriviation: "OSB", pricePerUnit: 22.45, twentyFourHourChange: 0.00 }
]

addFundsCryptoBtn.addEventListener('click', ()=>{
  openAddFundsDiv();
})

closeAddCryptoCtnrBtn.addEventListener('click', ()=> {
  closeAddFundsDiv();
})