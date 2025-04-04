import { accountBalanceSpan, gameMainNavMenuDiv, gridContainer } from "../../DOM.js";
import { cryptoMainPage, cryptoPageContainer, cryptoWelcomePage, coinGridContainer, exitAppBtn, addCryptoFundsContainer, depositAmountField, depositFeedback } from "./crypto-DOM.js";
import { cryptos } from "./crypto-index.js";

export function openCryptoPage(){
  gridContainer.style.display = "none";
  cryptoPageContainer.style.display = "flex";
  cryptoWelcomePage.style.display = "flex";
  gameMainNavMenuDiv.style.zIndex = "-1";
  setTimeout (function(){
    cryptoWelcomePage.style.display = "none";
    cryptoMainPage.style.display = "flex";
    updateCoinsOnCryptoPage();
    exitAppBtn.style.display = "flex";
    gameMainNavMenuDiv.style.display = "flex";
    gameMainNavMenuDiv.style.zIndex = "5";
  }, 3000);
  

}

function updateCoinsOnCryptoPage(){
  
  let currentGridItems = `<div class="crypto-grid-items">
    <div class="crypto-titles">Coins<span>/USDC</span></div>
    <div class="crypto-last-prices">Last Price</div>
    <div class="crypto-24hr-changes">24hr %Change</div>
    </div>
  `;
  let gridItems = "";

  gridItems = cryptos.map((crypto) => {
    return `<div class="crypto-grid-items">
    <div class="crypto-title">${crypto.abbriviation}<span>/USDC</span></div>
    <div class="${crypto.name}-last-price prices">$${crypto.pricePerUnit.toFixed(2)}</div>
    <div class="crypto-24hr-change" id="change-${crypto.abbriviation}"><span>${crypto.twentyFourHourChange.toFixed(2)}%</span></div>
    </div>`
  })

  coinGridContainer.innerHTML = currentGridItems + gridItems.join('');
}

export function closeCryptoPage(){

  gridContainer.style.display = "grid";
  cryptoPageContainer.style.display = "none";
  cryptoWelcomePage.style.display = "none";
  cryptoMainPage.style.display = "none";

  };

export function updateCryptoPrices(minChange, maxChange){
  cryptos.forEach(crypto => {

    const change = Math.random() * (maxChange - minChange) + minChange;
    const randomChange = Math.random() < 0.5 ? -change : change;
    crypto.pricePerUnit *= (1 + randomChange);
    const priceUpdateElement = document.querySelector(`.${crypto.name}-last-price`)
    if (priceUpdateElement){
      priceUpdateElement.textContent = `$${crypto.pricePerUnit.toFixed(2)}`;
    }
  });
}
  
export function openAddFundsDiv(){
  addCryptoFundsContainer.style.display = "flex";
  addCryptoFundsContainer.style.zIndex = "4";
  depositAmountField.value = '';  // Clear the input field
  depositFeedback.textContent = ''; // Clear feedback
}
export function closeAddFundsDiv(){
  addCryptoFundsContainer.style.display = "none";
  depositAmountField.value = '';  // Clear the input field
  depositFeedback.textContent = ''; // Clear feedback
}

export function formatCryptoAmount(amount) {
  return amount < 1
    ? amount.toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 8 })
    : amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

