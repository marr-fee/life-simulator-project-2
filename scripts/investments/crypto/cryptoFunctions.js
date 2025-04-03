import { accountBalanceSpan, gameMainNavMenuDiv, gridContainer } from "../../DOM.js";
import { updateMenus } from "../../menu-update.js";
import { Player } from "../../player-stats.js";
import { cryptoMainPage, cryptoPageContainer, cryptoWelcomePage, coinGridContainer, exitAppBtn, addCryptoFundsContainer, depositBtn, depositAmountField, depositFeedback, clearBtn, cryptoPortfolioBalanceSpan } from "./crypto-DOM.js";
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
    <div class="crypto-last-price">$${crypto["Price per unit"]}</div>
    <div class="crypto-24hr-change"><span id="percent-changes"></span>%</div>
    </div>`
  })

  coinGridContainer.innerHTML = currentGridItems + gridItems.join('');
}

export function closeCryptoPage(){

  gridContainer.style.display = "grid";
  cryptoPageContainer.style.display = "none";
  cryptoWelcomePage.style.display = "none";
  cryptoMainPage.style.display = "none";
  updateMenus("Investments");
  };
  
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
    depositFeedback.textContent = `You have successfully deposited $${depositAmount.toFixed(2)}.`;
    depositFeedback.style.color = "green";
    depositAmountField.value = ''; // Clear input field after deposit
    Player.financialStats.accountBalance -= Number(depositAmount);
    cryptoBanalce += Number(depositAmount) 
    cryptoPortfolioBalanceSpan.innerText = `$${cryptoBanalce.toFixed(2)}`;
    accountBalanceSpan.innerHTML = `$${Player.financialStats.accountBalance}`;
  }
});
