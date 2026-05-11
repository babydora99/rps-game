let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

// Diagnostics: show whether elements are found and help debug clicks
console.log("RPS Debug: choices found ->", choices.length);
if (!msg) console.error("RPS Debug: #msg element not found");
if (choices.length === 0) {
    if (msg) msg.innerText = "No choices detected — check HTML classes/IDs";
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};//rock,paper,scissor
const drawGame=()=>{
   //console.log("game is draw.Play again");
   msg.innerText="Game was Draw!PLAY AGAIN";
   msg.style.backgroundColor="#081b73";
};
const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
  //console.log("you win");
  msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor="green";
     }
     else{
        compScore++;
        compScorepara.innerText=compScore;
        //console.log("you lose");
        msg.innerText=`You Lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
}
 const playGame=(userChoice)=>{
    //console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
   // console.log("comp choice =",compChoice);
 if(userChoice===compChoice){
    //drawgame
    drawGame();
 }else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor , paper
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock ,scissor
        userWin=compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
  showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("RPS Debug: clicked ->", userChoice);
        if (msg) msg.innerText = `You picked ${userChoice}`;
        playGame(userChoice);
    });
});