import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionWPD3.css";

function SectionWPD3() {
	const { t } = useTranslation();
	return (
		<div className="SectionWPD3">
			<div className="SectionWPD3__wapper container">
				<h2>{t("Web-Portal.section_3.title")}</h2>
				<hr className="SectionCL3--hr"/>

				<div className="row">
					{t("Web-Portal.section_3.items").map((item, index) => {
						return( 
							<div key={index} className="SectionITc6__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionWPD3_icon${index+1} mx-auto`}/>
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

export default SectionWPD3
