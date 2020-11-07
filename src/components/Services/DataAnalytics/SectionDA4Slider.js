import React, { Component } from 'react';
import Slider from "react-slick";

export class SectionDA4Slider extends Component {
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
		  
		  const img = ["tlogo logo-mainfest", "tlogo logo-microsoft", "tlogo logo-aws", "tlogo logo-oracle","tlogo logo-data","tlogo logo-aws"]
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

export default SectionDA4Slider
