import React from 'react';
import "./Styles/SectionDA5.css";
import { useTranslation } from "react-i18next";

function SectionDA5() {
	const { t } = useTranslation();
	return (
		<div className="SectionDA5 container">
			<div className="SectionDA5__txt my-auto">
				<h3>{t("DataAnalytics.section_5.title")}</h3>
				<p>{t("DataAnalytics.section_5.desc")}</p>
			</div>
			<div className="SectionDA5__img"><div className="SectionDA5__img1"/></div>
		</div>
	)
}

export default SectionDA5
