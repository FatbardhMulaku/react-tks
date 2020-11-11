import React, { Component } from 'react';
import Slider from "react-slick";

export class SectionH3Slider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };

          const img = ["tlogo logo-html", "tlogo logo-css", "tlogo logo-react", "tlogo logo-wordpress","tlogo logo-php","tlogo logo-java"]
        return (
            <div>
                <Slider {...settings}>
                {img.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={item}/>
                        </div>
                    );
                    })}
                </Slider>
            </div>
        )
    }
}

export default SectionH3Slider;
