import React from "react";
import Carousel1 from "../UI/Carousel/Carousel1";
import "./styles/SectionSeo3.css";
import { useTranslation } from "react-i18next";
import LayoutContainer from "../Shared/LayoutContainer";

const images = [
  "sectionSeo3_img1",
  "sectionSeo3_img2",
  "sectionSeo3_img3",
  "sectionSeo3_img4",
];

const SectionSeo3 = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };
  return (
    <LayoutContainer section="sectionSeo3">
      <h2 className="text-center font_helvetica font-w-600">
        {t("seo.section_3")}
      </h2>
      <Carousel1 settingsProps={settings}>
        {images.map((item, index) => (
          <div key={index} className={`img_css ${item}`}></div>
        ))}
      </Carousel1>
    </LayoutContainer>
  );
};

export default SectionSeo3;
