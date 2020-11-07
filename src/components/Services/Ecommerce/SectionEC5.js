import React from 'react';
import "./Styles/SectionEC5.css";
import LearnMore from "./../../UI/Button/LearnMore";
import { useTranslation } from "react-i18next";

function SectionEC5() {
	const { t } = useTranslation();
	return (
		<div className="SectionEC5 container mx-auto">
			<h3>{t("Ecommerce.section_5.title")}</h3>
			<hr className="SectionCL3--hr"/>

			
				{t("Ecommerce.section_5.items").map((item, index) => {
					return(
						<div key={index} className="row my-5">
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

export default SectionEC5
