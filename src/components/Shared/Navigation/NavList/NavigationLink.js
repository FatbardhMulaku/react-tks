import React from "react";
import "./styles/NavigationLink.css";
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  return (
    <li className="navigation_link">
      <NavLink
        exact
        to={props.link}
        activeClassName="active"
        onClick={props.clicked}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
