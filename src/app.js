/* eslint-disable max-classes-per-file */
export class Ship {
  constructor(length, hitNumber = 0) {
    this.length = length;
    this.hitNumber = hitNumber;
  }

  hit() {
    this.hitNumber += 1;
  }

  isSunk() {
    return this.hitNumber === this.length;
  }
}

export class Gameboard {
  constructor() {
    this.gameboard = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.missedAttacks = 0;
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

  receiveAttack(x, y) {
    if (this.gameboard[x][y]) {
      this.gameboard[x][y].hit();
    } else this.missedAttacks += 1;
  }

  areAllShipsSunk() {
    return this.gameboard.every((el) =>
      el.every((cell) => cell === null || cell.isSunk())
    );
  }
}

export class Player {
  constructor(playerName, type) {
    this.gameboard = new Gameboard();
    this.playerName = playerName;
    this.type = type;
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

  attack(enemy) {

  }
}

export class ComputerPlayer extends Player {
  placeShips() {
    // Place ships on the gameboard using an AI strategy
  }

  takeTurn() {}
}
