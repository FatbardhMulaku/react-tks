import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import TextGrid from "./../../Shared/TextGrid/TextGrid";
import "./Styles/SectionCL1.css";
import Fade from 'react-reveal/Fade';

function SectionCL1() {
	return (
	<div className="container-fluid">
		<Fade>
		<LayoutGrid section="SectionCL1 ">
			<TextGrid textCss="SectionCL1_text" tr="Cloud.section_1" />
			<div className="col-sm-12 col-lg-6 my-auto">
				
				<div className="sectionCL1_img my-auto mx-auto"></div>
			</div>
		</LayoutGrid>
	</Fade>
	{/* <div className="sectionCL1_shape"></div> */}
	</div>
	);
}

export default SectionCL1;
