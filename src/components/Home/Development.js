import React from 'react';
import './SectionH5.css';
import { useTranslation } from "react-i18next";

function Development() {
    const { t } = useTranslation();
    return (
        <div className="work_co">

        {t("SectionH5").map((item, index) => {
              return (
                <div key={index} className="containeri">
                    <div className={`workLogo${index +1} Wimage`} alt="Avatar" style={{width:'100%'}}/>
                    <div className="middle">
                        <h2>{item.title}</h2>
                        <div className="Wtext">{item.btn}</div>
                    </div>
                </div>
              );
            })}
        </div>
    )
}

export default Development;
