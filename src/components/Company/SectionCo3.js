import React from 'react';
import LearnMore from './../UI/Button/LearnMore';
import { useTranslation } from "react-i18next";
import './Style/SectionCo3.css';
import Fade from 'react-reveal/Fade';

function SectionCo3() {
    const { t } = useTranslation();
    return (
        <Fade bottom cascade>
        <div className="container row mx-auto align-items-center SectionCo3">
            <div className="col-sm-12 col-lg-6 row SectionCo3-left my-auto mx-auto" >
                <div className="col-4 c3img1"></div><div className="col-7 c3img2"></div>
                <div className="c3img3"></div>
            </div>
            <div className="col-sm-12 col-lg-6 SectionCo3-right my-auto">
                <h1>{t("Company.Section3h")}</h1>
                <p>{t("Company.Section3p")}</p>
                <LearnMore link="SectionCo1" />
            </div>
        </div></Fade>
    )
}

export default SectionCo3;
