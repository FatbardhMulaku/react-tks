import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionDA1.css";

function SectionDA1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionDA1" row="sectionSeo1_row">
				<TextGrid tr="DataAnalytics.section_1" />
      			<ImgGrid img="SectionDA1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}

export default SectionDA1;
