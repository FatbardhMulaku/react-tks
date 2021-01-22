import React from 'react';
import "./Styles/SectionM2.css";
import { useTranslation } from "react-i18next";

function SectionM2() {
    const { t } = useTranslation();
    return (
        <div className="SectionM2 container">
            <h3>{t("Management.section_2title")}</h3>
            <p>{t("Management.section_2desc")}</p>
            <div className="row">
                 {t("Management.section_2").map((item, index) => {
                    return( 
                        <div key={index} className="ManagementBox SectionCBS2__Box1 mx-auto">
                            <div className={`ManagementS2_icon${index+1} mx-auto`}/>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    );
                 })}
            </div>
        </div>
    )
}

export default SectionM2
