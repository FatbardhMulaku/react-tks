import React from 'react';
import { Link } from 'react-router-dom';
import './SectionCe1.css';

function SectionCe1() {
    return (
        <div className="SectionCe1 align-items-center">
            <div className="container justify-content-center align-items-center row my-auto mx-auto SectionCe1_wapper">
                <div className="col-sm-12 col-lg-6 text-white SectionCe1-left">
                    <h1>Hack your way to the <span>dream job.</span></h1>
                    <p>Get to know your natural talent to make it easier for you to continue your career at high level.</p>
                    <div className="Ce1-btn"><Link to="/career" className="Ce1-btn1">Join Our team</Link> or <Link to="/career" className="Ce1-btn2">Join Our team</Link></div>
                </div>
                <div className="col-sm-12 col-lg-6 SectionCe1-right">
                    <div className="Ce-Box1"></div>
                    <div className="Ce-Box2"></div>
                    <div className="Ce-Box3"></div>
                </div>
            </div>
        </div>
    )
}

export default SectionCe1
