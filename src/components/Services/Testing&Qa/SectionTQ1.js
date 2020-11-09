import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionTQ1.css";

function SectionTQ1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionIA1" row="sectionSeo1_row">
				<TextGrid tr="Testing-Qa.section_1" />
      			<ImgGrid img="SectionTQ1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}


export default SectionTQ1
