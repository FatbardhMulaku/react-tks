import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    width: "330px",
    height: "115px",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
    margin: "1rem 0",
    borderRadius: 0,
    "&:hover": {
      boxShadow: "0 4px 7px rgba(0,0,0,0.3)",
    },
    transition: "$boxShadow 0.3s ease-in-out",
    "& > p": {
      color: "#b2b2b2",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "270px",
      height: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "120px",
      margin: "1rem",
    },
  },
}));

const CardSlider = (props) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      <div className={props.cardImg}>
        <div className={`img_css ${props.img}`}> </div>
      </div>
      <div className="cardText">
        <h4 className="font_ubuntu col_black font-w-600"> {props.title} </h4>
        <p className="font_ubuntu col_light"> {props.desc} </p>
      </div>
    </Paper>
  );
};

export default CardSlider;
