
import { houseList } from "./house-list.js";
import { Player } from "../player-stats.js";
import { accountBalanceSpan } from "../DOM.js";
import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
import { calculateAmountAfterTax } from "./housing-functions.js";





export const housingWebsiteContainer = document.getElementById('housing-list-container');
export const houseListingGridContainer = document.getElementById('housing-list-grid-container');
export const housingWebsiteWelcomDiv = document.getElementById('housing-list-welcome-page');
export const houseingWebsiteMainDiv = document.getElementById('housing-webpg');
export const confirmHousePaymentBtn = document.getElementById('confirm-house-payment');
export const cancleHousePayment = document.getElementById('cancle-house-payment');
export const housePurchaseFeeedbackDiv = document.getElementById('housing-transac-feedback');
export const greetingMessage = document.querySelector('.housing-page-greeting');


export const housePaymentCompletionDiv = document.getElementById('payment-completion-div');
export const chatBubbleHousing = document.getElementById('chat-bbl');

// Ensure that taxPercent and playerHousingBill are set before calculating the total amount

let playerHousingBill;
let taxPercent;
let totlAmountAfterTax; // Declare this outside the function so it can be used later
let selectedHouse = null;
let isRenting = null;
let isBuying = null;
let isRiskyPurchase = null;

export function initializeHouseList() {
  greetingMessage.innerHTML = `Hello ${Player.name}`;
  let gridItems = "";

  houseList.forEach((house) => {
    gridItems += `
      <div class="grid-items">
        <img src="${house.image}" alt="${house.houseType}-image" class="housing-img">
        <p class="listed-house-name">${house.houseType}</p>
        <p class="house-location">Location: ${house.location}</p>
        <p class="house-price">Rent: <span>$${house.rentCost.toLocaleString()}/month</span></p>
        <p class="value">Property Value: <span>$${house.purchaseCost.toLocaleString()}</span></p>
        <div class="rent-buy-btns">
        <button class="rent-house-btn" data-id="${house.id}">Rent</button>
        <button class="buy-house-btn" data-id="${house.id}">Buy</button>
        </div>
      </div>
    `;
  });

  houseListingGridContainer.innerHTML = gridItems;

  // Event delegation or rebinding buttons after DOM injection
  const buyButtons = document.querySelectorAll('.buy-house-btn');
  const rentButtons = document.querySelectorAll('.rent-house-btn');

  buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      confirmHousePaymentBtn.style.display = "inline-block";
      cancleHousePayment.textContent = "CANCLE";
      cancleHousePayment.style.right = "60px";
      const houseId = parseInt(btn.getAttribute('data-id'));
      const house = houseList.find(h => h.id === houseId);
      if (!house) return;

      isBuying = true;
      isRenting = false;
      selectedHouse = house;
      playerHousingBill = house.purchaseCost;
      taxPercent = house.taxRate; // Set the tax percent here

      // Now calculate the total amount after tax
      totlAmountAfterTax = calculateAmountAfterTax(taxPercent, playerHousingBill);

      exitAppBtn.style.display = "none";
      housePaymentCompletionDiv.style.display = "flex";
      houseingWebsiteMainDiv.classList.add("blur");
      chatBubbleHousing.style.display = "flex";
      chatBubbleHousing.innerHTML = `
        <p>Hello ${Player.name}! 😀<br>
        You have opted to buy the ${house.houseType} located in the ${house.location}. 😊<br>
        The cost is $${house.purchaseCost.toLocaleString()}<br> You should also note that purchase comes with a ${taxPercent}% tax payment.<br> Which brings the total to $${totlAmountAfterTax.toLocaleString()}<br> Please press <span class="gold">confirm</span> to complete this transaction or <span class="red">cancel</span> to cancel.</p>
      `;
    });
  });

  rentButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      confirmHousePaymentBtn.style.display = "inline-block";
      cancleHousePayment.textContent = "CANCLE";
      cancleHousePayment.style.right = "60px";

      const houseId = parseInt(btn.getAttribute('data-id'));
      const house = houseList.find(h => h.id === houseId);
      if (!house) return;

      isRenting = true;
      isBuying = false;
      selectedHouse = house;
      playerHousingBill = house.rentCost;



      // Now calculate the total amount for rent
      totlAmountAfterTax = playerHousingBill; // No tax for rent, just the base amount

      exitAppBtn.style.display = "none";
      housePaymentCompletionDiv.style.display = "flex";
      houseingWebsiteMainDiv.classList.add("blur");
      chatBubbleHousing.style.display = "flex";
      chatBubbleHousing.innerHTML = `
        <p>Hello ${Player.name}! 😀<br>
        You have opted to rent the ${house.houseType} located in the ${house.location}. 😊<br>
        The monthly rent is $${house.rentCost.toLocaleString()}<br>
        Please press <span class="gold">confirm</span> to complete this transaction or <span class="red">cancel</span> to cancel.</p>
      `;
    });
  });
}

