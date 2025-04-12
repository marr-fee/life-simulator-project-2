
import { bankAccountBallSpan, bankAppContainer, bankAppMainPage, bankAppNavBar, bankAppNavToggler, bankAppTopSection, bankAppWelcomPage, bankAppWlcmLogo, bankAppWlcmMotto, bankAppWlcmName, bankGreetingSpan, bankPlayerNameSpan, bankAppGridContainer } from "./bank-DOM.js";
import { gameMainNavMenuDiv, gamePlayContainer } from "../DOM.js";
import { Player } from "../player-stats.js";
import { getCurrentDate, getGreeting, hours } from "../time.js";
import { cryptoCompany } from "../investments/crypto/crypto-balance.js";
import { houseCompany } from "../houses/housing-homepage.js";




export function openBankingApp(){
  bankAppContainer.style.display = 'flex';
  bankAppWelcomPage.style.display = 'flex';
  bankAppMainPage.style.display ='none';
  gameMainNavMenuDiv.style.display = 'none';
  gamePlayContainer.style.display = 'none';
  bankAccountBallSpan.innerText = `$${Player.financialStats.accountBalance.toLocaleString()}`;
  bankGreetingSpan.innerText = getGreeting(hours);
  bankPlayerNameSpan.innerText = Player.name;
  bankAppNavToggler.src = 'scripts/bank-app/images/hamburger(1).png';
  renderTransactionHistory();
  
  setTimeout(() => {
    bankAppMainPage.style.display ='flex';
    bankAppWelcomPage.classList.add('backgrnd-trans-wlcm-div');
    bankAppWlcmLogo.classList.add('smooth-zoom-logo');
    bankAppWlcmName.classList.add('fading-out');
    bankAppWlcmMotto.classList.add('fading-out');
    bankAppGridContainer.style.opacity = '0';
  }, 2500);

  setTimeout(() => {
    bankAppWelcomPage.style.background = 'linear-gradient(150deg, rgba(128, 0, 128, 0.918), rgba(60, 1, 87, 0.904))';
    bankAppWelcomPage.style.transform = 'translateY(-65%)';
    bankAppWlcmLogo.style.opacity = '0';
    bankAppWelcomPage.style.zIndex = '0';
    bankAppWlcmName.style.opacity = '0';
    bankAppWlcmMotto.style.opacity = '0';
    bankAppGridContainer.style.opacity = '1';

  }, 3500)
}


export function closeBankingApp(){
  bankAppContainer.style.display = 'none';
  bankAppWelcomPage.style.display = 'none';
  bankAppMainPage.style.display ='none';
  gameMainNavMenuDiv.style.display = 'flex';
  gamePlayContainer.style.display = 'flex';
  bankAppWelcomPage.classList.remove('backgrnd-trans-wlcm-div');
  bankAppWlcmLogo.classList.remove('smooth-zoom-logo');
  bankAppWlcmName.classList.remove('fading-out');
  bankAppWlcmMotto.classList.remove('fading-out');
  bankAppWelcomPage.style.background = 'whitesmoke';
  bankAppWelcomPage.style.transform = 'translateY(0)';
  bankAppWlcmName.style.opacity = '1';
  bankAppWlcmMotto.style.opacity = '1';
  bankAppWlcmLogo.style.opacity = '1';
  bankAppNavBar.classList.remove('open-nav-bar');
  document.getElementById('blur-overlay').style.opacity = '0';
}

export const transactions = [
  { name: "Lorem ipsum", date: "07 May", amount: -230, type: "debit" },
  { name: "Lorem ipsum", date: "07 May", amount: -30, type: "debit" },
  { name: "Lorem ipsum", date: "06 May", amount: 270, type: "credit" },
  { name: "Lorem ipsum", date: "05 May", amount: -55, type: "debit" },
  { name: "Lorem ipsum", date: "05 May", amount: 300, type: "credit" },
  { name: "Lorem ipsum", date: "04 May", amount: -30, type: "debit" },
  { name: "Lorem ipsum", date: "03 May", amount: 2000, type: "credit" },
];

export function renderTransactionHistory(){


  transactions.forEach((txn, index) => {
    const isCredit = txn.amount > 0;
    const iconPath = isCredit
      ? "scripts/bank-app/images/shape(1).png"
      : "scripts/bank-app/images/shape.png";
  
    const transactionEl = document.createElement("div");
    transactionEl.className = "bank-grid-items slide-in";
    transactionEl.style.animationDelay = `${index * 180}ms`;
  
    transactionEl.innerHTML = `
      <div class="color-icon-transac-div">
        <img src="${iconPath}" alt="colored icon" id="debit-credit-icon" />
        <div class="transac-receipient-date">
          <h4 id="recipient">${txn.name}</h4>
          <p id="transaction-date">${txn.date}</p>
        </div>
      </div>
      <div class="transaction-amount-details">
        <span id="transaction-amount">${isCredit ? "+" : "-"}$${Math.abs(txn.amount)}</span>
        <img src="scripts/bank-app/images/next.png" alt="forward arrow" />
      </div>
    `;
  
    bankAppGridContainer.prepend(transactionEl);
  });

}



// Function to add a new transaction
export function addTransaction(date, amount, secondParty, type) {
  const newTransaction = {
    id: transactions.length + 1, // Automatically generates a unique ID
    date: date,
    amount: amount,
    name: secondParty,
    type: type, // 'debit' or 'credit'
  };

  // Push the new transaction to the transactions array
  transactions.push(newTransaction);
  console.log('Transaction added:', newTransaction);
  console.log(getCurrentDate());
  
  
}