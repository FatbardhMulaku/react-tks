import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionCBS1 from "./SectionCBS1";
import SectionCBS2 from "./SectionCBS2";
import SectionCBS3 from "./SectionCBS3";
import SectionCBS4 from "./SectionCBS4";
import SectionCBS5 from "./SectionCBS5";
import SectionCBS6 from "./SectionCBS6";

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
        <SectionCBS1 />
		<SectionCBS2 />
		<SectionCBS3 />
		<SectionCBS4 />
		<SectionCBS5 />
		<SectionCBS6 />
      </ThemeProvider>
    </div>
  );
};

export default index;
