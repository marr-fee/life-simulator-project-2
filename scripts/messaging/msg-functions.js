
import { gameMainNavMenuDiv, gridContainer, menuTitle, gameContainer, gamePlayContainer } from "../DOM.js";
import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
import { closeGrid, openGrid } from "../menu-navigation.js";
import { getPlayerInfo } from "../player-stats.js";
import { getCurrentDate, getCurrentTime } from "../time.js";
import { addMessage } from "./chat-bubble.js";
import { chatData } from "./messg-chat.js";

const textMessagingContainer = document.getElementById('text-msg-app-div');
const textArea = document.getElementById('player-message-input');
const sendMsgBtn = document.getElementById('send-message-btn');
const displayPicture = 'scripts/messaging/images/profile(1).png';
const closeMessagePageBtn = document.getElementById('messaging-back-btn');

closeMessagePageBtn.addEventListener('click', ()=> {
  closeMessagingApp();
})


// Open the messaging app and adjust UI
export function openMessagingApp() {
  textMessagingContainer.style.display = 'flex';
  gameMainNavMenuDiv.style.display = "none";
  gridContainer.style.display = 'none';
  gamePlayContainer.style.display ='none';
  menuTitle.style.display = 'none';
  closeMessagePageBtn.style.display ='flex';

  getCurrentDate();
  getCurrentTime();
  getPlayerInfo('name')
}

// Close the messaging app and revert UI
export function closeMessagingApp() {
  textMessagingContainer.style.display = 'none';
  closeMessagePageBtn.style.display ='none';
  gridContainer.style.display = 'grid';
  menuTitle.style.display = 'block';
  gamePlayContainer.style.display ='flex';
  gameMainNavMenuDiv.style.display = "flex";

}

// Send the user's message and get a response
export function sendMessage() {
  const userMessage = textArea.value.trim();
  if (!userMessage) return;

  // Display the user's message
  addMessage(userMessage, displayPicture, 'my-chat-bbl-cntr', 'my-chat-bubble', 'hidden');
  textArea.value = ''; // Clear the input

  // Get responses based on the user's input
  getResponses(userMessage);
}

