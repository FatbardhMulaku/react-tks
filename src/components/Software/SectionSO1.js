import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import "./styles/SectionSO1.css";
import Fade from 'react-reveal/Fade';

const SectionSO1 = () => {
  return ( <Fade>
    <LayoutGrid section="sectionSO1">
      <TextGrid textCss="sectionSO1_text" tr="software.section_1" />
      <div className="col-sm-12 col-lg-6">
        <div className="img_css sectionSO1_img"></div>
        <div className="sectionSO1_shape"></div>
      </div>
    </LayoutGrid></Fade>
  );
};

export default SectionSO1;
