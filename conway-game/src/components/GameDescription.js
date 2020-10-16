import React from "react";
const GameDescription = () => {
  return (
    <div className="description">
      <br></br>
      <h2>About Game of Life</h2>
      <p>
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
      <br></br>
      <h2> Game of Life Rules:</h2>
      <div className="ul-rules">
        <ul>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default GameDescription;
