import Gameboard from "./Gameboard";

export default class Player {
  constructor(playerName) {
    this.gameboard = new Gameboard();
    this.playerName = playerName;
    this.missedAttacks = [];
  }

  attack(gameboard, x, y) {
    if (this.missedAttacks.find((el) => el === [x, y])) return;
    this.missedAttacks.push([x, y]);
    gameboard.receiveAttack(x, y);
  }
}
