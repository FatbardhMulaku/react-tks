import React from 'react';
import "./Styles/SectionTQ2.css";
import { useTranslation } from "react-i18next";

function SectionTQ2() {
	const { t } = useTranslation();
	return (
		<div className="SectionTQ2">
			<div className="container">
			{t("Testing-Qa.section_2").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}
			</div>
		</div>
	)
}

export default SectionTQ2
