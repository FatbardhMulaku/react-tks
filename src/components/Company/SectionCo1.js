import React from 'react';
import LearnMore from './../UI/Button/LearnMore';
import SectionCo1Slider from './SectionCo1Slider';
import './SectionCo1.css';

function SectionCo1() {
    return (
        <div className="SectionCo1">
            <div className="SectionCo1_left">
                <h1>KosovaOutsource is very serious company with great services.</h1>
                <p>We offer professional outsourcing, programming, 
                    management, design or any visual or administration 
                    work. Contact us for more  information.</p>
                <LearnMore link="/" className="SectionCo1-Btn"/>
            </div>
            <SectionCo1Slider />
        </div>
    )
}

export default SectionCo1
