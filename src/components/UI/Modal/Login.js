import React from "react";
import "./Modal.css";
import Modal from "./Modal";
import ModalTitle from "./ModalTitle";
import { useTranslation } from "react-i18next";
import { DialogContent, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Email from "../../UI/Input/Email";
import Password from "../../UI/Input/Password";
import ModalButton from "../../UI/Button/ModalButton";
import ModalLink from "../../UI/Button/ModalLink";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;
  const { t } = useTranslation();

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalTitle title={t("login.title")} handleClose={handleClose} />
      <DialogContent>
        <form className="d-flex flex-column justify-content-center align-items-center px-4">
          <p className="label_input font_ubuntu col_light text-center mb-2 font-w-300 ">
            {t("login.inputLabel")}
          </p>
          <Email placeholder={t("login.emailPlaceholder")} />
          <Password placeholder={t("login.passwordPlaceholder")} />
          <ModalButton text="uppercase" name={t("login.btn")[0]} />
          <a
            href="#/"
            className="forget_link font_ubuntu col_light text-center mb-2 font-w-300"
          >
            {t("login.forget")}
          </a>
          <h2 className="or_divider d-flex flex-row w-100">
            <span>{t("login.or")}</span>
          </h2>
          <ModalButton
            text="capitalize"
            clicked={props.handleClose}
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
