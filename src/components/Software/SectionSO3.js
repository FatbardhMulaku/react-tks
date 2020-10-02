import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { useTranslation } from "react-i18next";
import "./styles/SectionSO3.css";
import Carousel1 from "../UI/Carousel/Carousel1";
import CardSlider from "../UI/Card/CardSlider";

const SectionSO3 = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };

  return (
    <LayoutContainer section="sectionSO3">
      <h1 className="text-center font_ubuntu font-w-500">
        {t("software.section_3.title")}
      </h1>
      <Carousel1 settingsProps={settings}>
        {t("software.section_3.allServices").map((item, idx) => (
          <CardSlider
            key={idx}
            title={item.title}
            desc={item.desc}
            cardImg="sectionSO2_icon_box"
            img={`sectionSO2_icon${idx + 1}`}
          />
        ))}
      </Carousel1>
    </LayoutContainer>
  );
};

export default SectionSO3;
