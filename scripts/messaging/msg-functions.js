
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


// Open the messaging app and adjust UI
export function openMessagingApp() {
  textMessagingContainer.style.display = 'flex';
  exitAppBtn.style.display = 'flex';
  gameMainNavMenuDiv.style.display = "none";
  gridContainer.style.display = 'none';
  gamePlayContainer.style.display ='none';
  menuTitle.style.display = 'none';
  getCurrentDate();
  getCurrentTime();
  getPlayerInfo('name')
}

// Close the messaging app and revert UI
export function closeMessagingApp() {
  textMessagingContainer.style.display = 'none';
  exitAppBtn.style.display = 'none';
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
  if (userInput.includes("date") || userInput.includes("what is today's date") || userInput.includes("what's today's date") || userInput.includes("what date is it?")) {
    const dateReply = getRandomResponse(generalResponses.date);
    return addNpcMessage(dateReply);
  }

  if (userInput.includes("what's the game about") || userInput.includes("game info") || userInput.includes("tell me about this game") || userInput.includes("what is this game about?")) {
    const gameInfoReply = getRandomResponse(generalResponses.gameInfo);
    return addNpcMessage(gameInfoReply);
  }

  if (userInput.includes("tips") || userInput.includes("how to improve") || userInput.includes("how to succeed in this game") || userInput.includes("what tips can you give me on this game?")) {
    const tipsReply = getRandomResponse(generalResponses.tips);
    return addNpcMessage(tipsReply);
  }

  // Check for "hello" and similar greetings
  if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
    const greetingReply = getRandomResponse(responses.hello || generalResponses.hello);
    return addNpcMessage(greetingReply);
  }

  if (userInput.includes("time") || userInput.includes("what time is it?") || userInput.includes("what's the time?")) {
    const timeReply = getRandomResponse(generalResponses.time);
    return addNpcMessage(timeReply);
  }

  if (userInput.includes("how are you?") || userInput.includes("how's it going?") || userInput.includes("are you doing okay today?")) {
    const howAreYouReply = getRandomResponse(generalResponses.howAreYou);
    return addNpcMessage(howAreYouReply);
  }

  if (userInput.includes("hobby") || userInput.includes("what do you do for fun") || userInput.includes("what are your hobbies?") || userInput.includes("do you have any hobbies?")) {
    const hobbyReply = getRandomResponse(generalResponses.hobbies);
    return addNpcMessage(hobbyReply);
  }

  //----------------------------------------------------------------------------------------------------------------

  if (userInput.includes("good morning") || userInput.includes("good afternoon") || userInput.includes("good evening") || userInput.includes("good night") || userInput.includes("afternoon") || userInput.includes("evening") || userInput.includes("night") || userInput.includes("morning")) {
    const greetReply = getRandomResponse(generalResponses.dayGreeting);
    return addNpcMessage(greetReply);
  }
  
  if (userInput.includes("my info") || userInput.includes("player info") || userInput.includes("what can you tell me about myself? ") || userInput.includes("what can you tell me about me? ") || userInput.includes("what do you know about me? ") || userInput.includes("check my stats") || userInput.includes("tell me about me") || userInput.includes("what is my current situation?") || userInput.includes("how are my stats doing?")) {
    const playerInfoReply = getRandomResponse(generalResponses.playerInfo);
    return addNpcMessage(playerInfoReply);
  }
  
  if (userInput.includes("motivate me") || userInput.includes("motivation") || userInput.includes("inspire me") || userInput.includes("i need motivation")) {
    const motivationReply = getRandomResponse(generalResponses.motivation);
    return addNpcMessage(motivationReply);
  }
  
  if (userInput.includes("say something nice") || userInput.includes("compliment me") || userInput.includes("do you like me") || userInput.includes("am i doing good")) {
    const complimentReply = getRandomResponse(generalResponses.compliments);
    return addNpcMessage(complimentReply);
  }
  
  if (userInput.includes("daily goals") || userInput.includes("what should i do today") || userInput.includes("plan for today") || userInput.includes("what are you doing today")  || userInput.includes("what your day look like") || userInput.includes("any advice today"))  {
    const goalsReply = getRandomResponse(generalResponses.dailyGoals);
    return addNpcMessage(goalsReply);
  }
  
  if (userInput.includes("who are you") || userInput.includes("tell me about yourself") || userInput.includes("tell me about you") || userInput.includes("what are you") || userInput.includes("are you a bot")) {
    const botInfoReply = getRandomResponse(generalResponses.askAboutBot);
    return addNpcMessage(botInfoReply);
  }
  
  if (userInput.includes("plans for today") || userInput.includes("what's the plan") || userInput.includes("what do we do now") || userInput.includes("suggest something")) {
    const plansReply = getRandomResponse(generalResponses.plansForToday);
    return addNpcMessage(plansReply);
  }
  
  if (userInput.includes("how are you feeling") || userInput.includes("how's your mood") || userInput.includes("how you doing") || userInput.includes("feeling okay")) {
    const feelingReply = getRandomResponse(generalResponses.feelingCheck);
    return addNpcMessage(feelingReply);
  }
  
  if (userInput.includes("encourage me") || userInput.includes("i'm feeling down") || userInput.includes("say something encouraging") || userInput.includes("i need support")) {
    const encourageReply = getRandomResponse(generalResponses.encouragement);
    return addNpcMessage(encourageReply);
  }
  
  if (userInput.includes("hidden tips") || userInput.includes("secret") || userInput.includes("give me a secret") || userInput.includes("tell me a secret") || userInput.includes("hidden info")) {
    const secretReply = getRandomResponse(generalResponses.mysteryTips);
    return addNpcMessage(secretReply);
  }

  if (userInput.includes("bye") || userInput.includes("bye bye") || userInput.includes("gotta go now") || userInput.includes("good bye") || userInput.includes("I'm outta here") || userInput.includes("see you later")) {
    const secretReply = getRandomResponse(generalResponses.goodbye);
    return addNpcMessage(secretReply);
  }

  if (userInput.includes("thanks") || userInput.includes("thank you")) {
    const secretReply = getRandomResponse(generalResponses.goodbye);
    return addNpcMessage(secretReply);
  }

  //----------------------------------------------------------------------------------------------------------------

  if (userInput.includes("dream") || userInput.includes("future") || userInput.includes("goal") || userInput.includes("what are your goals?") || userInput.includes("what are your dreams?") || userInput.includes("what are your plans for the future?")) {
    const dreamReply = getRandomResponse(generalResponses.dreams);
    return addNpcMessage(dreamReply);
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
