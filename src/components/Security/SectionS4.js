import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgGrid from "../Shared/ImgGrid";
import "./styles/SectionS4.css";
import TextGrid from "../Shared/TextGrid/TextGrid";
import Fade from 'react-reveal/Fade';

const SectionS4 = () => {
  return (<Fade bottom>
    <LayoutGrid section="sectionS4" id="security-4">
      <TextGrid
        textCss="section_4_text col_black"
        tr="security.section_4"
        linkBtn="/web-services"
        offsetBtn={0}
      />
      <ImgGrid img="section4_img" />
    </LayoutGrid></Fade>
  );
};

export default SectionS4;
