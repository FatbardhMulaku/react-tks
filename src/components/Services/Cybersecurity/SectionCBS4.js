import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionCBS4.css";
import Fade from 'react-reveal/Fade';

function SectionCBS4() {
	const { t } = useTranslation();
	return (
		<div className="SectionCBS4">
			<div className="SectionCBS4__wapper container">
				<h2>{t("Cybersecurity.section_4.title")}</h2>
				<Fade bottom cascade>
				<div className="row">
					{t("Cybersecurity.section_4.items").map((item, index) => {
						return( 
							<div key={index} className="SectionITc6__Box col-10 col-sm-5 col-lg-3 mx-auto">
								<div className={`SectionCBS4_icon${index+1} mx-auto`}/>
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

export default SectionCBS4
