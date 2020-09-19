import React from "react";
import "./SectionH3.css";

function Teknologies() {
  return (
    <div className=" teknologies">
      <h1>
        Technologies that
        <br /> KosovaOutsource use
      </h1>
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-duration="3500"
        className="teknologies__logos"
      >
        <div className="tlogo logo-java"></div>
        <div className="tlogo logo-html"></div>
        <div className="tlogo logo-react"></div>
        <div className="tlogo logo-wordpress"></div>
        <div className="tlogo logo-php"></div>
      </div>
    </div>
  );
}

export default Teknologies;
