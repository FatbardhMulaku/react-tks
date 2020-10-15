import React from "react";
import "./Style/SectionH5.css";
import { useTranslation } from "react-i18next";

const workImages = [
  "workLogo1",
  "workLogo2",
  "workLogo3",
  "workLogo4",
  "workLogo5",
  "workLogo6",
];

function Software() {
  const { t } = useTranslation();
  return (
    <div className="work_co">
      {workImages.map((item, index) => {
        return (
          <div className="containeri" key={index}>
            <div className={`${item} Wimage w-100`} />
            <div className="middle">
              <h3>{t("Home.SectionH5Tabtitle")}</h3>
              <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Software;
