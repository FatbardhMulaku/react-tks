import React from 'react';
import LearnMore from './../UI/Button/LearnMore';
/* import {FaMobileAlt} from "react-icons/fa";
import {GrCubes,GrSettingsOption} from "react-icons/gr";
import {RiBankLine} from "react-icons/ri"; */
import './SectionCo2.css';

function SectionCo2() {
    return (
        <div className="SectionCo2">
            <h1>Our Features</h1>
            <div className="SectionCo2-wapper">
                <div className="SectionCo2-left">
                    
                </div>
                <div className="SectionCo2-right">
                    <h1>We are the best Software Company in Kosova</h1>
                    <p>We offer professional outsourcing, programming, management, design or any visual or administration work. Contact us for more  information</p>
                    <LearnMore link="/" className="SectionCo2-Btn"/>
                </div>
            </div>
            
        </div>
    )
}

export default SectionCo2;
