import React from "react";
import "./Modal.css";
import Modal from "./Modal";
import ModalTitle from "./ModalTitle";
import { useTranslation } from "react-i18next";
import { DialogContent } from "@material-ui/core";
import Email from "../../UI/Input/Email";
import Password from "../../UI/Input/Password";
import ModalButton from "../../UI/Button/ModalButton";
import ModalLink from "../../UI/Button/ModalLink";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px 10px ",
    },
  },
}));

const Login = (props) => {
  const { open, handleClose, handleToggle } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalTitle title={t("login.title")} handleClose={handleClose} />
      <DialogContent className={classes.content}>
        <form className="form-modal">
          <p className="label_input font_ubuntu col_light text-center mb-2 font-w-300 ">
            {t("login.inputLabel")}
          </p>
          <Email placeholder={t("login.emailPlaceholder")} />
          <Password placeholder={t("login.passwordPlaceholder")} />
          <ModalButton
            type="submit"
            text="uppercase"
            name={t("login.btn")[0]}
          />
          <a
            href="#/"
            className="forget_link font_ubuntu col_light text-center mb-2 font-w-300"
          >
            {t("login.forget")}
          </a>
          <h2 className="or_divider">
            <span>{t("login.or")}</span>
          </h2>
          <ModalButton
            text="capitalize"
            type="button"
            clicked={handleToggle}
            name={t("login.btn")[1]}
          />
          <ModalLink
            linkPath="https://www.facebook.com/"
            name={t("login.btn")[2]}
          />
        </form>
      </DialogContent>
    </Modal>
  );
};

export default Login;
