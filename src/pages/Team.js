import React, { Fragment } from 'react';
import BannerT from './../components/Team/BannerT'
import SectionOne from './../components/Team/SectionT1';
import SectionTwo from './../components/Team/SectionT2';
import SectionThree from './../components/Team/SectionT3';
import SectionFour from './../components/Team/SectionT4';

function Team() {
    return (
        <Fragment>
            <SectionOne>
                <BannerT/>
            </SectionOne>
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </Fragment>
        )
}
export default Team;
