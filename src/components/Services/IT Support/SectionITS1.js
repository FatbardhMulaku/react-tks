import React from 'react';
import LayoutGrid from "./../../Shared/LayoutGrid";
import TextGrid from "./../../Shared/TextGrid/TextGrid";
import Fade from 'react-reveal/Fade';
import "./Styles/SectionITS1.css"

function SectionITS1() {
	return (
		<div>
			<Fade>
			<LayoutGrid section="SectionITS1 ">
				<TextGrid textCss="SectionCL1_text" tr="IT-Support.section_1" />
				<div className="col-sm-12 col-lg-6 my-auto">
		
					<div className="sectionITS1_img my-auto mx-auto"></div>
				</div>
			</LayoutGrid>
		</Fade>
		</div>
	)
}

export default SectionITS1
