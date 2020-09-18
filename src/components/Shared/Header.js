import React, { Fragment } from "react";
import Toolbar from "./Navigation/Toolbar";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useToggle } from "../../Hooks/useToggle";

const Header = () => {
  const [isToggled, setToggled] = useToggle(false);

  return (
    <Fragment>
      <Toolbar drawerToggle={setToggled} />
      <MobileMenu drawerToggle={setToggled} isToggled={isToggled} />
    </Fragment>
  );
};

export default Header;
