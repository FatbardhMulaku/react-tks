import React, { useState, useCallback, useEffect } from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavList from "./NavList/NavList";
import LoginNav from "../LoginNav/LoginNav";
import Logo from "../../UI/Logo/Logo";
import DrawerToggle from "../DrawerToggle";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import "./Toolbar.css";
import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import SearchInput from "../../UI/Input/Search";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    alignItems: "center",
    paddingTop: "12px",
    color:'black'
  },
  box1: {
    boxShadow: "none ",
    backgroundColor:(props) => props.Bcolor,
    transition: "all 0.6s ease-out",
    padding: "0 0 18px",
    top: "auto",
    color:"black"
  },
  box2: {
    boxShadow:
      "0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f ",
    backgroundColor: "#fff !important ",
    transition: "all 0.4s ease-in",
    padding: "0 0 8px",
    top: "auto",
  },
  [theme.breakpoints.down("xs")]: {
    box1: {
      padding: "0 0 5px !important",
    },
    box2: {
      padding: "0 !important",
    },
    appBar: {
      padding: "3px 0",
    },
  },
}));

const Toolbar = (props) => {
  const classes = useStyles(props);
  const { windowp } = props;
  const [isSearch, setisSearch] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  const toggleSearch = () => {
    setisSearch(!isSearch);
  };

  const closeSearch = () => {
    setisSearch(false);
  };

  const handleScroll = useCallback((e) => {
    closeSearch();
  }, []);

  useEffect(() => {
    if (isSearch) {
      window.addEventListener("scroll", (e) => handleScroll(e));

      return () => {
        window.removeEventListener("scroll", (e) => handleScroll(e));
      };
    }
  }, [handleScroll, isSearch]);

  return (
    <AppBar className={trigger ? classes.box2 : classes.box1}>
      <SearchInput isSearch={isSearch} />
      <Container maxWidth="xl" className={classes.appBar}>
        <Logo
          logo={trigger ? "black_logo" : "white_logo"}
          text={trigger ? "col_black" : "col_white"}
        />
        <div className="DesktopOnly col_black">
          <NavList />
        </div>
        <div className="searchIcon">
          <SearchIcon
            toggleSearch={toggleSearch}
            isSearch={isSearch}
            closeSearch={closeSearch}
          />
          <div className="d-login">
            <LoginNav trigger={trigger} />
          </div>
        </div>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} />
        </div>
      </Container>
    </AppBar>
  );
};

export default Toolbar;
