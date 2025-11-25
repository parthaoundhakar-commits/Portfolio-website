// AI Chat with memory (ChatGPT-like)
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

// Keep conversation history
let conversation = [
  { sender: "AI", text: "Hello! I'm your futuristic assistant. How can I help you today?" }
];

// Render all messages
function renderMessages() {
  messages.innerHTML = "";
  conversation.forEach(msg => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text}`;
    p.classList.add(msg.sender.toLowerCase());
    messages.appendChild(p);
  });
  messages.scrollTop = messages.scrollHeight;
}

// Add a message
function addMessage(sender, text) {
  conversation.push({ sender, text });
  renderMessages();
}

// Generate AI reply based on conversation context
function generateAIReply(userText) {
  let reply = "Interesting! Tell me more."; // default response

  const text = userText.toLowerCase();

  // Context-aware replies
  if (text.includes("projects") || text.includes("portfolio")) {
    reply = "You can check out my projects in the Projects section. Which one would you like to see first?";
  } else if (text.includes("contact") || text.includes("message")) {
    reply = "You can reach me through the contact form at the bottom of this page.";
  } else if (text.includes("skills") || text.includes("technology")) {
    reply = "I have skills in HTML, CSS, JavaScript, React, Node.js, and more!";
  } else if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello! How’s your day going?";
  } else if (text.includes("thank")) {
    reply = "You're welcome! I'm always here to help.";
  } else if (text.length < 3) {
    reply = "Could you provide a bit more detail?";
  }

  return reply;
}

// Handle sending message
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage("You", text);
  input.value = "";

  // Simulate typing effect
  const typingMsg = document.createElement("p");
  typingMsg.innerHTML = `<strong>AI:</strong> <span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>`;
  messages.appendChild(typingMsg);
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    typingMsg.remove();
    const aiReply = generateAIReply(text);
    addMessage("AI", aiReply);
  }, 1200);
}

// Send on button click
sendBtn.addEventListener("click", sendMessage);

// Send on Enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});

// Initialize conversation
renderMessages();


// FreeCodeCamp Projects
const fccCard = document.getElementById("fcc-projects");
const fccContainer = document.getElementById("fcc-container");

fccCard.addEventListener("click", () => {
  if (fccContainer.style.display === "none") {
    fccContainer.style.display = "block";
    fccContainer.innerHTML = `
      <!-- Project 1: Survey Form -->
      <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Survey Form</title>
        <style>
          body { font-family: Arial, sans-serif; background: #fff; color:#000; padding:20px; }
          input, select, textarea, button { width:100%; padding:8px; margin:5px 0; border-radius:5px; border:1px solid #ccc; }
          button { background:#00f5ff; color:#000; border:none; cursor:pointer; }
        </style>
        </head>
        <body>
          <h2>Survey Form</h2>
          <form>
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="number" placeholder="Number" required>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <fieldset>
              <legend>Fruit</legend>
              <label><input type="radio" name="fruit"> Apple</label>
              <label><input type="radio" name="fruit"> Banana</label>
            </fieldset>
            <fieldset>
              <legend>Hobbies</legend>
              <label><input type="checkbox"> Reading</label>
              <label><input type="checkbox"> Traveling</label>
            </fieldset>
            <textarea placeholder="Comments"></textarea>
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
      ' width="100%" height="500"></iframe>

      <!-- Project 2: Tribute Page -->
      <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Tribute Page</title>
        <style>
          body { font-family: Arial, sans-serif; background:#fff; color:#000; text-align:center; padding:20px; }
          img { max-width:80%; border-radius:10px; }
        </style>
        </head>
        <body>
          <h2>Tribute Page</h2>
          <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg" alt="Tribute">
          <p>Dr. Norman Borlaug - Father of the Green Revolution</p>
          <a href="https://www.example.com" target="_blank">Learn More</a>
        </body>
        </html>
      ' width="100%" height="500"></iframe>

      <!-- Project 3: Technical Documentation -->
      <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Technical Documentation</title>
        <style>
          body { font-family: Arial, sans-serif; background:#fff; color:#000; padding:20px; }
          h2, h3 { text-align:center; }
          code { background:#eee; padding:2px 4px; border-radius:4px; display:block; margin:5px 0; }
        </style>
        </head>
        <body>
          <h2>Technical Documentation</h2>
          <h3>JavaScript Basics</h3>
          <p>JavaScript is a high-level, interpreted language used for web development.</p>
          <code>let x = 10;</code>
          <code>console.log(x);</code>
        </body>
        </html>
      ' width="100%" height="500"></iframe>

      <!-- Project 4: Product Landing Page -->
      <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Product Landing Page</title>
        <style>
          body { font-family: Arial, sans-serif; background:#fff; color:#000; text-align:center; padding:20px; }
          button { padding:10px 20px; border:none; border-radius:6px; background:#00f5ff; color:#000; cursor:pointer; }
        </style>
        </head>
        <body>
          <h2>Product Landing Page</h2>
          <p>Best product for your needs.</p>
          <button>Buy Now</button>
        </body>
        </html>
      ' width="100%" height="500"></iframe>

      <!-- Project 5: Personal Portfolio -->
      <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; background:#fff; color:#000; text-align:center; padding:20px; }
          ul { text-align:left; display:inline-block; margin-top:20px; }
          li { margin-bottom:8px; }
        </style>
        </head>
        <body>
          <h2>Personal Portfolio</h2>
          <p>Showcasing my FreeCodeCamp projects.</p>
          <ul>
            <li>Survey Form</li>
            <li>Tribute Page</li>
            <li>Technical Documentation</li>
            <li>Product Landing Page</li>
            <li>Portfolio Webpage</li>
          </ul>
        </body>
        </html>
      ' width="100%" height="500"></iframe>
    `;
  } else {
    fccContainer.style.display = "none";
    fccContainer.innerHTML = "";
  }
});


function openCertificate(img) {
  const overlay = document.getElementById("certificate-overlay");
  const overlayImg = document.getElementById("overlay-img");
  overlay.style.display = "flex";
  overlayImg.src = img.src;
}

function closeCertificate() {
  document.getElementById("certificate-overlay").style.display = "none";
}

window.onload = function () {
  try {
    TagCanvas.Start('skillsCanvas', 'tags', {
      textColour: '#0ff',        // text color (cyan neon)
      outlineColour: 'transparent',
      reverse: true,             // smooth reverse rotation
      depth: 0.8,                // 3D depth
      maxSpeed: 0.05,            // speed of rotation
      weight: true,              // makes bigger font for some skills
      shuffleTags: true,         // shuffle placement of skills
      wheelZoom: false,          // disable scroll zoom
      zoom: 1.0,                 // default zoom
      initial: [0.1, -0.1],      // initial rotation
      textHeight: 20             // font size
    });
  } catch (e) {
    // fallback if canvas not supported
    document.getElementById('skillsCanvas').style.display = 'none';
  }
};

function submitForm(event) {
  event.preventDefault();

  // Show success message
  const msg = document.getElementById("success-message");
  msg.style.display = "block";

  // Optionally reset form
  event.target.reset();

  // Hide message after 4 seconds
  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
}

function sendMessage 
    (e){
      e.preventDefault();
      alert("Thanks for your message! I will get back to you soon.");
    }