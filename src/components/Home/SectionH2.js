import React from 'react';
import "./Style/SectionH2.css";
import SectionH2items from "./SectionH2items";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";

function SectionH2() {
  const { t } = useTranslation();
  return (
    <div  className="services container">
         
         <div className="services_wapper my-auto">
           <Fade top big><h1>{t("Home.SectionH2title")}</h1></Fade>
          <SectionH2items />
          </div>
          
  </div>
  )
}
/* data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000"*/
export default SectionH2
