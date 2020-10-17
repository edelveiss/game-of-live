import React, { useState, useRef, useEffect } from "react";
import produce from "immer";
import { Container, Row, Col } from "reactstrap";
import GameDescription from "./GameDescription";

import {
  ruleset,
  MEDIUM_ROW_NUMBER,
  MEDIUM_COL_NUMBER,
  MEDIUM_CELL_SIZE,
} from "../helpers/cellConfig";
import {
  generateExampleGrid,
  createRandomGrid,
  gridSizeChange,
  createEmptyGrid,
} from "../helpers/gridCreation";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(74),
      // height: theme.spacing(70),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

let rowNumber = MEDIUM_ROW_NUMBER;
let colNumber = MEDIUM_COL_NUMBER;
let cellSize = MEDIUM_CELL_SIZE;

const GridContainer = () => {
  const classes = useStyles();
  const [grid, setGrid] = useState(() => {
    return createEmptyGrid(rowNumber, colNumber);
  });

  const [speed, setSpeed] = useState(100);
  const [generation, setGeneration] = useState(0);
  const [gridSize, setGridSize] = useState("Medium");
  const [gameExamples, setGameExamples] = useState("preset");
  const [nextStep] = useState(1);

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const generationRef = useRef(generation);
  generationRef.current = generation;

  const nextStepRef = useRef(nextStep);
  nextStepRef.current = nextStep;
  //================grid size change====================//
  useEffect(() => {
    const newSize = gridSizeChange(gridSize);
    rowNumber = newSize[0];
    colNumber = newSize[1];
    cellSize = newSize[2];

    setGrid(() => {
      setGeneration(0);
      return createEmptyGrid(rowNumber, colNumber);
    });
  }, [gridSize]);
  //================preset generation====================//
  useEffect(() => {
    setGrid(generateExampleGrid(gameExamples, rowNumber, colNumber));
  }, [gameExamples]);
  //================handleSpeedChange====================//
  const handleSpeedChange = (e, value) => {
    setSpeed(100 * value);
    speedRef.current = 100 * value;
  };
  //================handleGridSizeChange====================//
  const handleGridSizeChange = (e) => {
    e.preventDefault();
    setGeneration(0);
    setGridSize(e.target.value);
  };
  //================handle Preset Change====================//
  const handleGameExamplesChange = (e) => {
    e.preventDefault();
    setGeneration(0);
    setGameExamples(e.target.value);
  };
  //================handle Random Grid Change====================//
  const handleRandomGridChange = (e) => {
    e.preventDefault();
    setGrid(createRandomGrid(rowNumber, colNumber));
    setGeneration(0);
  };
  //================handle Start Button Change====================//
  const hangleStartChange = (e) => {
    e.preventDefault();
    nextStepRef.current = 1;
    setIsRunning(true);
    isRunningRef.current = true;
    runGame();
  };
  //================handle Stop Button Change====================//
  const handleStopChange = (e) => {
    e.preventDefault();
    setIsRunning(false);
  };
  //================handle Next Step Change====================//
  const handleNextStepChange = (e) => {
    e.preventDefault();
    nextStepRef.current = 0;
    setIsRunning(true);
    isRunningRef.current = true;
    runGame();
  };
  //================handle Grid Clear  Change====================//
  const handleClearChange = (e) => {
    e.preventDefault();
    setGrid(createEmptyGrid(rowNumber, colNumber));
    setGeneration(0);
    setIsRunning(false);
  };
  //================ Game Logic ====================//

  //+++++++++++++++++++++++++++++++++++++

  const runGame = () => {
    if (!isRunningRef.current) {
      return;
    }
    setGeneration(generationRef.current + 1);
    //---------------------------------------------------
    setGrid((currentGrid) => {
      return produce(currentGrid, (nextGrid) => {
        let cacheI = {};
        let cacheJ = {};
        for (let i = 0; i < rowNumber; i++) {
          for (let j = 0; j < colNumber; j++) {
            let neighbors = 0;
            ruleset.forEach(([x, y]) => {
              if (!cacheI.hasOwnProperty(i + x)) {
                if (i + x >= 0 && i + x < rowNumber) {
                  cacheI[i + x] = i + x;
                }
              }
              if (!cacheJ.hasOwnProperty(j + y)) {
                if (j + y >= 0 && j + y < colNumber) {
                  cacheJ[j + y] = j + y;
                }
              }
              if (
                cacheI.hasOwnProperty(i + x) &&
                cacheJ.hasOwnProperty(j + y)
              ) {
                neighbors += currentGrid[cacheI[i + x]][cacheJ[j + y]];
              }
            });

            //------------------------------
            if (neighbors < 2 || neighbors > 3) {
              nextGrid[i][j] = 0;
            } else if (currentGrid[i][j] === 0 && neighbors === 3) {
              nextGrid[i][j] = 1;
            }
            //------------------------------
          }
        }
      });
    });

    //-----------------------------------------------

    if (nextStepRef.current === 1) {
      setTimeout(runGame, speedRef.current);
    }
  };

  //++++++++++++++++++++++++++++++++

  return (
    <Container
      className="themed-container"
      fluid={true}
      style={{ marginTop: "2rem" }}
    >
      <Row style={{ display: "flex", justifyContent: "space-around" }}>
        <Col xs="12" md="10" xl="6" style={{ marginLeft: "0rem" }}>
          <Row style={{ marginLeft: "2rem" }}>
            <div className={classes.root}>
              {/** */}
              <Paper elevation={3}>
                {/**-----------------------grid---------------------------------- */}
                <div
                  className="grid-container"
                  style={{
                    gridTemplateColumns: `repeat(${colNumber}, ${cellSize}px)`,
                  }}
                >
                  {grid.map((rows, i) =>
                    rows.map((col, j) => (
                      <div
                        className="cell"
                        key={`${i}-${j}`}
                        onClick={() => {
                          if (!isRunningRef.current) {
                            const newGrid = produce(grid, (nextGrid) => {
                              nextGrid[i][j] = grid[i][j] ? 0 : 1; //cell toggle
                            });

                            setGrid(newGrid);
                          }
                        }}
                        style={{
                          width: cellSize,
                          height: cellSize,

                          backgroundColor:
                            grid[i][j] === 1
                              ? // ? "#f3003d"
                                // "#f3004d" pink
                                // "#3747ac"  blue
                                // "#9123a7" violet
                                // "#43a646" green
                                "#3747ac"
                              : grid[i][j] === 2
                              ? "yellow"
                              : undefined,
                        }}
                      />
                    ))
                  )}
                </div>
                {/** */}

                <div className="low-paper">
                  <div className="grid-size-span">
                    Grid Size:{" "}
                    <span>
                      {rowNumber}x{colNumber}
                    </span>
                  </div>

                  <div className="speed">
                    Speed: <span>{parseInt(speed)}ms/gen</span>
                  </div>

                  <div className="generation">
                    Generation:{" "}
                    <span className="block-span ">{generation}</span>
                  </div>
                </div>
              </Paper>
            </div>
          </Row>
          {/******************************* */}
          <Row style={{ marginLeft: "2rem" }}>
            <div className="btns">
              {/**-------------start ------------ */}
              <Button
                className="btn"
                variant="contained"
                color="secondary"
                onClick={hangleStartChange}
                style={{
                  marginRight: "0.5rem",
                  color: "white",
                  height: "2.8rem",
                }}
              >
                start
              </Button>

              {/**-------------stop------------ */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleStopChange}
                style={{ marginRight: "0.5rem", height: "2.8rem" }}
              >
                stop
              </Button>

              {/**-------------next step------------ */}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNextStepChange}
                style={{ marginRight: "0.5rem", height: "2.8rem" }}
              >
                next
              </Button>

              {/**-------------random------------ */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleRandomGridChange}
                style={{ marginRight: "0.5rem", height: "2.8rem" }}
              >
                random
              </Button>

              {/**-------------clear------------ */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleClearChange}
                style={{ marginRight: "1rem", height: "2.8rem" }}
              >
                clear
              </Button>
              {/**---------------------Speed------------------------------ */}
              <div style={{ width: "6rem", marginRight: "1rem" }}>
                <Typography id="speed-slider" gutterBottom>
                  Speed
                </Typography>
                <Slider
                  defaultValue={1}
                  aria-labelledby="speed"
                  step={0.5}
                  marks
                  min={0.1}
                  max={3.0}
                  valueLabelDisplay="auto"
                  onChange={handleSpeedChange}
                />
              </div>

              {/**------------------Grid Form select-------------------------------- */}
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ marginRight: "0.5rem", widht: "3rem" }}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Grid Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="grid-size-select-outlined"
                  value={gridSize}
                  onChange={handleGridSizeChange}
                  label="grid-size"
                >
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
                </Select>
              </FormControl>

              {/**------------------Game of Life samples------------------ */}
              <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ marginRight: "1rem", widht: "3rem" }}
              >
                <InputLabel id="examples-select-outlined-label">
                  Preset
                </InputLabel>

                <Select
                  labelId="examples-select-outlined-label"
                  id="examples-select-outlined"
                  value={gameExamples}
                  onChange={handleGameExamplesChange}
                  label="examples"
                >
                  <MenuItem value={"preset"}>Samples</MenuItem>
                  <MenuItem value={"oscillator"}>Oscillator</MenuItem>
                  <MenuItem value={"gliderGun"}>GliderGun</MenuItem>
                  <MenuItem value={"queen"}>Queen</MenuItem>
                  <MenuItem value={"spaceShips"}>Space Ships</MenuItem>
                  <MenuItem value={"breed1"}>Double Breed</MenuItem>
                  <MenuItem value={"breed"}>Breed</MenuItem>
                  <MenuItem value={"acorn"}>Acorn</MenuItem>
                  <MenuItem value={"infiniteRepeat"}>InfiniteRepeat</MenuItem>
                </Select>
              </FormControl>

              {/**-------------------------------------------------- */}
            </div>
          </Row>
          {/************************************** */}
        </Col>
        {/** 
        <Col xs="12" md="2" xl="1" style={{ width: "5rem" }}>
          <GridStyling />
        </Col>
*/}
        <Col xs="12" md="12" xl="5" style={{ width: "40rem" }}>
          <GameDescription />
        </Col>
      </Row>
    </Container>
  );
};

