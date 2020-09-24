import React from "react";
import { useTranslation } from "react-i18next";
import "./Subscribe.css";

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div className="img_css subscribe_img">
      <div className="subscribe_container">
        <h3 className="col_white font-helvetica">{t("subscribe.name")} </h3>
        <form className="subscribe">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
