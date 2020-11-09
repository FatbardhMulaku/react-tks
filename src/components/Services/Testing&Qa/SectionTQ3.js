import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionTQ3.css";

function SectionTQ3() {
	const { t } = useTranslation();
	return (
		<div className="SectionTQ3 container">
				<h2>{t("Testing-Qa.section_3.title")}</h2>

				<div className="row">
					{t("Testing-Qa.section_3.items").map((item, index) => {
						return( 
							<div key={index} className="SectionWPD5__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionWPD5_icon${index+1} mx-auto`}/>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						);
					})}
				</div>
		</div>
	)
}

export default SectionTQ3
