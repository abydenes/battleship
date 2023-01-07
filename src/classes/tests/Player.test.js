/* eslint-disable no-undef */
import Player from "../Player";
import Gameboard from "../Gameboard";

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player("Alice", "human");
  });

  it("should be able to get player name", () => {
    expect(player.getName()).toBe("Alice");
  });

  it("should be able to get player type", () => {
    expect(player.getType()).toBe("human");
  });

  it("should be able to get player gameboard", () => {
    expect(player.getGameboard()).toBeInstanceOf(Gameboard);
  });

  it("should call the receiveAttack method on the enemy gameboard", () => {
    const enemy = { receiveAttack: jest.fn() };
    player.attack(enemy, 0, 0);
    expect(enemy.receiveAttack).toHaveBeenCalledWith(0, 0);
  });


});