/* INITIALIZE PLAYER STATS */
let playerName;
let playerGender;
let playerAge = 17;
let playerFinancialStatus;
let playerBelief;


console.log(playerAge);
console.log(playerFinancialStatus);
console.log(playerGender);
console.log(playerName);

/* START NAVIGATION BUTTONS AND DOM .........................................................*/

// Get references to the necessary DOM elements
const startLifeBtn = document.getElementById('start-game-btn'); // The button that starts the game
const buttonSpan = document.getElementById('button-span'); // Span inside the start button
const gameContainer = document.getElementById('main-game-container'); // Main game container where game happens
const gameDetailsBox = document.getElementById('game-detail'); // Game details box
const nextPageBtn1 = document.getElementById('start-page-next-btn'); // Button to navigate to next page
const submitPlayerStatBtn = document.getElementById('submit-player-stats'); // Button to submit player stats
const welcomeDiv = document.getElementById('welcome-div'); // Welcome div that appears after starting the game

/* EVENT LISTENERS ...........................................................................*/

// Event listener for the next page button (hides game details and shows start game button)
nextPageBtn1.addEventListener('click', () =>{
  gameDetailsBox.style.display = "none"; // Hides the game details box
  startLifeBtn.style.display = "flex"; // Displays the start game button
})

// Event listener for the start game button
startLifeBtn.addEventListener('click', () => {
  startLifeBtn.classList.add("start-life"); // Adds a CSS class for animation/effects
  buttonSpan.classList.add('btn-span'); // Adds a CSS class to the span inside the button
  
  // After 2.7 seconds, hide the start button and change game container's appearance
  setTimeout(() =>{
    startLifeBtn.style.display = "none"; // Hide the start button
    gameContainer.style.backgroundColor = "rgb(217, 176, 255)"; // Change background color of the game container
    gameContainer.style.color = "rgb(0, 0, 0)"; // Change text color of the game container
    welcomeDiv.style.display = "flex"; // Show the welcome div
  }, 2700)

  // Generate random player stats
  getRandomStats();
})

// Event listener for the submit player stats button
submitPlayerStatBtn.addEventListener('click', () => {
  welcomeDiv.style.display = "none"; // Hide the welcome div when stats are submitted
  gameContainer.style.backgroundColor = "rgb(255, 254, 255)"; // Change background color of the game container
  saveSelectedBelief();

})

//------------------------

/* PERSONAL DETAILS DOM ...............................................................................*/

// Get references to the elements where the player's details will be displayed
let nameSpan = document.getElementById('player-name'); // Name span where the player's name will be displayed
let genderSpan = document.getElementById('gender'); // Gender span where the player's gender will be displayed
let financialStatusSpan = document.getElementById('financial-status'); // Financial status span
let ageSpan = document.getElementById('age'); // Age span

// Arrays of male and female names
const maleNames = ["John", "Michael", "David", "James", "Robert", "William", "Thomas", "Jack", "Daniel"]; 
const femaleNames = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen"];



// Function to get random player stats (name, gender, financial status, age)
function getRandomStats() {

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

  playerName = randomName;
  playerGender = randomGender;
  playerFinancialStatus = randomFinance;

  // Update the DOM with the randomly generated stats
  nameSpan.innerText = playerName; // Display the selected name
  genderSpan.innerText = playerGender; // Display the selected gender
  financialStatusSpan.innerText = playerFinancialStatus; // Display the selected financial status
  ageSpan.innerText = 17; // Set a default age (you can modify this as needed)
  
}

// Function to save selected belief radio input
function saveSelectedBelief(){

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

