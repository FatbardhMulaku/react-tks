import React from 'react'
import { useTranslation } from "react-i18next";
import './Style/SectionA1.css';
import Fade from 'react-reveal/Fade';

function SectionA1() {
    const { t } = useTranslation();
    return (
        <div className="SectionA1">
            <Fade bottom big><h1>{t("About.SectionA1h1")}</h1></Fade>
            <Fade>
            <div className="SectionA1-wapper">
                <div className="SectionA1-txt">
                    <h1>{t("About.SectionA1title")}</h1>
                    {t("About.SectionA1").map((item, index) => {
                        return(
                        <p key={index} className="SectionA1p">{item.SectionA1p}</p>
                        )
                    })}
                </div>
                <div className="SectionA1-img"/>
            </div>
            </Fade>
        </div>
    )
}

export default SectionA1
