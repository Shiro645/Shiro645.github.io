let wordArray = [
    ["P", "L", "A", "N", "T"],
    ["S", "H", "O", "R", "E"],
    ["B", "R", "I", "C", "K"],
    ["M", "O", "U", "S", "E"],
    ["A", "P", "P", "L", "E"]
]

let wins = localStorage.getItem("win");
let looses = localStorage.getItem("loose");

localStorage.setItem("win", wins);
localStorage.setItem("loose", looses);

let userInput = document.querySelector("#userInput");
let guessButton = document.querySelector("#guessButton");
let feedback = document.querySelector("#feedback");
let getHintButton = document.querySelector("#getHintButton");
let retryButton = document.querySelector("#retryButton");

let win = document.querySelector("#winSpan");
let loose = document.querySelector("#looseSpan");

let firstLetter = document.querySelector("#firstLetter");
let secondLetter = document.querySelector("#secondLetter");
let thirdLetter = document.querySelector("#thirdLetter");
let fourthLetter = document.querySelector("#fourthLetter");
let testedWords = document.querySelector("#testedWord");
let fifthLetter = document.querySelector("#fifthLetter");

let word = [
    firstLetter, 
    secondLetter, 
    thirdLetter, 
    fourthLetter, 
    fifthLetter
]

let correctWord;

let numberOfTries;

initiateGame();

guessButton.addEventListener("click", checkGuess);
retryButton.addEventListener("click", initiateGame);

function initiateGame() { 
    for(i in word) { 
        word[i].style.display = "none";
    }
    userInput.style.display = "inline";
    guessButton.style.display = "inline";
    feedback.style.display = "inline";
    getHintButton.style.display = "inline";
    retryButton.style.display = "none";

    let randomIndex = Math.floor(Math.random() * wordArray.length);

    correctWord = wordArray[randomIndex];

    win.textContent = "WINS : " + wins;
    loose.textContent = "LOOSE : " + looses

    numberOfTries = 0;
}

function checkGuess() {
    if (userInput.value.length != 5) { 
        feedback.textContent = "the WORD is 5 letters long";
        feedback.display = "inline";
        return;
    }

    let wordText = userInput.value;

    for (i in wordText) { 
        word[i].textContent = wordText.charAt(i).toUpperCase();
    }

    let arrayOfIndexOfCorrectLetters = [-1, -1, -1, -1, -1];
    let index = 0;

    let numberCorrect = 0;
    for(i in correctWord) { 
        if (word[i].textContent == correctWord[i]) {
            word[i].style.color = "green";
            arrayOfIndexOfCorrectLetters[index] = i;
            index++;
            numberCorrect++;
        } else { 
            let bool = false;
            for (let j = 0; j < 5; j++) { 
                if (!arrayOfIndexOfCorrectLetters.includes(j) && word[i].textContent == correctWord[j]) { 
                    bool = true;
                }
            }
            if (bool) { 
                word[i].style.color = "orange";
            } else {
                word[i].style.color = "red";
            }
        }
        word[i].style.display = "inline";
    }

    if(numberCorrect == 5) { 
        gameOverWin();
    } else { 
        numberOfTries++;
        appendWord();
    }

    if(numberOfTries >= 7) { 
        gameOverLoose();
    }
}

function gameOverWin() { 
    userInput.style.display = "none";
    guessButton.style.display = "none";
    feedback.style.display = "none";
    getHintButton.style.display = "none";
    retryButton.style.display = "inline";
    localStorage.setItem("win", win++);
    win.textContent = "Wins : " + localStorage.getItem("loose");
}

function gameOverLoose() {
    userInput.style.display = "none";
    guessButton.style.display = "none";
    feedback.style.display = "none";
    getHintButton.style.display = "none";
    retryButton.style.display = "inline";
    localStorage.setItem("loose", loose++);
    loose.textContent = "Looses : " + localStorage.getItem("win");
}

function appendWord() { 
    let wordText = document.querySelector("#userInput").value.toUpperCase();
    let p = document.createElement("p");
    p.textContent = wordText;
    testedWords.append(p);
}