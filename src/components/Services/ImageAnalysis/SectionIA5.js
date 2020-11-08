import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA5.css";

function SectionIA5() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA5 container">
			<h3>{t("Image-Analysis.section_5.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_5.desc")}</p>


			<div className="row justify-content-center">
				<div className="col-6 col-sm-4 col-md-2 d-flex SectionIA5__box1">
					<div className="SectionIA5__img1"/>
					<p>{t("Image-Analysis.section_5.item1")}</p>
				</div>
				<div className="col-2 col-sm-2 col-md-1 SectionIA5__img2"/>
				<div className="col-6 col-sm-4 col-md-2 d-flex SectionIA5__box2">
					<p>{t("Image-Analysis.section_5.item1")}</p>
					<div className="SectionIA5__img3"/>
				</div>
			</div>
		</div>


	)
}

export default SectionIA5
