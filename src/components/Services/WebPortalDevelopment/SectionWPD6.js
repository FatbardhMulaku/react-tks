import React from 'react';
import "./Styles/SectionWPD6.css";
import { useTranslation } from "react-i18next";

function SectionWPD6() {
	const { t } = useTranslation();
	return (
		<div className="SectionWPD6">
			<div className="container">
			{t("Management.section_5").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}
			</div>
		</div>
	)
}

export default SectionWPD6
