let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low, Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Good morning! 🌟 Talk about starting the day with a win. You got the right number! - your's budodu💖";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide the valid input";
        gameResult.style.backgroundColor = "red";
    }
}
 
