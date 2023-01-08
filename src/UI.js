export function renderGameboard(board, player) {
  const gameboard = document.querySelector(`.${player}-gameboard`);
  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    const rowElement = document.createElement("div");
    rowElement.classList.add("row", "p1-row");
    for (let j = 0; j < row.length; j += 1) {
      const element = row[j];
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");

      if (element instanceof Object) {
        cellElement.classList.add("occupied");
      } else if (element === null) {
        cellElement.classList.add("empty");
      } else {
        cellElement.classList.add("other");
      }
      rowElement.appendChild(cellElement);
    }
    gameboard.appendChild(rowElement);
  }
}

const cells = document.querySelectorAll(".cell");

console.log(cells);
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(e);
  });
});

export function init() {}
