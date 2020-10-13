import React from "react";
import "./styles/SectionSeo2.css";
import LayoutGrid from "../Shared/LayoutGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import Zoom from 'react-reveal/Zoom';

const SectionSeo2 = () => {
  return ( <Zoom>
    <LayoutGrid section="sectionSeo2" row="sectionSeo2_row">
      <TextGrid tr="seo.section_2" textCss="sectionSeo2_text" />
      <div className="col-sm-12 col-lg-6 "> 
        <div className="row sectionSeo2_img_row">
          <div className="col-xs-12 col-sm-6">
            <div className="img_css sectionSeo2_img1"></div>
            <div className="img_css sectionSeo2_img2"></div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="img_css sectionSeo2_img3"></div>
          </div>
        </div>
      </div>
    </LayoutGrid></Zoom>
  );
};

export default SectionSeo2;
