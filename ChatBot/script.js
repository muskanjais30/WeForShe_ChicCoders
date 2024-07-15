const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;
    
    addMessage(userMessage, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        addMessage(botMessage, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Simple bot responses for demonstration purposes
    const responses = {
        'hello': 'Hi there!',
        'how are you?': 'I\'m a bot, so I\'m always good!',
        'bye': 'Goodbye!',
        'default': 'I didn\'t understand that. Can you rephrase?'
    };

    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || responses['default'];
}
