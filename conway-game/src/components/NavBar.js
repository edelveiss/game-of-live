import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import pulsar from "../assets/pulsar.gif";
import conway from "../assets/conway.jpeg";

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

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <div className="nav-bar">
              <div className="gif-image">
                <div className="conway" style={{ marginLeft: "2rem" }}>
                  <img
                    src={conway}
                    alt="conway"
                    style={{
                      // border: "1px solid #ddd",
                      borderRadius: "4px",
                      // padding: "5px",
                      width: "90px",
                    }}
                  />
                </div>
                <div className="pulsar" style={{ marginLeft: "2rem" }}>
                  <img
                    src={pulsar}
                    alt="pulsar"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "3px",
                      width: "100px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  letterSpacing: "3px",
                  fontFamily: "Lato",
                  fontSize: "35px",
                }}
              >
                CONWAY'S GAME OF LIFE
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
