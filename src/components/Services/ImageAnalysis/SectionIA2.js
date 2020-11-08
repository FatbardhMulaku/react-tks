import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA2.css";

function SectionIA2() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA2 container">
			<h3>{t("Image-Analysis.section_2.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Image-Analysis.section_2.desc1")}</p>
			<p>{t("Image-Analysis.section_2.desc2")}</p>
		</div>
	)
}

export default SectionIA2
