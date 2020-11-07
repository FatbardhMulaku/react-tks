import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionCBS1.css";

function SectionCBS1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionDA1" row="sectionSeo1_row">
				<TextGrid tr="Cybersecurity.section_1" />
      			<ImgGrid img="SectionCBS1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}

export default SectionCBS1
