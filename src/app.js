export function Ship(length, hitNumber = 0) {
  const hit = () => {
    hitNumber += 1;
  };

  const isSunk = () => hitNumber === length;
  return { hit, isSunk };
}

export function Gameboard(owner = null) {
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
