import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./CaseStudies.css";
import "../index.css";
import { paramCase } from "change-case";

const CaseStudies = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox
      name={t("caseStudiesPopper.name")}
      trigger={props.trigger}
      width="230px"
    >
      <div className="caseStudies_popper_container">
        <ul className="caseStudies_popper_list">
          {t("caseStudiesPopper.caseStudiesMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={paramCase(item.link)}
              name={item.name}
              icon="caseStudies_popper_icon"
            />
          ))}
        </ul>
      </div>
    </PopperBox>
  );
};

export default CaseStudies;
