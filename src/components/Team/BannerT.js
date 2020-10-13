import React from 'react';
import LearnMore from "./../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";
import './Style/BannerT.css';
import Zoom from 'react-reveal/Zoom';

function BannerT() {
    const { t } = useTranslation();
    return (
        <div className="BannerT">
            <div className="leftT">
            <Zoom left cascade> 
                <h1>{t("Team.BannerTh")}</h1>
                <p>{t("Team.BannerTp")}</p>
                <LearnMore link="SectionT2" offset={-90} /> 
            </Zoom>
            </div>
            <Zoom>
            <div className="rightT">
                <div className="rightT1">
                    <div className="rightT1-nalt"></div>
                    <div className="rightT1-posht"></div>
                </div>
                <div className="rightT2"></div>
            </div>
            </Zoom>
        </div>
    )
} 

export default BannerT