export function getResponses(userInput) {
  userInput = userInput.toLowerCase().trim();

  // Step 1: Get moods and general responses
  const moods = chatData.responses.mood;
  const generalResponses = chatData.responses.general;
  const moodKeys = Object.keys(moods);

  // Step 2: Pick a random mood
  const randomMoodKey = moodKeys[Math.floor(Math.random() * moodKeys.length)];

  // Step 3: Get the mood-based responses
  const responses = moods[randomMoodKey].response;

  // First, check for general queries (e.g., date, game info, tips)
  if (/date|what is today's date|what's today's date|what date is it\?/i.test(userInput)) {
    const dateReply = getRandomResponse(generalResponses.date);
    return addNpcMessage(dateReply);
  }
  
  if (/what's the game about|game info|tell me about this game|what is this game about\?/i.test(userInput)) {
    const gameInfoReply = getRandomResponse(generalResponses.gameInfo);
    return addNpcMessage(gameInfoReply);
  }
  
  if (/tips|how to improve|how to succeed in this game|what tips can you give me on this game\?/i.test(userInput)) {
    const tipsReply = getRandomResponse(generalResponses.tips);
    return addNpcMessage(tipsReply);
  }
  
  if (/hello|hi|hey/i.test(userInput)) {
    const greetingReply = getRandomResponse(responses.hello || generalResponses.hello);
    return addNpcMessage(greetingReply);
  }
  
  if (/time|what time is it\?|what's the time\?/i.test(userInput)) {
    const timeReply = getRandomResponse(generalResponses.time);
    return addNpcMessage(timeReply);
  }
  
  if (/how are you\?|how's it going\?|are you doing okay today\?/i.test(userInput)) {
    const howAreYouReply = getRandomResponse(generalResponses.howAreYou);
    return addNpcMessage(howAreYouReply);
  }
  
  if (/hobby|what do you do for fun|what are your hobbies\?|do you have any hobbies\?/i.test(userInput)) {
    const hobbyReply = getRandomResponse(generalResponses.hobbies);
    return addNpcMessage(hobbyReply);
  }
  
  if (/good morning|good afternoon|good evening|good night|afternoon|evening|night|morning/i.test(userInput)) {
    const greetReply = getRandomResponse(generalResponses.dayGreeting);
    return addNpcMessage(greetReply);
  }
  
  if (/my info|player info|what can you tell me about myself\?|check my stats|tell me about me|what is my current situation\?|how are my stats doing\?/i.test(userInput)) {
    const playerInfoReply = getRandomResponse(generalResponses.playerInfo);
    return addNpcMessage(playerInfoReply);
  }
  
  if (/motivate me|motivation|inspire me|i need motivation/i.test(userInput)) {
    const motivationReply = getRandomResponse(generalResponses.motivation);
    return addNpcMessage(motivationReply);
  }
  
  if (/say something nice|compliment me|do you like me|am i doing good/i.test(userInput)) {
    const complimentReply = getRandomResponse(generalResponses.compliments);
    return addNpcMessage(complimentReply);
  }
  
  if (/daily goals|what should i do today|plan for today|what are you doing today|what's your day look like|any advice today/i.test(userInput)) {
    const goalsReply = getRandomResponse(generalResponses.dailyGoals);
    return addNpcMessage(goalsReply);
  }
  
  if (/who are you|tell me about yourself|tell me about you|what are you|are you a bot/i.test(userInput)) {
    const botInfoReply = getRandomResponse(generalResponses.askAboutBot);
    return addNpcMessage(botInfoReply);
  }
  
  if (/plans for today|what's the plan|what do we do now|suggest something/i.test(userInput)) {
    const plansReply = getRandomResponse(generalResponses.plansForToday);
    return addNpcMessage(plansReply);
  }
  
  if (/how are you feeling|how's your mood|how you doing|feeling okay/i.test(userInput)) {
    const feelingReply = getRandomResponse(generalResponses.feelingCheck);
    return addNpcMessage(feelingReply);
  }
  
  if (/encourage me|i'm feeling down|say something encouraging|i need support/i.test(userInput)) {
    const encourageReply = getRandomResponse(generalResponses.encouragement);
    return addNpcMessage(encourageReply);
  }
  
  if (/hidden tips|secret|give me a secret|tell me a secret|hidden info/i.test(userInput)) {
    const secretReply = getRandomResponse(generalResponses.mysteryTips);
    return addNpcMessage(secretReply);
  }
  
  if (/bye|bye bye|gotta go now|good bye|I'm outta here|see you later/i.test(userInput)) {
    const goodbyeReply = getRandomResponse(generalResponses.goodbye);
    return addNpcMessage(goodbyeReply);
  }
  
  if (/thanks|thank you/i.test(userInput)) {
    const thanksReply = getRandomResponse(generalResponses.goodbye);
    return addNpcMessage(thanksReply);
  }
  
  if (/dream|future|goal|what are your goals\?|what are your dreams\?|what are your plans for the future\?/i.test(userInput)) {
    const dreamReply = getRandomResponse(generalResponses.dreams);
    return addNpcMessage(dreamReply);
  }
  
  // ----------------------------------------------------------------------------------------------------

  // Bot's preferences or likes/dislikes
if (/favorite color|color preference|what's your favorite color/i.test(userInput)) {
  const colorReply = getRandomResponse(generalResponses.favoriteColor);
  return addNpcMessage(colorReply);
}

if (/favorite game|what's your favorite game|do you have a favorite game/i.test(userInput)) {
  const gameReply = getRandomResponse(generalResponses.favoriteGame);
  return addNpcMessage(gameReply);
}

if (/what do you think of|how do you feel about/i.test(userInput)) {
  const opinionReply = getRandomResponse(generalResponses.opinion);
  return addNpcMessage(opinionReply);
}

// Hypothetical and imaginative conversations
if (/what would you do if|how would you react if/i.test(userInput)) {
  const hypotheticalReply = getRandomResponse(generalResponses.hypothetical);
  return addNpcMessage(hypotheticalReply);
}

if (/if you could|imagine if/i.test(userInput)) {
  const imaginationReply = getRandomResponse(generalResponses.imagineIf);
  return addNpcMessage(imaginationReply);
}

// AI/Bot-specific questions
if (/can you think?|do you have thoughts/i.test(userInput)) {
  const thinkingReply = getRandomResponse(generalResponses.canThink);
  return addNpcMessage(thinkingReply);
}

if (/are you self-aware|do you know you're a bot/i.test(userInput)) {
  const selfAwareReply = getRandomResponse(generalResponses.selfAware);
  return addNpcMessage(selfAwareReply);
}

if (/how do you learn|can you learn/i.test(userInput)) {
  const learningReply = getRandomResponse(generalResponses.learning);
  return addNpcMessage(learningReply);
}

// Game or challenge-related
if (/challenge|game challenge|what's the hardest part/i.test(userInput)) {
  const challengeReply = getRandomResponse(generalResponses.challenge);
  return addNpcMessage(challengeReply);
}

if (/what's your favorite level|what level do you like/i.test(userInput)) {
  const favoriteLevelReply = getRandomResponse(generalResponses.favoriteLevel);
  return addNpcMessage(favoriteLevelReply);
}

if (/how do I level up|how can I improve my character/i.test(userInput)) {
  const levelUpReply = getRandomResponse(generalResponses.levelUp);
  return addNpcMessage(levelUpReply);
}

if (/is there a secret level|any secret areas/i.test(userInput)) {
  const secretLevelReply = getRandomResponse(generalResponses.secretLevel);
  return addNpcMessage(secretLevelReply);
}

// Personal development questions
if (/how do I get better at/i.test(userInput)) {
  const improvementReply = getRandomResponse(generalResponses.improvement);
  return addNpcMessage(improvementReply);
}

if (/what's the best advice you've ever received|give me advice/i.test(userInput)) {
  const bestAdviceReply = getRandomResponse(generalResponses.bestAdvice);
  return addNpcMessage(bestAdviceReply);
}

if (/what motivates you|what keeps you going/i.test(userInput)) {
  const motivationReply = getRandomResponse(generalResponses.motivation);
  return addNpcMessage(motivationReply);
}

// Fun, curious, or philosophical questions
if (/if you could go anywhere|where would you go/i.test(userInput)) {
  const travelReply = getRandomResponse(generalResponses.travel);
  return addNpcMessage(travelReply);
}

if (/what is the meaning of life|why are we here/i.test(userInput)) {
  const philosophyReply = getRandomResponse(generalResponses.philosophy);
  return addNpcMessage(philosophyReply);
}

if (/what's your dream|what are your aspirations/i.test(userInput)) {
  const dreamReply = getRandomResponse(generalResponses.dreams);
  return addNpcMessage(dreamReply);
}

if (/do you believe in fate|do you think everything happens for a reason/i.test(userInput)) {
  const fateReply = getRandomResponse(generalResponses.fate);
  return addNpcMessage(fateReply);
}

// Emotional or empathy-based responses
if (/I'm feeling sad|I'm feeling down/i.test(userInput)) {
  const empathyReply = getRandomResponse(generalResponses.empathy);
  return addNpcMessage(empathyReply);
}

if (/I'm feeling happy|I'm feeling good/i.test(userInput)) {
  const happinessReply = getRandomResponse(generalResponses.happiness);
  return addNpcMessage(happinessReply);
}

if (/I'm bored|I'm feeling bored/i.test(userInput)) {
  const boredomReply = getRandomResponse(generalResponses.boredom);
  return addNpcMessage(boredomReply);
}

if (/I'm stressed|I'm anxious/i.test(userInput)) {
  const stressReply = getRandomResponse(generalResponses.stress);
  return addNpcMessage(stressReply);
}

// More "goodbye" and parting messages
if (/goodbye|see you/i.test(userInput)) {
  const goodbyeReply = getRandomResponse(generalResponses.goodbye);
  return addNpcMessage(goodbyeReply);
}

if (/take care|take it easy/i.test(userInput)) {
  const takeCareReply = getRandomResponse(generalResponses.takeCare);
  return addNpcMessage(takeCareReply);
}

// Miscellaneous small talk or lighthearted responses
if (/what's up|what's going on/i.test(userInput)) {
  const whatsUpReply = getRandomResponse(generalResponses.whatsUp);
  return addNpcMessage(whatsUpReply);
}

if (/tell me a joke|make me laugh/i.test(userInput)) {
  const jokeReply = getRandomResponse(generalResponses.joke);
  return addNpcMessage(jokeReply);
}

if (/do you like music|what's your favorite music/i.test(userInput)) {
  const musicReply = getRandomResponse(generalResponses.music);
  return addNpcMessage(musicReply);
}

if (/what's the weather like|is it sunny/i.test(userInput)) {
  const weatherReply = getRandomResponse(generalResponses.weather);
  return addNpcMessage(weatherReply);
}

if (/are you real|are you human/i.test(userInput)) {
  const realReply = getRandomResponse(generalResponses.real);
  return addNpcMessage(realReply);
}

// Advice on daily habits and routines
if (/how should I start my day|what's a good morning routine/i.test(userInput)) {
  const morningRoutineReply = getRandomResponse(generalResponses.morningRoutine);
  return addNpcMessage(morningRoutineReply);
}

if (/how do I stay productive|any tips for being productive/i.test(userInput)) {
  const productivityReply = getRandomResponse(generalResponses.productivity);
  return addNpcMessage(productivityReply);
}

if (/how do I stay organized|what's the best way to organize/i.test(userInput)) {
  const organizationReply = getRandomResponse(generalResponses.organization);
  return addNpcMessage(organizationReply);
}

  // Handle mood-based responses
  for (let key in responses) {
    if (userInput.includes(key)) {
      const possibleReplies = responses[key];
      if (Array.isArray(possibleReplies) && possibleReplies.length > 0) {
        const randomReply = getRandomResponse(possibleReplies);
        return addNpcMessage(randomReply);
      } else {
        console.error(`No replies found for mood: ${key}`);
      }
    }
  }

  // If no match, use the default response
  const fallbackReply = responses.default || generalResponses.default;
  return addNpcMessage(fallbackReply);
}

