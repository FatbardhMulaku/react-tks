import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from './../../assets/Home/KoLogo.svg';
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div data-aos="fade-down-right" className="navbar__icon">
          <Link to="/" className="navbar__icon--main">
            <img src={Logo} alt="logo" className="Logo-kosovaoutsource"/>
          </Link>
        </div>
        <div data-aos="fade-down-left" className="navbar__menu">
          <div className="navbar__menu--item">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About &#11206;</Link>
              </li>
              <li>
                <Link to="/">Industries</Link>
              </li>
              <li>
                <Link to="/">Case studies</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/Contact">Contact us</Link>
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
