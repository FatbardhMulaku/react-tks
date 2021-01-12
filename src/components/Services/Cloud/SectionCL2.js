import React from 'react';
import "./Styles/SectionCL2.css";
import { useTranslation } from "react-i18next";
import Flip from 'react-reveal/Flip';

function SectionCL2() {
	const { t } = useTranslation();
	return (
		<div className="SectionCL2 container">
			<div className="SectionCL2__head">
				<div className="SectionCL2__head--img"/>
				<h3>{t("Cloud.section2_title")}</h3>
			</div>
			<p>{t("Cloud.section2_desc")}</p>

			<Flip top >
			<div className="SectionCL2_grid mx-auto">
			{t("Cloud.section_2").map((item, index) => {
				return(
						<div key={index} className={`m-3 Cloud-S2_Bimg${index+1}`}>
							<div className="Cloud-S2_icon-b"><div className={`Cloud-S2_icon${index+1}`} /></div>
							<p>{item.info}</p>
						</div>	 
					
				);
			})}
			</div></Flip>
		</div>
	)
}

export default SectionCL2;
