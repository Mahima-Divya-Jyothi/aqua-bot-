const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage("You", message);
  respondTo(message.toLowerCase());
  userInput.value = "";
}

function displayMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function speakMessage(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

function respondTo(input) {
  let response = "";

  if (input.includes("why is clean water important")) {
    response = "Clean water is essential to prevent disease, support agriculture, and maintain hygiene.";
  } else if (input.includes("how can i save water") || input.includes("water conservation")) {
    response = "You can save water by fixing leaks, using low-flow taps, and turning off the tap while brushing.";
  } else if (input.includes("hand wash") || input.includes("hygiene")) {
    response = "Handwashing with soap helps prevent the spread of bacteria and viruses. Wash for at least 20 seconds!";
  } else if (input.includes("disease") || input.includes("waterborne")) {
    response = "Waterborne diseases include cholera, typhoid, and diarrhea. Always drink clean, filtered water.";
  } else if (input.includes("tip") || input.includes("daily tip")) {
    response = "💡 Water Tip: Collect rainwater for gardening. It's eco-friendly and free!";
  } else if (input.includes("hello") || input.includes("hi")) {
    response = "Hello! I’m AquaBot here to raise awareness about clean water and sanitation. Ask me anything!";
  } else {
    response = "Sorry, I didn’t understand that. Try asking about clean water, hygiene, or water conservation.";
  }

  displayMessage("AquaBot", response);
  speakMessage(response); // 🗣️ Speak the bot's response
}
