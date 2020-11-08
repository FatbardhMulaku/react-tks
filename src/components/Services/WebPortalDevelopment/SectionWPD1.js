import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionWPD1.css";

function SectionWPD1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionIA1" row="sectionSeo1_row">
				<TextGrid tr="Web-Portal.section_1" />
      			<ImgGrid img="SectionWPD1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}

export default SectionWPD1
