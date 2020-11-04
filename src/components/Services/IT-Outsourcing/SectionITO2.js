import React from 'react';
import "./Styles/SectionITO2.css";
import { useTranslation } from "react-i18next";

function SectionITO2() {
	const { t } = useTranslation();
	return (
		<div className="SectionITO2">
			<div className="container">
			{t("IT-Outsourcing.section_2").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}
			</div>
		</div>
	)
}

export default SectionITO2;
