import React from 'react';
import { Link } from "react-router-dom";
import Sectionb3i from './SectionB3item';
import "./Style/SectionB3.css";
import { useTranslation } from "react-i18next";

function SectionB3() {
  const { t } = useTranslation();
  return (
    <div className="SectionB3">
    <div className="SectionB3_container container">
      <div className="SectionB3__title">
        <h1>{t("Blog.SectionB3h")}</h1>
        <div className="SectionB3__title-btn">
          <Link to="/blog" className="Bsection3-btn">
          {t("Blog.SectionB3btn")}
          </Link>
        </div>
      </div>
      <div className="SectionB3__wrapper_c">
          <Sectionb3i />
      </div>
    </div>
  </div>
  )
}

export default SectionB3;
