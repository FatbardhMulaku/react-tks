import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BannerB.css';

export class BannerB extends Component {
    render() {
        return (
            <div className="banner">
            <div data-aos="fade-right" data-aos-delay="400" className="banner__text">
                <h1>Why KosovaOutsource <br/> is the best software company in region.</h1>
              <p>
                Our costumers say always that KosovaOutsource is <br/> 
                the best software company in Kosova ever.
              </p>
    
              <div className="div-banner-btn">
                <Link to="/" className="banner-btn">
                  Learn More
                </Link>
              </div>
    
            </div>
            <div data-aos="fade-left" data-aos-delay="400" className="banner__img">
                <div className="banner__imgLeft">
                    <div className="banner-img1"/>
                    <div className="banner-img2"></div>
                </div>
                <div className="banner__imgRight">
                    <div className="banner-img3"/>
                    <div className="banner-img4"/>
                </div>
            </div>
          </div>
        )
    }
}

export default BannerB;
