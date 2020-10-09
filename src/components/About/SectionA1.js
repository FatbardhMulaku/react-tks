import React from 'react'
import { useTranslation } from "react-i18next";
import './Style/SectionA1.css';

function SectionA1() {
    const { t } = useTranslation();
    return (
        <div className="SectionA1">
            <h1>{t("About.SectionA1h1")}</h1>
            <div className="SectionA1-wapper">
                <div className="SectionA1-txt">
                    <h1>{t("About.SectionA1title")}</h1>
                    <p className="SectionA1p">{t("About.SectionA1p1")}</p>
                    <p className="SectionA1p">{t("About.SectionA1p2")}</p>
                </div>
                <div className="SectionA1-img"/>
            </div>
        </div>
    )
}

export default SectionA1
