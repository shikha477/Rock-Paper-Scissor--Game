let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () => {
    msg.innerText="game was draw . play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userchoice,compchoice)=>{
  if(userWin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText=`you win your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }else{
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
  }
};
    

 const playGame=(userchoice) => {
//generate computer choice
const compchoice=gencompchoice();
//draw game

if (userchoice === compchoice) {
drawGame();
} else{
    let userWin=true;
    if(userchoice==="rock"){
        //scissors,paper
        userWin=compchoice ==="paper"? false : true;
    } else if(userchoice === "paper"){
        //rock,scissors
       userWin= compchoice==="scissors"? false : true;
    }else{
        //rock,paper
      userWin = compchoice==="rock"? false : true;
    }
  showWinner(userWin,userchoice,compchoice);
}

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame (userchoice);
    });
});