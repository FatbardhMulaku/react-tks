import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const scrollToTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <React.Fragment>
      <Link onClick={scrollToTop} to="/" className="logo ">
        <div className={`img_logo ${props.logo}`}></div>
        <span className={`logo-name ${props.text}`}>KosovaOutsource</span>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
