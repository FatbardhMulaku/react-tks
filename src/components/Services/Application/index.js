import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionSA1 from "./SectionSA1";
import SectionSA2 from "./SectionSA2";
import SectionSA3 from "./SectionSA3";
import SectionSA4 from "./SectionSA4";
import SectionSA5 from "./SectionSA5";
import SectionSA6 from "./SectionSA6";

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
        <SectionSA1 />
        <SectionSA2 />
        <SectionSA3 />
        <SectionSA4 />
        <SectionSA5 />
        <SectionSA6 />
      </ThemeProvider>
    </div>
  );
};

export default index;
