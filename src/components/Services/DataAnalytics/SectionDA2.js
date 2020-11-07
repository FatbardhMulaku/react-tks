import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionDA2.css";

function SectionDA2() {
	const { t } = useTranslation();
	return (
		<div className="SectionDA2">
			<div className="container">
			{t("DataAnalytics.section_2").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}
			</div>
		</div>
	)
}
export default SectionDA2
