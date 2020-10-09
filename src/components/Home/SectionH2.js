import React from 'react';
import "./Style/SectionH2.css";
import SectionH2items from "./SectionH2items";

import { useTranslation } from "react-i18next";

function SectionH2() {
  const { t } = useTranslation();
  return (
    <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="services">
    <h1> {t("Home.SectionH2")} </h1>
          <div className="slideri"><SectionH2items /></div>
          
  </div>
  )
}

export default SectionH2
