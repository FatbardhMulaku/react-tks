import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionSA2.css";

function SectionSA2() {
	const { t } = useTranslation();
	return (
		<div className="SectionSA2">
			<div className="SectionSA2_wapper container">
				<h3>{t("Application.section_2.title")}</h3>
				<p>{t("Application.section_2.desc")}</p>

				<div className="row justify-content-center">
				{t("Application.section_2.items").map((item, index) => {
					return(
						<div key={index} className="SectionDA3__box">
								<div className={`SectionSA2__img${index+1}`} />
								<p>{item}</p>
						</div>
					);
				})}
				</div>
			</div>
		</div>
	)
}

export default SectionSA2
