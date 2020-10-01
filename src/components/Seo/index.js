import React, { Fragment } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./styles/index.css";
import SectionS1 from "./SectionSeo1";
import SectionS2 from "./SectionSeo2";
import SectionS3 from "./SectionSeo3";

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
    <Fragment>
      <ThemeProvider theme={theme}>
        <SectionS1 />
        <SectionS2 />
        <SectionS3 />
      </ThemeProvider>
    </Fragment>
  );
};

export default index;
