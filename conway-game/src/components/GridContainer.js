import React, { useState, useRef, useEffect } from "react";
import produce from "immer";
import { Container, Row, Col } from "reactstrap";
import GameDescription from "./GameDescription";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  const [cellColor, setCellColor] = useState("#3747ac");

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
  //================handle Speed Change====================//
  const handleSpeedChange = (e, value) => {
    setSpeed(100 * value);
    speedRef.current = 100 * value;
  };

  //================handle Cell Color Change====================//
  const handleCellColorChange = (e) => {
    e.preventDefault();
    setCellColor(e.target.value);
  };
  //================handle Grid Size Change====================//
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

  const runGame = () => {
    if (!isRunningRef.current) {
      return;
    }
    setGeneration(generationRef.current + 1);

    setGrid((currentGrid) => {
      return produce(currentGrid, (nextGrid) => {
        let i = 0;
        while (i < rowNumber) {
          let j = 0;
          while (j < colNumber) {
            let neighbors = 0;
            ruleset.forEach(([x, y]) => {
              //Edge case handling
              //Wrap around to the far side
              let row = (x + i + rowNumber) % rowNumber;
              let col = (y + j + colNumber) % colNumber;
              //count neighbors
              neighbors += currentGrid[row][col];
            });
            //check  game rules
            if (neighbors < 2 || neighbors > 3) {
              nextGrid[i][j] = 0;
            } else if (currentGrid[i][j] === 0 && neighbors === 3) {
              nextGrid[i][j] = 1;
            }
            j++;
          }
          i++;
        }
      });
    });

    if (nextStepRef.current === 1) {
      //set the interval between generations, run the game untill isRunningRef.current is true
      setTimeout(runGame, speedRef.current);
    }
  };
  return (
    <Container
      className="themed-container"
      fluid={true}
      style={{ marginTop: "1rem" }}
    >
      <Row style={{ display: "flex", justifyContent: "space-around" }}>
        <Col className="col-grid">
          <Row className="paper" style={{ marginLeft: "1rem" }}>
            <div>
              <div style={{ marginLeft: "2rem" }}>
                Wrapped around to the far side version
              </div>
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
                          key={`${i}${j}`}
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
                              grid[i][j] === 1 ? cellColor : undefined,
                          }}
                        />
                      ))
                    )}
                  </div>
                  {/**---------------low panel------------------------ */}

                  <div className="low-paper">
                    <div className="grid-size-span">
                      Grid Size:{" "}
                      <span>
                        {rowNumber}x{colNumber}
                      </span>
                    </div>

                    <div className="speed">
                      Interval: <span>{parseInt(speed)}ms</span>
                    </div>

                    <div className="generation">
                      Generation:{" "}
                      <span className="block-span ">{generation}</span>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </Row>
          {/****************** Buttons panel ************* */}
          <Row className="btn-media" style={{ marginLeft: "1rem" }}>
            <div>
              <div className="btns">
                {/**-------------start ------------ */}
                <Button
                  className="btn"
                  variant="contained"
                  color="secondary"
                  onClick={hangleStartChange}
                  style={{
                    marginRight: "0.4rem",
                    color: "white",
                    height: "2.7rem",
                  }}
                >
                  start
                </Button>

                {/**-------------stop------------ */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStopChange}
                  style={{ marginRight: "0.4rem", height: "2.7rem" }}
                >
                  stop
                </Button>

                {/**-------------next step------------ */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNextStepChange}
                  style={{ marginRight: "0.4rem", height: "2.7rem" }}
                >
                  next
                </Button>

                {/**-------------random------------ */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRandomGridChange}
                  style={{ marginRight: "0.4rem", height: "2.7rem" }}
                >
                  random
                </Button>

                {/**-------------clear------------ */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClearChange}
                  style={{ marginRight: "0.7rem", height: "2.7rem" }}
                >
                  clear
                </Button>
                {/**---------------------Speed------------------------------ */}
                <div style={{ width: "6rem", marginRight: "0.5rem" }}>
                  <Typography id="speed-slider" gutterBottom>
                    fast &nbsp; &nbsp; &nbsp; slow
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
                  style={{ marginRight: "0.4rem", widht: "4rem" }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    GrSize
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
                  style={{ marginRight: "0.4rem", widht: "3rem" }}
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
                    <MenuItem value={"pulsarGen"}>Pulsar</MenuItem>
                    <MenuItem value={"gliderGun"}>GliderGun</MenuItem>
                    <MenuItem value={"queen"}>Queen</MenuItem>
                    <MenuItem value={"spaceShips"}>Space Ships</MenuItem>
                    <MenuItem value={"spaceShips123"}>Three Ships</MenuItem>
                    <MenuItem value={"breed1"}>Double Breed</MenuItem>
                    <MenuItem value={"breed"}>Breed</MenuItem>
                    <MenuItem value={"breed3"}>Breed3</MenuItem>
                    <MenuItem value={"acorn"}>Acorn</MenuItem>
                    <MenuItem value={"infiniteRepeat"}>InfiniteRepeat</MenuItem>
                  </Select>
                </FormControl>

                {/**------------------Cell color-------------------------------- */}
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ widht: "1rem" }}
                >
                  <InputLabel id="cell-simple-select-outlined-label">
                    CellColor
                  </InputLabel>
                  <Select
                    labelId="cell-simple-select-outlined-label"
                    id="cell-select-outlined"
                    value={cellColor}
                    onChange={handleCellColorChange}
                    label="cell-color"
                  >
                    <MenuItem value={"#f3004d"}>
                      <div
                        className="cell-color"
                        style={{
                          background: "#f3004d",
                        }}
                      ></div>
                    </MenuItem>
                    <MenuItem value={"#3747ac"}>
                      <div
                        className="cell-color"
                        style={{
                          background: "#3747ac",
                        }}
                      ></div>
                    </MenuItem>
                    <MenuItem value={"#43a646"}>
                      <div
                        className="cell-color"
                        style={{
                          background: "#43a646",
                        }}
                      ></div>
                    </MenuItem>
                    <MenuItem value={"#9123a7"}>
                      <div
                        className="cell-color"
                        style={{
                          background: "#9123a7",
                        }}
                      ></div>
                    </MenuItem>
                    <MenuItem value={"#0de7b4"}>
                      <div
                        className="cell-color"
                        style={{
                          background: "#0de7b4",
                        }}
                      ></div>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Row>
        </Col>
        {/**--------------Description column---------------------- */}
        <Col className="col-Description">
          <GameDescription />
        </Col>
      </Row>
    </Container>
  );
};

export default GridContainer;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(74),
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
