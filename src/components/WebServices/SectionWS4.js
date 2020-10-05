import React from "react";
import { useTranslation } from "react-i18next";
import CardService from "../UI/Card/CardService";
import "./styles/SectionWS4.css";
import LayoutContainer from "../Shared/LayoutContainer";

const SectionWS4 = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer section="sectionWS4">
      <div>
        <h2 className="col_black font-roboto text-center">
          {t("webServices.section_4.title")}
        </h2>
      </div>
      <div className="sectionWS4_card my-4">
        {t("webServices.section_4.allServices").map((item, index) => (
          <CardService
            key={index}
            title={item.title}
            desc={item.desc}
            card="paper2"
            cardCss="sectionWS4_icon_box"
            img={`sectionWS4_icon${index + 1}`}
          />
        ))}
      </div>
    </LayoutContainer>
  );
};

export default SectionWS4;
