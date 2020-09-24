import React from 'react';
import "./SectionH2.css";
import SectionH2items from "./SectionH2items";
import Carousel from 'react-elastic-carousel';
import { useTranslation } from "react-i18next";

function SectionH2() {
  const { t } = useTranslation();
  return (
    <div className="services">
    <h1> {t("Home.SectionH2")} </h1>
    <Carousel itemsToShow={1} showArrows={false}
        className="slideri"
      >
        <div>
          {" "}
          <SectionH2items />
        </div>
        <div>
          {" "}
          <SectionH2items />
        </div>
        <div>
          {" "}
          <SectionH2items />
        </div>
      </Carousel>
  </div>
  )
}

export default SectionH2
