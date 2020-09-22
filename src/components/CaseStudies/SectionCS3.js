import React from 'react';
import { Link } from "react-router-dom";
import './SectionCS3.css';

function SectionCS3() {
    return (
        <div className="SectionCS3">
            <div  className="SectionCS3__container">
                <div className="SectionCS3__Left">
                    <div className="SectionCS3__Left-img1"></div>
                    <div className="SectionCS3__Left-img2"></div>
                    <div className="SectionCS3__Left-img3"></div>
                </div>
                <div className="SectionCS3__Right">
                    <div className="SectionCS3__RightC">
                    <h1>KosovaOutsource run all kinds <br/>
                        of IT Services whith success.
                    </h1>
                    <p>
                        Here is all of KosovaOutsource's team apply to  <br/>
                        our company and maybe can be in our team. As <br/>
                        a software company we have a very great and  <br/>
                        hardworking team.
                    </p> 
                    <Link to="/" className="BannerCS-btnCS3">
                        Learn More
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SectionCS3
