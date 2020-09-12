import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import logo1 from "./../../img/hero1.png";
import logo2 from "./../../img/hero2.png";
import logo3 from "./../../img/hero3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Banner extends Component {
  
  componentDidMount(){
    AOS.init({
      offset: 400,
      easing: 'ease',
      duration : 2000
    })
  }
  
  render() {
    return (
      <div className="banner">
        <div data-aos="fade-right" data-aos-delay="400" className="banner__text">
          <h1>We are the best Software Company in Kosova.</h1>
          <p>
            We offer professional outsourcing, programming, managment, design or
            any visual or administration work. Contact us for more information
          </p>

          <div className="div-banner-btn">
            <Link to="/" className="banner-btn">
              Learn More
            </Link>
          </div>

        </div>
        <div data-aos="fade-left" data-aos-delay="400" className="banner__img">
            <div className="banner__imgLeft">
                <img src={logo1} alt="" className="banner-img1"/>
                <div className="banner-img2"></div>
            </div>
            <div className="banner__imgRight">
                <img src={logo2} alt="" className="banner-img3"/>
                <img src={logo3} alt="" className="banner-img4"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Banner;
