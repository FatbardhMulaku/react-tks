import React from 'react';
import { Link } from "react-router-dom";
import "./Banner.css";
import logo1 from "./../../assets/Home/hero1.png";
import logo2 from "./../../assets/Home/hero2.png";
import logo3 from "./../../assets/Home/hero3.png";
import { useTranslation } from "react-i18next";

function Banner() {

  const { t } = useTranslation();
  return (
    <div className="banner">

    <div
      className="banner__text"
    >
      <h1>{t("Home.BanerH1")}</h1>
      <p>
      {t("Home.BannerP")}
      </p>

      <div className="div-banner-btn">
        <Link to="/" className="banner-btn">
        {t("Home.BannerA")}
        </Link>
      </div>
    </div>
    <div  className="banner__img">
      <div className="banner__imgLeft">
        <img src={logo1} alt="" className="banner-img1" />
        <div className="banner-img2"></div>
      </div>
      <div className="banner__imgRight">
        <img src={logo2} alt="" className="banner-img3" />
        <img src={logo3} alt="" className="banner-img4" />
      </div>
    </div>
  </div>
  )
}

export default Banner;
