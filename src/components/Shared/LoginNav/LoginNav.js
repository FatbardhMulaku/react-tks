import React from "react";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";
import LoginModal from "../../UI/Modal/Login";
import SignUpModal from "../../UI/Modal/SignUp";
import { useToggle } from "../../../Hooks/useToggle";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    klasa1:{
      backgroundColor: 'white',
      padding: '4px 10px',
      color: 'black',
      fontWeight: 'bold',
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid black'
    },
    klasa2:{
      backgroundColor: 'white',
      padding: '4px 10px',
      color: '#006FFF',
      fontWeight: 'bold',
      marginLeft:"10px",
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid #006FFF'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'red',
      border: 'none'
    },
}));

const LoginNav = (props) => {
  const { t } = useTranslation();
  const [logOpen, setlogOpen] = useToggle(false);
  const [signOpen, setsignOpen] = useToggle(false);

  const handleToggle = () => {
    setlogOpen();
    setsignOpen();
  };
  
  const classes = useStyles();
  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li onClick={setlogOpen} className={classes.klasa1}>
          <p>{t("loginBtn")}</p>
        </li>

        <li onClick={setsignOpen} className={classes.klasa2}>
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
