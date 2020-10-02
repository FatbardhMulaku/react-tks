import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./styles/index.css";
import SectionSO1 from "./SectionSO1";
import SectionSO2 from "./SectionSO2";
import SectionSO3 from "./SectionSO3";

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
        <SectionSO1 />
        <SectionSO2 />
        <SectionSO3 />
      </ThemeProvider>
    </div>
  );
};

export default index;
