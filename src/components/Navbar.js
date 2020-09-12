import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaAngleDoubleRight } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__icon">
          <Link to="/" className="navbar__icon--main">
            <FaAngleDoubleRight />
            KosovaOutsource.
          </Link>
        </div>
        <div className="navbar__menu">
          <div className="navbar__menu--item">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__menu--icon">
            <Link to="/">
              <AiOutlineSearch className="search-icon" />
            </Link>
            <Link to="/">
              <FaBars className="search-icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
