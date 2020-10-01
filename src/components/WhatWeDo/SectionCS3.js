import React from 'react';
import './SectionCS3.css';
import { useTranslation } from "react-i18next";
import LearnMore from "./../UI/Button/LearnMore";

function SectionCS3() {

    const { t } = useTranslation();
    return (
        <div className="SectionCS3">
            <div  className="SectionCS3__container">
                <div className="SectionCS3__Left">
                    <div className="SectionCS3__Left-img1"></div>
                    <div className="SectionCS3__Left-img2"></div>
                    <div className="SectionCS3__Left-img3"></div>
                </div>
                <div className="SectionCS3__Right">
                    <div className="SectionCS3__RightC">
                    <h1>{t("Blog.SectionCS3h")}</h1>
                    <p>
                    {t("Blog.SectionCS3p")}
                    </p> 
                    <LearnMore link="BannerCS" offset={-90} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SectionCS3
