import React from 'react';
import { Link } from "react-router-dom";
import './SectionCS3.css';
import { useTranslation } from "react-i18next";

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
                    <Link to="/" className="BannerCS-btnCS3">
                    {t("Blog.SectionCSbtn")}
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SectionCS3
