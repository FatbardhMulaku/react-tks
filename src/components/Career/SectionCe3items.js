import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './Style/SectionCe3.css';
import Zoom from 'react-reveal/Zoom';
function SectionCe3items() {
    const { t } = useTranslation();
    return (
        <Zoom top cascade>
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
            </div></Zoom>)
}

export default SectionCe3items
