document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
      button.addEventListener("click", function(){
        if (this.getAttribute("id") === "rockBtn"){playerChoice = "rock"} else
        if (this.getAttribute("id") === "paperBtn"){playerChoice = "paper"} else
        if (this.getAttribute("id") === "scissorsBtn"){playerChoice = "scissor"}
        robortChoice();
        gameResult();


      })
    } 
}
) 

function robortChoice(){
  const numAsChoice = Math.floor(Math.random() * 3)+1

  if (numAsChoice == 1){robortChoice = "rock"} else 
  if (numAsChoice == 2){robortChoice = "paper"} else
  if (numAsChoice == 3){robortChoice = "scissor"}
}


