"use strict";

//create square 
const container = document.querySelector(".container");

for(let i = 0; i < 100; i++){
const square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);
console.log(container);
}

const squareDivs = document.querySelectorAll(".square");
squareDivs.forEach(function (squareDiv){
squareDiv.addEventListener('mouseover',function () {
  squareDiv.style.backgroundColor = "red";
})
});

