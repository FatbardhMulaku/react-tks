import React from 'react';
import "./Styles/SectionITS6.css";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function SectionITS6() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS6 container">
			<h3>{t("IT-Support.section_6.title")}</h3>
			<Fade top big cascade>
			<div  className="row mx-auto justify-content-center mb-5 pb-5">
			{t("IT-Support.section_6.list").map((item, index) => {
				return(
						<div key={index} className="SectionITS6__box ">
							<h6>{item.desc}</h6>
							<p>{item.info}</p>
						</div>
				);
			})}
			</div></Fade>
		</div>
	)
}

export default SectionITS6;
