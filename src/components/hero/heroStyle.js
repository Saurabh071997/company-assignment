import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  heroContainer: {
    display: "flex",
    minHeight: "100vh",
  },

  heroTitle: {
    fontWeight: "bold",
  },

  mainBtnDiv: {
    position: "relative",
  },

  btn: {
    borderRadius: "2rem",
    backgroundColor: "#6D28D9",
    color: "white",
    padding: "0.5rem 2rem",
    fontSize: "1.15rem",
    "&:hover": {
      backgroundColor: "#6D28D9",
    },
  },

  btnOffer: {
    position: "absolute",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "#4ADE80",
    borderRadius: "2rem",
    padding: "0.25rem 1rem",
    right: "20%",
    top: "-1.15em",
  },

  companyData: {
    margin: "2rem auto",
  },

  container: {
    minHeight: "100vh",
  },

  contentList: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0rem",
  },

  point: {
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: "#8B5CF6",
    borderRadius: "50%",
    marginRight: "0.5rem",
  },

  contentListItem: {
    display: "flex",
    marginBottom: "0.25rem",
  },
}));
