import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionSA1.css";

function SectionSA1() {
	return (
		<Zoom>
    <LayoutGrid section="SectionITO1" row="sectionSeo1_row">
		<TextGrid tr="Application.section_1" />
      	<ImgGrid img="SectionSA1_img" />
    </LayoutGrid></Zoom>
	)
}

export default SectionSA1;
