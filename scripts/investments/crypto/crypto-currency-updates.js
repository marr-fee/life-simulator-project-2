
import { updateCryptoPrices } from "./cryptoFunctions.js";
import { cryptos } from "./crypto-index.js";
import { updateCryptoPortfolioBalance } from "./crypto-balance.js";
import { Player } from "../../player-stats.js";

export function geteRandomCryptoChangeValue(){
    // generate random value change
  let randomCryptoChange = Math.floor(Math.random() * 100) + 1;


  if (randomCryptoChange >= 1 && randomCryptoChange < 10)
    updateCryptoPrices(0.002, 0.004);
    
  else if (randomCryptoChange >= 10 && randomCryptoChange < 40)
    updateCryptoPrices(0.001, 0.002);
    
  else if (randomCryptoChange >= 40 && randomCryptoChange < 41)
    updateCryptoPrices(0.01, 0.05); // 10% 50%
    
  else if (randomCryptoChange >= 41 && randomCryptoChange < 80)
    updateCryptoPrices(0.0002, 0.0007);
    
  else if (randomCryptoChange >= 80 && randomCryptoChange < 99)
    updateCryptoPrices(0.005, 0.009);

    else
    updateCryptoPrices(0.003, 0.004);

  updateCryptoPortfolioBalance();
  
  
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
  const twentyFourHours = 60 * 1000;

  cryptos.forEach(crypto => {
    const prevData = storedData[crypto.abbriviation];
  
    if (prevData) {
      const timeSinceUpdate = now - prevData.timestamp;
  
      const previousPrice = prevData.price;
      const currentPrice = crypto.pricePerUnit;
      const percentChange = ((currentPrice - previousPrice) / previousPrice) * 100;
  
      // Update the DOM element EVERY SECOND
      const percentChangeElement = document.querySelector(`#change-${crypto.abbriviation}`);
      if (percentChangeElement) {
        percentChangeElement.innerHTML = 
          percentChange > 0 
          ? `+${percentChange.toFixed(2)}%` 
          : `${percentChange.toFixed(2)}%`;
        
        if (Math.abs(percentChange) < 0.01) {
          percentChangeElement.style.backgroundColor = "gray";
        }
        percentChangeElement.style.backgroundColor = percentChange < 0 ? "red" : "green";
        percentChangeElement.style.transition = "background-color 0.3s";
        percentChangeElement.style.color = "white";
      }
  
      // But only update the stored reference price every 24 hours
      if (timeSinceUpdate >= twentyFourHours) {
        storedData[crypto.abbriviation] = {
          price: currentPrice,
          timestamp: now
        };
      }
    }
  });
  

  localStorage.setItem("previousPrice", JSON.stringify(storedData));
}, 1000); // every second

// Run this once at startup
initializePreviousPrices();
