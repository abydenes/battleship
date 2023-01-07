import Gameboard from "./Gameboard";

export default class Player {
  constructor(playerName, type) {
    this.gameboard = new Gameboard();
    this.playerName = playerName;
    this.type = type;
  }

  attack(enemy, x, y) {
    enemy.receiveAttack(x, y);
  }

  receiveAttack(x, y) {
    this.gameboard.registerAttack(x, y);
  }

  getName() {
    return this.playerName;
  }

  getType() {
    return this.type;
  }

  getGameboard() {
    return this.gameboard;
  }
}

