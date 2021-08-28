import { Typography, Container, Button, Grid } from "@material-ui/core";
import useStyles from "./heroStyle";
import useWindowSize from "../../hooks/useWindowSize";
const { companies } = require("../../utils/companies.json");

export const Hero = () => {
  const classes = useStyles();
  const [, width] = useWindowSize();
  return (
    <>
      <div className={classes.heroContainer}>
        <Container maxWidth="sm">
          <div style={{ height: "10vh" }}></div>
          <Typography variant="h2" align="center" className={classes.heroTitle}>
            Start Crafting Your
          </Typography>
          <Typography
            align="center"
            variant="h2"
            className={classes.heroTitle}
            style={{ color: "#7C3AED" }}
          >
            Next Great Idea
          </Typography>

          <Container maxWidth="xs" style={{ marginTop: "2rem" }}>
            <Typography align="center" style={{ color: "#71717A" }}>
              Simplifying the creation of landing pagesm blog pages, application
              pages and so much more
            </Typography>
          </Container>

          <div
            style={{
              position: "relative",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <Button variant="contained" className={classes.btn}>
                Purchase Now
              </Button>
            </div>

            <div className={classes.btnOffer}>only $15/mo</div>
          </div>

          <Typography
            align="center"
            variant="body1"
            style={{ marginTop: "1rem", color: "#6D28D9", cursor: "pointer" }}
          >
            Learn More
          </Typography>
        </Container>
      </div>

      <div className={classes.companyData}>
        <Typography
          align="center"
          variant="subtitle1"
          gutterBottom
          style={{ color: "#333", fontWeight: "bolder" }}
        >
          TRUSTED BY TOP-LEADING COMPANIES
        </Typography>

        <Container maxWidth={width<=700 ? false : 'md'} >
          <div className="company-list">
            {companies.map((item) => {
              return (
                <div key={item._id} className="company-div">
                  <img src={item.img} alt="img" className="company-img" />
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      <div style={{ minHeight: "10vh" }}></div>
      <div className={classes.container}>
        <Container maxWidth="md">
          <Grid
            container
            direction={width <= 700 ? "column" : "row"}
            wrap="wrap"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <img
                src="https://dewzilla.com/wp-content/uploads/2020/07/recoloured-1260357841.png"
                alt="img"
                className="content-img"
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingLeft: "1rem" }}>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold" }}
                align="left"
              >
                Boost Productivity
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#71717A", margin: "0.5rem 0rem" }}
                align="left"
              >
                Build an atmosphere that creates productivity in your
                organisation and your company culture.
              </Typography>
              <div className={classes.contentList}>
                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Maximize productivity and growth
                  </Typography>
                </div>

                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Speed past your competition
                  </Typography>
                </div>

                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Learn the top techniques
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction={width <= 700 ? "column-reverse" : "row"}
            wrap="wrap"
            alignItems="center"
            style={{ marginTop: "5rem" }}
          >
            <Grid item xs={12} md={6} style={{ paddingLeft: "1rem" }}>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold" }}
                align="left"
              >
                Automated Tasks
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#71717A", margin: "0.5rem 0rem" }}
                align="left"
              >
                Save time and money with our revolutionary services. We are the
                leaders in the industry.
              </Typography>
              <div className={classes.contentList}>
                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Automates task management workflow
                  </Typography>
                </div>

                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Detailed analytics for your data
                  </Typography>
                </div>

                <div className={classes.contentListItem}>
                  <div className={classes.point}></div>
                  <Typography variant="body2" style={{ color: "#A1A1AA" }}>
                    Some awesome integrations
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://mk0worklifepsycn94gb.kinstacdn.com/wp-content/uploads/2018/11/WLP_web_image-11.png"
                alt="img"
                className="content-img"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
