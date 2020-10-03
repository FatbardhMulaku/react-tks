import React from "react";
import LearnMore from "../../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";
import "./TextGrid.css";

const TextGrid = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <h1 className="font_roboto text-capitalize font-w-600">
        {t(`${props.tr}.title`)}
      </h1>
      <p className="font_p my-4">{t(`${props.tr}.desc`)}</p>
      <LearnMore link={props.linkBtn} offset={props.offsetBtn} />
    </div>
  );
};

export default TextGrid;
