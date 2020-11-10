import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionIA4.css";
import Fade from 'react-reveal/Fade';

function SectionIA4() {
	const { t } = useTranslation();
	return (
		<div className="SectionIA4">
			<div className="SectionIA4__wapper container">
				<h2>{t("Image-Analysis.section_4.title")}</h2>

				<Fade bottom cascade>
				<div className="row">
					{t("Image-Analysis.section_4.items").map((item, index) => {
						return( 
							<div key={index} className="SectionITc6__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionIA4_icon${index+1} mx-auto`}/>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						);
					})}
				</div></Fade>
			</div>
		</div>
	)
}

export default SectionIA4;
