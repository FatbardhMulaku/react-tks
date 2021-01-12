import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionEC4.css";

function SectionEC4() {
	const { t } = useTranslation();
	return (
		<div className="SectionEC4 container">
			<h3>{t("Ecommerce.section_4.title")}</h3>
			<hr className="SectionCBS5--hr"/>

			<div className="row ">
				{t("Ecommerce.section_4.items").map((item, index) => {
					return( 
						<div key={index} className="SectionCBS2__Boxa mx-auto">
							<div className={`SectionEC4_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionEC4
