import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { useTranslation } from "react-i18next";
import "./styles/SectionSO2.css";
import Fade from 'react-reveal/Fade';

const SectionSO2 = () => {
  const { t } = useTranslation();
  return (
    <LayoutContainer section="sectionSO2">
      <Fade top big><h1> {t("software.section_2.title")} </h1></Fade>
      <ul className="sectionSO2_list">
        {t("software.section_2.list").map((item, idx) => (
          <li key={idx}>
            <h3>{item.title}</h3>
            <p>{item.desc} </p>
          </li>
        ))}
      </ul>
    </LayoutContainer>
  );
};

export default SectionSO2;
