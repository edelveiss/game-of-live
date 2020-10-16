import React from "react";
import GridContainer from "./components/GridContainer";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <GridContainer />
    </div>
  );
}

export default App;
