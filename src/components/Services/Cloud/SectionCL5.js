import React from 'react';
import "./Styles/SectionCL5.css";
import { useTranslation } from "react-i18next";

function SectionCL5() {
	const { t } = useTranslation();
	return (
		<div className="SectionCL5 container-fluid">
			<div className="container row mx-auto align-items-center SectionCL5__wawpper">
				<div className="SectionCL5__left col-sm-12 col-lg-6">
					<h3>{t("Cloud.section5_title")}</h3>
					<p>{t("Cloud.section5_desc")}</p>
				</div>
				<div className="SectionCL5__right col-sm-12 col-lg-6">
					<div className="SectionCL5__img"/>
				</div>
			</div>
		</div>
	)
}

export default SectionCL5
