import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#006fff",
    borderRadius: "10px",
    width: "100%",
    padding: "8px 15px",
    margin: "17px 0",
    textDecoration: "none",
    textTransform: (props) => props.text,
    color: "#fff",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#0468e9",
      color: "#fff",
    },
  },
});

const ModalButton = (props) => {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        type="submit"
        className={classes.btn}
        onClick={props.clicked}
      >
        {props.name}
      </Button>
    </React.Fragment>
  );
};

export default ModalButton;
