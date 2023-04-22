document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
      button.addEventListener("click", function(){
        if (this.getAttribute("id") === "rockBtn"){playerChoice = "rock"}
        if (this.getAttribute("id") === "paperBtn"){playerChoice = "paper"} 
        if (this.getAttribute("id") === "scissorsBtn"){playerChoice = "scissor"}
        robotChoice();
        gameResult();
        if (resultText.textcontent === "Congratulation! You win!"){incrementWin()};
        if (resultText.textcontent === "Sorry, you lose."){incrementLose()};
        if (resultText.textcontent === "Draw"){incrementDraw()};
      })
    } 
}
) 

function robotChoice(){
  const numAsChoice = Math.floor(Math.random() * 3)+1

  if (numAsChoice == 1){robortChoice = "rock"} else 
  if (numAsChoice == 2){robortChoice = "paper"} else
  if (numAsChoice == 3){robortChoice = "scissor"}
  robortChoice = document.getElementById("robortText");
  gameResult();
}
function gameResult(){
  resultText = document.getElementById("resultText")
  if (playerChoice === robortChoice) {resultText = "Draw"} else 
  if (playerChoice === "rock" && robortChoice === "paper"){resultText = "Sorry, you lose."} else 
  if (playerChoice === "paper" && robortChoice === "scissor"){resultText = "Sorry, you lose."}else
  if (playerChoice === "scissor" && robortChoice === "rock"){resultText = "Sorry, you lose."}else 
  {resultText = "Congratulation! You win!" }

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
  

