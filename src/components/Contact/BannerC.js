import React, { useEffect } from 'react';
import "./Style/BannerC.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function BannerC() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 2000,
    });
  }, []);

  const { t } = useTranslation();
  return (
    <div data-aos="fade-right" data-aos-delay="400" className="BannerC">
    <h1>{t("Contact.BannerB")}</h1>
  </div>
  )
}

export default BannerC
