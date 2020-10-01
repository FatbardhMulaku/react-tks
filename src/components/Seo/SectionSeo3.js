import React from "react";
import Carousel1 from "../UI/Carousel/Carousel1";
import "./styles/SectionSeo3.css";
import { useTranslation } from "react-i18next";

const images = [
  "sectionSeo3_img1",
  "sectionSeo3_img2",
  "sectionSeo3_img3",
  "sectionSeo3_img4",
];

const SectionSeo3 = () => {
  const { t } = useTranslation();
  return (
    <div className="container sectionSeo3 ">
      <h2 className="text-center font_helvetica font-w-600">
        {t("seo.section_3")}
      </h2>
      <Carousel1 images={images} />
    </div>
  );
};

export default SectionSeo3;
