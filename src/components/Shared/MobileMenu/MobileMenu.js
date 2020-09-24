import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTranslation } from "react-i18next";
import "./MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";
import DropItem from "./DropItem";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > .MuiDrawer-paper": {
      width: "225px !important",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    "& > button": {
      outline: "none",
    },
  },
  list: {
    display: "flex",
    flexFlow: "column",
    "& >div:nth-child(2)": {
      order: "1 !important",
    },
    "& >div:nth-child(3)": {
      order: "2 !important",
    },
  },
}));

const dropDownItems = ["industries", "about", "caseStudies"];

const MobileMenu = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Drawer
      open={props.isToggled}
      onClose={props.drawerToggle}
      anchor="right"
      className={classes.drawer}
      transitionDuration={1200}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.drawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.list}>
        {t("mainMenu").map(({ link, name }, index) => (
          <MobileMenuItem
            key={index}
            link={link}
            name={name}
            drawerToggle={props.drawerToggle}
          />
        ))}
        {dropDownItems.map((item, index) => {
          return (
            <DropItem
              key={index}
              drawerToggle={props.drawerToggle}
              name={t(`${item}Popper.name`)}
              items={t(`${item}Popper.${item}Menu`)}
            />
          );
        })}
      </List>
    </Drawer>
  );
};

export default MobileMenu;
