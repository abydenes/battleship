import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.gameboard = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.missedAttacks = [];
  }

  getMissedAttacks() {
    return this.missedAttacks;
  }

  getCell(x, y) {
    return this.gameboard[x][y];
  }

  placeShip(x, y, length) {
    this.gameboard[x][y] = new Ship(length);
  }

  registerAttack(x, y) {
    if (this.gameboard[x][y]) {
      this.gameboard[x][y].hit();
    } else this.missedAttacks.push([x, y]);
  }

  areAllShipsSunk() {
    return this.gameboard.every((el) =>
      el.every((cell) => cell === null || cell.isSunk())
    );
  }
}
