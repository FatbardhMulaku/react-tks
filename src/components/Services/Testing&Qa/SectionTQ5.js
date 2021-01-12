import React from 'react';
import "./Styles/SectionTQ5.css";
import { useTranslation } from "react-i18next";

function SectionTQ5() {
	const { t } = useTranslation();
	return (
		<div className="SectionTQ5 container">
			{t("Testing-Qa.section_5.txt").map((item, index) => {
					return(
						<p key={index}>{item.desc}</p>
					)
				})}


			<div className="row justify-content-center">
				{t("Testing-Qa.section_5.items").map((item, index) => {
					return( 
						<div key={index} className="SectionTQ5__Box ">
							<div className={`SectionTQ5_icon${index+1} mx-auto`}/>
							<h6>{item.title}</h6>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionTQ5
