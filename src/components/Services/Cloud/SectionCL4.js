import React from 'react';
import "./Styles/SectionCL4.css";
import { useTranslation } from "react-i18next";

function SectionCL4() {
	const { t } = useTranslation();
	return (
		<div className="SectionCL4 container">
			<h2>{t("Cloud.section4_title")}</h2>
			<div className="SectionCL4--wapper">
				
				{t("Cloud.section_4").map((item, index) => {
					return (
						<div key={index} className="SectionCL4__box1 row">
							<div className={item.klasa}/>
							<div className="col-lg-3">
								<div className={`img_css SectionCL4_img${index+1}`}></div>
								<div className="sectionCL4_shape"></div>
							</div>
							<div className="col-lg-4">
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						</div>
					);
				})}


			</div>
		</div>
	)
}

export default SectionCL4;	
