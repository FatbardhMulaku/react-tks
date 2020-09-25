import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as Scroll from "react-scroll";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#006fff",
    borderRadius: "40px",
    width: "180px",
    padding: "10px 15px",
    margin: "10px 0",
    "& > .MuiButton-label": {
      textTransform: "capitalize",
      color: "#fff",
      fontFamily: " Arial, Helvetica, sans-serif",
      fontSize: "16px",
    },
    "&:hover": {
      backgroundColor: "#0468e9",
      color: "#fff",
      "& > span > svg": {
        animation: `$icone-effect 0.8s ease-in-out infinite`,
      },
    },
  },
  icon: {
    width: " 22px",
    height: "22px",
    marginLeft: "10px",
    marginRight: "-10px",
  },
  "@keyframes icone-effect": {
    "100%": {
      transform: "translate(0, 0)",
    },
    "50%": {
      transform: "translate(5px, 0)",
    },
  },
});

const LearnMore = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  let Link = Scroll.Link;
  return (
    <Button
      variant="contained"
      component={Link}
      className={classes.btn}
      to={props.link}
      spy={true}
      smooth={true}
      offset={props.offset}
      duration={500}
      // isDynamic={true}
    >
      {t("learnMoreBtn")} <BsArrowRight className={classes.icon} />
    </Button>
  );
};

export default LearnMore;
