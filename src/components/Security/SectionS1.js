import React from "react";
import "./styles/SectionS1.css";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "./ImgGrid";
import TextGrid from "./TextGrid";

const SectionS1 = () => {
  return (
    <LayoutGrid section="sectionS1" row="sectionS1_row">
      <ImgGrid img="img_security_1" />
      <TextGrid textCss="section_1_text col_white" sNr="1" />
    </LayoutGrid>
  );
};

export default SectionS1;
