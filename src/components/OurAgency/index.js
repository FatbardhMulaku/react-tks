import React from "react";
import "./styles/index.css";
import SectionOA1 from "./SectionOA1";
import SectionOA2 from "./SectionOA2";
import SectionOA3 from "./SectionOA3";
import SectionOA4 from "./SectionOA4";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
        <SectionOA1 />
        <SectionOA2 />
        <SectionOA3 />
        <SectionOA4 />
      </ThemeProvider>
    </div>
  );
};

export default index;
