
import { updateCryptoPrices } from "./cryptoFunctions.js";
import { cryptos } from "./crypto-index.js";
import { updateCryptoPortfolioBalance } from "./crypto-balance.js";
import { Player } from "../../player-stats.js";

export function geteRandomCryptoChangeValue(){
    // generate random value change
  let randomCryptoChange = Math.floor(Math.random() * 100) + 1;


  if (randomCryptoChange >= 1 && randomCryptoChange < 10)
    updateCryptoPrices(0.001, 0.005);
    
  else if (randomCryptoChange >= 10 && randomCryptoChange < 40)
    updateCryptoPrices(0.0001, 0.0005);
    
  else if (randomCryptoChange >= 40 && randomCryptoChange < 41)
    updateCryptoPrices(0.01, 0.05); // 10% 50%
    
  else if (randomCryptoChange >= 41 && randomCryptoChange < 80)
    updateCryptoPrices(0.00002, 0.00007);
    
  else if (randomCryptoChange >= 80 && randomCryptoChange < 99)
    updateCryptoPrices(0.005, 0.009);

    else
    updateCryptoPrices(0.3, 0.9);

  updateCryptoPortfolioBalance();
  //console.log(Player.cryptoHoldings);
  //console.log(cryptos.pricePerUnit);
  //console.log(cryptos.previousPrice);
  //console.log(cryptos.percentChange);
  //console.log(currentPrice);
  
}

setInterval(geteRandomCryptoChangeValue,  3000);
// Call this once during app startup to initialize prices in localStorage if missing
function initializePreviousPrices() {
  const storedData = JSON.parse(localStorage.getItem("previousPrice")) || {};
  const now = Date.now();

  cryptos.forEach(crypto => {
    if (!storedData[crypto.abbriviation]) {
      storedData[crypto.abbriviation] = {
        price: crypto.pricePerUnit,
        timestamp: now
      };
    }
  });

  localStorage.setItem("previousPrice", JSON.stringify(storedData));
}

// Update every second
setInterval(() => {
  // update your clock display or app state here

  const storedData = JSON.parse(localStorage.getItem("previousPrice"));
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  cryptos.forEach(crypto => {
    const prevData = storedData[crypto.abbriviation];

    if (prevData && now - prevData.timestamp >= twentyFourHours) {
      const previousPrice = prevData.price;
      const currentPrice = crypto.pricePerUnit;
      const percentChange = ((currentPrice - previousPrice) / previousPrice) * 100;

      // Update the localStorage with current price and new timestamp
      storedData[crypto.abbriviation] = {
        price: currentPrice,
        timestamp: now
      };

      // Optionally update your DOM element here
      const percentChangeElement = document.querySelector(`#change-${crypto.abbriviation}`);
      if (changeElement) {
        percentChangeElement.textContent = `${percentChange.toFixed(2)}%`;
        percentChangeElement.style.backgroundColor = percentChange < 0 ? "red" : "green";
        percentChangeElement.style.color = percentChange < 0 ? "white" : "white";
      }
    }
  });

  localStorage.setItem("previousPrice", JSON.stringify(storedData));
}, 1000); // every second

// Run this once at startup
//initializePreviousPrices();
