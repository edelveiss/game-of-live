import {
  //------------------game samples-------------------------------------
  oscillator,
  infiniteRepeat,
  acorn,
  gliderGun,
  breed,
  breed1,
  queen,
  spaceShips,
  pulsarGen,
  breed3,
  spaceShips1,
  spaceShips2,
  spaceShips3,
  //------------------grid size constants-------------------------------------
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
//------------------createEmptyGrid-------------------------------------
export const createEmptyGrid = (rows, cols) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(Array.from(Array(cols), () => 0));
  }

  return arr;
};
//------------------createRandomGrid-------------------------------------
export const createRandomGrid = (rows, cols) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(
      Array.from(Array(cols), () => (Math.round(Math.random()) > 0.7 ? 1 : 0))
    );
  }

  return arr;
};

//------------------generateExampleGrid-------------------------------------
export const generateExampleGrid = (example, rowNumber, colNumber) => {
  let exampleGrid = [];
  exampleGrid = createEmptyGrid(rowNumber, colNumber);

  switch (example) {
    case "preset": {
      break;
    }
    //------------------spaceShips-------------------
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

    //------------------spaceShips 1 2 -------------------
    case "spaceShips123": {
      spaceShips1.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 5) - 3][
            element.y + parseInt(colNumber / 5)
          ] = 1)
      );
      spaceShips2.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2 + 5)][
            element.y + parseInt(colNumber / 1.5 + 9)
          ] = 1)
      );
      spaceShips3.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 5 + 5)][
            element.y + parseInt(colNumber / 1.5 - 5)
          ] = 1)
      );

      break;
    }
    //------------------queen-------------------
    case "queen": {
      queen.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 3)][
            element.y + parseInt(colNumber / 4)
          ] = 1)
      );
      break;
    }
    //------------------acorn-------------------
    case "acorn": {
      acorn.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2)][
            element.y + parseInt(colNumber / 2 + 10)
          ] = 1)
      );
      break;
    }
    //------------------gliderGun-------------------
    case "gliderGun": {
      gliderGun.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 4)][
            element.y + parseInt(colNumber / 2) - 2
          ] = 1)
      );
      break;
    }
    //------------------breed-------------------
    case "breed": {
      breed.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2)][
            element.y + parseInt(colNumber / 3 + 3)
          ] = 1)
      );
      break;
    }
    //------------------breed3-------------------
    case "breed3": {
      breed3.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2)][
            element.y + parseInt(colNumber / 3)
          ] = 1)
      );
      break;
    }
    //------------------oscillator-------------------
    case "oscillator": {
      oscillator.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 2.5)
          ] = 1)
      );
      break;
    }
    //------------------oscillator-------------------
    case "pulsarGen": {
      pulsarGen.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 2.3)
          ] = 1)
      );
      break;
    }
    //------------------infiniteRepeat-------------------
    case "infiniteRepeat": {
      infiniteRepeat.map(
        (element) =>
          (exampleGrid[element.x + parseInt(rowNumber / 2.5)][
            element.y + parseInt(colNumber / 3)
          ] = 1)
      );
      break;
    }
    //------------------breed1-------------------
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

//------------------gridSizeChange-------------------------------------
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
