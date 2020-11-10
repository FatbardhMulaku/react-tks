import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA4.css";
import Fade from 'react-reveal/Fade';

function SectionSA4() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA4">
			<div className="SectionSA4__wapper container">
			<h1>{t("Application.section_4.title")}</h1>
			<p>{t("Application.section_4.desc")}</p>
			<h5>{t("Application.section_4.subtitle")}</h5>
			<Fade bottom cascade>
			<div className="row">
				{t("Application.section_4.items").map((item, index) => {
					return( 
						<div key={index} className="SectionSA4__box col-12 col-md-5 col-lg-3 mx-auto">
							<div className={`SectionSA4_icon${index+1} mx-auto`}/>
							<h5>{item.title}</h5>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</div></Fade>
			</div>
		</div>
	)
}

export default SectionSA4
