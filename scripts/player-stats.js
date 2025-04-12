// To handle all stats updates

import { playerNameSpan, accountBalanceSpan, nameSpan, genderSpan, financialStatusSpan, ageSpan, welcomeDiv, gameContainer, gameMainNavMenuDiv, gamePlayContainer, lastNameSpan, playerLastNameSpan2, playerNameSpan2, playerProfilePic, blurredPlayerProfilePic } from "./DOM.js";
import { updateFaith, updateFinance } from "./stat-update-func.js";
import { updateMenus } from "./menu-update.js";
import { resumeTime } from "./time.js";
import { cryptos } from "./investments/crypto/crypto-index.js";



export const Player = {
  name: "",
  age: 17,
  gender: "",
  lastName: "",
  
  // Grouped personal stats
  personalStats: {
    energy: 80,
    workXp: 0, // Work experience
    HP: 80, // Health Points
    stomach: 50,
    hygiene: 50,
    criminality: 0,
    faith: 50,
    popularity: 1,
    influence: 1,
    moral: 50,
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
    cryptoBalance: 0
  },
  cryptoHoldings: {},
  Possessions: {
    playerHasHome: false,
    playerHasCar: false,
    ownedHousingProperties: [],
    monthlyRent: [],
  },
  employmentStatus: {
    playerHasJob: false
  }
}

cryptos.forEach(crypto => {
  Player.cryptoHoldings[crypto.abbriviation] = 0;
});
// Arrays of male and female names
export const maleNames = [
  'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Joseph', 'Charles', 'Thomas', 'Daniel',
  'Matthew', 'Anthony', 'Mark', 'Donald', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'George', 'Joshua',
  'Kevin', 'Brian', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Gary', 'Nicholas',
  'Eric', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Adam', 'Samuel', 'Gregory',
  'Frank', 'Alexander', 'Ethan', 'Patrick', 'Henry', 'Kyle', 'Jack', 'Zachary', 'Nathan', 'Richard'
];
export const femaleNames = [
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy',
  'Betty', 'Helen', 'Sandra', 'Ashley', 'Donna', 'Deborah', 'Laura', 'Sarah', 'Kimberly', 'Michelle',
  'Emily', 'Stephanie', 'Rebecca', 'Sharon', 'Cynthia', 'Kathleen', 'Maria', 'Debra', 'Amanda', 'Dorothy',
  'Carol', 'Ruth', 'Megan', 'Angela', 'Hannah', 'Mildred', 'Frances', 'Gloria', 'Eva', 'Cheryl', 'Alice',
  'Suzanne', 'Kathryn', 'Janet', 'Diane', 'Tina', 'Annie', 'Julie', 'Heather', 'Victoria', 'Olivia'
];

export const lastNames = [
  "Anderson", "Bennett", "Carter", "Dawson", "Ellis", "Fletcher", "Garcia", "Harrison", "Ingram", "Jacobs", "Keller", "Lawson", "Mitchell", "Nolan", "Owens", "Parker", "Quinn", "Reynolds", "Sullivan", "Turner", "Underwood", "Vargas", "Walker", "Xavier", "Young", "Zimmerman", "Brooks", "Chambers", "Delaney", "Foster"
];

export const maleProfilePictures = ["images/boss.png"];

export const femaleProfilePictures = ["images/woman.png" ];

// Function to get random player stats (name, gender, financial status, age)
export function getRandomPlayerStats() {

  const randomGender = Math.random() > 0.5 ? "male" : "female"; 
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  const financialStatusOptions = ["Poor", "Middle Class", "Extremely Poor", "Rich", "Extremely Rich"];
  let randomFinance;

  randomFinance = financialStatusOptions[Math.floor(Math.random() * financialStatusOptions.length)];
 
  let randomName;

  // Based on the gender, select a random name
  if (randomGender === "male") {
    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
    playerProfilePic.src = maleProfilePictures[Math.floor(Math.random() * maleProfilePictures.length)]
  } else {
    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    playerProfilePic.src = femaleProfilePictures[Math.floor(Math.random() * femaleProfilePictures.length)]
  }
  blurredPlayerProfilePic.src = `${playerProfilePic.src}`;



  Player.name = randomName;
  Player.gender = randomGender;
  Player.lastName = randomLastName;
  Player.financialStats.financialStatus = randomFinance;

  // Update the DOM with the randomly generated stats
  nameSpan.innerText = Player.name; // Display the selected name
  genderSpan.innerText = Player.gender; // Display the selected gender
  lastNameSpan.innerText = Player.lastName;
  playerLastNameSpan2.innerText = Player.lastName;
  playerNameSpan2.innerText = Player.name;
  financialStatusSpan.innerText = Player.financialStats.financialStatus; // Display the selected financial status
  ageSpan.innerText = Player.age; // Set a default age (you can modify this as needed)
  
  playerNameSpan.innerText = Player.name;      
  
}



export let playerBelief; // variable to save player selected belief in God

// Function to save selected belief radio input
export function saveSelectedBelief(){

  const selectedRadio = document.querySelectorAll('input[name="belief"]');
  let selectedValue;

  selectedRadio.forEach(radio => {
    if (radio.checked){
      selectedValue = radio.value;
    }
  });
  // To ensure player selects a belief before proceeding
  if (selectedValue){
    playerBelief = selectedValue;

    welcomeDiv.style.display = "none"; // Hide the welcome div when stats are submitted
    gameContainer.style.background = "rgb(255, 255, 255)"; // Change background color of the game container
    gameContainer.style.justifyContent = "flex-start";  // Change display of the game container to start the grid at the top
    gameMainNavMenuDiv.style.display = "flex"; // Display of top page nav section to flex
    gameMainNavMenuDiv.style.zIndex = "5"; // Display of top page nav section at all times
    gamePlayContainer.style.display = "flex";  // Display of main UI page nav section to flex
    resumeTime();
    updatePlayerStats();
    updateMenus("main");
  } else{
    alert('You must select a belief')
  }
  
}

export function updatePlayerStats(){

  // Update player's faith level
  updateFaith();

  // Update player finances
  updateFinance();
}




// Function to get specific player information based on the key provided (e.g., 'name', 'stats', etc.)
export function getPlayerInfo(infoKey) {
  const playerInfo = Player;


  if (!infoKey) return;

  // Return the specific piece of player info requested
  switch (infoKey.toLowerCase()) {
    case 'name':
      return playerInfo.name;
    case 'relationship status':
      return playerInfo.socialStats.relationshipStatus;
    case 'age':
      return playerInfo.age;
    case 'rent stats':
      return playerInfo.Possessions.monthlyRent;
    case 'my home stats':
    return playerInfo.Possessions.playerHasHome;
    case 'account balance stats':
      return playerInfo.financialStats.accountBalance;
    case 'employment staus':
      return playerInfo.employmentStatus.playerHasJob;
    case 'financial status':
      return playerInfo.financialStats.financialStatus;
   //  You can add more keys here to return different player data
    default:
      console.error('Invalid infoKey provided.');
      return null;
  }
}
