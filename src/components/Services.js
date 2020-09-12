import React, { Component } from "react";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Services.css";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <PhoneIphoneOutlinedIcon fontSize={'large'}/>,
        title: "Mobile design",
        info:
          "We will create a beatiful and working design for you idea",
      },
      {
        icon: <DashboardOutlinedIcon fontSize={'large'}/>,
        title: "Web Design",
        info:
        "We will create a beatiful and working design for you idea",
      },
      {
        icon: <FilterDramaOutlinedIcon fontSize={'large'}/>,
        title: "Cloud",
        info:
        "We will create a beatiful and working design for you idea",
      },
      {
        icon: <GraphicEqOutlinedIcon fontSize={'large'}/>,
        title: "Branding",
        info:
        "We will create a beatiful and working design for you idea",
      },
      {
        icon: <SettingsApplicationsOutlinedIcon fontSize={'large'}/>,
        title: "Web services",
        info:
        "We will create a beatiful and working design for you idea",
      },
      {
        icon: <DescriptionOutlinedIcon fontSize={'large'}/>,
        title: "Managment",
        info:
          "We will create a beatiful and working design for you idea",
      },
    ],
  };
  render() {
      const eBardh = {
          backgroundColor: 'white'
      };
    return (
      <div className="services">
          <h1>Explore what we offer</h1>

         
  <AwesomeSlider organicArrows={false} cssModule={{eBardh}} className="slideri">
    <div> <div className="grid">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <i className="service-icon" >{item.icon}</i>
                  <p className="service-title">{item.title}</p>
                  <p className="service-info">{item.info}</p>
                </article>
              );
            })}
          </div></div>
    <div> <div className="grid">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <i className="service-icon">{item.icon}</i>
                  <p className="service-title">{item.title}</p>
                  <p className="service-info">{item.info}</p>
                </article>
              );
            })}
          </div></div>
    <div> <div className="grid">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <i className="service-icon">{item.icon}</i>
                  <p className="service-title">{item.title}</p>
                  <p className="service-info">{item.info}</p>
                </article>
              );
            })}
          </div></div>
  </AwesomeSlider>
            
      </div>
    );
  }
}

export default Services;
