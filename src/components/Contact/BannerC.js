import React from 'react';
import "./Style/BannerC.css";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function BannerC() {
  const { t } = useTranslation();
    return (
      <div className="BannerC">
           <Fade top big cascade><h1>{t("Contact.BannerB")}</h1></Fade>
      </div>
    );
}
export default BannerC;
