import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionDA7.css";

function SectionDA7() {
	const { t } = useTranslation();
	return (
		<div className="SectionDA7 container">
			<h3>{t("DataAnalytics.section_7.title")}</h3>
			<p>{t("DataAnalytics.section_7.desc")}</p>

			<div  className="row mx-auto justify-content-center mb-5 pb-5">
			{t("DataAnalytics.section_7.items").map((item, index) => {
				return(
						<div key={index} className="SectionITO7__box col-md-4 col-lg-2">
							<h6>{item.desc}</h6>
							<p>{item.info}</p>
						</div>
				);
			})}
			</div>
		</div>
	)
}

export default SectionDA7
