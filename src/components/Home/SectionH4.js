import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./Style/SectionH4.css";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import 'react-slideshow-image/dist/styles.css'
import Fade from 'react-reveal/Fade';
import SectionT3item1 from "./../Team/SectionT3item1"
import SectionT3item2 from "./../Team/SectionT3item2"
import SectionT3item3 from "./../Team/SectionT3item3"

function SectionH4() {
  const slideRef = useRef();
  const style = {
    textAlign: "center",
  };
  const properties = {
    autoplay: false,
    arrows: false
  };
  const back = () => {
    slideRef.current.goBack();
  }
  const next = () => {
    slideRef.current.goNext();
  }
  const { t } = useTranslation();
  return (
    <div className="team container">
      <Fade>
    <div className="team-c">
      <div className="team__left"><Fade left cascade>
        <h1>{t("Home.SectionH4LeftTitle")}</h1>
        <p>
        {t("Home.SectionH4LeftP")}
        </p>
        <LearnMore link="BannerT" offset={-90} /> </Fade>
      </div>
      
  <div className="team__Right">
      <div className="team__Right1">
        <Slide ref={slideRef} {...properties}>
        <div style={style}>
              <SectionT3item1 />
          </div>
          <div style={style}>
              <SectionT3item3 />
          </div>
        </Slide>
        <div className="shigjeta-c">
              <div className="shigjeta-majt" onClick={back}>
                <FaLongArrowAltLeft className="shigjeta__icon" />
              </div>
              <div className="shigjeta-djatht" onClick={next}>
                <FaLongArrowAltRight className="shigjeta__icon" />
              </div>
            </div>
      </div>

      <SectionT3item2 />
  </div>
  </div>
  </Fade>
</div>

  );
}

export default SectionH4;