function getRandomResponse(responseArray) {
  if (Array.isArray(responseArray) && responseArray.length > 0) {
    const randomItem = responseArray[Math.floor(Math.random() * responseArray.length)];
    return typeof randomItem === 'function' ? randomItem() : randomItem;
  } else {
    console.error("Invalid or empty response array:", responseArray);
    return "Sorry, something went wrong with the responses.";
  }
}

function addNpcMessage(message) {
  setTimeout(() => {
    addMessage(message, displayPicture, 'npc-chat-bbl-contnr', 'npc-chat-buble', 'visible');
  }, 2000);
}

// Event listeners for sending messages
sendMsgBtn.addEventListener("click", sendMessage);
textArea.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});




/**
 * 
 * 1. /pattern/
This is a regular expression. A regular expression is a sequence of characters that form a search pattern. It's a powerful tool for pattern matching within strings.

pattern: This is the text or pattern you're searching for within the userInput string. It can be a literal text or include special symbols that define more complex patterns (such as digits, letters, word boundaries, etc.).

For example, /hello/ would match the word "hello" anywhere in the string.

The slashes (/) denote the start and end of the regular expression.

2. i
This is a flag applied to the regular expression to modify how the pattern is matched:

i stands for case-insensitive matching. It makes the regular expression search case-insensitive, meaning it will match hello, Hello, HELLO, and so on.

Without the i flag, the pattern would be case-sensitive and only match the exact case (e.g., hello would not match HELLO).

For example:

/hello/i would match "hello", "HELLO", "HeLLo", etc.

/hello/ would only match "hello" (not "HELLO").

3. .test(userInput)
test() is a method of regular expressions in JavaScript. It tests whether the regular expression matches part of the string (userInput in this case).

userInput is the string you want to test the regular expression against. The test() method returns:

true: If the pattern is found in the string.

false: If the pattern is not found in the string.
 * 
 * 
*/





























































































