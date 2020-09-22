import React, { Component } from "react";
/* import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"; */
import "./SectionH2.css";
import SectionH2items from "./SectionH2items";
import Carousel from 'react-elastic-carousel';


export class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Explore what we offer</h1>
        <Carousel itemsToShow={1} showArrows={false}
            className="slideri"
          >
            <div>
              {" "}
              <SectionH2items />
            </div>
            <div>
              {" "}
              <SectionH2items />
            </div>
            <div>
              {" "}
              <SectionH2items />
            </div>
          </Carousel>
      </div>
    );
  }
}

export default Services;
