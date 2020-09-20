import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const Logo = (props) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: window ? window() : undefined,
  });

  return (
    <React.Fragment>
      <Link to="/" className="logo ">
        <div
          className={`img_logo ${trigger ? "black_logo" : "white_logo"}`}
        ></div>
        <span className={`logo-name ${trigger ? "col_black" : "col_white"}`}>
          KosovaOutsource
        </span>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
