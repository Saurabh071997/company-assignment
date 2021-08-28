import { Typography, Grid } from "@material-ui/core";
import useStyles from "./projectStyle";

export const ProjectCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item key={item._id} xs={12} sm={6} md={4}>
      <div className="flexCol projectDiv">
        <div className={classes.projectImgDiv}>
          <img
            src={item.img}
            alt="project"
            className={`${classes.projectImg} projectItemImg`}
          />
        </div>

        <div
          className={classes.projectContentDiv}
          style={{ backgroundColor: item.color }}
        >
          <div className={classes.projectTag} style={{ color: item.color }}>
            {item.tag}
          </div>
          <Typography
            align="left"
            variant="h4"
            gutterBottom
            style={{ fontWeight: "bold", color: "white" }}
          >
            {item.title}
          </Typography>
          <Typography
            align="left"
            variant="body2"
            style={{ color: "#E4E4E7" }}
            gutterBottom
          >
            {item.detail}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