export default GridContainer;

// const runGame1 = () => {
//     if (!isRunningRef.current) {
//       return;
//     }
//     setGeneration(generationRef.current + 1);
//     //---------------------------------------------------
//     setGrid((currentGrid) => {
//       return produce(currentGrid, (nextGrid) => {
//         for (let i = 0; i < rowNumber; i++) {
//           for (let j = 0; j < colNumber; j++) {
//             let neighbors = 0;
//             ruleset.forEach(([x, y]) => {
//               const nextI = i + x;
//               const nextJ = j + y;
//               if (
//                 nextI >= 0 &&
//                 nextI < rowNumber &&
//                 nextJ >= 0 &&
//                 nextJ < colNumber
//               ) {
//                 neighbors += currentGrid[nextI][nextJ];
//               }
//             });

//             //------------------------------
//             if (neighbors < 2 || neighbors > 3) {
//               nextGrid[i][j] = 0;
//             } else if (currentGrid[i][j] === 0 && neighbors === 3) {
//               nextGrid[i][j] = 1;
//             }
//             //------------------------------
//           }
//         }
//       });
//     });

//     //-----------------------------------------------

//     if (nextStepRef.current === 1) {
//       setTimeout(runGame, speedRef.current);
//     }
//   };

//=======+++++++++++++++++++++++++++++++++++++++++++
// const runGame1 = () => {
//   if (!isRunningRef.current) {
//     return;
//   }
//   setGeneration(generationRef.current + 1);
//   //---------------------------------------------------
//   setGrid(
//     gameAlgorithm(grid, rowNumber, colNumber)
//     //   (currentGrid) => {
//     //   return produce(currentGrid, (nextGrid) => {
//     //     for (let i = 0; i < rowNumber; i++) {
//     //       for (let j = 0; j < colNumber; j++) {
//     //         let neighbors = 0;
//     //         ruleset.forEach(([x, y]) => {
//     //           const nextI = i + x;
//     //           const nextJ = j + y;
//     //           if (
//     //             nextI >= 0 &&
//     //             nextI < rowNumber &&
//     //             nextJ >= 0 &&
//     //             nextJ < colNumber
//     //           ) {
//     //             neighbors += currentGrid[nextI][nextJ];
//     //           }
//     //         });

