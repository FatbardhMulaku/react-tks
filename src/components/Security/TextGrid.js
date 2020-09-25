import React from "react";
import LearnMore from "../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";

const TextGrid = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <h1 className="font_roboto text-capitalize font-w-600">
        {t(`security.section_${props.sNr}.title`)}
      </h1>
      <p className="font_p my-4">{t(`security.section_${props.sNr}.desc`)}</p>
      <LearnMore link="section-Security-2" offset={-90} />
    </div>
  );
};

export default TextGrid;
