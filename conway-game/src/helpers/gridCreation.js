import {
  oscillator,
  infiniteRepeat,
  acorn,
  gliderGun,
  breed,
  breed1,
  queen,
  spaceShips,
  middleSspaceShip,
  SMALL_ROW_NUMBER,
  SMALL_COL_NUMBER,
  SMALL_CELL_SIZE,
  MEDIUM_ROW_NUMBER,
  MEDIUM_COL_NUMBER,
  MEDIUM_CELL_SIZE,
  LARGE_ROW_NUMBER,
  LARGE_COL_NUMBER,
  LARGE_CELL_SIZE,
} from "./cellConfig";

export const createEmptyGrid = (rows, cols) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(Array.from(Array(cols), () => 0));
  }

  return arr;
};
export const createRandomGrid = (rows, cols) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(Array.from(Array(cols), () => (Math.random() > 0.6 ? 1 : 0)));
  }

  return arr;
};

export const generateExampleGrid = (example, rowNumber, colNumber) => {
  let exampleGrid = [];
  exampleGrid = createEmptyGrid(rowNumber, colNumber);

  switch (example) {
    case "preset": {
      break;
    }
    case "spaceShips": {
      spaceShips.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 5) - 3][
            element.y + parseInt(colNumber / 5)
          ] = 1)
      );
      spaceShips.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 5) + 4][
            element.y + parseInt(colNumber / 5)
          ] = 1)
      );
      spaceShips.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 5) + 11][
            element.y + parseInt(colNumber / 5)
          ] = 1)
      );

      break;
    }
    case "queen": {
      queen.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 2.5)
          ] = 1)
      );
      break;
    }
    case "acorn": {
      acorn.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2)][
            element.y + parseInt(colNumber / 2)
          ] = 1)
      );
      break;
    }
    case "gliderGun": {
      gliderGun.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 4)][
            element.y + parseInt(colNumber / 2) - 2
          ] = 1)
      );
      break;
    }
    case "breed": {
      breed.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2)][
            element.y + parseInt(colNumber / 3)
          ] = 1)
      );
      break;
    }
    case "oscillator": {
      oscillator.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 2.5)
          ] = 1)
      );
      break;
    }
    case "infiniteRepeat": {
      infiniteRepeat.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 3)
          ] = 1)
      );
      break;
    }
    case "breed1": {
      breed1.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 4)
          ] = 1)
      );
      break;
    }
    default: {
      break;
    }
  }
  return exampleGrid;
};

//-------------------------------------------------------
export function gridSizeChange(newGridSize) {
  let newSizeArr = [];
  switch (newGridSize) {
    case "Large": {
      newSizeArr.push(LARGE_ROW_NUMBER);
      newSizeArr.push(LARGE_COL_NUMBER);
      newSizeArr.push(LARGE_CELL_SIZE);
      break;
    }
    case "Medium": {
      newSizeArr.push(MEDIUM_ROW_NUMBER);
      newSizeArr.push(MEDIUM_COL_NUMBER);
      newSizeArr.push(MEDIUM_CELL_SIZE);
      break;
    }
    case "Small": {
      newSizeArr.push(SMALL_ROW_NUMBER);
      newSizeArr.push(SMALL_COL_NUMBER);
      newSizeArr.push(SMALL_CELL_SIZE);
      break;
    }

    default: {
      break;
    }
  }

  return newSizeArr;
}
