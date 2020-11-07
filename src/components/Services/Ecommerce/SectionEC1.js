import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import ImgGrid from "./../../Shared/services/imgGrid";
import TextGrid from "./../../Shared/services/textGrid";
import Zoom from 'react-reveal/Zoom';
import "./Styles/SectionEC1.css";


function SectionEC1() {
	return (
		<Zoom>
    		<LayoutGrid section="SectionDA1" row="sectionSeo1_row">
				<TextGrid tr="Ecommerce.section_1" />
      			<ImgGrid img="SectionEC1_img" />
    		</LayoutGrid>
		</Zoom>
	);
}

export default SectionEC1
