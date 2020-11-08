import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA6.css";

function SectionIA6() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA6 container">
			<h3>{t("Image-Analysis.section_6.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_6.desc")}</p>
			
			<div className="row justify-content-center mt-2 SectionIA6__box">
				{t("Image-Analysis.section_6.items").map((item, index ,index2) => {
					return(
						<>
						<p key={index} className="col-10 col-sm-6 col-lg-3 mt-3">{item.title}</p>

						<p key={index+5} className="col-10 col-sm-6 col-lg-3 mt-3">{item.desc}</p>
						</>
					)
				})}
				
			</div>
		</div>
	)
}

export default SectionIA6
