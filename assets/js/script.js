document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
      button.addEventListener("click", function(){
        if (this.getAttribute("id") === "rockBtn"){alert("You choose rock.")} else
        if (this.getAttribute("id") === "paperBtn"){alert("You choose paper.")} else
        if (this.getAttribute("id") === "scissorBtn"){alert("You choose scissor.")}  
      })
    } 

}
) 

