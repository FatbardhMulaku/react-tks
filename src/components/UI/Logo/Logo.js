import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/" className={`logo ${props.linkCss}`}>
      <div className={`img_logo ${props.logo}`}></div>
      <span className={`logo-name ${props.text}`}>KosovaOutsource</span>
    </Link>
  );
};

export default Logo;
