import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA3.css";

function SectionSA3() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA3 container">
			<h1>{t("Application.section_3.title")}</h1>
			<p>{t("Application.section_3.desc")}</p>
			<h6>{t("Application.section_3.subtitle")}</h6>

			<div className="row">
				{t("Application.section_3.items").map((item, index) => {
					return( 
						<div key={index} className="SectionSA3__box col-12 col-md-5 col-lg-3 mx-auto">
							<div className={`SectionSA3_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionSA3;
