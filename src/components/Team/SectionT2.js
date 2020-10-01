import React from 'react';
import './SectionT2.css';
import SectionT2item from './SectionT2item';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from "react-i18next";

function SectionT2() {
    const { t } = useTranslation();
    return (
        <div className="SectionT2">
            <h1>{t("Team.BannerTh")}</h1>
        
            <Carousel itemsToShow={1} showArrows={false}>
                <SectionT2item />
                <SectionT2item />
                <SectionT2item />
            </Carousel>
        </div>
    )
}

export default SectionT2
