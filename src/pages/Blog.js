import React, { Fragment } from "react";
import BannerB from "./../components/Blog/BannerB";
import SectionOne from "./../components/Blog/SectionB1";
import SectionTwo from "./../components/Blog/SectionB2";
import SectionThree from "./../components/Blog/SectionB3";

const Blog = () => {
  return (
    <Fragment>
      <SectionOne>
        <BannerB />
      </SectionOne>
      <SectionTwo />
      <SectionThree />
    </Fragment>
  );
};
export default Blog;
