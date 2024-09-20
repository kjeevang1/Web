// Select the confetti container
const confettiContainer = document.getElementById("confetti-container");

// Function to generate confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Randomly position the confetti
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 5 + 4 + "s"; // Slower falling speed (between 4 to 9 seconds)

    // Randomize confetti size and color
    confetti.style.width = Math.random() * 50 + 25 + "px";
    confetti.style.height = confetti.style.width; // Keep it square
    confetti.style.backgroundColor = randomColor();

    confettiContainer.appendChild(confetti);

    // Remove confetti after it falls
    setTimeout(() => {
        confetti.remove();
    }, 9000); // Matches the longest animation duration
}

// Function to generate a random color with higher saturation
function randomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue
    const saturation = "100%"; // Max saturation for vibrant colors
    const lightness = Math.floor(Math.random() * 40) + 30 + "%"; // Adjusted lightness for stronger color
    return `hsl(${hue}, ${saturation}, ${lightness})`;
}

// Generate confetti continuously
setInterval(createConfetti, 150); // Slower generation of confetti
