import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "./ImgGrid";
import "./styles/SectionS3.css";
import TextGrid from "./TextGrid";

const SectionS3 = () => {
  return (
    <LayoutGrid section="sectionS3 " row="sectionS3_row">
      <ImgGrid img="section3_img" />
      <TextGrid textCss="section_3_text col_black" sNr="3" />
    </LayoutGrid>
  );
};

export default SectionS3;
