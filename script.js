// Game variables
const secretNumber = Math.floor(Math.random() * (200 - 15 + 1)) + 15; // Random number between 15 and 200
let score = 0;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const message = document.getElementById("message");
    const scoreDisplay = document.getElementById("score");
    const guess = parseInt(guessInput.value);

    // Check if the guess is a valid number
    if (isNaN(guess)) {
        message.textContent = "Silly you! That's not a number!";
        message.style.color = "red";
        return;
    }

    score += 1;

    // Check the guess
    if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
    } else if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = `Amazing! You guessed it in ${score} attempts! Thanks for playing!`;
        message.style.color = "green";
        guessInput.disabled = true; // Disable input after winning
    }

    scoreDisplay.textContent = `Attempts: ${score}`;
}
