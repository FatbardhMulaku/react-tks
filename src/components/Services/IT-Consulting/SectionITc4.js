import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITc4.css";
import Fade from 'react-reveal/Fade';

function SectionITc4() {
	const { t } = useTranslation();
	return (
		<div className="SectionITc4">
			<div className="SectionITc4_wapper container">
				<h3>{t("IT-Consulting.section_4.title")}</h3>
				<p>{t("IT-Consulting.section_4.desc")}</p>

				<Fade bottom big >
				<div className="row justify-content-center ITc4__box">
				{t("IT-Consulting.section_4.items").map((item, index) => {
					return (
						<p key={index} className="col-10 col-sm-5 col-lg-2">{item}</p>
					)
				})}</div></Fade>
			</div>
		</div>
	)
}

export default SectionITc4;
