import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import TextGrid from "./../../Shared/TextGrid/TextGrid";
import Fade from 'react-reveal/Fade';
import "./Styles/SectionM1.css";

function SectionM1() {
    return (<Fade>
        <LayoutGrid section="SectionM1">
          <TextGrid textCss="SectionM1_text" tr="Management.section_1" />
          <div className="col-sm-12 col-lg-6 mt-4">
            <div className="img_css sectionM1_img"></div>
            <div className="sectionM1_shape"></div>
          </div>
        </LayoutGrid></Fade>
    )
}

export default SectionM1
