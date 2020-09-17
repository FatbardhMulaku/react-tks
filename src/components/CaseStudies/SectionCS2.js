import React from 'react';
import { Link } from "react-router-dom";
import './SectionCS2.css'

function SectionCS2() {
    return (
        <div className="SectionCS2">
            <div data-aos="fade-right" data-aos-once="false"  className="SectionCS2Left">
                <h1>We do what we love <br/>
                    for the better.
                </h1>
                <p>
                    To offer quality softwaredevelopment services, <br/>
                    you need to master technology. To make it top-<br/>
                    notch, you need to master people interactions<br/>
                    an let team go beyond.
                </p>
                <Link to="/" className="BannerCS-btn">
                    Learn More
                </Link>
            </div>

            <div data-aos="fade-left" data-aos-once="false"  className="SectionCS2Right">
        
            </div>
        </div>
    )
}

export default SectionCS2
