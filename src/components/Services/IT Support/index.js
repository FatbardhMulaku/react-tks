import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionITS1 from "./SectionITS1";
import SectionITS2 from "./SectionITS2";
import SectionITS3 from "./SectionITS3";
import SectionITS4 from "./SectionITS4";
import SectionITS5 from "./SectionITS5";
import SectionITS6 from "./SectionITS6";

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
        <SectionITS1 />
		    <SectionITS2 />
		    <SectionITS3 />
        <SectionITS4 />
        <SectionITS5 />
        <SectionITS6 />
      </ThemeProvider>
    </div>
  );
};

export default index;
