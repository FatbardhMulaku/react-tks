import React from 'react';
import Hero from './../components/Hero/Hero';
import Banner from './../components/Hero/Banner';
import Services from './../components/Services/Services';
import Navbar from './../components/Hero/Navbar';
import Team from './../components/Team/Team';
import WorkSection from './../components/Work/WorkSection';
import About from './../components/About/About';
import Footer from './../components/Footer/Footer';

const Home = () => {
    return (
        <>
        <Hero>
            <Navbar />
            <Banner />
        </Hero>
        <Services />
        <Team />
        <WorkSection />
        <About />
        <Footer />
        </>
    )
}
export default Home;