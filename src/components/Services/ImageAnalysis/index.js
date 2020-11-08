import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionIA1 from "./SectionIA1";
import SectionIA2 from "./SectionIA2";
import SectionIA3 from "./SectionIA3";
import SectionIA4 from "./SectionIA4";
import SectionIA5 from "./SectionIA5";
import SectionIA6 from "./SectionIA6";
import SectionIA7 from "./SectionIA7";
import SectionIA8 from "./SectionIA8";

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
        <SectionIA1 />
        <SectionIA2 />
        <SectionIA3 />
        <SectionIA4 />
        <SectionIA5 />
        <SectionIA6 />
        <SectionIA7 />
        <SectionIA8 />
      </ThemeProvider>
    </div>
  );
};

export default index;
