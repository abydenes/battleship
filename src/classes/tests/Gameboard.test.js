/* eslint-disable no-undef */
import Gameboard from "../Gameboard";
import Ship from "../Ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should be able to place a ship at a given position", () => {
    gameboard.placeShip(3, 4, 5);
    expect(gameboard.getCell(3, 4)).toBeInstanceOf(Ship);
  });

  test("should be able to receive an attack at a given position", () => {
    gameboard.placeShip(3, 4, 5);
    gameboard.registerAttack(3, 4);
    expect(gameboard.getCell(3, 4).hitNumber).toBe(1);
  });

  test("should return false if there is one ship standing", () => {
    gameboard.placeShip(5, 6, 1);
    expect(gameboard.areAllShipsSunk()).toBe(false);
  });

  test("should return false if there are more than one ship standing", () => {
    gameboard.placeShip(5, 6, 1);
    gameboard.placeShip(9, 8, 2);
    expect(gameboard.areAllShipsSunk()).toBe(false);
  });

  test("should return true if there are no ships", () => {
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });
});