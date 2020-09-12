import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import WorkSection from '../components/Work/WorkSection';
import About from '../components/About/About';
import Footer from '../components/Footer';

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