

import { gameMainNavMenuDiv, gamePlayContainer, playerProfilePic } from "../DOM.js";
import { Player } from "../player-stats.js";
import { personalStatsGridCntr, socialStatsGridCntr, finacialStatsGridCntr, achievementsGridCntr, playerDashboardPage, dashboarExitBtn, dashboardName, dashboardAge, dashboardGender, dashboarProfilePic, dashboardLastame} from "./player.DOM.js";





export function initializeStats(){

  dashboardName.innerText = Player.name;
  dashboardLastame.innerText = Player.lastName;
  dashboardAge.innerText = Player.age;
  dashboardGender.innerText = Player.gender;
  dashboarProfilePic.src = playerProfilePic.src;
  const personalStats = [
    { title: "HYGIENE", image: "scripts/player/images/soap.png" },
    { title: "ENERGY", image: "scripts/player/images/flash.png" },
    { title: "HEALTH POINTS", image: "scripts/player/images/healing.png" },
    { title: "STOMACH", image: "scripts/player/images/stomach.png" },
    { title: "BLADDER", image: "scripts/player/images/bladder.png" },
    { title: "SELF ESTEEM", image: "scripts/player/images/self-reflection.png" },
    { title: "WORK XP", image: "scripts/player/images/working.png" },
    { title: "CRIMINALITY", image: "scripts/player/images/cyber-criminal.png" },
    { title: "FAITH", image: "scripts/player/images/pray.png" },
    { title: "EDUCATION XP", image: "scripts/player/images/scholarship.png" },
    { title: "INFLUENCE", image: "scripts/player/images/famous.png" },
    { title: "POPULARITY", image: "scripts/player/images/popularity.png" },
  ]
  
  const socialStats = [
    { title: "Relationship Status", image: "scripts/player/images/relationship.png" , status: `${Player.socialStats.relationshipStatus}`},
    { title: "Life Level", image: "scripts/player/images/start.png", status:  `${Player.socialStats.lifeLevel}`},
  ]
  
  const financialStats = [
    {title: "Financial Status", image: "scripts/player/images/accounting.png", status: `${Player.financialStats.financialStatus}`},
    {title: "Net Worth", image: "images/stock.png", status: ``},
  ]
  let personalStatsGridItems = "";

  personalStats.forEach((stat) =>{
    personalStatsGridItems += `
        <div class="stats-block">
          <div class="stats-label"><p>${stat.title}</p></div>
          <img
            src="${stat.image}"
            alt="stat logo"
            class="stats-logo"
          />
          <div class="meter">
            <div class="meter-fill" id="${stat.title.replace(/\s+/g, '-').toLowerCase()}-meter">
              <img
                src="scripts/player/images/rec.png"
                alt="meter dot"
                class="meter-dot"
              />
              <div class="meter-reader" id="${stat.title.replace(/\s+/g, '-').toLowerCase()}-meter-reader"></div>
            </div>
          </div>
        </div>
    `;    
  })

  personalStatsGridCntr.innerHTML = personalStatsGridItems;

  
  const hygieneMeter = document.getElementById('hygiene-meter');
  const energyMeter = document.getElementById('energy-meter');
  const hpMeter = document.getElementById('health-points-meter');
  const stomachMeter = document.getElementById('stomach-meter');
  const selfEsteemMeter = document.getElementById('self-esteem-meter');
  const workXpMeter = document.getElementById('work-xp-meter');
  const influenceMeter = document.getElementById('influence-meter');
  const criminalityMeter = document.getElementById('criminality-meter');
  const faithMeter = document.getElementById('faith-meter');
  const educationXpMeter = document.getElementById('education-xp-meter');
  const popularityMeter = document.getElementById('popularity-meter');
  const bladderMeter = document.getElementById('bladder-meter');

  const hygieneMeterReader = document.getElementById('hygiene-meter-reader');
  const energyMeterReader = document.getElementById('energy-meter-reader');
  const hpMeterReader = document.getElementById('health-points-meter-reader');
  const stomachMeterReader = document.getElementById('stomach-meter-reader');
  const selfEsteemMeterReader = document.getElementById('self-esteem-meter-reader');
  const workXpMeterReader = document.getElementById('work-xp-meter-reader');
  const influenceMeterReader = document.getElementById('influence-meter-reader');
  const criminalityMeterReader = document.getElementById('criminality-meter-reader');
  const faithMeterReader = document.getElementById('faith-meter-reader');
  const educationXpMeterReader = document.getElementById('education-xp-meter-reader');
  const popularityMeterReader = document.getElementById('popularity-meter-reader');
  const bladderMeterReader = document.getElementById('bladder-meter-reader');


  function updatePlayerStatsMeter(){
  
    if (hygieneMeter){
      hygieneMeter.style.width = `${Player.personalStats.hygiene}%`;
       hygieneMeterReader.innerText = `${Player.personalStats.hygiene}%`;
    }
    if (energyMeter){
      energyMeter.style.width = `${Player.personalStats.energy}%`;
      energyMeterReader.innerText = `${Player.personalStats.energy}%`;
    } 
    if (hpMeter){
      hpMeter.style.width = `${Player.personalStats.HP}%`;
      hpMeterReader.innerText = `${Player.personalStats.HP}%`;
    }
    if (stomachMeter){
      stomachMeter.style.width = `${Player.personalStats.stomach}%`;
      stomachMeterReader.innerText = `${Player.personalStats.stomach}%`;
    }
    if (selfEsteemMeter){
      selfEsteemMeter.style.width = `${Player.personalStats.selfEsteem}%`;
      selfEsteemMeterReader.innerText = `${Player.personalStats.selfEsteem}%`;
    }
    if (workXpMeter){
      workXpMeter.style.width = `${Player.personalStats.workXp}%`;
      workXpMeterReader.innerText = `${Player.personalStats.workXp}%`;
    } 
    if (criminalityMeter){
      criminalityMeter.style.width = `${Player.personalStats.criminality}%`;
      criminalityMeterReader.innerText = `${Player.personalStats.criminality}%`;
    } 
    if (faithMeter){
      faithMeter.style.width = `${Player.personalStats.faith}%`;
      faithMeterReader.innerText = `${Player.personalStats.faith}%`;
    } 
    if (popularityMeter){
      popularityMeter.style.width = `${Player.personalStats.popularity}%`;
      popularityMeterReader.innerText = `${Player.personalStats.popularity}%`;
    } 
    if (influenceMeter){
      influenceMeter.style.width = `${Player.personalStats.influence}%`;
      influenceMeterReader.innerText = `${Player.personalStats.influence}%`;
    } 
    if (educationXpMeter){
      educationXpMeter.style.width = `${Player.personalStats.educationXp}%`;
      educationXpMeterReader.innerText = `${Player.personalStats.educationXp}%`;
    } 
    if (bladderMeter){
      bladderMeter.style.width = `${Player.personalStats.bladder}%`;
      bladderMeterReader.innerText = `${Player.personalStats.bladder}%`;
    }
}
 
  setInterval(updatePlayerStatsMeter, 1000);
  let socialStatsGridItems = "";

  socialStats.forEach((stat) =>{
    socialStatsGridItems += `
    <div class="social-stats-block">
      <div class="social-stats-img-tag">
        <img
          src="${stat.image}"
          alt="love couples image"
          class="stats-logo"
        />
        <h3>${stat.title}</h3>
      </div>
      <div class="social-stat-status">${stat.status}</div>
    </div>
`;
  })
  
  socialStatsGridCntr.innerHTML = socialStatsGridItems;

  let financialStatsGridItems = "";

  financialStats.forEach((stat)=>{
    financialStatsGridItems += `
        <div class="financial-stats-block">
          <div class="financial-stats-img-tag">
            <img
              src="${stat.image}"
              alt="love couples image"
              class="stats-logo"
            />
            <h3>${stat.title}</h3>
          </div>
          <div class="financial-stat-status">${stat.status}</div>
        </div>`
  })

  finacialStatsGridCntr.innerHTML = financialStatsGridItems;
}






export function openPlayerDashBoard(){
  playerDashboardPage.style.visibility = 'visible';
  playerDashboardPage.style.opacity = '1';
  gamePlayContainer.style.display = 'none';
  gameMainNavMenuDiv.style.display = 'none';
  initializeStats();
}

export function closePlayerdashboard(){
  playerDashboardPage.style.visibility = 'hidden';
  playerDashboardPage.style.opacity = '0';
  gamePlayContainer.style.display = 'flex';
  gameMainNavMenuDiv.style.display = 'flex';
}

dashboarExitBtn.addEventListener('click', ()=> {
  closePlayerdashboard();
})
