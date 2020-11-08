import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionWPD4.css";


function SectionWPD4() {
	const { t } = useTranslation();
	return (
		<div className="SectionWPD4 container row mx-auto">
				
				<div className="col-lg-8 col-xl-9 col-xl-9 SectionWPD4__txt">
					<h3>{t("Web-Portal.section_4.title")}</h3>
					<hr className="SectionCL3--hr"/>
					{t("Web-Portal.section_4.items").map((item, index) => {
						return( 
						<p key={index}><span>{item.title}</span>{item.desc}</p>
						);
					})}
				</div>
				<div className="col-lg-4 col-xl-3 my-auto mx-auto SectionWPD4__img"/>
		</div>
	)
}

export default SectionWPD4
