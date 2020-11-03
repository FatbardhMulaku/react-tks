import React from 'react';
import "./Styles/SectionITS6.css";
import { useTranslation } from "react-i18next";

function SectionITS6() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS6 container">
			<h3>{t("IT-Support.section_6.title")}</h3>

			<div  className="row mx-auto justify-content-center">
			{t("IT-Support.section_6.list").map((item, index) => {
				return(
						<div key={index} className="SectionITS6__box col-md-4 col-lg-2">
							<h6>{item.desc}</h6>
							<p>{item.info}</p>
						</div>
				);
			})}
			</div>
		</div>
	)
}

export default SectionITS6;
