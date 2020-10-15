import React, { useRef, useState} from "react";
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

function SectionT3() {
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
        <Slide ref={slideRef} {...properties}>
            <SectionT3item1 />
            <SectionT3item2 />
        </Slide>
           
       
        <div className="shigjeta-c" >
              <div className={isActive ? 'fade shigjeta-majt': "shigjeta-majt"} onClick={back}>
                <FaLongArrowAltLeft className="shigjeta__icon" />
              </div>
              <div className={isActive ? 'fade shigjeta-djatht': "shigjeta-majt"} onClick={next}>
                <FaLongArrowAltRight className="shigjeta__icon" />
              </div>
            </div>

     
        </div>
      </div>
    </div>
  );
}

export default SectionT3;
