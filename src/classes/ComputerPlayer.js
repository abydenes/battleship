import Player from "./Player";

export default class ComputerPlayer extends Player {
  placeShips() {
    // Place ships on the gameboard using an AI strategy
  }

  makeMove(enemy) {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    this.attack(enemy, x, y);
  }
}
