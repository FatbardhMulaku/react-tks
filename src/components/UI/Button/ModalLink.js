import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#006fff",
    borderRadius: "10px",
    width: "100%",
    padding: "8px 15px",
    margin: "17px 0",
    textDecoration: "none",
    textTransform: "capitalize",
    color: "#fff",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#0468e9",
      color: "#fff",
    },
  },
  icon: {},
});

const ModalLink = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.btn}
      component="a"
      href={props.linkPath}
    >
      <FacebookIcon />
      {props.name}
    </Button>
  );
};

export default ModalLink;
