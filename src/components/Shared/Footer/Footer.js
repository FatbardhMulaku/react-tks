import React from "react";
import "./Footer.css";
import LangOptions from "../../UI/LangOptions";
import MenuListFooter from "./MenuList";
import Logo from "../../UI/Logo/Logo";
// import FooterLogo from "../../../assets/Home/footer.png";
import { useTranslation } from "react-i18next";
import { Divider, Typography } from "@material-ui/core";
import ScrollTop from "../../UI/ScrollTop";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";
import { FaCopyright } from "react-icons/fa";
function Footer(props) {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container-fluid px-5 py-3">
        {/* <div className="sub-footer ">
        <img src={FooterLogo} alt="footer" className="img-footeri" />
        <div className="subscribe-c">
          <h1>{t("footer.subscribe")}</h1>
          <input type="text" placeholder="Enter your email adress" />
          <button className="footer-btn">Subscribe</button>
        </div>
      </div> */}

        <div className="row">
          <div className="col-md-12 col-lg-5 footer-logo">
            <h2>
              <Logo logo="white_logo" text="col_white" />
            </h2>
            <ul className="footer-list ">
              <li>
                <a href="/#">
                  Location-Prishtina, <br /> Kosova St.Sinan Gashi <br /> Zip
                  Code 10000
                </a>
              </li>
              <li>
                <a
                  className="text-lowercase"
                  href="mailto: info@kosovaoutsource.com"
                >
                  info@kosovaoutsource.com
                </a>
              </li>
              <li>
                <a href="tel:+38345400400">+383 45 400 400</a>
              </li>
            </ul>
            <div className="">
              <LangOptions />
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="row">
              {t("footerMenu").map((item, index) => (
                <MenuListFooter
                  key={index}
                  title={item.title}
                  list={item.items}
                />
              ))}
            </div>
          </div>
        </div>
        <Divider />
        <div className="footer-bottom">
          <Typography variant="subtitle2" gutterBottom>
            <FaCopyright /> {t("alRight")} KosovaOutsource
          </Typography>
          <SocialMedia />
        </div>
        <Divider />
      </div>
      <ScrollTop {...props} />
    </div>
  );
}

export default Footer;
