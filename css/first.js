let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    console.log(choice);
    constgenCompChoice=()=>{
        const option=["rock","paper","scissors"];
       const randIdx=Math.floor( Math.random()*3)
       return option[randIdx];
    }

    const drawGame=()=>{
        console.log("game was draw.");
        msg.innerText = "Game was Draw. Play again.";
    }

    const showWinner=(userWin, userChoice, compChoice)=>{
        if (userWin) {
            userScore++;
            userScorePara = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.Style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScorePara = compScore;
            msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
            msg.Style.backgroundColor = "red";
        }
    }

    const playGame = (userChoice) =>{

        //Generate computer choice
        const compChoice=genCompChoice();
       
    }

    if (userScore === compChoice) {
        //Draw Game
        drawGame
    }

    else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper"?false : true;
        }

        else if(userChoice === "paper"){
            //scissors, rock
            userWin = compChoice === "scissors"?false : true;
        }
        else(userChoice === "scissors"){
            //rock, paper
            userWin = compChoice === "rock"?false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

    choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
    console.log("choice was clicked",choiceId);
    playGame(userChoice);
    });
});