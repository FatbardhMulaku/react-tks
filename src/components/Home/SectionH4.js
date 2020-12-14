import React, { useRef , useState } from "react";
import { Slide } from "react-slideshow-image";
import "./Style/SectionH4.css";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import 'react-slideshow-image/dist/styles.css'
import Fade from 'react-reveal/Fade';
import SectionT3item1 from "./../Team/SectionT3item1"
import SectionT3item2 from "./../Team/SectionT3item2"

function SectionH4() {
  const slideRef = useRef();
  const [isActive, setActive] = useState(false);
  const properties = {
    autoplay: false,
    arrows: false
  };
  const back = () => {
    slideRef.current.goBack();
      setActive(!isActive);
      setTimeout(function() {
        setActive(false);
       }, 1000);
  }
  const next = () => {
    setActive(true);
    slideRef.current.goNext();
    setTimeout(function() {
      setActive(false);
     }, 1000);
  }
  const { t } = useTranslation();
  return (
    <div className="team">
      <Fade>
    <div className="team-c container">
      <div className="team__left"><Fade left >
        <h1>{t("Home.SectionH4LeftTitle")}</h1>
        <p>
        {t("Home.SectionH4LeftP")}
        </p>
        <LearnMore link="BannerT" offset={-90} /> </Fade>
      </div>
      
  <div className="team__Right">
        <Slide ref={slideRef} {...properties}>
            <SectionT3item1 />
            <SectionT3item2 />
        </Slide>
           
        <div className="shigjeta-c">
              <div className={isActive ? 'fade shigjeta-majt': "shigjeta-majt"} onClick={back}>
                <FaLongArrowAltLeft className="shigjeta__icon" />
              </div>
              <div className={isActive ? 'fade shigjeta-majt': "shigjeta-majt"} onClick={next}>
                <FaLongArrowAltRight className="shigjeta__icon" />
              </div>
            </div>
      </div>
  </div>
  </Fade>
</div>

  );
}

export default SectionH4;
