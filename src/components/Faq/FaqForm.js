import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./styles/FaqForm.css";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: "6px 10px 6px",
    "& > .MuiInputBase-input": {
      padding: "6px 0 6px",
    },
  },
}));

const FaqForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className="ask_form">
      <h4 className="col_white font-roboto text-uppercase">
        {t("faq.faqForm.name")}
      </h4>
      <form className="form">
        <InputBase
          className={classes.input}
          placeholder={t("faq.faqForm.input")}
        />
        <button type="submit" className="ask_btn">
          {t("faq.faqForm.btn")}
        </button>
      </form>
    </div>
  );
};

export default FaqForm;
