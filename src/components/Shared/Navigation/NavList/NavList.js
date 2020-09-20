import React from "react";
import "./styles/NavList.css";
import "./styles/NavigationLink.css";
import NavigationLink from "./NavigationLink";
import { useTranslation } from "react-i18next";
import ServiceBtn from "../../../UI/Button/ServiceDrop/Service";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
        <li className="navigation_link ">
          <ServiceBtn trigger={trigger} />
        </li>
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
