let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choices1")
const msg1=document.querySelector("#msg")
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const gencomputer=()=>{
 const options=["rock","scissors","paper"];
const randIdx= Math.floor( Math.random()*3);
return options[randIdx];
};


const gamedraw=()=>{
    msg1.innerText="Game was Draw";
    msg1.style.backgroundColor="#53629E"
};

const showwinner=(userwin,userchoice,compchoice)=>{
 if(userwin)
 {
    userscore++;
    userScorepara.innerText=userscore;
    msg1.innerText=`You win! ${userchoice} Beats ${compchoice}`;
    msg1.style.backgroundColor="green";
 }else{
     compscore++;
    compScorepara.innerText=compscore;
    msg1.innerText=`You Lose! ${compchoice} Beats ${userchoice}`;
    msg1.style.backgroundColor="red";
    msg1.style.display="inline"
 }
}


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencomputer();
    console.log("computer choice=",compchoice);
        if(userchoice === compchoice){
      gamedraw();
    }else
        {
       let userwin=true;
       if(userchoice==="rock")
       {
        userwin=compchoice==="paper"?false:true;
       }
       else if(userchoice==="paper")
       {
        compchoice==="seissors"?false:true;
       }
       else 
       {
        userwin=compchoice==="rock"?false:true;
       }
     showwinner(userwin,userchoice,compchoice);
}
};




choices.forEach((choices1)=>{
    console.log(choices1);
    choices1.addEventListener("click",()=>{
        const userchoice=choices1.getAttribute("id")
        // console.log("choice on clicked",userchoice);
        playgame(userchoice);
    });
});