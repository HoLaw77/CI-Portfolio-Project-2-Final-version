document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  let playerChoice = document.getElementById("yourText");
  let robortText = document.getElementById("robortText");
  
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("id") === "rockBtn") {
        playerChoice.innerHTML = "rock"
      }
      if (this.getAttribute("id") === "paperBtn") {
        playerChoice.innerHTML = "paper"
      }
      if (this.getAttribute("id") === "scissorsBtn") {
        playerChoice.innerHTML = "scissor"
      }
      robotChoice();
      gameResult();
      if (resultText.innerHTML === "Congratulation! You win!") {
        incrementWin()
      };
      if (resultText.innerHTML === "Sorry, you lose.") {
        incrementLose()
      };
      if (resultText.innerHTML === "Draw") {
        incrementDraw()
      };
    })
  }



function robotChoice() {
  const numAsChoice = Math.floor(Math.random() * 3) + 1
  robortText = document.getElementById("robortText");

  if (numAsChoice == 1) {
    robortText.innerHTML = "rock"
  } else
  if (numAsChoice == 2) {
    robortText.innerHTML = "paper"
  } else
  if (numAsChoice == 3) {
    robortText.innerHTML = "scissor"
  }
  
}

function gameResult() {
  resultText.innerHTML = document.getElementById("resultText");
  if (playerChoice.innerHTML === robortText.innerHTML) {
    resultText.innerHTML = "Draw"
  } else
  if (playerChoice.innerHTML === "rock" && robortText.innerHTML === "paper") {
    resultText.innerHTML = "Sorry, you lose."
  } else
  if (playerChoice.innerHTML === "paper" && robortText.innerHTML === "scissor") {
    resultText.innerHTML = "Sorry, you lose."
  } else
  if (playerChoice.innerHTML === "scissor" && robortText.innerHTML === "rock") {
    resultText.innerHTML = "Sorry, you lose."
  } else {
    resultText.innerHTML = "Congratulation! You win!"
  }

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
  document.getElementById("lose").innerText = ++score;
}
})