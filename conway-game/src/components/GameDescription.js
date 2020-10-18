import React from "react";
import surface from "../assets/surface.gif";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "reactstrap";
const GameDescription = () => {
  return (
    <div className="description">
      <h2>About Game of Life</h2>
      <p>
        <img
          src={surface}
          alt="Surface"
          style={{
            width: "14rem",
            height: "10rem",
            // width: "20%",
            // height: "15%",
            marginLeft: "1rem",
            float: "right",
            marginRight: "2rem",
          }}
        />
        The Game of Life is a type of cellular automaton, created by British
        mathematician John Conway in 1970. It is a zero-player game, meaning
        that its evolution is determined by its initial state, requiring no
        further input.
      </p>
      <p>
        Common pattern types include: still lifes, which do not change from one
        generation to the next; oscillators, which return to their initial state
        after a finite number of generations; and spaceships, which translate
        themselves across the grid.
      </p>

      <h2> Game of Life Rules:</h2>
      <div className="ul-rules">
        <ul>
          <li>
            Any live cell with <strong>fewer than two</strong> live neighbours
            <strong> dies</strong>.
          </li>
          <li>
            Any live cell with{" "}
            <strong>two or three live neighbours lives</strong> on to the next
            generation.
          </li>
          <li>
            Any live cell with <strong>more than three</strong> live neighbours{" "}
            <strong>dies</strong>.
          </li>
          <li>
            Any <strong>dead</strong> cell with exactly{" "}
            <strong>three live</strong> neighbours becomes a{" "}
            <strong>live </strong>
            cell.
          </li>
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns"
            className="read-more"
            target="_blank"
          >
            Read more from Wikipedia <i class="fas fa-chevron-right"></i>
          </a>
        </ul>
      </div>
      <Row
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "5rem",
          paddingBottom: "1rem",
        }}
      >
        <Box mt={5}>
          <Copyright />
        </Box>
      </Row>
    </div>
  );
};
export default GameDescription;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Tatiana Zhizhimontova "}

      {new Date().getFullYear()}
    </Typography>
  );
}
