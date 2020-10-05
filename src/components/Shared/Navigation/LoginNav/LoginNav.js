import React, { useState } from "react";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";
import LoginModal from "../../../UI/Modal/Login";

const LoginNav = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let pHover = props.trigger ? "black-p" : "white-p";

  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li onClick={handleClickOpen} className={pHover}>
          <p>{t("loginBtn")}</p>
        </li>
        <hr className={props.trigger ? "bg_black" : "bg_white"} />

        <li className={pHover}>
          <p>{t("signupBtn")}</p>
        </li>
        <LoginModal open={open} handleClose={handleClose} />
      </ul>
    </div>
  );
};

export default LoginNav;
