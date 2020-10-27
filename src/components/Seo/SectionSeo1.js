import React from "react";
import "./styles/SectionSeo1.css";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import Zoom from 'react-reveal/Zoom';

const SectionSeo1 = () => {
  return (  <Zoom>
    <LayoutGrid section="sectionSeo1" row="sectionSeo1_row">
      <ImgGrid img="sectionSeo1_img" />
      <TextGrid tr="seo.section_1" />
    </LayoutGrid></Zoom>
  );
};

export default SectionSeo1;