//     //         //------------------------------
//     //         if (neighbors < 2 || neighbors > 3) {
//     //           nextGrid[i][j] = 0;
//     //         } else if (currentGrid[i][j] === 0 && neighbors === 3) {
//     //           nextGrid[i][j] = 1;
//     //         }
//     //         //------------------------------
//     //       }
//     //     }
//     //   });
//     // }
//   );

//   //-----------------------------------------------

//   if (nextStepRef.current === 1) {
//     setTimeout(runGame, speedRef.current);
//   }
// };
//++++++++++++++++++++++++++++++++++++++++++++++++++

//-------------------------------------------
// if (currentGrid[i][j] === 1 || currentGrid[i][j] === 2) {
//   console.log("neighbors", neighbors, `currentGrid[${i}][${j}] =`, currentGrid[i][j]);
// }
//-------------------------------
// if (neighbors >= 4 || neighbors <= 1) {
//   nextGrid[i][j] = 0;
// } else if (neighbors === 2) {
//   currentGrid[i][j] === 2 || currentGrid[i][j] === 1
//     ? (nextGrid[i][j] = 1)
//     : (nextGrid[i][j] = 0);
// } else if (neighbors === 3) {
//   currentGrid[i][j] === 2 || currentGrid[i][j] === 1
//     ? (nextGrid[i][j] = 1)
//     : (nextGrid[i][j] = 2);
// } else if (currentGrid[i][j] === 2) {
//   nextGrid[i][j] = 1;
// }
//------------------------------
// if ((g[i][j] === 1 || g[i][j] === 2) && neighbors < 2) {
//   nextGrid[i][j] = 0;
// }
// else if (
//   ((g[i][j] === 1 || g[i][j] === 2) && neighbors === 3) ||
//   ((g[i][j] === 1 || g[i][j] === 2) && neighbors === 2)
// ) {
//   nextGrid[i][j] = 1;
// } else if ((g[i][j] === 1 || g[i][j] === 2) && neighbors > 3) {
//   nextGrid[i][j] = 0;
// } else if (g[i][j] === 0 && neighbors === 3) {
//   nextGrid[i][j] = 2;
// } else if (g[i][j] === 2) {
//   nextGrid[i][j] = 1;
// }
//------------------------------
