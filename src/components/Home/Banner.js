import React from 'react';
import "./Style/Banner.css";
import LearnMore from "./../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Banner() {

  const { t } = useTranslation();
  return (
    <Fade>
    <div className="banner">

    <div className="banner__text">
    <Zoom left cascade>
      <h1>{t("Home.BanerH1")}</h1>
      <p>{t("Home.BannerP")}</p>
      <div className="div-banner-btn">
      <LearnMore link="services" offset={-90} /> 
      </div></Zoom>
    </div>
    <div  className="banner__img">
      <div className="banner__imgLeft">
        <div className="banner-img1" /><div className="banner-img2" />
      </div>
      <div className="banner__imgRight">
        <div className="banner-img3" /><div className="banner-img4" />
      </div>
    </div>
  </div>
  </Fade>
  )
}

export default Banner;
