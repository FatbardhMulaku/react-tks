import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionITc1.css";

function SectionITc1() {
	return (
		<Zoom>
    <LayoutGrid section="SectionITO1" row="sectionSeo1_row">
		<TextGrid tr="IT-Consulting.section_1" />
      	<ImgGrid img="SectionITc1_img" />
    </LayoutGrid></Zoom>
	)
}

export default SectionITc1
