
import { gameMainNavMenuDiv, gridContainer, menuTitle, gameContainer } from "../DOM.js";
import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
import { closeGrid, openGrid } from "../menu-navigation.js";
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
  gameMainNavMenuDiv.style.display = "flex";
  gameMainNavMenuDiv.style.position = 'absolute';
  gridContainer.style.display = 'none';
  menuTitle.style.display = 'none';
  getCurrentDate();
  getCurrentTime();
}

// Close the messaging app and revert UI
export function closeMessagingApp() {
  textMessagingContainer.style.display = 'none';
  exitAppBtn.style.display = 'none';
  gridContainer.style.display = 'grid';
  menuTitle.style.display = 'block';
  gameMainNavMenuDiv.style.position = 'absolute';
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
