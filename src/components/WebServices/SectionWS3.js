import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import "./styles/SectionWS3.css";

const SectionWS3 = () => {
  return (
    <LayoutGrid section="sectionWS3 " row="sectionWS3_row">
      <TextGrid
        textCss="sectionWS3_text col_black"
        tr="webServices.section_3"
      />
      <ImgGrid img="sectionWS3_img" />
    </LayoutGrid>
  );
};

export default SectionWS3;
