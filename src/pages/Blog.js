import React from 'react';
import Navbar from './../components/Home/Navbar';
import BannerB from './../components/Blog/BannerB';
import Footer from './../components/Home/Footer';
import SectionOne from './../components/Blog/SectionB1';
import SectionTwo from './../components/Blog/SectionB2'


const Blog = () => {
    return (
        <>
        <SectionOne>
            <Navbar />
            <BannerB />
        </SectionOne>
        <SectionTwo />
        <Footer />
        </>
    )
}
export default Blog;