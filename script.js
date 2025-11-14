const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

// Function to add message
function addMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerText = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Default messages
const defaultMessages = [
    { text: "Hey there! I'm your AI assistant 🤖", sender: "ai" },
    { text: "Ask me anything or just say hi!", sender: "ai" }
];
defaultMessages.forEach(msg => addMessage(msg.text, msg.sender));

// Simulate AI response
function aiResponse(text) {
    const responses = [
        "Interesting! Tell me more.",
        "I see! Can you explain further?",
        "Hmm… let's think about that.",
        "Absolutely!",
        "That's a great question!",
        "I'm here to help you!"
    ];
    const randomReply = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => addMessage(randomReply, 'ai'), 800);
}

// Event listener for form
chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const userText = userInput.value.trim();
    if (userText === '') return;

    addMessage(userText, 'user');  // Add user message
    userInput.value = '';
    aiResponse(userText);          // Simulate AI reply
});
