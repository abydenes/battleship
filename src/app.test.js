/* eslint-disable no-undef */
import { gameboard1, ship1 } from "./app";

test("isSunk function returns a boolean value", () => {
  expect(ship1.isSunk()).toBe(false);
});
