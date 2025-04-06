// To handle all stats change logic

import { playerBelief, Player } from "./player-stats.js";
import { accountBalanceSpan } from "./DOM.js";


export function updateFaith(){

  // Update player's faith based on belief selection
  if (playerBelief === "yes")Player.personalStats.faith += 20; 
    else if (playerBelief === "no")Player.personalStats.faith -= 40;
    else if(playerBelief === "maybe")Player.personalStats.faith -= 10;
    else Player.personalStats.faith = 50;

}

// Update player account balance based on financial status
export function updateFinance() {
  const status = Player.financialStats.financialStatus;

  if (status === "Extremely Poor") {
    Player.financialStats.accountBalance = 50;
    Player.socialStats.selfEsteem -= 20;
  } else if (status === "Poor") {
    Player.financialStats.accountBalance = 100;
    Player.socialStats.selfEsteem -= 10;
  } else if (status === "Middle Class") {
    Player.financialStats.accountBalance = 1000; // neutral effect
   
  } else if (status === "Rich") {
    Player.financialStats.accountBalance = 5000;
    Player.socialStats.selfEsteem += 10;
  } else {
    // Assume "Extremely Rich" or unknown category
    Player.financialStats.accountBalance = 50000;
    Player.socialStats.selfEsteem += 20;
  }

  accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance}`;
}

export function autoStatUpdatePerHour(){
  Player.personalStats.stomach -= 1;
  Player.personalStats.hygiene -= 1;
  Player.personalStats.energy -=1;
}

// Player . current activity === "" add later