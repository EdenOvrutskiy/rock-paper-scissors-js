//rock paper scissors vs. the computer
console.log("Welcome to rock, paper scissors!");

function rejectBadInput(userSelection) {
    //deny anything that isn't rock/paper/scissors:
    //make sure user input is one of the three
    //account for both capitalizated / lowercase input
    userSelection = userSelection.toLowerCase()
    if (userSelection == "rock") {
    }
    else if (userSelection == "paper") {
    }
    else if (userSelection == "scissors") {
    }
    else {
        console.log("your input: ", userSelection, "was rejected");
    }
    return userSelection;
    /*
    //alternative version with logical operators
    if ((userSelection != "rock")
        && (userSelection != "paper")
        && (userSelection != "scissors")) {
        console.log("your input: ", userSelection, "was rejected");
    }
    */
}

function playerPlay() {
    //prompt the user to select rock,paper or scissors
    let userSelection = prompt("pick one: ")
    userSelection = rejectBadInput(userSelection);
    console.log("You've picked ", userSelection, "!");

    return userSelection;
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


//const let compSelection = undefined; -> breaks program

function playRound(userSelection, compSelection) {
    //compare both choices
    //
    //option 1: same choice (draw)
    if (userSelection === compSelection) {
        return ("it's a tie!")
    }
    //other options: user | computer
    //option 2: rock | paper 
    //option 3: rock | scissors
    else if (userSelection === "rock") {
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
    else if (userSelection === "paper") {
        if (compSelection === "scissors") {
            return ("You lost!")
        }
        if (compSelection === "rock") {
            return ("You win!")
        }
    }
    //option 6: scissors | rock 
    //option 7: scissors | paper
    else if (userSelection === "scissors") {
        if (compSelection === "rock") {
            return ("You lost!")
        }
        if (compSelection === "paper") {
            return ("You win!")
        }
    }
    else {
        return ("something went wrong when deciding the outcome")
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

//play a a few rounds
//while keeping score
function game() {
    let playerScore = 0;
    let compScore = 0;
    for (i = 0; i < 5; ++i) {
        userSelection = playerPlay();
        compSelection = computerPlay();
        let outcome = (playRound(userSelection, compSelection));
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
        console.log(`score: \nplayer: ${playerScore} | comp: ${compScore}`);
    }
}
game();