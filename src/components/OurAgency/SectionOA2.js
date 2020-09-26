import React from "react";
import { useTranslation } from "react-i18next";
import CardService from "../UI/Card/CardService";
import "./styles/SectionOA2.css";

const SectionOA2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-4 sectionOA2">
      <h2 className="col_black font-roboto text-center">
        {t("ourAgency.section_2.title")}
      </h2>
      <div className="row">
        {t("ourAgency.section_2.allServices").map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={index}>
            <CardService
              title={item.title}
              card="paper1"
              desc={item.desc}
              cardCss="sectionOA2_icon_box"
              img={`sectionOA2_icon${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOA2;
