import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./ServicePop/Service.css";
import "./AboutPop/About.css";
import { MenuItem } from "@material-ui/core";
const PopperItem = (props) => {
  return (
    <MenuItem>
      <div className={`popper_item_icon ${props.icon}`}></div>
      <Link to={`/${props.link}`}> {props.name} </Link>
    </MenuItem>
  );
};

export default PopperItem;
