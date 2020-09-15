import React from 'react';
import SectionOne from '../components/Home/SectionH1';
import Banner from './../components/Home/Banner';
import Navbar from '../components/Home/Navbar';
import SectionTwo from './../components/Home/SectionH2';
import SectionThree from './../components/Home/SectionH3';
import SectionFour from './../components/Home/SectionH4';
import SectionFive from './../components/Home/SectionH5';
import SectionSix from './../components/Home/SectionH6';
import Footer from './../components/Home/Footer';


const Home = () => {
    return (
        <>
        <SectionOne>
            <Navbar />
            <Banner />
        </SectionOne>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
        </>
    )
}
export default Home;