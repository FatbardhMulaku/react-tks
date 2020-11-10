import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITO3.css";
import Fade from 'react-reveal/Fade';

function SectionITO3() {
	const { t } = useTranslation();
	return (
		<div className="SectionITO3 container">
            <Fade top big><h3>{t("IT-Outsourcing.section_3.title")}</h3></Fade>
			

            <div className="row">
                 {t("IT-Outsourcing.section_3.list").map((item, index) => {
                    return( 
                        <div key={index} className="ManagementBox col-12 col-lg-4 mx-auto">
                            <div className={`SectionITO3_icon${index+1} mx-auto`}/>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    );
                 })}
            </div>
		</div>
	)
}

export default SectionITO3;
