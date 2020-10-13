import React from 'react';
import "./Style/BannerB.css";
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import Zoom from 'react-reveal/Zoom';

function BannerB() {

  const { t } = useTranslation();
  return (
    <div className="bannerBlog row my-auto">

      <div className="col-sm-12 col-lg-6 banner__textBlog">
      <Zoom left cascade><h1>
        {t("Blog.BannerB1h")}
        </h1>
        <p>
        {t("Blog.BannerB1p")}
        </p> </Zoom>
          <LearnMore link="SectionB2" className="BlogS1Btn" offset={-90} /> 
      </div>
      <Zoom>
      <div className="col-sm-12 col-lg-6 row banner__imgBlog">
          <div className="col-6 banner__imgLeftBlog">
                <div className="banner-img1Blog" />
          </div>
          <div className="col-6 banner__imgRightBlog">
                <div className="banner-img3Blog" />
                <div className="banner-img4Blog" />
          </div>
      </div></Zoom>
  </div>
  )
}

export default BannerB;
