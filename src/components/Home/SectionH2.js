import React, { Component } from "react";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./SectionH2.css";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <PhoneIphoneOutlinedIcon fontSize={'large'}/>,
        title: "Mobile design",
        info:
          "Our mobile UI/UX design specialists create a conversion-driven mobile user experience that makes for high conversion and user retention.",
      },
      {
        icon: <DashboardOutlinedIcon fontSize={'large'}/>,
        title: "Web Design",
        info:
        "Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution. ",
      },
      {
        icon: <FilterDramaOutlinedIcon fontSize={'large'}/>,
        title: "Cloud",
        info:
        "Cloud infrastructure management services provide scalability to businesses. Where multiple users can share a common infrastructure.",
      },
      {
        icon: <GraphicEqOutlinedIcon fontSize={'large'}/>,
        title: "Branding",
        info:
        "We branding is mostly applied to intranets and portals, and it’s not just about improving the look and feel of a solution for the sake of it.",
      },
      {
        icon: <SettingsApplicationsOutlinedIcon fontSize={'large'}/>,
        title: "Web services",
        info:
        "Web development services imply designing, building, integrating, scaling and maintaining dynamic software solutions that work via intranet or internet.",
      },
      {
        icon: <DescriptionOutlinedIcon fontSize={'large'}/>,
        title: "Managment",
        info:
          "Management refers to the monitoring and administration of an organization’s information technology systems: hardware, software and networks. ",
      },
    ],
  };
  render() {
      const eBardh = {
          backgroundColor: 'white'
      };
    return (
      <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="services">
          <h1>Explore what we offer</h1>

         
  <AwesomeSlider organicArrows={false} cssModule={{eBardh}} className="slideri">
    <div> <div className="grid" >
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
