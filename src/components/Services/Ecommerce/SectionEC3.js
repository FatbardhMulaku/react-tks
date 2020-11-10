import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionEC3.css";
import Zoom from 'react-reveal/Zoom';

function SectionEC3() {
	const { t } = useTranslation();
	return (
		<div className="SectionEC3">
			<div className="container">
			<Zoom>
			{t("Ecommerce.section_3").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}</Zoom>
			</div>
		</div>
	)
}

export default SectionEC3
