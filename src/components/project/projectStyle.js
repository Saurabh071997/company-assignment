import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  sectionContainer: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(#D4D4D8,#ffffff)",
  },

  projectImgDiv: {
    height: "300px",
  },

  projectImg: {
    height: "100%",
    width: "100%",
  },

  projectContentDiv: {
    position: "relative",
    padding: "1rem",
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  },

  projectTag: {
    position: "absolute",
    display: "inline-block",
    backgroundColor: "whitesmoke",
    padding: "0.25rem 1rem",
    borderRadius: "2rem",
    top: "-1em",
    left: "1em",
    fontSize: "0.65rem",
  },

  blogImgDiv: {
    height: "150px",
  },

  blogImg: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  },

  contentBorder: {
    border: "0.25px solid #D4D4D8",
    borderTop: "none",
  },
}));
