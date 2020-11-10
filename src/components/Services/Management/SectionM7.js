import React from 'react';
import "./Styles/SectionM7.css";
import { useTranslation } from "react-i18next";

const WorkImg = ["SecM7_img1", "SecM7_img2", "SecM7_img3"];

function SectionM7() {
	const { t } = useTranslation();
	return (
		<div className="SectionM7 container">
			<h2>{t("Management.section7_title")}</h2>

			{t("Management.section_7").map((item, index) => {
				return(
					<div key={index} className="row my-3 SectionM7__box">
						<div className="col-md-2 col-lg-1 d-flex justify-content-center align-items-center" ><div className={WorkImg[index]}/></div>
						<p className="col-md-10 col-lg-10  my-auto"><span>{item.title}</span>{item.desc}</p>
					</div>
				);
			})}
		</div>
	)
}

export default SectionM7;
