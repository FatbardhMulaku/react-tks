import React, { Fragment } from "react";
import Toolbar from "./Navigation/Toolbar";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useToggle } from "../../Hooks/useToggle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1250,
    },
  },
});

const Header = () => {
  const [isToggled, setToggled] = useToggle(false);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Toolbar drawerToggle={setToggled} />
        <MobileMenu drawerToggle={setToggled} isToggled={isToggled} />
      </Fragment>
    </ThemeProvider>
  );
};

export default Header;
