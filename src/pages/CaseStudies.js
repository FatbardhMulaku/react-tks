import React, { Fragment } from "react";
import BannerCS from "./../components/CaseStudies/BannerCS";
import SectionOne from "./../components/CaseStudies/SectionCS1";
import SectionTwo from "./../components/CaseStudies/SectionCS2";
import SectionThree from "./../components/CaseStudies/SectionCS3";

const CaseStudies = () => {
  return (
    <Fragment>
      <SectionOne>
        <BannerCS />
      </SectionOne>
      <SectionTwo />
      <SectionThree />
    </Fragment>
  );
};
export default CaseStudies;
