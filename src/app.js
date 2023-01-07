/* eslint-disable max-classes-per-file */
import Player from "./classes/Player";
import ComputerPlayer from "./classes/ComputerPlayer";

const gameController = (() => {
  const player1 = new Player("player1", "human");
  const player2 = new ComputerPlayer("player2", "computer");
  let currentPlayer = player1;

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
})();
