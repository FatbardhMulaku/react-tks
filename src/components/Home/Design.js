<<<<<<< HEAD:src/components/Home/Design.js
import React from 'react';
import workLogo1 from './../../assets/Home/galery1.png';
import workLogo2 from './../../assets/Home/galery2.png';
import workLogo3 from './../../assets/Home/galery3.png';
import workLogo4 from './../../assets/Home/galery4.png';
import workLogo5 from './../../assets/Home/galery5.png';
import workLogo6 from './../../assets/Home/galery6.png';
import './SectionH5.css';
=======
import React from "react";
import workLogo1 from "./../../img/galery1.png";
import workLogo2 from "./../../img/galery2.png";
import workLogo3 from "./../../img/galery3.png";
import workLogo4 from "./../../img/galery4.png";
import workLogo5 from "./../../img/galery5.png";
import workLogo6 from "./../../img/galery6.png";
import "./WorkSection.css";

const workImages = [
  workLogo1,
  workLogo2,
  workLogo3,
  workLogo4,
  workLogo5,
  workLogo6,
];
>>>>>>> b8af14edb8be4d4c1a86900862eb5add42172ac0:src/components/Work/Design.js

function Design() {
  return (
    <div className="workC">
      <div className="work_co">
        {/*mate look this example , you don't need rewrite code , 
        you must be create a component for this parts and props data in map method*/}
        {workImages.map((item, index) => (
          <div
            className="containeri"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="false"
            key={index}
          >
            <img
              src={item}
              alt="Avatar"
              className="Wimage"
              style={{ width: "100%" }}
            />
            <div className="middle">
              <h2>Web Design</h2>
              <div className="Wtext">View Project</div>
            </div>
          </div>
        ))}

        {/* <div className="containeri" data-aos="zoom-in" data-aos-duration="2000"  data-aos-once="false">
                 <img src={workLogo4} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>
  
            <div className="containeri" data-aos="zoom-in" data-aos-duration="2000"  data-aos-once="false">
                 <img src={workLogo5} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>
            <div className="containeri" data-aos="zoom-in" data-aos-duration="3000"  data-aos-once="false">
                 <img src={workLogo6} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>
            <div className="containeri" data-aos="zoom-in" data-aos-duration="3000"  data-aos-once="false">
                 <img src={workLogo1} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div>

            <div className="containeri" data-aos="zoom-in" data-aos-duration="3000"  data-aos-once="false">
                 <img src={workLogo2} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>Web Design</h2>
                <div className="Wtext">View Project</div>
            </div>
            </div> */}
      </div>
    </div>
  );
}

export default Design;
