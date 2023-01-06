/* eslint-disable no-undef */
import { Ship, Gameboard } from "./app";

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(3);
  });

  test('is initially not sunk', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('is sunk after enough hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('is not sunk after fewer than required number of hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});


