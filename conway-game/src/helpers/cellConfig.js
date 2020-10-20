export const MEDIUM_ROW_NUMBER = 31;
export const MEDIUM_COL_NUMBER = 44;
export const MEDIUM_CELL_SIZE = 18.2;

export const LARGE_ROW_NUMBER = 51;
export const LARGE_COL_NUMBER = 73;
export const LARGE_CELL_SIZE = 11;

export const SMALL_ROW_NUMBER = 25;
export const SMALL_COL_NUMBER = 35;
export const SMALL_CELL_SIZE = 22.8;

export const ruleset = [
  [1, 1],
  [1, 0],
  [0, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
  [0, -1],
  [-1, 0],
];

export const oscillator = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },

  { x: 2, y: 0 },
  { x: 2, y: 2 },
  { x: 3, y: 0 },
  { x: 3, y: 1 },

  { x: 3, y: 2 },
  { x: 4, y: 1 },
];
export const queen = [
  { x: 3, y: 0 },
  { x: 3, y: 1 },
  { x: 4, y: 0 },
  { x: 4, y: 1 },

  { x: 3, y: 5 },
  { x: 2, y: 6 },
  { x: 4, y: 6 },

  { x: 1, y: 7 },
  { x: 5, y: 7 },
  { x: 2, y: 8 },
  { x: 3, y: 8 },
  { x: 4, y: 8 },
  { x: 0, y: 9 },
  { x: 1, y: 9 },

  { x: 5, y: 9 },
  { x: 6, y: 9 },

  { x: 3, y: 20 },
  { x: 3, y: 21 },
  { x: 4, y: 20 },
  { x: 4, y: 21 },
];
export const pulsarGen = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },

  { x: 1, y: 2 },
  { x: 2, y: 0 },
  { x: 2, y: 2 },

  { x: 3, y: 0 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 4, y: 1 },
];

export const spaceShips = [
  { x: 0, y: 0 },
  { x: 0, y: 3 },
  { x: 1, y: 4 },
  { x: 2, y: 4 },
  { x: 3, y: 4 },
  { x: 3, y: 3 },
  { x: 3, y: 2 },
  { x: 3, y: 1 },
  { x: 2, y: 0 },
];
export const middleSspaceShip = [
  { x: 1, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 4, y: 4 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
  { x: 2, y: 5 },
  { x: 1, y: 4 },
  { x: 0, y: 2 },
];
export const infiniteRepeat = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 1, y: 9 },
  { x: 1, y: 10 },
];
export const breed1 = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 1, y: 9 },
  { x: 1, y: 10 },
  { x: 1, y: 11 },
  { x: 1, y: 12 },
  { x: 1, y: 13 },
  { x: 1, y: 14 },
  { x: 1, y: 15 },
  { x: 1, y: 16 },
  { x: 1, y: 17 },
  { x: 1, y: 18 },
  { x: 1, y: 19 },
  { x: 1, y: 20 },

  { x: 2, y: 1 },
  { x: 2, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 2, y: 5 },
  { x: 2, y: 6 },
  { x: 2, y: 7 },
  { x: 2, y: 8 },
  { x: 2, y: 9 },
  { x: 2, y: 10 },
  { x: 2, y: 11 },
  { x: 2, y: 12 },
  { x: 2, y: 13 },
  { x: 2, y: 14 },
  { x: 2, y: 15 },
  { x: 2, y: 16 },
  { x: 2, y: 17 },
  { x: 2, y: 18 },
  { x: 2, y: 19 },
  { x: 2, y: 20 },
];
export const acorn = [
  { x: 0, y: 0 },
  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: 1, y: -3 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
];
export const gliderGun = [
  { x: 0, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 2, y: -2 },
  { x: -2, y: -2 },
  { x: 0, y: -3 },

  { x: -3, y: -4 },
  { x: -3, y: -5 },
  { x: -2, y: -6 },
  { x: -1, y: -7 },
  { x: 0, y: -7 },
  { x: 1, y: -7 },
  { x: 2, y: -6 },

  { x: 3, y: -5 },
  { x: 3, y: -4 },
  { x: 0, y: -17 },
  { x: -1, y: -17 },
  { x: 0, y: -16 },
  { x: -1, y: -16 },
  { x: -1, y: 3 },

  { x: -2, y: 3 },
  { x: -3, y: 3 },
  { x: -1, y: 4 },
  { x: -2, y: 4 },
  { x: -3, y: 4 },
  { x: 0, y: 5 },
  { x: -4, y: 5 },

  { x: 0, y: 7 },
  { x: 1, y: 7 },
  { x: -4, y: 7 },
  { x: -5, y: 7 },
  { x: -2, y: 17 },
  { x: -2, y: 18 },
  { x: -3, y: 17 },
  { x: -3, y: 17 },
];

export const breed = [
  { x: 0, y: 0 },
  { x: 0, y: 7 },
  { x: 0, y: 8 },
  { x: 0, y: 9 },
  { x: 0, y: 10 },
  { x: 0, y: 11 },
  { x: 0, y: 12 },
  { x: 0, y: 13 },

  { x: 0, y: 15 },
  { x: 0, y: 16 },
  { x: 0, y: 17 },
  { x: 0, y: 18 },
  { x: 0, y: 19 },
  { x: 0, y: -1 },
  { x: 0, y: -2 },
  { x: 0, y: -6 },

  { x: 0, y: -7 },
  { x: 0, y: -8 },
  { x: 0, y: -9 },
  { x: 0, y: -10 },
  { x: 0, y: -12 },
  { x: 0, y: -13 },
  { x: 0, y: -14 },
  { x: 0, y: -15 },

  { x: 0, y: -16 },
  { x: 0, y: -17 },
  { x: 0, y: -18 },
  { x: 0, y: -19 },
];
export const breed3 = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 1, y: 11 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 6 },
  { x: 0, y: 7 },
  { x: 0, y: 8 },
  { x: 0, y: 9 },
  { x: 0, y: 11 },
];
