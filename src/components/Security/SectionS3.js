import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import TextGrid from "../Shared/TextGrid/TextGrid";
import "./styles/SectionS3.css";
import Fade from 'react-reveal/Fade';
const SectionS3 = () => {
  return (  <Fade bottom>
    <LayoutGrid section="sectionS3 " row="sectionS3_row">
      <ImgGrid img="section3_img img_hover" />
      <TextGrid
        textCss="section_3_text col_black"
        tr="security.section_3"
        linkBtn="security-4"
        offsetBtn={-50}
      />
    </LayoutGrid></Fade>
  );
};

export default SectionS3;
