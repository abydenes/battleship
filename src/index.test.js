/* eslint-disable no-undef */
import { Ship, Gameboard, Player } from "./index";

describe('Ship', () => {
  it('should return the correct name', () => {
    const ship = Ship(3, 'destroyer', 0, 0, 'horizontal');
    expect(ship.getName()).toEqual('destroyer');
  });

  it('should return the correct hit count', () => {
    const ship = Ship(3, 'destroyer', 0, 0, 'horizontal');
    ship.getHit();
    expect(ship.isSunk()).toBe(false);
    ship.getHit();
    ship.getHit();
    expect(ship.isSunk()).toBe(true);
  });

  it('should return the correct components', () => {
    const ship = Ship(3, 'destroyer', 0, 0, 'horizontal');
    expect(ship.getComponents()).toEqual([[0, 0], [0, 1], [0, 2]]);
  });
});

describe('Gameboard', () => {
  it('should return the correct cell', () => {
    const gameboard = Gameboard('player1');
    gameboard.placeShip(3, 'destroyer', 0, 0, 'horizontal');
    expect(gameboard.getCell(0, 0)).toBeInstanceOf(Object);
    expect(gameboard.getCell(1, 1)).toBe(null);
  });

  it('should return true for a move that exists', () => {
    const gameboard = Gameboard('player1');
    gameboard.placeShip(3, 'destroyer', 0, 0, 'horizontal');
    gameboard.receiveAttack(0, 0);
    expect(gameboard.moveExists(0, 0)).toBe(true);
  });

  it('should return false for a move that does not exist', () => {
    const gameboard = Gameboard('player1');
    gameboard.placeShip(3, 'destroyer', 0, 0, 'horizontal');
    expect(gameboard.moveExists(0, 0)).toBe(false);
  });

  it('should return true if all ships are sunk', () => {
    const gameboard = Gameboard('player1');
    gameboard.placeShip(3, 'destroyer', 0, 0, 'horizontal');
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  it('should return the correct owner', () => {
    const gameboard = Gameboard('player1');
    expect(gameboard.getOwner()).toEqual('player1');
  });
});

describe('Player', () => {
  it('should return the correct name', () => {
    const player = Player('John Doe');
    expect(player.getName()).toEqual('John Doe');
  });

  it('should make a valid attack', () => {
    const gameboard = Gameboard('player1');
    gameboard.placeShip(3, 'destroyer', 0, 0, 'horizontal');
    const player = Player('John Doe');
    player.attack(gameboard, 0, 0);
    expect(gameboard.getCell(0, 0).isSunk()).toBe(false);
    player.attack(gameboard, 0, 1);
    player.attack(gameboard, 0, 2);
    expect(gameboard.getCell(0, 0).isSunk()).toBe(true);
  });

  it('should return a random coordinate', () => {
    const player = Player('John Doe');
    const coord = player.randomCoord();
    expect(coord).toHaveLength(2);
    expect(coord[0]).toBeGreaterThanOrEqual(0);
    expect(coord[0]).toBeLessThan(10);
    expect(coord[1]).toBeGreaterThanOrEqual(0);
    expect(coord[1]).toBeLessThan(10);
  });
});
