import { addFundsCryptoBtn, closeAddCryptoCtnrBtn, cryptoMainPage } from "./crypto-DOM.js"
import { closeAddFundsDiv, openAddFundsDiv } from "./cryptoFunctions.js"



export const cryptos = [
  { name: "Marrfeecoin", abbriviation: "MAF", image: "scripts/investments/crypto/crypto-images/tether.png", pricePerUnit: 25440, twentyFourHourChange: 0.00, priceHistory: [] },
  { name: "Starlight", abbriviation: "SLT", image: "scripts/investments/crypto/crypto-images/shiba-inu.png",  pricePerUnit: 2390, twentyFourHourChange: 0.00, priceHistory: [] },
  { name: "Volkancoin", abbriviation: "VLK", image: "scripts/investments/crypto/crypto-images/polygon.png",  pricePerUnit: 67060, twentyFourHourChange: 0.00, priceHistory: [] },
  { name: "Leroyswitch", abbriviation: "SWL", image: "scripts/investments/crypto/crypto-images/near-protocol.png", pricePerUnit: 72.4, twentyFourHourChange: 0.00, priceHistory: [] },
  { name: "Oliviacoin", abbriviation: "OLI", image: "scripts/investments/crypto/crypto-images/ethereum.png", pricePerUnit: 2.43, twentyFourHourChange: 0.00, priceHistory: [] },
  { name: "Osagiebucks", abbriviation: "OSB", image: "scripts/investments/crypto/crypto-images/avalanche.png", pricePerUnit: 22.45, twentyFourHourChange: 0.00, priceHistory: [] }
]

addFundsCryptoBtn.addEventListener('click', ()=>{
  openAddFundsDiv();


})

closeAddCryptoCtnrBtn.addEventListener('click', ()=> {
  closeAddFundsDiv();

})