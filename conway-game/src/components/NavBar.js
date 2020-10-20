import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import pulsar from "../assets/pulsar.gif";
import conway from "../assets/conway.jpeg";

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <div className="nav-bar">
              {/***************** Conway's image ********************/}
              <div className="gif-image">
                <div className="conway" style={{ marginLeft: "2rem" }}>
                  <img src={conway} alt="conway" />
                </div>
                {/***************** pulsar image ********************/}
                <div className="pulsar" style={{ marginLeft: "2rem" }}>
                  <img src={pulsar} alt="pulsar" />
                </div>
              </div>
              {/***************** title ********************/}
              <div className="title">CONWAY'S GAME OF LIFE</div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
