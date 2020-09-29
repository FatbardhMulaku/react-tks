import React from "react";
import workLogo1 from "./../../assets/Home/galery1.png";
import workLogo2 from "./../../assets/Home/galery2.png";
import workLogo3 from "./../../assets/Home/galery3.png";
import workLogo4 from "./../../assets/Home/galery4.png";
import workLogo5 from "./../../assets/Home/galery5.png";
import workLogo6 from "./../../assets/Home/galery6.png";
import "./SectionH5.css";
import { useTranslation } from "react-i18next";

const workImages = [
  workLogo1,
  workLogo2,
  workLogo3,
  workLogo4,
  workLogo5,
  workLogo6,
];

function Software() {
  const { t } = useTranslation();
  return (
    <div className="work_co">
      {workImages.map((item, index) => {
        return (
          <div className="containeri" key={index}>
            <img src={item} alt="Avatar" className="Wimage w-100" />
            <div className="middle">
              <h2>{t("Home.SectionH5Tabtitle")}</h2>
              <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
          </div>
        );
      })}

      {/* kqyre qet ndryshim perdori ma shume metodat e js  */}

      {/* <div className="containeri">
                 <img src={workLogo1} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                <h2>{t("Home.SectionH5Tabtitle")}</h2>
                <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
            </div>

            {t("SectionH5").map((item, index) => {
              return (
                <div key={index} className="containeri">
                    <div className={`workLogo${index +1} Wimage`} alt="Avatar" style={{width:'100%'}}/>
                    <div className="middle">
                        <h2>{item.title}</h2>
                        <div className="Wtext">{item.btn}</div>
                    </div>
                </div>
            </div>

            <div className="containeri">
                 <img src={workLogo3} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>{t("Home.SectionH5Tabtitle")}</h2>
                <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
            </div>

            <div className="containeri" >
                 <img src={workLogo4} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>{t("Home.SectionH5Tabtitle")}</h2>
                <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
            </div>

            <div className="containeri" >
                 <img src={workLogo5} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>{t("Home.SectionH5Tabtitle")}</h2>
                <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
            </div>
            <div className="containeri" >
                 <img src={workLogo6} alt="Avatar" className="Wimage" style={{width:'100%'}}/>
                 <div className="middle">
                 <h2>{t("Home.SectionH5Tabtitle")}</h2>
                <div className="Wtext">{t("Home.SectionH5TabBtn")}</div>
            </div>
            </div> */}
    </div>
  );
}

export default Software;
