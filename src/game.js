/* eslint-disable max-classes-per-file */
import Player from "./classes/Player";
import ComputerPlayer from "./classes/ComputerPlayer";
import Ship from "./classes/Ship";
import { renderGameboard } from "./UI";

export default function initGame() {
  const player1 = new Player("Alice");
  const player2 = new Player("Computer");
  // populate gameboards with ships manually
  // No.	Class of ship	Size
  // 1	  Carrier	        5
  // 2	  Battleship	    4
  // 3	  Destroyer	      3
  // 4	  Submarine	      3
  // 5	  Patrol Boat	    2

  

  renderGameboard(player1.gameboard, "player1")
  console.log(player1.gameboard)

  player1.attack(player2.gameboard, 0,0)
}
