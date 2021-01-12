import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionCBS5.css";

function SectionCBS5() {
	const { t } = useTranslation();
	return (
		<div className="SectionCBS5 container">
			<h3>{t("Cybersecurity.section_5.title")}</h3>
			<hr className="SectionCBS5--hr"/>
			<p>{t("Cybersecurity.section_5.desc")}</p>

			<div className="row">
				{t("Cybersecurity.section_5.items").map((item, index) => {
					return( 
						<div key={index} className="SectionCBS5__Box mx-auto">
							<div className={`SectionCBS5_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionCBS5
