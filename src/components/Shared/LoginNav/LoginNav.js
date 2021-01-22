import React from "react";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";
import LoginModal from "../../UI/Modal/Login";
import SignUpModal from "../../UI/Modal/SignUp";
import { useToggle } from "../../../Hooks/useToggle";
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
    klasa1a:{
      backgroundColor: 'transparent',
      padding: '6px 10px',
      color: 'white',
      fontWeight: 'bold',
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid white',
      "&:hover": {
        border: "1px solid white",
        backgroundColor: "white",
        color: "black",
      },
    },
    klasa1:{
      backgroundColor: 'transparent',
      padding: '6px 10px',
      color: 'black',
      fontWeight: 'bold',
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid black',
      "&:hover": {
        border: "1px solid black",
        backgroundColor: "black",
        color: "white",
      },
    },
    klasa2a:{
      backgroundColor: 'white',
      padding: '6px 10px',
      color: '#000',
      fontWeight: 'bold',
      marginLeft:"10px",
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid #fff',
      "&:hover": {
        border: "1px solid #006FFF",
        backgroundColor: "#006FFF",
        color: "white",
      },
    },
    klasa2:{
      backgroundColor: '#006FFF',
      padding: '6px 10px',
      color: '#fff',
      fontWeight: 'bold',
      marginLeft:"10px",
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid #006FFF',
      "&:hover": {
        border: "1px solid #006FFF",
        backgroundColor: "transparent",
        color: "#006FFF",
      },
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
  
  const classes = useStyles(props);

  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li onClick={setlogOpen} className={trigger ? classes.klasa1 : classes.klasa1a}>
          <p>{t("loginBtn")}</p>
        </li>

        <li onClick={setsignOpen} className={trigger ? classes.klasa2 :classes.klasa2a}>
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
