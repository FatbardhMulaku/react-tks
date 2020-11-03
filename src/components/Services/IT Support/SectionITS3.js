import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITS3.css";

function SectionITS3() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS3 container">
			<h3>{t("IT-Support.section_3")}</h3>
			<hr className="SectionCL3--hr"/>
			<div className="SectionITS3__box" >

				{t("IT-Support.section_3list").map((item, index) => {
					return (
						<p key={index} className={`ITS3__box--txt${index+1}`}>{item}</p>
					)
				})}
			</div>
		</div>
	)
}

export default SectionITS3
