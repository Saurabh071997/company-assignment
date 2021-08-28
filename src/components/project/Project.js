import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./projectStyle";
import { ProjectCard } from "./ProjectCard";
import { BlogCard } from "./BlogCard";
const { projects } = require("../../utils/projects.json");
const { blogs } = require("../../utils/blogs.json");

export const Project = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionContainer}>
        <Container maxWidth="md">
          <div className="height5"></div>
          <Typography
            align="left"
            variant="h4"
            style={{ fontWeight: "bolder" }}
          >
            The Project Blog
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#52525B", marginLeft: "0.5em" }}
          >
            Design and layouts to help you with your app.
          </Typography>
          <div className="height5"></div>

          <Grid
            container
            direction="row"
            wrap="wrap"
            justifyContent="space-between"
            spacing={3}
          >
            {projects.map((item) => {
              return <ProjectCard key={item._id} item={item} />;
            })}
          </Grid>
          <div className="height5"></div>
          <Grid
            container
            direction="row"
            wrap="wrap"
            justifyContent="space-between"
            spacing={3}
          >
            {blogs.map((item) => {
              return <BlogCard key={item._id} item={item} />;
            })}
          </Grid>
        </Container>
      </div>
      <div className="height15"></div>
    </>
  );
};
