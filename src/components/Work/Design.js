import React from 'react';
import workLogo1 from './../../img/galery1.png';
import workLogo2 from './../../img/galery2.png';
import workLogo3 from './../../img/galery3.png';
import workLogo4 from './../../img/galery4.png';
import workLogo5 from './../../img/galery5.png';
import workLogo6 from './../../img/galery6.png';
import './WorkSection.css';

function Design() {
    return (
        <div className="workC">
        <div className="work_co">
            <div className="containeri">
                 <img src={workLogo3} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri">
                 <img src={workLogo4} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri">
                 <img src={workLogo5} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>
            <div className="containeri">
                 <img src={workLogo6} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>
            <div className="containeri">
                 <img src={workLogo1} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri">
                 <img src={workLogo2} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div class="middle">
                 <h2>Web Design</h2>
                <div class="Wtext">View Project</div>
            </div>
            </div>

            </div>
        </div>
    )
}

export default Design;
