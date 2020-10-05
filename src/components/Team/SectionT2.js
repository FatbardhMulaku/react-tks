import React from 'react';
import './SectionT2.css';
import SectionT2item from './SectionT2item';
import SectionT2item2 from './SectionT2item2';
import SectionT2item3 from './SectionT2item3';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from "react-i18next";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2},
    { width: 1200, itemsToShow: 3 },
  ];

function SectionT2() {
    const { t } = useTranslation();
    return (
        <div className="SectionT2">
            <h1>{t("Team.BannerTh")}</h1>
            <div className="TeamSlider">
            <Carousel itemsToShow={3} itemsToScroll={1} breakPoints={breakPoints} showArrows={true}>
                <SectionT2item />
                <SectionT2item2 />
                <SectionT2item3 />
                <SectionT2item />
                <SectionT2item2 />
                <SectionT2item3 />
            </Carousel>
            </div>
        </div>
    )
}

export default SectionT2
