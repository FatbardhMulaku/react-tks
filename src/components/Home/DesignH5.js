import React from 'react';
import './Style/SectionH5.css';
import workLogo1 from "./../../assets/Home/galery1.png";
import workLogo2 from "./../../assets/Home/galery2.png";
import workLogo3 from "./../../assets/Home/galery3.png";
import workLogo4 from "./../../assets/Home/galery4.png";
import workLogo5 from "./../../assets/Home/galery5.png";
import workLogo6 from "./../../assets/Home/galery6.png";
import { useTranslation } from "react-i18next";

const workImages = [
    workLogo2,
    workLogo6,
    workLogo4,
    workLogo3,
    workLogo5,
    workLogo1,
  ];

function Design() {
    const { t } = useTranslation();
    return (
        <div className="work_co">
        {workImages.map((item, index) => {
          return (
            <div className="containeri" key={index}>
              <img src={item} alt="Avatar" className="Wimage w-100" />
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

export default Design;