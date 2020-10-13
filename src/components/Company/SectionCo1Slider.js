import React from 'react';
import './Style/SectionCo1Slider.css';
import WorkLogoC1 from './../../assets/Company/company1.jpg';
import WorkLogoC2 from './../../assets/Company/company2.jpg';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';

const WorkImages = [
    WorkLogoC1,
    WorkLogoC2,
    WorkLogoC1,
    WorkLogoC2,

  ];

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

function SectionCo1Slider() {
    return (
        
        <div className="col-sm-12 col-lg-6 SectionCo1Slider">
            <Slider  {...settings}>
            {WorkImages.map((item, index) => {
                return (
                <div className="containeriCo" key={index}>
                   <Fade><img src={item} alt="CompanyImg" className="ImgCompany w-100" /></Fade>
                </div>
                );
            })}
            </Slider>
        </div>
    )
}

export default SectionCo1Slider
