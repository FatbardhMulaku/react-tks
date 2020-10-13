import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {MdSubject} from 'react-icons/md';
import {GoMail} from 'react-icons/go';
import { useTranslation } from "react-i18next";
import "./Style/SectionT3.css";
import Zoom from 'react-reveal/Zoom';
import SectionT3item1 from "./SectionT3item1";
import SectionT3item2 from "./SectionT3item2";
import SectionT3item3 from "./SectionT3item3";

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
      <Zoom left cascade> 
        <div className="team__left">
          <h1>{t("Home.SectionH4LeftTitle")}</h1>

        <div className="inputLabel"><GoMail className="inputTi"/><input type="text" placeholder="Your email adress" className="inputT"/></div>
        <div className="inputLabel2"><MdSubject className="inputTi2"/><textarea rows="5" placeholder="Subject" className="inputT"></textarea></div>

          <div className="div-about-btn">
            <Link to="/" className="about-btn"> Send</Link>
          </div>
        </div>
        </Zoom>
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
    </div>
  );
}

export default SectionT3;