//import { gameMainNavMenuDiv, gridContainer, menuTitle, gameContainer } from "../DOM.js";
//import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
//import { closeGrid, openGrid } from "../menu-navigation.js";
//import { addMessage } from "./chat-bubble.js";
//import { chatData } from "./messg-chat.js";

//const textMessagingContainer = document.getElementById('text-msg-app-div');
//const textArea = document.getElementById('player-message-input');
//const sendMsgBtn = document.getElementById('send-message-btn');


//export function openMessagingApp(){
  //textMessagingContainer.style.display = 'flex';
  //exitAppBtn.style.display = 'flex';
  //gameMainNavMenuDiv.style.display = "flex";
  //gameMainNavMenuDiv.style.position = 'absolute';
  //gridContainer.style.display = 'none';
  //menuTitle.style.display = 'none';
//}

//export function closeMessagingApp(){
  //textMessagingContainer.style.display = 'none';
  //exitAppBtn.style.display = 'none';
  //gridContainer.style.display = 'grid';
  //menuTitle.style.display = 'block';
  //gameMainNavMenuDiv.style.position = 'absolute';

//}


//const displayPicture = 'scripts/messaging/images/profile(1).png';




//export function sendMessage(){
  //const userMessage = textArea.value;
  //if (!userMessage) return;

  //addMessage(userMessage, null, 'my-chat-bbl-cntr', 'my-chat-bubble', 'hidden' );
  //textArea.value = '';

  //getResponses(userMessage);
