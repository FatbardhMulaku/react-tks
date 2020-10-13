import React from 'react';
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { useTranslation } from "react-i18next";
import AboutLogo3 from './../../assets/Home/rita.jpg';
import "./Style/SectionT3.css";

function SectionT3item3() {
    const { t } = useTranslation();
    return (
        <div className="team__Right12">
        <div className="team__Right1-img">
            <img src={AboutLogo3} className="team__Right1-imgA" alt="aa"/>
        </div>
        <div className="team__Right1-con">
            <h2> {t("Home.SectionH4RightName3")}</h2>
            <p> {t("Home.SectionH4RightTitle3")}</p>
            <hr/>
            <p> {t("Home.SectionH4RightP3")}</p>
            <FormatQuoteIcon className="team__thojzat" />
        </div>
   </div>
    )
}

export default SectionT3item3
