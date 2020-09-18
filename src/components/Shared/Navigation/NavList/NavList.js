import React from "react";
import "./styles/NavList.css";
import NavigationLink from "./NavigationLink";
import { useTranslation } from "react-i18next";

function NavList(props) {
  const { t } = useTranslation();

  return (
    <div className="nav_list">
      <ul>
        {t("mainMenu").map(({ link, name }, index) => (
          <NavigationLink
            clicked={props.drawerToggle}
            link={`/${link}`}
            key={index}
          >
            {name}
          </NavigationLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
