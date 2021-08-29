import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appbar: {
    boxShadow: "none",
  },

  toolbar: {
    backgroundColor: "white",
    padding: "0rem 0.35rem",
  },

  navOptions: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },

  navOptionsDiv: {
    display: "inline-block",
    width: "40%",
  },

  btnSignUp:{
    backgroundColor: "#7C3AED",
    borderRadius: "2.5rem",
    marginLeft: "0.5rem",
    color: "white",
    '&:hover':{
      backgroundColor: "#7C3AED",
    }
  },

  option: {
    margin:'0.25rem 0.35rem',
    color: "#404040",
    cursor: "pointer",
    "&:hover": {
      color: "#7C3AED",
      fontWeight: "bold",
    },
  },

  optionMob:{
      transition:'0.5s',
    "&:active": {
        color: "#7C3AED",
        fontWeight: "bold",
      },
  }
}));
