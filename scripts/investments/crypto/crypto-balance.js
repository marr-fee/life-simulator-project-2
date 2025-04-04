
import { accountBalanceSpan } from "../../DOM.js";

import { Player } from "../../player-stats.js";
import { depositBtn, depositAmountField, depositFeedback, clearBtn, cryptoPortfolioBalanceSpan } from "./crypto-DOM.js";
import { cryptos } from "./crypto-index.js";
import { formatCryptoAmount } from "./cryptoFunctions.js";



// Handle number button click events
const numberButtons = document.querySelectorAll('.key[data-value]');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.getAttribute('data-value');
    depositAmountField.value += value;  // Append the clicked number to the input field
  });
});

// Handle clear button click event
clearBtn.addEventListener('click', () => {
  depositAmountField.value = '';  // Clear the input field
  depositFeedback.textContent = ''; // Clear feedback
});

let cryptoBanalce = 0;

// Handle submit button click event
depositBtn.addEventListener('click', () => {
  const depositAmount = parseFloat(depositAmountField.value);

  // Validate the deposit amount
  if (isNaN(depositAmount) || depositAmount <= 0) {
    depositFeedback.textContent = "Please enter a valid amount to deposit.";
    depositFeedback.style.color = "red";
  }else if (Player.financialStats.accountBalance < depositAmount) {
    depositFeedback.textContent = "Insufficient Funds to make this deposit";
    depositFeedback.style.color = "red";
  }else if (depositAmount < 20) {
    depositFeedback.textContent = "min. Deposit: $20";
    depositFeedback.style.color = "red";
  } else {
    // Calculate how much crypto user gets
    const unitsBought = depositAmount / selectedCrypto.pricePerUnit;

    // Store it (simplified logic, could be expanded later)
    if (!Player.cryptoHoldings) Player.cryptoHoldings = {};
    if (!Player.cryptoHoldings[selectedCrypto.abbriviation]) {
      Player.cryptoHoldings[selectedCrypto.abbriviation] = 0;
    }

    Player.cryptoHoldings[selectedCrypto.abbriviation] += unitsBought;

    // display for 3 seconds
    depositFeedback.textContent = `You have successfully deposited $${depositAmount.toFixed(2)}${selectedCrypto.abbriviation}.`;
      depositFeedback.style.color = "green";
    // clear display after 3s
    setTimeout(()=>{
      depositFeedback.textContent = '';
    },3000)
    depositAmountField.value = ''; // Clear input field after deposit
    Player.financialStats.accountBalance -= Number(depositAmount);
    cryptoBanalce += Number(depositAmount) 
    cryptoPortfolioBalanceSpan.innerText = `$${cryptoBanalce.toFixed(2)}`;
    accountBalanceSpan.innerHTML = `$${Player.financialStats.accountBalance}`;
  }
  // Recalculate total crypto portfolio balance

  updateCryptoPortfolioBalance();

});
const cryptoSelect = document.getElementById("crypto-options");

let selectedCrypto = cryptos[0]; // default

cryptoSelect.addEventListener("change", (e) => {
  const selectedAbbr = e.target.value;
  selectedCrypto = cryptos.find(crypto => crypto.abbriviation === selectedAbbr);
});

// Save selected crypto to localStorage

  cryptoSelect.addEventListener("change", (e) => {
  const selectedAbbr = e.target.value;
  selectedCrypto = cryptos.find(crypto => crypto.abbriviation === selectedAbbr);
  localStorage.setItem("lastSelectedCrypto", selectedAbbr);
});

// On load, set it back
const saved = localStorage.getItem("lastSelectedCrypto");
if (saved) {
  cryptoSelect.value = saved;
  selectedCrypto = cryptos.find(crypto => crypto.abbriviation === saved);
}
 

// This function updates the player's crypto portfolio value based on current holdings and live prices
export function updateCryptoPortfolioBalance() {
  let totalBalance = 0; // Start with zero portfolio balance

  // Loop through each crypto in your market list
  cryptos.forEach(crypto => {
    const coinAbbr = crypto.abbriviation; // Get coin abbreviation (e.g., "MAF", "SLT", etc.)
    const amountHeld = Player.cryptoHoldings[coinAbbr] || 0; // Get how much of this coin the player owns

    const formattedAmountHeld = amountHeld < 1
      ? amountHeld.toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 8 })
      : units.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Add the value of this holding to the total (amount * current price)
    totalBalance += amountHeld * crypto.pricePerUnit;
  });

  // Store the updated portfolio balance on the Player object
  Player.financialStats.cryptoBalance = totalBalance;

  // Optional: Update the visible balance in the UI
  if (cryptoPortfolioBalanceSpan) {
    cryptoPortfolioBalanceSpan.innerText = `$${totalBalance.toFixed(2)}`;
  }
}

 localStorage.setItem("cryptoHoldings", JSON.stringify(Player.cryptoHoldings));
