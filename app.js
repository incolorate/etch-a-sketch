let gameBoard = document.querySelector(".board");

let smallButton = document.querySelector(".small");
let buttons = document.querySelectorAll(".buttons");

let gameStarted = false;

function insertPixel(n) {
  // Create rows/column
  gameBoard.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  for (i = 0; i < n * n; i++) {
    let pixel = document.createElement("div");
    gameBoard.appendChild(pixel);
    pixel.classList.add("pixel");
  }
}
// First delete the current board -> init new board
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gameBoard.innerHTML = "";
    insertPixel(button.value);
  });
});

//On load the board size is 16x16
document.addEventListener("load", insertPixel(16));

gamePixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    console.log(pixel);
    pixel.style.backgroundColor = "red";
  });
});
