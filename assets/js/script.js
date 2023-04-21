document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
      button.addEventListener("click", function(){
        if (this.getAttribute("id") === "rockBtn"){playerChoice = "rock"} else
        if (this.getAttribute("id") === "paperBtn"){playerChoice = "paper"} else
        if (this.getAttribute("id") === "scissorsBtn"){playerChoice = "scissor"}
        robortChoice();
        gameResult();
        if (resultText.textcontent === "Congratulation! You win!"){incrementWin()};
        if (resultText.textcontent === "Sorry, you lose."){incrementLose()};
        if (resultText.textcontent === "Draw"){incrementDraw()};
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
function gameResult(){
  if (playerChoice === robortChoice) {return "Draw"} else 
  if (playerChoice === "rock" && robortChoice === "paper"){return "Sorry, you lose."} else 
  if (playerChoice === "paper" && robortChoice === "scissor"){return "Sorry, you lose."}else
  if (playerChoice === "scissor" && robortChoice === "rock"){return "Sorry, you lose."}else 
  {return "Congratulation! You win!" }

}

function incrementWin() {

  let score = parseInt(document.getElementById("win").innerText);
  document.getElementById("win").innerText = ++score;
  
  }
  
  function incrementDraw() {
  
  let score = parseInt(document.getElementById("draw").innerText);
  document.getElementById("draw").innerText = ++score;
  
  }
  
  function incrementLose() {
  
  let score = parseInt(document.getElementById("lose").innerText);
  document.getElementById("lose").innerText = ++score;}
  

