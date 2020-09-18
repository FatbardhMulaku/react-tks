import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => (
  <React.Fragment>
    <Link to="/" className="logo ">
      <img src={logo} className="img" alt="KosovaOutsource" />
      <span className="logo-name">KosovaOutsource</span>
    </Link>
  </React.Fragment>
);

export default Logo;
