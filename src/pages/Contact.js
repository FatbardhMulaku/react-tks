import React from 'react';
import Navbar from './../components/Home/Navbar';
import BannerC from './../components/Contact/BannerC';
import Footer from './../components/Home/Footer';
import SectionOne from './../components/Contact/SectionC1';
import SectionTwo from './../components/Contact/SectionC2'


const Contact = () => {
    return (
        <>
        <SectionOne>
            <Navbar />
            <BannerC />
        </SectionOne>
        <SectionTwo />
        <Footer />
        </>
    )
}
export default Contact;