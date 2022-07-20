// DOM ELEMENTS
const sketchpad = document.querySelector("#sketchpad");
const resetButton = document.getElementById("reset_button");
generateGrid(sketchpad, 100);

resetButton.addEventListener("click", resetGridColors);

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
  document.querySelectorAll(".etched").forEach((el) => {
    el.classList.remove("etched");
  });
}
