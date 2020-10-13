import React from "react";
import "./styles/SectionWS1.css";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import Fade from 'react-reveal/Fade';

const SectionWS1 = () => {
  return (<Fade> 
    <LayoutGrid section="sectionWS1" row="sectionWS1_row">
      <ImgGrid img="img_webServices_1 chevron" />
      <TextGrid
        textCss="sectionWS1_text col_white"
        tr="webServices.section_1"
      />
    </LayoutGrid></Fade>
  );
};

export default SectionWS1;
