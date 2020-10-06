import React from "react";
import "./SectionH3.css";
import { useTranslation } from "react-i18next";
import AutoPlay from './AutoPlay';

function Teknologies() {
    const { t } = useTranslation();
    return (

        <div  className="teknologies">
            <h1>{t("Home.SectionH3")}</h1>
            <div className="teknologies__logos">
            </div>
            <AutoPlay />
           </div>

    )

  
}

export default Teknologies;
