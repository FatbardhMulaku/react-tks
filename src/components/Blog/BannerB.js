import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BannerB.css";
import AOS from "aos";
export class BannerB extends Component {
  componentDidMount() {
    AOS.init({
      offset: 400,
      easing: "ease",
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="bannerBlog">
        <div className="banner__textBlog">
          <h1>
            Why KosovaOutsource <br /> is the best software company in region.
          </h1>
          <p>
            Our costumers say always that KosovaOutsource is <br />
            the best software company in Kosova ever.
          </p>

          <div className="div-banner-btnBlog">
            <Link to="/" className="banner-btnBlog">
              Learn More
            </Link>

       
          </div>

        </div>
        <div
          className="banner__imgBlog"
        >
          <div className="banner__imgLeftBlog">
            <div className="banner-img1Blog" />
          </div>
          <div className="banner__imgRightBlog">
            <div className="banner-img3Blog" />
            <div className="banner-img4Blog" />
          </div>
        </div>
      </div>
    );
  }
}

export default BannerB;
