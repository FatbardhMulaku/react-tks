import React from 'react';
import LearnMore from './../UI/Button/LearnMore';
import SectionCo1Slider from './SectionCo1Slider';
import { useTranslation } from "react-i18next";
import './Style/SectionCo1.css';
import Fade from 'react-reveal/Fade';

function SectionCo1() {
    const { t } = useTranslation();
    return (
        <div className="SectionCo1">
        <div className="Co_wapper container row my-auto mx-auto align-items-center">
            <Fade left cascade>
            <div className="col-sm-12 col-lg-6 SectionCo1_left">
                <h1>{t("Company.Section1h")}</h1>
                <p>{t("Company.Section1p")}</p>
                <LearnMore link="SectionCo2" className="SectionCo1-Btn"/>
            </div></Fade>
            <SectionCo1Slider />
        </div>
        </div>
    )
}

export default SectionCo1
