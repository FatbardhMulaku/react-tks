import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./Style/SectionH4.css";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import AboutLogo1 from './../../assets/Home/lonaa.png';
import AboutLogo2 from './../../assets/Home/ilir.png';
import AboutLogo3 from './../../assets/Home/rita.jpg';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";
import 'react-slideshow-image/dist/styles.css'


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
  
    <div className="team">
    <div className="team-c">
  <div className="team__left">
    <h1>{t("Home.SectionH4LeftTitle")}</h1>
    <p>
    {t("Home.SectionH4LeftP")}
    </p>
    <LearnMore link="BannerT" offset={-90} /> 
  </div>

      
  <div className="team__Right">
      <div className="team__Right1">
        <Slide ref={slideRef} {...properties}>
          <div style={style}>
          <div className="team__Right12">
          <div className="team__Right1-img">
              <img src={AboutLogo1} className="team__Right1-imgA" alt="aa"/>
          </div>
          <div className="team__Right1-con">
              <h1> {t("Home.SectionH4RightName1")}</h1>
              <p> {t("Home.SectionH4RightTitle1")}</p>
              <hr/>
              <p> {t("Home.SectionH4RightP1")}</p>
              <FormatQuoteIcon className="team__thojzat" />
          </div>
{/* =========== */}
      </div>
          </div>
          <div style={style}>
          <div className="team__Right12">
          <div className="team__Right1-img">
              <img src={AboutLogo3} className="team__Right1-imgA" alt="aa"/>
          </div>
          <div className="team__Right1-con">
              <h1> {t("Home.SectionH4RightName3")}</h1>
              <p> {t("Home.SectionH4RightTitle3")}</p>
              <hr/>
              <p> {t("Home.SectionH4RightP3")}</p>
              <FormatQuoteIcon className="team__thojzat" />
          </div>
      </div>
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

      <div className="team__Right2">
      <div className="team__Right1-img">
              <img src={AboutLogo2} className="team__Right1-imgA" alt="aa"/>
          </div>
          <div className="team__Right1-con2">
              <h1>{t("Home.SectionH4RightName2")}</h1>
              <p>{t("Home.SectionH4RightTitle2")}</p>
              <hr/>
              <p>{t("Home.SectionH4RightP2")}</p>
              <FormatQuoteIcon className="team__thojzat" />
          </div>
      </div>
  </div>

  </div>
</div>

  );
}

export default SectionH4;
