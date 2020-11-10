import React from 'react';
import "./Styles/SectionWD4.css";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function SectionWD4() {
    const { t } = useTranslation();
    return (
        <div className="SectionWD4 container">
            <h3>{t("webdesign.section4title")}</h3>
            <Fade bottom >
            {t("webdesign.section_4").map((item, index) => {
                return (
                    <div key={index} className="my-4">
                        <div className="row ml-1 mb-1">
                            <div className={`${item.icon} mr-4`}/>
                            <h4>{item.title}</h4>
                        </div>
                        <p>{item.txt}</p>
                    </div>
                );
            })}</Fade>
        </div>
    )
}

export default SectionWD4
