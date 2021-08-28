import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./navigationStyle";
import { useState } from "react";

export const MobileNavigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const classes = useStyles();

  function menuClickHandler() {
    setShowSideBar((prev) => !prev);
  }

  function SideBar() {
    return (
      <>
        <div className="sidebar">
          <Typography variant="h4" gutterBottom className={classes.optionMob}>
            Home
          </Typography>
          <Typography variant="h4" gutterBottom className={classes.optionMob}>
            Features
          </Typography>
          <Typography variant="h4" gutterBottom className={classes.optionMob}>
            Blog
          </Typography>
          <Typography variant="h4" gutterBottom className={classes.optionMob}>
            Contact
          </Typography>
          <Typography variant="h4" gutterBottom className={classes.optionMob}>
            Search
          </Typography>
          <div style={{ height: "5vh" }}></div>
          <hr />
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>

          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#7C3AED",
              borderRadius: "2.5rem",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Sign Up
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {showSideBar && <SideBar />}

      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Container
            style={{
              borderBottom: "0.25px solid #D4D4D8",
              padding: "0.5rem",
            }}
          >
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    marginTop: "0.5rem",
                  }}
                >
                  nullBrains<span style={{ color: "#8B5CF6" }}>.</span>
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={menuClickHandler}>
                  <MenuIcon style={{ height: "2rem", width: "2rem" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
