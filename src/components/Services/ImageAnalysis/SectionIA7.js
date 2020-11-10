import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA7.css";
import Zoom from 'react-reveal/Zoom';

function SectionIA7() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA6 container">
			<h3>{t("Image-Analysis.section_7.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_7.desc")}</p>
			<Zoom bottom cascade>
			<div className="row justify-content-center mt-2 SectionIA6__box">
				{t("Image-Analysis.section_7.items").map((item, index) => {
					return(
						<div key={index} className="SectionIA6__boxii col-sm-12 col-lg-6 mx-auto">
							<p className="col-6 mt-3">{item.title}</p>

							<p className="col-6 mt-3">{item.desc}</p>
						</div>
					)
				})}
				
			</div></Zoom>
		</div>
	)
}

export default SectionIA7;
