/* eslint-disable no-use-before-define */
import "./style.css";

// Factory functions
const Ship = (length, name, x, y, orientation) => {
  let hitNumber = 0;
  const cells = [];

  if (orientation === "horizontal") {
    for (let i = y; i < y + length; i += 1) {
      cells.push([x, i]);
    }
  }
  if (orientation === "vertical") {
    for (let i = x; i < x + length; i += 1) {
      cells.push([i, y]);
    }
  }

  const getName = () => name;

  const getHit = () => {
    hitNumber += 1;
  };

  const isSunk = () => hitNumber === length;

  const getCells = () => cells;

  return { getName, getHit, isSunk, getCells };
};

const Gameboard = (owner) => {
  const board = Array.from({ length: 10 }, () => new Array(10).fill(null));
  const missedAttacks = [];

  const getBoard = () => board;
  const getCell = (x, y) => board[x][y];

  const placeShip = (length, name, x, y, orientation) => {
    console.log(board);
    if (!board[x][y]) {
      board[x][y] = Ship(length, name, x, y, orientation);
      console.log(board[x][y].getCells());
    }
  };

  const receiveAttack = (x, y) => {
    if (missedAttacks.some(([a, b]) => a === x && b === y)) return;

    if (board[x][y]) {
      board[x][y].getHit();
    } else missedAttacks.push([x, y]);
    console.log(`I received an attack on ${x} ${y}`);
    console.log(missedAttacks);
  };

  const areAllShipsSunk = () =>
    board.every((row) => row.every((cell) => cell === null || cell.isSunk()));

  const getOwner = () => owner;

  return {
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getOwner,
    getCell,
    getBoard,
  };
};

const Player = (name) => {
  const randomCoord = () => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    return [x, y];
  };

  const attack = (board, x, y) => {
    board.receiveAttack(x, y);
  };

  const getName = () => name;

  return { attack, getName, randomCoord };
};

// DOM

const displayController = (() => {
  const player1Board = document.querySelector(".player1-gameboard");
  const player2Board = document.querySelector(".player2-gameboard");

  const renderBoard = (board) => {
    const ownerName = board.getOwner().getName();
    for (let i = 0; i < 10; i += 1) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      for (let j = 0; j < 10; j += 1) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.dataset.x = i;
        cellElement.dataset.y = j;
        if (ownerName === "computer") {
          cellElement.classList.add("enemy");
        }
        rowElement.appendChild(cellElement);

        board.getBoard().forEach((row) => {
          row.forEach((cell) => {       
            // how does this even work????
            if (cell instanceof Object) console.log("im an object")    
            if (
              cell instanceof Object &&
              cell.getCells().some(([a, b]) => a === i && b === j)
            ) {
              cellElement.classList.add("ship");
            }
          });
        });
      }
      if (ownerName === "player1") {
        player1Board.appendChild(rowElement);
      } else player2Board.appendChild(rowElement);
    }
  };

  const markShots = (player, x, y) => {
    const targetBoard = document.querySelector(`.${player}-gameboard`);

    const cells = targetBoard.querySelectorAll(".cell");

    cells.forEach((cell) => {
      if (cell.dataset.x == x && cell.dataset.y == y) {
        cell.classList.add("attacked");
      }
    });
  };

  const addListeners = () => {
    const enemyCells = document.querySelectorAll(".enemy");

    enemyCells.forEach((cell) =>
      cell.addEventListener("click", () => {
        const { x } = cell.dataset;
        const { y } = cell.dataset;
        gameController.playRound(x, y);
      })
    );
  };

  return { renderBoard, addListeners, markShots };
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
  const gameOver = false;

  // populate gameboards manually
  // player1Board.placeShip(2, "patrolBoat", 8, 1);
  // player1Board.placeShip(2, "patrolBoat", 8, 2);

  // player2Board.placeShip(2, "patrolBoat", 3, 2);
  // player2Board.placeShip(2, "patrolBoat", 4, 2);

  player2Board.placeShip(3, "submarine", 4, 4, "horizontal");
  player2Board.placeShip(5, "carrier", 0, 0, "vertical");

  displayController.renderBoard(player1Board);
  displayController.renderBoard(player2Board);

  const playRound = (x, y) => {
    if (gameOver) return;
    player1.attack(player2Board, x, y);
    displayController.markShots("player2", x, y);

    const randomCoords = player2.randomCoord();
    player2.attack(player1Board, ...randomCoords);
    displayController.markShots("player1", ...randomCoords);

    checkWinner();
  };

  const checkWinner = () => {
    // if all ships of a player are down
    // set the other player as the winner of the game
    // set gameOver to true
  };

  return { playRound };
})();

displayController.addListeners();
