/* eslint-disable max-classes-per-file */
import Player from "./classes/Player";
import ComputerPlayer from "./classes/ComputerPlayer";
import Ship from "./classes/Ship"
import { renderGameboard } from "./UI";

const player1 = new Player("player1", "human");
const player2 = new ComputerPlayer("AI", "computer");
let currentPlayer = player1;

// testing the old way
export default function test() {
}

// populate gameboards with ships manually
// No.	Class of ship	Size
// 1	  Carrier	        5
// 2	  Battleship	    4
// 3	  Destroyer	      3
// 4	  Submarine	      3
// 5	  Patrol Boat	    2

player1.gameboard = [
  [null, null, new Ship(2, "patrolboat"), new Ship(2, "patrolboat"), null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, new Ship(4, "battleship"), new Ship(4, "battleship"), new Ship(4, "battleship"), new Ship(4, "battleship"), null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, new Ship(5, "carrier"), null, null, null, null, null, null, null, null],
  [null, new Ship(5, "carrier"), null, null, null, null, null, null, null, null],
  [null, new Ship(5, "carrier"), null, null, new Ship(3, "submarine"), new Ship(3, "submarine"), new Ship(3, "submarine"), null, null, null],
  [null, new Ship(5, "carrier"), null, null, null, null, null, null, null, new Ship(3, "destroyer")],
  [null, new Ship(5, "carrier"), null, null, null, null, null, null, null, new Ship(3, "destroyer")],
  [null, null, null, null, null, null, null, null, null, new Ship(3, "destroyer")]
]

player2.gameboard = [
  [null, null, new Ship(2, "patrolBoat"), null, null, null, null, null, null, null],
  [null, null, new Ship(2, "patrolBoat"), null, null, null, null, null, null, null],
  [null, null, null, null, null, new Ship(4, "battleship"), new Ship(4, "battleship"), new Ship(4, "battleship"), new Ship(4, "battleship"), null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, new Ship(5, "carrier"), new Ship(5, "carrier"), new Ship(5, "carrier"), new Ship(5, "carrier"), new Ship(5, "carrier"), null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, new Ship(3, "submarine"), new Ship(3, "submarine"), new Ship(3, "submarine"), null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, new Ship(3, "destroyer"), new Ship(3, "destroyer"), new Ship(3, "destroyer")],
  [null, null, null, null, null, null, null, null, null, null]
]

renderGameboard(player1.gameboard, "player1")
renderGameboard(player2.gameboard, "player2")

const cells = document.querySelectorAll(".cell")
console.log(cells)

const changeCurrentPlayer = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else currentPlayer = player1;
};

const playRound = (x, y) => {
  player1.attack(player2, x, y);
  changeCurrentPlayer();
  player2.makeMove(player1);
};
