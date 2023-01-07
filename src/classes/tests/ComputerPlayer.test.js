/* eslint-disable no-undef */
import ComputerPlayer from "../ComputerPlayer";
import Gameboard from "../Gameboard";

describe("ComputerPlayer", () => {
  it("should have a gameboard", () => {
    const player = new ComputerPlayer("player", "computer");
    expect(player.gameboard).toBeDefined();
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  it("can make a random move", () => {
    const computerPlayer = new ComputerPlayer("computer", "computer");
    const mockEnemy = { receiveAttack: jest.fn() };
    computerPlayer.makeMove(mockEnemy);
    expect(mockEnemy.receiveAttack).toHaveBeenCalled();
  });

  it("can make random moves", () => {
    const computerPlayer = new ComputerPlayer("computer", "computer");
    const mockEnemy = { receiveAttack: jest.fn() };
    computerPlayer.makeMove(mockEnemy);
    computerPlayer.makeMove(mockEnemy);
    expect(mockEnemy.receiveAttack).toHaveBeenCalledWith(
      expect.any(Number),
      expect.any(Number)
    );
    expect(mockEnemy.receiveAttack).toHaveBeenCalledTimes(2);
  });
});