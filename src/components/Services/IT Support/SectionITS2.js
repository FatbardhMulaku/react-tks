import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITS2.css";

function SectionITS2() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS2 container">
			<h3>{t("IT-Support.section_2.title")}</h3>
			<hr className="SectionCL3--hr"/>

			<div className="row">
                 {t("IT-Support.section_2.list").map((item, index) => {
                    return( 
                        <div key={index} className="IT-Support2-Box col-12 col-md-5 col-lg-4 mx-auto">
                            <h6>{item.title}</h6>
							<hr className="SectionCL3--hr"/>
                            <p>{item.desc}</p>
                        </div>
                    );
                 })}
            </div>
		</div>
	)
}

export default SectionITS2
