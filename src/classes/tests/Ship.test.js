/* eslint-disable no-undef */
import Ship from "../Ship";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  it("should initialize with correct hitNumber", () => {
    expect(ship.hitNumber).toBe(0);
  });

  it("should be able to increment hitNumber", () => {
    ship.hit();
    expect(ship.hitNumber).toBe(1);
  });

  it("should be able to determine if it is sunk", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});