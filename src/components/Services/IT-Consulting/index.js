import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionITc1 from "./SectionITc1";
import SectionITc2 from "./SectionITc2";
import SectionITc3 from "./SectionITc3";
import SectionITc4 from "./SectionITc4";
import SectionITc5 from "./SectionITc5";
import SectionITc6 from "./SectionITc6";
import SectionITc7 from "./SectionITc7";

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
        <SectionITc1 />
		<SectionITc2 />
		<SectionITc3 />
		<SectionITc4 />
		<SectionITc5 />
		<SectionITc6 />
		<SectionITc7 />
      </ThemeProvider>
    </div>
  );
};

export default index;
