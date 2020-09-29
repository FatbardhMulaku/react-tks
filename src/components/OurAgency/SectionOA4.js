import React from "react";
import { useTranslation } from "react-i18next";
import CardService from "../UI/Card/CardService";
import "./styles/SectionOA4.css";
const SectionOA4 = () => {
  const { t } = useTranslation();

  return (
    <div className="container sectionOA4">
      <h2 className="col_black font-roboto text-center">
        {t("ourAgency.section_4.title")}
      </h2>
      <div className="sectionOA4_card my-4">
        {t("ourAgency.section_4.allServices").map((item, index) => (
          <CardService
            key={index}
            title={item.title}
            desc={item.desc}
            card="paper2"
            cardCss="sectionOA4_icon_box"
            img={`sectionOA4_icon${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOA4;
