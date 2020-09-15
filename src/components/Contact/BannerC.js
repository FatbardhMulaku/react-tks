import React, { Component } from 'react';
import './BannerC.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class BannerC extends Component {

    componentDidMount(){
        AOS.init({
          offset: 400,
          easing: 'ease',
          duration : 2000
        });
      }

    render() {
        return (
            <div data-aos="fade-right" data-aos-delay="400" className="BannerC">
            <h1>Contact us</h1>
        </div>
        )
    }
}

export default BannerC;