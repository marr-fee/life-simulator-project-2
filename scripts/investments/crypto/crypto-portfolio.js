import { cryptos } from "./crypto-index.js";
import { Player } from "../../player-stats.js";
import { cryptoMainPage, portforlioPage, exitAppBtn, leavePortforlioPageBtn } from "./crypto-DOM.js";
import { updateCryptoPortfolioBalance } from "./crypto-balance.js";
import { day, getCurrentDate } from "../../time.js";
import { geteRandomCryptoChangeValue } from "./crypto-currency-updates.js";





export function openPortfolioPage(){
  portforlioPage.style.display = 'flex';
  cryptoMainPage.style.display = 'none';
  exitAppBtn.style.display = "none";
  initializePortfolioPage();
  portforlioPage.classList.add('slide-in-page');
  portforlioPage.classList.remove('slide-out-page');
}

export function closePortfolioPage(){
  exitAppBtn.style.display = "flex";
  exitAppBtn.style.top = '5vh';
  portforlioPage.style.display = 'none';
  cryptoMainPage.style.display = 'flex';
  portforlioPage.classList.remove('slide-in-page');
  portforlioPage.classList.add('slide-out-page');
}

leavePortforlioPageBtn.addEventListener('click', ()=>{
  closePortfolioPage();
})

// Function to create a coin card with its graph and value
function createCoinCard(crypto) {
  const coinCard = document.createElement('div');
  coinCard.classList.add('coin-card');
  
  const amountHeld = Player.cryptoHoldings[crypto.abbriviation] || 0;
  const coinValue = amountHeld * crypto.pricePerUnit;
  
  const formattedAmountHeld = amountHeld < 1
  ? amountHeld.toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 8 })
  : amountHeld.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  coinCard.innerHTML = `
    <h4><img src="${crypto.image}" alt="${crypto.abbriviation} logo" class="coin-logos">${crypto.name} (${crypto.abbriviation})</h4>
    <p>Amount Held: ${formattedAmountHeld} (${crypto.abbriviation})</p>
    <p>Value: $${coinValue.toFixed(2)}</p>
    <canvas id="graph-${crypto.abbriviation}"></canvas>
  `;
  
  document.getElementById('coins-container').appendChild(coinCard);
  createCoinGraph(crypto);
}

// Function to create a graph for each cryptocurrency
function createCoinGraph(crypto) {
  const dayDisplay = day;
  const ctx = document.getElementById(`graph-${crypto.abbriviation}`).getContext('2d');

  // Dummy data for the graph - replace this with actual historical price changes
  const priceHistory = crypto.priceHistory.length > 0 ? crypto.priceHistory : [crypto.pricePerUnit];
  const labels = Array.from({ length: priceHistory.length }, (_, index) => `${getCurrentDate()}`);
  
  const priceChange = priceHistory[priceHistory.length - 1] - priceHistory[0];
  const chartColor = priceChange > 0 ? 'green' : priceChange < 0 ? 'red' : 'gray';

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${crypto.abbriviation} 24hr Price Change`,
        data: priceHistory,
        fill: false,
        borderColor: chartColor,
        borderWidth: 2,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: false
          }
        }
      }
    }
  });
}



// Function to handle the 'Back to Main Page' button click
// =============

// Initialize portfolio page
export function initializePortfolioPage() {
  // Clear any previous content
  document.getElementById('coins-container').innerHTML = '';

  // Create the coin cards and graphs
  cryptos.forEach(crypto => {
    createCoinCard(crypto);
  });

  // Update the total portfolio value
  updateCryptoPortfolioBalance();
}

// Run the initialization function when the page loads
// window.onload = initializePortfolioPage;

// Export necessary functions
export { createCoinCard, createCoinGraph };
