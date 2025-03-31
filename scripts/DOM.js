// To hold all DOM actions


/* START NAVIGATION BUTTONS AND DOM .........................................................*/


export const startLifeBtn = document.getElementById('start-game-btn'); // The glowing button that starts the game
export const buttonSpan = document.getElementById('button-span'); // Span inside the glowing start button
export const gameContainer = document.getElementById('main-game-container'); // Main game container where game happens
export const gameIntroPage = document.getElementById('game-detail'); // Game details and introduction page 
export const nextPageBtn1 = document.getElementById('start-page-next-btn'); //Button to navigate to the game start page
export const submitPlayerStatBtn = document.getElementById('submit-player-stats'); // Button to submit player stats
export const welcomeDiv = document.getElementById('welcome-div'); // Welcome div that appears after starting the game
export const gamePlayContainer = document.getElementById('game-play-container'); // Game play grid display

// Get references to the elements where the player's details will be displayed
export let nameSpan = document.getElementById('player-name'); // Name span where the player's name will be displayed
export let genderSpan = document.getElementById('gender'); // Gender span where the player's gender will be displayed
export let financialStatusSpan = document.getElementById('financial-status'); // Financial status span
export let ageSpan = document.getElementById('age'); // Age span
export let playerNameSpan = document.getElementById('player-name-display');

export let accountBalanceSpan = document.getElementById('accnt-balance');

/* MAIN GAME PLAY PAGE DOM ............................................. */
export let gameMainNavMenuDiv = document.getElementById('game-nav-menu-div');

export const gridContainer = document.getElementById('grid-container');

export const menuTitle = document.getElementById('menu-title');
