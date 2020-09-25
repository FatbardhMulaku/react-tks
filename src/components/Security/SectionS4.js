import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "./ImgGrid";
import "./styles/SectionS4.css";
import TextGrid from "./TextGrid";

const SectionS4 = () => {
  return (
    <LayoutGrid section="sectionS4 ">
      <TextGrid textCss="section_4_text col_black" sNr="4" />
      <ImgGrid img="section4_img" />
    </LayoutGrid>
  );
};

export default SectionS4;