cancleHousePayment.addEventListener('click', () => {
  closeHousingTransactionChatBubble();
});

confirmHousePaymentBtn.addEventListener('click', () => {
  if (!selectedHouse) return;

  const playerBalance = Player.financialStats.accountBalance;
  const finalAmount = isBuying ? totlAmountAfterTax : playerHousingBill;
  let confirmStep = 0;

  // === CASE 1: Insufficient balance ===
  if (finalAmount > playerBalance) {
    housePurchaseFeeedbackDiv.style.display = "flex";
    housePurchaseFeeedbackDiv.style.fontSize = "14px";
    housePurchaseFeeedbackDiv.style.color = "red";
    housePurchaseFeeedbackDiv.innerText = `Unfortunately ${Player.name}, you do not have sufficient balance to complete this transaction 😥. Try checking out other listings or come back another time! 😊`;
    return;
  }

  // === CASE 2: Risky purchase warning (first confirmation step) ===
  if ((playerBalance - finalAmount) <= 300 && confirmStep === 0) {
    isRiskyPurchase = true;
    housePurchaseFeeedbackDiv.innerHTML = "";
    housePurchaseFeeedbackDiv.style.display = "flex";
    housePurchaseFeeedbackDiv.style.fontSize = "14px";
    housePurchaseFeeedbackDiv.style.color = "red";

    if (isRenting) {
      housePurchaseFeeedbackDiv.innerText = `Risky choice ${Player.name}! 😯 Are you sure about this? You might barely have enough money for other bills. If you wish to proceed, please click Confirm again.`;
    } else if (isBuying) {
      housePurchaseFeeedbackDiv.innerText = `Risky purchase ${Player.name}! 😯 Are you sure about this? You might fall short on other bills! But they do say no risk no reward right?!😉. If you wish to proceed, please click Confirm again.`;
    }

    confirmStep = 1; // Move to second step
    return;
  }

  // === CASE 3: Proceed with confirmed payment ===

  // Deduct money
  Player.financialStats.accountBalance -= finalAmount;
  accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance}`;
  Player.Possessions.playerHasHome = true;

  // === Rent flow ===
  if (isRenting) {
    if (!Player.Possessions.monthlyRent.length) {
      Player.Possessions.monthlyRent[0] = playerHousingBill;
    } else {
      alert(`Be reminded that you already have a rented apartment, Unless you choose to leave one of them, you will have to pay the monthly rent for all.`)
      Player.Possessions.monthlyRent.push(playerHousingBill);
    }
    housePurchaseFeeedbackDiv.style.display = "flex";
    housePurchaseFeeedbackDiv.innerHTML = `<img src="${selectedHouse.image}" class="receipt-img">`;
    chatBubbleHousing.innerHTML = `You have successfully rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}!<br>
    Enjoy your new home! 🤝😊 `;

    confirmHousePaymentBtn.style.display = "none";
    cancleHousePayment.textContent = "CLOSE";
    cancleHousePayment.style.right = "180px";
//console.log(Player.Possessions.monthlyRent);
  }

  // === Buy flow ===
  if (isBuying) {
    if (!Player.Possessions.ownedHousingProperties.length) {
      Player.Possessions.ownedHousingProperties[0] = playerHousingBill;
    } else {
      Player.Possessions.ownedHousingProperties.push(playerHousingBill);
    }
    housePurchaseFeeedbackDiv.style.display = "flex";
    housePurchaseFeeedbackDiv.innerHTML = `<img src="${selectedHouse.image}" class="receipt-img">`;
    chatBubbleHousing.innerHTML = `You have successfully purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br>
    Enjoy your new home! 🤝😊`;

    confirmHousePaymentBtn.style.display = "none";
    cancleHousePayment.textContent = "CLOSE";
    cancleHousePayment.style.right = "180px"; // original is 60px
    //console.log(Player.Possessions.ownedHousingProperties);
  }

  housePurchaseFeeedbackDiv.style.color = "green";
  chatBubbleHousing.style.color = "green";

  // Reset values and state
  selectedHouse = null;
  confirmStep = 0;
  isRiskyPurchase = null;
});

export function closeHousingTransactionChatBubble() {
  houseingWebsiteMainDiv.classList.remove("blur");
  housePaymentCompletionDiv.style.display = "none";
  chatBubbleHousing.innerHTML = "";
  housePurchaseFeeedbackDiv.innerHTML = "";
  housePurchaseFeeedbackDiv.style.display = "none";
  exitAppBtn.style.display = "flex";
  exitAppBtn.style.top = "120px";
  selectedHouse = null;
}
