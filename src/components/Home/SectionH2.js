import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./SectionH2.css";
import SectionH2items from "./SectionH2items";


export class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Explore what we offer</h1>
          <AwesomeSlider
            organicArrows={false}
            cssModule={{ backgroundColor: "#fff" }}
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
          </AwesomeSlider>
      </div>
    );
  }
}

export default Services;
