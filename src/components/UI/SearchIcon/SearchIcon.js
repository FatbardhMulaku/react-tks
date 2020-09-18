import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none",
    },
  },
  icon: {
    color: "white",
  },
});

const SearchBtn = (props) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button}>
      <SearchIcon fontSize="large" className={classes.icon} />
    </IconButton>
  );
};

export default SearchBtn;
