import React from "react";
import "./SectionH3.css";
import { useTranslation } from "react-i18next";

function Teknologies() {
    const { t } = useTranslation();
    return (

        <div  className="teknologies">
            <h1>{t("Home.SectionH3")}</h1>
            <div className="teknologies__logos">

            {t("Home.SectionH3L").map((item, index) => {
              return (
                <div key={index}>
                    <div className={item.tlogos}/>
                </div>
              );
            })}
            </div>
        </div>

    )

  
}

export default Teknologies;
