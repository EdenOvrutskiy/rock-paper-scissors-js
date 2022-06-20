//bug: pressing ESC crashes the program - related to null
//todo: after a draw, another round being played ..
//todo: break computeRoundWiner into 2 functions
//  roundOutcome(), updateScore()

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

for (button of buttons) {
    startButtonListener(button);
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

//wait for a button to be clicked
function startButtonListener(button) {
    button.addEventListener('click', playRound);
}

//when clicked, increment the relevant score
function playRound(eventObject) {
    const playerSelection = eventObject.target.classList.value;
    const compSelection = computerPlay();
    //compare both choices
    computeRoundWinner(playerSelection, compSelection);
    declareWinnerIfDone(computerScore, playerScoreDiv, buttons);
}//end of playRound
//announce the winner of the game once one player reaches
//5 points -> at declareWinnerIfDone

//remove event listeners

//brain-dump

//the code feels too complicated to me.
//it's hard to focus.
//let's try simplifying things...



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


function declareWinnerIfDone(computerScore, playerScoreDiv, buttons) {
    if (computerScore.textContent == 5) {
        if (playerScoreDiv.textContent == 5) {
            displayResult("it's a draw!");
        }
        else {
            displayResult("computer wins!");
            console.log(computerScore);
        }
    }
    else if (playerScoreDiv.textContent == 5) {
        displayResult("player wins!");
        console.log("player wins!");
    }
}

function computeRoundWinner(playerSelection, compSelection) {
    //
    //option 1: same choice (draw)
    if (playerSelection === compSelection) {
        displayResult("it's a tie!");
        ++playerScoreDiv.textContent;
        ++computerScore.textContent;
        return ("it's a tie!");
    }
    //other options: user | computer
    //option 2: rock | paper 
    //option 3: rock | scissors
    else if (playerSelection === "rock") {
        if (compSelection === "paper") {
            ++computerScore.textContent;
            displayResult("You lost!");
            return ("You lost!");
        }
        else if (compSelection === "scissors") {
            ++playerScoreDiv.textContent;
            displayResult("You win!");
            return ("You win!");
        }
        else {
            displayResult("Something went wrong when comparing choices");
            return ("Something went wrong when comparing choices");
        }
    }
    //option 4: paper | scissors
    //option 5: paper | rock
    else if (playerSelection === "paper") {
        if (compSelection === "scissors") {
            ++computerScore.textContent;
            displayResult("You lost!");
            return ("You lost!");
        }
        if (compSelection === "rock") {
            ++playerScoreDiv.textContent;
            displayResult("You win!");
            return ("You win!");
        }
    }
    //option 6: scissors | rock 
    //option 7: scissors | paper
    else if (playerSelection === "scissors") {
        if (compSelection === "rock") {
            ++computerScore.textContent;
            displayResult("You lost!");
            return ("You lost!");
        }
        if (compSelection === "paper") {
            ++playerScoreDiv.textContent;
            displayResult("You win!");
            return ("You win!");
        }
    }
    else {
        console.log("something went wrong when deciding the outcome");
        displayResult("something went wrong when deciding the outcome");
        return ("something went wrong when deciding the outcome");
    }// end of if statement
}

function displayResult(result) { //call this from playRound()
    resultField.textContent = result;
}

function createButton(buttonName) {
    const DOMObject = document.createElement('button');
    document.body.appendChild(DOMObject);
    DOMObject.textContent = buttonName;
    DOMObject.classList.add(buttonName);
    return DOMObject;
}