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

export function initializePlayerStatsUpdate() {
  const status = Player.financialStats.financialStatus;

  // Update financial status and associated stats based on the player's financial status
  if (status === "Extremely Poor") {
    Player.financialStats.accountBalance = 50;
    Player.socialStats.selfEsteem -= 20;
    Player.personalStats.popularity -= 10;  // Adjust popularity when extremely poor
    Player.personalStats.influence -= 10;
    Player.personalStats.HP -= 10;
  } else if (status === "Poor") {
    Player.financialStats.accountBalance = 100;
    Player.socialStats.selfEsteem -= 10;
    Player.personalStats.popularity -= 5;   // Adjust popularity when poor
    Player.personalStats.influence -= 5;
    Player.personalStats.HP -= 5;

  } else if (status === "Middle Class") {
    Player.financialStats.accountBalance = 1000; // neutral effect
    Player.personalStats.popularity += 0;  // Middle class could have slight positive effect on popularity
    Player.personalStats.influence += 0;

  } else if (status === "Rich") {
    Player.financialStats.accountBalance = 5000;
    Player.socialStats.selfEsteem += 10;
    Player.personalStats.popularity += 5; // Rich could give a significant boost to popularity
    Player.personalStats.influence += 5;

  } else {
    // Assume "Extremely Rich" or unknown category
    Player.financialStats.accountBalance = 50000;
    Player.socialStats.selfEsteem += 20;
    Player.personalStats.popularity += 10;  // Extremely rich would have a huge impact on popularity
    Player.personalStats.influence += 10;

  }

  // Update account balance display
  accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance}`;

  // Update player's faith based on belief selection
  if (playerBelief === "yes") {
    Player.personalStats.faith += 20;
  } else if (playerBelief === "no") {
    Player.personalStats.faith -= 40;
  } else if (playerBelief === "maybe") {
    Player.personalStats.faith -= 10;
  } else {
    Player.personalStats.faith = 50; // Default faith value
  }

  // Ensure stats are within the expected bounds
  clampAllPlayerStats();
}


export function autoStatUpdatePerHour(){
  
  Player.personalStats.stomach -= 10;
  Player.personalStats.hygiene -= 5;
  Player.personalStats.energy -= 5;
  Player.personalStats.bladder += 10;

  clampAllPlayerStats(); // keeps everything within expected bounds
}


/**
 * Clamp all number-based values in the Player object between 0 and 100.
 * This ensures no stat goes below 0 or above 100.
 */


// Utility to clamp any number to the 0–100 range
export function clampStat(value) {
  return Math.max(0, Math.min(100, value));
}

//export function clampAllPlayerStats() {
  // Clamp personalStats
  //for (let key in Player.personalStats) {
   // const value = Player.personalStats[key];
   // if (typeof value === "number") {
      //Player.personalStats[key] = clampStat(value);
    //}
  //}

  // Clamp socialStats (if numeric)
  //for (let key in Player.socialStats) {
    //const value = Player.socialStats[key];
    //if (typeof value === "number") {
      //Player.socialStats[key] = clampStat(value);
    //}
  //}

  // Clamp financialStats (if numeric)
  //for (let key in Player.financialStats) {
    //const value = Player.financialStats[key];
    //if (typeof value === "number") {
      //Player.financialStats[key] = clampStat(value);
   // }
 // }

  // Clamp numeric values inside Possessions (just in case)
 // for (let key in Player.Possessions) {
    //const value = Player.Possessions[key];
    //if (typeof value === "number") {
      //Player.Possessions[key] = clampStat(value);
    //}
  //}

  //// Clamp crypto holdings (e.g. "MAF": 12.5)
  //for (let coin in Player.cryptoHoldings) {
    //const value = Player.cryptoHoldings[coin];
    //if (typeof value === "number") {
      //Player.cryptoHoldings[coin] = Math.max(0, value); // Crypto can go 0 → ∞, only prevent negatives
 //  // }
  //}

  // Clamp employment-related stats if numeric
  //for (let key in Player.employmentStatus) {
   // const value = Player.employmentStatus[key];
   // if (typeof value === "number") {
    //  Player.employmentStatus[key] = clampStat(value);
   // }
 // }
//}


// Player . current activity === "" add later