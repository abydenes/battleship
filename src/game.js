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
  console.log(player1.gameboard);
}

// populate gameboards with ships manually

player1.gameboard = [
  [null, null, new Ship(2), new Ship(2), null, null, null, null, null, new Ship(1)],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [new Ship(1), null, null, null, new Ship(4), new Ship(4), new Ship(4), new Ship(4), null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, new Ship(2), new Ship(2), null, null, null, null, null],
  [null, new Ship(2), null, null, null, null, null, null, null, null],
  [null, new Ship(2), null, null, null, new Ship(3), new Ship(3), new Ship(3), null, new Ship(3)],
  [new Ship(1), null, null, null, null, null, null, null, null, new Ship(3)],
  [null, null, null, null, null, new Ship(1), null, null, null, new Ship(3)]
]

renderGameboard(player1.gameboard)

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
