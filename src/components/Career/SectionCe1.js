import React from 'react';
import { Link } from 'react-router-dom';
import './Style/SectionCe1.css';
import { useTranslation } from "react-i18next";

function SectionCe1() {
    const { t } = useTranslation();
    const box = ["Ce-Box1", "Ce-Box2", "Ce-Box3"]
    return (
        <div className="SectionCe1 align-items-center">
            <div className="container justify-content-center align-items-center row my-auto mx-auto SectionCe1_wapper">
                <div className="col-sm-12 col-lg-6 text-white SectionCe1-left">
                    <h1>{t("Career.Section1h")}</h1>
                    <p>{t("Career.Section1p")}</p>
                    <div className="Ce1-btn"><Link to="/career" className="Ce1-btn1">{t("Career.Section1Btn1")}</Link> {t("Career.or")} <Link to="/career" className="Ce1-btn2">{t("Career.Section1Btn2")}</Link></div>
                </div>
                
                <div className="col-sm-12 col-lg-6 SectionCe1-right">
                    {box.map((index,key) => {
                        return(
                            <div key={index} className={`Ce-Box${index+1}`}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SectionCe1
