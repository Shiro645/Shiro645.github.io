let wordArray = [
    ["P", "L", "A", "N", "T"],
    ["B", "R", "I", "C", "K"],
    ["M", "O", "U", "S", "E"],
    ["A", "P", "P", "L", "E"],
    ["S", "C", "A", "R", "F"]
]

let randomIndex;

let plant = document.createElement("img");
plant.src = "ressources/plant.png";
plant.alt = "Plant";
plant.width = 50;
plant.height = 50;
plant.style.borderRadius = 20;

let brick = document.createElement("img");
brick.src = "ressources/brick.png";
brick.alt = "Brick";
brick.width = 50;
brick.height = 50;
brick.style.borderRadius = 20;

let mouse = document.createElement("img");
mouse.src = "ressources/mouse.png";
mouse.alt = "Mouse";
mouse.width = 50;
mouse.height = 50;
mouse.style.borderRadius = 20;

let apple = document.createElement("img");
apple.src = "ressources/apple.png";
apple.alt = "Apple";
apple.width = 50;
apple.height = 50;
apple.style.borderRadius = 20;

let scarf = document.createElement("img");
scarf.src = "ressources/scarf.png";
scarf.alt = "Scarf";
scarf.width = 50;
scarf.height = 50;
scarf.style.borderRadius = 20;

let hint = document.querySelector("#hint");

let wins = Number(localStorage.getItem("win"));

if (!wins) { 
    wins = 0;
    localStorage.setItem("win", wins);
}

let looses = Number(localStorage.getItem("loose"));

if (!looses) { 
    looses = 0;
    localStorage.setItem("loose", looses);
}

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

getHintButton.addEventListener("click", function() { 
    hint.innerHTML = "";
    getHintButton.style.display = "none";
    if (randomIndex == 0) { 
        hint.append(plant);
    }
    else if (randomIndex == 1) { 
        hint.append(brick);
    }
    else if (randomIndex == 2) { 
        hint.append(mouse);
    }
    else if (randomIndex == 3) { 
        hint.append(apple);
    }
    else if (randomIndex == 4) { 
        hint.append(scarf);
    }
    hint.style.display = "inline";
})

guessButton.addEventListener("click", checkGuess);
retryButton.addEventListener("click", initiateGame);

initiateGame();

function initiateGame() { 
    for(i in word) { 
        word[i].style.display = "none";
    }
    userInput.style.display = "inline";
    guessButton.style.display = "inline";
    feedback.style.display = "inline";
    getHintButton.style.display = "inline";
    retryButton.style.display = "none";
    hint.style.display = "none";
    getHintButton.style.display = "inline";
    
    randomIndex = Math.floor(Math.random() * wordArray.length);

    correctWord = wordArray[randomIndex];

    win.textContent = "WINS : " + wins;
    loose.textContent = "LOOSE : " + looses

    numberOfTries = 0;
}

function checkGuess() {
    if (userInput.value.length != 5) { 
        feedback.textContent = "the WORD is 5 letters long";
        feedback.style.display = "inline";
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
                arrayOfIndexOfCorrectLetters[index] = i;
                index++;
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
    gameOver();
    localStorage.setItem("win", ++wins);
    win.textContent = "Wins : " + localStorage.getItem("win");
}

function gameOverLoose() {
    gameOver();
    localStorage.setItem("loose", ++looses);
    loose.textContent = "Looses : " + localStorage.getItem("loose");
}

function gameOver() { 
    userInput.style.display = "none";
    guessButton.style.display = "none";
    feedback.style.display = "none";
    getHintButton.style.display = "none";
    retryButton.style.display = "inline";

    document.querySelector("#testedWords").remove();
    let testedWords = document.createElement("div");
    testedWords.id = "testedWords";
    document.querySelector("#main").append(testedWords);
}

function appendWord() { 
    let testedWords = document.querySelector("#testedWords");
    let wordText = document.querySelector("#userInput").value.toUpperCase();
    let p = document.createElement("p");
    p.textContent = wordText;
    testedWords.append(p);
}