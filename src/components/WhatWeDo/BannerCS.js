import React, {useEffect} from 'react';
import "./BannerCS.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";

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
    
    <LearnMore link="SectionCS2" offset={-90} /> 

  </div>
  )
}

export default BannerCS
