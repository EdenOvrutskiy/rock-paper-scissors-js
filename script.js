//todo: too many "global" variables? - 

//rock paper scissors vs. the computer
console.log("Welcome to rock, paper scissors!");

//create three buttons, one for each selection.
const rockButton = createButton('rock');
const paperButton = createButton('paper');
const scissorsButton = createButton('scissors');


//create a display for round outcome with in a DOM element
const resultField = document.createElement('div');
document.body.appendChild(resultField);


//listen to button clicks to trigger playing a round
const buttons = [rockButton, paperButton, scissorsButton];

startButtonListeners(buttons);

function startButtonListeners(button) {
    for (button of buttons) {
        button.addEventListener('click', playRound);
    }
}


//create a DOM element for keeping score
//one for player and one for the computer
const playerScoreDiv = document.createElement('div');
document.body.appendChild(playerScoreDiv);

const computerScore = document.createElement('div');
document.body.appendChild(computerScore);

//initialize both scores to 0
playerScoreDiv.textContent = 0;
computerScore.textContent = 0;


//when clicked, increment the relevant score
function playRound(listenerEventObject) {
    const playerSelection = listenerEventObject.target.classList.value;
    const compSelection = computerPlay();
    //compare both choices
    const winner = determineRoundWinner(playerSelection, compSelection);
    updateScore(winner);
    declareRoundWinner(winner);
    if (isGameOver()) {
        declareGameWinner(winner);
        //removeEventListeners
        stopButtonListeners(buttons);
    }
}//end of playRound

function stopButtonListeners(buttons) {
    for (button of buttons) {
        button.removeEventListener('click', playRound);
    }
}

function rejectBadInput(playerSelection) {
    //deny anything that isn't rock/paper/scissors:
    //account for both capitalizated / lowercase input
    playerSelection = playerSelection.toLowerCase();
    //make sure user input is one of the three
    if (playerSelection == "rock") {
    }
    else if (playerSelection == "paper") {
    }
    else if (playerSelection == "scissors") {
    }
    else {
        console.log("your input: ", playerSelection, "was rejected");
    }
    return playerSelection;
}

//have the computer make it's own random selection

function pickZeroOneOrTwo() {
    //pick a random number 
    //(javascript built-in random function only allows
    // 0 <= float <= 1)
    randomFloat = Math.random();

    //increase the range of randomness past 1 but less
    // than 3 (0 <= float <= 3)
    randomFloatGreaterThan1 = randomFloat * 3;

    //turn into an integer  
    //by trimming trailing fraction digits 
    return Math.floor(randomFloatGreaterThan1);

    //3 is rather unlikely, so 0, 1,and 2 are nearly 33% each
}
//map each digit to either rock,paper or scissors:
function computerPlay() {
    zeroOneOrTwo = pickZeroOneOrTwo();
    let compSelection;
    if (zeroOneOrTwo === 0) {
        compSelection = "rock";
    }
    else if (zeroOneOrTwo === 1) {
        compSelection = "paper";
    }
    else if (zeroOneOrTwo === 2) {
        compSelection = "scissors";
    }
    else if (zeroOneOrTwo === 3) { //low chance
        compSelection = "scissors";
    }
    else {
        compSelection = "computer randomness failed";
    }
    console.log("the computer picked: ", compSelection);
    return compSelection;
}


//break into 2: 
//isGameOver()
//displayFinalWinner()

function isGameOver() {
    //if at least one of the scores is 5, game is over
    return (computerScore.textContent == 5 ||
        playerScoreDiv.textContent == 5);
}


function updateScore(roundWinner) {
    if (roundWinner == 'player') {
        ++playerScoreDiv.textContent;
    }
    else if (roundWinner == 'computer') {
        ++computerScore.textContent;
    }
    return;
}
function determineRoundWinner(playerSelection, compSelection) {
    //option 1: same choice (all draws)
    if (playerSelection === compSelection) {
        return ("neither");
    }
    //other options: user | computer
    //option 2: rock | paper 
    //option 3: rock | scissors
    else if (playerSelection === "rock") {
        if (compSelection === "paper") {
            return ("computer");
        }
        else if (compSelection === "scissors") {
            return ("player");
        }
        else {
            return ("Error at determineRoundWinner()");
        }
    }
    //option 4: paper | scissors
    //option 5: paper | rock
    else if (playerSelection === "paper") {
        if (compSelection === "scissors") {
            return ("computer");
        }
        if (compSelection === "rock") {
            return ("player");
        }
    }
    //option 6: scissors | rock 
    //option 7: scissors | paper
    else if (playerSelection === "scissors") {
        if (compSelection === "rock") {
            return ("computer");
        }
        if (compSelection === "paper") {
            return ("player");
        }
    }
    else {
        return ("Error!");
    }// end of if statement
}


function declareRoundWinner(result) {
    resultField.textContent = result + " won the round!";
}

function declareGameWinner(result) {
    resultField.textContent = result + " won the game!!!";
}

function createButton(buttonName) {
    const DOMObject = document.createElement('button');
    document.body.appendChild(DOMObject);
    DOMObject.textContent = buttonName;
    DOMObject.classList.add(buttonName);
    return DOMObject;
}