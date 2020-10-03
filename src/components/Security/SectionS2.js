import React from "react";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";
import SecurityCard from "./SecurityCard";
import LayoutContainer from "../Shared/LayoutContainer";

const SectionS2 = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer section="sectionS2" id="security-2">
      {t("security.section_2").map((item, index) => (
        <SecurityCard key={index} title={item} index={index + 1} />
      ))}
    </LayoutContainer>
  );
};

export default SectionS2;
