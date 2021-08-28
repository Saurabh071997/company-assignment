import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  colorDiv: {
    backgroundColor: "#E4E4E7",
    position: "absolute",
    width: "30%",
    right: "0em",
    height: "12vh",
    borderTopLeftRadius: "2.25rem",
    borderBottomLeftRadius: "2.25rem",
  },

  imgDiv: {
    padding: "0.65rem",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    height: "10rem",
    marginBottom: "0.5rem",
  },

  imgTeam: {
    borderRadius: "50%",
    width: "100%",
  },

  social: {
    height: "1.35rem",
    width: "1.35rem",
    margin: "0rem 0.25rem",
    color: "#D4D4D8",
    cursor: "pointer",
  },
}));
