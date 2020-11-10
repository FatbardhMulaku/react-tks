import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionWPD5.css";
import Fade from 'react-reveal/Fade';

function SectionWPD5() {
	const { t } = useTranslation();
	return (
		<div className="SectionWPD5 container">
				<h2>{t("Web-Portal.section_5.title")}</h2>
				<Fade bottom cascade>
				<div className="row">
					{t("Web-Portal.section_5.items").map((item, index) => {
						return( 
							<div key={index} className="SectionWPD5__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionWPD5_icon${index+1} mx-auto`}/>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						);
					})}
				</div></Fade>
		</div>
	)
}

export default SectionWPD5;
