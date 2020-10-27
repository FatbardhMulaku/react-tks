import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionOne from "../Home/SectionH1";
import Banner from "../Home/Banner";
import SectionTwo from "../Home/SectionH2";
import SectionThree from "../Home/SectionH3";
import SectionFour from "../Home/SectionH4";
import SectionFive from "../Home/SectionH5";
import SectionSix from "../Home/SectionH6";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const index = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
		<SectionOne>
			<Banner />
		</SectionOne> 
		<SectionTwo />
		<SectionThree />
		<SectionFour />
		<SectionFive />
		<SectionSix />
      </ThemeProvider>
    </div>
  );
};

export default index;