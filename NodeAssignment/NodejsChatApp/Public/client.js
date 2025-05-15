const socket = io();
const form = document.getElementById('chat-form');
const input = document.getElementById('msg-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msgText = input.value.trim();
  if (msgText) {
    // Show the user's own message immediately
    const userMsg = document.createElement('div');
    userMsg.textContent = msgText;
    userMsg.classList.add('message', 'user');
    messages.appendChild(userMsg);
    messages.scrollTop = messages.scrollHeight;

    // Send message to server
    socket.emit('chat message', msgText);

    // Clear input
    input.value = '';
  }
});

// Receive messages from others (bot/other users)
socket.on('chat message', (msg) => {
  const botMsg = document.createElement('div');
  botMsg.textContent = msg;
  botMsg.classList.add('message', 'bot');
  messages.appendChild(botMsg);
  messages.scrollTop = messages.scrollHeight;
});
