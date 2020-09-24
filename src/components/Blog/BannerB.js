import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import "./BannerB.css";
import AOS from 'aos';
import { useTranslation } from "react-i18next";

function BannerB() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 2000,
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div className="bannerBlog">
    <div className="banner__textBlog">
      <h1>
      {t("Blog.BannerB1h")}
      </h1>
      <p>
      {t("Blog.BannerB1p")}
      </p>

      <div className="div-banner-btnBlog">
        <Link to="/" className="banner-btnBlog">
        {t("Blog.BannerBbtn")}
        </Link>

   
      </div>

    </div>
    <div
      className="banner__imgBlog"
    >
      <div className="banner__imgLeftBlog">
        <div className="banner-img1Blog" />
      </div>
      <div className="banner__imgRightBlog">
        <div className="banner-img3Blog" />
        <div className="banner-img4Blog" />
      </div>
    </div>
  </div>
  )
}

export default BannerB;
