import React from 'react';
import "./Styles/SectionM5.css";
import { useTranslation } from "react-i18next";

function SectionM5() {
	const { t } = useTranslation();
	return (
		<div className="SectionM5">
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

export default SectionM5
