import { Typography, Container, Grid } from "@material-ui/core";
import { FeatureCard } from "./FeatureCard";

const { features } = require("../../utils/features.json");

export const Features = () => {
  return (
    <>
      <div className="height100">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Our Features
        </Typography>
        <Typography
          align="center"
          gutterBottom
          style={{ color: "#3F3F46", marginBottom: "1.5rem" }}
        >
          Check out our list of awesome features below
        </Typography>

        <Container maxWidth="md">
          <Grid container direction="row" wrap="wrap" spacing={1}>
            {features.map((item) => {
              return <FeatureCard key={item._id} item={item} />;
            })}
          </Grid>
        </Container>
      </div>
      <div className="height10"></div>
    </>
  );
};
