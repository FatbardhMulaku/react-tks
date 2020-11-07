import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionDA3.css";

function SectionDA3() {
	const { t } = useTranslation();
	return (
		<div className="SectionDA3 container">
				<h3>{t("DataAnalytics.section_3.title")}</h3>
				<p>{t("DataAnalytics.section_3.desc")}</p>

				<div className="row justify-content-center">
				{t("DataAnalytics.section_3.items").map((item, index) => {
					return(
						<div key={index} className="SectionDA3__box">
								<div className={`SectionSA2__img${index+1}`} />
								<p>{item}</p>
						</div>
					);
				})}</div>
				


				<p>{t("DataAnalytics.section_3.desc2")}</p>
				<div className="row justify-content-center">
				{t("DataAnalytics.section_3.items2").map((item, index) => {
					return(
						<div key={index} className="SectionDA3__box">
								<div className={`SectionSA2__imgB${index+1}`} />
								<p>{item}</p>
						</div>
					);
				})}</div>
				
		</div>
	)
}

export default SectionDA3
