import React from 'react';
import { useTranslation } from "react-i18next";
import {GoPrimitiveDot} from 'react-icons/go';
import LearnMore from "./../UI/Button/LearnMore";
import './Style/SectionA2.css';
import Zoom from 'react-reveal/Zoom';

function SectionA2() {
    const { t } = useTranslation();
    return (
        <div className="SectionA2">
            <div className="container contA2 row mx-auto align-items-center">
            <Zoom left>
            <div className="SectionA2a col-sm-12 col-lg-6 ">
                <div className="SectionA2a-div"></div>
                <div className="SectionA2a-img"></div>
            </div></Zoom>
            <Zoom right>
            <div className="SectionA2b col-sm-12 col-lg-6">
                <h1>{t("About.SectionA2h")}</h1>
                {t("About.SectionA2").map((item, index) => {
                    return (
                        <ul key={index} className="SectionA2text">
                                <li><GoPrimitiveDot size="30px" className="liA2"/>{item.txt}</li>
                        </ul>
                    );
                    })}
                     <LearnMore link="SectionA3" offset={-90} /> 
            </div></Zoom>
            </div>
        </div>
    )
}

export default SectionA2;
