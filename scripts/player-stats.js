// To handle all stats updates

import { playerNameSpan, accountBalanceSpan, nameSpan, genderSpan, financialStatusSpan, ageSpan } from "./DOM.js";


export const Player = {
  name: "",
  age: 17,
  gender: "",
  
  // Grouped personal stats
  personalStats: {
    sleep: 50,
    workXp: 0, // Work experience
    HP: 50, // Health Points
    hunger: 50,
    hygiene: 50,
    criminality: 0,
    faith: 50,
    popularity: 1,
    influence: 1,
  },

  // Grouped social stats
  socialStats: {
    socialStatus: "", // Could represent the player's social standing, e.g., "popular", "introverted", etc.
    relationshipStatus: "Single",
    selfEsteem: 50, // Represents how confident the player feels about themselves
  },

  // Financial-related stats
  financialStats: {
    investments: 0,
    accountBalance: 0,
    financialStatus: "", 
    employmentStatus: "Unemployed", 
  },
}

// Arrays of male and female names
export const maleNames = ["John", "Michael", "David", "James", "Robert", "William", "Thomas", "Jack", "Daniel", "Steven"]; 
export const femaleNames = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen", "April"];

// Function to get random player stats (name, gender, financial status, age)
export function getRandomPlayerStats() {

  const randomGender = Math.random() > 0.5 ? "male" : "female"; 
  
  const financialStatusOptions = ["Poor", "Middle Class", "Extremely Poor", "Rich"];
  let randomFinance;

  randomFinance = financialStatusOptions[Math.floor(Math.random() * financialStatusOptions.length)];
 
  let randomName;

  // Based on the gender, select a random name
  if (randomGender === "male") {
    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
  } else {
    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  }

  Player.name = randomName;
  Player.gender = randomGender;
  Player.financialStats.financialStatus = randomFinance;

  // Update the DOM with the randomly generated stats
  nameSpan.innerText = Player.name; // Display the selected name
  genderSpan.innerText = Player.gender; // Display the selected gender
  financialStatusSpan.innerText = Player.financialStats.financialStatus; // Display the selected financial status
  ageSpan.innerText = Player.age; // Set a default age (you can modify this as needed)
  
  playerNameSpan.innerText = Player.name;      
  
}



let playerBelief; // variable to save player selected belief in God

// Function to save selected belief radio input
export function saveSelectedBelief(){

  const selectedRadio = document.querySelectorAll('input[name="belief"]');
  let selectedValue;

  selectedRadio.forEach(radio => {
    if (radio.checked){
      selectedValue = radio.value;
    }
  });
  if (selectedValue){
    playerBelief = selectedValue;
  } else{
    alert('You must select a belief')
  }
  
}

export function updatePlayerStats(){

  // Update player's faith based on belief selection
  if (playerBelief === "yes")Player.personalStats.faith += 20; 
   else if (playerBelief === "no")Player.personalStats.faith -= 40;
   else if(playerBelief === "maybe")Player.personalStats.faith -= 10;
   else Player.personalStats.faith = 50;

  // Update player account balance based on financial status
  if(Player.financialStats.financialStatus === "Extremely Poor"){
    Player.financialStats.accountBalance = 50;
  } else if (Player.financialStats.financialStatus === "Poor"){
    Player.financialStats.accountBalance = 100;
  } else if (Player.financialStats.financialStatus === "Middle Class") {
    Player.financialStats.accountBalance = 1000;
  } else{
    Player.financialStats.accountBalance = 5000;
  }

  accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance}`;
}
