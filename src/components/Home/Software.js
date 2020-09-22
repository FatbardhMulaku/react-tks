import React from 'react';
import workLogo1 from './../../assets/Home/galery1.png';
import workLogo2 from './../../assets/Home/galery2.png';
import workLogo3 from './../../assets/Home/galery3.png';
import workLogo4 from './../../assets/Home/galery4.png';
import workLogo5 from './../../assets/Home/galery5.png';
import workLogo6 from './../../assets/Home/galery6.png';
import './SectionH5.css';

function Software() {
    return (
        <div className="work_co">
            <div className="containeri">
                 <img src={workLogo1} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri" >
                 <img src={workLogo2} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                    <h2>Web Design</h2>
                    <div className="Wtext">View Project</div>
                </div>
            </div>

            <div className="containeri">
                 <img src={workLogo3} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri" >
                 <img src={workLogo4} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri" >
                 <img src={workLogo5} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>
            <div className="containeri" >
                 <img src={workLogo6} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>
        </div>
    )
}

export default Software
