import { accountBalanceSpan, gameMainNavMenuDiv, gamePlayContainer, gridContainer, menuTitle } from "../../DOM.js";
import { cryptoMainPage, cryptoPageContainer, cryptoWelcomePage, coinGridContainer, exitAppBtn, addCryptoFundsContainer, depositAmountField, depositFeedback } from "./crypto-DOM.js";
import { cryptos } from "./crypto-index.js";

export function openCryptoPage(){
  gridContainer.style.display = "none";
  cryptoPageContainer.style.display = "flex";
  cryptoWelcomePage.style.display = "flex";
  gameMainNavMenuDiv.style.display = "none";
  gamePlayContainer.style.display ='none';
  cryptoMainPage.style.display = "none";
  menuTitle.style.display ='none';
  updateCoinsOnCryptoPage();
  setTimeout (function(){
    cryptoWelcomePage.style.display = "none";
    cryptoMainPage.style.display = "flex";
    gameMainNavMenuDiv.style.display = "flex";
    exitAppBtn.style.display = "flex";
    gameMainNavMenuDiv.style.display = "flex";
  }, 3000);
  
}

export function closeCryptoPage(){

  cryptoPageContainer.style.display = "none";
  cryptoWelcomePage.style.display = "none";
  cryptoMainPage.style.display = "none";
  exitAppBtn.style.display = 'none';
  gridContainer.style.display = 'grid';
  menuTitle.style.display = 'block';
  gamePlayContainer.style.display ='flex';
  gameMainNavMenuDiv.style.display = "flex";

  };

export function updateCoinsOnCryptoPage(){
  
  let currentGridItems = `<div class="crypto-grid-items">
    <div class="crypto-titles">Coins<span>/USDC</span></div>
    <div class="crypto-last-prices">Last Price</div>
    <div class="crypto-24hr-changes">24hr %Change</div>
    </div>
  `;
  let gridItems = "";

  gridItems = cryptos.map((crypto) => {
    return `<div class="crypto-grid-items">
    <div class="crypto-title"><img src="${crypto.image}" alt="${crypto.abbriviation} logo" class="coin-logos"><div class="abbr-and-usdc">${crypto.abbriviation}<span>/USDC</span></div></div>
    <div class="${crypto.name}-last-price prices">$${crypto.pricePerUnit.toFixed(2)}</div>
    <div class="crypto-24hr-change" id="change-${crypto.abbriviation}"><span>${crypto.twentyFourHourChange.toFixed(2)}%</span></div>
    </div>`
  })

  coinGridContainer.innerHTML = currentGridItems + gridItems.join('');
}



export function updateCryptoPrices(minChange, maxChange){
  cryptos.forEach(crypto => {

    const change = Math.random() * (maxChange - minChange) + minChange;
    const randomChange = Math.random() < 0.5 ? -change : change;

    const previousPrice = crypto.pricePerUnit;
    crypto.pricePerUnit *= (1 + randomChange);

     // Push the new price into the priceHistory array
     crypto.priceHistory.push(crypto.pricePerUnit);

     if (crypto.priceHistory.length > 20) {
      crypto.priceHistory.shift(); // Remove the oldest price when the array exceeds 100
    }
    
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

export function clearCryptoTransacFeedbackMessage(){
  // clear display after 3s
  setTimeout(()=>{
    depositFeedback.textContent = '';
  },3000)
}

export function getCryptoAllTimeHigh() {
  // Retrieve existing data from localStorage, or initialize as empty if not available
  const storedData = JSON.parse(localStorage.getItem("cryptoAllTimeHighs")) || {};

  // Loop through each crypto
  cryptos.forEach((crypto) => {
    // Initialize all-time high from localStorage or set it to current price if not found
    let allTimeHigh = storedData[crypto.abbriviation] || crypto.pricePerUnit;

    // Logic to track price changes over time
    crypto.priceHistory.forEach((price) => {
      if (price > allTimeHigh) {
        allTimeHigh = price; // Update all-time high if new higher price found
      }
    });

    // Update stored data with the new all-time high for the specific crypto
    storedData[crypto.abbriviation] = allTimeHigh;
  });

  // Save the updated data back to localStorage once, after the loop finishes
  localStorage.setItem("cryptoAllTimeHighs", JSON.stringify(storedData));
}

export function getCryptoAllTimeLow() {
  // Retrieve stored all-time lows from localStorage or initialize if not present
  const storedData = JSON.parse(localStorage.getItem("cryptoAllTimeLows")) || {};

  // Loop through each crypto
  cryptos.forEach((crypto) => {
    // Get the current all-time low from stored data or the current price if not available
    let allTimeLow = storedData[crypto.abbriviation] || crypto.pricePerUnit;

    // Loop through the price history and find the minimum price (all-time low)
    crypto.priceHistory.forEach((price) => {
      if (price < allTimeLow) {
        allTimeLow = price;
      }
    });

    // Update stored data with the new all-time low for this crypto
    storedData[crypto.abbriviation] = allTimeLow;
  });

  // Save the updated all-time lows back to localStorage once, after the loop finishes
  localStorage.setItem("cryptoAllTimeLows", JSON.stringify(storedData));

  // Log all-time lows for all cryptos
  cryptos.forEach((crypto) => {
    const allTimeLow = storedData[crypto.abbriviation] || crypto.pricePerUnit;
  });
}