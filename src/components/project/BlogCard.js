import { Typography, Grid } from "@material-ui/core";
import useStyles from "./projectStyle";

export const BlogCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item key={item._id} xs={12} sm={6} md={4}>
      <div className="flexCol">
        <div className={classes.blogImgDiv}>
          <img src={item.img} alt="blog" className={classes.blogImg} />
        </div>

        <div
          className={`${classes.projectContentDiv} ${classes.contentBorder}`}
        >
          <div
            className={classes.projectTag}
            style={{
              color: "whitesmoke",
              backgroundColor: item.color,
            }}
          >
            {item.tag}
          </div>
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            style={{ color: "#333", fontWeight: "bold" }}
          >
            {item.title}
          </Typography>
          <Typography
            align="left"
            style={{ color: "#71717A", fontSize: "0.75rem" }}
          >
            {item.detail}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
