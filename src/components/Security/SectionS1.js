import React from "react";
import "./styles/SectionS1.css";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";

const SectionS1 = () => {
  return (
    <LayoutGrid section="sectionS1" row="sectionS1_row">
      <ImgGrid img="img_security_1 " />
      <TextGrid
        textCss="section_1_text col_white"
        tr="security.section_1"
        linkBtn="security-2"
        offsetBtn={-150}
      />
    </LayoutGrid>
  );
};

export default SectionS1;
