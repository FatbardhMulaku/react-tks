import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import "./BannerCS.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

function BannerCS() {

    useEffect(() => {
      AOS.init({
        easing: "ease",
        duration: 2000,
      });
    }, []);

    const { t } = useTranslation();

  return (
    <div className="BannerCS">
    <h1>{t("Blog.SectionCS1h")}</h1>
    <p>
    {t("Blog.SectionCS1p")}
    </p>
    <Link to="/" className="BannerCS-btn">
    {t("Blog.SectionCSbtn")}
    </Link>
  </div>
  )
}

export default BannerCS
