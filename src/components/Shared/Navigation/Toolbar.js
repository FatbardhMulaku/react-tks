import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavList from "./NavList/NavList";
import Logo from "../../UI/Logo/Logo";
import DrawerToggle from "../DrawerToggle";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import "./Toolbar.css";
import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import SearchInput from "../../UI/Input/Search/Search";
import { useToggle } from "../../../Hooks/useToggle";
const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    alignItems: "center",
    paddingTop: "15px",
  },
  fullList: {
    width: "auto",
  },
  box1: {
    boxShadow: "none ",
    backgroundColor: "transparent ",
    transition: "all 0.7s ease-out",
    padding: "0 0 15px",
    top: "auto !important",
  },
  box2: {
    boxShadow:
      "0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f ",
    backgroundColor: "#fff !important ",
    transition: "all 0.7s ease-in",
    padding: "0 0 10px",
    top: "auto !important",
  },
});

const Toolbar = (props) => {
  const classes = useStyles();
  const { window } = props;
  const [isSearch, setisSearch] = useToggle(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <AppBar color="inherit" className={trigger ? classes.box2 : classes.box1}>
      <SearchInput isSearch={isSearch} />
      <Container maxWidth="lg" className={classes.appBar}>
        <Logo />
        <div className="DesktopOnly col_black">
          <NavList />
        </div>
        <div className="DesktopOnly">
          <SearchIcon toggleSearch={setisSearch} isSearch={isSearch} />
        </div>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div>
      </Container>
    </AppBar>
  );
};

export default Toolbar;
