import "./style.css";

// Factory functions
const Ship = (length, name) => {
  let hitNumber = 0;

  const getName = () => name;

  const getHit = () => {
    hitNumber += 1;
  };

  const isSunk = () => hitNumber === length;

  return { getName, getHit, isSunk };
};

const Gameboard = (owner) => {
  const board = Array.from({ length: 10 }, () => new Array(10).fill(null));
  const missedAttacks = [];

  // you may want to remove this?
  const getBoard = () => board;
  // instead get the cell maybe?
  const getCell = (x, y) => board[x][y];

  const placeShip = (length, name, x, y) => {
    if (!board[x][y]) {
      board[x][y] = Ship(length, name);
    }
  };

  const receiveAttack = (x, y) => {
    if (board[x][y]) {
      board[x][y].getHit();
    } else missedAttacks.push([x, y]);
  };

  const areAllShipsSunk = () =>
    board.every((row) => row.every((cell) => cell === null || cell.isSunk()));

  const getOwner = () => owner;

  return { placeShip, receiveAttack, areAllShipsSunk, getOwner, getCell };
};

const Player = (name) => {
  const randomAttack = (board) => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    board.receiveAttack(x, y);
  };

  const attack = (board, x, y) => {
    if (name === "computer") {
      randomAttack(x, y);
      return;
    }
    board.receiveAttack(x, y);
  };

  const getName = () => name;

  return { attack, getName };
};

// DOM

const displayController = (() => {
  const player1Board = document.querySelector(".player1-gameboard");
  const player2Board = document.querySelector(".player2-gameboard");

  const renderBoard = (board) => {
    const ownerName = board.getOwner().getName();
    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);

        if (board.getCell(i, j) instanceof Object) {
          cell.classList.add("ship");
        }
      }
      if (ownerName === "player1") {
        player1Board.appendChild(row);
      } else player2Board.appendChild(row);
    }
  };

  return { renderBoard };
})();

// GameController

// populate gameboards with ships manually
// No.	Class of ship	Size
// 1	  Carrier	        5
// 2	  Battleship	    4
// 3	  Destroyer	      3
// 4	  Submarine	      3
// 5	  Patrol Boat	    2

const gameController = (() => {
  const player1 = Player("player1");
  const player2 = Player("computer");
  const player1Board = Gameboard(player1);
  const player2Board = Gameboard(player2);

  // populate gameboards manually
  player1Board.placeShip(2, "patrolBoat", 8, 1);
  player1Board.placeShip(2, "patrolBoat", 8, 2);

  player2Board.placeShip(2, "patrolBoat", 3, 2);
  player2Board.placeShip(2, "patrolBoat", 4, 2);

  displayController.renderBoard(player1Board);
  displayController.renderBoard(player2Board);

})();
