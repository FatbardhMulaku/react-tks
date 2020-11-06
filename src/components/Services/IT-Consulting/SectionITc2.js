import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITc2.css";

function SectionITc2() {
	const { t } = useTranslation();
	return (
		<div className="SectionITc2">
			<div className="SectionITc2_wapper container">
			<h2>{t("IT-Consulting.section_2.title")}</h2>

			<div  className="row">
				{t("IT-Consulting.section_2.items").map((item, index) => {
					return(
						<div key={index} className=" col-11 col-md-5 col-lg-5 col-xl-4 mx-auto ITO5_box">
							<h5>{item.title}</h5>
							<hr className="SectionCL3--hr"/>
							<p>{item.desc}</p><br/>
						</div>
					);
				})}</div>
			</div>
		</div>
	)
}

export default SectionITc2;
