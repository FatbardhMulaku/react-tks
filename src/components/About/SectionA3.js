import React from 'react';
import './SectionA3.css';
import LearnMore from "./../UI/Button/LearnMore";

function SectionA3() {
    return (
        <div className="SectionA3">
            <div className="SectionA3a">
                <h5>Testimonials</h5>
                <h1>What Our Clients Are Saying About US</h1>
                <p>There are many variatious of passage of Lorem ipsum avabile, but the majority have suffered alternation in some from by injected humour.</p>
                <LearnMore offset={-90} />
            </div>
            <div className="SectionA3b">
                <div className="SectionA3b-rrethi">
                    <div className="SectionA3b-img1"/>
                    <div className="SectionA3b-imgb"><div className="SectionA3b-img2"/></div>
                    <div className="SectionA3b-imgc"><div className="SectionA3b-img3"/></div>
                    <div className="SectionA3b-imgd"><div className="SectionA3b-img4"/></div>
                    <div className="SectionA3b-imge"><div className="SectionA3b-img5"/></div>
                </div>
            </div>
        </div>
    )
}

export default SectionA3
