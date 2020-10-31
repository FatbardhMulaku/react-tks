import React from 'react';
import Slider from "react-slick";
import "./Styles/SectionCL3.css";
import { useTranslation } from "react-i18next";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  };

function SectionCL3() {
	const { t } = useTranslation();
	return (
		<div className="SectionCL3 container">
			<h3 className="text-center">{t("Cloud.section3_title")}</h3>
			<p>{t("Cloud.section3_desc")}</p>

			<div className="border border-light rounded">
				<Slider {...settings}>
				{t("Cloud.section3_slider").map((item, index) => {
					return(
						<div key={index} className="SectionCL3--Box row justify-content-center">
							<div className="SectionCL3_left col-sm-11 col-lg-6">
								<h3>{item.title}</h3>
								<hr className="SectionCL3--hr"/>
								<p>{item.desc}</p>
							</div>
							<div className="SectionCL3_right col-sm-11 col-lg-5">
								<div className="SectionCL3__img"/>
							</div>
						</div>
					);
				})}

				</Slider>
      </div>
		</div>
	)
}

export default SectionCL3
