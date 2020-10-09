import React from "react";
import "./Style/SectionH3.css";
import { useTranslation } from "react-i18next";
import SectionH3Slider from './SectionH3Slider';

function Teknologies() {
    const { t } = useTranslation();
    return (

        <div  className="teknologies container">
            <h1>{t("Home.SectionH3")}</h1>
            
            <SectionH3Slider />
           </div>

    )

  
}

export default Teknologies;
