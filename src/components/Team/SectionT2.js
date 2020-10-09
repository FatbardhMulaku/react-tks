import React from 'react';
import './Style/SectionT2.css';
import SectionT2item from './SectionT2item';
import { useTranslation } from "react-i18next";

function SectionT2() {
    const { t } = useTranslation();
    return (
        <div className="SectionT2">
            <h1>{t("Team.BannerTh")}</h1>
            <SectionT2item />
        </div>
    )
}

export default SectionT2
