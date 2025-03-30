

// To handle all time related functions

// Initialize time and date constants 

const daysList = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

export function startTime() {
  let updateMinutes = document.getElementById('minutes');
  let updateHours = document.getElementById('hours');
  let updateDays = document.getElementById('days');
  let updateGreeting = document.getElementById('greetings');
  
  
  const timeLoop = setInterval(() => {
    // Increase minutes by 1 every second
    minutes++;
  
    if ( minutes === 60 ) {
      hours++;
      minutes = 0;
    };
  
     // Update greeting based on time of day
     updateGreeting.innerText = getGreeting(hours);
  
    if ( hours === 24 ) {
      updateDay();
    };
  
    if (day > daysInMonth[currentMonthIndex]) {
      updateMonth();
    };
  
    if (currentMonth === 'December') {
      currentMonthIndex = 0;
      currentYear++;
    }
  
    // Format and display time
    updateTime(updateMinutes, updateHours, updateDays);
  
  // TO STOP TIME IF THESE CONDITIONS ARE TRUE
    if ( currentMonth === monthsList[3] ) {
      clearInterval(timeLoop);
    }
  
  }, 1000);
  }


function getGreeting(hour) {
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