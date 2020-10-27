import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionM1 from "./SectionM1";
import SectionM2 from "./SectionM2";
import SectionM3 from "./SectionM3";
import SectionM4 from "./SectionM4";
import SectionM5 from "./SectionM5";
import SectionM6 from "./SectionM6";
import SectionM7 from "./SectionM7";

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
        <SectionM1 />
        <SectionM2 />
        <SectionM3 />
        <SectionM4 />
        <SectionM5 />
        <SectionM6 />
        <SectionM7 />
      </ThemeProvider>
    </div>
  );
};

export default index;
