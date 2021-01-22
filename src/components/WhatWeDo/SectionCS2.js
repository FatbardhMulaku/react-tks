import React from 'react';
import './Style/SectionCS2.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import Zoom from 'react-reveal/Zoom';

function SectionCS2() {
    const { t } = useTranslation();

    return (
        <div className="SectionCS2 container">
            <div className="SectionCS2Left">
            <Zoom left > 
                <h1>{t("Blog.SectionCS2h")}</h1>
                <p>{t("Blog.SectionCS2p")}</p>
                <LearnMore link="SectionCS3" offset={-90} /> 
                </Zoom>
            </div>
            <Zoom cascade><div className="SectionCS2Right"/> </Zoom>
            
        </div>
    )
}

export default SectionCS2;
