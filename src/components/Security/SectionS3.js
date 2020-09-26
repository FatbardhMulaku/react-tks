import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import "./styles/SectionS3.css";

const SectionS3 = () => {
  return (
    <LayoutGrid section="sectionS3 " row="sectionS3_row">
      <ImgGrid img="section3_img" />
      <TextGrid textCss="section_3_text col_black" tr="security.section_3" />
    </LayoutGrid>
  );
};

export default SectionS3;
