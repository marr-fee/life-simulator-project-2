

// To handle all time related functions

import { getCryptoAllTimeHigh, getCryptoAllTimeLow } from "./investments/crypto/cryptoFunctions.js";
import { Player } from "./player-stats.js";
import { autoStatUpdatePerHour } from "./stat-update-func.js";
import { chatData } from "./messaging/messg-chat.js";



// Initialize time and date constants 

export const PlayerDateOfBirth = "March 20, 2008";

const daysList = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthsList = ['January', 'February', 'March',
   'April', 'May', 'June',
    'July', 'August', 'September',
     'October', 'November', 'December'];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


export let hours = 7;
export let minutes = 0;
export let day = 20;
let currentDayIndex = 0;
export let currentDay = daysList[currentDayIndex];
let currentMonthIndex = 2;
export let currentMonth = monthsList[currentMonthIndex];
export let currentYear = 2025;
let itIsPlayersBirthday = false;


export let isGameOver = false;
export let timeIsPaused = true;

/* INITIALIZE TIME */

export function startTime() {
  if (!timeIsPaused) {

    let updateMinutes = document.getElementById('minutes');
    let updateHours = document.getElementById('hours');
    let updateDays = document.getElementById('days');
    let updateGreeting = document.getElementById('greetings');
    const msgAppHourDisplay = document.getElementById('msg-hour');
    const msgAppMinutesDisplay = document.getElementById('msg-minute');
    const msgAppDayDisplay = document.getElementById('msg-day');

    // Increase minutes by 1 every second
    minutes++;
  
    if ( minutes === 60 ) {
      hours++;
      minutes = 0;
      autoStatUpdatePerHour();
      getCryptoAllTimeHigh();
      getCryptoAllTimeLow();
      const timeResponses = chatData.responses.mood.good.response.time;
      const randomTimeResponse = timeResponses[Math.floor(Math.random() * timeResponses.length)](); // Get random time
 // console.log(Player.Possessions.playerHasHome);
    };

    // Update greeting based on time of day
    updateGreeting.innerText = getGreeting(hours);

    if ( hours === 24 ) {
      updateDay();
    };
  
    if (day > daysInMonth[currentMonthIndex]) {
      updateMonth();
    };
  
    if (currentMonth === 'December' && day === 31 && hours === 23 && minutes === 59) {
      currentMonthIndex = 0;
      currentYear++;
    }

    if (currentMonth === 'March' && day === 20 && hours === 0 && minutes === 0){
     // console.log('Happy Birthday!');
     itIsPlayersBirthday = true;
     Player.age++;
    }
    
    // Account for leap years 
    getDaysInMonth(currentMonthIndex, currentYear)

    // Format and display time
    updateTime(updateMinutes, updateHours, updateDays);
    updateTime(msgAppMinutesDisplay, msgAppHourDisplay, msgAppDayDisplay);

      // TO STOP TIME IF THESE CONDITIONS ARE TRUE
    //if ( currentMonth === monthsList[3] ) {
     // clearInterval(timeLoop);
    //}
  }


  
  };
// Function to account for leap years
  function getDaysInMonth(monthIndex, year) {
    if (monthIndex === 1) { // February
      return isLeapYear(year) ? 29 : 28;
    }
    return daysInMonth[monthIndex];
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

let timeLoop = setInterval(startTime, 1000);

  
  export function pauseTime() {
    timeIsPaused = true;
    clearInterval(timeLoop);
  };

  export function resumeTime(){
    timeIsPaused = false;
    setInterval(timeLoop);
  }

  export function speedUpTime(passingTime){
    minutes += passingTime;

    while (minutes >= 60){
      minutes -= 60;
      hours += 1;
    }
    while (hours >= 24){
      hours -= 24;
      updateDay();
    }
    while (day > getDaysInMonth(currentMonthIndex, currentYear)){
      updateMonth();  
    }
  }


export function getGreeting(hour) {
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 21) return 'Good Evening';
    return 'Good Night';
  }
  
function updateDay() {
    currentDayIndex = (currentDayIndex + 1) % daysList.length;
    day++;
    currentDay = daysList[currentDayIndex];
    hours = 0;
  }
  
function updateMonth() {
    currentMonthIndex = (currentMonthIndex + 1) % monthsList.length;
    currentMonth = monthsList[currentMonthIndex];
    day = 1;
  }
  
function updateTime(minutesElem, hoursElem, daysElem) {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
  
    minutesElem.innerHTML = formattedMinutes;
    hoursElem.innerHTML = formattedHours;
    daysElem.innerHTML = currentDay;
  }

 export function getCurrentTime(){
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const timeDisplay =  `${formattedHours}: ${formattedMinutes}`
  return timeDisplay;
}



export function getCurrentDate(){
  const dateDisplay = `${day} ${currentMonth}`;
  return dateDisplay; 
}

export function getCurrentDay(){
  const dayDisplay = currentDay;
  console.log(dayDisplay); 
}
