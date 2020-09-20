import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Service.css";
import {
  ClickAwayListener,
  Grow,
  Paper,
  MenuItem,
  MenuList,
  Popper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > ul": {
      flexFlow: "column",
      alignItems: "start",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  icon: {
    width: "25px",
    height: "25px",
  },
}));

const Service = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={`button ${props.trigger ? "a_black" : "a_white"}`}
      >
        Service <ArrowDropDownIcon className={classes.icon} />
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.root}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={classes.menulist}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/">NavLink 1</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/">NavLink 1</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/">NavLink 1</NavLink>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Service;
