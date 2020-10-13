import React from 'react';
import "./Style/BannerCS.css";
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import Zoom from 'react-reveal/Zoom';

function BannerCS() {
    const { t } = useTranslation();
  return (
    <Zoom> 
      <div className="BannerCS">
          <h1>{t("Blog.SectionCS1h")}</h1>
          <p>{t("Blog.SectionCS1p")}</p>
          <LearnMore link="SectionCS2" offset={-90} /> 
    </div></Zoom>
  )
}

export default BannerCS
