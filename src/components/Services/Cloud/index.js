import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionCL1 from "./SectionCL1";
import SectionCL2 from "./SectionCL2";
import SectionCL3 from "./SectionCL3";
import SectionCL4 from "./SectionCL4";
import SectionCL5 from "./SectionCL5";

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
        <SectionCL1 />
		    <SectionCL2 />
		    <SectionCL3 />
        <SectionCL4 />
        <SectionCL5 />
      </ThemeProvider>
    </div>
  );
};

export default index;
