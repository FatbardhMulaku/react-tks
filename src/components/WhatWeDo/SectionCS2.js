import React from 'react';
import './Style/SectionCS2.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";

function SectionCS2() {
    const { t } = useTranslation();

    return (
        <div className="SectionCS2">
            <div className="SectionCS2Left">
                <h1>{t("Blog.SectionCS2h")}</h1>
                <p>{t("Blog.SectionCS2p")}</p>
                <LearnMore link="SectionCS3" offset={-90} /> 
            </div>

            <div className="SectionCS2Right">
        
            </div>
        </div>
    )
}

export default SectionCS2;
