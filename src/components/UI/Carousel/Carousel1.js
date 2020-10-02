import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel1.css";

const NextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={className}>
      <svg width="25px" height="35px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline
          fill="none"
          stroke="#006fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0.375,0.375 45.63,38.087 0.375,75.8 "
        />
      </svg>
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={className}>
      <svg width="25px" height="35px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline
          fill="none"
          stroke="#006fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="45.63,75.8 0.375,38.087 45.63,0.375 "
        />
      </svg>
    </div>
  );
};

const Carousel1 = (props) => {
  const { settingsProps } = props;

  const arrows = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...arrows} {...settingsProps}>
      {props.children}
    </Slider>
  );
};

export default Carousel1;
