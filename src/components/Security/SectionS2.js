import React from "react";
import { Paper } from "@material-ui/core";
import "./styles/SectionS2.css";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "280px",
    padding: "1rem 0",
    margin: "1rem 0",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: " 0 1px 2px rgba(0,0,0,0.15)",
    transition: "$boxShadow 0.3s ease-in-out",
    [theme.breakpoints.between("sm", "md")]: {
      width: "60%",
    },
    "&:hover": {
      boxShadow: "0 4px 7px rgba(0,0,0,0.3)",
    },
  },
}));

const SectionS2 = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="container sectionS2" id="section-Security-2">
      {t("security.section_2").map((item, index) => (
        <Paper className={classes.paper} variant="outlined" key={index}>
          <div className="sectionS2_icons">
            <div className={`img_css sectionS2_icon_${index + 1}`}> </div>
          </div>
          <h4 className="font_helvetica font-w-500">{item} </h4>
        </Paper>
      ))}
    </div>
  );
};

export default SectionS2;
