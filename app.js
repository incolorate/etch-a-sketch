let SMALL = 16; 

let gameBoard = document.querySelector(".board");
let buttons = document.querySelectorAll(".buttons");

function insertPixel(n) {
  // Create rows/column
  gameBoard.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (i = 0; i < n * n; i++) {
    let pixel = document.createElement("div");
    gameBoard.appendChild(pixel);
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", addColor)
  }
}


// Check if mouse is clicked
let mouseClicked = false
function mouseUpdate () {
  mouseClicked = !mouseClicked
}
document.addEventListener("mousedown", mouseUpdate)
document.addEventListener("mouseup", mouseUpdate)

function addColor () {
  if (mouseClicked) {
  this.classList.add("red")
  }
}
// First delete the current board -> init new board
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gameBoard.innerHTML = "";
    insertPixel(button.value);
  });
});


document.addEventListener("load", insertPixel(SMALL));
