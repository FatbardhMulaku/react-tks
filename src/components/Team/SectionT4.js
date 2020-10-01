import React from 'react';
import { Link } from "react-router-dom";
import './SectionT4.css';

function SectionT4() {
    return (
        <div className="SectionT4">
            <div className="SectionT4i"/>
            <div className="SectionT4t">
                <h1>Is the team of KosovaOutsource very hardworking team?</h1>
                <p>Here is all of KosovaOutsource's team, apply to our company and maybe can be in our team. 
                    As a software company we have a very great and hardworking team.</p>
                    <div className="team-btni"><Link to="/team" >Send</Link></div>
            </div>
        </div>
    )
}

export default SectionT4;
