import React from "react";
import { useTranslation } from "react-i18next";
import CardService from "../UI/Card/CardService";
import "./styles/SectionWS2.css";
import LayoutContainer from "../Shared/LayoutContainer";
import Fade from 'react-reveal/Fade';

const SectionWS2 = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer section="sectionWS2" container="my-4 ">
      <h2 className="col_black font-roboto text-center">
        {t("webServices.section_2.title")}
      </h2>
      <div className="row">
      <Fade bottom> 
        {t("webServices.section_2.allServices").map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={index}>
            <CardService
              title={item.title}
              card="paper1"
              desc={item.desc}
              cardCss="sectionWS2_icon_box"
              img={`sectionWS2_icon${index + 1}`}
            />
          </div>
        ))}</Fade>
      </div>
    </LayoutContainer>
  );
};

export default SectionWS2;
