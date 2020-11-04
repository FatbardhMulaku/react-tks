import React from 'react';
import "./Styles/SectionITO4.css";
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

function SectionITO4() {
	const { t } = useTranslation();
	return (
		<div className="SectionITO4 container">
			<h3>{t("IT-Outsourcing.section_4.title")}</h3>

			<div className="SectionITO4_wapper">
			<Slider {...settings}>
				{t("IT-Outsourcing.section_4.list").map((item, index) => {
					return(
						<div key={index} className="SectionCL3--Box row justify-content-center">
							<div className="SectionITO4_left col-sm-11 col-lg-6 my-auto">
								<h5>{item.title}</h5>
								<p>{item.desc}</p>
							</div>
							<div className="SectionITS5_right col-sm-11 col-lg-5">
								<div className="SectionITO4__img"/>
								<Link to="/">Project Detalis</Link>
							</div>
						</div>
					);
				})}

			</Slider>
			</div>
		</div>
	)
}

export default SectionITO4;
