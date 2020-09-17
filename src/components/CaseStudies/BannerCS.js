import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BannerCS.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class BannerCS extends Component {

    componentDidMount(){
        AOS.init({
          offset: 400,
          easing: 'ease',
          duration : 2000
        });
      }
    
    render() {
        return (
            <div data-aos="zoom-in" className="BannerCS">
                <h1>What we do</h1>
                <p>We offer professional outsourcing, programming,<br/>
                managment, design pr any visual or administration<br/>
                work. Contact us for more information.
                </p>
                <Link to="/" className="BannerCS-btn">
                    Learn More
                </Link>
            </div>
        )
    }
}

export default BannerCS
