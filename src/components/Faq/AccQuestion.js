import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FcExpand } from "react-icons/fc";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem auto",
    borderRadius: "6px",
    "&:before": {
      height: "0",
      content: "none",
    },
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 4px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  accSummary: {
    "& > .MuiAccordionSummary-content": {
      margin: "20px 0",
      color:"black"
    },
  },
  question: {
    fontSize: "1rem",
    fontWeight: "600",
  },
}));

const AccQuestion = (props) => {
  const classes = useStyles();

  return (
    <Accordion
      className={classes.root}
      expanded={props.expanded === props.name + props.index}
      onChange={props.handleChange(props.name + props.index)}
    >
      <AccordionSummary
        expandIcon={<FcExpand style={{ fill: 'black' }} className="acc_icon" />}
        id={props.name + props.index}
        aria-controls={props.name}
        className={classes.accSummary}
      >
        <Typography className={classes.question}>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography> {props.answer} </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccQuestion;
