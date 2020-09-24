import React from "react";
import "./SectionH3.css";
import { useTranslation } from "react-i18next";

function Teknologies() {
    const { t } = useTranslation();
    return (

        <div  className="teknologies">
            <h1>{t("Home.SectionH3")}</h1>
            <div className="teknologies__logos">
                <div className="tlogo logo-java"></div>
                <div className="tlogo logo-html"></div>
                <div className="tlogo logo-react"></div>
                <div className="tlogo logo-wordpress"></div>
                <div className="tlogo logo-php"></div>
            </div>
        </div>

    )

  
}

export default Teknologies;
