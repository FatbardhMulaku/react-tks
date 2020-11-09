import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionTQ1 from "./SectionTQ1";
import SectionTQ2 from "./SectionTQ2";
import SectionTQ3 from "./SectionTQ3";
import SectionTQ4 from "./SectionTQ4";
import SectionTQ5 from "./SectionTQ5";
import SectionTQ6 from "./SectionTQ6";

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
        <SectionTQ1 />
		<SectionTQ2 />
		<SectionTQ3 />
		<SectionTQ4 />
		<SectionTQ5 />
		<SectionTQ6 />
      </ThemeProvider>
    </div>
  );
};

export default index;
