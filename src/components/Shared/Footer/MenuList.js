import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const MenuList = (props) => {
  return (
    <div className="col-sm-6 col-md-3">
      <h2 className="text-white footer-list-text">{props.title} </h2>
      <ul className="footer-list">
        {props.list.map((item, index) => (
          <li key={index}>
            <Link to={`/${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
