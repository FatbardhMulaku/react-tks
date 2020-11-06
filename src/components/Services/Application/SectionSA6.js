import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA6.css";

function SectionSA6() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA6">
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

export default SectionSA6
