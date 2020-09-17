import React from 'react';
import Navbar from './../components/Home/Navbar';
import BannerCS from './../components/CaseStudies/BannerCS';
import Footer from './../components/Home/Footer';
import SectionOne from './../components/CaseStudies/SectionCS1';
import SectionTwo from './../components/CaseStudies/SectionCS2';
import SectionThree from './../components/CaseStudies/SectionCS3';


const CaseStudies = () => {
    return (
        <>
        <SectionOne>
            <Navbar />
            <BannerCS />
        </SectionOne>
        <SectionTwo />
        <SectionThree />
         <Footer /> 
        </>
    )
}
export default CaseStudies;