import React from 'react';
import AboutLogo2 from "./../../assets/Home/ilir.png";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { useTranslation } from "react-i18next";
import "./Style/SectionT3.css";

function SectionT3item2() {
    const { t } = useTranslation();
    return (
        <div className="team__Right2">
          <div className="team__Right1-img">
            <img src={AboutLogo2} className="team__Right1-imgA" alt="aa" />
          </div>
          <div className="team__Right1-con2">
            <h2>{t("Home.SectionH4RightName2")}</h2>
            <p>{t("Home.SectionH4RightTitle2")}</p>
            <hr />
            <p>{t("Home.SectionH4RightP2")}</p>
            <FormatQuoteIcon className="team__thojzat" />
          </div>
        </div>
    )
}

export default SectionT3item2;
