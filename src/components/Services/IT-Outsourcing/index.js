import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionITO1 from "./SectionITO1";
import SectionITO2 from "./SectionITO2";
import SectionITO3 from "./SectionITO3";
import SectionITO4 from "./SectionITO4";
import SectionITO5 from "./SectionITO5";
import SectionITO6 from "./SectionITO6";
import SectionITO7 from "./SectionITO7";

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
        <SectionITO1 />
		    <SectionITO2 />
        <SectionITO3 />
        <SectionITO4 />
        <SectionITO5 />
        <SectionITO6 />
        <SectionITO7 />
      </ThemeProvider>
    </div>
  );
};

export default index;
