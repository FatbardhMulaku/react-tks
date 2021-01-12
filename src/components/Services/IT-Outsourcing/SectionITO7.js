import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITO7.css";
import Fade from 'react-reveal/Fade';

function SectionITO7() {
	const { t } = useTranslation();
	return (
		<div className="SectionITO7 container">
			<h3>{t("IT-Outsourcing.section_7.title")}</h3>
			<p>{t("IT-Outsourcing.section_7.desc")}</p>

			<h6>{t("IT-Outsourcing.section_7.items1_title")}</h6>
			<Fade bottom cascade>
			<div  className="row mx-auto justify-content-center">
			{t("IT-Outsourcing.section_7.items1").map((item, index) => {
				return(
						<div key={index} className="SectionITO7__box ">
							<h6>{item.desc}</h6>
							<p>{item.info}</p>
						</div>
				);
			})}
			</div></Fade>


			<h6>{t("IT-Outsourcing.section_7.items2_title")}</h6>
			<Fade bottom cascade>
			<div  className="row mx-auto justify-content-center mb-5 pb-5">
			{t("IT-Outsourcing.section_7.items2").map((item, index) => {
				return(
						<div key={index} className="SectionITO7__box ">
							<h6>{item.desc}</h6>
							<p>{item.info}</p>
						</div>
				);
			})}
			</div></Fade>
		</div>
	)
}

export default SectionITO7;
