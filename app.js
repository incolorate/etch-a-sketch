let gameBoard = document.querySelector(".board");
let pixel = document.createElement("div");

let gameSizeSmall = document.querySelector(".small");

function insertPixel() {
  gameBoard.appendChild(pixel);
}

gameSizeSmall.addEventListener("click", createBoard);
