import React from "react";
import "./styles/SectionF1.css";
import FaqForm from "./FaqForm";

const SectionF1 = () => {
  return (
    <div className="fullBackground sectionF1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <FaqForm />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="img_css ask_img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionF1;
