import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none",
    },
  },
  white: {
    color: "#fff",
  },
  black: {
    color: "#000",
  },
});
const DrawerToggle = (props) => {
  const classes = useStyles();

  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });
  return (
    <IconButton className={classes.button} onClick={props.clicked}>
      <DehazeIcon
        fontSize="large"
        className={trigger ? classes.black : classes.white}
      />
    </IconButton>
  );
};

export default DrawerToggle;
