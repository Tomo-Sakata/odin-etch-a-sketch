"use strict";

//default square 
const container = document.querySelector(".container");
createGrid(16);

//create square
function createGrid(size) {
  for(let i = 0; i < size * size; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.style.width = (parseInt(getComputedStyle(container).width) / size) + "px";
    square.style.height = (parseInt(getComputedStyle(container).height) / size) + "px";
  }
  mouseoverEvent();
}

// mouseover event
function mouseoverEvent() {
  const squareDivs = document.querySelectorAll(".square");
  squareDivs.forEach(function (squareDiv){
  squareDiv.addEventListener("mouseover",function () {
  squareDiv.style.backgroundColor = randomeColors();
  })
});
}

//randome colors
function randomeColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

//create newgrid by user input 
const newGridDiv = document.querySelector(".newgrid");
newGridDiv.addEventListener("click", function(){
  const userInput = prompt("You can set the grid size. You can enter up to 100.");
  const userInputNumber = parseInt(userInput);  
  if(userInputNumber >= 1 && userInputNumber <= 100){
  container.innerHTML = "";
  createGrid(userInputNumber);
  }
  else {alert("enter 1-100");
  }
});

