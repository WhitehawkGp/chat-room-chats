// Get DOM elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const usernameInput = document.getElementById('username');

// Load messages from localStorage on page load
window.onload = () => {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(displayMessage);
};

// Send button click event
sendBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (!username || !message) return; // Prevent empty messages

    const newMessage = { user: username, text: message };
    saveMessage(newMessage);
    displayMessage(newMessage);

    messageInput.value = ''; // Clear input
    messageInput.focus(); // Focus back on input
});

// Save message to localStorage
function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Display a message in the chat box
function displayMessage({ user, text }) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span>${user}:</span> ${text}`;
    chatBox.appendChild(messageElement);

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
