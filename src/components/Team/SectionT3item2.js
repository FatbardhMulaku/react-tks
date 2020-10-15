import React from 'react';
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { useTranslation } from "react-i18next";
import "./Style/SectionT3.css";

function SectionT3item2() {
    const { t } = useTranslation();
    return (
        <div className="korniza">
        <div className="team__Right1">
            <div className="team__Right1-img">
                <div className="team__Right1-imgC" alt="aa"/>
            </div>
            <div className="team__Right1-con">
                <h2> {t("Home.SectionH4RightName3")}</h2>
                <p> {t("Home.SectionH4RightTitle3")}</p>
                <hr/>
                <p> {t("Home.SectionH4RightP3")}</p>
                <FormatQuoteIcon className="team__thojzat" />
            </div>
        </div>

        <div className="team__Right2">
            <div className="team__Right1-img">
            <div className="team__Right1-imgD" alt="aa" />
            </div>
            <div className="team__Right1-con2">
                <h2>{t("Home.SectionH4RightName2")}</h2>
                <p>{t("Home.SectionH4RightTitle2")}</p>
                <hr />
                <p>{t("Home.SectionH4RightP2")}</p>
                <FormatQuoteIcon className="team__thojzat" />
            </div>
        </div>
        </div>
    )
}

export default SectionT3item2;
