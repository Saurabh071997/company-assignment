import { Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./teamStyle";
import useWindowSize from "../../hooks/useWindowSize";
import { TeamCard } from "./TeamCard";

const { team } = require("../../utils/team.json");

export const Team = () => {
  const classes = useStyles();
  const [, width] = useWindowSize();
  return (
    <>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            wrap="wrap"
            justifyContent="space-between"
          >
            <Grid item md={6} xs={12}>
              <Typography
                variant="body1"
                align="left"
                style={{ color: "#3B82F6" }}
              >
                OUR TEAM
              </Typography>
              <Typography
                variant="h4"
                align="left"
                style={{ fontWeight: "bold" }}
              >
                An incredible team of amazing individuals
              </Typography>
            </Grid>
            {width >= 700 && (
              <Grid item md={6} xs={12}>
                <div className={classes.colorDiv}></div>
              </Grid>
            )}
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            style={{ marginTop: "1rem" }}
          >
            {team.map((item) => {
              return <TeamCard key={item._id} item={item} />;
            })}
          </Grid>
        </Container>
      </div>
      <div style={{ height: "10vh" }}></div>
    </>
  );
};
