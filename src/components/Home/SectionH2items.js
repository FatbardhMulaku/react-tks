import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import GraphicEqOutlinedIcon from "@material-ui/icons/GraphicEqOutlined";
import FilterDramaOutlinedIcon from "@material-ui/icons/FilterDramaOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import "./Style/SectionH2items.css";
import { useTranslation } from "react-i18next";

export default function SectionH2items() {
  const { t } = useTranslation();
  return (
    <div className="SectionH2_wrapper">
      <div className="service">
        <i className="service-icon">
          <PhoneIphoneOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title">{t("Home.SectionH2_TitleA")}</h3>
        <p className="service-info">{t("Home.SectionH2_InfoA")}</p>
      </div>

      <div className="service">
        <i className="service-icon">
          <DashboardOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title">{t("Home.SectionH2_TitleB")}</h3>
        <p className="service-info">{t("Home.SectionH2_InfoB")}</p>
      </div>

      <div className="service">
        <i className="service-icon">
          <FilterDramaOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title">{t("Home.SectionH2_TitleC")}</h3>
        <p className="service-info">{t("Home.SectionH2_InfoC")}</p>
      </div>

      <div className="service">
        <i className="service-icon">
          <GraphicEqOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title">{t("Home.SectionH2_TitleD")}</h3>
        <p className="service-info">{t("Home.SectionH2_InfoD")}</p>
      </div>

      <div className="service">
        <i className="service-icon">
          <SettingsApplicationsOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title"> {t("Home.SectionH2_TitleE")}</h3>
        <p className="service-info"> {t("Home.SectionH2_InfoE")}</p>
      </div>

      <div className="service">
        <i className="service-icon">
          <DescriptionOutlinedIcon fontSize={"large"} />
        </i>
        <h3 className="service-title">{t("Home.SectionH2_TitleF")}</h3>
        <p className="service-info">{t("Home.SectionH2_InfoF")}</p>
      </div>
    </div>
  );
}
