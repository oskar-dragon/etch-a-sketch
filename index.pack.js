let gridCellsAmount = 20;
const grid = document.querySelector(".grid");
const colourInput = document.querySelector(".input--colour");
const clearGridBtn = document.querySelector(".btn--clear-grid");
const changeSizeBtn = document.querySelector(".btn--change-size");

function createGrid() {
  grid.innerHTML = "";

  if (gridCellsAmount > 100) {
    return "ERROR";
  } else {
    const cellWidthandHeight = 500 / gridCellsAmount;

    for (let i = 1; i <= gridCellsAmount * gridCellsAmount; i++) {
      let newElement = document.createElement("div");
      newElement.classList.add("grid--cell");
      newElement.style.width = `${cellWidthandHeight}px`;
      newElement.style.height = `${cellWidthandHeight}px`;
      grid.appendChild(newElement);
    }
  }
}

createGrid();

let gridCells = document.querySelectorAll(".grid--cell");

document.addEventListener(
  "mouseover",
  (e) => {
    if (e.target.matches(".grid--cell")) {
      e.target.style.backgroundColor = colourInput.value;
    }
  },
  false
);

document.addEventListener(
  "click",
  (e) => {
    if (e.target.matches(".btn--clear-grid")) {
      gridCells.forEach((gridCell) => {
        gridCell.style.backgroundColor = "white";
      });
    }
  },
  false
);

changeSizeBtn.addEventListener("click", () => {
  let newCellsAmount = parseInt(prompt("Please enter value between 1 and 100", ""));
  gridCellsAmount = newCellsAmount;

  createGrid();
});
