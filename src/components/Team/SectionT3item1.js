import React from 'react';
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { useTranslation } from "react-i18next";
import AboutLogo1 from './../../assets/Home/lonaa.png';
import "./Style/SectionT3.css";

function SectionT3item1() {
    const { t } = useTranslation();
    return (
        <div className="team__Right12">
              <div className="team__Right1-img">
                  <img src={AboutLogo1} className="team__Right1-imgA" alt="aa"/>
              </div>
              <div className="team__Right1-con">
                  <h2> {t("Home.SectionH4RightName1")}</h2>
                  <p> {t("Home.SectionH4RightTitle1")}</p>
                  <hr/>
                  <p> {t("Home.SectionH4RightP1")}</p>
                  <FormatQuoteIcon className="team__thojzat" />
              </div>
          </div>
    )
}

export default SectionT3item1
