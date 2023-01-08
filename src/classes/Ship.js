export default class Ship {
  constructor(length, name, hitNumber = 0) {
    this.length = length;
    this.name = name;
    this.hitNumber = hitNumber;
  }

  hit() {
    this.hitNumber += 1;
  }

  isSunk() {
    return this.hitNumber === this.length;
  }
}
