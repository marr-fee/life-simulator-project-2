
const chatContainer = document.getElementById('concersation-container');

// Scroll to the bottom of the chat whenever a new message is added
function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Example of adding a new message dynamically
function addMessage(message, senderBlock, senderBbl ) {
    const messageBlockElement = document.createElement('div');
    messageBlockElement.classList.add(senderBlock);

    const messageBubble = document.createElement('div');
    messageBubble.classList.add(senderBbl);
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageBubble.appendChild(messageText);
    messageBlockElement.appendChild(messageBubble);

    chatContainer.appendChild(messageBlockElement);
    scrollToBottom(); // Ensure the chat container scrolls to the bottom
}

// Add a new message every 2 seconds (for demonstration)
setInterval(() => {
  const senderBlock = Math.random() > 0.5 ? 'my-chat-bbl-cntr' : 'npc-chat-bbl-contnr';
  const senderBubble = senderBlock === 'my-chat-bbl-cntr' ? 'my-chat-bubble' : 'npc-chat-buble';

//addMessage('New message', senderBlock, senderBubble);

  
  // Initial scroll to the bottom
  scrollToBottom();
}, 3000);

