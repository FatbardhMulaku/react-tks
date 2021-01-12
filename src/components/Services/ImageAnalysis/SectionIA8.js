import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA8.css";

function SectionIA8() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA8 container">
			<h3>{t("Image-Analysis.section_8.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_8.desc")}</p>


			<h5>{t("Image-Analysis.section_8.subtitle")}</h5>
			<div className="row mb-5 ">
				{t("Image-Analysis.section_8.items").map((item, index) => {
					return( 
						<div key={index} className="SectionCBS2__Boxa mx-auto">
							<div className={`SectionIA8_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionIA8
