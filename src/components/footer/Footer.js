import { Container, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import SportsBasketballOutlinedIcon from "@material-ui/icons/SportsBasketballOutlined";
import CopyrightIcon from "@material-ui/icons/Copyright";
import useStyles from "./footerStyle";

export const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          wrap="wrap"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              About
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              Blog
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              Team
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              Pricing
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              Contact
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" className={classes.txtColor}>
              Terms
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xs" style={{ margin: "1.5rem auto" }}>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item>
            <FacebookIcon className={classes.footerIcon} />
          </Grid>

          <Grid item>
            <InstagramIcon className={classes.footerIcon} />
          </Grid>

          <Grid item>
            <TwitterIcon className={classes.footerIcon} />
          </Grid>

          <Grid item>
            <GitHubIcon className={classes.footerIcon} />
          </Grid>

          <Grid item>
            <SportsBasketballOutlinedIcon className={classes.footerIcon} />
          </Grid>
        </Grid>
      </Container>

      <Typography
        variant="body1"
        align="center"
        gutterBottom
        className={classes.txtColor}
      >
        <CopyrightIcon style={{position:'relative',top:'0.1em', height:'1rem'}}/> 2021 SomeCompany, Inc. All rights reserved.
      </Typography>
      <div className="height5"></div>
    </>
  );
};
