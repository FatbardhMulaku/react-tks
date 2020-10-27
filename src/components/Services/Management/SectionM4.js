import React from 'react';
import "./Styles/SectionM4.css";
import { useTranslation } from "react-i18next";

function SectionM4() {
	const { t } = useTranslation();
	return (
		<div className="SectionM4 container row mx-auto">
			<div className="col-10 col-md-4 col-lg-3">

                    <div className="img_css sectionM4_imgB"></div>
                    <div className="sectionM4_shape"></div></div>
					
			<div className="col-12 col-md-8 col-lg-9 M4-txt">
				{t("Management.section_4").map((item, index) => {
					return(
						<p key={index}>{item.txt}</p>
					)
				})}
			</div>
		</div>
	)
}

export default SectionM4
