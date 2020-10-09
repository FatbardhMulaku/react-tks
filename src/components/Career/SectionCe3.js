import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import './Style/SectionCe3.css';
import { useTranslation } from "react-i18next";

function SectionCe3() {
    const slideRef = useRef();

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
        <div className="container mx-auto SectionCe3">
            <div className="SectionCe3-top row">
                <h2 className="col-7">Our Free Positions </h2>
                <div className="col-5 Ce3-btnC"><Link to="/career" className="Ce3-btn">View all</Link></div>
            </div>

            <Slide ref={slideRef} {...properties}>
            <div className="SectionCe3-bottom row justify-content-center">
            {t("Career.Section3").map((item, index) => {
                    return(
                        <div key={index} className="col-sm-11 col-lg-5 JobBox">
                            <div className="jobDescription">
                                <h4>{item.title}</h4>
                                <p>{item.txt}</p>
                            </div>
                            <div className="applyBtnC"><Link to="/career" className="applyBtn">{item.apply}</Link></div>
                        </div>
                    );
                })}
            </div>

            <div className="SectionCe3-bottom row justify-content-center">
            {t("Career.Section3").map((item, index) => {
                    return(
                        <div key={index} className="col-sm-11 col-lg-5 JobBox">
                            <div className="jobDescription">
                                <h4>{item.title}</h4>
                                <p>{item.txt}</p>
                            </div>
                            <div className="applyBtnC"><Link to="/career" className="applyBtn">{item.apply}</Link></div>
                        </div>
                    );
                })}
            </div>
            </Slide>

            <div className="shigjetat">
              <div className="shigjeta-majt" onClick={back}>
                <FaLongArrowAltLeft className="shigjeta__icon" />
              </div>
              <div className="shigjeta-djatht" onClick={next}>
                <FaLongArrowAltRight className="shigjeta__icon" />
              </div>
            </div>
        </div>
    )
}

export default SectionCe3
