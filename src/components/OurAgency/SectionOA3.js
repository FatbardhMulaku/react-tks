import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import "./styles/SectionOA3.css";

const SectionOA3 = () => {
  return (
    <LayoutGrid section="sectionOA3 " row="sectionOA3_row">
      <TextGrid textCss="sectionOA3_text col_black" tr="ourAgency.section_3" />
      <ImgGrid img="sectionOA3_img" />
    </LayoutGrid>
  );
};

export default SectionOA3;
