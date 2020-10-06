import React from 'react';
import { Link } from "react-router-dom";
import './SectionH6.css';
import AboutLogo1 from './../../assets/Home/about1.jpg';
import AboutLogo2 from './../../assets/Home/about2.jpg';
import AboutLogo3 from './../../assets/Home/about3.jpg';
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div className="about">
            <div className="aboutLeft">
                <div className="aboutText1">
                    <h1>{t("Home.SectionH6T1")}</h1>
                    <p className="team-p">{t("Home.SectionH6P1")}</p>
                    <div className="div-about-btn">
                        <Link to="/" className="about-btn">
                        {t("Home.SectionH6Btn")}
                        </Link>
                    </div>
                </div>
                <img src={AboutLogo1} className="aboutLogo1" alt="AboutLogo1"/>
                <div className="aboutText2">
                     <h1>{t("Home.SectionH6T2")}</h1>
                     <p className="team-p">{t("Home.SectionH6P2")}</p>
                </div>
            </div>
                
            <div className="aboutRight">
                 <img src={AboutLogo3} className="aboutLogo3" alt="AboutLogo3"/>
                <img src={AboutLogo2} className="aboutLogo2" alt="AboutLogo2"/>
                
            </div>
        </div>
    )
}
