import React from 'react';
import "./Styles/SectionITc5.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  };

function SectionITc5() {
	const { t } = useTranslation();
	return (
		<div className="SectionITc5 container">
			<h3>{t("IT-Consulting.section_5.title")}</h3>

			<Slider {...settings}>
				{t("IT-Consulting.section_5.items").map((item, index) => {
					return(
						<div key={index} className="SectionCL3--Box row justify-content-center">
							<div className="SectionCL3_left col-sm-11 col-lg-6">
								<h4>{item.title}</h4>
								<p>{item.desc}</p>
							</div>
							<div className="SectionITS5_right col-sm-11 col-lg-5">
								<div className="SectionITc5__img"/>
								<Link to="/">Project Detalis</Link>
							</div>
						</div>
					);
				})}
			</Slider>

		</div>
	)
}

export default SectionITc5
