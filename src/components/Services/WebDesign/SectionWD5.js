import React from 'react';
import "./Styles/SectionWD5.css";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function SectionWD5() {
    const { t } = useTranslation();
    return (
        <div className="SectionWD5 container">
            <h3>{t("webdesign.section5_title")}</h3>
            <p>{t("webdesign.section5_desc")}</p>

            <div  className="row">
            {t("webdesign.section_5").map((item, index) => {
                return(
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 WD5_box">
                        <div className={`WD5_icon${index+1}`}/>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                        <Link to="/webdesign">{item.btn}</Link>
                    </div>
                );
            })}</div>
        </div>
    )
}

export default SectionWD5
