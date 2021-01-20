import React from 'react';
import { useTranslation } from "react-i18next";
import "./Styles/SectionITS4.css";
import Fade from 'react-reveal/Fade';

function SectionITS4() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS4 container-fluid">
			<div className="SectionITS4__wapper container align-items-center">
				<h2>{t("IT-Support.section_4.title")}</h2>

				<Fade bottom cascade>
				<div  className="row">
					{t("IT-Support.section_4.box").map((item, index) => {
						return(
							<div key={index} className="col-sm-12 col-md-5 col-lg-3 mx-auto ITS4_box">
								<div className={`ITS4_icon${index+1}`}/>
								<h5>{item.title}</h5>
								<p>{item.desc}</p>
							</div>
						);
					})}</div></Fade>
			</div>
		</div>
	)
}

export default SectionITS4
