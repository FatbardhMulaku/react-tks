import React from 'react';
import "./Styles/SectionCBS6.css";
import LearnMore from "./../../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";

function SectionCBS6() {
	const { t } = useTranslation();
	return (
		<div className="SectionCBS6 container mx-auto">
			<h3>{t("Cybersecurity.section_6.title")}</h3>
			<hr className="SectionCL3--hr"/>

			
				{t("Cybersecurity.section_6.items").map((item, index) => {
					return(
						<div key={index} className="row my-3 SectionCBS6__box">
							<div className="col-10 col-md-4 col-lg-3 mx-auto">
								<div className={`img_css SectionCBS6_img${index+1}`}></div></div>
							
							<div className="col-12 col-md-8 col-lg-9 SectionCBS6-txt">
								<h4>{item.title}</h4>
								<hr className="SectionCL3--hr"/>
								<p>{item.desc}</p>
								<div className="SectionCBS6__link"><LearnMore limk="SectionCBS2" /></div>
							</div>
						</div>
					)
					})}
		</div>
	)
}

export default SectionCBS6