//}

//export function getResponses(userInput){
  //userInput = userInput.toLowerCase().trim();
  
  // Step 1: Get moods
//const moods = chatData.responses.mood;
//const generalResponses = chatData.responses.general;
//const moodKeys = Object.keys(moods);
// Step 2: Pick one randomly
//const randomMoodKey = moodKeys[Math.floor(Math.random() * moodKeys.length)];
// Step 3: Get a response
//const responses = moods[randomMoodKey].response;

  // First, check for general queries (e.g., date, game info, tips)
  //if (userInput.includes("date") || //userInput.includes("what's today's //date" ) || userInput.includes("what date //is it?" )) {
   // const dateReply = getRandomResponse//(generalResponses.date);
   // return addNpcMessage(dateReply);
  //}


  //if (userInput.includes("what's the game //about") || userInput.includes("game //info") || userInput.includes("tell me //about this game")) {
   // const gameInfoReply = getRandomResponse//(generalResponses.gameInfo);
    //return addNpcMessage(gameInfoReply);
  //}


 // if (userInput.includes("tips") || //userInput.includes("how to improve") ||//userInput.includes("how to succeed in //this game")) {
   // const tipsReply = getRandomResponse//(generalResponses.tips);
   // return addNpcMessage(tipsReply);
 // }

 // if (userInput.includes("time") || //userInput.includes("what time is it?") ||//userInput.includes("what's the time?")) {
   // const timeReply = getRandomResponse//(generalResponses.time);
   // return addNpcMessage(timeReply);
 // }

 // if (userInput.includes("how are you?") || //userInput.includes("how's it going?") ||//userInput.includes("are you doing okay //today?")) {
   // const howAreYouReply = getRandomResponse//(generalResponses.howAreYou);
  //  return addNpcMessage(howAreYouReply);
 // }
  //if (userInput.includes("hobby") || //userInput.includes("what do you do for //fun")) {
    //const hobbyReply = getRandomResponse(generalResponses.hobbies);
   // return addNpcMessage(hobbyReply);
  //}
  //if (userInput.includes("dream") || //userInput.includes("future") || userInput.//includes("goal")) {
   // const dreamReply = getRandomResponse//(generalResponses.dreams);
    //return addNpcMessage(dreamReply);
  //}
  //if (userInput.includes("joke") || //userInput.includes("make me laugh") || //userInput.includes("funny")) {
    //const jokeReply = getRandomResponse//(generalResponses.jokes);
   // return addNpcMessage(jokeReply);
  //}

   // Handle mood-based responses
  //for (let key in responses){
      //if(userInput.includes(key)){
       // const possibleReplies = responses//[key];
       // const randomReply = //getRandomResponse(possibleReplies);
        //return addNpcMessage(randomReply);
      //}
      
   // }
    // If no match, use the default response
  //const fallbackReply = responses.//default || generalResponses.default;
  //return addNpcMessage(fallbackReply);

  //}

//  function getRandomResponse(responseArray) {
    //return responseArray[Math.floor(Math.random() * responseArray.length)];
  //}

 // function addNpcMessage(message) {
   // setTimeout(() => {
     // addMessage(message, displayPicture, 'npc-chat-bbl-contnr', 'npc-chat-buble', 'visible');
    //}, 2000);
  //}

//sendMsgBtn.addEventListener("click", sendMessage);
//textArea.addEventListener("keydown", e => //{
 // if (e.key === "Enter") sendMessage();
//});
