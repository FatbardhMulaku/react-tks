import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITc6.css";

function SectionITc6() {
	const { t } = useTranslation();
	return (
		<div className="SectionITc6">
			<div className="SectionITc6__wapper container">
				<h3>{t("IT-Consulting.section_6.title")}</h3>

				<div className="row">
					{t("IT-Consulting.section_6.items").map((item, index) => {
						return( 
							<div key={index} className="SectionITc6__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionITc6_icon${index+1} mx-auto`}/>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}

export default SectionITc6;
