let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("choice");
choices.forEach((choice)=>{
    console.log(choice);

    constplayGame = (userChoice) =>{
        console.log("userChoice =",userChoice);
        //Generate computer choice;
    }

    choice.addEventListener("click",()=>{
    const choiceId = choice.getAttribute("id");
    console.log("choice was clicked",choiceId);
    playGame(userChoice);
    });
});