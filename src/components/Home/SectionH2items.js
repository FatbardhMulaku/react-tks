import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import GraphicEqOutlinedIcon from "@material-ui/icons/GraphicEqOutlined";
import FilterDramaOutlinedIcon from "@material-ui/icons/FilterDramaOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import "./Style/SectionH2items.css";
import { useTranslation } from "react-i18next";

const icon1 = <PhoneIphoneOutlinedIcon fontSize={"large"} />;
const icon2 = <DashboardOutlinedIcon fontSize={"large"} />;
const icon3 = <FilterDramaOutlinedIcon fontSize={"large"} />;
const icon4 = <GraphicEqOutlinedIcon fontSize={"large"} />;
const icon5 = <SettingsApplicationsOutlinedIcon fontSize={"large"} />;
const icon6 = <DescriptionOutlinedIcon fontSize={"large"} />;

const workicons = [icon1,icon2,icon3,icon4,icon5,icon6];

export default function SectionH2items() {
  const { t } = useTranslation();
  return (
    <div className="SectionH2_wrapper">

      {t("Home.Section2").map((items, index) => {
        return (
          <div key={index} className="service">
            <i className="service-icon">
              {workicons[index]}
            </i>
            <h3 className="service-title">{items.SectionH2_Title}</h3>
            <p className="service-info">{items.SectionH2_Info}</p>
      </div>
        )
      })}
    </div>
  );
}
