import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionEC1 from "./SectionEC1";
import SectionEC2 from "./SectionEC2";
import SectionEC3 from "./SectionEC3";
import SectionEC4 from "./SectionEC4";
import SectionEC5 from "./SectionEC5";

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
        <SectionEC1 />
		<SectionEC2 />
		<SectionEC3 />
		<SectionEC4 />
		<SectionEC5 />
      </ThemeProvider>
    </div>
  );
};

export default index;
