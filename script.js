//TODO
//bug: clicking a button multiple times keeps creating divs
//bug: can't stretch a single string across multiple lines
//     using a backslash (\) like in python- could be my editor?
//     (will use +'s for now)
//bug: pressing ESC crashes the program - related to null

//rock paper scissors vs. the computer
console.log("Welcome to rock, paper scissors!");

function rejectBadInput(playerSelection) {
    //deny anything that isn't rock/paper/scissors:
    //account for both capitalizated / lowercase input
    playerSelection = playerSelection.toLowerCase()
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
    /*
    //alternative version with logical operators
    if ((playerSelection != "rock")
         && (playerSelection != "paper")
         && (playerSelection != "scissors")) {
         console.log("your input: ", playerSelection, "was rejected");
    }
    */
}

/*
function playerPlay() {
    //prompt the user to select rock,paper or scissors
    let playerSelection = prompt("pick one: ")
    playerSelection = rejectBadInput(playerSelection);
    console.log("You've picked ", playerSelection, "!");

    return playerSelection;
}
*/

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

//const let compSelection = undefined; -> breaks program

function playRound(eventObject) {
    const playerSelection = eventObject.target.classList.value;
    const compSelection = computerPlay();

    //compare both choices
    //
    //option 1: same choice (draw)
    if (playerSelection === compSelection) {
        displayResult("it's a tie!");
        return ("it's a tie!")
    }
    //other options: user | computer
    //option 2: rock | paper 
    //option 3: rock | scissors
    else if (playerSelection === "rock") {
        if (compSelection === "paper") {
            return ("You lost!")
        }
        else if (compSelection === "scissors") {
            return ("You win!")
        }
        else {
            return ("Something went wrong when comparing choices")
        }
    }
    //option 4: paper | scissors
    //option 5: paper | rock
    else if (playerSelection === "paper") {
        if (compSelection === "scissors") {
            return ("You lost!")
        }
        if (compSelection === "rock") {
            return ("You win!")
        }
    }
    //option 6: scissors | rock 
    //option 7: scissors | paper
    else if (playerSelection === "scissors") {
        if (compSelection === "rock") {
            return ("You lost!")
        }
        if (compSelection === "paper") {
            return ("You win!")
        }
    }
    else {
        console.log("something went wrong when deciding the outcome");
        return ("something went wrong when deciding the outcome");
    }// end of if statement
}//end of playRound


function keepScore(playerScore, compScore, outcome) {
    if (outcome === "You win!") {
        ++playerScore;
    }
    else if (outcome === "You lost!") {
        ++compScore;
    }
    else {
        console.log("Failed to keep score this round");
    }
    return playerScore, compScore;
}

function reportGameOutcome(playerScore, compScore) {
    console.log("The outcome of this 5-round game...");
    if (playerScore > compScore) {
        console.log("You are declared the winner :)");
    }
    else if (playerScore < compScore) {
        console.log("You are declared the loser :(");
    }
    else if (playerScore === compScore) {
        console.log("it's a draw!");
    }
    else {
        console.log("Failed to compute the outcome of the match.");
    }
}


//play a a few rounds
//while keeping score
function game() {
    let playerScore = 0;
    let compScore = 0;
    //for (i = 0; i < 5; ++i) {
    playerSelection = playerPlay();
    compSelection = computerPlay();
    let outcome = (playRound(playerSelection, compSelection));
    console.log(outcome);
    if (outcome === "You win!") {
        ++playerScore;
    }
    else if (outcome === "You lost!") {
        ++compScore;
    }
    else if (outcome === "it's a tie!") {
        ++compScore;
        ++playerScore;
    }
    else {
        console.log("Failed to keep score this round");
    }
    let finalScore = "score: \n\player: " + playerScore
        + " | comp: " + compScore;
    console.log(finalScore);
    //}
    //report winner or loser of final game
    reportGameOutcome(playerScore, compScore);

}
//game();

//create three buttons, one for each selection.
const rockButton = document.createElement('button');
document.body.appendChild(rockButton);
rockButton.textContent = "rock";
rockButton.classList.add('rock');

const paperButton = document.createElement('button');
document.body.appendChild(paperButton);
paperButton.textContent = "paper";
paperButton.classList.add('paper');

const scissorsButton = document.createElement('button');
document.body.appendChild(scissorsButton);
scissorsButton.textContent = "scissors";
scissorsButton.classList.add('scissors');

//add an event listener to the buttons that call playRound()
//with the correct playerSelection every time a button is clicked
rockButton.addEventListener('click', (e) => playRound(e));
paperButton.addEventListener('click', (e) => playRound(e));
scissorsButton.addEventListener('click', (e) => playRound(e));

//create a DOM element that will display the result of a round

function displayResult(result) {
    const resultField = document.createElement('div');
    document.body.appendChild(resultField);
    resultField.textContent = result;
}