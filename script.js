// DOM ELEMENTS
const sketchpad = document.querySelector("#sketchpad");
generateGrid(sketchpad, 16);

// LOGIC
function generateGrid(container, squares) {
  console.log(container);
  let squareHeight = deriveSquareSize(container.clientHeight, squares);
  let squareWidth = deriveSquareSize(container.clientWidth, squares);
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
      row.appendChild(column);
    }
    // create column divs within row
  }
}
function deriveSquareSize(dimension, squares) {
  return dimension / squares;
}
function handleHover() {}
function resetGrid() {}
