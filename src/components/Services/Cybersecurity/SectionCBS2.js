import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionCBS2.css";

function SectionCBS2() {
	const { t } = useTranslation();
	return (
		<div className="SectionCBS2 container">
			<h3>{t("Cybersecurity.section_2.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<p>{t("Cybersecurity.section_2.desc")}</p>

			<div className="row ">
				{t("Cybersecurity.section_2.items").map((item, index) => {
					return( 
						<div key={index} className="SectionCBS2__Boxa mx-auto">
							<div className={`SectionCBS2_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionCBS2;
