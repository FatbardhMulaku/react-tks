import React from "react";
import LayoutGrid from "./../../Shared/LayoutGrid";
import TextGrid from "./../../Shared/TextGrid/TextGrid";
import "./Styles/SectionWD1.css";
import Fade from 'react-reveal/Fade';

const SectionWD1 = () => {
  return ( <Fade>
    <LayoutGrid section="SectionWD1">
      <TextGrid textCss="SectionWD1_text" tr="webdesign.section_1" />
      <div className="col-sm-12 col-lg-6">
        <div className="img_css sectionSO1_img"></div>
        <div className="sectionSO1_shape"></div>
      </div>
    </LayoutGrid></Fade>
  );
};

export default SectionWD1;
