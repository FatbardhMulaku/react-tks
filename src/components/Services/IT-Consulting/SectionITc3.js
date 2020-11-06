import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITc3.css";

function SectionITc3() {
	const { t } = useTranslation();
	return (
		<div className="SectionITc3 container">
			<h3>{t("IT-Consulting.section_3.title")}</h3>

            <div className="row">
                 {t("IT-Consulting.section_3.items").map((item, index) => {
                    return( 
                        <div key={index} className="SectionITc3__Box col-10 col-sm-5 col-lg-3 mx-auto">
                            <div className={`SectionITc3_icon${index+1} mx-auto`}/>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    );
                 })}
            </div>
		</div>
	)
}

export default SectionITc3
