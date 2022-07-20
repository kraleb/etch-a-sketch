// DOM ELEMENTS
const root = document.documentElement;
const sketchpad = document.querySelector("#sketchpad");
const resetButton = document.getElementById("reset_button");
const remakeButton = document.getElementById("remake_button");
const backgroundColorButton = document.getElementById("background_swatch");
const etchColorButton = document.getElementById("etch_swatch");
generateGrid(sketchpad, 16);

resetButton.addEventListener("click", resetGridColors);
remakeButton.addEventListener("click", function () {
  let newSquares = prompt("Set the grid size (number of squares per side)");

  if (newSquares) {
    if (typeof Number(newSquares) == "number" && Number(newSquares) <= 100) {
      generateGrid(sketchpad, newSquares);
    } else {
      alert("Please enter a number less than 100");
    }
  }
});
etchColorButton.addEventListener("click", function () {
  changeColor("etch_color");
});
backgroundColorButton.addEventListener("click", function () {
  changeColor("sketch_background");
});

function changeColor(cssVariable) {
  console.log(cssVariable);
  let newColor = prompt(`Change the ${cssVariable} color`);
  root.style.setProperty("--" + cssVariable, newColor);
}

// LOGIC
function generateGrid(container, squares) {
  let squareHeight = deriveSquareSize(container.clientHeight, squares);
  let squareWidth = deriveSquareSize(container.clientWidth, squares);
  let row;
  let column;
  // remove any existing children nodes
  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (var rowCount = 0; rowCount < squares; rowCount++) {
    // create row div
    row = document.createElement("div");
    row.className = "row";
    row.id = "row" + rowCount;
    row.setAttribute("style", `height: ${squareHeight}px`);
    container.appendChild(row);
    for (var columnCount = 0; columnCount < squares; columnCount++) {
      column = document.createElement("div");
      column.className = "column";
      column.id = "column" + rowCount + columnCount;
      column.setAttribute(
        "style",
        `width: ${squareWidth}px; height: ${squareHeight}px`
      );
      column.addEventListener("mouseenter", handleHover);
      row.appendChild(column);
    }
    // create column divs within row
  }
}
function deriveSquareSize(dimension, squares) {
  return dimension / squares;
}
function handleHover(event) {
  if (event.ctrlKey) {
    event.target.classList.add("etched");
  }
  if (event.shiftKey) {
    event.target.classList.remove("etched");
  }
}
function resetGridColors() {
  root.style.setProperty("--sketch_background", "black");
  root.style.setProperty("--etch_color", "white");
  document.querySelectorAll(".etched").forEach((el) => {
    el.classList.remove("etched");
  });
}
