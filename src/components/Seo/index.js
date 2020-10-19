import React, { Fragment } from "react";
import "./styles/index.css";
import SectionS1 from "./SectionSeo1";
import SectionS2 from "./SectionSeo2";
import SectionS3 from "./SectionSeo3";
import SectionS4 from "./SectionSeo4";
import SectionS5 from "./SectionSeo5";

const index = () => {
  return (
    <Fragment>
      <SectionS1 />
      <SectionS2 />
      <SectionS3/>
      <SectionS4/>
      <SectionS5 />
    </Fragment>
  );
};

export default index;
