import React from "react";
import "./styles/SectionF1.css";
import FaqForm from "./FaqForm";
import ImgGrid from "../Shared/ImgGrid";
import LayoutGrid from "../Shared/LayoutGrid";
const SectionF1 = () => {
  return (
    <LayoutGrid section="sectionF1" row="sectionF1_row">
      <div className="col-sm-12 col-lg-6">
        <FaqForm />
      </div>
      <ImgGrid img="ask_img" />
    </LayoutGrid>
  );
};

export default SectionF1;
