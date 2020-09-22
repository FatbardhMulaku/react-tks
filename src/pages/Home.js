import React, { Fragment } from "react";
import SectionOne from "../components/Home/SectionH1";
import Banner from "../components/Home/Banner";
import SectionTwo from "../components/Home/SectionH2";
import SectionThree from "../components/Home/SectionH3";
import SectionFour from "../components/Home/SectionH4";
import SectionFive from "../components/Home/SectionH5";
import SectionSix from "../components/Home/SectionH6";

const Home = () => {
  return (
    <Fragment>
      <SectionOne>
        <Banner />
      </SectionOne> 
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </Fragment>
  );
};
export default Home;
