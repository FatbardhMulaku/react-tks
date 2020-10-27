import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionOne from './../Company/SectionCo1';
import SectionTwo from './../Company/SectionCo2';
import SectionThree from './../Company/SectionCo3';

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
	  		<SectionOne/>
            <SectionTwo />
        	<SectionThree />
      </ThemeProvider>
    </div>
  );
};

export default index;