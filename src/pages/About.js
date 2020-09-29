import React, { Fragment } from 'react';
import SectionOne from './../components/About/SectionA1';
import SectionTwo from './../components/About/SectionA2';
import SectionThree from './../components/About/SectionA3';

function About() {
    return (
        <Fragment>
            <SectionOne />
            <SectionTwo/>
            <SectionThree />
        </Fragment>
    )
}

export default About
