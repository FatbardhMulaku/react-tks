import React from "react";
import "./styles/NavigationLink.css";
import { NavLink } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const NavigationLink = (props) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });
  return (
    <li className="navigation_link">
      <NavLink
        exact
        to={props.link}
        className={trigger ? "a_black" : "a_white"}
        activeClassName="active"
        onClick={props.clicked}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
