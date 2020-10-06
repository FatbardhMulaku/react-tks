import React from "react";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";
import LoginModal from "../../UI/Modal/Login";
import SignUpModal from "../../UI/Modal/SignUp";
import { useToggle } from "../../../Hooks/useToggle";

const LoginNav = (props) => {
  const { t } = useTranslation();
  const [logOpen, setlogOpen] = useToggle(false);
  const [signOpen, setsignOpen] = useToggle(false);

  const handleToggle = () => {
    setlogOpen();
    setsignOpen();
  };

  let pHover = props.trigger ? "black-p" : "white-p";
  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li onClick={setlogOpen} className={pHover}>
          <p>{t("loginBtn")}</p>
        </li>
        <hr className={props.trigger ? "bg_black" : "bg_white"} />

        <li className={pHover}>
          <p>{t("signupBtn")}</p>
        </li>
      </ul>
      <LoginModal
        open={logOpen}
        handleClose={setlogOpen}
        handleToggle={handleToggle}
      />
      <SignUpModal
        open={signOpen}
        handleClose={setsignOpen}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default LoginNav;
