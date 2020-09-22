import React from "react";
import "./styles/NavList.css";
import "./styles/NavigationLink.css";
import NavigationLink from "./NavigationLink";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useTranslation } from "react-i18next";
import ServiceDropdown from "../../../UI/Popper/ServicePop/Service";
import AboutDropdown from "../../../UI/Popper/AboutPop/About";
import CareerDropdown from "../../../UI/Popper/CareerPop/Career";

function NavList(props) {
  const { t } = useTranslation();
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });
  return (
    <div className="nav_list">
      <ul>
        <ServiceDropdown trigger={trigger} />
        <AboutDropdown trigger={trigger} />
        <CareerDropdown trigger={trigger} />
        {t("mainMenu").map(({ link, name }, index) => (
          <NavigationLink
            clicked={props.drawerToggle}
            link={`/${link}`}
            key={index}
            trigger={trigger}
          >
            {name}
          </NavigationLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
