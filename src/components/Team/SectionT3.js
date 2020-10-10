import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {MdSubject} from 'react-icons/md';
import {GoMail} from 'react-icons/go';
import AboutLogo1 from "./../../assets/Home/lonaa.png";
import AboutLogo2 from "./../../assets/Home/ilir.png";
import AboutLogo3 from './../../assets/Home/rita.jpg';
import { useTranslation } from "react-i18next";
import "./Style/SectionT3.css";

function SectionT3() {
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
    <div className="SectionT3">
      <div className="team-c container">
        <div className="team__left">
          <h1>{t("Home.SectionH4LeftTitle")}</h1>

        <div className="inputLabel"><GoMail className="inputTi"/><input type="text" placeholder="Your email adress" className="inputT"/></div>
        <div className="inputLabel2"><MdSubject className="inputTi2"/><textarea rows="5" placeholder="Subject" className="inputT"></textarea></div>

          <div className="div-about-btn">
            <Link to="/" className="about-btn">
              Send
            </Link>
          </div>
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
              <h2> {t("Home.SectionH4RightName1")}</h2>
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
              <h2> {t("Home.SectionH4RightName3")}</h2>
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
              <img src={AboutLogo2} className="team__Right1-imgA" alt="aa" />
            </div>
            <div className="team__Right1-con2">
              <h2>{t("Home.SectionH4RightName2")}</h2>
              <p>{t("Home.SectionH4RightTitle2")}</p>
              <hr />
              <p>{t("Home.SectionH4RightP2")}</p>
              <FormatQuoteIcon className="team__thojzat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionT3;
