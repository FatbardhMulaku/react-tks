import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionWPD1 from "./SectionWPD1";
import SectionWPD2 from "./SectionWPD2";
import SectionWPD3 from "./SectionWPD3";
import SectionWPD4 from "./SectionWPD4";
import SectionWPD5 from "./SectionWPD5";
import SectionWPD6 from "./SectionWPD6";
import SectionWPD7 from "./SectionWPD7";

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
        <SectionWPD1 />
		<SectionWPD2 />
		<SectionWPD3 />
		<SectionWPD4 />
		<SectionWPD5 />
		<SectionWPD6 />
		<SectionWPD7 />
      </ThemeProvider>
    </div>
  );
};

export default index;
