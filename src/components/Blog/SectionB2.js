import React from 'react';
import { Link } from 'react-router-dom';
import './Style/SectionB2.css';
import { useTranslation } from "react-i18next";

function SectionB2() {
    const { t } = useTranslation();
    return (
        <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2500" className="containeri1 SectionB2">
            <h1>{t("Blog.SectionB2h")}</h1>
            <div className="SectionB2_wrapper">

                <div className="Bbox Bb">
                    <div className="BlogArtickle__img1"/>
                    <h3>{t("Blog.SectionB2a1")}</h3>
                    <Link to="/blog" className="Bbox__link">{t("Blog.SectionB2btn")}</Link>
                </div>
            
                <div className="Bbox Bc">
                    <div className="BlogArtickle__img2"/>
                    <h3>{t("Blog.SectionB2a2")}</h3>
                    <Link to="/blog">{t("Blog.SectionB2btn")}</Link>
                </div>

                <div className="Bbox Bd">
                    <div className="BlogArtickle__img3"/>
                    <h3>{t("Blog.SectionB2a3")}</h3>
                    <Link to="/blog">{t("Blog.SectionB2btn")}</Link>
                </div>

                <div className="Bbox Be">
                    <div className="BlogArtickle__img4"/>
                    <h3>{t("Blog.SectionB2a4")}</h3>
                    <Link to="/blog">{t("Blog.SectionB2btn")}</Link>
                </div>

            </div>

        </div>
    )
}

export default SectionB2
