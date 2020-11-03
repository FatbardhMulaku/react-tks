import React from 'react';
import "./Styles/SectionITS5.css";
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


function SectionITS5() {
	const { t } = useTranslation();
	return (
		<div className="SectionITS5 container">
			<h3>{t("IT-Support.section_5.title")}</h3>
			<hr className="SectionCL3--hr"/>

			<Slider {...settings}>
				{t("IT-Support.section_5.list").map((item, index) => {
					return(
						<div key={index} className="SectionCL3--Box row justify-content-center">
							<div className="SectionCL3_left col-sm-11 col-lg-6">
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
							</div>
							<div className="SectionITS5_right col-sm-11 col-lg-5">
								<div className="SectionITS5__img"/>
								<Link to="/">Project Detalis</Link>
							</div>
						</div>
					);
				})}

				</Slider>
		</div>
	)
}

export default SectionITS5
