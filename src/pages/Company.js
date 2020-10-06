import React, { Fragment } from 'react';
import SectionOne from './../components/Company/SectionCo1';
import SectionTwo from './../components/Company/SectionCo2';

function Company() {
    return (
        <Fragment>
            <SectionOne/>
            <SectionTwo />
            {/* <SectionThree />
            <SectionFour /> */}
        </Fragment> 
    );
}

export default Company
