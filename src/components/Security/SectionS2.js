import React from "react";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";
import SecurityCard from "./SecurityCard";

const SectionS2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container sectionS2" id="section-Security-2">
      {t("security.section_2").map((item, index) => (
        <SecurityCard key={index} title={item} index={index + 1} />
      ))}
    </div>
  );
};

export default SectionS2;
