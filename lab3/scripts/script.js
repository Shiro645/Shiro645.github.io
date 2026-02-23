document.querySelector("#submitButton").addEventListener("click", submitQuiz);
document.querySelector("#retryButton").addEventListener("click", initializeGame);

let checkMark1 = document.createElement("img");
checkMark1.src = "ressources/checkmark.png";
checkMark1.alt = "Check Mark";
checkMark1.width = 20;
checkMark1.height = 20;

let checkMark2 = document.createElement("img");
checkMark2.src = "ressources/checkmark.png";
checkMark2.alt = "Check Mark";
checkMark2.width = 20;
checkMark2.height = 20;

let checkMark3 = document.createElement("img");
checkMark3.src = "ressources/checkmark.png";
checkMark3.alt = "Check Mark";
checkMark3.width = 20;
checkMark3.height = 20;

let checkMark4 = document.createElement("img");
checkMark4.src = "ressources/checkmark.png";
checkMark4.alt = "Check Mark";
checkMark4.width = 20;
checkMark4.height = 20;

let checkMark5 = document.createElement("img");
checkMark5.src = "ressources/checkmark.png";
checkMark5.alt = "Check Mark";
checkMark5.width = 20;
checkMark5.height = 20;

let xMark1 = document.createElement("img");
xMark1.src = "ressources/xmark.png";
xMark1.alt = "X Mark";
xMark1.width = 20;
xMark1.height = 20;

let xMark2 = document.createElement("img");
xMark2.src = "ressources/xmark.png";
xMark2.alt = "X Mark";
xMark2.width = 20;
xMark2.height = 20;

let xMark3 = document.createElement("img");
xMark3.src = "ressources/xmark.png";
xMark3.alt = "X Mark";
xMark3.width = 20;
xMark3.height = 20;

let xMark4 = document.createElement("img");
xMark4.src = "ressources/xmark.png";
xMark4.alt = "X Mark";
xMark4.width = 20;
xMark4.height = 20;

let xMark5 = document.createElement("img");
xMark5.src = "ressources/xmark.png";
xMark5.alt = "X Mark";
xMark5.width = 20;
xMark5.height = 20;

let numberOfTries = Number(localStorage.getItem("numberOfTries"));

if (!numberOfTries) { 
    numberOfTries = 0;
    localStorage.setItem("numberOfTries", Number(numberOfTries));
}
else { 
    numberOfTries = Number(localStorage.getItem("numberOfTries"));
}

function initializeGame() { 
    document.querySelector("#tries").textContent = "Tries : " + localStorage.getItem("numberOfTries");
    document.querySelector("#retryButton").style.display = "none";
    document.querySelector("#submitButton").style.display = "inline";

    document.querySelector("#question1-answer").style.display = "none";
    document.querySelector("#imageResultQ1").style.display = "none";
    document.querySelector("#question2-answer").style.display = "none";
    document.querySelector("#imageResultQ2").style.display = "none";
    document.querySelector("#question3-answer").style.display = "none";
    document.querySelector("#imageResultQ3").style.display = "none";
    document.querySelector("#question4-answer").style.display = "none";
    document.querySelector("#imageResultQ4").style.display = "none";
    document.querySelector("#question5-answer").style.display = "none";
    document.querySelector("#imageResultQ5").style.display = "none";

    checkMark1.remove();
    checkMark2.remove();
    checkMark3.remove();
    checkMark4.remove();
    checkMark5.remove();

    xMark1.remove();
    xMark2.remove();
    xMark3.remove();
    xMark4.remove();
    xMark5.remove();

    document.querySelector("#result").style.display = "none";
    document.querySelector("#congrats").style.display = "none";
}

initializeGame();

function submitQuiz() {
    document.querySelector("#retryButton").style.display = "inline";
    document.querySelector("#submitButton").style.display = "none";

    let question1 = document.querySelector("input[name=q1]:checked").value;
    let question2 = document.querySelector("#text-box").value;
    let question3 = document.querySelector("#dropdown").value;
    let question4 = document.querySelector("#number").value;
    let question51 = document.querySelector("#checkbox1").checked;
    let question52 = document.querySelector("#checkbox2").checked;
    let question53 = document.querySelector("#checkbox3").checked;

    let score = 0;

    numberOfTries += 1;
    localStorage.setItem("numberOfTries", numberOfTries);
    document.querySelector("#tries").textContent = "Tries : " + localStorage.getItem("numberOfTries");

    if (question1 == "font-color") { 
        document.querySelector("#question1-answer").textContent = "CORRECT !";
        document.querySelector("#question1-answer").style.color = "green";
        document.querySelector("#imageResultQ1").append(checkMark1);
        score += 20;
    }
    else { 
        document.querySelector("#question1-answer").textContent = "WRONG !";
        document.querySelector("#question1-answer").style.color = "red";
        document.querySelector("#imageResultQ1").append(xMark1);
    }

    if (question2 == "Gengar") { 
        document.querySelector("#question2-answer").textContent = "CORRECT !";
        document.querySelector("#question2-answer").style.color = "green";
        document.querySelector("#imageResultQ2").append(checkMark2);
        score += 20;
    }
    else { 
        document.querySelector("#question2-answer").textContent = "WRONG !";
        document.querySelector("#question2-answer").style.color = "red";
        document.querySelector("#imageResultQ2").append(xMark2);
    }

    if (question3 == "good-answer") { 
        document.querySelector("#question3-answer").textContent = "CORRECT !";
        document.querySelector("#question3-answer").style.color = "green";
        document.querySelector("#imageResultQ3").append(checkMark3);
        score += 20;
    }
    else { 
        document.querySelector("#question3-answer").textContent = "WRONG !";
        document.querySelector("#question3-answer").style.color = "red";
        document.querySelector("#imageResultQ3").append(xMark3);
    }

    if (question4 == 50) { 
        document.querySelector("#question4-answer").textContent = "CORRECT !";
        document.querySelector("#question4-answer").style.color = "green";
        document.querySelector("#imageResultQ4").append(checkMark4);
        score += 20;
    }
    else { 
        document.querySelector("#question4-answer").textContent = "WRONG !";
        document.querySelector("#question4-answer").style.color = "red";
        document.querySelector("#imageResultQ4").append(xMark4);
    }

    if (question51 && question52 && question53) { 
        document.querySelector("#question5-answer").textContent = "CORRECT !";
        document.querySelector("#question5-answer").style.color = "green";
        document.querySelector("#imageResultQ5").append(checkMark5);
        score += 20;
    }
    else { 
        document.querySelector("#question5-answer").textContent = "WRONG !";
        document.querySelector("#question5-answer").style.color = "red";
        document.querySelector("#imageResultQ5").append(xMark5);
    }

    document.querySelector("#question1-answer").style.display = "inline";
    document.querySelector("#imageResultQ1").style.display = "inline";
    document.querySelector("#question2-answer").style.display = "inline";
    document.querySelector("#imageResultQ2").style.display = "inline";
    document.querySelector("#question3-answer").style.display = "inline";
    document.querySelector("#imageResultQ3").style.display = "inline";
    document.querySelector("#question4-answer").style.display = "inline";
    document.querySelector("#imageResultQ4").style.display = "inline";
    document.querySelector("#question5-answer").style.display = "inline";
    document.querySelector("#imageResultQ5").style.display = "inline";

    document.querySelector("#result").style.display = "inline";
    document.querySelector("#result").textContent = "Your SCORE is : " + score;
    if (score > 80) { 
        document.querySelector("#congrats").style.display = "inline";
        document.querySelector("#congrats").textContent = "CONGRATULATIONS, Your Score is over 80 !";
    }
}