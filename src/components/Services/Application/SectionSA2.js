import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA2.css";
import Slide from 'react-reveal/Slide';

function SectionSA2() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA2">
			<div className="SectionSA2_wapper container">
				<h3>{t("Application.section_2.title")}</h3>
				<p>{t("Application.section_2.desc")}</p>

				<Slide bottom cascade>
				<div className="row justify-content-center">
				{t("Application.section_2.items").map((item, index) => {
					return(
						<div key={index} className="SectionDA3__box">
								<div className={`SectionSA2__img${index+1}`} />
								<p>{item}</p>
						</div>
					);
				})}
				</div></Slide>
			</div>
		</div>
	)
}

export default SectionSA2;
