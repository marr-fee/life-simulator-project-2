import { startTime } from "./scripts/time.js";
import { getRandomPlayerStats, saveSelectedBelief, updatePlayerStats } from "./scripts/player-stats.js";


import * as App from "./scripts/index.js";


/* INITIALIZE PLAYER STATS */






/* PERSONAL DETAILS DOM ...............................................................................*/









/* EVENT LISTENERS ...........................................................................*/



//------------------------

















/*ERROR LOG
Passing the random player name to the playerName variable is still returning undefined 

ISSUE:  because you're trying to access playerName before the getRandomStats() function has been called, which is where the playerName variable gets assigned a value.

SOLUTION: I updated the player name inside the getRandomstats function instead
 */