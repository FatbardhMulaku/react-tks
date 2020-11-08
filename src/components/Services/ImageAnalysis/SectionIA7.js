import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA7.css";

function SectionIA7() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA6 container">
			<h3>{t("Image-Analysis.section_7.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_7.desc")}</p>
			
			<div className="row justify-content-center mt-2 SectionIA6__box">
				{t("Image-Analysis.section_7.items").map((item, index) => {
					return(
						<>
						<p className="col-10 col-sm-6 col-lg-3 mt-4">{item.title}</p>

						<p className="col-10 col-sm-6 col-lg-3 mt-4">{item.desc}</p>
						</>
					)
				})}
				
			</div>
		</div>
	)
}

export default SectionIA7
