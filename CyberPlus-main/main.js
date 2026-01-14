// ========================================
// CYBER+ WEBSITE MAIN.JS
// Typing Animation + Glitch Effect + Button Hover
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.getElementById('typed-text');
  const buttons = document.querySelectorAll('.btn');

  // SAFETY CHECKS
  if (!typedText) return;
  if (!buttons) console.warn("No buttons found for hover effect");

  // -----------------------------
  // TYPING ANIMATION
  const messages = [
    "Welcome to Cyber+",
    "Cyber+ → Security Automation",
    "Cyber+ → Scanning & Recon",
    "Cyber+ → Lightweight DSL for Cybersecurity"
  ];

  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentMessage = messages[messageIndex];

    // Glitch effect randomly
    let displayText = currentMessage.substring(0, charIndex);
    if (!isDeleting && Math.random() < 0.08 && displayText.length > 0) {
      const glitchChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
      displayText =
        displayText.slice(0, displayText.length - 1) +
        glitchChar;
    }

    typedText.textContent = displayText;

    // Typing logic
    if (!isDeleting && charIndex < currentMessage.length) {
      charIndex++;
      setTimeout(type, 120); // typing speed
    } else if (!isDeleting && charIndex === currentMessage.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause at full message
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50); // deleting speed
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length; // loop messages
      setTimeout(type, 500);
    }
  }

  type(); // start typing animation

  // -----------------------------
  // BUTTON HOVER EFFECTS
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = '0 15px 40px rgba(0,229,255,0.5)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0px)';
      btn.style.boxShadow = '';
    });
  });

  // -----------------------------
  // CURSOR BLINKING EFFECT
  setInterval(() => {
    if (typedText.textContent.endsWith('|')) {
      typedText.textContent = typedText.textContent.slice(0, -1);
    } else {
      typedText.textContent += '|';
    }
  }, 500);
});
