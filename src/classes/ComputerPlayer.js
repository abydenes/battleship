import Player from "./Player";

export default class ComputerPlayer extends Player {
  constructor() {
    super();
    this.attacks = [];
  }

  placeShips() {
    // Place ships on the gameboard using an AI strategy
  }

  makeMove(enemyBoard) {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11); 
    if (!this.attacks.find(el => el === [x, y])) {
      this.attack(enemyBoard, x, y);
      this.attacks.push([x, y]);
    } else throw new Error("already struck");
  }
}
