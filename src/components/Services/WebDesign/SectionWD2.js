import React from 'react';
import "./Styles/SectionWD2.css";
import { useTranslation } from "react-i18next";

function SectionWD2() {
    const { t } = useTranslation();
    return (
        <div className="SectionWD2">
            <div className="container text-white SectionWD2_wapper my-auto">
                <h3>{t("webdesign.section_2.title")}</h3>
                <p>{t("webdesign.section_2.desc")}</p>
            </div>
        </div>
    )
}

export default SectionWD2
