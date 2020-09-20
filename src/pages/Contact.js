import React, { Fragment } from "react";
import BannerC from "./../components/Contact/BannerC";
import SectionOne from "./../components/Contact/SectionC1";
import SectionTwo from "./../components/Contact/SectionC2";

const Contact = () => {
  return (
    <Fragment>
      <SectionOne>
        <BannerC />
      </SectionOne>
      <SectionTwo />
    </Fragment>
  );
};
export default Contact;
