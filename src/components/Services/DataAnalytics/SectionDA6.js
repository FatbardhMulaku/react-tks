import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionDA6.css";
import Fade from 'react-reveal/Fade';

function SectionDA6() {
	const { t } = useTranslation();
	return (
		<div className="SectionDA6 container">
			<h2>{t("DataAnalytics.section_6.title")}</h2>
            <Fade bottom big cascade>
			<div className="row d-flex flex-wrap">
                 {t("DataAnalytics.section_6.items").map((item, index) => {
                    return( 
                        <div key={index} className="SectionDA6__Box mx-auto">
                            <h6 className={`SectionDA6__BGcolor${index+1}`}>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    );
                 })}
            </div></Fade>
		</div>
	)
}

export default SectionDA6;
