"use strict";

//create default square 
const container = document.querySelector(".container");
for(let i = 0; i < 256; i++){
  const squareDiv = createSquareDiv();
  squareDiv.style.width = (parseInt(getComputedStyle(container).width) / 16) + "px";
  squareDiv.style.height = (parseInt(getComputedStyle(container).height) / 16) + "px";
}
mouseoverEvent();

function createSquareDiv() {
const square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);
return square;
}

// mouseover event
function mouseoverEvent() {
  const squareDivs = document.querySelectorAll(".square");
  squareDivs.forEach(function (squareDiv){
  squareDiv.addEventListener("mouseover",function () {
  squareDiv.style.backgroundColor = "red";
  })
});
}

//create newgrid by user input 
const newGridDiv = document.querySelector(".newgrid");
newGridDiv.addEventListener("click", function(){
  const userInput = prompt("You can set the grid size. You can enter up to 100.");
  const userInputNumber = parseInt(userInput);
  if(userInputNumber >= 1 && userInputNumber <= 100){
  container.innerHTML = "";
    for(let i = 0; i < userInputNumber * userInputNumber; i++){
      const newSquareDiv = createSquareDiv();
      newSquareDiv.style.width = (parseInt(getComputedStyle(container).width) / userInputNumber) + "px";
      newSquareDiv.style.height = (parseInt(getComputedStyle(container).height) / userInputNumber) + "px";
    }
  }
  else {alert("enter 1-100");
  }
  mouseoverEvent();
  });
