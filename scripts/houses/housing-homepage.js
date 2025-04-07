
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

// Response options






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

      const buyChoiceDescriptionMsg = [
        `<p>Hello ${Player.name}! 😀<br>
        You have opted to buy the ${house.houseType} located in the ${house.location}. 😊<br>
        The cost is $${house.purchaseCost.toLocaleString()}<br> You should also note that purchase comes with a ${taxPercent}% tax payment.<br> Which brings the total to $${totlAmountAfterTax.toLocaleString()}<br> Please press <span class="gold">confirm</span> to complete this transaction or <span class="red">cancel</span> to cancel.</p>`,
      
      `<p>Hi ${Player.name}, thank you for considering the ${house.houseType}. 🏡<br>
        It’s located in ${house.location} and the cost of this lovely house is $${house.purchaseCost.toLocaleString()}.<br> Keep in mind that there’s a ${taxPercent}% tax included, so the total comes to $${totlAmountAfterTax.toLocaleString()}<br> Would you like to proceed? Click <span class="gold">confirm</span> or <span class="red">cancel</span> to rethink your decision.</p>`,
      
      `<p>Welcome ${Player.name}! 🌟<br>
        You've chosen the ${house.houseType} in ${house.location}, priced at $${house.purchaseCost.toLocaleString()}.<br> With the ${taxPercent}% tax, your final price is $${totlAmountAfterTax.toLocaleString()}<br> If you're happy with the price, please click <span class="gold">confirm</span>. If you'd like to back out, click <span class="red">cancel</span>.</p>`,
      
      `<p>Hey ${Player.name}, great choice! 🎉<br>
        The ${house.houseType} you’ve selected is located in ${house.location}, and it costs $${house.purchaseCost.toLocaleString()}.<br> After adding the ${taxPercent}% tax, the total amount is $${totlAmountAfterTax.toLocaleString()}<br> You can click <span class="gold">confirm</span> to finalize the purchase or <span class="red">cancel</span> if you want to rethink your decision.</p>`,
      
      `<p>Greetings ${Player.name}! 🌞<br>
        You’re about to purchase the ${house.houseType} located in ${house.location}, priced at $${house.purchaseCost.toLocaleString()}.<br> The tax is ${taxPercent}%, making the total $${totlAmountAfterTax.toLocaleString()}.<br> If you're ready to go ahead, click <span class="gold">confirm</span>. Otherwise, hit <span class="red">cancel</span> to abort.</p>`,
      
      `<p>Hey there ${Player.name}! 👋<br>
        The ${house.houseType} in ${house.location} is yours for $${house.purchaseCost.toLocaleString()}.<br> Including the ${taxPercent}% tax, the final price comes to $${totlAmountAfterTax.toLocaleString()}<br> Ready to make the purchase? Click <span class="gold">confirm</span>, or <span class="red">cancel</span> if you change your mind.</p>`
      ];
      
      exitAppBtn.style.display = "none";
      housePaymentCompletionDiv.style.display = "flex";
      houseingWebsiteMainDiv.classList.add("blur");
      chatBubbleHousing.style.display = "flex";
      chatBubbleHousing.innerHTML = `${buyChoiceDescriptionMsg[Math.floor(Math.random() * buyChoiceDescriptionMsg.length)]}`;
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

      const rentChoiceDescripMsg = [
        `<p>Hello ${Player.name}! 😀<br>
        You have opted to rent the ${house.houseType} located in the ${house.location}. 😊<br>
        The monthly rent is $${house.rentCost.toLocaleString()}<br>
        Please press <span class="gold">confirm</span> to complete this transaction or <span class="red">cancel</span> to cancel.</p>`,
      
      `<p>Hi ${Player.name}! 👋<br>
        You've chosen to rent the ${house.houseType} in ${house.location}. 😊<br>
        The rent is $${house.rentCost.toLocaleString()}/month.<br>
        To finalize your rental, press <span class="gold">confirm</span>, or hit <span class="red">cancel</span> to choose a different option.</p>`,
      
      `<p>Welcome ${Player.name}! 🎉<br>
        You’ve selected the ${house.houseType} in ${house.location}. 🏡<br>
        The monthly rent is $${house.rentCost.toLocaleString()}<br>
        Confirm by pressing <span class="gold">confirm</span> or cancel with <span class="red">cancel</span>.</p>`,
      
      `<p>Hey ${Player.name}! 😎<br>
        You’re looking at renting the ${house.houseType} in ${house.location}. 😊<br>
        The rent is set at $${house.rentCost.toLocaleString()} per month.<br>
        Ready to proceed? Hit <span class="gold">confirm</span> to complete, or <span class="red">cancel</span> if you change your mind.</p>`,
      
      `<p>Hello ${Player.name}! 🌟<br>
        You’ve opted for the ${house.houseType} located in ${house.location}. 🏠<br>
        The monthly rent is $${house.rentCost.toLocaleString()}<br>
        To proceed, click <span class="gold">confirm</span>, or hit <span class="red">cancel</span> to back out.</p>`,
      
      `<p>Hi ${Player.name}! 👋<br>
        You've selected to rent the ${house.houseType} in ${house.location}. 🏡<br>
        The monthly rent is $${house.rentCost.toLocaleString()}<br>
        If you're ready to rent, click <span class="gold">confirm</span>, or <span class="red">cancel</span> to make a different choice.</p>`
      ]
      exitAppBtn.style.display = "none";
      housePaymentCompletionDiv.style.display = "flex";
      houseingWebsiteMainDiv.classList.add("blur");
      chatBubbleHousing.style.display = "flex";
      chatBubbleHousing.innerHTML = `${rentChoiceDescripMsg[Math.floor(Math.random() * rentChoiceDescripMsg.length)]}`;
    });
  });
}

