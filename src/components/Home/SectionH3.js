import React from "react";
import "./Style/SectionH3.css";
import { useTranslation } from "react-i18next";
import SectionH3Slider from './SectionH3Slider';
import Fade from 'react-reveal/Fade';

function Teknologies() {
    const { t } = useTranslation();
    return (

        <div  className="teknologies container">
             <Fade top big cascade>
            <h1>{t("Home.SectionH3")}</h1>
            </Fade>
            
            <SectionH3Slider />
           </div>

    )

  
}

export default Teknologies;
