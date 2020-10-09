import React from "react";
import "./Modal.css";
import Modal from "./Modal";
import ModalTitle from "./ModalTitle";
import { DialogContent } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputLogin from "../../UI/Input/InputLogin";
import ModalButton from "../../UI/Button/ModalButton";
import { IoMdPerson } from "react-icons/io";
import {RiLockPasswordLine} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"
import { makeStyles } from "@material-ui/core/styles";
import "./SignUp.css";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px 10px ",
    },
  },
  icon: {
    fontSize: "25px",
    color: "#006fff",
  },
}));

const SignUp = (props) => {
  const { open, handleClose, handleToggle } = props;
  const classes = useStyles();
  const email = <HiOutlineMail className={classes.icon} />;
  const username = <IoMdPerson className={classes.icon} />;
  const password = <RiLockPasswordLine className={classes.icon} />;
  const { t } = useTranslation();
  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalTitle title="sign up" handleClose={handleClose} />
      <DialogContent>
      <form className="form-modal">
      <p className="label_input font_ubuntu col_light text-center mb-2 font-w-300 ">
            {t("signup.inputLabel")}
          </p>
          <div className="w-100">
          <hr className="Hr-signup"/>
          <p className="usernameSu d-flex justify-content-start font-weight-bold text-left font-w-400 ">
            {t("signup.username")}
          </p>
          <InputLogin
            type="text"
            placeholder={t("signup.usernamePlaceholder")}
            icon={username}
          />
           <p className="usernameSu d-flex justify-content-start font-weight-bold text-left font-w-400 ">
            {t("signup.email")}
          </p>
           <InputLogin
            type="email"
            placeholder={t("signup.emailPlaceholder")}
            icon={email}
          />
          </div>
          <div className="row">
          <div className="col-12 col-sm-6">
          <p className="usernameSu d-flex justify-content-start font-weight-bold text-left font-w-400 ">
            {t("signup.password")}
          </p>
          <InputLogin
            type="password"
            placeholder={t("login.passwordPlaceholder")}
            icon={password}
          /></div>
          <div className="col-12 col-sm-6">
          <p className="usernameSu d-flex justify-content-start font-weight-bold text-left font-w-400 ">
            {t("signup.confirmPassword")}
          </p>
          <InputLogin
            type="password"
            placeholder={t("login.passwordPlaceholder")}
            icon={password}
          /></div>
          </div>

          <ModalButton
            text="capitalize"
            type="button"
            clicked={handleToggle}
            name={t("signup.btn")}
          />
          <p>{t("signup.loginInfo")} <a
            href="#/"
            className="forget_link font_ubuntu col_light text-center mb-2 font-w-300"
          >
            {t("signup.btn")}
          </a></p>
      </form>
      </DialogContent>
    </Modal>
  );
};

export default SignUp;
