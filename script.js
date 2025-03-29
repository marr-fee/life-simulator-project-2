/* INITIALIZE TIME  */


/* INITIALIZE PLAYER STATS */
let playerName;
let playerGender;
let playerAge = 17;
let playerFinancialStatus;
let playerBelief;
let accounntBalance;



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

// Event listener for the submit player stats button which also starts the time
submitPlayerStatBtn.addEventListener('click', () => {
  welcomeDiv.style.display = "none"; // Hide the welcome div when stats are submitted
  gameContainer.style.backgroundColor = "rgb(255, 254, 255)"; // Change background color of the game container
  gameMainNavMenuDiv.style.display = "flex";
  saveSelectedBelief();
  startTime();
  
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


/* MAIN GAME PLAY PAGE DOM ............................................. */
let gameMainNavMenuDiv = document.getElementById('game-nav-menu-div');

let playerNameSpan = document.getElementById('player-name-display');
let accountBalanceSpan = document.getElementById('accnt-balance');




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
  
  playerNameSpan.innerText = playerName;      
  
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


const daysList = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const monthsList = ['January', 'February', 'March',
   'April', 'May', 'June',
    'July', 'August', 'September',
     'October', 'November', 'December'];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let currentYear = 2025;

let hours = 0;
let minutes = 0;
let day = 1;
let currentDayIndex = 0;
let currentDay = daysList[currentDayIndex];
let currentMonthIndex = 0;
let currentMonth = monthsList[currentMonthIndex];

/* INITIALIZE TIME */
function startTime() {
let updateMinutes = document.getElementById('minutes');
let updateHours = document.getElementById('hours');
let updateDays = document.getElementById('days');
let updateGreeting = document.getElementById('greetings');


const timeLoop = setInterval(() => {
  minutes++;

  if ( minutes === 60 ) {
    hours++;
    minutes = 0;
  };
  if (hours >= 5 && hours < 12) {
    updateGreeting.innerText = 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    updateGreeting.innerText = 'Good Afternoon';
  } else if (hours >= 17 && hours < 21) {
    updateGreeting.innerText = 'Good Evening';
  } else if( hours >= 21 && hours < 24){
    updateGreeting.innerText = 'Good Night';
  } else {
    updateGreeting.innerText = 'Sleep Tight';
  }

  if ( hours === 24 ) {
   currentDayIndex = (currentDayIndex + 1) % daysList.length;
    day++;
 
   currentDay = daysList[currentDayIndex]
    hours = 0;
  };
  if (day > daysInMonth[currentMonthIndex]) {
    currentMonthIndex = (currentMonthIndex + 1) % monthsList.length;
    currentMonth = monthsList[currentMonthIndex];
    day = 1;

  };
  if (currentMonth === 'December') {
    currentMonthIndex = 0;
    currentYear++;

  }



// Format hours, minutes, and days to always show two digits
const formattedHours = String(hours).padStart(2, '0');
const formattedMinutes = String(minutes).padStart(2, '0');
const formattedDays = String(days).padStart(2, '0');

updateMinutes.innerHTML = formattedMinutes;
updateHours.innerHTML = formattedHours;
updateDays.innerHTML = currentDay;

// TO STOP TIME IF THESE CONDITIONS ARE TRUE
  if ( currentMonth === monthsList[3] ) {
    clearInterval(timeLoop);

  }
}, 1000);
}
















/*ERROR LOG
Passing the random player name to the playerName variable is still returning undefined 

ISSUE:  because you're trying to access playerName before the getRandomStats() function has been called, which is where the playerName variable gets assigned a value.

SOLUTION: I updated the player name inside the getRandomstats function instead
 */