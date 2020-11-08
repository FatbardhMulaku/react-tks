import React from 'react';
import Slider from "react-slick";
import "./Styles/SectionWPD2.css";
import { useTranslation } from "react-i18next";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  };

  const imgWork = ["SectionWPD2__img1", "SectionWPD2__img2", "SectionWPD2__img3"]

function SectionWPD2() {
	const { t } = useTranslation();
	return (
		<div className="SectionWPD2 container">
			<h3>{t("Web-Portal.section_2.title")}</h3>
			<hr className="SectionCL3--hr"/>
			<h5>{t("Web-Portal.section_2.desc")}</h5>

			<div className="border border-light">
				<Slider {...settings}>
				{imgWork.map((item, index) => {
					return(

						<div key={index} className="SectionWPD2_img"><div className={`SectionWPD2__img${index+1}`}/></div>
					
					);
				})}
				</Slider>
      		</div>
		</div>
	)
}

export default SectionWPD2
