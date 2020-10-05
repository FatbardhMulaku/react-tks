import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const MenuList = (props) => {
  const scrollToTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-2">
      <h2 className="text-white footer-list-text text-capitalize">
        {props.title}
      </h2>
      <ul className="footer-list">
        {props.list.map((item, index) => (
          <li key={index}>
            <Link onClick={scrollToTop} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
