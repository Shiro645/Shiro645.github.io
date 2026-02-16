let randomNumber;
let attempts = 0;

let wins = 0;
let losses = 0;

document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   //showing the Guess button
   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   document.querySelector("#guesses").textContent = "";
   document.querySelector("#attemptsLeft").textContent = "Attempts Left : 7";

   document.querySelector("#wins").textContent = wins;
   document.querySelector("#losses").textContent = losses;1``
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    } 
    attempts++;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber ) { 
        feedback.textContent = "You WIN !";
        feedback.style.color = "green";
        wins++;
        gameOver();
    } else {
        document.querySelector("#attemptsLeft").textContent = "Attempts Left : " + (7 - attempts);
        if (attempts == 7) { 
            feedback.textContent = "GAME OVER!\nThe number was : " + randomNumber;
            feedback.style.color = "red";
            losses++;
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Your guess was High";
            document.querySelector("#guesses").textContent += guess + ":High ";
        } else { 
            feedback.textContent = "Your guess was Low";
            document.querySelector("#guesses").textContent += guess + ":Low ";
        }
    }
}

function gameOver() { 
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}