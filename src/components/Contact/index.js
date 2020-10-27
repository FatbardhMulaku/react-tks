import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import BannerC from "./../Contact/BannerC";
import SectionOne from "./../Contact/SectionC1";
import SectionTwo from "./../Contact/SectionC2";

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
			<BannerC />
		</SectionOne>
		<SectionTwo />
      </ThemeProvider>
    </div>
  );
};

export default index;