import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionWD1 from "./SectionWD1";
import SectionWD2 from "./SectionWD2";
import SectionWD3 from "./SectionWD3";
import SectionWD4 from "./SectionWD4";
import SectionWD5 from "./SectionWD5";


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
        <SectionWD1 />
        <SectionWD2 />
        <SectionWD3 />
        <SectionWD4 />
        <SectionWD5 />
      </ThemeProvider>
    </div>
  );
};

export default index;
