import React from 'react';
import { Link } from 'react-router-dom';
import './SectionB2.css';

function SectionB2() {
    return (
        <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2500" className="SectionB2">
            <h1>Top pick artickle</h1>
            <div className="SectionB2_wrapper">

                <div className="Bbox Bb">
                    <div className="BlogArtickle__img1"/>
                    <h3>Why KosovaOutsource is <br/> the best company in region</h3>
                    <Link to="/blog" className="Bbox__link">Read Story</Link>
                </div>
            
                <div className="Bbox Bc">
                    <div className="BlogArtickle__img2"/>
                    <h3>Is KosovaOutsource the <br/> best company</h3>
                    <Link to="/blog">Read Story</Link>
                </div>

                <div className="Bbox Bd">
                    <div className="BlogArtickle__img3"/>
                    <h3>Are loyal costumers of <br/> KosovaOutsource</h3>
                    <Link to="/blog">Read Story</Link>
                </div>

                <div className="Bbox Be">
                    <div className="BlogArtickle__img4"/>
                    <h3>How can I apply for a job<br/> at KosovaOutsource</h3>
                    <Link to="/blog">Read Story</Link>
                </div>

            </div>

        </div>
    )
}

export default SectionB2
