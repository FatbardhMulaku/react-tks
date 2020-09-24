import React from "react";
import "./styles/NavList.css";
import "./styles/NavigationLink.css";
import NavigationLink from "./NavigationLink";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useTranslation } from "react-i18next";
import IndustriesDropdown from "../../../UI/Popper/Industries/Industries";
import AboutDropdown from "../../../UI/Popper/About/About";
import CaseStudiesDropdown from "../../../UI/Popper/CaseStudies/CaseStudies";

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
        <IndustriesDropdown trigger={trigger} />
        <AboutDropdown trigger={trigger} />
        <CaseStudiesDropdown trigger={trigger} />
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
