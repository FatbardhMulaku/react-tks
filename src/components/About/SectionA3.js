import React from 'react';
import './SectionA3.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";

function SectionA3() {
    const { t } = useTranslation();
    return (
        <div className="SectionA3">
            <div className="SectionA3a">
                <h5>{t("About.SectionA3h")}</h5>
                <h1>{t("About.SectionA3hh")}</h1>
                <p>{t("About.SectionA3p")}</p>
                <LearnMore link="SectionA1" offset={-90} />
            </div>
            <div className="SectionA3b">
                <div className="SectionA3b-rrethi">
                    <div className="SectionA3b-img1"/>
                    
                    {t("About.SectionA3").map((item, index) => {
                    return (
                        <div key={index}>
                               <div className={item.class1}><div className={item.class2}/></div>
                        </div>
                    );
                    })}

                </div>
            </div>
        </div>
    )
}

export default SectionA3
