import React from "react";
import { Link } from "react-router-dom";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {MdSubject} from 'react-icons/md';
import {GoMail} from 'react-icons/go';
import AboutLogo1 from "./../../assets/Home/lonaa.png";
import AboutLogo2 from "./../../assets/Home/ilir.png";
import { useTranslation } from "react-i18next";
import "./SectionT3.css";

function SectionT3() {
  const { t } = useTranslation();
  return (
    <div className="SectionT3">
      <div className="team-c">
        <div className="team__left">
          <h1>{t("Home.SectionH4LeftTitle")}</h1>

        <div className="inputLabel"><GoMail className="inputTi"/><input type="text" placeholder="Your email adress" className="inputT"/></div>
        <div className="inputLabel2"><MdSubject className="inputTi2"/><textarea rows="5" placeholder="Subject" className="inputT"></textarea></div>

          <div className="team-btn-container">
            <Link to="/" className="team-btn">
              Send
            </Link>
          </div>
        </div>

        <div className="team__Right">
          <div className="team__Right1">
            <div className="team__Right1-img">
              <img src={AboutLogo1} className="team__Right1-imgA" alt="aa" />
            </div>
            <div className="team__Right1-con">
              <h1> {t("Home.SectionH4RightName1")}</h1>
              <p> {t("Home.SectionH4RightTitle1")}</p>
              <hr />
              <p> {t("Home.SectionH4RightP1")}</p>
              <FormatQuoteIcon className="team__thojzat" />
            </div>
            <div className="shigjeta-c">
              <div className="shigjeta-majt">
                <FaLongArrowAltLeft className="shigjeta__icon" />
              </div>
              <div className="shigjeta-djatht">
                <FaLongArrowAltRight className="shigjeta__icon" />
              </div>
            </div>
          </div>

          <div className="team__Right2">
            <div className="team__Right1-img">
              <img src={AboutLogo2} className="team__Right1-imgA" alt="aa" />
            </div>
            <div className="team__Right1-con2">
              <h1>{t("Home.SectionH4RightName2")}</h1>
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
