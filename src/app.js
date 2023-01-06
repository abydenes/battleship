export const gameboard1 = Gameboard();
export const ship1 = Ship(4)

function Ship(length, hitNumber = 0, sunk = false) {
  const hit = () => {
    hitNumber += 1;
  };

  const isSunk = () => hitNumber === length;
  return { hitNumber, isSunk };
}

function Gameboard(owner = null) {
  const gameboard = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];

  const placeShip = () => {};

  const receiveAttack = (x, y) => {};

  return {
    receiveAttack,
  };
}

function Player(name, type) {
  return {};
}
