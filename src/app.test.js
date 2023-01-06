/* eslint-disable no-undef */
import { Ship, Gameboard, Player } from "./app";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test("should initialize with correct hitNumber", () => {
    expect(ship.hitNumber).toBe(0);
  });

  test("should be able to increment hitNumber", () => {
    ship.hit();
    expect(ship.hitNumber).toBe(1);
  });

  test("should be able to determine if it is sunk", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

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
    gameboard.receiveAttack(3, 4);
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

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player("Alice", "human");
  });

  test("should be able to get player name", () => {
    expect(player.getName()).toBe("Alice");
  });

  test("should be able to get player type", () => {
    expect(player.getType()).toBe("human");
  });

  test("should be able to get player gameboard", () => {
    expect(player.getGameboard()).toBeInstanceOf(Gameboard);
  });
});
