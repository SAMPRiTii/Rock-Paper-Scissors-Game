let userScore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
let yourScoreCount = document.querySelector("#your-score-count");
let computerScoreCount = document.querySelector("#computer-score-count");


const compSide = () => {
    const arr = ["Rock" , "Paper" , "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return arr[i];
}

const draw = () => {
    msg.innerText = "Match Draw!";
    msg.style.backgroundColor = "Grey";
}

const userWinner = (userChoice , compChoice) => {
    msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
    userScore++;
    yourScoreCount.innerText = userScore;

}

const userLosser = (userChoice , compChoice) => {
    msg.innerText = `You Lost!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
    compscore++;
    computerScoreCount.innerText = compscore;
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userWinner(userChoice , compChoice);
    }
    else {
        userLosser(userChoice , compChoice);
    }
}

const playGame = (userChoice) => {
    let compChoice = compSide();

    if(userChoice === compChoice) {    //Rock Paper Scissors
        draw();
    }
    else {
        userWin = true;
        if(userChoice === "Rock") {
            // Scissors Paper
            userWin = compChoice === "Scissors" ? true : false;
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper") {
            //Rock Scissors
            userWin = compChoice === "Rock" ? true : false;
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
            //Paper Rock
            userWin = compChoice === "Paper" ? true : false;
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

