import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BannerT from './../Team/BannerT'
import SectionOne from './../Team/SectionT1';
import SectionTwo from './../Team/SectionT2';
import SectionThree from './../Team/SectionT3';
import SectionFour from './../Team/SectionT4';

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
                <BannerT/>
            </SectionOne>
            <SectionTwo />
            <SectionThree />
            <SectionFour />
      </ThemeProvider>
    </div>
  );
};

export default index;