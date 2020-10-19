# Conway's Game of Life

Welcome to John Conway's "Game of Life"! This is a computer science
classic from 1970, a program that simulates a _cellular automaton_
(plural _automata_). It has connections to all kinds of different
aspects of computer science and nature.

![example-patterns](https://media.giphy.com/media/4VVZTvTqzRR0BUwNIH/giphy.gif)

[from Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns)

## Rules

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## MVP Features

- Grid to display cells.
- Cell objects or components that, at a minimum, should have:
  - Properties
    - current state: (alive, dead), (black, white)
    - Clickable/Tappable:
      - can be clicked to allow user to setup initial cell configuration
      - should NOT be clickable while simulation is running
    - Behaviors
      - Toggle state functionality: switch between alive & dead either
        because user manually toggled cell before starting simulation or
        simulation is running and rules of life caused cell to change
        state
- An appropriate data structure to hold a grid of cells that is at least
  25x25. Go as big as you want.
- Text to display current generation # being displayed
  - Utilize a timeout function to build the next generation of cells &
    update the display at the chosen time interval
- Button(s) that start & stop the animation
- Button to clear the grid

This algorithm:

- Implements the following basic steps:
  - For each cell in the current generation's grid:
    1. Examine state of all eight neighbors (it's up to you whether you
       want cells to wrap around the grid and consider cells on the
       other side or not)
    2. Apply rules of life to determine if this cell will change states
    3. When main loop completes:
       1. Swap current and next grids
       2. Repeat until simulation stopped

### Custom Features

- A few sample cell configurations that users can load and run
- An option that creates a random cell configuration that users can
  run
- Additional cell properties, like color or size, and incorporate
  them into your visualization
- Allow users to specify the speed of the simulation
- Provide functionality to manually step through the simulation one
  generation at a time, as opposed to animating automatically
- Allow users to change the dimension of the grid being displayed
- App is deployed to a Vercel hosting service.
