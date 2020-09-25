import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./styles/index.css";
import SectionS1 from "./SectionS1";
import SectionS2 from "./SectionS2";
import SectionS3 from "./SectionS3";
import SectionS4 from "./SectionS4";

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
        <SectionS1 />
        <SectionS2 />
        <SectionS3 />
        <SectionS4 />
      </ThemeProvider>
    </div>
  );
};

export default index;