cancleHousePayment.addEventListener('click', () => {
  closeHousingTransactionChatBubble();
});
let confirmStep = 0;
confirmHousePaymentBtn.addEventListener('click', () => {
  if (!selectedHouse) return;

  const playerBalance = Player.financialStats.accountBalance;
  const finalAmount = isBuying ? totlAmountAfterTax : playerHousingBill;

 

  // === CASE 1: Insufficient balance ===
  if (finalAmount > playerBalance) {
    const insufficientFundsMsgs = [
      `<p>Unfortunately ${Player.name}, you do not have sufficient balance to complete this transaction 😥. Try checking out other listings or come back another time! 😊</p>`,
    
      `<p>Oops, ${Player.name}, it seems like your balance is too low to complete this purchase 😔. Feel free to explore other options or visit us again when you have more funds! 😌</p>`,
      
      `<p>Sorry, ${Player.name}, but your current balance is not enough to complete this transaction 😕. You can try browsing through other listings or return later when you’re ready! 😊</p>`,
      
      `<p>It looks like ${Player.name} doesn’t have enough funds to complete the purchase 😢. No worries, though! Check out other available options or come back anytime! 😊</p>`,
      
      `<p>Unfortunately, ${Player.name}, your balance isn’t sufficient to buy this item 😞. You can either explore other listings or return when you’ve saved up more! 😄</p>`,
      
      `<p>Oops, ${Player.name}, it seems like you're a little short on funds 😔. Try looking at other options or come back later when you're ready to make the purchase! 😊</p>`
    ];
    housePurchaseFeeedbackDiv.style.display = "flex";
    housePurchaseFeeedbackDiv.style.fontSize = "14px";
    housePurchaseFeeedbackDiv.style.color = "red";
    housePurchaseFeeedbackDiv.innerHTML = `${insufficientFundsMsgs[Math.floor(Math.random() * insufficientFundsMsgs.length)]}`;
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
    
    const successfullRentMsg = [
      `<p>You have successfully rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br>
        Enjoy your new home! 🤝😊</p>`,
      
      `<p>Congratulations ${Player.name}! 🎉 You've successfully rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br> 
        Wishing you a great time in your new home! 🏡😊</p>`,
      
      `<p>Well done ${Player.name}! 😄 You've rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br> 
        Enjoy your new space! 🏠😊</p>`,
      
      `<p>Awesome, ${Player.name}! 🎉 You’ve secured the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br> 
        Your new home is ready for you! 🏡🤝</p>`,
      
      `<p>Nice job ${Player.name}! 👏 You've successfully rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br> 
        Time to settle in and enjoy your new place! 🏠😊</p>`,
      
      `<p>Success ${Player.name}! 🎊 You’ve rented the ${selectedHouse.houseType} for $${playerHousingBill.toLocaleString()}/month!<br>
        Your new home awaits! Enjoy! 🏡🤝</p>`
    ];
    chatBubbleHousing.innerHTML = `${successfullRentMsg[Math.floor(Math.random() * successfullRentMsg.length)]}`;

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
    const successfullPurchaseMsg = [
      `<p>You have successfully purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br>
      Enjoy your new home! 🤝😊</p>`,
    
    `<p>Congratulations ${Player.name}! 🎉 You’ve successfully purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br> 
      Enjoy your new place, and make it your own! 🏡😊</p>`,
    
    `<p>Well done, ${Player.name}! 😄 You've purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br> 
      It’s all yours now! 🏠✨</p>`,
    
    `<p>Awesome, ${Player.name}! 🎉 You’ve successfully purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br> 
      Welcome to your new home! 🏡🎊</p>`,
    
    `<p>Nice work ${Player.name}! 👏 You’ve successfully purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br> 
      Get ready to settle into your new home! 🏠💖</p>`,
    
    `<p>Success ${Player.name}! 🎊 You’ve purchased the ${selectedHouse.houseType} for $${totlAmountAfterTax.toLocaleString()}!<br>
      Enjoy your new home, it's all yours now! 🏡🤝</p>`
    ];
    chatBubbleHousing.innerHTML = `${successfullPurchaseMsg[Math.floor(Math.random() * successfullPurchaseMsg.length)]}`;

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
