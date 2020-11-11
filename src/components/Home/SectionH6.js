import React from 'react';
import { Link } from "react-router-dom";
import './Style/SectionH6.css';
import { useTranslation } from "react-i18next";
import Slide from 'react-reveal/Slide';

export default function About() {
    const { t } = useTranslation();
    return (
        <div className="about row mx-auto container mb-5 pb-5">
        <Slide bottom>
            <div className="aboutLeft col-sm-12 col-lg-6">
                <div className="aboutText1">
                    <h1>{t("Home.SectionH6T1")}</h1>
                    <p className="team-p">{t("Home.SectionH6P1")}</p>
                    <div className="div-about-btn">
                        <Link to="/" className="about-btn">
                        {t("Home.SectionH6Btn")}
                        </Link>
                    </div>
                </div>
                <div className="aboutLogo1" alt="Image"/>
                <div className="aboutText2">
                     <h1>{t("Home.SectionH6T2")}</h1>
                     <p className="team-p">{t("Home.SectionH6P2")}</p>
                </div>
            </div>
                
            <div className="col-sm-12 col-lg-6 aboutRight">
                <div className="aboutLogo3" alt="Image"/><div className="aboutLogo2" alt="Image"/>
            </div>
            </Slide>
        </div>
        
    )
}
