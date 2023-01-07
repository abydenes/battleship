export default class Ship {
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