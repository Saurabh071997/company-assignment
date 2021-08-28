import { Typography, Grid, IconButton } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import CodeIcon from "@material-ui/icons/Code";
import ViewQuiltOutlinedIcon from "@material-ui/icons/ViewQuiltOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import useStyles from "./featureStyle";

const icons = {
  f01: <DescriptionOutlinedIcon />,
  f02: <NotificationsOutlinedIcon />,
  f03: <DraftsOutlinedIcon />,
  f04: <CodeIcon />,
  f05: <ViewQuiltOutlinedIcon />,
  f06: <ConfirmationNumberOutlinedIcon />,
};

export const FeatureCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item key={item._id} xs={12} md={4}>
      <div className={classes.featureCard}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              disabled={true}
              style={{
                backgroundColor: "#3B82F6",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              {icons[item._id]}
            </IconButton>
          </div>
          <Typography variant="subtitle1" align="center" gutterBottom>
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            className={classes.description}
          >
            {item.description}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
