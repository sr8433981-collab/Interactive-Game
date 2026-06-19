// Variables (Game State)
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let score = 0;

// DOM Elements
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const scoreText = document.getElementById("score");

// Function
function checkGuess() {
    const guess = Number(guessInput.value);

    if (!guess) {
        message.textContent = "Please enter a number!";
        return;
    }

    attempts--;

    // Condition (if-else)
    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You won!";
        message.style.color = "green";
        score += 10;
        scoreText.textContent = score;
        checkBtn.disabled = true;
    } else if (guess > secretNumber) {
        message.textContent = "📈 Too High!";
        message.style.color = "red";
    } else {
        message.textContent = "📉 Too Low!";
        message.style.color = "red";
    }

    attemptsText.textContent = attempts;

    // Loop example
    for (let i = 0; i < 1; i++) {
        console.log("Guess checked");
    }

    if (attempts === 0 && guess !== secretNumber) {
        message.textContent =
            `😢 Game Over! Number was ${secretNumber}`;
        checkBtn.disabled = true;
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;

    attemptsText.textContent = attempts;
    message.textContent = "Start guessing...";
    message.style.color = "black";

    guessInput.value = "";
    checkBtn.disabled = false;
}

// Events
checkBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);