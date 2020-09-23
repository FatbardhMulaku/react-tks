import React, { Fragment } from "react";
import BannerCS from "../components/WhatWeDo/BannerCS";
import SectionOne from "../components/WhatWeDo/SectionCS1";
import SectionTwo from "../components/WhatWeDo/SectionCS2";
import SectionThree from "../components/WhatWeDo/SectionCS3";

const WhatWeDo = () => {
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
export default WhatWeDo;
