let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    attempts++;

    if (userGuess == randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "🔼 Too low! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = "🔽 Too high! Try again.";
        message.style.color = "red";
    }
}
