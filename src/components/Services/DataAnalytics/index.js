import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionDA1 from "./SectionDA1";
import SectionDA2 from "./SectionDA2";
import SectionDA3 from "./SectionDA3";
import SectionDA4 from "./SectionDA4";
import SectionDA5 from "./SectionDA5";
import SectionDA6 from "./SectionDA6";
import SectionDA7 from "./SectionDA7";

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
        <SectionDA1 />
        <SectionDA2 />
        <SectionDA3 />
        <SectionDA4 />
        <SectionDA5 />
        <SectionDA6 />
        <SectionDA7 />
      </ThemeProvider>
    </div>
  );
};

export default index;
