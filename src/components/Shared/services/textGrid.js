import React from "react";
import LearnMore from "../../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";
import "./TextGrid.css";
import Zoom from 'react-reveal/Zoom';

const TextGrid = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`col-sm-12 col-lg-5 textGrid ${props.textCss}`}>
      <Zoom left cascade>
      <h1 className="font_roboto text-capitalize font-w-600">
        {t(`${props.tr}.title`)}
      </h1>
      <p className="font_p my-4">{t(`${props.tr}.desc`)}</p>
      <LearnMore link={props.linkBtn} offset={props.offsetBtn} />
      </Zoom>
    </div>
  );
};

export default TextGrid;