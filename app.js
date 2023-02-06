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
    pixel.addEventListener("mouseover", addColor);
  }
}

// Check if mouse is clicked
let mouseClicked = false;
function mouseUpdate() {
  mouseClicked = !mouseClicked;
}
document.addEventListener("mousedown", mouseUpdate);
document.addEventListener("mouseup", mouseUpdate);

// First delete the current board -> init new board
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gameBoard.innerHTML = "";
    insertPixel(button.value);
  });
});

let colorPick = document.querySelector(".color");
let random = document.querySelector(".random");

let mode = "color";
let currentColor;

random.addEventListener("click", () => {
  mode = "random";
});

colorPick.addEventListener("click", () => {
  mode = "color";
});

function whatColor() {
  if (mode === "random") {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    currentColor = `rgb(${R}, ${G}, ${B})`;
  } else if (mode === "color") {
    currentColor = colorPick.value;
  }
}

function addColor() {
  whatColor();
  this.style.backgroundColor = currentColor;
}

// On load init small board
document.addEventListener("load", insertPixel(SMALL));
