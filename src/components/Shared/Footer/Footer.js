import React from "react";
import "./Footer.css";
import "./Subscribe.css";
import LangOptions from "../../UI/LangOptions";
import MenuListFooter from "./MenuList";
import Logo from "../../UI/Logo/Logo";
import { useTranslation } from "react-i18next";
import { Divider } from "@material-ui/core";
import ScrollTop from "../../UI/ScrollTop";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";
import { FaCopyright, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer(props) {
  const { t } = useTranslation();

  return (
    <div className="footer">
        <div className="sub-footer">
          <div className="subscribe">
            <h1>{t("footeri.subscribe")}</h1>
            <div><input type="email" placeholder={t("footeri.placeholder")} />
            <button className="footer-btn">{t("footeri.sub")}</button></div>
          </div>
      </div>

      <div className="container-fluid footer_content ">
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-6 col-lg-3 footer-logo">
            <h2>
              <Logo logo="white_logo" text="col_white" />
            </h2>
            <ul className="footer-list ">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://goo.gl/maps/gWGFJN2rzNrBZ5FX7"
                >
                  {" "}
                  {t("location")}{" "}
                </a>
              </li>
              <li>
                <AiOutlineMail color="white" />
                <a
                  className="text-lowercase"
                  href="mailto: info@kosovaoutsource.com"
                >
                  {" "}
                  info@kosovaoutsource.com
                </a>
              </li>
              <li>
                <FaMobileAlt color="white" />
                <a href="tel:+38343560863"> +383 43 560 863</a>
              </li>
            </ul>
          </div>
          {t("footerMenu").map((item, index) => (
            <MenuListFooter key={index} title={item.title} list={item.items} />
          ))}
        </div>
        <Divider />
        <div className="footer_socialMedia">
          <h2 className="text-white footer-list-text text-capitalize">
            Follow us
          </h2>
          <SocialMedia />
        </div>
        <Divider />
        <div className="footer-bottom ">
          <h6 className="alRight">
            <i>
              <FaCopyright />
            </i>
            {t("alRight")}
          </h6>
          <LangOptions />
        </div>
      </div>
      <ScrollTop {...props} />
    </div>
  );
}

export default Footer;
