import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none",
    },
    "& span > svg": {
      fontSize: "30px",
    },
  },
  white: {
    color: "#fff",
  },
  black: {
    color: "#000",
  },
});

const SearchBtn = (props) => {
  const classes = useStyles();

  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <IconButton className={classes.button} onClick={props.toggleSearch}>
      {props.isSearch ? (
        <CloseIcon
          className={trigger ? classes.black : classes.white}
          fontSize="large"
        />
      ) : (
        <SearchIcon
          className={trigger ? classes.black : classes.white}
          fontSize="large"
        />
      )}
    </IconButton>
  );
};

export default SearchBtn;