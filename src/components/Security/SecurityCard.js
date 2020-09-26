import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "280px",
    padding: "1rem 0",
    margin: "1rem 0",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: " 0 1px 2px rgba(0,0,0,0.15)",
    transition: "$boxShadow 0.3s ease-in-out",
    [theme.breakpoints.between("sm", "md")]: {
      width: "60%",
    },
    "&:hover": {
      boxShadow: "0 4px 7px rgba(0,0,0,0.3)",
    },
  },
}));
const SecurityCard = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} variant="outlined">
      <div className="sectionS2_icons">
        <div className={`img_css sectionS2_icon_${props.index}`}> </div>
      </div>
      <h4 className="font_helvetica font-w-500">{props.title} </h4>
    </Paper>
  );
};

export default SecurityCard;
