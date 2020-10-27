import React from 'react';
import "./Styles/SectionM3.css";
import { useTranslation } from "react-i18next";

function SectionM3() {
	const { t } = useTranslation();
	return (
		<div className="SectionM3 container row mt-5 mx-auto">
			<div className="col-sm-12 col-lg-7 SectionM3_left">
				<h3>{t("Management.section_3title")}</h3>
            	<p>{t("Management.section_3desc")}</p>
				{t("Management.section_3").map((item, index) => {
					return(
						<div key={index}>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					)
				})}
			</div>
			<div className="col-sm-12 col-lg-5 SectionM3_right">
				<div className="sWDa col-12">
                    <div className="img_css sectionM3_imgB"></div>
                    <div className="sectionM3_shapeB"></div></div>
                <div className="sWDb col-12">
                    <div className="img_css sectionM3_imgA"></div>
                    <div className="sectionM3_shapeA"></div>
                </div>
			</div>
		</div>
	)
}

export default SectionM3
