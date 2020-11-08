import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionIA1.css";

function SectionIA1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionIA1" row="sectionSeo1_row">
				<TextGrid tr="Image-Analysis.section_1" />
      			<ImgGrid img="SectionIA1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}

export default SectionIA1
