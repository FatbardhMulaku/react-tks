import React from 'react';
import { Link } from "react-router-dom";
import './SectionCS2.css';
import { useTranslation } from "react-i18next";

function SectionCS2() {
    const { t } = useTranslation();

    return (
        <div className="SectionCS2">
            <div className="SectionCS2Left">
                <h1>{t("Blog.SectionCS2h")}</h1>
                <p>{t("Blog.SectionCS2p")}</p>
                <Link to="/" className="BannerCS-btn">
                {t("Blog.SectionCSbtn")}
                </Link>
            </div>

            <div className="SectionCS2Right">
        
            </div>
        </div>
    )
}

export default SectionCS2
