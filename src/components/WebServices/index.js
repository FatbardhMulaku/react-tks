import React from "react";
import "./styles/index.css";
import SectionWS1 from "./SectionWS1";
import SectionWS2 from "./SectionWS2";
import SectionWS3 from "./SectionWS3";
import SectionWS4 from "./SectionWS4";
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
        <SectionWS1 />
        <SectionWS2 />
        <SectionWS3 />
        <SectionWS4 />
      </ThemeProvider>
    </div>
  );
};

export default index;
