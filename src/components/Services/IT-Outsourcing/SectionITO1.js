import React from 'react';
import LayoutGrid from "../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import './Styles/SectionITO1.css';

function SectionITO1() {
	return (  <Zoom>
		<LayoutGrid section="SectionITO1" row="sectionSeo1_row">
		  <TextGrid tr="seo.section_1" />
		  <ImgGrid img="SectionITO1_img" />
		</LayoutGrid></Zoom>
	  );
}

export default SectionITO1
