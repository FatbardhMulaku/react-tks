import React from "react";
import "./styles/NavigationLink.css";
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  return (
    <li className="navigation_link">
      <NavLink
        exact
        to={props.link}
        className={props.trigger ? "a_black" : "a_white"}
        activeClassName="active"
        // onClick={props.clicked}
        onClick={props.scrollToTop}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
