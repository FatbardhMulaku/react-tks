import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BannerB from "./../Blog/BannerB";
import SectionOne from "./../Blog/SectionB1";
import SectionTwo from "./../Blog/SectionB2";
import SectionThree from "./../Blog/SectionB3";

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
				<BannerB />
			</SectionOne>
			<SectionTwo />
			<SectionThree />
      </ThemeProvider>
    </div>
  );
};

export default index;
