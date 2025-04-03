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

export function updateFinance(){

  // Update player account balance based on financial status
    if(Player.financialStats.financialStatus === "Extremely Poor")
      Player.financialStats.accountBalance = 50;
     else if 
     (Player.financialStats.financialStatus === "Poor")Player.financialStats.accountBalance = 100;
     else if 
     (Player.financialStats.financialStatus === "Middle Class")Player.financialStats.accountBalance = 1000;
     else if (Player.financialStats.financialStatus === "Rich")
      Player.financialStats.accountBalance = 5000;
     else Player.financialStats.accountBalance = 50000;
     Player.socialStats.selfEsteem += 20;
    
  
    accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance}`;
}

export function autoStatUpdatePerHour(){
  Player.personalStats.stomach -= 1;
  Player.personalStats.hygiene -= 1;
}