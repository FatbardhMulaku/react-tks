import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "./MobileMenu.css";
import { paramCase } from "change-case";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    margin: "0 !important",
    "&:before": {
      height: "0",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accSummary: {
    padding: "4px 10px",
    "& > .MuiAccordionSummary-content": {
      margin: "0",
    },
    "& > .MuiIconButton-root": {
      padding: "1px",
    },
    "& > .MuiIconButton-edgeEnd": {
      marginLeft: "0",
      marginRight: "0",
    },

    minHeight: "100% !important",
  },
  accDetails: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#f8f8f8",
    margin: "0 10px",
    padding: "5px 10px",
  },
  litsItem: {
    padding: "5px 10px",
  },
  listText: {
    backgroundColor: "#f5f5f5a6 !important",
  },
}));

const DropItem = (props) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <ListItem button className={classes.litsItem}>
        <ListItemText className={classes.listText}>
          <AccordionSummary
            className={classes.accSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.name}
            id={props.name}
          >
            <Link to="/service" className="link mb-0">
              {props.name}
            </Link>
          </AccordionSummary>
        </ListItemText>
      </ListItem>
      <AccordionDetails className={classes.accDetails}>
        {props.items.map((item, index) => (
          <Link
            key={index}
            to={`/${paramCase(item.link)}`}
            onClick={props.drawerToggle}
            className="link subMenu_text "
          >
            {item.name}
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default DropItem;
