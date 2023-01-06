import "./style.css";
import { Player, ComputerPlayer } from "./app";
import init from "./UI";

init();

const gameController = (() => {
  const player1 = new Player("player1", "human");
  const player2 = new ComputerPlayer("player2", "computer");
  let currentPlayer = player1;

  const changeCurrentPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else currentPlayer = player1;
  };


})();
