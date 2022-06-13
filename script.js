//rock paper scissors vs. the computer
console.log("Welcome to rock, paper scissors!");
//prompt the user to select rock,paper or scissors
let userSelection = prompt("pick one: ")
console.log("initial input", userSelection)
//make sure user input is one of the three
//account for both capitalizated / lowercase input
userSelection = userSelection.toLowerCase()
console.log("lowercased input: ", userSelection)

//deny anything that isn't rock/paper/scissors:
function rejectBadInput(userSelection) {
    if (userSelection == "rock") {
    }
    else if (userSelection == "paper") {
    }
    else if (userSelection == "scissors") {
    }
    else {
        console.log("your input: ", userSelection, "was rejected");
    }
    /*
    //alternative version with logical operators
    if ((userSelection != "rock")
        && (userSelection != "paper")
        && (userSelection != "scissors")) {
        console.log("your input: ", userSelection, "was rejected");
    }
    */
}
rejectBadInput(userSelection);

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


const compSelection = computerPlay();
console.log(compSelection);

//const let compSelection = undefined; -> breaks program

function decideOutcome(userSelection, compSelection) {
    //compare both choice
    //option 1: same choice (draw)
    if (userSelection === compSelection) {
        console.log("it's a tie!")
    }
    //other options: user | computer
    //option 2: rock | paper 
    //option 3: rock | scissors
    else if (userSelection === "rock") {
        if (compSelection === "paper") {
            console.log("You lost!")
        }
        else if (compSelection === "scissors") {
            console.log("You win!")
        }
        else {
            console.log("Something went wrong when comparing choices")
        }
    }
    //option 4: paper | scissors
    //option 5: paper | rock
    else if (userSelection === "paper") {
        if (compSelection === "scissors") {
            console.log("You lost!")
        }
        if (compSelection === "rock") {
            console.log("You win!")
        }
    }
    //option 6: scissors | rock 
    //option 7: scissors | paper
    else if (userSelection === "scissors") {
        if (compSelection === "rock") {
            console.log("You lost!")
        }
        if (compSelection === "paper") {
            console.log("You win!")
        }
    }
    else {
        console.log("something went wrong when deciding the outcome")
    }// end of if statement
}

//declare the outcome of play 
decideOutcome(userSelection, compSelection);