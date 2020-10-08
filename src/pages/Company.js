import React, { Fragment } from 'react';
import SectionOne from './../components/Company/SectionCo1';
import SectionTwo from './../components/Company/SectionCo2';
import SectionThree from './../components/Company/SectionCo3';

function Company() {
    return (
        <Fragment>
            <SectionOne/>
            <SectionTwo />
            <SectionThree />
        </Fragment> 
    );
}

export default Company
