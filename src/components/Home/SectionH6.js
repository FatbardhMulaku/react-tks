import React from 'react';
import { Link } from "react-router-dom";
import './SectionH6.css';
import AboutLogo1 from './../../assets/Home/about1.png';
import AboutLogo2 from './../../assets/Home/about2.png';
import AboutLogo3 from './../../assets/Home/about3.png';

export default function About() {
    return (
        <div className="about">
            <div className="aboutLeft">
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="aboutText1">
                    <h1>For what we are Proud</h1>
                    <p>We pride ourselves on being Techonology Native and
                        not being locked into certain Techonologies instead
                        provide the best solution for our costumers. We aim
                        to provide a fixed set of services will a service catalog.
                    </p>
                    <div className="div-about-btn">
                        <Link to="/" className="about-btn">
                            Send
                        </Link>
                    </div>
                </div>
                <img src={AboutLogo1} className="aboutLogo1" alt="AboutLogo1"/>
                <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="aboutText2">
                     <h1>We promote integrity</h1>
                     <p>
                         We are independent which further fosters our values
                         that interests of our clients are always a priority.
                         Intergrity and responsibility towards our clients and
                         made us the partner of choice in the region for thousand
                         od domestic and international clients.
                     </p>
                </div>
            </div>
                
            <div className="aboutRight">
                 <img src={AboutLogo3} className="aboutLogo3" alt="AboutLogo3"/>
                <img src={AboutLogo2} className="aboutLogo2" alt="AboutLogo2"/>
                
            </div>
        </div>
    )
}
