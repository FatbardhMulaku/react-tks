import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <React.Fragment>
      <Link to="/" className="logo ">
        <div className={`img_logo ${props.logo}`}></div>
        <span className={`logo-name ${props.text}`}>KosovaOutsource</span>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
