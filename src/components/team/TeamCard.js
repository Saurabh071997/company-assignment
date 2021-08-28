import { Typography, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./teamStyle";

export const TeamCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item key={item._id} xs={6} md={3}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <div className={classes.imgDiv} style={{ backgroundColor: item.bg }}>
          <img src={item.img} alt="team" className={classes.imgTeam} />
        </div>

        <Typography align="center" variant="body1">
          {item.name}
        </Typography>
        <Typography align="center" variant="body1" style={{ color: "#3B82F6" }}>
          {item.designation}
        </Typography>
        <div style={{ display: "inline-block", margin: "0rem auto" }}>
          <div style={{ display: "flex" }}>
            <TwitterIcon className={classes.social} />
            <GitHubIcon className={classes.social} />
          </div>
        </div>
      </div>
    </Grid>
  );
};
