import React from "react";
import "./styles/SectionOA1.css";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";

const SectionOA1 = () => {
  return (
    <LayoutGrid section="sectionOA1" row="sectionOA1_row">
      <ImgGrid img="img_ourAgency_1 chevron" />
      <TextGrid textCss="sectionOA1_text col_white" tr="ourAgency.section_1" />
    </LayoutGrid>
  );
};

export default SectionOA1;
