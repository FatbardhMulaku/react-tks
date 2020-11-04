import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import "./Styles/SectionITO5.css";

function SectionITO5() {
	const { t } = useTranslation();
	return (
		<div className="SectionITO5">
			<div className="SectionITO5__wapper container">
				<h2>{t("IT-Outsourcing.section_5.title")}</h2>

				<div  className="row">
					{t("IT-Outsourcing.section_5.list").map((item, index) => {
						return(
							<div key={index} className=" col-11 col-md-5 col-lg-5 col-xl-3 mx-auto ITO5_box">
								<h5>{item.title}</h5>
								<hr className="SectionCL3--hr"/>
								<p className={`ITO5_box_p${index+1}`}>{item.desc}</p><br/>
								<Link to="it-outsourcing" className="ITO5_box--btn">{item.btn}</Link>
							</div>
						);
					})}</div>

			</div>
		</div>
	)
}

export default SectionITO5;
